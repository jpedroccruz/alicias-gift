const camera = document.querySelector('.camera_container')
const audio = new Audio("assets/camera-flash.mp3")
const photos = [
  "imgs/photo1.jpg",
  "imgs/photo2.jpg",
  "imgs/photo3.jpg",
  "imgs/photo4.jpg",
  "imgs/photo5.jpg",
  "imgs/photo6.jpg",
  "imgs/photo7.jpg",
  "imgs/photo8.jpg",
  "imgs/photo9.jpg",
  "imgs/photo10.jpg",
  "imgs/photo11.jpg",
  "imgs/photo12.jpg",
  "imgs/photo13.jpg",
  "imgs/photo14.jpg",
  "imgs/photo15.jpg",
  "imgs/photo16.jpg",
  "imgs/photo17.jpg",
  "imgs/photo18.jpg",
  "imgs/photo19.jpg"
]

const phrases = [
  "Seu sorriso é o mais maravilhoso que já vi.",
  "Você ilumina qualquer lugar com sua presença encantadora.",
  "Sempre carinhosa e atenciosa, uma mulher incrível.",
  "Uma beleza que transcende o físico, você é a flor mais rara do jardim.",
  "Sempre sorridente e com um coração generoso.",
  "Um coração tão puro e bondoso quanto o seu sorriso.",
  "Tão simples mas bela, você é a definição de graça.",
  "Uma garota muito especial, com um brilho único no olhar.",
  "Graciosa e elegante, uma mulher com um charme inigualável.",
  "Estar ao seu lado é como estar viver um sonho.",
  "Sempre gentil e doce, simplesmente a mais pura definição de amor.",
  "Um olhar magnifico que reflete uma alma linda.",
  "Simples e delicada, você é o verdadeiro significado de beleza.",
  "Muito mais que bonita, você é uma pessoa incrível por dentro e por fora.",
  "Sempre brincalhona e cheia de vida, você transforma qualquer dia comum em algo especial.",
  "A mais bela das flores, com um coração tão grande quanto o universo.",
  "Seu jeito meigo, carinhoso e belo conquista a todos ao seu redor.",
  "Uma mulher muito forte e determinada, com potencial para conquistar o mundo.",
  "Tão encantadora quanto o brilho do sol em um dia de verão."
]

let index = 0

document.addEventListener('DOMContentLoaded', () => {
  if (!isTokenValid()) {
    window.location.href = "login.html"
  }
})

camera.addEventListener('click', () => {
  audio.play()
  flash()
  changePhotoAndDescription()
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

function changePhotoAndDescription() {
  const photo = document.querySelector('.photo_container img')
  const description = document.querySelector('span')

  description.textContent = phrases[index]
  photo.src = photos[index]

  if (index++ === 18) index = 0
}

function flash() {
  const flash = document.createElement("div")
  flash.classList.add("flash")
  document.body.appendChild(flash)

  setTimeout(() => flash.remove(), 400)
}