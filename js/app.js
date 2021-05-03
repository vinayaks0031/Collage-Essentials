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
        <h1 style="font-family: Nunito, sans-serif;">Inspiring Quotes.</h1><br><br>
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
  } else {
    let html = ` <div class="trans">
    <h1 style="font-family: Nunito, sans-serif;">Inspiring Quotes.</h1><br><br>
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
  console.log(i);
}

function leftslide() {
  i--;
  if (i == 0) {
    console.log(i);
    let html = ` <div class="trans">
        <h1 style="font-family: Nunito, sans-serif;">Inspiring Quotes.</h1><br><br>
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
  } else {
    let html = `<div class="trans">
    <h1 style="font-family: Nunito, sans-serif;">Inspiring Quotes.</h1><br><br>
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
