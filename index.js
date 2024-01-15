import validateFormField from "./assets/js/validateFormField.js";
import validateStep1 from "./assets/js/validateStep1.js";
import validateStep2 from "./assets/js/validateStep2.js";

let inputs = document.querySelectorAll('[data-input]');
let btnStep1 = document.querySelector('[data-btn="step1"]');
let form = document.querySelector('[data-form]'); //não há o btn2Step2 porque defino o comportamento direto na tag form
let btnStep3 = document.querySelector('[data-btn="step3"]');


//atributindo o corpotamento as campos do step1
inputs.forEach(input => {
    input.addEventListener('blur', (event)=> {
        let selectedInput = event.target;
        validateFormField(selectedInput);
    });
});

//atribuindo comportamente do primeiro botão (step 1)
btnStep1.addEventListener('click', validateStep1);

//atribuindo comportamento do formulário, acionado o step2
form.addEventListener('submit', validateStep2);

//atribuindo comportamente do terceiro botão (step 3)
btnStep3.addEventListener('click', () => alert('✅ Success'));