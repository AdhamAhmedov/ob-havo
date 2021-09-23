



//DOM element
var elForm = document.querySelector(".form");
var elinput = elForm.querySelector(".input");
var elselect = elForm.querySelector(".select");
var c_option = elForm.querySelector('.c-option');
var f_option = elForm.querySelector(".f-option");
var elResult = document.querySelector(".result");


var converter = function (evt) {
    evt.preventDefault();

    var input = Number(elinput.value.trim(), 10);
    var celsius = ((input - 32) * 5 / 9).toFixed(2);
    var farenheit = ((input * 9 / 5) + 32).toFixed(2);

    if (!input) {
        elResult.textContent = " To'g'ri qiymat kiriting";
    } else if (elselect.value === "°C") {
        elResult.textContent = celsius + ". °C";


    } else if (elselect.value === "°F") {
        elResult.textContent = farenheit + ". °F";

    }

    elinput.value = null;
};

elForm.addEventListener("submit", converter);
elinput.addEventListener("change", converter);

