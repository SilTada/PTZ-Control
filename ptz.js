//http://192.168.0.101/cgi-bin/camctrl?preset=2

function setPreset() {

    let preset = document.getElementById("preset").value;
    let host = document.getElementById("host").value;
    console.log(host + ": " + preset);

    fetch("http://" + host + "/cgi-bin/camctrl?preset=" + preset);
}

// window.onload = function () {
//     document.getElementById("form").onsubmit = function onSubmit(form) {
//         let preset = document.getElementById("preset").value;
//         let host = document.getElementById("host").value;
//         // setPreset(host, preset);
//         console.log(host + ": " + preset);
//     }

//     // document.getElementById("form").addEventListener("submit", myFunction);

//     // function myFunction() {
//     //     alert("The form was submitted");
//     // }

// }