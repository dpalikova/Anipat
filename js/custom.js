//mobile menu

const toggleBtn = document.querySelector(".bars a");
const mobileMenu = document.querySelector('.nav');

toggleBtn.addEventListener('click', function(){
    mobileMenu.classList.toggle("show-links");
});


//set date

const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();


//scroll to top

const scrollTop = document.querySelector('.scroll_top');

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 600) {
        scrollTop.classList.add("show_scroll");
    } else {
        scrollTop.classList.remove("show_scroll");
    }
});

scrollTop.addEventListener('click', function() {
    window.scrollTo({left: 0, top:0});
});


