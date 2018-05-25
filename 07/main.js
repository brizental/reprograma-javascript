const columns = document.querySelectorAll(".column")
for (const column of columns) {
    const colors = column.children
    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener("click", function(event) {
            const bg = event.target.style.backgroundColor
            const colorParent = event.target.parentElement
            const colorParentSibling = colorParent.nextElementSibling
            if (colorParentSibling !== null) {
                const colorsFromSibling = colorParentSibling.children
                colorsFromSibling[Math.floor(i/2)].style.backgroundColor = bg
            }
        })
    }
}