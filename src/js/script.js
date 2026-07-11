const form = document.getElementById('form-email');
const email = document.getElementById('address-email');

form.addEventListener('submit', function(event) {    
    event.preventDefault();

    if (email.value === "") {
        form.classList.add("error");
        console.log("no good");
    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
        form.classList.add("error");
        console.log("no good");
    } else {
        form.classList.remove("error");
        console.log("good");
    }
});