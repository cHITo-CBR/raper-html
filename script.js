document.addEventListener("DOMContentLoaded", function () {

    const content = document.getElementById("content");

    const sections = [
        "sections/home.html",
        "sections/about.html",
        "sections/skills.html",
        "sections/projects.html",
        "sections/contact.html"
    ];

    sections.forEach(section => {
        fetch(section)
            .then(response => response.text())
            .then(data => {
                content.innerHTML += data;
            });
    });

});