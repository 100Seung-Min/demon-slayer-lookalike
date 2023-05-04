package com.example.demon_slayer_lookalike.viewmodel

import androidx.lifecycle.ViewModel
import com.example.demon_slayer_lookalike.character_list.conan
import com.example.demon_slayer_lookalike.character_list.demonSlayer
import com.example.demon_slayer_lookalike.character_list.doraemon
import com.example.demon_slayer_lookalike.character_list.ghibri
import com.example.demon_slayer_lookalike.character_list.onePiece
import com.example.demon_slayer_lookalike.character_list.shinChan
import com.example.demon_slayer_lookalike.dto.Character

class QuizViewModel: ViewModel() {
    private var quizList = arrayOf(*demonSlayer, *ghibri, *shinChan, *doraemon, *conan, *onePiece)
    private var answerList = arrayOf<Int>()
    private var score = 0

    fun shuffleQuizList() {
        quizList.shuffle()
        while (answerList.size < 20) {
            answerList = answerList.plus((1 until quizList.size - 2).random())
            answerList = answerList.toSet().toTypedArray()
        }
    }

    fun getQuiz(position: Int): Array<Character> = arrayOf(quizList[answerList[position] - 1], quizList[answerList[position]], quizList[answerList[position] + 1], quizList[answerList[position] + 2]).apply { shuffle() }

    fun getAnswer(position: Int): Character = quizList[answerList[position]]

    fun plusScore() = score++

    fun getScore(): Int = score * 5
}