window.addEventListener('load', function() {

	let firstInput = document.querySelector('.firstInput')
	let secondInput = document.querySelector('.secondInput')
	let operator = document.querySelector('#operator')
	let button = document.querySelector('.button')
	let result = document.querySelector('.result')

	button.addEventListener('click', calculateResult)

	function calculateResult() {
		let firstOperand = parseFloat(firstInput.value) || 0
		let secondOperand = parseFloat(secondInput.value) || 0

		switch (operator.value) {
			case 'add':
			  result.innerHTML = firstOperand + secondOperand
			  break
			case 'subtract':
			  result.innerHTML = firstOperand - secondOperand
			  break
			case 'multiply':
				result.innerHTML = firstOperand * secondOperand
			  break
			case 'divide':
			  result.innerHTML = firstOperand / secondOperand
			  break
		}
		button.disabled = true
	}

	[firstInput, secondInput, operator].forEach(el => el.addEventListener('input', enableButton)); // !!!! f**king semicolon
	[firstInput, secondInput].forEach(el => el.addEventListener('input', clearInput))

	function clearInput() {
		this.value = this.value.replace(/[^\d,.]/g, '')
	}

	function enableButton() {
		if (button.disabled) button.disabled = false
	}
})