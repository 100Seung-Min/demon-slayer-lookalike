package com.example.demon_slayer_lookalike.view.component.result

import android.view.View
import androidx.navigation.fragment.findNavController
import androidx.navigation.fragment.navArgs
import com.bumptech.glide.Glide
import com.bumptech.glide.load.engine.DiskCacheStrategy
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.character_list.*
import com.example.demon_slayer_lookalike.databinding.FragmentResultBinding
import com.example.demon_slayer_lookalike.view.base.BaseFragment

class ResultFragment : BaseFragment<FragmentResultBinding>(R.layout.fragment_result) {
    override fun createView() {
        binding.resultFragment = this
        val args: ResultFragmentArgs by navArgs()
        setResult(maxPos = args.maxPos, type = args.type)
    }

    private fun setResult(maxPos: Int, type: String) {
        val resultArray = when (type) {
            "귀멸의 칼날" -> demonSlayer
            "지브리 스튜디오" -> ghibri
            "짱구는 못 말려" -> shinChan
            "도라에몽" -> doraemon
            "명탐정 코난" -> conan
            "나루토" -> onePiece
            "원피스" -> onePiece
            else -> demonSlayer
        }
        binding.result.text = resultArray[maxPos].name
        Glide.with(requireActivity())
            .load(resultArray[maxPos].imgId)
            .diskCacheStrategy(DiskCacheStrategy.SOURCE)
            .into(binding.image)
    }

    fun onClick(view: View) {
        when (view) {
            binding.moveFirstBtn -> {
                findNavController().popBackStack(R.id.menuFragment, false)
            }
        }
    }
}