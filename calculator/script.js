class Calculator {
    constructor(currentOperandTextElement, previousOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        if (this.currentOperand.length > 1) {
            this.currentOperand = this.currentOperand.slice(0, -1);
        } else {
            this.currentOperand = '0'; 
        }
    }

    appendNumber(number) {
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            if (this.currentOperand.length < 15) { 
                if (number === '.' && this.currentOperand.includes('.')) return;
                this.currentOperand += number;
            }
        }
    }

    chooseOperation(operation) {
        if (operation === '%') {
            const value = parseFloat(this.currentOperand) / 100;
            this.currentOperand = value.toString();
            return;
        }

        if (this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }

        this.currentOperand = computation.toString();
        this.operation = undefined; 
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandTextElement.textContent = this.currentOperand;

        if (this.operation != null) {
            this.previousOperandTextElement.textContent = `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandTextElement.textContent = '';
        }
    }
}

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const currentOperandTextElement = document.getElementById('current-operand');
const previousOperandTextElement = document.getElementById('previous-operand');

// Create the calculator instance
const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement);

// Add event listeners for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
    });
});

// Add event listeners for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const operator = button.textContent;

        if (operator === 'C') {
            calculator.clear(); 
        } else if (operator === '=') {
            calculator.compute();
        } else if (operator !== '⌫') { 
            calculator.chooseOperation(operator);
        }

        calculator.updateDisplay();
    });
});

// Separate event listener for the delete button (⌫)
deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

// Event listener for clear button
clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});
