//Procurar o botão
//quando clicar no botão
document.querySelector('#remove-iten').addEventListener('click', removeField);

//Executar uma ação
function removeField(){
    //percorrer todos os schedules-item  
   const removeFieldsContainers = document.querySelectorAll('.schedule-item');
   removeFieldsContainers.forEach((removeFieldsContainer) => {
 //remover os que tem campos vazios
    const fields = removeFieldsContainer.querySelectorAll('input')
    fields.forEach((field) => {

        if(field.value == "" & removeFieldsContainers.length > 1){

            removeFieldsContainer.remove()
        }
    });

   });

   
   //limpar os campos
   
}
    