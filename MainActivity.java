package com.linelimalua.minecraftlauncher;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        Button btnPlay = findViewById(R.id.btn_play);
        Button btnLogin = findViewById(R.id.btn_login);
        
        btnPlay.setOnClickListener(v -> {
            Toast.makeText(MainActivity.this, "Iniciando Minecraft...", Toast.LENGTH_SHORT).show();
        });
        
        btnLogin.setOnClickListener(v -> {
            Toast.makeText(MainActivity.this, "Abrindo login...", Toast.LENGTH_SHORT).show();
        });
    }
}
