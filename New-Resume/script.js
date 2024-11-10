// Profile Picture Preview
document.getElementById("profilePic").addEventListener("change", function (event) {
    const reader = new FileReader();
    reader.onload = function () {
      document.getElementById("previewProfilePic").src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  });
  
  // Generate Preview
  function generatePreview() {
    document.getElementById("previewName").textContent = document.getElementById("name").value || "Your Name";
    document.getElementById("previewEmail").textContent = "Email: " + (document.getElementById("email").value || "your-email@example.com");
    document.getElementById("previewPhone").textContent = "Phone: " + (document.getElementById("phone").value || "123-456-7890");
  
    // Education
    document.getElementById("previewAcademicEducation").textContent = document.getElementById("academicEducation").value;
    document.getElementById("previewAcademicYear").textContent = "Year: " + document.getElementById("academicYear").value;
    document.getElementById("previewAcademicSchool").textContent = "School/College/University: " + document.getElementById("academicSchool").value;
  
    document.getElementById("previewProfessionalEducation").textContent = document.getElementById("professionalEducation").value;
    document.getElementById("previewProfessionalYear").textContent = "Year: " + document.getElementById("professionalYear").value;
    document.getElementById("previewProfessionalSchool").textContent = "School/College/University: " + document.getElementById("professionalSchool").value;
  
    // Experience
    document.getElementById("previewExperience1").textContent = document.getElementById("experience1").value;
    document.getElementById("previewExperienceYear1").textContent = "Year: " + document.getElementById("experienceYear1").value;
    document.getElementById("previewExperienceCompany1").textContent = "Company: " + document.getElementById("experienceCompany1").value;
  
    document.getElementById("previewExperience2").textContent = document.getElementById("experience2").value;
    document.getElementById("previewExperienceYear2").textContent = "Year: " + document.getElementById("experienceYear2").value;
    document.getElementById("previewExperienceCompany2").textContent = "Company: " + document.getElementById("experienceCompany2").value;
  
    // Skills
    document.getElementById("previewSkills").textContent = 
      document.getElementById("skill1").value + ", " +
      document.getElementById("skill2").value + ", " +
      document.getElementById("skill3").value + ", " +
      document.getElementById("skill4").value;
  }
  
  // Download PDF
  function downloadPDF() {
    const element = document.getElementById("resumePreview");
    html2pdf(element, {
      margin: 10,
      filename: 'Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
  }
  
  // Edit Mode
  function editResume() {
    document.getElementById("resumeForm").scrollIntoView({ behavior: "smooth" });
  }
  