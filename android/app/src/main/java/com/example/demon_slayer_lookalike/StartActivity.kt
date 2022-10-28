package com.example.demon_slayer_lookalike

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.example.demon_slayer_lookalike.databinding.ActivityStartBinding

class StartActivity: AppCompatActivity() {
    lateinit var binding: ActivityStartBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityStartBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }

    fun start(view: View) {
        startActivity(Intent(this, MainActivity::class.java))
    }
}