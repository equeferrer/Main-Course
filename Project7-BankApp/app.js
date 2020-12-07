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
            document.querySelector(".alert").classList.remove('hidden');
            document.querySelector("#error").innerText = "User already exist";
            setTimeout(function () { document.querySelector(".alert").classList.add('hidden'); }, 3000);
        } else if (password !== confirmPassword){
            document.querySelector(".alert").classList.remove('hidden');
            document.querySelector("#error").innerText = "Passwords must match";
            setTimeout(function () { document.querySelector(".alert").classList.add('hidden'); }, 3000);
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
            document.querySelector(".alert").classList.remove('hidden');
            document.querySelector("#error").innerText = "User does not exist";
            setTimeout(function () { document.querySelector(".alert").classList.add('hidden'); }, 3000);
        } else if (userLogIn.password !== password) {
            document.querySelector(".alert").classList.remove('hidden');
            document.querySelector("#error").innerText = "Wrong password";
            setTimeout(function () { document.querySelector(".alert").classList.add('hidden'); }, 3000);
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
        const conf = confirm("Are you sure you want to deposit " + formatter.format(amount) + "?");
        if (conf == true) {
            let foundUser = this.usersArray.find(elem => elem.login === true);
            foundUser.balance += amount;
            resetForms();
            this.updateProfile();
            startStateTwo();
    
            document.querySelector(".success").classList.remove('hidden');
            document.querySelector("#success-msg").innerText = "Deposited " + formatter.format(amount) + " to " + user.username;
            setTimeout(function () { document.querySelector(".success").classList.add('hidden'); }, 3000);
    
            console.log("Deposited " + formatter.format(amount) + " to " + user.username);
            console.table(bank.usersArray);
        } else {
            return
        }
    }
    withdraw(user, amount) {
        let foundUser = this.usersArray.find(elem => elem.login === true);

        if (foundUser.balance - amount < 0) {
            document.querySelector(".alert").classList.remove('hidden');
            document.querySelector("#error").innerText = "Insufficient funds";
            setTimeout(function () { document.querySelector(".alert").classList.add('hidden'); }, 3000);
        } else {
            const conf = confirm("Are you sure you want to withdraw " + formatter.format(amount) + "?");
            if (conf == true) {
                foundUser.balance -= amount;
                resetForms();
                this.updateProfile();
                startStateTwo();
    
                document.querySelector(".success").classList.remove('hidden');
                document.querySelector("#success-msg").innerText = "Withdrew " + formatter.format(amount) + " from " + user.username;
                setTimeout(function () { document.querySelector(".success").classList.add('hidden'); }, 3000);
    
                console.log("Withdrew " + formatter.format(amount) + " from " + user.username);
                console.table(bank.usersArray);
            } else {
                return
            }
        }
    }
    send(user, amount, receiver) {
        let found = this.usersArray.some(elem => elem.username === receiver);
        let sender = this.usersArray.find(elem => elem.login === true);
        let receiverUser = this.usersArray.find(elem => elem.username === receiver);

        if (!found){
            document.querySelector(".alert").classList.remove('hidden');
            document.querySelector("#error").innerText = "User " + receiver + " does not exist";
            setTimeout(function () { document.querySelector(".alert").classList.add('hidden'); }, 3000);
        } else if (sender.balance - amount < 0) {
            document.querySelector(".alert").classList.remove('hidden');
            document.querySelector("#error").innerText = "Insufficient funds";
            setTimeout(function () { document.querySelector(".alert").classList.add('hidden'); }, 3000);
        } else if (sender.username === receiverUser.username) {
            document.querySelector(".alert").classList.remove('hidden');
            document.querySelector("#error").innerText = "Cannot send money to the same account";
            setTimeout(function () { document.querySelector(".alert").classList.add('hidden'); }, 3000);
        }else {
            const conf = confirm("Are you sure you want to send " + formatter.format(amount) + " to " + receiverUser.username + "?");
            if (conf == true) {
                sender.balance -= amount;
                receiverUser.balance += amount;
                resetForms();
                this.updateProfile();
                startStateTwo();
    
                document.querySelector(".success").classList.remove('hidden');
                document.querySelector("#success-msg").innerText = "Sent " + formatter.format(amount) + " to " + receiverUser.username;
                setTimeout(function () { document.querySelector(".success").classList.add('hidden'); }, 3000);
    
                console.log("Sent " + amount + " to " + receiverUser.username) 
                console.table(bank.usersArray)
            } else {
                return
            }
        }
    }
    changeName(newName) {
        let foundUser = this.usersArray.find(elem => elem.login === true);
        foundUser.name = newName;
        document.querySelector("#get-name").innerText = foundUser.name;
        
        document.querySelector(".success").classList.remove('hidden');
        document.querySelector("#success-msg").innerText = "Successfully changed name";
        setTimeout(function () { document.querySelector(".success").classList.add('hidden'); }, 3000);

        console.log("Changed name to " + newName);
    }
    changeUsername(newUsername){
        let found = bank.usersArray.some(elem => elem.username === newUsername)
        let foundUser = this.usersArray.find(elem => elem.login === true);

        if (found) {
            document.querySelector(".alert").classList.remove('hidden');
            document.querySelector("#error").innerText = "User already exists!";
            setTimeout(function () { document.querySelector(".alert").classList.add('hidden'); }, 3000);
        } else {
            foundUser.username = newUsername;

            document.querySelector("#get-user").innerText = foundUser.username;
            console.log("Changed username to " + newUsername);

            document.querySelector(".success").classList.remove('hidden');
            document.querySelector("#success-msg").innerText = "Successfully changed username";
            setTimeout(function () { document.querySelector(".success").classList.add('hidden'); }, 3000);
        }
    }
    changePic(newPic){
        let foundUser = this.usersArray.find(elem => elem.login === true);
        foundUser.picture = newPic;
        resetForms();

        document.querySelector(".success").classList.remove('hidden');
        document.querySelector("#success-msg").innerText = "Successfully changed picture";
        setTimeout(function () { document.querySelector(".success").classList.add('hidden'); }, 3000);
    }
    updateProfile(){
        let foundUser = bank.usersArray.find(elem => elem.login === true);
        
        document.querySelector("#get-name").innerText = foundUser.name;
        document.querySelector("#logged-user").innerText = foundUser.username;
        document.querySelector("#get-user").innerText = foundUser.username;
        document.querySelector("#get-balance").innerText = formatter.format(foundUser.balance);
        document.querySelector("#get-balance-2").innerText = formatter.format(foundUser.balance);
        document.querySelector("#avatar").src = foundUser.picture;
    }
}

