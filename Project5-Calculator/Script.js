// Define these functions:
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

const calculate = (n1, operator, n2) => {  
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
    if (operator === 'add') return firstNum + secondNum 
    if (operator === 'subtract') return firstNum - secondNum  
    if (operator === 'multiply') return firstNum * secondNum
    if (operator === 'divide') return firstNum / secondNum
}

keys.addEventListener('click', e => {   
    if (e.target.matches('button')) {    
    // define e and action
        const key = e.target
        const action = key.dataset.action
        // define key Content, displayedNum (TEXTCONTENT PROPERTY!)
        const keyContent = key.textContent
        const displayedNum = display.textContent
        // define previousKeyType
        const previousKeyType = calculator.dataset.previousKeyType
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
        // if no data action - it is a number key!
        if (!action) {
            console.log('number key!')
            // display number //added previous key type here\\
            if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = keyContent
            } else {
                // display several digits
                display.textContent = displayedNum + keyContent
            }
            // previousKeyType
            calculator.dataset.previousKeyType = 'number'
        }
        // define as operator keys (+-*/)
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            let secondValue = displayedNum     

            if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue
                // Update calculated value as firstValue
                calculator.dataset.firstValue = calcValue
                } else {
                // If there are no calculations, set displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum
            }
            key.classList.add('is-depressed')
            // Add custom attribute
            calculator.dataset.previousKeyType = 'operator'
            // Store data of first value and operator ((since the second value is seen))
                // calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }
        // if decimal
        if (action === 'decimal') {
            if (!displayedNum.includes('.') && previousKeyType !== 'operator'){
                // Concatenate decimal with numbers /// added for no .
                display.textContent = displayedNum + '.'
            } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = '0.'
            }
            calculator.dataset.previousKeyType = 'decimal'

            console.log('decimal key!')
        }
        if (action !== 'clear'){ 
            const clearButton = calculator.querySelector('[data-action=clear]')
            clearButton.textContent = 'CE'
        }
        // if you press AC
        if (action === 'clear') {      
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = ''
                calculator.dataset.modValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
                } else {
                    key.textContent = 'AC'
                }
            
            display.textContent = 0
            calculator.dataset.previousKeyType = 'clear'
        }
        // EQUAL KEY
        if (action === 'calculate') {
            console.log('equal key!')
            // define values
            let firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            let secondValue = displayedNum
            
            if (firstValue) {
                if (previousKeyType === 'calculate'){
                    firstValue = displayedNum
                    secondValue = calculator.dataset.modValue
                }
                display.textContent = calculate(firstValue, operator, secondValue)
            }
        // Set modValue attribute
            calculator.dataset.modValue = secondValue
            calculator.dataset.previousKeyType = 'calculate'
        }

    }
})