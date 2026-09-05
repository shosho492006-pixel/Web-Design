let handleMouseEvent = (element) => {

    let liElements = document.querySelectorAll("li")

    liElements.forEach((item) => {
        item.classList.remove("bg-primary")
    })

    element.classList.add("bg-primary")
}

let users = []

function addUser(){

    let name = document.getElementById("name").value

    let email = document.getElementById("email").value

    let user = {
        name: name,
        email: email
    }

    users.push(user)

    console.log(users)
}