let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm-password");
let btn_submit = document.querySelector(".btn");
let remmber = document.querySelector(".remmber");

btn_submit.addEventListener("click", btnHandler);

function btnHandler(e) {
    e.preventDefault();

    if (confirm_password.value === password.value && email.value !== "") {
        let now = new Date();
        let extoday = now.setTime(now.getTime() + 2 * 24 * 60 * 1000);
        document.cookie = `email=${email.value};path=/;expires=${extoday}`;

        location.href = "http://localhost:3000/public/main.html";

        email.value = "";
        password.value = "";
        confirm_password.value = "";
    } else {
        alert("لطفا اطلاعات را درست وارد کنید!!!");
    }
}
