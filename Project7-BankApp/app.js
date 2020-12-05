let User = function(){
    this.name = document.querySelector("#name").value;
    this.username = document.querySelector("#username").value;
    this.password = document.querySelector("#password").value;
    this.balance = 0;
    this.login = false;
    this.picture = "blank-pic.jpg";
    // other properties: transactions, etc.
    // Subscribe to our newsletter, birthdate
}

let user = new User;

class Bank {
    constructor() {
        this.usersArray = [];
    } 
    createUser(username, password, confirmPassword){
        let found = bank.usersArray.some(elem => elem.username === username)
        
        if (found) {
            alert ("User already exists")
        } else if (password !== confirmPassword){
            alert ("Passwords must match")
        } else { 
            let newUser = new User(username,password);
            newUser.login = true;
            this.usersArray.push(newUser);
            resetForms();
            startStateTwo();
            this.updateProfile();
            
            console.log("%c New user created:", "color:green");
            console.table(bank.usersArray);

            document.querySelector(".container").classList.add('hidden');
            document.querySelector(".container-two").classList.add('show');
            document.querySelector(".container-two").classList.remove('hidden');
            document.querySelector("#logged-user").innerText = newUser.username;
        }
    } 
    login(user, password){
        let found = bank.usersArray.some(elem => elem.username === user);
        let userLogIn = bank.usersArray.find(elem => elem.username === user);

        if (!found){
            alert ("User does not exist")
        } else if (userLogIn.password !== password) {
            alert("Wrong password!")
        } else {
            userLogIn.login = true;
            resetForms();
            startStateTwo();
            this.updateProfile();

            document.querySelector(".container").classList.add('hidden');
            document.querySelector(".container-two").classList.add('show');
            document.querySelector(".container-two").classList.remove('hidden');
            document.querySelector("#logged-user").innerText = userLogIn.username;
            document.querySelector("#avatar").src = userLogIn.picture;
            
            console.log(userLogIn.username+ " logged in!");
            console.table(bank.usersArray);
        }
    }
    logout(){
        let user = bank.usersArray.find(elem => elem.login === true);
        user.login = false;
        resetForms();
        startStateOne();

        console.log(user.username + " logged out!");
        console.table(bank.usersArray);

        document.querySelector(".container-two").classList.add('hidden');
        document.querySelector(".container").classList.add('show');
        document.querySelector(".container").classList.remove('hidden');
    }
    deposit(user, amount) {
        let foundUser = this.usersArray.find(elem => elem.login === true);
        foundUser.balance += amount;
        resetForms();
        this.updateProfile();
        startStateTwo();

        console.log("Deposited " + amount + " to " + user.username);
        console.table(bank.usersArray);
    }
    withdraw(user, amount) {
        let foundUser = this.usersArray.find(elem => elem.login === true);

        if (foundUser.balance - amount < 0) {
            alert ("Not enough money!")
        } else {
            foundUser.balance -= amount;
            resetForms();
            this.updateProfile();
            startStateTwo();

            console.log("Withdrew " + amount + " from " + user.username);
            console.table(bank.usersArray);
        }
    }
    send(user, amount, receiver) {
        let found = this.usersArray.some(elem => elem.username === receiver);
        let sender = this.usersArray.find(elem => elem.login === true);
        let receiverUser = this.usersArray.find(elem => elem.username === receiver);

        if (!found){
            alert ("User " + receiver + " does not exist")
        } else if (sender.balance - amount < 0) {
            alert ("Not enough money!")
        } else if (sender.username === receiverUser.username) {
            alert ("Cannot send money to the same account")
        }else {
            sender.balance -= amount;
            receiverUser.balance += amount;
            resetForms();
            this.updateProfile();
            startStateTwo();

            console.log("Sent " + amount + " to " + receiverUser.username) 
            console.table(bank.usersArray)
        }
    }
    changeName(newName) {
        let foundUser = this.usersArray.find(elem => elem.login === true);
        foundUser.name = newName;
        document.querySelector("#get-name").innerText = foundUser.name;
        console.log("Changed name to " + newName);
    }
    changeUsername(newUsername){
        let found = bank.usersArray.some(elem => elem.username === newUsername)
        let foundUser = this.usersArray.find(elem => elem.login === true);

        if (found) {
            alert ("User already exists!")
        } else {
            foundUser.username = newUsername;
            document.querySelector("#get-user").innerText = foundUser.username;
            console.log("Changed username to " + newUsername);
        }
    }
    changePic(newPic){
        let foundUser = this.usersArray.find(elem => elem.login === true);
        foundUser.picture = newPic;
        resetForms();
    }
    updateProfile(){
        let foundUser = bank.usersArray.find(elem => elem.login === true);
        
        document.querySelector("#get-name").innerText = foundUser.name;
        document.querySelector("#get-user").innerText = foundUser.username;
        document.querySelector("#get-balance").innerText = formatter.format(foundUser.balance);
        document.querySelector("#avatar").src = foundUser.picture;
    }
}

