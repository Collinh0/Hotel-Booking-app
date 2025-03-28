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

 //fetching and displaying the hotels
 const hotelContainer = document.getElementById("hotelss");
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
      (hotel) => `<div class="hotel">
       <div class="star-section">
         <button id="star-${hotel.id}" onclick="toggleStar(${hotel.id}, ${
        hotel.starred
      })">
            ${hotel.starred ? "⭐ Starred" : "☆ Star"}
          </button>
        </div>
    <img src="${hotel.poster}" alt="${hotel.name}" class="hotel-image">
        <h3>${hotel.name}</h3>
        <p> Location: ${hotel.location}</p>
        <p> Price: ksh${hotel.rates}</p>
        <button onclick = "openBookingForm(${hotel.id}, '${
        hotel.name 
      }')">Book Hotel</button>
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
 
//Bookmarking feature
  function toggleStar(hotelId, isStarred) {
    fetch(`http://localhost:3000/hotels/${hotelId}`)
      .then((res) => res.json())
      .then((hotel) => {
        const newStarStatus = !hotel.starred;
        return fetch(`http://localhost:3000/hotels/${hotelId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ starred: newStarStatus }),
        });
      })
      .then(() => {
        document.getElementById(`star-${hotelId}`).innerText = isStarred
          ? "☆ Bookmark"
          : "⭐ Bookmarked"; 
      })
      //.catch((error) => console.error("Error updating star status:", error));
  }

//fn to open booking form
function openBookingForm(hotelId, hotelName) {
  document.getElementById("booking-form").style.display = "block";
  document.getElementById("hotel-name").innerText = hotelName;
  document.getElementById("hotel-id").value = hotelId;
}

// Close booking form
function closeBookingForm() {
  document.getElementById("booking-form").style.display = "none";
}

//Booking submission
 document.getElementById("bookingForm")
  document.addEventListener("submit", function (event) {
    event.preventDefault();

    const bookingData = {
      hotelId: document.getElementById("hotel-id").value,
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
        alert(" Booked!");
        document.getElementById("booking-form").style.display = "none";
        document.getElementById("bookingForm").reset();
      })
      .catch((error) => {
        console.error("Error booking hotel:", error);
        alert("Booking failed. Please try again.");
      });
  }); 








     

 