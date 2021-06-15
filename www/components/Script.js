// This is a JavaScript file

$(document).on("click", "#btn", function c(){
    var lado1 = parseInt($('#l1').val());
    var lado2 = parseInt($('#l2').val());
    var lado3 = parseInt($('#l3').val());

    validarTriangulo = function()
    {
      var a = lado1;
      var b = lado2;
      var c = lado3;
      var cond1, cond2, cond3;

      cond1 = (Math.abs(b - c) < a) && (a < (b + c));
      cond2 = (Math.abs(a - c) < b) && (b < (a + c));
      cond3 = (Math.abs(a - a) < c) && (c < (a + b));

      if(cond1 && (cond2) && (cond3)){
        mostrarImg();
      }
      else{
        trianguloInvalido();
      }
    }

      mostrarImg = function(){
    if((lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3)) {
      ehEscaleno();
    } else if((lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3)) {
      ehEquilatero();
    } else {
      ehIsoceles();
    }
  }

  trianguloInvalido = function(){
    navigator.notification.alert("Epa, valores inválidos para um triângulo!", null, "Atenção", "Ok");
    navigator.vibrate(2500);
  }

  ehEquilatero = function(){
    $("#area").html("<img src= 'https://lh4.googleusercontent.com/-3PENyS_lGcrUK4-1TxmLsuTDBzxeYB-XCnVlyluk6FnVvoMyBN_3FejToAOyjjO4UBqMnZsaBKe5K0v0t_18hRQEOTeHFVXhUnLKozt-MCR-W-DpWbI8DzOaG37ClaqU4VG033R'>");
  }

  ehIsoceles = function(){
    $("#area").html("<img src= 'https://lh3.googleusercontent.com/WMM3EDyKF3b03_XC_5KVw7A9RDzyEE58sdRmHAyS5BUGKQY1cqsS_g20Ry3Iumnu5PSOmnhjzQr-MnjW2gxpEnKa1hZF5aVsJyy7kPc_BOG8w7GXfinlo0VIbjIXcXv0GU-Ez7X8'>");
  }

  ehEscaleno = function(){
    $("#area").html("<img src= 'https://lh4.googleusercontent.com/6FEeZvFM55LSjwbIFLNY-FYlvIbDUeY-3stASSyWC6WQjnHcyvU_AGZl4fHElPtYq4C7e35GkESCYJmCST3HfbUQWto5PBO7_W8tbs1PcpeFFvOgn2CDFt9WdfYH4EWPQ4ItLFEU'>");
  }

  validarTriangulo();
});