//Procurar o botão
//quando clicar no botão
document.querySelector('#add-time').addEventListener('click', cloneField);

//Executar uma ação
function cloneField(){
    //Duplicar os campos. Que campos?
   const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
   //limpar os campos
    const fields = newFieldsContainer.querySelectorAll('input')
    fields.forEach((field) => {
        field.value = ""
    });
    //colocar na página: Onde?
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
    