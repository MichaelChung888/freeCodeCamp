const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {             //If the html element comes into viewport range, add the class ".show" to it
            entry.target.classList.add("show");
        }
        else {                                  //When it goes out of viewport range, remove the ".show" class
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll(".hidden-left") //Will take all html elements with class ".hidden"
const hiddenElementsTop = document.querySelectorAll(".hidden-top") //Will take all html elements with class ".hidden"
hiddenElementsLeft.forEach((el) => observer.observe(el)); //Take each html element in the array and pass it into the observer function
hiddenElementsTop.forEach((el) => observer.observe(el)); //Take each html element in the array and pass it into the observer function
console.log(hiddenElementsLeft.textcontext);