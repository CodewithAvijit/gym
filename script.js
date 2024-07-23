document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('admission-form-data');
    var formStatus = document.getElementById('form-status');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Validate the form fields (You can add more validation as needed)
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var occupation = document.getElementById('occupation').value.trim();
        var disability = document.getElementById('disability').value.trim();
        var message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || phone === '' || occupation === '' || disability === '' || message === '') {
            formStatus.textContent = 'Please fill in all fields.';
            return;
        }

        // Prepare form data for submission
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', 'submit_admission.php'); // Replace with your PHP processing file
        xhr.onload = function() {
            if (xhr.status === 200) {
                form.reset(); // Clear the form upon successful submission
                formStatus.textContent = 'Form submitted successfully!';
            } else {
                formStatus.textContent = 'Form submission failed.';
            }
        };

        xhr.onerror = function() {
            formStatus.textContent = 'Form submission failed.';
        };

        xhr.send(formData); // Send form data asynchronously
    });

    // Handle click on "View Location"
    var viewLocationLink = document.getElementById('view-location');
    viewLocationLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Open the external map link
        window.open('https://maps.app.goo.gl/H8sZHJwhcdkCs4bR8', '_blank');
    });

    // Google Maps initialization function
    function initMap() {
        var mapOptions = {
            center: { lat: 22.5726, lng: 88.3639 }, // Replace with your gym's location coordinates
            zoom: 15
        };
        var map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
        var marker = new google.maps.Marker({
            position: { lat: 22.5726, lng: 88.3639 }, // Replace with your gym's location coordinates
            map: map,
            title: 'THE WORKOUT ZONE GYM'
        });
    }
});
