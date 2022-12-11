// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  // Task 1.0

const mainEL = document.querySelector('main');

//Task 1.1

mainEL.style.backgroundColor = 'var(--main-bg)';

//task 1.2

mainEL.innerHTML = '<h1>SEIR Rocks!</h1>';

// task 1.3

mainEL.classList.add("flex-ctr");

// task 2.0

var topMenuEl = document.getElementById('top-menu');

// task 2.1

document.querySelector("topMenuEl").style.height = "100%";

// task 2.2 
topMenuEl.style.setProperty('--top-menu-bg')
topMenuEl.style.getPropertyValue('--top-menu-bg');

// task 2.3 

topMenuEl.classList.add('flex-around');

// 3.1
menuLinks.forEach(function(link) {
  // create an <a> element
  const a = topMenuEl.createElement('a');

  // add an href attribute with its value set to the href property of the "link" object
  a.setAttribute('href', link.href);

  // set the new element's content to the value of the text property of the "link" object
  a.innerText = link.text;

  // append the new element to the topMenuEl element
  topMenuEl.appendChild(a);
});

