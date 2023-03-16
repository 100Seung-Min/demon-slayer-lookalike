package com.example.demon_slayer_lookalike.utils

import android.graphics.Bitmap
import org.tensorflow.lite.DataType
import org.tensorflow.lite.support.tensorbuffer.TensorBuffer
import java.nio.ByteBuffer
import java.nio.ByteOrder

const val imageSize = 224

fun Bitmap.toBuffer(): TensorBuffer {
    val inputFeature0 =
        TensorBuffer.createFixedSize(intArrayOf(1, 224, 224, 3), DataType.FLOAT32)
    val byteBuffer = ByteBuffer.allocateDirect(4 * imageSize * imageSize * 3)
    byteBuffer.order(ByteOrder.nativeOrder())
    val intValues = IntArray(imageSize * imageSize)
    this.getPixels(intValues, 0, this.width, 0, 0, this.width, this.height)
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
    return inputFeature0
}