document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully");
    
    const packages = document.querySelectorAll(".pakke");
    packages.forEach(pakke => {
        pakke.addEventListener("click", function () {
            alert(`Du har valgt pakken: ${this.querySelector("h3").innerText}`);
        });
    });
});
