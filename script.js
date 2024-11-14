document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".dynamic-banner");
    const bannerMessages = [
        "ניוזלטר מחלקת לוגיסטיקה - עדכונים חשובים",
        "חדשות החודש במחלקת לוגיסטיקה",
        "כתבות נבחרות לחודש זה",
        "מידע ופרויקטים במחלקה"
    ];
    let index = 0;

    setInterval(() => {
        banner.textContent = bannerMessages[index];
        index = (index + 1) % bannerMessages.length;
    }, 3000);
});
