package com.example.demon_slayer_lookalike.utils

import android.app.Activity
import android.content.Context
import android.content.pm.PackageManager
import androidx.core.app.ActivityCompat

const val permissionRequestCode = 100

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

fun isLastPermissionRequest(activity: Activity, vararg permissionList: String): Boolean {
    permissionList.forEach { permission ->
        if (ActivityCompat.shouldShowRequestPermissionRationale(activity, permission)) {
            return false
        }
    }
    return true
}