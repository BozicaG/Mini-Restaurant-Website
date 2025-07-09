import aboutImg from './images/a charming small fas.png'

function aboutPage(content){

    content.innerHTML = '';
    
      const aboutSection = document.createElement('div');
      aboutSection.classList.add('section');
    
      const aboutH = document.createElement('h1');
      aboutH.textContent = 'About us';
    
      const aboutPara = document.createElement('p');
      aboutPara.classList.add('p-about')
      aboutPara.textContent = "At our cozy little corner of flavor, we believe that good food brings people together. We are a fast food spot with a homemade soul — serving up juicy burgers, crispy fries, and oven-baked pizzas straight from the heart.Our secret? High-quality ingredients, fast service, and a laid-back garden atmosphere where everyone feels welcome. Whether you are grabbing a quick lunch or winding down with friends, we`re here to make it tasty.Stop by, take a seat under the string lights, and let the comfort food do the talking.";
    
    
      const image = document.createElement('img');
      image.src = aboutImg;
      image.alt = 'Our food';
      image.classList.add('about-img');
    
      aboutSection.append(aboutH,aboutPara,image);
      content.appendChild(aboutSection);
}
    
    export default aboutPage;