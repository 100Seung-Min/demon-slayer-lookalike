package com.example.demon_slayer_lookalike.view.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.example.demon_slayer_lookalike.databinding.ItemMenuBinding
import com.example.demon_slayer_lookalike.dto.Menu

class MenuAdapter(val itemClickListener: OnItemClickListener): ListAdapter<Menu, MenuAdapter.MenuViewHolder>(diffUtil) {

    interface OnItemClickListener {
        fun selectMenu(type: String)
    }

    companion object {
        val diffUtil = object : DiffUtil.ItemCallback<Menu>() {
            override fun areItemsTheSame(oldItem: Menu, newItem: Menu): Boolean {
                return oldItem == newItem
            }

            override fun areContentsTheSame(oldItem: Menu, newItem: Menu): Boolean {
                return oldItem == newItem
            }
        }
    }

    inner class MenuViewHolder(val binding: ItemMenuBinding): RecyclerView.ViewHolder(binding.root) {
        fun bind(item: Menu) = with(binding) {
            menuItemLayout.setOnClickListener {
                itemClickListener.selectMenu(item.name)
            }
            menuImg.setBackgroundResource(item.imgId)
            menuName.text = item.name
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MenuViewHolder =
        MenuViewHolder(
            ItemMenuBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )

    override fun onBindViewHolder(holder: MenuViewHolder, position: Int) {
        holder.bind(currentList[position])
    }
}