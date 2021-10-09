

//MCA book button//

function showMcabook(course) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/bookmca.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
        </div>`;
        document.getElementById("list").innerHTML = loading;
    }
    xhr.onload = function () {
        console.log(course);
        let data = JSON.parse(this.response);
        if (this.status == 200) {
            let html = `<div class="semester" data-aos="fade-up">
            <h2>SEMESTER<sub>(${course})</sub></h2>
            <div class="scroll">
            <ul>`
            let count = 0;
            if (course == "mca") {
                for (const key in data[course]) {
                    html += `<li><b><a id="semester${++count}" onclick="mcaBooks(this.id)">Semester ${count}</a></b></li>`;
                }
            }
            else if (course == "ddmca") {
                for (const key in data[course]) {
                    html += `<li><b><a id="semester${++count}" onclick="ddmcaBooks(this.id)">Semester ${count}</a></b></li>`;
                }
            }
            else {
                for (const key in data[course]) {
                    html += `<li><b><a id="semester${++count}" onclick="bcaBooks(this.id)">Semester ${count}</a></b></li>`;
                }
            }
            html += `</ul>
            </div>
        </div>
        <div id="BooksId" class="semester" data-aos="fade-down">
        <h2 style="color: black;">BOOKS</h2>
        <div class="scroll">
        <ul>`;
            if (course == "mca") {
                for (const key in data[course].semester1) {
                    html += `<li><b><a href="${data.mcalink.semester1[key]}" target="_blank">${data[course].semester1[key]}</a></b></li>`;
                }
            }
            else if (course == "ddmca") {
                for (const key in data[course].semester1) {
                    html += `<li><b><a href="${data.ddmcalink.semester1[key]}" target="_blank">${data[course].semester1[key]}</a></b></li>`;
                }
            }
            else {
                for (const key in data[course].semester1) {
                    html += `<li><b><a href="${data.bcalink.semester1[key]}" target="_blank">${data[course].semester1[key]}</a></b></li>`;
                }
            }
            html += `</ul>
            </div>
            </div>`;
            document.getElementById("list").innerHTML = html;
        }
        else {
            console.log("error occured");
        }
    }
    xhr.send();
}

function mcaBooks(semester) { // <--- better name
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json//bookmca.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("BooksId").innerHTML = loading;
    }
    xhr.onload = function () { // <--- remove the parameter
        let data = JSON.parse(this.response);
        //console.log(data[semester]); // <--- dynamic property reference
        let bookList = `<h2 style="color: black;">BOOKS</h2>
                <div class="scroll">
                <ul>`;
        for (const key in data.mca[semester]) {
            bookList += `<li><b><a href="${data.mcalink[semester][key]}" target="_blank">${data.mca[semester][key]}</a></b></li>`;
        }
        bookList += `</ul></div>`;
        document.getElementById("BooksId").innerHTML = bookList;
    }
    xhr.send();
}

function ddmcaBooks(semester) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json//bookmca.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("BooksId").innerHTML = loading;
    }
    xhr.onload = function () {
        let data = JSON.parse(this.response);
        let bookList = `<h2 style="color: black;">BOOKS</h2>
        <div class="scroll">
        <ul>`;
        for (const key in data.ddmca[semester]) {
            bookList += `<li><b><a href="${data.ddmcalink[semester][key]}" target="_blank">${data.ddmca[semester][key]}</a></b></li>`;
        }
        bookList += `</ul></div>`;
        document.getElementById("BooksId").innerHTML = bookList;
    }
    xhr.send();
}

function bcaBooks(semester) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json//bookmca.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("BooksId").innerHTML = loading;
    }
    xhr.onload = function () {
        let data = JSON.parse(this.response);
        let bookList = `<h2 style="color: black;">BOOKS</h2>
        <div class="scroll">
        <ul>`;
        for (const key in data.bca[semester]) {
            bookList += `<li><b><a href="${data.bcalink[semester][key]}" target="_blank">${data.bca[semester][key]}</a></b></li>`;
        }
        bookList += `</ul></div>`;
        document.getElementById("BooksId").innerHTML = bookList;
    }
    xhr.send();
}


//syllabus

function showmcaSyllabus(syllabus) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/syllabus.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("list").innerHTML = loading;
    }
    xhr.onload = function () {
        if (this.status == 200) {
            let html = `<div class="semester semester-syl" data-aos="fade-left">
            <h2 style="color:black;">SEMESTER<sub>(${syllabus})</sub></h2>
            <div class="scroll">
            <ul>`;
            let data = JSON.parse(this.response);
            let i = 0;
            for (const key in data[syllabus]) {
                html += `<li><b><a href="${data[syllabus][key]}" target="_blank">Semester ${++i}</a></b></li>`;
            }
            html += `</ul>
            </div>
        </div>`;
            document.getElementById("list").innerHTML = html;
        }
        else {
            console.log("error occured");
        }
    }
    xhr.send();
}

//Notes 

function showmcaNotes(course) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/Notes.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("list").innerHTML = loading;
    }
    xhr.onload = function () {
        if (this.status == 200) {
            let data = JSON.parse(this.response);
            let html = `<div class="semester" data-aos="fade-up">
            <h2>SEMESTER<sub>(${course})</sub></h2>
            <div class="scroll">
            <ul>`;
            let count = 0;
            if (course == "mca") {
                for (const key in data[course]) {
                    html += `<li><b><a id="semester${++count}" onclick="mcaNotes(this.id)">Semester ${count}</a></b></li>`;
                }
            }
            else if (course == "ddmca") {
                for (const key in data[course]) {
                    html += `<li><b><a id="semester${++count}" onclick="ddmcaNotes(this.id)">Semester ${count}</a></b></li>`;
                }
            }
            else {
                for (const key in data[course]) {
                    html += `<li><b><a id="semester${++count}" onclick="bcaNotes(this.id)">Semester ${count}</a></b></li>`;
                }
            }
            html += `</ul>
            </div>
        </div>
        <div id="BooksId" class="semester" data-aos="fade-down">
        <h2 style="color: black;">NOTES</h2>
        <div class="scroll">
        <ul>`;
            for (const key in data[course].semester1) {
                html += `<li><b><a href="" target="_blank">${data[course].semester1[key]}</a></b></li>`;
            }
            html += `</ul></div></div>`;
            document.getElementById("list").innerHTML = html;
        }
        else {
            console.log("Error occured");
        }
    }
    xhr.send();
}

function mcaNotes(semester) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/Notes.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("BooksId").innerHTML = loading;
    }
    xhr.onload = function () {
        let data = JSON.parse(this.response);
        let notesList = `<h2 style="color: black;">NOTES</h2>
        <div class="scroll">
        <ul>`;
        for (const key in data.mca[semester]) {
            notesList += `<li><b><a href="" target="_blank">${data.mca[semester][key]}</a></b></li>`
        }
        notesList += `</ul></div>`;
        document.getElementById("BooksId").innerHTML = notesList;
    }
    xhr.send();
}



function ddmcaNotes(semester) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/Notes.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("BooksId").innerHTML = loading;
    }
    xhr.onload = function () {
        let data = JSON.parse(this.response);
        let notesList = `<h2 style="color: black;">NOTES</h2>
        <div class="scroll">
        <ul>`;
        for (const key in data.ddmca[semester]) {
            notesList += `<li><b><a href="" target="_blank">${data.ddmca[semester][key]}</a></b></li>`
        }
        notesList += `</ul></div>`;
        document.getElementById("BooksId").innerHTML = notesList;
    }
    xhr.send();
}


function bcaNotes(semester) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/Notes.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("BooksId").innerHTML = loading;
    }
    xhr.onload = function () {
        let data = JSON.parse(this.response);
        let notesList = `<h2 style="color: black;">NOTES</h2>
        <div class="scroll">
        <ul>`;
        for (const key in data.bca[semester]) {
            notesList += `<li><b><a href="" target="_blank">${data.bca[semester][key]}</a></b></li>`
        }
        notesList += `</ul></div>`;
        document.getElementById("BooksId").innerHTML = notesList;
    }
    xhr.send();
}

//EXAM PAPER
function showExampaper(course) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/examPaper.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("list").innerHTML = loading;
    }
    xhr.onload = function () {
        if (this.status == 200) {
            let html = `<div class="semester semester-syl" data-aos="fade-right">
            <h2 style="color:black;">SEMESTER<sub>(${course})</sub></h2>
            <div class="scroll">
            <ul>`;
            let data = JSON.parse(this.response);
            let i = 0;
            for (const key in data[course]) {
                html += `<li><b><a href="${data[course][key]}" target="_blank">Semester ${++i}</a></b></li>`;
            }
            html += `</ul></div></div>`
            document.getElementById("list").innerHTML = html;
        }
        else {
            console.log("error occured");
        }
    }
    xhr.send();
}


//FEEDBACK form 

let Params = {
    to_name: 'Vinayak Sharma',
    from_name: '',
    message: ''
};

let btnmsg = document.getElementById("btnmsg");
btnmsg.addEventListener('click', getmsg);

function getmsg(e) {
    e.preventDefault();
    Params.message = document.getElementById("formquery").value;
    let form1 = document.getElementById("contect-us");
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
// anime.timeline({ loop: false })
//     .add({
//         targets: '.ml15 .word',
//         scale: [14, 1],
//         opacity: [0, 1],
//         easing: "easeOutCirc",
//         duration: 500,
//         delay: (el, i) => 800 * i
//     }).add({
//         targets: '.ml15',
//         opacity: 1,
//         duration: 1000,
//         easing: "easeOutExpo",
//         delay: 1000
//     });