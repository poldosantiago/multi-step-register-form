import startValidateName from "./validateName.js";
import startValidateEmail from "./validateEmail.js";
import startValidateRadio from "./validateRadio.js";


/**
 * @description valida os campos de todo o formulário. Ou seja, da step 1 e 2.
 * @param {HTMLInputElement} input - elemento DOM passado por parâmetro.  
 * @return {void}
 */
function validateFormField(input){
	const inputType = input.dataset.input;

	//validando os inputs
	if(validators[inputType]){
		validators[inputType](input);
	}

    //mostrando ou ocultando a mensagem de erro
	if(input.validity.valid){
        //oculta a mensagem de erro do campo
        
		if(input.nextElementSibling){
			input.nextElementSibling.classList.add('--hidden');
		}
	}
	else{
		//mostra a mensagem de erro do campo
		
		if(input.nextElementSibling){
			input.nextElementSibling.classList.remove('--hidden');	
		}
	}
}

/**
 * @param {Object} validators - que controla as funções de validação 
 */
const validators = {
	name: input => startValidateName(input),
	email: input => startValidateEmail(input),
	checkbox: input => startValidateRadio(input)
}

export default validateFormField;

