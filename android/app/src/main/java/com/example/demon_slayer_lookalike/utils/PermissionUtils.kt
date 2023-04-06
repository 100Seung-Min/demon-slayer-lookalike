package com.example.demon_slayer_lookalike.utils

import android.content.Context
import android.content.pm.PackageManager
import androidx.core.app.ActivityCompat

fun checkPermission(context: Context, vararg permissionList: String): Boolean {
    permissionList.forEach { permission ->
        if (ActivityCompat.checkSelfPermission(
                context,
                permission
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            return false
        }
    }
    return true
}