const toDoItems = [];
const toDoContainer = document.querySelector("#task-container")
document.querySelector("#date").innerText = "01/04/2020"

function ToDo(description){
	this.description = description;
	this.complete = false;
}

ToDo.prototype.completeToDo = function () {
    this.complete = true;
}

function buildToDo (todo, index) {
	const toDoShell = document.createElement("div");
	toDoShell.className = "item";
	
	const toDoText = document.createElement("div");
	toDoText.id = index ;
    toDoText.innerHTML = todo.description
    
    // <div class="item__delete">
    // <button class="item__delete--btn"><i class="ion-ios-checkmark-outline"></i></button>
    // </div>  
	if (todo.complete === true) {
		toDoText.className = "completeText";
	} 

	toDoShell.appendChild(toDoText);
	return toDoShell;
}

function buildToDos(toDos) {
	return toDos.map(buildToDo);
}

function displayToDos(){
	
	toDoContainer.innerHTML = "";
	let result = buildToDos(toDoItems)
	for (let i = 0; i < toDoItems.length; i++) {
		toDoContainer.append(result[i]);
	}
}
displayToDos();

function addToDo(){
	const todo = document.querySelector(".add__description");
	let newToDo = new ToDo(todo.value); 
	/* const todo = newToDo.value; */
	toDoItems.push(newToDo)
	todo.value = ""; /* (clear value) */
	displayToDos();
}

document.querySelector('.add-btn').addEventListener('click', addToDo);

// toDoContainer.addEventListener('click', e => {
//     console.log("clicked!");
//     if (e.target.classList.contains("item")){
//         e.target.classList.add('completeText');
//     }
// })

toDoContainer.onclick = function(e, todo){
    console.log("clicked!")
    if(e.target.tagName == 'DIV'){
         e.target.classList.toggle('completeText');
        //  todo.complete = true;
    }
};


// function crossOut() {
//     toDoText.classList.toggle("done");
// }

// toDoText.addEventListener("click",crossOut(e));

// function completeToDo(event) {
//   const index = event.target.id;
//   toDoItems[index].completeToDo();
//   displayToDos();
// }

