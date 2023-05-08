package com.example.demon_slayer_lookalike.view.component.quiz

import android.os.Handler
import android.view.View
import androidx.appcompat.widget.AppCompatButton
import androidx.core.content.ContextCompat
import androidx.fragment.app.activityViewModels
import androidx.navigation.fragment.findNavController
import androidx.navigation.fragment.navArgs
import com.bumptech.glide.Glide
import com.bumptech.glide.load.engine.DiskCacheStrategy
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.databinding.FragmentQuizBinding
import com.example.demon_slayer_lookalike.dto.Character
import com.example.demon_slayer_lookalike.view.base.BaseFragment
import com.example.demon_slayer_lookalike.viewmodel.QuizViewModel

class QuizFragment: BaseFragment<FragmentQuizBinding>(R.layout.fragment_quiz) {
    private val quizViewModel by activityViewModels<QuizViewModel>()
    private var position = 0
    private lateinit var answer: Character

    override fun createView() {
        binding.quizFragment = this
        loadArgs()
        setQuiz()
    }

    private fun loadArgs() {
        val args: QuizFragmentArgs by navArgs()
        position = args.position
        answer = quizViewModel.getAnswer(position)
    }

    private fun setQuiz() = with(binding) {
        val answerList = quizViewModel.getQuiz(position)
        Glide.with(requireActivity())
            .load(answer.imgId)
            .diskCacheStrategy(DiskCacheStrategy.SOURCE)
            .into(img)
        if (quizViewModel.isEasyMode()) {
            hardAnswerLayout.visibility = View.GONE
            arrayOf(firstAnswer, secondAnswer, thirdAnswer, forthAnswer).forEachIndexed { i, answer ->
                answer.text = answerList[i].name
            }
        } else {
            answerInput.backgroundTintList = ContextCompat.getColorStateList(requireContext(), R.color.darkBlue)
            easyAnswerLayout.visibility = View.GONE
        }
    }

    private fun isAnswer(isAnswer: Boolean, selectView: AppCompatButton) {
        if (isAnswer) {
            selectView.setBackgroundResource(R.drawable.bg_answer)
            quizViewModel.plusScore()
        } else {
            selectView.setBackgroundResource(R.drawable.bg_wrong)
        }
        if(quizViewModel.isEasyMode()) {
            arrayOf(binding.firstAnswer, binding.secondAnswer, binding.thirdAnswer, binding.forthAnswer).forEach {
                if (it.text == answer.name) it.setBackgroundResource(R.drawable.bg_answer)
                it.isClickable = false
            }
        } else {
            selectView.isClickable = false
        }
    }

    private fun nextQuiz(position: Int) {
        Handler().postDelayed({
            if (position >= 19) findNavController().navigate(R.id.action_quizFragment_to_quizResultFragment) else findNavController().navigate(QuizFragmentDirections.actionQuizFragmentSelf(position = position + 1))
        }, 1000)
    }

    fun onClick(view: View) {
        when(view) {
            binding.firstAnswer -> {
                isAnswer(binding.firstAnswer.text == answer.name, binding.firstAnswer)
                nextQuiz(position)
            }
            binding.secondAnswer -> {
                isAnswer(binding.secondAnswer.text == answer.name, binding.secondAnswer)
                nextQuiz(position)
            }
            binding.thirdAnswer -> {
                isAnswer(binding.thirdAnswer.text == answer.name, binding.thirdAnswer)
                nextQuiz(position)
            }
            binding.forthAnswer -> {
                isAnswer(binding.forthAnswer.text == answer.name, binding.forthAnswer)
                nextQuiz(position)
            }
            binding.submitBtn -> {
                isAnswer(binding.answerInput.text.toString() == answer.name, binding.submitBtn)
                nextQuiz(position)
            }
        }
    }
}