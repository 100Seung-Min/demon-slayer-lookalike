package com.example.demon_slayer_lookalike.view.component.face

import android.view.View
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.GridLayoutManager
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.databinding.FragmentFaceMenuBinding
import com.example.demon_slayer_lookalike.dto.Menu
import com.example.demon_slayer_lookalike.view.adapter.MenuAdapter
import com.example.demon_slayer_lookalike.view.base.BaseFragment

class FaceMenuFragment : BaseFragment<FragmentFaceMenuBinding>(R.layout.fragment_face_menu) {

    private lateinit var menuAdapter: MenuAdapter

    private val menuList = listOf(
        Menu(R.drawable.poster_demonslayer, "귀멸의 칼날"),
        Menu(R.drawable.poster_ghibri, "지브리 스튜디오"),
        Menu(R.drawable.poster_shin_chan, "짱구는 못 말려"),
        Menu(R.drawable.poster_doraemon, "도라에몽"),
        Menu(R.drawable.poster_conan, "명탐정 코난"),
        Menu(R.drawable.poster_naruto, "나루토"),
        Menu(R.drawable.poster_onepiece, "원피스")
    )

    override fun createView() {
        binding.menuFragment = this
        setRecyclerViewAdapter()
    }

    private fun setRecyclerViewAdapter() {
        menuAdapter = MenuAdapter(object : MenuAdapter.OnItemClickListener {
            override fun selectMenu(type: String) {
                moveFaceFragment(type = type)
            }
        })
        menuAdapter.submitList(menuList)
        binding.menuRecyclerView.apply {
            adapter = menuAdapter
            layoutManager = GridLayoutManager(context, 2)
        }
    }

    private fun moveFaceFragment(type: String) =
        findNavController().navigate(FaceMenuFragmentDirections.actionMenuFragmentToFaceFragment(type = type))

    fun onClick(view: View) {
        when(view) {
            binding.backBtn -> findNavController().popBackStack()
        }
    }
}