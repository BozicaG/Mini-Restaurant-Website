import burgerImg from './images/Burger.png';
import pullBurgerImg from './images/Pulled-pork-burger.png';
import spicyImg from './images/Capricciosa.png';
import quatroImg from './images/quattro-formaggi-pizza.png';


function createMenuSection() {
  const menuSection = document.createElement('div');
  menuSection.classList.add('section');
  const menuH=document.createElement('h1');
  menuH.textContent='Our menu';
  menuSection.appendChild(menuH);
  const menuWrapper=document.createElement('div');
  menuWrapper.classList.add('menu-wrapper');
  menuSection.appendChild(menuWrapper);

  const menuItems = [
    {
      name: 'Classic Burger',
      description: 'Classic beef burger.',
      price: '15 €',
      image: burgerImg,
    },
    {
      name: 'Pulled Pork Burger',
      description: 'The best Pulled Pork Burger in the world.',
      price: '20 €',
      image: pullBurgerImg,
    },
    {
      name: 'Capricciosa',
      description: 'Our delicious pizza made by our pizzaiolo.',
      price: '20 €',
      image:spicyImg,
    },
    {
      name: 'Pizza Quatro Formaggi',
      description: 'Our delicious Quatro Formaggi Pizza.',
      price: '20 €',
      image:quatroImg,
    },
  ];

  menuItems.forEach((item) => {
    const dish = document.createElement('div');
    dish.classList.add('dish');

    const name = document.createElement('h3');
    name.textContent = item.name;

    const desc = document.createElement('p');
    desc.textContent = item.description;

    const price = document.createElement('span');
    price.textContent = item.price;

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.classList.add('dish-img');

    dish.append(img,name,price, desc);
    menuWrapper.appendChild(dish);
  });

  return menuSection;
}
function menuPage(content){
    content.innerHTML='';
    const menuSection=createMenuSection();
    content.appendChild(menuSection);

}
export default menuPage;