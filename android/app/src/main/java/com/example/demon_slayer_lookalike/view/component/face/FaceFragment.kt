package com.example.demon_slayer_lookalike.view.component.face

import android.Manifest
import android.app.AlertDialog
import android.content.Intent
import android.graphics.Bitmap
import android.graphics.ImageDecoder
import android.media.ThumbnailUtils
import android.net.Uri
import android.provider.MediaStore
import android.provider.Settings
import android.view.View
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.app.ActivityCompat
import androidx.core.view.isVisible
import androidx.navigation.fragment.findNavController
import androidx.navigation.fragment.navArgs
import com.example.demon_slayer_lookalike.R
import com.example.demon_slayer_lookalike.databinding.FragmentFaceBinding
import com.example.demon_slayer_lookalike.ml.*
import com.example.demon_slayer_lookalike.utils.*
import com.example.demon_slayer_lookalike.view.base.BaseFragment
import kotlin.math.min


class FaceFragment :
    BaseFragment<FragmentFaceBinding>(R.layout.fragment_face) {

    private var maxPos = 0
    private lateinit var image: Bitmap
    private var title = "귀멸의 칼날"
    private val requiredPermission = arrayOf(
        Manifest.permission.CAMERA
    )

    private lateinit var demonSlayerModel: ModelDemonSlayer
    private lateinit var ghibriModel: ModelGhibri
    private lateinit var shinChanModel: ModelShinChan
    private lateinit var doraemonModel: ModelDoraemon
    private lateinit var conanModel: ModelConan
    private lateinit var narutoModel: ModelNaruto

    private val getContent =
        registerForActivityResult(ActivityResultContracts.GetContent()) { imageUri ->
            if (imageUri != null) {
                image = ImageDecoder.decodeBitmap(
                    ImageDecoder.createSource(
                        requireActivity().contentResolver,
                        imageUri
                    )
                ).copy(Bitmap.Config.RGBA_F16, true)
                viewImage()
            }
        }

    private val getPicture =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) {
            val imageUri = it.data?.extras?.get("data")
            if (imageUri != null) {
                image = imageUri as Bitmap
                viewImage()
            }
        }

    override fun createView() {
        binding.faceFragment = this
        loadArgs()
    }

    private fun loadArgs() {
        val args: FaceFragmentArgs by navArgs()
        title = args.type
        binding.titleTxt.text = "$title 닮은 꼴 찾기"
    }

    private fun callAi(image: Bitmap) = when (title) {
        "귀멸의 칼날" -> createModel(
            createModelAction = {
                demonSlayerModel = ModelDemonSlayer.newInstance(requireContext())
                demonSlayerModel.process(image.toBuffer()).outputFeature0AsTensorBuffer.floatArray
            },
            closeModelAction = { demonSlayerModel.close() }
        )
        "지브리 스튜디오" -> createModel(
            createModelAction = {
                ghibriModel = ModelGhibri.newInstance(requireContext())
                ghibriModel.process(image.toBuffer()).outputFeature0AsTensorBuffer.floatArray
            },
            closeModelAction = { ghibriModel.close() }
        )
        "짱구는 못 말려" -> createModel(
            createModelAction = {
                shinChanModel = ModelShinChan.newInstance(requireContext())
                shinChanModel.process(image.toBuffer()).outputFeature0AsTensorBuffer.floatArray
            },
            closeModelAction = { shinChanModel.close() }
        )
        "도라에몽" -> createModel(
            createModelAction = {
                doraemonModel = ModelDoraemon.newInstance(requireContext())
                doraemonModel.process(image.toBuffer()).outputFeature0AsTensorBuffer.floatArray
            },
            closeModelAction = { doraemonModel.close() }
        )
        "명탐정 코난" -> createModel(
            createModelAction = {
                conanModel = ModelConan.newInstance(requireContext())
                conanModel.process(image.toBuffer()).outputFeature0AsTensorBuffer.floatArray
            },
            closeModelAction = { conanModel.close() }
        )
        "나루토" -> createModel(
            createModelAction = {
                narutoModel = ModelNaruto.newInstance(requireContext())
                narutoModel.process(image.toBuffer()).outputFeature0AsTensorBuffer.floatArray
            },
            closeModelAction = { narutoModel.close() }
        )
        else -> createModel(
            createModelAction = {
                demonSlayerModel = ModelDemonSlayer.newInstance(requireContext())
                demonSlayerModel.process(image.toBuffer()).outputFeature0AsTensorBuffer.floatArray
            },
            closeModelAction = { demonSlayerModel.close() }
        )
    }

    private fun createModel(createModelAction: () -> FloatArray, closeModelAction: () -> Unit) {
        val confidences = createModelAction()
        confidences.forEachIndexed { index, fl ->
            if (fl == confidences.maxOrNull()!!) maxPos = index
        }
        closeModelAction()
    }

    private fun viewImage() {
        val dimension = min(image.width, image.height)
        image = ThumbnailUtils.extractThumbnail(image, dimension, dimension)
        binding.img.apply {
            visibility = View.VISIBLE
            setImageBitmap(image)
        }
        image = Bitmap.createScaledBitmap(image, imageSize, imageSize, false)
        callAi(image)
        binding.moveCamera.visibility = View.GONE
        binding.moveGallery.visibility = View.GONE
        binding.rePhoto.visibility = View.VISIBLE
    }

    fun onClick(view: View) {
        when (view) {
            binding.moveCamera -> {
                if (checkPermission(requireContext(), *requiredPermission)) {
                    getPicture.launch(Intent(MediaStore.ACTION_IMAGE_CAPTURE))
                } else {
                    if (isLastPermissionRequest(requireActivity(), *requiredPermission)) {
                        val alertDialog = AlertDialog.Builder(context)
                        alertDialog.setTitle("앱 권한 설정")
                        alertDialog.setMessage("설정으로 이동합니다.")
                        alertDialog.setPositiveButton("확인") { dialogInterface, _ ->
                            val intent: Intent =
                                Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS).setData(
                                    Uri.parse(
                                        "package:" + requireActivity().applicationContext.packageName
                                    )
                                )
                            startActivity(intent)
                            dialogInterface.cancel()
                        }

                        alertDialog.setNegativeButton("취소") { dialogInterface, i -> dialogInterface.cancel() }

                        alertDialog.show()
                    } else {
                        ActivityCompat.requestPermissions(
                            requireActivity(),
                            requiredPermission,
                            permissionRequestCode
                        )
                    }
                }

            }
            binding.moveGallery -> {
                getContent.launch("image/*")
            }
            binding.moveResultBtn -> {
                if (binding.img.isVisible) {
                    findNavController().navigate(
                        FaceFragmentDirections.actionFaceFragmentToResultFragment(
                            type = title,
                            maxPos = maxPos
                        )
                    )
                }
            }
            binding.moveFirstBtn -> {
                findNavController().popBackStack()
            }
            binding.rePhoto -> {
                with(binding) {
                    img.visibility = View.GONE
                    moveCamera.visibility = View.VISIBLE
                    moveGallery.visibility = View.VISIBLE
                    rePhoto.visibility = View.GONE
                }
            }
        }
    }
}