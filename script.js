
// 1.display number in text box

function displayNumber(num){
    result.value+=num
}

// 2. clear text box (AC)

    function clearBox(){
        result.value=""
    }

// 3.evaluate expression

    function evaluateExp(){
        result.value=eval(result.value)
    }

// 4.remove last item from text box

      function removallastitem(){
       result.value=result.value.slice(0,-1)
   }