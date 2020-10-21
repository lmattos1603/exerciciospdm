package com.example.exerccio2;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.RadioGroup;
import android.widget.Switch;
import android.widget.TextView;

public class MainActivity2 extends AppCompatActivity {

    EditText edtValorTotal, edtCouvert;
    TextView lblCustoTotal, lblCustoPessoa;
    Switch sim;
    RadioGroup rg1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        edtValorTotal = (EditText) findViewById(R.id.edtValorTotal);
        edtCouvert = (EditText) findViewById(R.id.edtCouvert);
        sim = (Switch) findViewById(R.id.switchSim);
        rg1 = (RadioGroup) findViewById(R.id.rgQtdPessoas);
        lblCustoTotal = (TextView) findViewById(R.id.lblCustoTotal);
        lblCustoPessoa = (TextView) findViewById(R.id.lblCustoPessoa);
    }

    public void onClickDividir(View v){
        double VT=0, Couv=0, pessoas=0, custoAd=0, custo, custoTotal, custoPessoa;
        
        if(edtValorTotal.getText().length() == 0){
            AlertDialog.Builder msg = new AlertDialog.Builder(this);

            msg.setTitle("Erro!");
            msg.setMessage("Por favor preencha o campo Valor Total");
            msg.setNeutralButton("Ok", null);

            msg.show();
        }else {
            VT = Double.parseDouble(edtValorTotal.getText().toString());
        }
        
        if(edtCouvert.getText().length() == 0){
            Couv = 0;
        }else {
            Couv = Double.parseDouble(edtCouvert.getText().toString());
        }

        switch (rg1.getCheckedRadioButtonId()){
            case R.id.rb2: pessoas = 2;
            break;

            case R.id.rb3: pessoas = 3;
            break;

            case R.id.rb4: pessoas = 4;
            break;

            case R.id.rb5: pessoas = 5;
            break;
        }

        if(sim.isChecked()){
            custoAd = 0.1;
        }
        custo = VT+(Couv*pessoas);
        custoTotal = custo+(custo*custoAd);
        custoPessoa = custoTotal/pessoas;

        lblCustoTotal.setText("R$ " + custoTotal);
        lblCustoPessoa.setText("R$ " + custoPessoa);
    }
}