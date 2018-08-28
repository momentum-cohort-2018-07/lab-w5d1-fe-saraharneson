// import 'shoelace-css/dist/shoelace.css'

document.getElementById('parking-form').addEventListener('submit', function (event) {
  event.preventDefault()
  validateName()
  validateCarYear()
  validateCarMake()
  validateCarModel()
  validateStart()
  // validateCarFields()
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
  // errorDiv.innerHTML = `<span style='display:block white-space:pre-line'>${enteredInfo.getAttribute('id')} field required!</span>`
  errorDiv.innerHTML = `<span style="white-space: pre-line"> \n ${enteredInfo.getAttribute('id')} field required!</span>`
  // console.log(errorDiv)
  enteredInfo.parentElement.appendChild(errorDiv)
}

function markValid (enteredInfo) {
  enteredInfo.parentElement.classList.add('input-valid')
  enteredInfo.parentElement.classList.remove('input-invalid')
  // enteredInfo.classList.remove('input-invalid')
}

function validateName () {
  let nameEntered = document.getElementById('name').value.trim()

  let enteredInfo = document.getElementById('name')

  if (nameEntered === '') {
    markInvalid(enteredInfo)
  } else {
    markValid(enteredInfo)
  }
}
// ATTEMPT TO COMBINE CAR FIELD VALIDATION
// function validateCarFields(enteredInfo) {
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

function validateCarYear () {
  let carYearEntered = document.getElementById('car-year').value.trim()

  let enteredInfo = document.getElementById('car-year')

  if (carYearEntered === '') {
    markInvalid(enteredInfo)
    let errorDiv = document.createElement('div')
    errorDiv.innerHTML = `<span style="white-space: pre-line"> \n ${enteredInfo.getAttribute('id')} field required!</span>`
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
console.log('Where is the error?')

// var errorDiv = document.createElement('div')
// errorDiv.classList.add('errorMsg')
// errorDiv.innerText = 'Name field required.'

// var field = document.getElementById('name-field')
// field.appendChild(errorDiv)
// field.classList.add('input-invalid')

// errorDiv()

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
