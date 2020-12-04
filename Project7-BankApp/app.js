let User = function(){
    this.username = document.querySelector("#username").value;
    this.password = document.querySelector("#password").value;
    this.balance = 0;
    this.login = false;
    // add picture here?
    // other properties: transactions, etc.
}

let user = new User;

class BankApp {
    constructor() {
        this.users = [];
    } 
    createUser(){
        // Error 2: user already exists
        // Error 1: wrong arguments?
        let newUser = new User(username,password);
        newUser.login = true;
        this.users.push(newUser);
    } 
    // login(){
    //     user must exist!
    //     if user exists, newUser.login = true
    // }
    // logout(){
    //     user must exist!
    //     if user exists, newUser.login = false
    // }
    deposit(user, amount) {
        let foundUser = this.users.find(elem => elem.login === true);
        foundUser.balance += amount;
        // return this.balance; 
    }
    withdraw(user, amount) {
        let foundUser = this.users.find(elem => elem.login === true);
        foundUser.balance -= amount;
        // return this.balance 
        // Error 3: not enough money
    }
    getBalance(){
        let foundUser = this.users.find(elem => elem.login === true);
        foundUser.balance;
        // "return in given format (style?)"
    }
    send(user, amount, username) {
        let foundUser = this.users.find(elem => elem.login === true);
        let receiverUser = this.users.find(elem => elem.username === username);
        foundUser.balance -= amount;
        receiverUser.balance += amount;
    }
}

const bank = new BankApp();

// REGISTRATION // 
document.querySelector("#reg-btn").addEventListener('click', function(){
    // place prevent default?
    // add validation that it cant be blank (null not working?) 
    let user = document.querySelector("#username").value
    let found = bank.users.some(elem => elem.username === document.querySelector("#username").value);

    if (!found 
        && document.querySelector("#password").value === document.querySelector("#confirmPassword").value
        && document.querySelector("#password").value !== null 
        && document.querySelector("#confirmPassword").value !== null 
        && document.querySelector("#username").value !== null ){
        bank.createUser();
        console.log("%c New user created", "color:green", bank.users)
        this.form.reset();
        document.querySelector(".container").classList.add('hidden');
        document.querySelector(".container-two").classList.add('show');
        document.querySelector(".container-two").classList.remove('hidden');
        document.querySelector("#logged-user").innerText = user;
    }
    else if (found) {
      alert("User already exists")
    } 
    else if (document.querySelector("#password").value === null 
        || document.querySelector("#confirmPassword").value === null 
        || document.querySelector("#username").value === null ){
        alert("Must fill in all fields");
    } 
    else if (document.querySelector("#password").value !== document.querySelector("#confirmPassword").value){
        alert("Passwords must match!")
    }
})



// LOGIN // 

document.querySelector("#login-btn").addEventListener('click', function(){

    let userLogIn = document.querySelector("#username2").value;
    let password = document.querySelector("#password2").value;

    let user = bank.users.find(elem => elem.username === userLogIn);
    let found = bank.users.some(elem => elem.username === userLogIn);

    if (!found){
        alert ("User does not exist")
    } else if (user.password === password) {
        user.login = true;
        console.log("logged in!" + user, bank.users);
        // this.form.reset();
        document.querySelector(".container").classList.add('hidden');
        document.querySelector(".container-two").classList.add('show');
        document.querySelector(".container-two").classList.remove('hidden');
        document.querySelector("#logged-user").innerText = userLogIn;
    } else {
        alert("Wrong password!")
    }
})



// LOG OUT // 

document.querySelector("#logout-btn").addEventListener('click', function(){
    let user = bank.users.find(elem => elem.login === true);
    user.login = false;
    console.log(user + " logged out!", bank.users);
    document.querySelector(".container-two").classList.add('hidden');
    document.querySelector(".container").classList.add('show');
    document.querySelector(".container").classList.remove('hidden');

    // this.form.reset();
})


// DEPOSIT // 
// Cant deposit 0
// How to Take out value after depositing money
document.querySelector("#deposit-btn").addEventListener('click', event => {
    event.preventDefault();
    let user = bank.users.find(elem => elem.login === true);
    let amount = parseFloat(document.querySelector("#deposit-amount").value);
    bank.deposit(user,amount);
    console.log("Deposited " + amount + "to " + user , bank.users)
    // form.reset();

})

// WITHDRAW // 

document.querySelector("#withdraw-btn").addEventListener('click', event => {
    event.preventDefault();

    let user = bank.users.find(elem => elem.login === true);
    let amount = parseFloat(document.querySelector("#withdraw-amount").value);
    
    if (user.balance - amount < 0) {
        alert ("Not enough money!")
    } else {
        bank.withdraw(user,amount);
        console.log("Withdrew " + amount + "to " + user , bank.users)
        // this.form.reset();
    }
})

// SEND TO  // 

document.querySelector("#send-btn").addEventListener('click', event => {
    event.preventDefault();

    let user = bank.users.find(elem => elem.login === true);
    let amount = parseFloat(document.querySelector("#send-amount").value);
    let receiver = document.querySelector("#receiver").value;

    let found = bank.users.some(elem => elem.username === receiver);

    if (!found){
        alert ("User " + receiver + " does not exist")
    } else if (user.balance - amount < 0) {
        alert ("Not enough money!")
    } else {
        bank.send(user,amount,receiver);
        console.log("Sent " + amount + "to " + receiver , bank.users)
        // this.form.reset();
    }
})



// document.querySelector(".close-btn").addEventListener('click', function(){
//     document.querySelector(".alert").style.display = "none";
// });




