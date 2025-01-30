//turn pages when click next or prev button

const pageTurnBtn=document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((e1,index)=>
{
    e1.onclick= () => {
        const pageTurnId=e1.getAttribute('data-page');
        const pageTurn=document.getElementById(pageTurnId);
    
    if(pageTurn.classList.contains('turn')){
        pageTurn.classList.remove('turn');
        setTimeout(()=> {
            pageTurn.style.zIndex= 20 - index;
        } ,500)
    }
    else{
        pageTurn.classList.add('turn');
        setTimeout(()=> {
            pageTurn.style.zIndex= 20 + index;
        } ,500)
    }
}
})

function sendMail(){
    let parms={
        fname:document.getElementById("fname").value,
        subject:document.getElementById("subject").value,
        country:document.getElementById("country").value,
    }
    emailjs.send("service_bkkgswf","template_93cuddc",parms).then(alert("Email sent!"))
}

//create reverse index function
/*
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}  */
//back profile button when click

//opening animation
/*
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

*/
//opening animation (cover right animation)
/*
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)
*/
//opening animation (page left or profile page animation)
/*
setTimeout(() => {
    coverLeft.classList.add('turn');
}, 3200)

*/

//opening animation (all page right animation)
/*
  pages.forEach((_,index) => {
        setTimeout(() => {
            pages[pageNumber].classList.remove('turn');

            setTimeout(()=> {
                reverseIndex();
                pages[pageNumber].style.zIndex= 10 + index;
            }, 500)
        }, (index + 1) * 200 + 2100)
    })
 */
