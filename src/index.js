//adding event listeners 
const buttonOne = document.getElementById("buttonOne")
const buttonTwo = document.getElementById("buttonTwo")
const buttonThree = document.getElementById("buttonThree")
const buttonFour = document.getElementById("buttonFour")
const buttonFive = document.getElementById("buttonFive")
const buttonSix = document.getElementById("buttonSix")
const buttonSeven = document.getElementById("buttonSeven")
const buttonEight = document.getElementById("buttonEight")

//adding event listeners
buttonOne.addEventListener("click", (event) => {
  console.log("Booking Sarova White Sands");
});

buttonTwo.addEventListener("click", (event) => {
    console.log("Booking Diamonds Malindi")
})

buttonThree.addEventListener("click", (e) => {
    console.log("Booking Villa Ameera")
})

buttonFour.addEventListener("click", (e) => {
    console.log("Booking English Point Marina")
})

buttonFive.addEventListener("click", (e) => {
    console.log("Booking Chale Island")
})

buttonSix.addEventListener("click", (e) => {
    console.log("Booking Eliye Springs")
})

buttonSeven.addEventListener("click", (e) => {
    console.log("Booking L. Nakuru Lodge")
})

buttonEight.addEventListener("click", (e) => {
    console.log("Booking Acacia Premiere")
}) 

//fetch
const options = {
  method: "GET",
  headers: {
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": "EchoapiRuntime/1.1.0",
    Connection: "keep-alive",
  },
 // body: "false", -> commented out
};

fetch("http://localhost:3000/hotels", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));