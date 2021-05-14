// let navBook = document.getElementById("navbook");
// navBook.addEventListener('click', bookPage);

// function bookPage() {
//     const xml = new XMLHttpRequest();
//     xml.open('GET', 'html/book.html', true);
//     xml.onload = function () {
//         if (this.status == 200) {
//             document.body.innerHTML = this.response;
//         }
//         else {
//             console.log('bad request 404');
//         }
//     }
//     xml.send();
// }

// let navSyllabus = document.getElementById("navsyllabus");
// navSyllabus.addEventListener('click', syllabusPage);

// function syllabusPage() {
//     const xml = new XMLHttpRequest();
//     xml.open('GET', 'sullabus.html', true);
//     xml.onload = function () {
//         if (this.status == 200) {
//             document.body.innerHTML = this.response;
//         }
//         else {
//             console.log('bad request 404');
//         }
//     }
//     xml.send();
// }

// let navNotes = document.getElementById("navnotes");
// navNotes.addEventListener('click', notesPage);

// function notesPage() {
//     const xml = new XMLHttpRequest();
//     xml.open('GET', 'notes.html', true);
//     xml.onload = function () {
//         if (this.status == 200) {
//             document.body.innerHTML = this.response;
//         }
//         else {
//             console.log('bad request 404');
//         }
//     }
//     xml.send();
// }

// let navPapers = document.getElementById("navpapers");
// navPapers.addEventListener('click', paperPage);

// function paperPage() {
//     const xml = new XMLHttpRequest();
//     xml.open('GET', 'examPaper.html', true);
//     xml.onload = function () {
//         if (this.status == 200) {
//             document.body.innerHTML = this.response;
//         }
//         else {
//             console.log('bad request 404');
//         }
//     }
//     xml.send();
// }

//MCA book button//

let mcaBtn = document.getElementById("mcaBtn");
mcaBtn.addEventListener('click', showMcabook);

function showMcabook() {
    console.log("clicked");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../bookmca.json', true);
    xhr.onprogress = function () {
        console.log('still processing');
    }
    xhr.onreadystatechange = function () {


        console.log(this.readyState)
    }
    xhr.onload = function () {
        if (this.status == 200) {
            let html = `<div class="semester">
            <ul>
                <h2>SEMESTER</h2>
                <li><b><a id="mcaS1">Semester 1</a></b></li>
                <li><b><a id="mcaS2">Semester 2</a></b></li>
                <li><b><a id="mcaS3">Semester 3</a></b></li>
                <li><b><a id="mcaS4">Semester 4</a></b></li>
                <li><b><a id="mcaS5">Semester 5</a></b></li>
            </ul>
        </div>
        <div id="BooksId" class="semester">
        <ul>
            <h2 style="color: black;">BOOKS</h2>`;
            let data = JSON.parse(this.response);
            // console.log(data.semester[2]);
            for (const key in data.semester) {
                html += `<li><b><a href="">${data.semester[key]}</a></b></li>`;
            }
            html += `</ul>
            </div>`;
            document.getElementById("list").innerHTML = html;

            let mcaS2 = document.getElementById("mcaS2");
            mcaS2.addEventListener('click', function (e) {
                e.preventDefault();
                console.log("hey");
                let booklist = `<ul>
                            <h2 style="color: black;">BOOKS</h2>`;
                for (const key in data.semester2) {
                    booklist += `<li><b><a href="">${data.semester2[key]}</a></b></li>`;
                }
                booklist += `</ul>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let mcaS3 = document.getElementById("mcaS3");
            mcaS3.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<ul>
                <h2 style="color: black;">BOOKS</h2>`;
                for (const key in data.semester3) {
                    booklist += `<li><b><a href="">${data.semester3[key]}</a></b></li>`;
                }
                booklist += `</ul>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let mcaS4 = document.getElementById("mcaS4");
            mcaS4.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<ul>
                <h2 style="color: black;">BOOKS</h2>`;
                for (const key in data.semester4) {
                    booklist += `<li><b><a href="">${data.semester4[key]}</a></b></li>`;
                }
                booklist += `</ul>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })
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