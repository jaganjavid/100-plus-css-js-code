let pointer = document.
querySelectorAll(".pointer")

document.addEventListener
("mousemove", mouseMove)

function mouseMove(e){
	let x = e.clientX
	let y = e.clientY
	pointer.forEach(function(cursor){
		cursor.style.left = x + "px"
		cursor.style.top = y + "px"
	})
}