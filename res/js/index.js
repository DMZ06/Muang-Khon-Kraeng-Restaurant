document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("special-btn");
    btn.addEventListener("click", () => {
        btn.textContent = "กำลังโหลดเมนูพิเศษ...";
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.textContent = "✨ เมนูพิเศษประจำวัน ✨";
            alert("เมนูพิเศษวันนี้: สเต๊กซอสทองคำ & ซุปครีมเห็ดทรัฟเฟิล!");
            btn.style.transform = "scale(1)";
        }, 1200);
    });
});
