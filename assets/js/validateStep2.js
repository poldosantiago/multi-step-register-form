import validateFormField from "./validateFormField.js";
import showFormResults from "./showFormResults.js";
import { activateStep, changeStepCounter, changeStageCircle } from "./validatorUtilities.js";

function validateStep2(event){
    event.preventDefault();

	let checkboxs = document.querySelectorAll('[data-input="checkbox"]');
	checkboxs.forEach(input => validateFormField(input));

	let resultsFields = [];
	checkboxs.forEach(checkbox => {
		resultsFields.push(checkbox.checked);
	});
	
	let allFieldsOk = resultsFields.some( result => result);

	if(allFieldsOk){
		activateStep(3); //avançando para o o step 3 
		changeStepCounter(3); //alterar o contador do step para 3
		changeStageCircle(3); //trocar de bolinha selecionada

		showFormResults(event); //esse evento é do submit, blz?
	}
}

export default validateStep2;