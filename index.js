
/*---Form----*/

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById('checkout-form');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const addressError = document.getElementById('addressError');
    const phoneError = document.getElementById('phoneError');
    const paymentError = document.getElementById('creditCardError');
    const order = document.getElementById('order');
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const address = document.getElementById('address');
        const phone = document.getElementById('phone');
        const payment = document.getElementById('credit-card');

        nameError.textContent = "";
        emailError.textContent = "";
        addressError.textContent = "";
        phoneError.textContent = "";
        paymentError.textContent = "";

        let valid = true;

        if(name.value.trim() === ""){
            nameError.textContent = "You must enter a name";
            valid = false;
        }

        if(email.value.trim() === ""){
            emailError.textContent = "Email is required";
            valid = false;
        }else if(!email.value.endsWith("@dal.ca")){
            emailError.textContent = "Your email must end with @dal.ca";
            valid = false;
        }

        if(address.value.trim() === ""){
            addressError.textContent = "You must enter an address";
            valid = false;
        }

        if (phone.value.trim() === "") {
            phoneError.textContent = "You must enter a phone number";
            valid = false;
        }


        if(payment.value.trim() === ""){
            paymentError.textContent = "You must enter card information";
            valid = false;
        }

        if(!valid){
            return;
        }
        else{
            order.textContent = "Order has been successfully placed";
            order.style.backgroundColor = "green";
            order.style.color = "white";
            order.style.textAlign = "center";
            order.style.border = "1px solid black";
            order.style.padding = "15px";
        }
    });
});


/*----------color change when clicked on Dark theme or light theme button--------*/

function toggleThemeAndNotify(theme) {

    const body = document.body;

    if(theme === 'light'){
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        alert("Theme switched to Light");
    }
    if(theme === 'dark'){
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        alert("Theme switched to Dark");
    }
}

const lighttheme = document.getElementById('light-theme-toggle');
const darktheme =document.getElementById('dark-theme-toggle');
lighttheme.addEventListener('click', function() {
    toggleThemeAndNotify('light');
});

darktheme.addEventListener('click', function() {
    toggleThemeAndNotify('dark');
});


/*----One notification without any user interaction, it pops when website is open---*/

function showAlert() {

    if(window.location.pathname === '/index.html'){
        window.alert("Welcome to DesiGlam Boutique");
    }
    document.removeEventListener('DOMContentLoaded', showAlert);
}

document.addEventListener('DOMContentLoaded', showAlert);


/*----Event Handler to respond to user any interaction other than notification-----*/

document.getElementById('scroll-to-top').addEventListener('click', function() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


