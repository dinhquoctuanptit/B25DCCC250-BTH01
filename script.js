const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "") {
        alert("Vui lòng nhập họ tên!");
        return;
    }

    if (email === "") {
        alert("Vui lòng nhập email!");
        return;
    }

    if (message === "") {
        alert("Vui lòng nhập nội dung!");
        return;
    }

    alert("Gửi liên hệ thành công!");

    form.reset();
});