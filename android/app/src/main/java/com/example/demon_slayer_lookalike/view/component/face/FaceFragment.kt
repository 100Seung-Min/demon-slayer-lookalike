package com.example.demon_slayer_lookalike.view.component.face

import android.content.Intent
import android.graphics.Bitmap
import android.graphics.ImageDecoder
import android.media.ThumbnailUtils
import android.provider.MediaStore
import android.view.View
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.view.isVisible
import androidx.navigation.fragment.findNavController
import androidx.navigation.fragment.navArgs
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.databinding.FragmentFaceBinding
import com.example.demon_slayer_lookalike.ml.ModelDemonSlayer
import com.example.demon_slayer_lookalike.utils.imageSize
import com.example.demon_slayer_lookalike.utils.toBuffer
import com.example.demon_slayer_lookalike.view.base.BaseFragment
import kotlin.math.min

class FaceFragment :
    BaseFragment<FragmentFaceBinding>(R.layout.fragment_face) {

    private var maxPos = 0
    private lateinit var image: Bitmap
    private var title = "귀멸의 칼날"

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
        binding.faceFragment = this
        loadArgs()
    }

    private fun loadArgs() {
        val args: FaceFragmentArgs by navArgs()
        title = args.type
    }

    private fun callAi(image: Bitmap) {
        val model = when (title) {
            "귀멸의 칼날" -> ModelDemonSlayer.newInstance(requireContext())
            else -> ModelDemonSlayer.newInstance(requireContext())
        }
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
                    findNavController().navigate(
                        FaceFragmentDirections.actionFaceFragmentToResultFragment(
                            maxPos = maxPos
                        )
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