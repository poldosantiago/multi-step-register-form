import validateFormField from "./validateFormField.js";
import { activateStep, changeStageCircle, changeStepCounter } from "./validatorUtilities.js";

/**
 * @description valida o a primeira parte do formulário (step 1). Em caso de sucesso, aciona a a segunda parte (step 2).
 * @param {HTMLButtonElement} event - elemento DOM passado por parâmetro.  
 */
function validateStep1(event){
	event.preventDefault()
	// console.log('teste botao');

	let inputs = document.querySelectorAll('[data-input="name"][data-input="email"]');
	inputs.forEach(input => validateFormField(input));

	let resultsFields = [];
	inputs.forEach(input => {
		resultsFields.push(input.validity.valid);
	});
	
	let allFieldsOk = resultsFields.every( result => result);
	
	//se os campos estiverem validados, é acionado a próxima parte do formulário
	if(allFieldsOk){
		activateStep(2); //avançando para o o step 2 
		changeStepCounter(2); //alterar o contador do step para 2
		changeStageCircle(2); //trocar de bolinha selecionada
	}
}

export default validateStep1;