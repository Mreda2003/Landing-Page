<!-- Add banner here -->

# Landing Page

<!-- Add buttons here -->

<!-- Describe your project in brief -->

<!-- The project title should be self explanotory and try not to make it a mouthful. (Although exceptions exist- **awesome-readme-writing-guide-for-open-source-projects** - would have been a cool name)

Add a cover/banner image for your README. **Why?** Because it easily **grabs people's attention** and it **looks cool**(*duh!obviously!*).

The best dimensions for the banner is **1280x650px**. You could also use this for social preview of your repo.

I personally use [**Canva**](https://www.canva.com/) for creating the banner images. All the basic stuff is **free**(*you won't need the pro version in most cases*).

There are endless badges that you could use in your projects. And they do depend on the project. Some of the ones that I commonly use in every projects are given below. 

I use [**Shields IO**](https://shields.io/) for making badges. It is a simple and easy to use tool that you can use for almost all your badge cravings. -->

<!-- Some badges that you could use -->

<!-- ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/navendu-pottekkat/awesome-readme?include_prereleases)
: This badge shows the version of the current release.

![GitHub last commit](https://img.shields.io/github/last-commit/navendu-pottekkat/awesome-readme)
: I think it is self-explanatory. This gives people an idea about how the project is being maintained.

![GitHub issues](https://img.shields.io/github/issues-raw/navendu-pottekkat/awesome-readme)
: This is a dynamic badge from [**Shields IO**](https://shields.io/) that tracks issues in your project and gets updated automatically. It gives the user an idea about the issues and they can just click the badge to view the issues.

![GitHub pull requests](https://img.shields.io/github/issues-pr/navendu-pottekkat/awesome-readme)
: This is also a dynamic badge that tracks pull requests. This notifies the maintainers of the project when a new pull request comes.

![GitHub All Releases](https://img.shields.io/github/downloads/navendu-pottekkat/awesome-readme/total): If you are not like me and your project gets a lot of downloads(*I envy you*) then you should have a badge that shows the number of downloads! This lets others know how **Awesome** your project is and is worth contributing to.

![GitHub](https://img.shields.io/github/license/navendu-pottekkat/awesome-readme)
: This shows what kind of open-source license your project uses. This is good idea as it lets people know how they can use your project for themselves.

![Tweet](https://img.shields.io/twitter/url?style=flat-square&logo=twitter&url=https%3A%2F%2Fnavendu.me%2Fnsfw-filter%2Findex.html): This is not essential but it is a cool way to let others know about your project! Clicking this button automatically opens twitter and writes a tweet about your project and link to it. All the user has to do is to click tweet. Isn't that neat? -->



<!-- Add a demo for your project -->

<!-- After you have written about your project, it is a good idea to have a demo/preview(**video/gif/screenshots** are good options) of your project so that people can know what to expect in your project. You could also add the demo in the previous section with the product description.

Here is a random GIF as a placeholder.

![Random GIF](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif) -->

# Table of contents

<!-- After you have introduced your project, it is a good idea to add a **Table of contents** or **TOC** as **cool** people say it. This would make it easier for people to navigate through your README and find exactly what they are looking for.

Here is a sample TOC(*wow! such cool!*) that is actually the TOC for this README. -->

- [Landing Page](#landing-page)
- [Table of contents](#table-of-contents)
- [Project description](#project-description)
- [Development](#development)
- [References](#references)


# Project description


<!-- This is optional and it is used to give the user info on how to use the project after installation. This could be added in the Installation section also. -->
Responsive Landing page with a dynamic navigation bar by JavaScript.
The page contains several sections and there are nav-bars for each section.
When click on each nav-bar it scrolls down to its section.
When scroll the nav-bar of the current section displayed will be activated.

[(Back to top)](#table-of-contents)

# Development


#### Build the nav
- Get title of each nav
    >innerHTML=`${sections[count].getAttribute('data-nav')}`;
- Link nav 'a' with its section
    >setAttribute('id',sections[count].getAttribute('id')+1);
- Click to scroll to the target
    >addEventListener('click' , function(event){...}; 
- Append a to the ul
    >querySelector('#navbar__list').append(...);

#### The nav-bar is responsive by using flex-box 
    > document.querySelector('#navbar__list').style.cssText = 'display:flex ; flex-wrap:wrap; float:right';

#### While scrolling into the page:

 - get the start of each section 
    > let sectionTop = currentSection.offsetTop; 
 - get height of each section
    > let sectionHeight = currentSection.clientHeight;
 - active the current section while scrolling : by comparing top of the page with the top of section and (top + height) of section
    > if (scrollY >= sectionTop && scrollY <=  (sectionTop + sectionHeight )) 
 - active the current nav & section while scrolling
    > ActiveList.classList.add('activeLi');
    > 
    > currentSection.classList.add('your-active-class');
 - deactivate the non-current section & nav while scrolling
    > currentSection.classList.remove('your-active-class'); 
    > 
    > ActiveList.classList.remove('activeLi');
     
    [(Back to top)](#table-of-contents)

# References
 - flexBox , For..of & others    
    > ( web-development challenger track -  web-development professional track)
 - scroll & smooth scroll 
    > [delftstack.com](https://www.delftstack.com/howto/javascript/scroll-to-element-in-javascript/) article
 - scrollY & the idea of comparing offsetTop with scrollY 
    >[w3schools.com - Window scrollY - **More Examples**](https://www.w3schools.com/jsref/prop_win_scrolly.asp)
 - offsetTop 
    > [developer.mozilla.org - offsetTop](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop)
 - clientHeight 
    > [developer.mozilla.org - clientHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight)
 - Remove 'a' tag style css
    > [Remove 'a' tag style css - codegrepper.com](https://www.codegrepper.com/code-examples/css/remove+a+tag+style+css)

[(Back to top)](#table-of-contents)
