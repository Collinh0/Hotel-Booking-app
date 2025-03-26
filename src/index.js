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
  
//dark/light theme
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;


    // Toggle function
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode")
    });

 //fetchig and displaying the hotels
 const hotelContainer = document.getElementById("hotelId");
 const searchInput = document.getElementById("search");

 let hotelsData = [];

 fetch("http://localhost:3000/hotels")
  .then(res => res.json())
  .then(hotels => {
    hotelsData = hotels; 
    displayHotels(hotelsData); 
  });

 function displayHotels(hotels) {
  hotelContainer.innerHTML = hotels
    .map(
      (hotel) => `
      <div class="hotel">
    <img src="${hotel.poster}" alt="${hotel.name}" class="hotel-image">
        <h3>${hotel.name}</h3>
        <p> Location: ${hotel.location}</p>
        <p> Price: ksh${hotel.rates}</p>
        <button onclick = "bookHotel(${hotel.id})" ${
        hotel.availability ? "" : "disabled"
      }
        class = "buttonjs"> Book Now
         </button>
      </div>
    `
    )
    .join("");
}

// Search filter
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredHotels = hotelsData.filter(hotel =>
        hotel.name.toLowerCase().includes(searchTerm)
    );
    displayHotels(filteredHotels);
});

//booking

 function openBookingForm(hotelId) {
  fetch(`http://localhost:3000/hotels/${hotelId}`)
    .then((res) => res.json())
    .then((hotel) => {
      document.getElementById("booking-form").style.display = "block";
      document.getElementById("hotel-name").innerText = hotel.name; // Show hotel name in form
      document.getElementById("hotel-id").value = hotel.id; // Store ID for submission
    });
}
function openBookingForm(hotelId) {
  fetch(`http://localhost:3000/hotels/${hotelId}`)
    .then((res) => res.json())
    .then((hotel) => {
      document.getElementById("booking-form").style.display = "block";
      document.getElementById("hotel-name").innerText = hotel.name; // Show hotel name in form
      document.getElementById("hotel-id").value = hotel.id; // Store ID for submission
    });
}
document.getElementById("booking-form")
  document.addEventListener("submit", function (event) {
    event.preventDefault();

    const bookingData = {
      hotelId: document.getElementById("hotelId").value,
      email: document.getElementById("email").value,
      checkIn: document.getElementById("check-in").value,
      payment: document.getElementById("payment").value,
    };

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Hotel booked successfully!");
        document.getElementById("booking-form").style.display = "none";
        document.getElementById("booking-form").reset(); 
      });
  }); 
  

 






     

 