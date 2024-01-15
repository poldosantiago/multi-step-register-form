/**
 * @description ativa a próxima etapa da página
 * @param {int} stepNumber número da etapa da qual deseja ativar 
 * @returns {void}
 * @throws valor do parêmtro não pode ser um ou negativo.
 */
function activateStep(stepNumber){
    if(stepNumber <= 1){
        throw new Error('valor da etapa indevido!');
    }

    const currentStep = document.getElementById(`step${stepNumber - 1}`);
	const nextStep = document.getElementById(`step${stepNumber}`);

	currentStep.classList.add('--disable');
	nextStep.classList.remove('--disable');
}

/**
 * @description alterar o contador do step da página
 * @param {int} stepNumber número da etapa da qual deseja alterar
 * @returns {void}
 */
function changeStepCounter(stepNumber){
    const stepCount = document.querySelector('[data-step-count]');
    stepCount.innerHTML = `${stepNumber}`;
}

/**
 * @description altera o símbolo (bolinha) da etapa ativada
 * @param {int} stepNumber número da etapa da qual deseja alterar
 * @returns {void}
 * @throws valor do parêmtro não pode ser um ou negativo.
 */
function changeStageCircle(stepNumber){
    if(stepNumber <= 1){
        throw new Error('valor da etapa indevido!');
    }

    const stepCircle1 = document.querySelector(`[data-step-circle="${stepNumber -1}"]`);
	const stepCircle2 = document.querySelector(`[data-step-circle="${stepNumber}"]`);
		
	stepCircle1.classList.remove("--selected");
	stepCircle2.classList.add("--selected");
}

export {
    activateStep,
    changeStepCounter,
    changeStageCircle
}