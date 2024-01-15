/**
 * @description recebe os valores vindos do formulário e insere-os na etapa 3
 * @param {HTMLFormElement} event 
 * @returns {void}
 */
function showFormResults(event){
    //pegando os elementos do formulário
    const inputFormName = event.target[0];
    const inputFormEmail = event.target[1];
    const inputFormCheckBoxs = [ 
        event.target[3], 
        event.target[4],
        event.target[5]
    ];

    //pegando os campos ddo step3 
    const inputShowName = document.querySelector('[data-show-name]');
    const inputShowEmail = document.querySelector('[data-show-email]');
    const inputShowList = document.querySelector('[data-show-list]');
    
    //inserindo os valores
    inputShowName.innerHTML = inputFormName.value;
    inputShowEmail.innerHTML = inputFormEmail.value;

    inputFormCheckBoxs.forEach( input => {
        if(input.checked){
            const li = `<li class="summary__item">${input.value}</li>`;
            inputShowList.innerHTML += li;
        }
    });
}

export default showFormResults;