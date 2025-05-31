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
    if (!isLog) {
        console.log("ثبت نام انجام نشد");
        location.href = "http://localhost:3000/public/login.html";
    } else {
        console.log("ثبت نام انجام شد");
    }
});
console.log(document.cookie);
