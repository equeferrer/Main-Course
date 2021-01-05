let options = {year: 'numeric', month: 'short', day: 'numeric' };
let currentDate = new Date();
// document.querySelector("#date").innerText = "01/04/2021"
document.querySelector("#date").innerText = currentDate.toLocaleDateString('en-US', options)

const todoBox = document.querySelector(".add__container");

const todoInput = document.querySelector(".add__description");
const todoButton = document.querySelector(".add-btn");
const todoList = document.querySelector("#task-container");

todoBox.addEventListener('submit', handleSubmit);

function handleSubmit(e){
    e.preventDefault();
	addToDo(e);
}

function addToDo(event) {
	event.preventDefault();
	if (todoInput.value !== "") {
		// TO DO DIV
			const todoDiv = document.createElement('div');
			todoDiv.classList.add('item');
		// Checkmark button
			const completedButton = document.createElement('button');
			completedButton.innerHTML = '<i class="ion-ios-checkmark-outline"></i>'
			completedButton.classList.add("item__complete");
			todoDiv.appendChild(completedButton);
		// create task
			const newToDo = document.createElement('div');
			newToDo.innerText = todoInput.value;
			newToDo.classList.add('item__description')
			todoDiv.appendChild(newToDo)

		//TRASH BUTTON
			const trashButton = document.createElement('button');
			trashButton.innerHTML = '<i class="ion-ios-close-outline">'
			trashButton.classList.add("item__delete");
			todoDiv.appendChild(trashButton);
		// Add to toDoDiv
			todoList.appendChild(todoDiv)
		//Clear ToDo Input Value
			todoInput.value="";
	} else if (todoInput.value === ""){
		todoInput.classList.add('red-focus');
		document.querySelector(".alert").classList.remove('hidden');
		document.querySelector("#error").innerText = "Cannot add a blank task";
		setTimeout(function () { document.querySelector(".alert").classList.add('hidden'); }, 3000);
		// alert("Cannot add a blank task");
		setTimeout(function () { todoInput.classList.remove('red-focus'); }, 3000);
	}
}

todoList.addEventListener('click', toDoAction);

function toDoAction(e){
	const item = e.target;
//DELETE TODO
	if (item.classList[0] === "item__delete"){
        const todo = item.parentElement;
		todo.remove();
	}
	if (item.classList[0] === "item__complete"){
		const todo = item.nextSibling;
		todo.classList.toggle('completeText')
		item.classList.toggle('completeText')
	}
}

const newQuoteButton = document.querySelector('#new-quote');

newQuoteButton.addEventListener('click',getQuote);

async function getQuote() {
	console.log("quote button was clicked");
	try {
		const response = await fetch(endpoint)
		if (!response.ok) {
			throw Error(response.statusText)
		}
		const json = await response.json();
		displayQuote(json.content, json.author)
	} catch (err) {
		console.log(err)
		alert('Failed to fetch new quote');
	}
}

const endpoint = 'https://api.quotable.io/random';

function displayQuote(quote, author) {
	let quoteText = document.querySelector('#quote-text');
	let quoteAuthor = document.querySelector('#quote-author');
	quoteText.textContent = quote;
	quoteAuthor.textContent = `- ${author}`
}

// Close button
document.querySelector(".close-btn").addEventListener('click', function(){
    document.querySelector(".alert").classList.add("hidden");
});

