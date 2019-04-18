const url = 'https://api.icndb.com/jokes/random';
const button = document.getElementById('get-joke');
button.addEventListener('click', () => getJoke());
const paragraph = document.getElementById('joke');
function getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}
getJoke();