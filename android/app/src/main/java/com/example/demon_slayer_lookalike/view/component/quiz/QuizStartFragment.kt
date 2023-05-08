package com.example.demon_slayer_lookalike.view.component.quiz

import android.view.View
import androidx.fragment.app.activityViewModels
import androidx.navigation.fragment.findNavController
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.databinding.FragmentQuizStartBinding
import com.example.demon_slayer_lookalike.view.base.BaseFragment
import com.example.demon_slayer_lookalike.viewmodel.QuizViewModel

class QuizStartFragment: BaseFragment<FragmentQuizStartBinding>(R.layout.fragment_quiz_start) {
    private val quizViewModel by activityViewModels<QuizViewModel>()

    override fun createView() {
        binding.quizStartFragment = this
        quizViewModel.shuffleQuizList()
    }

    fun onClick(view: View) {
        when(view) {
            binding.backBtn -> findNavController().popBackStack()
            binding.easyBtn, binding.hardBtn -> {
                quizViewModel.setMode(view.id)
                findNavController().navigate(R.id.action_quizStartFragment_to_quizFragment)
            }
        }
    }
}