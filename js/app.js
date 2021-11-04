// slider functions

let div = document.querySelector("div.slide");
const sliderData={
  img:[
  "logo&images/billgate.jpg",
  "logo&images/stevejobs.jpg",
  "logo&images/sundarpichai.jpeg",
  "logo&images/Warrenbuffettr.jpg",
],
quote : [
    "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    "Because the people who are crazy enough to think they can change the world are the ones who do. ",
    "You might fail a few times, but that's ok. You end up doing something worthwhile.",
    "Without passion, you don't have energy.<br>Without energy, You have nothing.",
  ],
  name:["Bill Gates", "Steve Jobs", "Sundar Pichai", "Warren Buffett"]

}

let i = 0;

function rightslide() {
  i++;
  if (i == 3) {
    let html = ` <div class="trans">
        <h1 class="slider-heading" style="font-family: Nunito, sans-serif;">Inspiring Quotes.</h1><br><br>
        <div class="slider">
        <button class="btn" id="lbtn" onclick="leftslide()"><i class="fas fa-arrow-left fa-2x"></i></button>
        <img src="${sliderData.img[i]}" class="img-slide">
        <button id="rbtn" class="btn" onclick="rightslide()"><i style="display: none;" class="fas fa-arrow-right fa-2x"></i>
        </button>
        </div><br>
        <p> "${sliderData.quote[i]}" </p>
        <p>by  <b class="bold">${sliderData.name[i]}</b></p>
        </div>`;
    div.innerHTML = html;
  } else if (i < 3 && i >= 0) {
    let html = ` <div class="trans">
    <h1 class="slider-heading" style="font-family: Nunito, sans-serif;">Inspiring Quotes.</h1><br><br>
    <div class="slider">
    <button class="btn" id="lbtn" onclick="leftslide()"><i class="fas fa-arrow-left fa-2x"></i></button>
    <img src="${sliderData.img[i]}" class="img-slide">
    <button id="rbtn" class="btn" onclick="rightslide()"><i class="fas fa-arrow-right fa-2x"></i></button>
    </div><br>
    <p> "${sliderData.quote[i]}" </p>
    <p>by  <b class="bold">${sliderData.name[i]}</b></p>
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
        <img src="${sliderData.img[i]}" class="img-slide">
        <button id="rbtn" class="btn" onclick="rightslide()"><i class="fas fa-arrow-right fa-2x"></i></button>
        </div><br>
        <p> "${sliderData.quote[i]}" </p>
        <p>by  <b class="bold">${sliderData.name[i]}</b></p>
        </div>`;
    div.innerHTML = html;
  } else if (i <= 3 && i > 0) {
    let html = `<div class="trans">
    <h1 class="slider-heading" style="font-family: Nunito, sans-serif;">Inspiring Quotes.</h1><br><br>
    <div class="slider">
    <button class="btn" id="lbtn" onclick="leftslide()"><i class="fas fa-arrow-left fa-2x"></i></button>
    <img src="${sliderData.img[i]}" class="img-slide">
    <button id="rbtn" class="btn" onclick="rightslide()"><i class="fas fa-arrow-right fa-2x"></i></button>
    </div><br>
    <p> "${sliderData.quote[i]}" </p>
    <p>by  <b class="bold">${sliderData.name[i]}</b></p>
    </div>`;
    div.innerHTML = html;
  }
}


