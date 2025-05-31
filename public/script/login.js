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
function getCookie(cookieName) {
    let cookieArr = document.cookie.split(";");

    let thisCookie = null;
    cookieArr.some((cookie) => {
        if (cookie.includes(cookieName)) {
            thisCookie = cookie.substring(cookie.indexOf("=") + 1);
            return true;
        }
    });
    return thisCookie;
}
window.addEventListener("load", (e) => {
    let isLog = getCookie("email");
    if (isLog) {
        location.href = "http://localhost:3000/public/main.html";
    } else {
        console.log("ثبت نام انجام نشد");
    }
});
