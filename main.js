let span =document.querySelector("span");
let images=document.querySelectorAll("img");
console.log(images)
let total=0;
let t;

for (let i=0;i<images.length;i++){

   images[i].addEventListener("click",clickImage);

    function clickImage(){
        images[i].classList.toggle("selected")
        t =somme()
        console.log(t);
        span.innerHTML = t;
        
         
    }    
}


function somme() {
         let total = 0
         for (let i = 0; i < images.length; i++) {
             if (images[i].classList.contains("selected")) {
                 total = total + i + 1
             }
         }
         return total
         
         
     }



    
