package com.example.exerccio2;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    EditText edtUsuario;
    EditText edtSenha;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        edtUsuario = (EditText) findViewById(R.id.edtUsuario);
        edtSenha = (EditText) findViewById(R.id.edtSenha);
    }

    public void onLoginClick(View v){

        String usuario = edtUsuario.getText().toString();
        String senha = edtSenha.getText().toString();

        if(usuario.equals("admin") && senha.equals("123")){
            Intent MainActivity2 = new Intent(MainActivity.this, com.example.exerccio2.MainActivity2.class);
            startActivity(MainActivity2);
        }else{
            showMessage("Erro!", "Usuário ou senha inválidos");
        }
    }

    private void showMessage(String title, String msg) {
        AlertDialog.Builder dialg = new AlertDialog.Builder(this);
        dialg.setTitle(title);
        dialg.setMessage(msg);
        dialg.setNeutralButton("Ok", null);
        dialg.show();
    }
}