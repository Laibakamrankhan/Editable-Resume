var form = document.getElementById("resume-form");
var resumeDispalyElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experince = document.getElementById("experience").value;
    var skill = document.getElementById("skill").value;
    var resumeHTML = "\n    <h2>Resume</h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>E-mail:</b>").concat(email, "</p>\n    <p><b>Contact:</b>").concat(phone, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n     <h3>Experience</h3>\n    <p>").concat(experince, "</p>\n     <h3>Skills</h3>\n    <p>").concat(skill, "</p>");
    if (resumeDispalyElement) {
        resumeDispalyElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume Display Element is Missing");
    }
});
