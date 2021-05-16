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
            let html = `<div class="semester semester-syl" data-aos="fade-down">
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