// Store the student information in an object
const student = {
    // stores my name
    name: "Logan R. Socks",
    // stores my major  
    major: "Advancing Computer Science",
    // stores my email
    email: "lsocks93820@uat.edu",
    // stores my graduation date
    graduationDate: "August 2028"          
};
// this array will hold the paths to each slideshow imaege
const Images = [
    // path to 1st image
    "Images/one.jpg",
    // path to 2nd image
    "Images/two.jpg", 
    // path to 3rd image
    "Images/three.jpg", 
    // path to 4th image
    "Images/four.jpg", 

];
// this will keep track of what image we are on for the slideshow
let Current_Index = 0;
// Wmake sure the html is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // get the html elements by their ID from html
    document.getElementById("student-name").textContent = student.name;
    document.getElementById("student-major").textContent = student.major;
    document.getElementById("student-email").textContent = student.email;
    document.getElementById("student-grad-date").textContent = student.graduationDate;
})
    // ony run this if on the slideshow page
    if (document.getElementById("Slideshow_Image")) {
        // get the Html elements by their ID
        const Slideshow_Image = document.getElementById("Slideshow_Image");
        const Previous_Button = document.getElementById("Previous_Button");
        const Next_Button = document.getElementById("Next_Button");
        // function to change the image shown based on the index
        function Update_Slide() {
            // set the image to the image at the current index of the images array
            Slideshow_Image.src = Images[Current_Index];
        }
        // add event listeners to the buttons to change the index and update the slide
        Next_Button.addEventListener("click", () => {
            // if the button is clicked go the next index
            Current_Index++;
            // if you reach the last image go back to the start of the array
            if (Current_Index >= Images.length) {
                // set it to the start
                Current_Index = 0; // Loop back to start
            }
            // call the update slide function to change the image
            Update_Slide();
        });
        // add event listener to the previous button to go back an image
        Previous_Button.addEventListener("click", () => {
            // if the button is clicked go back one
            Current_Index--;
            // if you reach the first image go to the last image
            if (Current_Index < 0) {
                Current_Index = Images.length - 1; // Loop to end
            }
            // call the update slide function to change the image
            Update_Slide();
        });

        // Initialize the first slide
        Update_Slide();
    }
