// Define all variables
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
// const decimalButton = document.querySelector('[data-decimal]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


class Calculator {
    //store all data //
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.previousOperand = ""
        this.currentOperand = ""
        this.operand = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== ""){ 
            this.compute()
        }
        this.operation = operation 
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    compute() {
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case "+": 
                computation = prev + current
                break;
            case "-":
                computation = prev - current
                break;
            case "*":
                computation = prev * current
                break;
            case "/":
                computation = prev / current
                break;
            default:
                return;
        }
        this.currentOperand = computation 
        this.operand = undefined
        this.previousOperand = ""
    }

    getDisplayNum(number){
        const floatNumber = parseFloat(number)
        if (isNaN(number)) return ""
        return floatNumber.toLocaleString("en")
    }
    updateDisplay () {
        this.currentOperandTextElement.innerText = this.getDisplayNum(this.currentOperand)
        if (this.operation != null ){
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNum(this.previousOperand)} ${this.operation}`
        }   
    }
}


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()    
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()    
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()    
    calculator.updateDisplay()
})