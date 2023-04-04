package com.example.demon_slayer_lookalike.view.component.menu

import android.view.View
import androidx.navigation.fragment.findNavController
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.databinding.FragmentMenuBinding
import com.example.demon_slayer_lookalike.view.base.BaseFragment

class MenuFragment : BaseFragment<FragmentMenuBinding>(R.layout.fragment_menu) {
    override fun createView() {
        binding.menuFragment = this
    }

    private fun moveFaceFragment(type: String) =
        findNavController().navigate(MenuFragmentDirections.actionMenuFragmentToFaceFragment(type = type))

    fun onClick(view: View) {
        when (view) {
            binding.demonSlayerBtn -> {
                moveFaceFragment("귀멸의 칼날")
            }
            binding.ghibriBtn -> {
                moveFaceFragment("지브리 스튜디오")
            }
            binding.shinChanBtn -> {
                moveFaceFragment("짱구는 못 말려")
            }
        }
    }
}