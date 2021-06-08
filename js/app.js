console.log("hey there");


let div = document.querySelector("div.slide");
let img = [
  "logo-images/billgate.jpg",
  "logo-images/stevejobs.jpg",
  "logo-images/sundarpichai.jpeg",
  "logo-images/Warrenbuffettr.jpg",
];
let quote = [
  "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
  "Because the people who are crazy enough to think they can change the world are the ones who do. ",
  "You might fail a few times, but that's ok. You end up doing something worthwhile.",
  "Without passion, you don't have energy.<br>Without energy, You have nothing.",
];

let name = ["Bill Gates", "Steve Jobs", "Sundar Pichai", "Warren Buffett"];
let i = 0;

function rightslide() {
  i++;
  if (i == 3) {
    let html = ` <div class="trans">
        <h1 class="slider-heading" style="font-family: Nunito, sans-serif;">Inspiring Quotes.</h1><br><br>
        <div class="slider">
        <button class="btn" id="lbtn" onclick="leftslide()"><i class="fas fa-arrow-left fa-2x"></i></button>
        <img src="${img[i]}" class="img-slide">
        <button id="rbtn" class="btn" onclick="rightslide()"><i style="display: none;" class="fas fa-arrow-right fa-2x"></i>
        </button>
        </div><br>
        <p> "${quote[i]}" </p>
        <p>by  <b class="bold">${name[i]}</b></p>
        </div>`;
    div.innerHTML = html;
  } else if (i < 3 && i >= 0) {
    let html = ` <div class="trans">
    <h1 class="slider-heading" style="font-family: Nunito, sans-serif;">Inspiring Quotes.</h1><br><br>
    <div class="slider">
    <button class="btn" id="lbtn" onclick="leftslide()"><i class="fas fa-arrow-left fa-2x"></i></button>
    <img src="${img[i]}" class="img-slide">
    <button id="rbtn" class="btn" onclick="rightslide()"><i class="fas fa-arrow-right fa-2x"></i></button>
    </div><br>
    <p> "${quote[i]}" </p>
    <p>by  <b class="bold">${name[i]}</b></p>
    </div>`;
    div.innerHTML = html;
  }
}

function leftslide() {
  i--;
  if (i == 0) {
    let html = ` <div class="trans">
        <h1 class="slider-heading" style="font-family: Nunito, sans-serif;">Inspiring Quotes.</h1><br><br>
        <div class="slider">
        <button class="btn" id="lbtn" onclick="leftslide()"><i style="display: none;" class="fas fa-arrow-right fa-2x"></i>
        </button>
        <img src="${img[i]}" class="img-slide">
        <button id="rbtn" class="btn" onclick="rightslide()"><i class="fas fa-arrow-right fa-2x"></i></button>
        </div><br>
        <p> "${quote[i]}" </p>
        <p>by  <b class="bold">${name[i]}</b></p>
        </div>`;
    div.innerHTML = html;
  } else if (i <= 3 && i > 0) {
    let html = `<div class="trans">
    <h1 class="slider-heading" style="font-family: Nunito, sans-serif;">Inspiring Quotes.</h1><br><br>
    <div class="slider">
    <button class="btn" id="lbtn" onclick="leftslide()"><i class="fas fa-arrow-left fa-2x"></i></button>
    <img src="${img[i]}" class="img-slide">
    <button id="rbtn" class="btn" onclick="rightslide()"><i class="fas fa-arrow-right fa-2x"></i></button>
    </div><br>
    <p> "${quote[i]}" </p>
    <p>by  <b class="bold">${name[i]}</b></p>
    </div>`;
    div.innerHTML = html;
  }
}


let Params = {
  to_name: 'Vinayak Sharma',
  from_name: '',
  message: ''
};

let form1 = document.getElementById("contect-us");
form1.addEventListener('submit', getmsg);

function getmsg(e) {
  e.preventDefault();
  Params.message = document.getElementById("formquery").value;
  form1.style.display = "none";
  let form2 = document.getElementById("contect-us-email");
  form2.style.display = "block";
}

let formSubmit = document.getElementById("contect-us-email");
formSubmit.addEventListener("submit", getemail);

function getemail(e) {
  e.preventDefault();
  Params.from_name = document.getElementById("gmailquery").value;
  let p = document.createElement("p");
  p.innerText = "Thankyou we'll contact you shortly!"
  p.style.fontSize = "30px";
  formSubmit.replaceWith(p);
  emailjs.send('service_20auxhw', 'template_09mo43a', Params)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      console.log('FAILED...', error);
    });
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml14 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0, 1],
    translateX: [40, 0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
