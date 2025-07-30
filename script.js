let text = document.querySelector("h1")

let word = []

window.addEventListener("keydown", function oo(det) {

   
    if (det.key !== " ") {
        word.push(det.key)

        heh = word.join("")
        text.textContent = heh
    }

    else if (det.key === " "){
        while(word.length > 0) {
            word.pop();
        }

        word.push("")

        heh = word.join("[SPC]")
        text.textContent = heh
    }

})


console.log(word)