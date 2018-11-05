/*функції, які автоматично перегортають фото */
var myIndex = 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
var myIndex1 = 0;
function carousel1() {
            var i;
            var x = document.getElementsByClassName("mySlides2");
            for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";  
            }
            myIndex1++;
            if (myIndex1 > x.length) {myIndex1 = 1}    
            x[myIndex1-1].style.display = "block";  
            setTimeout(carousel1, 4000);
        }
var myIndex2 = 0;
function carousel2() {
            var i;
            var x = document.getElementsByClassName("mySlides3");
            for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";  
            }
            myIndex2++;
            if (myIndex2 > x.length) {myIndex2 = 1}    
            x[myIndex2-1].style.display = "block";  
            setTimeout(carousel2, 3000);
        }