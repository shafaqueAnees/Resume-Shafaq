// Update the resume preview dynamically
function generatePreview() {
    // Basic information
    document.getElementById('previewName').textContent = document.getElementById('name').value;
    document.getElementById('previewEmail').textContent = 'Email: ' + document.getElementById('email').value;
    document.getElementById('previewPhone').textContent = 'Phone: ' + document.getElementById('phone').value;

    // Education section
    document.getElementById('previewAcademicEducation').textContent = document.getElementById('academicEducation').value || 'Your academic background';
    document.getElementById('previewAcademicYear').textContent = 'Year: ' + document.getElementById('academicYear').value || 'Not Provided';
    document.getElementById('previewAcademicSchool').textContent = 'School/College/University: ' + document.getElementById('academicSchool').value || 'Not Provided';

    document.getElementById('previewProfessionalEducation').textContent = document.getElementById('professionalEducation').value || 'Your professional background';
    document.getElementById('previewProfessionalYear').textContent = 'Year: ' + document.getElementById('professionalYear').value || 'Not Provided';
    document.getElementById('previewProfessionalSchool').textContent = 'School/College/University: ' + document.getElementById('professionalSchool').value || 'Not Provided';

    // Experience section
    document.getElementById('previewExperience1').textContent = document.getElementById('experience1').value || 'Describe relevant job experience';
    document.getElementById('previewExperienceYear1').textContent = 'Year: ' + document.getElementById('experienceYear1').value || 'Not Provided';
    document.getElementById('previewExperienceCompany1').textContent = 'Company: ' + document.getElementById('experienceCompany1').value || 'Not Provided';

    document.getElementById('previewExperience2').textContent = document.getElementById('experience2').value || 'Describe any other experience';
    document.getElementById('previewExperienceYear2').textContent = 'Year: ' + document.getElementById('experienceYear2').value || 'Not Provided';
    document.getElementById('previewExperienceCompany2').textContent = 'Company: ' + document.getElementById('experienceCompany2').value || 'Not Provided';

    // Skills section
    document.getElementById('previewSkills').textContent = document.getElementById('skill1').value + ", " + document.getElementById('skill2').value + ", " + document.getElementById('skill3').value + ", " + document.getElementById('skill4').value;

    // Handle Profile Picture
    var file = document.getElementById('profilePic').files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('previewProfilePic').src = e.target.result;
        }
        reader.readAsDataURL(file);
    } else {
        document.getElementById('previewProfilePic').src = ''; // If no file is selected, clear the preview
    }
}

// Download Resume as PDF
function downloadPDF() {
    var resumeContent = document.getElementById('resumePreview');
    html2pdf()
        .from(resumeContent)
        .save('resume.pdf');
}

// Edit Resume - Trigger the form to allow edits
function editResume() {
    document.getElementById('resumeForm').style.display = 'block';
    document.getElementById('resumePreview').style.display = 'none';
}

// Share Resume - This is just a placeholder. You can implement a sharing method
function shareResume() {
    alert("Share your resume via email or any platform.");
}
