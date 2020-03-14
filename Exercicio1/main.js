var inputElment = document.querySelector('.idade ');
var btnElement = document.querySelector('.submite');

function checaIdade(idadeToAdd) {

    return new Promise(function(resolve, reject) {
        wait(20000);
        if (idadeToAdd >=18) {
            resolve("Maior de idade");
        } else {
            reject("Menor de idade");
        }
    }); 
}

function addIdade() {
    var idadeToAdd = inputElment.value;

    checaIdade(idadeToAdd)
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
}

btnElement.onclick = addIdade;

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }