// components/Slider.js
import Image from 'next/image';
import Image7 from "../7.webp"
import Image13 from "../13.webp"
import Image14 from "../14.jpeg"
import Image15 from "../15.jpeg"
import Image6 from "../6th.webp"
import Head from 'next/head';
const Slider = () => {
  return (
    
    <div className="slider-container">
    <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMGlnlX+vAqVQCb1V9Hj7skc6Lv7fXTqkiDfi2A"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <h2>Trending Topic</h2>
        <div className="slider-controls">
          <button className="slide-btn left"><i className="fas fa-chevron-left"></i></button>
          <button className="slide-btn right"><i className="fas fa-chevron-right"></i></button>
        </div>
      </div>
      
      <div className="image-container">
        <Image src={Image7} alt="Image 1" width={300} height={200} className="image" />
        <Image src={Image13} alt="Image 2" width={300} height={200} className="image" />
        <Image src={Image14} alt="Image 3" width={300} height={200} className="image" />
        <Image src={Image15} alt="Image 4" width={300} height={200} className="image" />
        <Image src={Image6} alt="Image 5" width={300} height={200} className="image" />
      </div>
    </div>
  );
};

export default Slider;
