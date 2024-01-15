/**
 * @description prepara a validação do campo e executa o validador
 * @param {HTMLInputElement} input 
 */
function startValidateEmail(input){
    const email = input.value;
    const type = input.dataset.input;
    let message = ''; 

	if(!validateEmail(email)){
		message = `${type} invalid`; 
	}

	input.setCustomValidity(message);
}

/**
 * @description valida o campo email
 * @param {string} email endereço de email
 * @returns {boolean} rertona um valor boleano.
 */
function validateEmail(email){
    const regex = /^[a-z0-9.\-_]+@[a-z0-9\-]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(email);
}

export default startValidateEmail;