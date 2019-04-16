let url = 'http://api.icndb.com/jokes/random';
let button = document.getElementById('get-joke');
button.addEventListener('click', () => getJoke());
let paragraph = document.getElementById('joke');
function getJoke() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
        let response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}
getJoke();