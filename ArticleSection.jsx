// components/ArticleSection.js
import Image from 'next/image';

import Image1 from "../imagei.jpg"
import Image2 from "../13.webp"
import Image3 from "../14.jpeg"
import Image4 from "../15.jpeg"
import Image5 from "../hero-01.webp"

export default function ArticleSection() {
    return (
      <div className="bada ">
        {/* Example images (replace with actual paths or URLs) */}
        <div className="imageshi ">
          <Image src={Image1} className="image2" alt="Image description"/>
          <Image src={Image2} className="image2" alt="Image description"/>
          <Image src={Image3} className="image2" alt="Image description"/>
          <Image src={Image4} className="image2" alt="Image description"/>
        </div>
        <Image src={Image5} className="image3" alt="Hero Image"/>
  
        <div className="hui ">
          {/* Repeated article card component */}
          <ArticleCard
            category="Food"
            title="Make your store stand out from the others by..."
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots..."
            author="Hasan"
            date="15 June 2021"
            readTime="14 min read"
          />
          <ArticleCard
            category="Business"
            title="Make your store stand out from the others by..."
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots..."
            author="Roderick"
            date="15 June 2021"
            readTime="14 min read"
          />
        </div>
      </div>
    );
  }
  
  function ArticleCard({ category, title, content, author, date, readTime }) {
    return (
      <div className="article-card  ">
        <div className="category-tag"  >
          {category}
        </div>
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="article-info ">
          <span>By {author}</span>
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </div>
    );
  }
  