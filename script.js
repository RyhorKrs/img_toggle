let mainPhoto = document.querySelector(".photo");
let smallImages = document.querySelectorAll(".image");

document.addEventListener("click", function(e) {
    if(e.target.tagName !== "IMG") {
        return;
    } 
    
    if(e.target.parentElement.className === "image") {
        for(let image of smallImages) {
            image.classList.remove("active-image");
        }
        
        mainPhoto.innerHTML = e.target.parentElement.innerHTML;
        e.target.parentElement.classList.add("active-image");   
    }
});