const bank = new Bank();

// REGISTRATION FORM // 
let regForm = document.querySelector("#register-form");
function handleReg(e){
    e.preventDefault();
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    let confirmPassword = document.querySelector("#confirmPassword").value;
    bank.createUser(username,password,confirmPassword);
}
regForm.addEventListener('submit', handleReg);

// LOGIN FORM // 
let loginForm = document.querySelector("#login-form");
function handleLogin(e){
    e.preventDefault();
    let userLogIn = document.querySelector("#username2").value;
    let password = document.querySelector("#password2").value;
    bank.login(userLogIn, password);
}
loginForm.addEventListener('submit', handleLogin);

// LOG OUT // 
document.querySelector("#logout-btn").addEventListener('click', function(){
    bank.logout(user);
})

// DEPOSIT FORM // 
let depositForm = document.querySelector("#deposit-form");
function handleDeposit(e){
    e.preventDefault();
    let user = bank.usersArray.find(elem => elem.login === true);
    let amount = parseFloat(document.querySelector("#deposit-amount").value);
    bank.deposit(user,amount);
}
depositForm.addEventListener('submit', handleDeposit);

// WITHDRAW FORM // 
let withdrawForm = document.querySelector("#withdraw-form");
function handleWithdraw(e){
    e.preventDefault();
    let user = bank.usersArray.find(elem => elem.login === true);
    let amount = parseFloat(document.querySelector("#withdraw-amount").value);
    bank.withdraw(user, amount);
}
withdrawForm.addEventListener('submit', handleWithdraw);

// SEND TO FORM // 
let sendForm = document.querySelector("#send-form");
function handleSend(e){
    e.preventDefault();
    let user = bank.usersArray.find(elem => elem.login === true);
    let amount = parseFloat(document.querySelector("#send-amount").value);
    let receiver = document.querySelector("#receiver").value;
    bank.send(user,amount,receiver);
};
sendForm.addEventListener('submit', handleSend);

// Reset all forms 
function resetForms() {
    regForm.reset();
    loginForm.reset();
    depositForm.reset();
    withdrawForm.reset();
    sendForm.reset();
    pictureForm.reset();
}

// Change Name
document.querySelector("#change-name-btn").addEventListener('click', function(){
    let newName = prompt ("Enter new name");
    if(!newName) {
        return
    } else {
        bank.changeName(newName)
    }
});

// Change Username
document.querySelector("#change-username-btn").addEventListener('click', function(){
    let newUsername = prompt ("Enter new name"); 
    if(!newUsername) {
        return
    } else {
        bank.changeUsername(newUsername)
    }
});

// Change Avatar picture
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            let img = document.querySelector('#avatar');  
            img.src = URL.createObjectURL(this.files[0]);
            bank.changePic(img.src);
        }
    });
});


/************* DOM MANIPULATION, SHOWING DIFFERENT ACTIVE STATES*************/
/* For first state -- NO user LOGGED IN */
function startStateOne(){
    document.querySelector(".about").classList.remove("hidden");
    document.querySelector(".register").classList.add("hidden");
    document.querySelector(".login").classList.add("hidden");
    document.querySelector("#about-tab").classList.add("active");
    document.querySelector("#register-tab").classList.remove("active");
    document.querySelector("#login-tab").classList.remove("active");
    resetForms();   
}
    // About
document.querySelector("#about-tab").addEventListener('click', function(){
    startStateOne();
});
    // Register
