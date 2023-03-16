package com.example.demon_slayer_lookalike.view.component.demonslayer

import android.content.Intent
import android.graphics.Bitmap
import android.graphics.ImageDecoder
import android.media.ThumbnailUtils
import android.provider.MediaStore
import android.view.View
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.view.isVisible
import androidx.navigation.fragment.findNavController
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.databinding.FragmentDemonSlayerBinding
import com.example.demon_slayer_lookalike.ml.ModelDemonSlayer
import com.example.demon_slayer_lookalike.utils.imageSize
import com.example.demon_slayer_lookalike.utils.toBuffer
import com.example.demon_slayer_lookalike.view.base.BaseFragment
import kotlin.math.min

class DemonSlayerFragment :
    BaseFragment<FragmentDemonSlayerBinding>(R.layout.fragment_demon_slayer) {

    private var maxPos = 0
    private lateinit var image: Bitmap

    private val getContent =
        registerForActivityResult(ActivityResultContracts.GetContent()) { imageUri ->
            if (imageUri != null) {
                image = ImageDecoder.decodeBitmap(
                    ImageDecoder.createSource(
                        requireActivity().contentResolver,
                        imageUri
                    )
                ).copy(Bitmap.Config.RGBA_F16, true)
                viewImage()
            }
        }

    private val getPicture =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) {
            val imageUri = it.data?.extras?.get("data")
            if (imageUri != null) {
                image = imageUri as Bitmap
                viewImage()
            }
        }

    override fun createView() {
        binding.demonSlayerFragment = this
    }

    private fun callAi(image: Bitmap) {
        val model = ModelDemonSlayer.newInstance(requireContext())
        val outputs = model.process(image.toBuffer())
        val outputFeature0 = outputs.outputFeature0AsTensorBuffer
        val confidences = outputFeature0.floatArray
        confidences.forEachIndexed { index, fl ->
            if (fl == confidences.maxOrNull()!!) maxPos = index
        }
        model.close()
    }

    private fun viewImage() {
        val dimension = min(image.width, image.height)
        image = ThumbnailUtils.extractThumbnail(image, dimension, dimension)
        binding.img.apply {
            visibility = View.VISIBLE
            setImageBitmap(image)
        }
        image = Bitmap.createScaledBitmap(image, imageSize, imageSize, false)
        callAi(image)
        binding.moveCamera.visibility = View.GONE
        binding.moveGallery.visibility = View.GONE
        binding.rePhoto.visibility = View.VISIBLE
    }

    fun onClick(view: View) {
        when (view) {
            binding.moveCamera -> {
                getPicture.launch(Intent(MediaStore.ACTION_IMAGE_CAPTURE))
            }
            binding.moveGallery -> {
                getContent.launch("image/*")
            }
            binding.moveResultBtn -> {
                if (binding.img.isVisible) {
                    val action =
                        DemonSlayerFragmentDirections.actionDemonSlayerFragmentToResultFragment(
                            maxPos = maxPos
                        )
                    findNavController().navigate(
                        action
                    )
                }
            }
            binding.moveFirstBtn -> {
                findNavController().popBackStack()
            }
            binding.rePhoto -> {
                with(binding) {
                    img.visibility = View.GONE
                    moveCamera.visibility = View.VISIBLE
                    moveGallery.visibility = View.VISIBLE
                    rePhoto.visibility = View.GONE
                }
            }
        }
    }
}