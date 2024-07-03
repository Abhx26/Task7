// components/Navbar.js
export default function Navbar() {
    return (
      <div className="navbar ">
        <div className="social-icons ">
          {/* Use Next.js Link for navigation */}
          <a href="#" className="icon facebook "><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="icon skype"><i className="fab fa-skype"></i></a>
          <a href="#" className="icon twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" className="icon linkedin"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="menu-items">
          <a href="#" className="">Home <i className="fas fa-chevron-down"></i></a>
          <a href="#" className="">About</a>
          <a href="#" className="">Category</a>
          <a href="#" className="">Pages <i className="fas fa-chevron-down"></i></a>
          <a href="#" className="">Contact</a>
        </div>
      </div>
    );
  }
  