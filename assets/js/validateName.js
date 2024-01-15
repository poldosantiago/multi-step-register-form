/**
 * @description prepara a validação do campo e executa o validador
 * @param {HTMLInputElement} input 
 */
function startValidateName(input){
    const name = input.value;
    const type = input.dataset.input;
    let message = ''; 

	if(!validateName(name)){
		message = `${type} invalid`; 
	}

	input.setCustomValidity(message);
}

/**
 * @description valida o campo nome
 * @param {string} name endereço de nome
 * @returns {boolean} rertona um valor boleano.
 */
function validateName(nome){
	nome = nome.trim(); //remove espaço dos lados
	const regex = new RegExp(/^[a-zA-ZÁÉÍÓÚÃÕÊËÇáéíóúãêëç]+(([\'\,\.\- ][a-zA-ZÁÉÍÓÚÃÕÊËÇáéíóúãêëç])?[a-zA-ZÁÉÍÓÚÃÕÊËÇáéíóúãêëç]*)*$/,'g'); // valida nome próprio
	return regex.test(nome);
}

export default startValidateName;