package com.example.demon_slayer_lookalike.view.component.main

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.media.ThumbnailUtils
import android.os.Bundle
import android.provider.MediaStore
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.example.demon_slayer_lookalike.databinding.ActivityMainBinding
import com.example.demon_slayer_lookalike.ml.ModelDemonSlayer
import com.example.demon_slayer_lookalike.utils.imageSize
import com.example.demon_slayer_lookalike.utils.toBuffer
import com.example.demon_slayer_lookalike.view.component.demonslayer.ResultActivity
import kotlin.math.min

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private var maxPos = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }

    private fun callAi(image: Bitmap) {
        val model = ModelDemonSlayer.newInstance(applicationContext)
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

    fun picture(view: View) {
        if (checkSelfPermission(Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED) {
            val cameraIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
            startActivityForResult(cameraIntent, 1)
        } else {
            requestPermissions(arrayOf(Manifest.permission.CAMERA), 100)
        }
    }

    fun result(view: View) {
        val intent = Intent(this, ResultActivity::class.java)
        intent.putExtra("maxPos", maxPos)
        startActivity(intent)
        finish()
    }

    fun back(view: View) {
        finish()
    }
}