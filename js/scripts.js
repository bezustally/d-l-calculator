window.addEventListener('load', function() {

	let firstInput = document.querySelector('.firstInput')
	let secondInput = document.querySelector('.secondInput')
	let operator = document.querySelector('#operator')
	let button = document.querySelector('.button')
	let result = document.querySelector('.result')

	button.addEventListener('click', getResult)

	function getResult() {
		let firstOperand = parseFloat(firstInput.value) || 0 // if number is not set, use zero
		let secondOperand = parseFloat(secondInput.value) || 0

		let calculateFrom = {
			add: (a, b) => a + b,
			subtract: (a, b) => a - b,
			multiply: (a, b) => a * b,
			divide: (a, b) => a / b,
			modulo: (a, b) => a % b,
		}

		result.textContent = calculateFrom[operator.value](firstOperand, secondOperand)

		button.disabled = true
	}

	[firstInput, secondInput, operator].forEach(el => el.addEventListener('input', enableButton));
	[firstInput, secondInput].forEach(el => el.addEventListener('input', clearInput))

	function clearInput() {
		this.value = this.value.replace(/[^\d,.]/g, '')
	}

	function enableButton() {
		if (button.disabled) button.disabled = false
	}
})