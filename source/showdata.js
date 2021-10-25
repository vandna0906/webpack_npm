async function getdata(url) {
    let res = await fetch(url)
    let data = await res.json()
    return data.results
  }
  function append(d, appendmain) {
    d.forEach(
      ({
        cover_photo: {
          alt_description,
          urls: { small },
        },
      }) => {
        let div = document.createElement("div")
  
        let p = document.createElement("p")
        p.textContent = alt_description
        let img = document.createElement("img")
        img.src = small
        div.append(p, img)
        appendmain.append(div)
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
      }
    )
  }
  
  export { getdata, append }