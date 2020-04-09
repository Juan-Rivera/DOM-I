const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation BAR
let navBar = document.querySelector('nav');

const links = document.querySelectorAll('a');
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];

links[0].styler.color = 'green';
links[1].styler.color = 'green';
links[2].styler.color = 'green';
links[3].styler.color = 'green';
links[4].styler.color = 'green';
links[5].styler.color = 'green';

//new Link at the end of the navigation Bar 
const newLink = document.createElement('a');
newLink.textContent = 'Team';
newLink.style.color = 'green';
newLink.href = '#';
nav.appendChild(newLink);

//new Link at the beginning of navigation Bar
const newLink2 = document.createElement('a');
newLink2.textContent = 'Location';
newLink2.style.color = 'green';
newLink2.href = '#';
nav.prepend(newLink2);

//mid Image
let midImg = document.querySelector('.middle-img');
midImage.src = 'img/mid-page-accent.jpg';

//h4 Tags
//main-content
h4tag[0].textContent = siteContent['main-content'] ['features-h4']
h4tag[1].textContent = siteContent['main-content']['about-h4']
h4tag[2].textContent = siteContent['main-content']['services-h4']
h4tag[3].textContent = siteContent['main-content']['product-h4']
h4tag[4].textContent = siteContent['main-content']['vision-h4']
//contact
h4tag[5].textContent = siteContent['contact']['contact-h4']

//paragraph tags
let ptag = document.querySelectorAll('p');
//main-content
ptag[0].textContent = siteContent['main-content']['features-content'];
ptag[1].textContent = siteContent['main-content']['about-content'];
ptag[2].textContent = siteContent['main-content']['services-content'];
ptag[3].textContent = siteContent['main-content']['product-content'];
ptag[4].textContent = siteContent['main-content']['vision-content'];
//contact
ptag[5].textContent = siteContent['contact']['address'];
ptag[6].textContent = siteContent['contact']['phone'];
ptag[7].textContent = siteContent['contact']['email'];
//footer
ptag[8].textContent = siteContent['footer']['copyright'];