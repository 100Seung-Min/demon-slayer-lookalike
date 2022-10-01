package com.example.demon_slayer_lookalike

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.media.ThumbnailUtils
import android.os.Bundle
import android.provider.MediaStore
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.example.demon_slayer_lookalike.databinding.ActivityMainBinding
import com.example.demon_slayer_lookalike.ml.Model
import org.tensorflow.lite.DataType
import org.tensorflow.lite.support.tensorbuffer.TensorBuffer
import java.nio.ByteBuffer
import java.nio.ByteOrder
import kotlin.math.min

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding
    val imageSize = 224
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.takePicture.setOnClickListener {
            if (checkSelfPermission(Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED) {
                val cameraIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
                startActivityForResult(cameraIntent, 1)
            } else {
                requestPermissions(arrayOf(Manifest.permission.CAMERA), 100)
            }
        }
    }

    private fun callAi(image: Bitmap) {
        val model = Model.newInstance(applicationContext)
        val inputFeature0 =
            TensorBuffer.createFixedSize(intArrayOf(1, 224, 224, 3), DataType.FLOAT32)
        val byteBuffer = ByteBuffer.allocateDirect(4 * imageSize * imageSize * 3)
        byteBuffer.order(ByteOrder.nativeOrder())
        val intValues = IntArray(imageSize * imageSize)
        image.getPixels(intValues, 0, image.width, 0, 0, image.width, image.height)
        var pixel = 0
        for (i in 0 until imageSize) {
            for (j in 0 until imageSize) {
                val value = intValues[pixel++]
                byteBuffer.putFloat(((value shr 16) and 0xFF) * (1f / 255f))
                byteBuffer.putFloat(((value shr 8) and 0xFF) * (1f / 255f))
                byteBuffer.putFloat((value and 0xFF) * (1f / 255f))
            }
        }
        inputFeature0.loadBuffer(byteBuffer)
        val outputs = model.process(inputFeature0)
        val outputFeature0 = outputs.outputFeature0AsTensorBuffer
        val confidences = outputFeature0.floatArray
        var maxPos = 0
        var maxConfidence = 0f
        for (i in confidences.indices) {
            if(confidences[i] > maxConfidence) {
                maxConfidence = confidences[i]
                maxPos = i
            }
        }
        val classes = arrayOf(
            "카마도 탄지로",
            "카마도 네즈코",
            "아가츠마 젠이츠",
            "하시바라 이노스케",
            "렌고쿠 쿄쥬로",
            "우즈이 텐겐",
            "칸로지 미츠리",
            "히메지마 교메이",
            "토키토 무이치로",
            "이구로 오바나이",
            "토미오카 기유",
            "코쵸우 시노부",
            "시나즈가와 사네미",
            "코쵸우 카나에",
            "우로코다키 사콘지",
            "쿠와지마 지고로",
            "츠유리 카나오",
            "시나즈가와 겐야",
            "칸자키 아오이",
            "카이가쿠",
            "무라타",
            "우부야시키 카가야",
            "하가네즈카 호타루",
            "키부츠지 무잔",
            "스사마루",
            "야하바",
            "루이",
            "코쿠시보",
            "아카자",
            "도우마",
            "굣코",
            "다키",
            "한텐구",
            "나키메",
            "쿄우가이",
            "엔무",
            "타마요",
            "유시로",
            "규타로"
        )
        binding.name.text = classes[maxPos]
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
        }
        super.onActivityResult(requestCode, resultCode, data)
    }
}