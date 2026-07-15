// Store the student information in an object
const student = {
    name: "Logan R. Socks",                   
    major: "Advancing Computer Science",      
    email: "lsocks93820@uat.edu",             
    graduationDate: "August 2028"          
};
// Wmake sure the html is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // get the html elements by their ID from html
    document.getElementById("student-name").textContent = student.name;
    document.getElementById("student-major").textContent = student.major;
    document.getElementById("student-email").textContent = student.email;
    document.getElementById("student-grad-date").textContent = student.graduationDate;
});