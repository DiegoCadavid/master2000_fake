
const form = document.querySelector("#login_form");

const field_name = document.querySelector("#login_user");
const field_password = document.querySelector("#login_password");

const botton_Submit = document.querySelector("#submit_teacher");

const PostInfo = async(url = '', data = {}) => {
    const res = await fetch(url, {
        method : "POST",
        mode: "cors",
        body: JSON.stringify(data)
    })   
    return response.json();
}



botton_Submit.addEventListener("click", () => {
    if(!form.checkValidity()){
        alert("Ingrese datos validos")
    }else{
    }
})