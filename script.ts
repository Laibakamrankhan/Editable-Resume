const form = document.getElementById("resume-form") as HTMLFormElement
const resumeDispalyElement = document.getElementById("resume-display") as HTMLDivElement
form.addEventListener ("submit", (event:Event)=>{
    event.preventDefault()
    const name =(document.getElementById("name") as HTMLInputElement).value;
    const email =(document.getElementById("email") as HTMLInputElement).value;
    const phone =(document.getElementById("phone") as HTMLInputElement).value;
    const education =(document.getElementById("education") as HTMLInputElement).value;
    const experince =(document.getElementById("experience") as HTMLInputElement).value;
    const skill =(document.getElementById("skill") as HTMLInputElement).value;
    
    const resumeHTML = `
    <h2>Resume</h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>E-mail:</b>${email}</p>
    <p><b>Contact:</b>${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
     <h3>Experience</h3>
    <p>${experince}</p>
     <h3>Skills</h3>
    <p>${skill}</p>`;
    if(resumeDispalyElement){
        resumeDispalyElement.innerHTML = resumeHTML
    }else{
        console.error("The Resume Display Element is Missing")
    }
})