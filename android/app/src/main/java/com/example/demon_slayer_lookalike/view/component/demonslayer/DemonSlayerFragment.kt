package com.example.demon_slayer_lookalike.view.component.demonslayer

import android.app.Activity.RESULT_OK
import android.content.Intent
import android.graphics.Bitmap
import android.media.ThumbnailUtils
import android.view.View
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

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == 1 && resultCode == RESULT_OK) {
            var image: Bitmap = data?.extras?.get("data") as Bitmap
            val dimension = min(image.width, image.height)
            image = ThumbnailUtils.extractThumbnail(image, dimension, dimension)
            binding.img.setImageBitmap(image)
            image = Bitmap.createScaledBitmap(image, imageSize, imageSize, false)
            callAi(image)
            binding.addPhoto.visibility = View.GONE
            binding.rePhoto.visibility = View.VISIBLE
        }
        super.onActivityResult(requestCode, resultCode, data)
    }

    fun onClick(view: View) {
        when (view) {
            binding.addPhoto -> {

            }
            binding.moveResultBtn -> {
                val action =
                    DemonSlayerFragmentDirections.actionDemonSlayerFragmentToResultFragment(maxPos = maxPos)
                findNavController().navigate(
                    action
                )
            }
            binding.moveFirstBtn -> {
                findNavController().popBackStack()
            }
        }
    }

    fun picture(view: View) {
//        if (checkSelfPermission(Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED) {
//            val cameraIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
//            startActivityForResult(cameraIntent, 1)
//        } else {
//            requestPermissions(arrayOf(Manifest.permission.CAMERA), 100)
//        }
    }

    fun result(view: View) {
    }

    fun back(view: View) {
    }
}