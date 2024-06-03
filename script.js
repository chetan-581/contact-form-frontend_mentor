document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myform');
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const generalQuery = document.getElementById('general');
    const supportQuery = document.getElementById('support');
    const msg = document.getElementById('msg');
    const check = document.getElementById('check');

    const fnameError = document.getElementById('fnameerror');
    const lnameError = document.getElementById('lnameerror');
    const emailError = document.getElementById('emailerror');
    const queryError = document.getElementById('queryerror');
    const msgError = document.getElementById('msgerror');
    const checkError = document.getElementById('checkerror');

    const successMessage = document.getElementById('successMessage');

    generalQuery.addEventListener('change', function() {
        if (generalQuery.checked) {
            document.querySelector('.q1.general').classList.add('selected');
            document.querySelector('.q1.support').classList.remove('selected');
        }
    });

    supportQuery.addEventListener('change', function() {
        if (supportQuery.checked) {
            document.querySelector('.q1.support').classList.add('selected');
            document.querySelector('.q1.general').classList.remove('selected');
        }
    });

    form.onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission

        let valid = true;

        if (fname.value.trim() === "") {
            fname.classList.add('error-border');
            fnameError.style.display = 'block';
            valid = false;
        } else {
            fname.classList.remove('error-border');
            fnameError.style.display = 'none';
        }

        if (lname.value.trim() === "") {
            lname.classList.add('error-border');
            lnameError.style.display = 'block';
            valid = false;
        } else {
            lname.classList.remove('error-border');
            lnameError.style.display = 'none';
        }

        if (email.value.trim() === "" || !validateEmail(email.value)) {
            email.classList.add('error-border');
            emailError.style.display = 'block';
            valid = false;
        } else {
            email.classList.remove('error-border');
            emailError.style.display = 'none';
        }

        if (!generalQuery.checked && !supportQuery.checked) {
            queryError.style.display = 'block';
            valid = false;
        } else {
            queryError.style.display = 'none';
        }

        if (msg.value.trim() === "") {
            msg.classList.add('error-border');
            msgError.style.display = 'block';
            valid = false;
        } else {
            msg.classList.remove('error-border');
            msgError.style.display = 'none';
        }

        if (!check.checked) {
            checkError.style.display = 'block';
            valid = false;
        } else {
            checkError.style.display = 'none';
        }

        if (valid) {
            // Simulate form submission (e.g., AJAX request)
            setTimeout(function() {
                // // Hide the form
                // form.style.display = 'none';
                form.reset();
                queryError.style.display = 'none';

                // Show the success message
                successMessage.classList.remove('hidden');
            }, 10); // Simulate a delay for the form submission
        }

        return false;
    };

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.remove('error-border');
        });
    });
});
