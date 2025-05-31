let btn = document.querySelector(".Btn");
function deleteCookie(name) {
    document.cookie =
        name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

btn.addEventListener("click", () => {
    deleteCookie("email");
    location.reload();
});
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
        location.href = "index.html";
    } else {
        console.log("ثبت نام انجام شد");
    }
});
console.log(document.cookie);
