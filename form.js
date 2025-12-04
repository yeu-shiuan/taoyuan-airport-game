document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("infoForm");
    const submitBtn = document.querySelector(".submit-btn");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        document.getElementById("nameError").textContent = "";
        document.getElementById("phoneError").textContent = "";
        document.getElementById("emailError").textContent = "";

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name.length < 2) {
            document.getElementById("nameError").textContent = "請輸入正確姓名";
            valid = false;
        }

        const phonePattern = /^09\d{8}$/;
        if (!phonePattern.test(phone)) {
            document.getElementById("phoneError").textContent = "手機格式需為 09 開頭共 10 碼";
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "請輸入有效 Email";
            valid = false;
        }

        if (!valid) return;

        /* 在送出前更動按鈕狀態 */
        submitBtn.disabled = true;
        submitBtn.textContent = "送出中…";
        submitBtn.style.opacity = "0.6";

        fetch("https://script.google.com/macros/s/AKfycbxMU-NTwfBqd9fGL3w6Sctyjrvsc7H2HL9E4jAXswfhILwDAkqgwLTKHbFlw84BOsnc/exec", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ name, phone, email })
        })
        .then(res => res.text())
        // .then(data => {
        //     alert("資料已成功送出！");
        //     form.reset();
        //     window.location.href = "index.html";
        // })
        .then(data => {
    document.getElementById("customAlert").style.display = "flex";

    document.getElementById("alertOK").onclick = () => {
        document.getElementById("customAlert").style.display = "none";
        form.reset();
        window.location.href = "index.html";
    };
})
        .catch(err => {
            console.error("表單送出錯誤:", err);
            alert("送出失敗，請稍後再試");
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "送出";
            submitBtn.style.opacity = "1";
        });
    });
});
