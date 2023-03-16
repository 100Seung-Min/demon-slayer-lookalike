package com.example.demon_slayer_lookalike.view.component.result

import android.view.View
import androidx.navigation.fragment.findNavController
import androidx.navigation.fragment.navArgs
import com.bumptech.glide.Glide
import com.bumptech.glide.load.engine.DiskCacheStrategy
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.character_list.demonSlayer
import com.example.demon_slayer_lookalike.databinding.FragmentResultBinding
import com.example.demon_slayer_lookalike.view.base.BaseFragment

class ResultFragment : BaseFragment<FragmentResultBinding>(R.layout.fragment_result) {
    override fun createView() {
        binding.resultFragment = this
        val args: ResultFragmentArgs by navArgs()
        setResult(maxPos = args.maxPos)
    }

    private fun setResult(maxPos: Int) {
        binding.result.text = demonSlayer[maxPos].name
        Glide.with(requireActivity())
            .load(demonSlayer[maxPos].imgId)
            .diskCacheStrategy(DiskCacheStrategy.SOURCE)
            .into(binding.image)
    }

    fun onClick(view: View) {
        when (view) {
            binding.moveFirstBtn -> {
                findNavController().popBackStack(R.id.startFragment, false)
            }
        }
    }
}