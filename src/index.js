import './styles.css';
import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from './about.js';

const content=document.querySelector('#content');
const nav=document.querySelectorAll('nav button');

const pages = {
  home : homePage,
  menu : menuPage,
  about : aboutPage,
}


nav.forEach(button => {
  button.addEventListener('click', () => {
    const page = button.dataset.page;
    pages[page](content);
  })
})


document.body.onload = () => homePage(content);