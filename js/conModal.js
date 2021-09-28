var slideIndex01 = 1;
showSlides01(slideIndex01);

// Next/previous controls
function plusSlides01(n) {
    showSlides01(slideIndex01 += n);
}

// Thumbnail image controls
function currentSlide01(n) {
    showSlides01(slideIndex01 = n);
}

function showSlides01(n) {
    var i;
    var slides = document.getElementsByClassName("ACAC01");
    if (n > slides.length) {
        slideIndex01 = 1
    }
    if (n < 1) {
        slideIndex01 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex01 - 1].style.display = "block";
}



var slideIndex02 = 1;
showSlides02(slideIndex02);

// Next/previous controls
function plusSlides02(n) {
    showSlides02(slideIndex02 += n);
}

// Thumbnail image controls
function currentSlide02(n) {
    showSlides02(slideIndex02 = n);
}

function showSlides02(n) {
    var i;
    var slides = document.getElementsByClassName("ACAC02");
    if (n > slides.length) {
        slideIndex02 = 1
    }
    if (n < 1) {
        slideIndex02 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex02 - 1].style.display = "block";
}


// 코딩
var slideIndex04 = 1;
showSlides04(slideIndex04);

// Next/previous controls
function plusSlides04(n) {
    showSlides04(slideIndex04 += n);
}

// Thumbnail image controls
function currentSlide04(n) {
    showSlides04(slideIndex04 = n);
}

function showSlides04(n) {
    var i;
    var slides = document.getElementsByClassName("ACAC04");
    if (n > slides.length) {
        slideIndex04 = 1
    }
    if (n < 1) {
        slideIndex04 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex04 - 1].style.display = "block";
}


// 코딩
var slideIndex05 = 1;
showSlides05(slideIndex05);

// Next/previous controls
function plusSlides05(n) {
    showSlides05(slideIndex05 += n);
}

// Thumbnail image controls
function currentSlide05(n) {
    showSlides05(slideIndex05 = n);
}

function showSlides05(n) {
    var i;
    var slides = document.getElementsByClassName("ACAC05");
    if (n > slides.length) {
        slideIndex05 = 1
    }
    if (n < 1) {
        slideIndex05 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex05 - 1].style.display = "block";
}



// Artwork
var slideIndex07 = 1;
showSlides07(slideIndex07);

// Next/previous controls
function plusSlides07(n) {
    showSlides07(slideIndex07 += n);
}

// Thumbnail image controls
function currentSlide07(n) {
    showSlides07(slideIndex07 = n);
}

function showSlides07(n) {
    var i;
    var slides = document.getElementsByClassName("ACAC07");
    if (n > slides.length) {
        slideIndex07 = 1
    }
    if (n < 1) {
        slideIndex07 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex07 - 1].style.display = "block";
}


// Artwork
var slideIndex08 = 1;
showSlides08(slideIndex08);

// Next/previous controls
function plusSlides08(n) {
    showSlides08(slideIndex08 += n);
}

// Thumbnail image controls
function currentSlide08(n) {
    showSlides08(slideIndex08 = n);
}

function showSlides08(n) {
    var i;
    var slides = document.getElementsByClassName("ACAC08");
    if (n > slides.length) {
        slideIndex08 = 1
    }
    if (n < 1) {
        slideIndex08 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex08 - 1].style.display = "block";
}