const cards = document.querySelectorAll(".certificate-card");
const prev = document.querySelector(".certificate-arrow.prev");
const next = document.querySelector(".certificate-arrow.next");

let current = 1;

function updateCertificates(){

    cards.forEach(card=>{
        card.classList.remove("active");
    });

    cards[current].classList.add("active");

}

next.addEventListener("click",()=>{

    current++;

    if(current>=cards.length){
        current=0;
    }

    updateCertificates();

});

prev.addEventListener("click",()=>{

    current--;

    if(current<0){
        current=cards.length-1;
    }

    updateCertificates();

});