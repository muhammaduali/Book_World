var over = document.querySelector(".overlay")
var pop = document.querySelector(".pop")


var plus = document.getElementById("btnpop")
plus.addEventListener("click", function() {
    over.style.display = "block"
    pop.style.display = "block"

})

var can = document.getElementById("cancel")
can.addEventListener("click", function(event) {
    event.preventDefault()
    over.style.display = "none"
    pop.style.display = "none"

})
var ad = document.getElementById("add")
ad.addEventListener("click", function(event) {
    event.preventDefault()
    over.style.display = "none"
    pop.style.display = "none"

})

var body = document.querySelector(".body")
var addnote = document.getElementById("add")
var title = document.getElementById("title")
var author = document.getElementById("author")
var d = document.getElementById("des")

addnote.addEventListener("click", function(event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "contain")
    div.innerHTML = `<h2 style="color:#FD6569">${title.value}</h2>
    <h4>${author.value}</h4>
    <p>${d.value }</p>
    <button class="btn" onclick="del(event)">Delete</button>`
    body.append(div)

})

function del(event) {
    event.target.parentElement.remove()

}