package com.example.exerccio1;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    EditText N1;
    EditText N2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        N1 = (EditText) findViewById(R.id.primeiroNumero);
        N2 = (EditText) findViewById(R.id.segundoNumero);
    }

    public void onSomarClick(View v){
        String n1 = N1.getText().toString();
        String n2 = N2.getText().toString();

        if(N1.getText().length() == 0){
            N1.setError("Campo Vazio!");
        }else if(N2.getText().length() == 0) {
            N2.setError("Campo Vazio!");
        }else{
            double numero1 = Double.parseDouble(n1);
            double numero2 = Double.parseDouble(n2);
            double result = numero1+numero2;

            AlertDialog.Builder msg = new AlertDialog.Builder(this);

            msg.setTitle("Calculado com Sucesso!");
            msg.setMessage("Resultado da Soma: " + result);
            msg.setNeutralButton("Ok", null);

            msg.show();
        }
    }

    public void onSubtrairClick(View v){
        String n1 = N1.getText().toString();
        String n2 = N2.getText().toString();

        if(N1.getText().length() == 0){
            N1.setError("Campo Vazio!");
        }else if(N2.getText().length() == 0) {
            N2.setError("Campo Vazio!");
        }else{
            double numero1 = Double.parseDouble(n1);
            double numero2 = Double.parseDouble(n2);
            double result = numero1-numero2;

            AlertDialog.Builder msg = new AlertDialog.Builder(this);

            msg.setTitle("Calculado com Sucesso!");
            msg.setMessage("Resultado da Subtração: " + result);
            msg.setNeutralButton("Ok", null);

            msg.show();
        }
    }

    public void onMultiplicarClick(View v){
        String n1 = N1.getText().toString();
        String n2 = N2.getText().toString();

        if(N1.getText().length() == 0){
            N1.setError("Campo Vazio!");
        }else if(N2.getText().length() == 0) {
            N2.setError("Campo Vazio!");
        }else{
            double numero1 = Double.parseDouble(n1);
            double numero2 = Double.parseDouble(n2);
            double result = numero1 * numero2;

            AlertDialog.Builder msg = new AlertDialog.Builder(this);

            msg.setTitle("Calculado com Sucesso!");
            msg.setMessage("Resultado da Multiplicação: " + result);
            msg.setNeutralButton("Ok", null);

            msg.show();
        }
    }

    public void onDividirClick(View v){
        String n1 = N1.getText().toString();
        String n2 = N2.getText().toString();

        if(N1.getText().length() == 0){
            N1.setError("Campo Vazio!");
        }else if(N2.getText().length() == 0) {
            N2.setError("Campo Vazio!");
        }else{
            double numero1 = Double.parseDouble(n1);
            double numero2 = Double.parseDouble(n2);

            if(numero2 == 0){
                AlertDialog.Builder msg = new AlertDialog.Builder(this);

                msg.setTitle("Erro!");
                msg.setMessage("Por favor preencha um número diferente de '0' no segundo número!");
                msg.setNeutralButton("Ok", null);

                msg.show();
            }else {
                double result = numero1 / numero2;

                AlertDialog.Builder msg = new AlertDialog.Builder(this);

                msg.setTitle("Calculado com Sucesso!");
                msg.setMessage("Resultado da Divisão: " + result);
                msg.setNeutralButton("Ok", null);

                msg.show();
            }
        }
    }

    public void onSairClick(View v) {
        Intent it = new Intent(getApplicationContext(), MainActivity.class);
        it.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        it.putExtra("SAIR", true);
        startActivity(it);
    }

    @Override
    protected void onResume(){
        if(getIntent().getBooleanExtra("SAIR", false)){
            finish();
        }
        super.onResume();
    }

}