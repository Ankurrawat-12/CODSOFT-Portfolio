document.addEventListener("DOMContentLoaded", function () {
    const jobTitles = ["Programmer", "Frontend Developer", "FullStack Developer", "Python Programmer", "Backend Developer", "Coder"];
    const jobTitleElement = document.getElementById("job-title");
    let index = 0;

    function changeJobTitle() {
        jobTitleElement.textContent = jobTitles[index];
        index = (index + 1) % jobTitles.length;
    }

    setInterval(changeJobTitle, 6000);
});
