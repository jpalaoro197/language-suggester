function add(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}

$(document).ready(function() {
  $("form#suggestion").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const number3 = parseInt($("#add3").val());
    const number4 = parseInt($("#add4").val());
    const number5 = parseInt($("#add5").val());
    const result = add(number1, number2, number3, number4, number5);
   
    if (result <= 16) {
      $("#answer1").show();
    } else if (result >= 17 && result <= 31) {
      $("#answer2").show();
    } else if (result >= 32) {
      $("#answer3").show();
    }
  });
});