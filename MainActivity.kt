package com.linelimalua.minecraftlauncher

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.button.MaterialButton

class MainActivity : AppCompatActivity() {
    private lateinit var btnLogin: MaterialButton
    private lateinit var btnVersions: MaterialButton
    private lateinit var btnPlay: MaterialButton

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        initViews()
        setupListeners()
    }

    private fun initViews() {
        btnLogin = findViewById(R.id.btn_login)
        btnVersions = findViewById(R.id.btn_versions)
        btnPlay = findViewById(R.id.btn_play)
    }

    private fun setupListeners() {
        btnLogin.setOnClickListener {
            // Abrir tela de login
        }

        btnVersions.setOnClickListener {
            // Abrir versões
        }

        btnPlay.setOnClickListener {
            // Jogar
        }
    }
}
