// Define these functions:
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')



keys.addEventListener('click', e => {   
  if (e.target.matches('button')) {
    // console.log("Hello Yasmin!")
    
    // define e and action
    const key = e.target
    const action = key.dataset.action
    // define key Content, displayedNum (TEXTCONTENT PROPERTY!)
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // define previousKeyType
    const previousKeyType = calculator.dataset.previousKeyType

    // if no data action - it is a number key!
    if (!action) {
      console.log('number key!')
      // display number //added previous key type here\\
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
      } else {
        // display several digits
        display.textContent = displayedNum + keyContent
      }
      // previousKeyType???
      calculator.dataset.previousKey = 'number'
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
      const secondValue = displayedNum

      // Note: It's sufficient to check for firstValue and operator because secondValue always exists
      if (firstValue && operator && secondValue !== 'operator') {
        display.textContent = calculate(firstValue, operator, secondValue)
      }

      console.log('operator key!')
      key.classList.add('is-depressed')
        // Add custom attribute
        calculator.dataset.previousKeyType = 'operator'
        // Store data of first value and operator ((since the second value is seen))
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action
    }

    // if decimal
    if (action === 'decimal') {
      if (!displayedNum.includes('.')){
              // Concatenate decimal with numbers /// added for no .
        display.textContent = displayedNum + '.'
      } else if (previousKeyType === 'operator') {
        display.textContent = '0.'
      }
      calculator.dataset.previousKeyType = 'decimal'

      console.log('decimal key!')
    }
    
    // if you press AC
    if (action === 'clear') {
      console.log('clear key!')
      //
      calculator.dataset.previousKeyType = 'clear'
    }
    

    // EQUAL KEY
    if (action === 'calculate') {
      console.log('equal key!')
      // define values
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
      
      // Define Calculate here by placing n1 +-*/ n2
      const calculate = (firstValue, operator, secondValue =>{
        let result = ""
        // Parse Int -- interger, parse float -- allows decimals
        if (operator === "add"){
          result = parseFloat(firstValue) + parseFloat(secondValue)
        } else if (operator === 'subtract'){
          result = parseFloat(firstValue) - parseFloat(secondValue)
        } else if (operator === 'multiply'){
          result = parseFloat(firstValue) * parseFloat(secondValue)
        } else if (operator === 'divide'){
          result = parseFloat(firstValue) / parseFloat(secondValue)
        }
      return result
      })

      display.textContent = calculate(firstValue, operator, secondValue)
      // define??
      calculator.dataset.previousKeyType = 'calculate'
    }

    // Remove .is-depressed class from all keys **** STUDY WHERE TO PLACE LATER
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
  }
})