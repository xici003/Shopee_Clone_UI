const menuIcon = document.querySelector('.header__mobile-menu');
const navMenu = document.querySelector('.nav__mobile');
const overlay = document.querySelector('.menu__overlay');
if(menuIcon && navMenu){
    menuIcon.onclick= function() {
        overlay.style.display = 'block';

        navMenu.style.display = 'block';
        navMenu.style.animation =`slideInLeft linear 0.3s`;

    }
}

const closeItem = document.querySelector('.nav__mobile-close');
if(closeItem){
    closeItem.onclick = function() {
        navMenu.style.display = 'none';
        overlay.style.display = 'none';
    }

    overlay.onclick = function() {
        navMenu.style.display = 'none';
        overlay.style.display = 'none';
    }
}


//Sắp xếp mặt hàng
const homeButtons = document.querySelectorAll('.home-filter button');
const homeCards = document.querySelectorAll('.col.l-2-4.m-4.c-6');

const homeActive = e => {
    document.querySelector('.btn--primary').classList.remove('btn--primary');
    e.target.classList.add('btn--primary');

    homeCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

homeButtons.forEach(button => button.addEventListener("click", homeActive));

//Pagination
const startBtn = document.querySelector(".pagination-item.startBtn");
const endBtn = document.querySelector(".pagination-item.endBtn");
const numbers = document.querySelectorAll(".pagination-item.number");

let currentStep = 0;

const updateBtn = () => {
    if(currentStep === 7 ){
        endBtn.classList.add("pagination-item__disable");
    }else if(currentStep === 0){
        startBtn.classList.add("pagination-item__disable");
    }else{
        endBtn.classList.remove("pagination-item__disable");
        startBtn.classList.remove("pagination-item__disable");
    }
}
numbers.forEach((number, numberIndex) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
        currentStep = numberIndex;
        document.querySelector(".pagination-item--active").classList.remove("pagination-item--active");
        number.classList.add("pagination-item--active");
        updateBtn();
    })
});

endBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentStep += 1;
        numbers.forEach((number,numIndex) => {
            number.classList.toggle("pagination-item--active", numIndex === currentStep);
            updateBtn();
        });
});

startBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentStep -= 1;
        numbers.forEach((number,numIndex) => {
            number.classList.toggle("pagination-item--active", numIndex === currentStep);
            updateBtn();
        });
});

// Search input
function searchFunc() {
    let findInput = document.querySelector(".header__find-input");
    let productNames = Array.from(document.querySelectorAll(".col.l-2-4.m-4.c-6"));
    
    findInput.value = findInput.value.toLowerCase();

    productNames.forEach(function(e) {
        let text = e.innerText.toLowerCase();
        if(text.includes(findInput.value)){
            e.style.display="block";
        }else{
            e.style.display="none";
        }
    })

}