//ASYNC AWAIT

// async function mcaBooks(semester) {
//     let response = await fetch('../json//bookmca.json');
//     let data = await response.json();
//     console.log(data);
//     // console.log(data[semester]);
// }

//MCA book button//

let mcaBtn = document.getElementById("mcaBtn");
mcaBtn.addEventListener('click', showMcabook);

function showMcabook() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/bookmca.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("list").innerHTML = loading;
    }
    xhr.onreadystatechange = function () {


        console.log(this.readyState)
    }
    xhr.onload = function () {
        if (this.status == 200) {
            let html = `<div class="semester">
            <h2>SEMESTER<sub>(MCA)</sub></h2>
            <div class="scroll">
            <ul>
                <li><b><a id="semester1" onclick="mcaBooks(this.id)">Semester 1</a></b></li>
                <li><b><a id="semester2" onclick="mcaBooks(this.id)">Semester 2</a></b></li>
                <li><b><a id="semester3" onclick="mcaBooks(this.id)">Semester 3</a></b></li>
                <li><b><a id="semester4" onclick="mcaBooks(this.id)">Semester 4</a></b></li>
                <li><b><a id="semester5" onclick="mcaBooks(this.id)">Semester 5</a></b></li>
            </ul>
            </div>
        </div>
        <div id="BooksId" class="semester">
        <h2 style="color: black;">BOOKS</h2>
        <div class="scroll">
        <ul>`;
            let data = JSON.parse(this.response);
            // console.log(data.semester[2]);
            for (const key in data.mca.semester1) {
                html += `<li><b><a href="">${data.mca.semester1[key]}</a></b></li>`;
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
    xhr.onload = function () { // <--- remove the parameter
        let data = JSON.parse(this.response);
        //console.log(data[semester]); // <--- dynamic property reference
        let bookList = `<h2 style="color: black;">BOOKS</h2>
                <div class="scroll">
                <ul>`;
        for (const key in data.mca[semester]) {
            bookList += `<li><b><a href="">${data.mca[semester][key]}</a></b></li>`;
        }
        bookList += `</ul></div>`;
        document.getElementById("BooksId").innerHTML = bookList;
    }
    xhr.send();
}

//DDMCA book button

let ddmcaBtn = document.getElementById("ddmcaBtn");
ddmcaBtn.addEventListener('click', showddmcaBook);

function showddmcaBook() {
    console.log("DDmca");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/bookmca.json', true);

    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("list").innerHTML = loading;
    }

    xhr.onload = function () {
        if (this.status == 200) {
            let html = `<div class="semester">
            <h2>SEMESTER<sub>(DDMCA)</sub></h2>
            <div class="scroll">
            <ul>
                <li><b><a id="semester1" onclick="ddmcaBooks(this.id)">Semester 1</a></b></li>
                <li><b><a id="semester2" onclick="ddmcaBooks(this.id)">Semester 2</a></b></li>
                <li><b><a id="semester3" onclick="ddmcaBooks(this.id)">Semester 3</a></b></li>
                <li><b><a id="semester4" onclick="ddmcaBooks(this.id)">Semester 4</a></b></li>
                <li><b><a id="semester5" onclick="ddmcaBooks(this.id)">Semester 5</a></b></li>
                <li><b><a id="semester6" onclick="ddmcaBooks(this.id)">Semester 6</a></b></li>
                <li><b><a id="semester7" onclick="ddmcaBooks(this.id)">Semester 7</a></b></li>
                <li><b><a id="semester8" onclick="ddmcaBooks(this.id)">Semester 8</a></b></li>
            </ul>
            </div>
        </div>
        <div id="BooksId" class="semester">
        <h2 style="color: black;">BOOKS</h2>
        <div class="scroll">
        <ul>`;
            let data = JSON.parse(this.response);
            for (const key in data.ddmca.semester1) {
                html += `<li><b><a href="">${data.ddmca.semester1[key]}</a></b></li>`
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

function ddmcaBooks(semester) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json//bookmca.json', true);
    xhr.onload = function () {
        let data = JSON.parse(this.response);
        let bookList = `<h2 style="color: black;">BOOKS</h2>
        <div class="scroll">
        <ul>`;
        for (const key in data.ddmca[semester]) {
            bookList += `<li><b><a href="">${data.ddmca[semester][key]}</a></b></li>`;
        }
        bookList += `</ul></div>`;
        document.getElementById("BooksId").innerHTML = bookList;
    }
    xhr.send();
}

//BCA Books section

let bcaBtn = document.getElementById("bcaBtn");
bcaBtn.addEventListener('click', showbcaBook);

function showbcaBook() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/bookmca.json', true);
    xhr.onprogress = function () {
        let loading = `<div class="loading-img">
        <img src="../logo-images/Spinner-2.gif" alt="">
    </div>`;
        document.getElementById("list").innerHTML = loading;
    }
    xhr.onload = function () {
        if (this.status == 200) {
            let html = `<div class="semester">
            <h2>SEMESTER<sub>(BCA)</sub></h2>
            <div class="scroll">
            <ul>
                <li><b><a id="semester1" onclick="bcaBooks(this.id)">Semester 1</a></b></li>
                <li><b><a id="semester2" onclick="bcaBooks(this.id)">Semester 2</a></b></li>
                <li><b><a id="semester3" onclick="bcaBooks(this.id)">Semester 3</a></b></li>
                <li><b><a id="semester4" onclick="bcaBooks(this.id)">Semester 4</a></b></li>
                <li><b><a id="semester5" onclick="bcaBooks(this.id)">Semester 5</a></b></li>
                <li><b><a id="semester6" onclick="bcaBooks(this.id)">Semester 6</a></b></li>
            </ul>
            </div>
        </div>
        <div id="BooksId" class="semester">
        <h2 style="color: black;">BOOKS</h2>
        <div class="scroll">
        <ul>`;
            let data = JSON.parse(this.response);
            for (const key in data.bca.semester1) {
                html += `<li><b><a href="">${data.bca.semester1[key]}</a></b></li>`
            }
            html += `<ul></div>
        </div>`;
            document.getElementById("list").innerHTML = html;

        }
        else {
            console.log("error occured");
        }
    }
    xhr.send();
}

function bcaBooks(semester) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json//bookmca.json', true);
    xhr.onload = function () {
        let data = JSON.parse(this.response);
        let bookList = `<h2 style="color: black;">BOOKS</h2>
        <div class="scroll">
        <ul>`;
        for (const key in data.bca[semester]) {
            bookList += `<li><b><a href="">${data.bca[semester][key]}</a></b></li>`;
        }
        bookList += `</ul></div>`;
        document.getElementById("BooksId").innerHTML = bookList;
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