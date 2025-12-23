const lines = document.querySelectorAll(".line")

let delay = 0

lines.forEach(line => {
  setTimeout(() => {
    line.style.opacity = 1
  }, delay)
  delay += 1500
})