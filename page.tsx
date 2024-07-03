import Image from "next/image";
import './globals.css';

import Navbar from "../components/Navbar"
import Promo from "../components/promobanner"
import Navbar2 from "../components/navbar2"
import Article from "../components/ArticleSection"
import Trending from "../components/TrendingArticle"
import Following from "../components/CardLayout"
import Slider from "../components/Sliders"
import News from "../components/Newsletter"
import Image1 from "../bottom-add-banner.webp"
import Footer from "../components/Footer"
import Head from 'next/head';

export default function Home() {
  return (
    <div>
       
      <Navbar></Navbar>
      <div className="main">
      <Promo></Promo>
      <Navbar2></Navbar2>
      <Article></Article>
      <h1 className="h1tag text-[30px]">Trending Article</h1>
      <Trending></Trending>
      <h1 className="h2tag text-2xl mt-7.5">From Following</h1>
      <Following></Following>
      <Slider></Slider>
      <News></News>
      <Image src={Image1} alt="Bottom Banner"  className="imageoff" />
      </div>
      <Footer></Footer>
      <div className="footer2">
        
        <span>2024 Bunzo. Made with <span className="heart">❤</span> by Abhi Arora</span>
        <button className="share-button">Share your thinking</button>
    </div>


     
    </div>
  );
}
