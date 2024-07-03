import Image from 'next/image';
import Image1 from "../bottom-add-banner.webp"

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Subscribe For Newsletter</h2>
      <form className="subscribe-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe Now</button>
      </form>
     
      
    </div>
  );
};

export default Newsletter;