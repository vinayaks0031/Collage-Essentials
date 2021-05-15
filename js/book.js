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

//
function mcaBooks(sem) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json//bookmca.json', true);
    xhr.onload = function () {
        let data = JSON.parse(this.response);
        // let getNames=`<h2 style="color: black;">BOOKS</h2>
        //         <div class="scroll">
        //         <ul>`;
        // for (const key in data.sem) {

        // }  
        console.log(data.sem);
    }
    xhr.send();
}

//MCA book button//

let mcaBtn = document.getElementById("mcaBtn");
mcaBtn.addEventListener('click', showMcabook);

function showMcabook() {
    console.log("clicked");
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
                <li><b><a id="semester2">Semester 2</a></b></li>
                <li><b><a id="semester3">Semester 3</a></b></li>
                <li><b><a id="semester4">Semester 4</a></b></li>
                <li><b><a id="semester5">Semester 5</a></b></li>
            </ul>
            </div>
        </div>
        <div id="BooksId" class="semester">
        <h2 style="color: black;">BOOKS</h2>
        <div class="scroll">
        <ul>`;
            let data = JSON.parse(this.response);
            // console.log(data.semester[2]);
            for (const key in data.semester1) {
                html += `<li><b><a href="">${data.semester1[key]}</a></b></li>`;
            }
            html += `</ul>
            </div>
            </div>`;
            document.getElementById("list").innerHTML = html;

            // let mcaS2 = document.getElementById("mcaS2");
            // mcaS2.addEventListener('click', function (e) {
            //     e.preventDefault();
            //     console.log("hey");
            //     let booklist = `<h2 style="color: black;">BOOKS</h2>
            //     <div class="scroll">
            //     <ul>`;
            //     for (const key in data.semester2) {
            //         booklist += `<li><b><a href="">${data.semester2[key]}</a></b></li>`;
            //     }
            //     booklist += `</ul></div>`;
            //     document.getElementById("BooksId").innerHTML = booklist;
            // })

            // let mcaS3 = document.getElementById("mcaS3");
            // mcaS3.addEventListener('click', function (e) {
            //     e.preventDefault();
            //     let booklist = `<h2 style="color: black;">BOOKS</h2>
            //     <div class="scroll">
            //     <ul>`;
            //     for (const key in data.semester3) {
            //         booklist += `<li><b><a href="">${data.semester3[key]}</a></b></li>`;
            //     }
            //     booklist += `</ul></div>`;
            //     document.getElementById("BooksId").innerHTML = booklist;
            // })

            // let mcaS4 = document.getElementById("mcaS4");
            // mcaS4.addEventListener('click', function (e) {
            //     e.preventDefault();
            //     let booklist = `<h2 style="color: black;">BOOKS</h2>
            //     <div class="scroll">
            //     <ul>`;
            //     for (const key in data.semester4) {
            //         booklist += `<li><b><a href="">${data.semester4[key]}</a></b></li>`;
            //     }
            //     booklist += `</ul></div>`;
            //     document.getElementById("BooksId").innerHTML = booklist;
            // })

            // let mcaS5 = document.getElementById("mcaS5");
            // mcaS5.addEventListener('click', function (e) {
            //     e.preventDefault();
            //     let booklist = `<h2 style="color: black;">BOOKS</h2>
            //     <div class="scroll">
            //     <ul>`;
            //     for (const key in data.semester5) {
            //         booklist += `<li><b><a href="">${data.semester5[key]}</a></b></li>`;
            //     }
            //     booklist += `</ul></div>`;
            //     document.getElementById("BooksId").innerHTML = booklist;
            // })
            // let mcaS1 = document.getElementById("mcaS1");
            // mcaS1.addEventListener('click', function (e) {
            //     e.preventDefault();
            //     let booklist = `<h2 style="color: black;">BOOKS</h2>
            //     <div class="scroll">
            //     <ul>`;
            //     for (const key in data.semester1) {
            //         booklist += `<li><b><a href="">${data.semester1[key]}</a></b></li>`;
            //     }
            //     booklist += `</ul></div>`;
            //     document.getElementById("BooksId").innerHTML = booklist;

            // })
        }
        else {
            console.log("error occured");
        }
    }
    xhr.send();
}

//DDMCA book button

let ddmcaBtn = document.getElementById("ddmcaBtn");
ddmcaBtn.addEventListener('click', showddmcaBook);

