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
    // only run this if on the movie list page
    if (document.getElementById("Movie_Input")) {
        // create the empty list for the movies
        let Movie_Titles = [];
        // get each HTML element by their html ID
        const Movie_Input = document.getElementById("Movie_Input");
        const Add_Button = document.getElementById("Add_Button");
        const Display_Button = document.getElementById("Display_Button");
        const Reset_Button = document.getElementById("Reset_Button");
        const Movie_Status = document.getElementById("Movie_Status");
        const Movie_List = document.getElementById("Movie_List");
        // function to add a movie to the list
        function Add_Movie() {
            // get what the user input and get rid of extra spaces
            const title = Movie_Input.value.trim();
            // make sure the input is not empty
            if (title !== "") {
                // if its not empty add the movie to the list
                Movie_Titles.push(title);
                // clear the user input area
                Movie_Input.value = "";
                // set the focus back to the input area for the user to add another movie
                Movie_Input.focus();
            } else {
                // if it was empty let the user know to input a movie
                Movie_Status.textContent = "Please enter a valid movie title.";
            }
        }
        // add event listeners so the buttons work
        Add_Button.addEventListener("click", Add_Movie);
        // add evenet listener to the user input area
        Movie_Input.addEventListener("keypress", (event) => {
            // if enter is pressed the movie will be submitted
            if (event.key === "Enter") {
                // call the add movie function
                Add_Movie();
            }
        });
        // add event listener to the display button to show the list of movies
        Display_Button.addEventListener("click", () => {
            // check if the list is empty
            if (Movie_Titles.length === 0) {
                // if it is empty let the user know to add movies
                Movie_Status.textContent = "Your list is empty. Add some movies first!";
                // return so the rest of the code does not run
                return;
            }
            // sort the movie titles in alphabetical order
            Movie_Titles.sort((a, b) => a.localeCompare(b));
            // clear the currrent list
            Movie_List.innerHTML = "";
            // loop through each movie
            Movie_Titles.forEach((movie) => {
                // create a list item for each movie
                const List_Item = document.createElement("li");
                // set the text content of the list item to the movie title
                List_Item.textContent = movie;
                // add the list item to the movie list in the HTML
                Movie_List.appendChild(List_Item);
            });
        });
        // add event listener to the reset button to clear the list and input
        Reset_Button.addEventListener("click", () => {
            // clear the movie titles list
            Movie_Titles = [];
            // clear the list in the HTML
            Movie_List.innerHTML = "";
            // clear the user input area
            Movie_Input.value = "";
        });
    }
