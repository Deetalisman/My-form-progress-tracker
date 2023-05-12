

const tab = document.querySelector(".tab");
const step = document.querySelectorAll(".step-one");
tab.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetStep = document.querySelector(e.target.dataset.target);
        step.forEach(function(step){
            if(step == targetStep){
                step.classList.add('active');
            } else{
                step.classList.remove('active');
            }
        })
    }
});

const ham = document.querySelector(".ham");
const data = document.querySelector(".biodata");
ham.addEventListener('click', function(e){
    console.log(data);
    data.classList.toggle('hidden');
});


const list = document.querySelectorAll(".bio-list");
const form = document.querySelector("form");
const button = document.querySelector("#next");
const symbol = document.querySelectorAll(".symbol");


let initialList = 0;
form.addEventListener('submit', function(e){
    e.preventDefault();
   
    const allStep = 5;

    if (initialList + 1 !== allStep){
        initialList += 1;
        
        step[initialList].classList.add("active");
        step[initialList - 1].classList.remove("active");

        list[initialList].classList.add("active");
        list[initialList - 1].classList.remove("active");

        symbol[initialList].classList.add("active");
        symbol[initialList - 1].classList.remove("active");
    } else{
       button.innerHTML = "Submit"
    };
})