const calculator = document.querySelector("body");
const toggle_switch = document.querySelectorAll("#toggle-switch div");
const buttons = document.querySelectorAll(".buttons input");
const result = document.querySelector("#result");
const reset = document.querySelector(".reset");
const del = document.querySelector(".delete");
const equalSign = document.querySelector(".equal-sign");


symbols = ["+", "-", "*", "/", "."]


//displays result on the screen
equalSign.addEventListener("click", () => {
    if(result.value.endsWith("/0")){
        result.value = "";
    } else if (result.value == "") {
        result.value = ""
    } else {
        result.value = eval(result.value);
        if(Math.abs(result.value % 1)){
            result.value = eval(result.value).toFixed(2);
        }
    }

})



buttons.forEach(button => {
    //add event listener to the buttons
    button.addEventListener("click", (event) => {
        let target = event.target;
        if(!target.classList.contains("equal-sign") && !target.classList.contains("delete")){
            if(symbols.includes(target.value) && result.value == ""){
                target = target;
            } else if(symbols.includes(result.value.substring(result.value.length-1)) && symbols.includes(target.value)) {
                result.value = result.value;
            } else if(target.classList.contains("equal-sign")) {
                reset.value = target.value;
            } else if (target.classList.contains("number") && result.value.endsWith("0")) {
                result.value = result.value;
            } else {
                result.value += target.value;
            }
        }
    })
})



//change theme
toggle_switch.forEach(themeOption => {
    themeOption.addEventListener("click", (e) => {
        let target = e.target;
        if(target.classList.contains("theme1")) {
            calculator.classList.remove("second-theme");
            calculator.classList.remove("third-theme");
            target.style.opacity = "1";
        } else if(target.classList.contains("theme2")) {
            calculator.classList.add("second-theme");
            calculator.classList.remove("third-theme");
            target.style.opacity = "1";
        } else if(target.classList.contains("theme3")) {
            calculator.classList.add("third-theme");
            calculator.classList.remove("second-theme");
            target.style.opacity = "1";
        }
        toggle_switch.forEach(otherOption => {
            if (otherOption !== target) {
                otherOption.style.opacity = "0"
            }
        })
    })
})

//remove result on the screen
reset.addEventListener("click", () => {
    result.value = ""
})

//remove last character fro the screen
del.addEventListener("click", () => {
    result.value = result.value.substring(0, result.value.length-1);
})


