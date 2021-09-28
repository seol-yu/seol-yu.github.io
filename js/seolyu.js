const tapContainer = document.querySelector('.aboutSeolyu');
const flexContainer = document.querySelectorAll('.contentsContainer');
const taps = document.querySelectorAll('.aboutSeolyu > span');


function openCity(e){
    let elem = e.target;
    
    for (var i = 0; i < flexContainer.length; i++) {
        flexContainer[i].classList.remove('active');
        taps[i].classList.remove('on');
    }
    
    if (elem.matches('[class="aboutMe"]')){
        flexContainer[0].classList.add('active');
        taps[0].classList.add('on');
    } else if(elem.matches('[class="Coding"]')){
        flexContainer[1].classList.add('active');
        taps[1].classList.add('on');
    } else if(elem.matches('[class="Artwork"]')){  
        flexContainer[2].classList.add('active');
        taps[2].classList.add('on');
    } else if(elem.matches('[class="Contact"]')){  
        flexContainer[3].classList.add('active');
        taps[3].classList.add('on');
    }
}

tapContainer.addEventListener('click', openCity);