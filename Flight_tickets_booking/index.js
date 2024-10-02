document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const resultsDiv = document.getElementById('results');
    const flightInfo = document.getElementById('flightInfo');
    const logOutput = document.getElementById('logOutput');
    const selectFlightButton = document.getElementById('selectFlight');
    const passengerDetailsDiv = document.getElementById('passengerDetails');
    const adultCountDisplay = document.getElementById('adultCount');
    
    let adultCount = 1;

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get booking details
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const date = document.getElementById('date').value;
        
        // Log information
        const currentUrl = window.location.href;
        const currentTitle = document.title;
        
        logOutput.innerText += `Navigated to the booking page: ${currentUrl}\n`;
        logOutput.innerText += `Page Title: ${currentTitle}\n`;
        logOutput.innerText += `Booking from ${from} to ${to} on ${date}\n`;

        // Show results
        flightInfo.innerText = `Booking from ${from} to ${to} on ${date}`;
        resultsDiv.style.display = 'block'; // Show the results
        selectFlightButton.style.display = 'block'; // Show select flight button
        passengerDetailsDiv.style.display = 'none'; // Hide passenger details
    });

    selectFlightButton.addEventListener('click', function () {
        passengerDetailsDiv.style.display = 'block'; // Show passenger details
    });

    document.getElementById('passengerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get passenger details
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not Specified";

        alert(`Passenger Details:\nName: ${firstName} ${lastName}\nDOB: ${dob}\nGender: ${gender}`);
        passengerDetailsDiv.style.display = 'none'; // Hide passenger details after submission
    });

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Your message has been sent!');
    });

    // Adult count increase and decrease
    document.getElementById('increaseAdults').addEventListener('click', function () {
        adultCount++;
        adultCountDisplay.innerText = adultCount;
    });

    document.getElementById('decreaseAdults').addEventListener('click', function () {
        if (adultCount > 1) {
            adultCount--;
            adultCountDisplay.innerText = adultCount;
        }
    });
});
