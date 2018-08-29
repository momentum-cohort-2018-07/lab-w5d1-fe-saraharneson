import 'shoelace-css/dist/shoelace.css'
import './styles.css'

document.getElementById('parking-form').addEventListener('submit', function (event) {
  event.preventDefault()
  validateName()
  // the three function calls which follow would not be called if I could get the tri-validation input-group one to work.
  validateCarYear()
  validateCarMake()
  validateCarModel()
  // the called function below corresponds to the input group validation code (on hold below)
  // validateCarFields()
  validateStart()
  validateDays()
  validateCard()
  validateCvv()
  validateExp()
  //
})

function markInvalid (enteredInfo) {
  console.log(enteredInfo)
  // enteredInfo.classList.remove('input-valid')
  enteredInfo.parentElement.classList.add('input-invalid')
  enteredInfo.parentElement.classList.remove('input-valid')
  // create div, give class name and specify text (message), append
  let errorDiv = document.createElement('div')
  errorDiv.classList.add('errorMsg')
  // Below, I was trying to get this input group to disply as block
  // errorDiv.innerHTML = `<span style="white-space: pre-line"> \n ${enteredInfo.getAttribute('id')} field required!</span>`
  errorDiv.innerHTML = `<span class='new-line'> \n ${enteredInfo.getAttribute('id')} field required!</span>`
  // console.log(errorDiv)
  enteredInfo.parentElement.appendChild(errorDiv)
}

// if errorDiv.innerHTML !== ''

function markValid (enteredInfo) {
  enteredInfo.parentElement.classList.add('input-valid')
  enteredInfo.parentElement.classList.remove('input-invalid')
}

function validateName () {
  let nameEntered = document.getElementById('name').value.trim()

  let enteredInfo = document.getElementById('name')

  if (nameEntered === '') {
    markInvalid(enteredInfo)
  } else {
    markValid(enteredInfo)
  // below, attempt to clear error message alerts:
  // let errorDiv = document.createElement('div')
  // errorDiv.classList.remove()
  }
}
// ATTEMPT TO COMBINE CAR FIELD VALIDATION AS UNIT

// let carYearEntered = document.getElementById('car-year').value.trim()
// let carMakeEntered = document.getElementById('car-make').value.trim()
// let carModelEntered = document.getElementById('car-model').value.trim()

// function validateCarFields (enteredInfo) {
//   if ((carYearEntered === '') || (carMakeEntered === '') || (carModelEntered === '')) {
//     enteredInfo.parentElement.classList.add('input-invalid')
//     enteredInfo.parentElement.classList.remove('input-valid')
//     // create div, give class name and specify text (message), append
//     let errorDiv = document.createElement('div')
//     errorDiv.classList.add('errorMsg')
//     // errorDiv.innerHTML = `<span style='display:block white-space:pre-line'>${enteredInfo.getAttribute('id')} field required!</span>`
//     errorDiv.innerHTML = 'All car fields are required!'
//     enteredInfo.parentElement.appendChild(errorDiv)
//   } else if ((carYearEntered !== '') && (carMakeEntered !== '') && (carModelEntered !== '')) {
//     markValid(enteredInfo)
//   }
// }

function validateCarYear () {
  let carYearEntered = document.getElementById('car-year').value.trim()

  let enteredInfo = document.getElementById('car-year')

  if (carYearEntered === '') {
    markInvalid(enteredInfo)
    let errorDiv = document.createElement('div')
    errorDiv.innerHTML = `<span class="new-line"> \n ${enteredInfo.getAttribute('id')} field required!</span>`
  } else {
    markValid(enteredInfo)
  }
}

function validateCarMake () {
  let carMakeEntered = document.getElementById('car-make').value.trim()

  let enteredInfo = document.getElementById('car-make')

  if (carMakeEntered === '') {
    markInvalid(enteredInfo)
  } else {
    markValid(enteredInfo)
  }
}

function validateCarModel () {
  let carModelEntered = document.getElementById('car-model').value.trim()

  let enteredInfo = document.getElementById('car-model')

  if (carModelEntered === '') {
    markInvalid(enteredInfo)
  } else {
    markValid(enteredInfo)
  }
}

function validateStart () {
  let startEntered = document.getElementById('start-date').value.trim()

  let enteredInfo = document.getElementById('start-date')

  if (startEntered === '') {
    markInvalid(enteredInfo)
  } else {
    markValid(enteredInfo)
  }
}

function validateDays () {
  let daysEntered = document.getElementById('days').value.trim()

  let enteredInfo = document.getElementById('days')

  if (daysEntered === '') {
    markInvalid(enteredInfo)
  } else {
    markValid(enteredInfo)
  }
}

function validateCard () {
  let cardEntered = document.getElementById('credit-card').value.trim()

  let enteredInfo = document.getElementById('credit-card')

  if (cardEntered === '') {
    markInvalid(enteredInfo)
  } else {
    markValid(enteredInfo)
  }
}

function validateCvv () {
  let cvvEntered = document.getElementById('cvv').value.trim()

  let enteredInfo = document.getElementById('cvv')

  if (cvvEntered === '') {
    markInvalid(enteredInfo)
  } else {
    markValid(enteredInfo)
  }
}

function validateExp () {
  let expEntered = document.getElementById('expiration').value.trim()

  let enteredInfo = document.getElementById('expiration')

  if (expEntered === '') {
    markInvalid(enteredInfo)
  } else {
    markValid(enteredInfo)
  }
}

// var errorDiv = document.createElement('div')
// errorDiv.classList.add('errorMsg')
// errorDiv.innerText = 'Name field required.'

// var field = document.getElementById('name-field')
// field.appendChild(errorDiv)
// field.classList.add('input-invalid')

// let carYearEntered = document.getElementById('car-year').value.trim()
// let carMakeEntered = document.getElementById('car-make').value.trim()
// let carModelEntered = document.getElementById('car-model').value.trim()
// let startEntered = document.getElementById('start-date').value.trim()
// let daysEntered = document.getElementById('days').value.trim()
// let cardEntered = document.getElementById('credit-card').value.trim()
// let cvvEntered = document.getElementById('cvv').value.trim()
// let expEntered = document.getElementById('expiration').value.trim()

// function Error () {
//   var errorDiv = document.createElement('div')
//   errorDiv.classList.add('errorMsg')
//   errorDiv.innerText = 'Field required!'
// }
