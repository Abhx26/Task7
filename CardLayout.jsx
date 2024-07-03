// components/CardLayout.js
import Image from 'next/image';

import Image1 from "../7.webp"
 import Image2 from "../8.webp"
 import Image3 from "../9.webp"
 import Image4 from "../10.webp"
 import Image5 from "../11.webp"
 import Image6 from "../5th.webp"

const CardLayout = () => {
  const cards = [
    {
      src: Image1,
      category: 'Business',
      title: 'Customize your WooCommerce store with countless Web',
      author: 'Roderick',
      date: '08-06-2021',
      readTime: '10 min read',
    },
    {
      src: Image2,
      category: 'Business',
      title: 'Customize your WooCommerce store with countless Web',
      author: 'Roderick',
      date: '08-06-2021',
      readTime: '10 min read',
    },
    {
      src: Image3,
      category: 'Business',
      title: 'Customize your WooCommerce store with countless Web',
      author: 'Roderick',
      date: '08-06-2021',
      readTime: '10 min read',
    },
    {
      src: Image4,
      category: 'Business',
      title: 'Customize your WooCommerce store with countless Web',
      author: 'Roderick',
      date: '08-06-2021',
      readTime: '10 min read',
    },
    {
      src: Image5,
      category: 'Business',
      title: 'Customize your WooCommerce store with countless Web',
      author: 'Roderick',
      date: '08-06-2021',
      readTime: '10 min read',
    },
    {
      src: Image6,
      category: 'Business',
      title: 'Customize your WooCommerce store with countless Web',
      author: 'Roderick',
      date: '08-06-2021',
      readTime: '10 min read',
    },
  ];

  return (
    <div>
      <div className="onetwo3 flex justify-between mt-7.5">
        {cards.slice(0, 3).map((card, index) => (
          <div key={index} className="card w-88 bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
            <Image src={card.src} alt="Virtual Reality" width={256} height={120} className="card-image w-full h-30 object-cover" />
            <div className="card-content p-4">
              <span className="tag bg-orange-500 text-white p-0.5 px-2 rounded text-xs inline-block">{card.category}</span>
              <h4>{card.title}</h4>
              <p>By {card.author} - {card.date}</p>
              <div className="card-info">
                <i className="fas fa-clock"></i> {card.readTime}
                <i className="far fa-bookmark"></i>
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="onetwo3">
        {cards.slice(3).map((card, index) => (
          <div key={index} className="card w-88 bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
            <Image src={card.src} alt="Virtual Reality" width={256} height={120} className="card-image w-full h-30 object-cover" />
            <div className="card-content p-4">
              <span className="tag bg-orange-500 text-white p-0.5 px-2 rounded text-xs inline-block">{card.category}</span>
              <h4>{card.title}</h4>
              <p>By {card.author} - {card.date}</p>
              <div className="card-info">
                <i className="fas fa-clock"></i> {card.readTime}
                <i className="far fa-bookmark"></i>
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
