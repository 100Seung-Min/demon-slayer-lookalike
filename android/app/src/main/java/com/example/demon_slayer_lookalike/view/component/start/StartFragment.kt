package com.example.demon_slayer_lookalike.view.component.start

import android.view.View
import androidx.navigation.fragment.findNavController
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.databinding.FragmentStartBinding
import com.example.demon_slayer_lookalike.view.base.BaseFragment

class StartFragment : BaseFragment<FragmentStartBinding>(R.layout.fragment_start) {
    override fun createView() {
        binding.startFragment = this
    }

    fun onClick(view: View) {
        when (view) {
            binding.moveMenuBtn -> findNavController().navigate(R.id.action_startFragment_to_menuFragment)
            binding.moveQuizBtn -> findNavController().navigate(R.id.action_startFragment_to_quizStartFragment)
        }
    }
}