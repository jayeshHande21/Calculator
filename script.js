const input1 = document.querySelector("#inpt1");
const input2 = document.querySelector("#inpt2");
const buttons = document.querySelectorAll(".btn");
const output = document.querySelector("#output");

const plus = document.querySelector("#plus");

const minus = document.querySelector("#minus");

buttons.forEach(function (butt) {

    butt.addEventListener("click", function (e) {

        if (e.target.id === "plus") {
          output.innerText = (Number(input1.value) + Number(input2.value));
        }

        else if(e.target.id==="minus"){
            output.innerText =(Number(input1.value) - Number(input2.value));
        }

        else if(e.target.id==="mul"){
            output.innerText =(Number(input1.value) * Number(input2.value));
        }
        else if(e.target.id==="devi"){
            output.innerText =(Number(input1.value) /  Number(input2.value));
        }
    })


});