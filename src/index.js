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

    const hotelContainer = document.getElementById("hotels");
 const searchInput = document.getElementById("search");

 let hotelsData = [];

 fetch("http://localhost:3000/hotels")
  .then(res => res.json())
  .then(hotels => {
    hotelsData = hotels; // Store hotel data globally
    displayHotels(hotelsData); // Display all hotels initially
  });

 function displayHotels(hotels) {
  hotelContainer.innerHTML = hotels
    .map(hotel => `
      <div class="hotel">
        <img src="${hotel.poster}" alt="${hotel.name}" class="hotel-image">
        <h3>${hotel.name}</h3>
        <p> Location: ${hotel.location}</p>
        <p> Price: $${hotel.rates}</p>
        <button onclick="bookHotel(${hotel.id})" ${hotel.availability ? "" : "disabled"}>
          Book Now
        </button>
      </div>
    `)
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


 /**search filter
    const hotelContainer = document.getElementById("hotels");
    const searchInput = document.getElementById("search");

    // Fetch hotel data
    let hotelsData = [];

    fetch("http://localhost:3000/hotels")
      .then((res) => res.json())
      .then((hotels) => {
        hotelsData = hotels; // Store data globally
        displayHotels(hotelsData); // Display all hotels initially
      });

    // Function to display hotels dynamically
    function displayHotels(hotels) {
      hotelContainer.innerHTML = hotels
        .map(
          (hotel) => `
      <div class="hotel">
        <h3>${hotel.name}</h3>
        <p>Price: $${hotel.rates}</p>
        <button onclick="bookHotel(${hotel.id})" ${
            hotel.availability ? "" : "disabled"
          }>
          Book Now
        </button>
      </div>
    `
        )
        .join("");
    }

    // Search filter functionality
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredHotels = hotelsData.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchTerm)
      );
      displayHotels(filteredHotels); // Update UI with filtered hotels
    });**/
 
 