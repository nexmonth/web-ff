function send(){
  const name = document.getElementById("name").value
  const message = document.getElementById("message").value
  open(`https://wa.me/+6282321535578?text=${name},${message}`)
}