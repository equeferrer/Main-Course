let person = {
    name: "",
}

document.querySelector(".hello-btn").addEventListener('click', () => {
    // console.log("Clicked!")
    if (person.name !== ""){
        document.querySelector('.display-text').innerText = `Hello, ${person.name}!`;
    } else {
        document.querySelector('.display-text').innerText = "Hello World !";
    }
});


document.querySelector(".submit-btn").addEventListener('click', event =>{
    person.name = document.querySelector('#name').value
    console.log(person.name);
    event.preventDefault();
    // console.log("Clicked!!");
    document.querySelector('.display-text').innerText = `${person.name}`;
    document.querySelector(".name-form").reset();
})

