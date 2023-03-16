package com.example.demon_slayer_lookalike.view.component.result

import android.view.View
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.databinding.FragmentResultBinding
import com.example.demon_slayer_lookalike.view.base.BaseFragment

class ResultFragment : BaseFragment<FragmentResultBinding>(R.layout.fragment_result) {
    override fun createView() {
        binding.resultFragment = this
    }

    fun onClick(view: View) {
        when (view) {
            binding.moveFirstBtn -> {

            }
        }
    }
}