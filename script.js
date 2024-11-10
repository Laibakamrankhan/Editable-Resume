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
    var resumeHTML = "\n    <h2>Editable Resume</h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>E-mail:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Contact:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <h3>Education</h3>\n    <p <span contenteditable=\"true\">").concat(education, "</p>\n     <h3>Experience</h3>\n    <p <span contenteditable=\"true\">").concat(experince, "</p>\n     <h3>Skills</h3>\n    <p <span contenteditable=\"true\">").concat(skill, "</p>");
    if (resumeDispalyElement) {
        resumeDispalyElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume Display Element is Missing");
    }
});
