package com.example.demon_slayer_lookalike.view.component.quiz

import android.view.View
import androidx.fragment.app.activityViewModels
import androidx.navigation.fragment.findNavController
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.databinding.FragmentQuizResultBinding
import com.example.demon_slayer_lookalike.view.base.BaseFragment
import com.example.demon_slayer_lookalike.viewmodel.QuizViewModel

class QuizResultFragment: BaseFragment<FragmentQuizResultBinding>(R.layout.fragment_quiz_result) {
    private val quizViewModel by activityViewModels<QuizViewModel>()

    override fun createView() {
        binding.quizResultFragment = this
        viewResult()
    }

    private fun viewResult() = with(binding) {
        img.setBackgroundResource(when(quizViewModel.getScore()) {
            0 -> R.drawable.bg_ailien
            in 1..40 -> R.drawable.bg_normal
            in 41..60 -> R.drawable.bg_newbie
            in 61..80 -> R.drawable.bg_ailien
            in 81..99 -> R.drawable.bg_ailien
            else -> R.drawable.bg_ailien
        })
        result.text = "${quizViewModel.getScore()}점"
    }

    fun onClick(view: View) {
        when(view) {
            binding.backBtn -> findNavController().popBackStack()
        }
    }
}