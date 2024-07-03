
import Image from 'next/image';
 // Create and import a CSS module for styling
 import Image1 from "../1st.webp"
 import Image2 from "../2nd.webp"
 import Image3 from "../3rd.webp"
 import Image4 from "../4th.webp"
 import Image5 from "../5th.webp"
 import Image6 from "../6th.webp"

 

 const ArticleCard = ({ src, category, title, description, author, date, readTime }) => (
   <div className="onetwo flex">
     <div>
       <Image src={src} className="imagepeople" alt="" width={300} height={100} />
     </div>
     <div className="article-card2 p-5 w-64 h-25 mt-2.5">
       <div className="category-tag2 bg-pink-300 px-2.5 py-1.5 w-fit rounded text-gray-800 font-bold">{category}</div>
       <h1>{title}</h1>
       <p>{description}</p>
       <div className="article-info flex justify-between text-xs text-gray-700 mt-3.5">
         <span>{author}</span>
         <span>{date}</span>
         <span>{readTime}</span>
       </div>
     </div>
   </div>
 );
 
 const Home = () => {
   const articles = [
     { src: Image1, category: 'Business', title: 'Make your store stand out from the others by...', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots...', author: 'By roderick', date: '15 June 2021', readTime: '14 min read' },
     { src: Image2, category: 'Business', title: 'Make your store stand out from the others by...', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots...', author: 'By roderick', date: '15 June 2021', readTime: '14 min read' },
     { src: Image3, category: 'Business', title: 'Make your store stand out from the others by...', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots...', author: 'By roderick', date: '15 June 2021', readTime: '14 min read' },
     { src: Image4, category: 'Business', title: 'Make your store stand out from the others by...', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots...', author: 'By roderick', date: '15 June 2021', readTime: '14 min read' },
     { src: Image5, category: 'Business', title: 'Make your store stand out from the others by...', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots...', author: 'By roderick', date: '15 June 2021', readTime: '14 min read' },
     { src: Image6, category: 'Business', title: 'Make your store stand out from the others by...', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots...', author: 'By roderick', date: '15 June 2021', readTime: '14 min read' }
   ];
 
   return (
     <div className="onetwo2 flex mt-0 justify-between">
       <div>
         {articles.slice(0, 3).map((article, index) => (
           <ArticleCard key={index} {...article} />
         ))}
       </div>
       <div>
         {articles.slice(3).map((article, index) => (
           <ArticleCard key={index} {...article} />
         ))}
       </div>
     </div>
   );
 };
 
 export default Home;
 
