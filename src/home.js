import homeImg from './images/Home.png';

function homePage(content) {
  content.innerHTML = '';
 
  const section = document.createElement('section');
  section.classList.add('section');

  const heading = document.createElement('h1');
  heading.textContent = 'Our Restaurant';

  const intro = document.createElement('p');
  intro.classList.add('intro');
  intro.textContent = 'A place where flavor, atmosphere, and tradition come together.';

  const highlight = document.createElement('p');
  highlight.classList.add('intro');
  highlight.textContent = 'Open every day from 10 AM to 10 PM — come visit us!';

  const image = document.createElement('img');
  image.src = homeImg;
  image.alt = 'Our food';
  image.classList.add('home-img');

  section.append(heading, intro, highlight,image);
  content.appendChild(section);
}

export default homePage;