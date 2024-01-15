/**
 * @description prepara a validação do campo e executa o validador
 * @param {HTMLInputElement} input 
 */
function startValidateRadio(input){
    const checked = input.checked; //identifica se o radio foi selecionado
    const type = input.dataset.input;
    let message = ''; 

    //se ele não foi selecionado...
	if(!checked){
		message = `${type} invalid`; 
	}

	input.setCustomValidity(message);
}

export default startValidateRadio;