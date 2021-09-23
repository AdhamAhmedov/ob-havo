//DOM element
var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elSelect = elForm.querySelector(".js-select");
var elResult = document.querySelector(".js-result");


var converter = function (evt) {
    evt.preventDefault();

    var input = parseFloat(elInput.value.trim(), 10);
    var celsius = ((input - 32) * 5 / 9).toFixed(2);
    var farenheit = ((input * 9 / 5) + 32).toFixed(2);

    if (elInput.value === '') {
        elResult.textContent = "Qiymat kiriting";
        return;
    } else if (isNaN(elInput.value)) {
        elResult.textContent = "Son kiriting";
        return;
    } else if (elSelect.value === "C") {
        elResult.textContent = celsius + ". °C";
        elInput.focus();
    } else if (elSelect.value === "F") {
        elResult.textContent = farenheit + ". °F";
        elInput.focus();
    }

};

elForm.addEventListener("submit", converter);
elInput.addEventListener("change", converter);
elSelect.addEventListener("change", converter);
