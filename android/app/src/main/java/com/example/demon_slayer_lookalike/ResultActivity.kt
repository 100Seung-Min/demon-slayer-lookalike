package com.example.demon_slayer_lookalike

import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.bumptech.glide.Glide
import com.example.demon_slayer_lookalike.character.demonSlayer
import com.example.demon_slayer_lookalike.databinding.ActivityResultBinding

class ResultActivity : AppCompatActivity() {
    lateinit var binding: ActivityResultBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityResultBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.result.text = demonSlayer[intent.getIntExtra("maxPos", 0)].name
        Glide.with(this).load(demonSlayer[intent.getIntExtra("maxPos", 0)].imgId)
            .into(binding.image)
    }

    fun reStart(view: View) {
        finish()
    }
}