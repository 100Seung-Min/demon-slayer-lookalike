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
            0 -> R.drawable.ic_ailien
            in 1..39 -> R.drawable.ic_normal
            in 40..59 -> R.drawable.ic_newbie
            in 60..79 -> R.drawable.ic_geines
            in 80..99 -> R.drawable.ic_cheonjae
            else -> R.drawable.ic_god
        })
        result.text = "${quizViewModel.getScore()}점"
    }

    fun onClick(view: View) {
        when(view) {
            binding.backBtn -> findNavController().popBackStack()
        }
    }
}