const form = document.querySelector('form')
const date = document.querySelector('#date')
const secret_word = document.querySelector('#secret_word')
const what_am_i = document.querySelector('#what_am_i')
const rafaels_surname = document.querySelector('#rafaels_surname')

document.addEventListener('DOMContentLoaded', () => {
  if(isTokenValid()) {
    window.location.href = "index.html"
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  checkForm()
})

function getCookie() {
  const cookies = document.cookie.split("; ")
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=")
    if (key === "token") return value
  }
  return null
}

function isTokenValid() {
  const token = getCookie()
  const validToken = localStorage.getItem("token")

  return token && token === validToken
}

function checkForm() {
  checkDate()
  checkSecretWord()
  checkWhatAmI()
  checkRafaelsSurname()

  const formItems = form.querySelectorAll('input')
  const isValid = [...formItems].every((item) => !item.classList.contains('error'))

  if (isValid) {
    const token = crypto.getRandomValues(new Uint32Array(1))[0].toString(16)

    document.cookie = `token=${token}; max-age=1200; path=/;`
    localStorage.setItem('token', token)

    window.location.href = "/index.html"
  }
}

function checkDate() {
  if (String(date.value).trim() === "") {
    addError(date, "A Data é obrigatória")
  } else if (String(date.value) !== "2025-04-25") {
    addError(date, "Data errada 😂")
  } else {
    const errorMensage = date.parentElement.querySelector('p')
    errorMensage.textContent = ""
    date.classList.remove('error')
  }
}

function checkSecretWord() {
  if (String(secret_word.value).trim() === "") {
    addError(secret_word, "Essa palavra é obrigatória")
  } else if (String(secret_word.value).toLowerCase() !== "boxta") {
    addError(secret_word, "Num é isso não KKKKK")
  } else {
    const errorMensage = secret_word.parentElement.querySelector('p')
    errorMensage.textContent = ""
    secret_word.classList.remove('error')
  }
}

function checkWhatAmI() {
  if (String(what_am_i.value).trim() === "") {
    addError(what_am_i, "Esse campo é obrigatório")
  } else if (String(what_am_i.value).toLowerCase() !== "aurora") {
    addError(what_am_i, "Nop nop")
  } else {
    const errorMensage = what_am_i.parentElement.querySelector('p')
    errorMensage.textContent = ""
    what_am_i.classList.remove('error')
  }
}

function checkRafaelsSurname() {
  if (String(rafaels_surname.value).trim() === "") {
    addError(rafaels_surname, "O apelido dele é obrigatório")
  } else if (String(rafaels_surname.value).toLowerCase() !== "cavalo") {
    addError(rafaels_surname, "Como que me erra essa 🤨")
  } else {
    const errorMensage = rafaels_surname.parentElement.querySelector('p')
    errorMensage.textContent = ""
    rafaels_surname.classList.remove('error')
  }
}

function addError(element, text) {
  const errorMessage = element.parentElement.querySelector('p')
  errorMessage.textContent = text
  errorMessage.classList.add('visible')

  element.classList.add('error')
}

