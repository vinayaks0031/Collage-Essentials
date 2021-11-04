//changing data onClick

let bcalink = document.getElementById("bcalink");
bcalink.addEventListener('click', showBcAplacement);

let mcalink = document.getElementById("mcalink");
mcalink.addEventListener('click', showMcaplacement);

function showMcaplacement(e) {
    e.preventDefault();
    mcalink.style.textDecoration = "underline";
    bcalink.style.textDecoration = "none";
    let bca = document.getElementById("bca-content");
    bca.style.display = "none";
    let mca = document.getElementById("mca-content");
    mca.style.display = "block";
}

function showBcAplacement(e) {
    e.preventDefault();
    mcalink.style.textDecoration = "none";
    bcalink.style.textDecoration = "underline";
    let mca = document.getElementById("mca-content");
    mca.style.display = "none";
    let bca = document.getElementById("bca-content");
    bca.style.display = "block";
}


