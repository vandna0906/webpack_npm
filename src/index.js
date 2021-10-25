import axios from "axios"

import navbar from "../component/navbar.js"

import { getdata, append } from "../source/showdata.js"

document.body.innerHTML = navbar()

let clicksearch = document.getElementById("clicksearch")
clicksearch.addEventListener("click", searching)

async function searching() {
  let input = document.getElementById("input").value
  axios
    .get(
      `https://api.unsplash.com/search/photos?page=2&query=${input}&client_id=zUOo2L5vl_8vXn2_ILQbLyIg238RE-HgABzpMjdFIFg`
    )
    .then(res => {
      console.log(res.data.results)
      getimages(res.data.results)
    })
}

function getimages(d) {
  let parent = document.getElementById("data1")
  parent.innerHTML = null
  d.forEach(({ alt_description, urls: { small } }) => {
    let div = document.createElement("div")
    let p = document.createElement("p")
    p.textContent = alt_description
    let img = document.createElement("img")
    img.src = small
    div.append(p, img)
    parent.append(div)
    document.querySelectorAll("div img").forEach(image => {
      image.onclick = () => {
        document.querySelector(".popup-image").style.display = "block"
        document.querySelector(".popup-image img").src =
          image.getAttribute("src")
      }
    })
    document.querySelector(".popup-image span").onclick = () => {
      document.querySelector(".popup-image").style.display = "none"
    }
  })
}
let appendmain = document.getElementById("data1")

let appendedi = document.getElementById("edi")
appendedi.addEventListener("click", edit)
async function edit() {
  appendmain.innerHTML = null
  let getedi = getdata(
    "https://api.unsplash.com/search/collections?client_id=zUOo2L5vl_8vXn2_ILQbLyIg238RE-HgABzpMjdFIFg&query=Editorial&page=3"
  )
  getedi.then(res => {
    append(res, appendmain)
  })
}

let appendwall = document.getElementById("wall")
appendwall.addEventListener("click", wall)
async function wall() {
  appendmain.innerHTML = null
  let getedi = getdata(
    "https://api.unsplash.com/search/collections?client_id=zUOo2L5vl_8vXn2_ILQbLyIg238RE-HgABzpMjdFIFg&query=Wallpapers&page=2"
  )
  getedi.then(res => {
    append(res, appendmain)
  })
}

let appendtext = document.getElementById("text")
appendtext.addEventListener("click", text)
async function text() {
  appendmain.innerHTML = null
  let getedi = getdata(
    "https://api.unsplash.com/search/collections?client_id=zUOo2L5vl_8vXn2_ILQbLyIg238RE-HgABzpMjdFIFg&query=Texture & Patterns&page=2"
  )
  getedi.then(res => {
    append(res, appendmain)
  })
}

let appendnatu = document.getElementById("natu")
appendnatu.addEventListener("click", natu)
async function natu() {
  appendmain.innerHTML = null
  let getedi = getdata(
    "https://api.unsplash.com/search/collections?client_id=zUOo2L5vl_8vXn2_ILQbLyIg238RE-HgABzpMjdFIFg&query=Nature&page=2"
  )
  getedi.then(res => {
    append(res, appendmain)
  })
}

let appendevent = document.getElementById("event")
appendevent.addEventListener("click", event)
async function event() {
  appendmain.innerHTML = null
  let getedi = getdata(
    "https://api.unsplash.com/search/collections?client_id=zUOo2L5vl_8vXn2_ILQbLyIg238RE-HgABzpMjdFIFg&query=Current Events&page=2"
  )
  getedi.then(res => {
    append(res, appendmain)
  })
}

let appendarchi = document.getElementById("archi")
appendarchi.addEventListener("click", archi)
async function archi() {
  appendmain.innerHTML = null
  let getedi = getdata(
    "https://api.unsplash.com/search/collections?client_id=zUOo2L5vl_8vXn2_ILQbLyIg238RE-HgABzpMjdFIFg&query=Architecture&page=2"
  )
  getedi.then(res => {
    append(res, appendmain)
  })
}

let appendFilm = document.getElementById("Fil")
appendFilm.addEventListener("click", film)
async function film() {
  appendmain.innerHTML = null
  let getedi = getdata(
    "https://api.unsplash.com/search/collections?client_id=zUOo2L5vl_8vXn2_ILQbLyIg238RE-HgABzpMjdFIFg&query=Film&page=2"
  )
  getedi.then(res => {
    append(res, appendmain)
  })
}

let appendani = document.getElementById("ani")
appendani.addEventListener("click", ani)
async function ani() {
  appendmain.innerHTML = null
  let getedi = getdata(
    "https://api.unsplash.com/search/collections?client_id=zUOo2L5vl_8vXn2_ILQbLyIg238RE-HgABzpMjdFIFg&query=Animals&page=2"
  )
  getedi.then(res => {
    append(res, appendmain)
  })
}

let appendfash = document.getElementById("fash")
appendfash.addEventListener("click", fash)
async function fash() {
  appendmain.innerHTML = null
  let getedi = getdata(
    "https://api.unsplash.com/search/collections?client_id=zUOo2L5vl_8vXn2_ILQbLyIg238RE-HgABzpMjdFIFg&query=Fashion&page=2"
  )
  getedi.then(res => {
    append(res, appendmain)
  })
}