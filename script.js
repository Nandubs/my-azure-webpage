document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const pickup = document.getElementById('pickup').value;
    const drop = document.getElementById('drop').value;
    const cabType = document.getElementById('cab-type').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmation = document.getElementById('confirmation');
    const bookingDetails = `
        🚩 Pickup: ${pickup} <br>
        📍 Drop: ${drop} <br>
        🚗 Cab Type: ${cabType} <br>
        📅 Date: ${date} <br>
        ⏰ Time: ${time}
    `;

    document.getElementById('booking-details').innerHTML = bookingDetails;
    confirmation.classList.remove('hidden');
});
