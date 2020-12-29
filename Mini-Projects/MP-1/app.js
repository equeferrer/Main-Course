let person = {
    name: "",
}

document.querySelector(".hello-btn").addEventListener('click', () => {
    // console.log("Clicked!")
    document.querySelector(".say-goodbye-btn").innerHTML = "sayGoodbye";
    document.querySelector('.display-text').classList.add("animate");
    setTimeout(function () { document.querySelector('.display-text').classList.remove("animate") }, 5000);
    if (person.name !== ""){
        document.querySelector('.display-text').innerText = `Hello, ${person.name}!`;
    } else {
        document.querySelector('.display-text').innerText = "Hello World !";
    }
});


document.querySelector(".name-form").addEventListener('submit', event => {
    event.preventDefault();
    person.name = document.querySelector('#name').value
    console.log(person.name);
    // console.log("Clicked!!");
    document.querySelector('.display-text').classList.add("animate");
    setTimeout(function () { document.querySelector('.display-text').classList.remove("animate") }, 5000);
    document.querySelector('.display-text').innerText = `${person.name}`;
    document.querySelector(".name-form").reset();
    document.querySelector(".say-goodbye-btn").innerHTML = "sayGoodbye";
});

document.querySelector("#jerick").addEventListener('click', () =>{
    console.log("Jerick");
    person.name = "Jerick";
    document.querySelector('.display-text').classList.add("animate");
    setTimeout(function () { document.querySelector('.display-text').classList.remove("animate") }, 5000);
    document.querySelector('.display-text').innerText = `${person.name}`;
    document.querySelector(".say-goodbye-btn").innerHTML = "sayGoodbye";
});

document.querySelector("#pau").addEventListener('click', () =>{
    console.log("Pau");
    person.name = "Pau";
    document.querySelector('.display-text').classList.add("animate");
    setTimeout(function () { document.querySelector('.display-text').classList.remove("animate") }, 5000);
    document.querySelector('.display-text').innerText = `${person.name}`;
    document.querySelector(".say-goodbye-btn").innerHTML = "sayGoodbye";
});

document.querySelector("#john").addEventListener('click', () =>{
    console.log("John");
    person.name = "John";
    document.querySelector('.display-text').classList.add("animate");
    setTimeout(function () { document.querySelector('.display-text').classList.remove("animate") }, 5000);
    document.querySelector('.display-text').innerText = `${person.name}`;
    document.querySelector(".say-goodbye-btn").innerHTML = "sayGoodbye";
});

document.querySelector(".say-hello-btn").addEventListener('click', () => {
    // console.log("Clicked!")
    document.querySelector(".say-goodbye-btn").innerHTML = "sayGoodbye";
    document.querySelector('.display-text').classList.add("animate");
    setTimeout(function () { document.querySelector('.display-text').classList.remove("animate") }, 5000);
    if (person.name !== ""){
        document.querySelector('.display-text').innerText = `Hello, ${person.name}!`;
    } else {
        document.querySelector('.display-text').innerText = "Hello World !";
    }
});

document.querySelector(".say-goodbye-btn").addEventListener('click', () => {
    // console.log("Clicked!")
    let btn = document.querySelector(".say-goodbye-btn");
    document.querySelector('.display-text').classList.add("animate");
    setTimeout(function () { document.querySelector('.display-text').classList.remove("animate") }, 5000);
    if (person.name !== "" && btn.innerHTML !== "Clear"){
        document.querySelector('.display-text').innerText = `Good bye, ${person.name}!`;
        btn.innerHTML = "Clear";

    } else if (btn.innerHTML === "Clear") {
        person.name = "";
        document.querySelector('.display-text').innerHTML = "&nbsp;";
        btn.innerHTML = "sayGoodbye";
    }
});