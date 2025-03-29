document.addEventListener("DOMContentLoaded", () => {
  const buttonOne = document.getElementById("buttonOne");
  const buttonTwo = document.getElementById("buttonTwo");
  const buttonThree = document.getElementById("buttonThree");
  const buttonFour = document.getElementById("buttonFour");
  const buttonFive = document.getElementById("buttonFive");
  const buttonSix = document.getElementById("buttonSix");
  const buttonSeven = document.getElementById("buttonSeven");
  const buttonEight = document.getElementById("buttonEight");

  // Adding event listeners
  if (buttonOne) {
    buttonOne.addEventListener("click", () => openBookingForm(1, "Sarova White Sands"));
  }
  if (buttonTwo) {
    buttonTwo.addEventListener("click", () => openBookingForm(2, "Diamonds Malindi"));
  }
  if (buttonThree) {
    buttonThree.addEventListener("click", () => openBookingForm(3, "Villa Ameera"));
  }
  if (buttonFour) {
    buttonFour.addEventListener("click", () => openBookingForm(4, "English Point Marina"));
  }
  if (buttonFive) {
    buttonFive.addEventListener("click", () => openBookingForm(5, "Chale Island"));
  }
  if (buttonSix) {
    buttonSix.addEventListener("click", () => openBookingForm(6, "Eliye Springs"));
  }
  if (buttonSeven) {
    buttonSeven.addEventListener("click", () => openBookingForm(7, "L. Nakuru Lodge"));
  }
  if (buttonEight) {
    buttonEight.addEventListener("click", () => openBookingForm(8, "Acacia Premiere"));
  }

  // Dark/light theme toggle
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
    });
  }

  // Fetching and displaying hotels
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
            <button id="star-${hotel.id}" onclick="toggleStar(${hotel.id}, ${hotel.starred})">
              ${hotel.starred ? "⭐ Starred" : "☆ Star"}
            </button>
          </div>
          <img src="${hotel.poster}" alt="${hotel.name}" class="hotel-image">
          <h3>${hotel.name}</h3>
          <p>Location: ${hotel.location}</p>
          <p>Price: ksh${hotel.rates}</p>
          <button onclick="openBookingForm(${hotel.id}, '${hotel.name}')">Book Hotel</button>
        </div>`
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

  // Function to open booking form
  window.openBookingForm = function(hotelId, hotelName) {
    const bookingFormContainer = document.getElementById("booking-form-container");
    const hotelNameElement = document.getElementById("hotel-name");
    const hotelIdInput = document.getElementById("hotel-id");

    if (bookingFormContainer && hotelNameElement && hotelIdInput) {
      bookingFormContainer.style.display = "block";
      hotelNameElement.textContent = hotelName;
      hotelIdInput.value = hotelId;
    }
  };

  // Close booking form
  window.closeBookingForm = function() {
    const bookingFormContainer = document.getElementById("booking-form-container");
    bookingFormContainer.style.display = "none";
  };

  // Booking submission
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
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
          alert("Booked!");
          closeBookingForm();
          bookingForm.reset();
        })
        .catch((error) => {
          console.error("Error booking hotel:", error);
          alert("Booking failed. Please try again.");
        });
    });
  }
});


function toggleStar(hotelId, isStarred) {
    
    console.log(`Toggling star for Hotel ID: ${hotelId}, Current State: ${isStarred}`);
    
}
