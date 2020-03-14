var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');
var divMessages = document.querySelector('#messages');

var repos = [];
var userGit = "";

function renderGitList() {
    listElement.innerHTML = '';
    for (repo of repos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(repo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

function renderGitListError() {
    listElement.innerHTML = '';
    divMessages.innerHTML = '';

    var errorElement = document.createElement('h1');
    var errorText = document.createTextNode("Usuario nao existe...");
    errorElement.appendChild(errorText);
    divMessages.appendChild(errorElement);
}

function prepareData() {
    repos.splice(0, repos.length);
    divMessages.innerHTML = '';
    userGit = inputElement.value;
    repos.push('Carregando...')
    renderGitList();
}

function getGithubInfo() {
    prepareData();
    axios.get('https://api.github.com/users/'+userGit+'/repos') 
        .then(function(response) {
            repos.shift();
            for (var repo in response.data){
                console.log(response.data[repo].name);
                repos.push(response.data[repo].name);
                inputElement.value = '';
                renderGitList();
            }
        })
        .catch(function(error) {
            console.warn(error);
            console.log(error.response.status);
            if (error.response.status === 404){ 
                renderGitListError();
            }
            else {
                console.log("ta aqui" + error.response)             
            }
            listElement.innerHTML = '';

        });

}

btnElement.onclick = getGithubInfo;
