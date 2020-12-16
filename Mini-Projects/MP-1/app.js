document.querySelector(".hello-btn").addEventListener('click', () => {
    console.log("Clicked!")
    document.querySelector('.display-text').innerText = "Hello World !";
});