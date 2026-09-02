let handleMouseEvent = (element) => {

    let liElements = document.querySelectorAll("li")

    liElements.forEach((item) => {
        item.classList.remove("bg-primary")
    })

    element.classList.add("bg-primary")
}