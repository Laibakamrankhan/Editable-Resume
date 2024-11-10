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
    <h2>Editable Resume</h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>E-mail:</b><span contenteditable="true">${email}</span></p>
    <p><b>Contact:</b><span contenteditable="true">${phone}</span></p>
    <h3>Education</h3>
    <p <span contenteditable="true">${education}</p>
     <h3>Experience</h3>
    <p <span contenteditable="true">${experince}</p>
     <h3>Skills</h3>
    <p <span contenteditable="true">${skill}</p>`;
    if(resumeDispalyElement){
        resumeDispalyElement.innerHTML = resumeHTML
    }else{
        console.error("The Resume Display Element is Missing")
    }
})