document.querySelector("#register-tab").addEventListener('click', function(){
    document.querySelector(".about").classList.add("hidden");
    document.querySelector(".register").classList.remove("hidden");
    document.querySelector(".login").classList.add("hidden");
    document.querySelector("#about-tab").classList.remove("active")
    document.querySelector("#register-tab").classList.add("active")
    document.querySelector("#login-tab").classList.remove("active")
});
    // Log-In
document.querySelector("#login-tab").addEventListener('click', function(){
    document.querySelector(".about").classList.add("hidden");
    document.querySelector(".register").classList.add("hidden");
    document.querySelector(".login").classList.remove("hidden");
    document.querySelector("#about-tab").classList.remove("active");
    document.querySelector("#register-tab").classList.remove("active");
    document.querySelector("#login-tab").classList.add("active");
});

/* For second state -- User LOGGED IN */
function startStateTwo(){
    document.querySelector(".home").classList.remove("hidden");
    document.querySelector(".deposit").classList.add("hidden");
    document.querySelector(".withdraw").classList.add("hidden");
    document.querySelector(".send").classList.add("hidden");
    document.querySelector(".profile").classList.add("hidden");

    document.querySelector("#home-tab").classList.add("active");
    document.querySelector("#deposit-tab").classList.remove("active");
    document.querySelector("#withdraw-tab").classList.remove("active");
    document.querySelector("#send-tab").classList.remove("active");
    document.querySelector("#profile-tab").classList.remove("active");
    resetForms();
}
    // Home 
document.querySelector("#home-tab").addEventListener('click', function(){
    startStateTwo();
});
    // Deposit
document.querySelector("#deposit-tab").addEventListener('click', function(){
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".deposit").classList.remove("hidden");
    document.querySelector(".withdraw").classList.add("hidden");
    document.querySelector(".send").classList.add("hidden");
    document.querySelector(".profile").classList.add("hidden");

    document.querySelector("#home-tab").classList.remove("active");
    document.querySelector("#deposit-tab").classList.add("active");
    document.querySelector("#withdraw-tab").classList.remove("active");
    document.querySelector("#send-tab").classList.remove("active");
    document.querySelector("#profile-tab").classList.remove("active");
});
    // Withdraw
document.querySelector("#withdraw-tab").addEventListener('click', function(){
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".deposit").classList.add("hidden");
    document.querySelector(".withdraw").classList.remove("hidden");
    document.querySelector(".send").classList.add("hidden");
    document.querySelector(".profile").classList.add("hidden");

    document.querySelector("#home-tab").classList.remove("active");
    document.querySelector("#deposit-tab").classList.remove("active");
    document.querySelector("#withdraw-tab").classList.add("active");
    document.querySelector("#send-tab").classList.remove("active");
    document.querySelector("#profile-tab").classList.remove("active");
});
    // Send Money
document.querySelector("#send-tab").addEventListener('click', function(){
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".deposit").classList.add("hidden");
    document.querySelector(".withdraw").classList.add("hidden");
    document.querySelector(".send").classList.remove("hidden");
    document.querySelector(".profile").classList.add("hidden");

    document.querySelector("#home-tab").classList.remove("active");
    document.querySelector("#deposit-tab").classList.remove("active");
    document.querySelector("#withdraw-tab").classList.remove("active");
    document.querySelector("#send-tab").classList.add("active");
    document.querySelector("#profile-tab").classList.remove("active");
});

    // Profile Tab
document.querySelector("#profile-tab").addEventListener('click', function(){
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".deposit").classList.add("hidden");
    document.querySelector(".withdraw").classList.add("hidden");
    document.querySelector(".send").classList.add("hidden");
    document.querySelector(".profile").classList.remove("hidden");

    document.querySelector("#home-tab").classList.remove("active");
    document.querySelector("#deposit-tab").classList.remove("active");
    document.querySelector("#withdraw-tab").classList.remove("active");
    document.querySelector("#send-tab").classList.remove("active");
    document.querySelector("#profile-tab").classList.add("active");

    bank.updateProfile();
});



// Helper Functions
const formatter = new Intl.NumberFormat('fil-PH', {
    style: 'currency',
    currency: 'PHP',
});
  
// console.log(formatter.format(2500)); /* ₱2,500.00 */