function showddmcaBook() {
    console.log("DDmca");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/bookDdmca.json', true);

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
                <li><b><a id="ddmcaS1">Semester 1</a></b></li>
                <li><b><a id="ddmcaS2">Semester 2</a></b></li>
                <li><b><a id="ddmcaS3">Semester 3</a></b></li>
                <li><b><a id="ddmcaS4">Semester 4</a></b></li>
                <li><b><a id="ddmcaS5">Semester 5</a></b></li>
                <li><b><a id="ddmcaS6">Semester 6</a></b></li>
                <li><b><a id="ddmcaS7">Semester 7</a></b></li>
                <li><b><a id="ddmcaS8">Semester 8</a></b></li>
            </ul>
            </div>
        </div>
        <div id="BooksId" class="semester">
        <h2 style="color: black;">BOOKS</h2>
        <div class="scroll">
        <ul>`;
            let data = JSON.parse(this.response);
            for (const key in data.semester1) {
                html += `<li><b><a href="">${data.semester1[key]}</a></b></li>`
            }
            html += `</ul>
            </div>
            </div>`;
            document.getElementById("list").innerHTML = html;

            let ddmcaS2 = document.getElementById("ddmcaS2");
            ddmcaS2.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
                <div class="scroll">
                <ul>`;
                for (const key in data.semester2) {
                    booklist += `<li><b><a href="">${data.semester2[key]}</a></b></li>`;
                }
                booklist += `</ul>
                </div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let ddmcaS3 = document.getElementById("ddmcaS3");
            ddmcaS3.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
                <div class="scroll">
                <ul>`;
                for (const key in data.semester3) {
                    booklist += `<li><b><a href="">${data.semester3[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let ddmcaS4 = document.getElementById("ddmcaS4");
            ddmcaS4.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
                <div class="scroll">
                <ul>`;
                for (const key in data.semester4) {
                    booklist += `<li><b><a href="">${data.semester4[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let ddmcaS5 = document.getElementById("ddmcaS5");
            ddmcaS5.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
                <div class="scroll">
                <ul>`;
                for (const key in data.semester5) {
                    booklist += `<li><b><a href="">${data.semester5[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let ddmcaS6 = document.getElementById("ddmcaS6");
            ddmcaS6.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
                <div class="scroll">
                <ul>`;
                for (const key in data.semester6) {
                    booklist += `<li><b><a href="">${data.semester6[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let ddmcaS7 = document.getElementById("ddmcaS7");
            ddmcaS7.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
                <div class="scroll">
                <ul>`;
                for (const key in data.semester7) {
                    booklist += `<li><b><a href="">${data.semester7[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let ddmcaS8 = document.getElementById("ddmcaS8");
            ddmcaS8.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
                <div class="scroll">
                <ul>`;
                for (const key in data.semester8) {
                    booklist += `<li><b><a href="">${data.semester8[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let ddmcaS1 = document.getElementById("ddmcaS1");
            ddmcaS1.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
                <div class="scroll">
                <ul>`;
                for (const key in data.semester1) {
                    booklist += `<li><b><a href="">${data.semester1[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })
        }
        else {
            console.log("error occured");
        }
    }

    xhr.send();
}

//BCA Books section

let bcaBtn = document.getElementById("bcaBtn");
bcaBtn.addEventListener('click', showbcaBook);

function showbcaBook() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/bookBca.json', true);
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
                <li><b><a id="bcaS1">Semester 1</a></b></li>
                <li><b><a id="bcaS2">Semester 2</a></b></li>
                <li><b><a id="bcaS3">Semester 3</a></b></li>
                <li><b><a id="bcaS4">Semester 4</a></b></li>
                <li><b><a id="bcaS5">Semester 5</a></b></li>
                <li><b><a id="bcaS6">Semester 6</a></b></li>
            </ul>
            </div>
        </div>
        <div id="BooksId" class="semester">
        <h2 style="color: black;">BOOKS</h2>
        <div class="scroll">
        <ul>`;
            let data = JSON.parse(this.response);
            for (const key in data.semester1) {
                html += `<li><b><a href="">${data.semester1[key]}</a></b></li>`
            }
            html += `<ul></div>
        </div>`;
            document.getElementById("list").innerHTML = html;

            let bcaS1 = document.getElementById("bcaS1");
            bcaS1.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
            <div class="scroll">
            <ul>`;
                for (const key in data.semester1) {
                    booklist += `<li><b><a href="">${data.semester1[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let bcaS2 = document.getElementById("bcaS2");
            bcaS2.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
            <div class="scroll">
            <ul>`;
                for (const key in data.semester2) {
                    booklist += `<li><b><a href="">${data.semester2[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let bcaS3 = document.getElementById("bcaS3");
            bcaS3.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
            <div class="scroll">
            <ul>`;
                for (const key in data.semester3) {
                    booklist += `<li><b><a href="">${data.semester3[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let bcaS4 = document.getElementById("bcaS4");
            bcaS4.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
            <div class="scroll">
            <ul>`;
                for (const key in data.semester4) {
                    booklist += `<li><b><a href="">${data.semester4[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let bcaS5 = document.getElementById("bcaS5");
            bcaS5.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
            <div class="scroll">
            <ul>`;
                for (const key in data.semester5) {
                    booklist += `<li><b><a href="">${data.semester5[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
                document.getElementById("BooksId").innerHTML = booklist;
            })

            let bcaS6 = document.getElementById("bcaS6");
            bcaS6.addEventListener('click', function (e) {
                e.preventDefault();
                let booklist = `<h2 style="color: black;">BOOKS</h2>
            <div class="scroll">
            <ul>`;
                for (const key in data.semester6) {
                    booklist += `<li><b><a href="">${data.semester6[key]}</a></b></li>`;
                }
                booklist += `</ul></div>`;
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