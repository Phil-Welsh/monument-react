import './Landing.css';

function NavBar() {
  return (
      <div>
        <nav>
            <a class="hamburger" href="hamburger"><i class="fa fa-bars"></i></a>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="blog.js">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      </div>
  )
}

export default NavBar;