const bank = new Bank();


/************* EVENT LISTENERS FOR FORMS/BUTTONS *************/
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

// SEND-TO FORM // 
let sendForm = document.querySelector("#send-form");
function handleSend(e){
    e.preventDefault();
    let user = bank.usersArray.find(elem => elem.login === true);
    let amount = parseFloat(document.querySelector("#send-amount").value);
    let receiver = document.querySelector("#receiver").value;
    bank.send(user,amount,receiver);
};
sendForm.addEventListener('submit', handleSend);

let pictureForm = document.querySelector("#picture-form");
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
    let newUsername = prompt("Enter new name").toLowerCase(); 
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

// Close Alert Button - error
document.querySelector(".close-btn").addEventListener('click', function(){
    document.querySelector(".alert").classList.add("hidden");
});

// Close Alert Button - success
document.querySelector(".close-btn").addEventListener('click', function(){
    document.querySelector(".success").classList.add("hidden");
});

/************* DOM MANIPULATION, SHOWING DIFFERENT ACTIVE STATES*************/
/* For first state -- NO user LOGGED IN */
function startStateOne(){
    document.querySelector('#container-one').classList.remove("panel-active")
    resetForms();   
}

const signUpBtn = document.querySelector('#register-tab');
const signInBtn = document.querySelector('#login-tab');
const container = document.querySelector('#container-one');

signUpBtn.addEventListener('click', () => {
	container.classList.add("panel-active");
});

signInBtn.addEventListener('click', () => {
	container.classList.remove("panel-active");
});

let forgotPassword = document.querySelector("#forgot-password");
forgotPassword.addEventListener('click', () => {
    prompt ("Enter your username");
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
    document.querySelector(".transaction").classList.add("hidden");
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
    document.querySelector(".transaction").classList.remove("hidden");
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
    document.querySelector(".transaction").classList.remove("hidden");

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
    document.querySelector(".transaction").classList.remove("hidden");

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
    document.querySelector(".transaction").classList.add("hidden");

    bank.updateProfile();
});



// Helper Function for number format
const formatter = new Intl.NumberFormat('fil-PH', {
    style: 'currency',
    currency: 'PHP',
});


  
// console.log(formatter.format(2500)); /* ₱2,500.00 */

