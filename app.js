/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
    const sections  = document.querySelectorAll('section');
    const ulElement = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


    // to make the nav-bar responsive 
    document.querySelector('#navbar__list').style.cssText = ' display:flex ; flex-wrap:wrap ; float:right ';   
     
/*
    - build the nav
    - Get title of each nav
    - Link nav 'a' with its section
    - Click to scroll to the target
    - Append a to the ul
*/

for(let count = 0 ; count < sections.length ; count++)
{
    let makeLi = document.createElement('li');
    makeLi.innerHTML=`<a href="#">${sections[count].getAttribute('data-nav')}</a>`; 
    makeLi.className="navbar__menu menu__link";
    makeLi.setAttribute('id',sections[count].getAttribute('id')+1);
    makeLi.querySelector("a").addEventListener('click' , function(event){ 
          event.preventDefault(); 
          sections[count].scrollIntoView({
          behavior: 'smooth'
        });
    });
    ulElement.appendChild(makeLi); 
}


/*
    -->while scrolling into the page:

    - get the start of each section
    - get height of each section
    - active the current section while scrolling
    - active the current nav while scrolling

    - deactivate the current section while scrolling
    - deactivate the current nav while scrolling
*/
// 
document.addEventListener('scroll' ,  
    function(){
        
        for(let currentSection of sections)
        {   
            let sectionTop = currentSection.offsetTop; 
            let sectionHeight = currentSection.clientHeight;

            let navId = currentSection.getAttribute('id')+1;
            let ActiveList = document.getElementById(navId);

             if (scrollY +300>= sectionTop && scrollY +300<=  (sectionTop + sectionHeight )) {
                currentSection.classList.add('your-active-class');
                ActiveList.classList.add('activeLi'); 
                ActiveList.style.color='white';  
              } else { 
                currentSection.classList.remove('your-active-class'); 
                ActiveList.classList.remove('activeLi');  
                ActiveList.style.color='';
              }
        }
    }
);