// FOR FIRST STATE -- NO USERS LOGGED IN
document.querySelector("#about-tab").addEventListener('click', function(){
    document.querySelector(".about").classList.remove("hidden");
    document.querySelector(".register").classList.add("hidden");
    document.querySelector(".login").classList.add("hidden");
    document.querySelector("#about-tab").classList.add("active")
    document.querySelector("#register-tab").classList.remove("active")
    document.querySelector("#login-tab").classList.remove("active")
});

document.querySelector("#register-tab").addEventListener('click', function(){
    document.querySelector(".about").classList.add("hidden");
    document.querySelector(".register").classList.remove("hidden");
    document.querySelector(".login").classList.add("hidden");
    document.querySelector("#about-tab").classList.remove("active")
    document.querySelector("#register-tab").classList.add("active")
    document.querySelector("#login-tab").classList.remove("active")
});

document.querySelector("#login-tab").addEventListener('click', function(){
    document.querySelector(".about").classList.add("hidden");
    document.querySelector(".register").classList.add("hidden");
    document.querySelector(".login").classList.remove("hidden");
    document.querySelector("#about-tab").classList.remove("active")
    document.querySelector("#register-tab").classList.remove("active")
    document.querySelector("#login-tab").classList.add("active")
});


// FOR SECOND STATE -- USER LOGGED IN

document.querySelector("#home-tab").addEventListener('click', function(){
    document.querySelector(".home").classList.remove("hidden");
    document.querySelector(".deposit").classList.add("hidden");
    document.querySelector(".withdraw").classList.add("hidden");
    document.querySelector(".send").classList.add("hidden");
    document.querySelector("#home-tab").classList.add("active");
    document.querySelector("#deposit-tab").classList.remove("active");
    document.querySelector("#withdraw-tab").classList.remove("active");
    document.querySelector("#send-tab").classList.remove("active");
    document.querySelector("#profile-tab").classList.remove("active");
});

document.querySelector("#deposit-tab").addEventListener('click', function(){
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".deposit").classList.remove("hidden");
    document.querySelector(".withdraw").classList.add("hidden");
    document.querySelector(".send").classList.add("hidden");
    document.querySelector("#home-tab").classList.remove("active");
    document.querySelector("#deposit-tab").classList.add("active");
    document.querySelector("#withdraw-tab").classList.remove("active");
    document.querySelector("#send-tab").classList.remove("active");
    document.querySelector("#profile-tab").classList.remove("active");
});

document.querySelector("#withdraw-tab").addEventListener('click', function(){
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".deposit").classList.add("hidden");
    document.querySelector(".withdraw").classList.remove("hidden");
    document.querySelector(".send").classList.add("hidden");
    document.querySelector("#home-tab").classList.remove("active");
    document.querySelector("#deposit-tab").classList.remove("active");
    document.querySelector("#withdraw-tab").classList.add("active");
    document.querySelector("#send-tab").classList.remove("active");
    document.querySelector("#profile-tab").classList.remove("active");
});

document.querySelector("#send-tab").addEventListener('click', function(){
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".deposit").classList.add("hidden");
    document.querySelector(".withdraw").classList.add("hidden");
    document.querySelector(".send").classList.remove("hidden");
    document.querySelector("#home-tab").classList.remove("active");
    document.querySelector("#deposit-tab").classList.remove("active");
    document.querySelector("#withdraw-tab").classList.remove("active");
    document.querySelector("#send-tab").classList.add("active");
    document.querySelector("#profile-tab").classList.remove("active");
});

// document.querySelector("#profile-tab").addEventListener('click', function(){

// });

// document.querySelector("#logout-btn").addEventListener('click', function(){

// });










// let users = [];

// function createUser(){
//     let newUser = new User(username,password);
//     users.push(newUser);
//     return newUser;
// }

// if log-in, add property to that user for log-in
// if log-out remove 'log-out' property


// function deposit(user,amount){
//     user.balance += amount
//     return user.balance;
// }

// let users = [];

// let User = function(name, username, password, money) {
//     this.name = document.querySelector("#name").value;
//     this.username = parseFloat(document.querySelector("#mass").innerText.value);
//     this.password = parseFloat(document.querySelector("#height").innerText.value);
//     this.money = money;
// }  
// add form validator, labels for wrong input?



// document.querySelector('#createdBy').innerHTML += ' Enrique Ferrer';

// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }
  
//   let canary = new Bird("Tweety");
//   let ownProps = [];
//   // Only change code below this line
//   for (let property in canary) {
//     if (canary.hasOwnProperty(property)){
//       ownProps.push(property);
//     }
//   }

//   for in posts[post]

// Bird.prototype.numLegs = 2;
// Can use User.prototype.balance = 0 


// function isEveryoneHere(obj) {
    // return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    //   obj.hasOwnProperty(name)
// );
// 
// 
    // let user = {
        // name: 'Kenneth',
        // age: 28,
        // data: {
        //   username: 'kennethCodesAllDay',
        //   joinDate: 'March 26, 2016',
        //   organization: 'freeCodeCamp',
        //   friends: [
            // 'Sam',
            // 'Kira',
            // 'Tomo'
        //   ],
        //   location: {
            // city: 'San Francisco',
            // state: 'CA',
            // country: 'USA'
        //   }
        // }
    //   };
    //   
    //   function addFriend(userObj, friend) {
        // userObj.data.friends.push(friend);
        // return userObj.data.friends
    //   }
    //   
    //   console.log(addFriend(user, 'Pete'));
    //  

// const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
// const found = objects.find(function(item){
    // return item.id === 'b';
// });
// console.log(found);


