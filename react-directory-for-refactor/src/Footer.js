import './Landing.css';

function Footer() {
  return (
      <div>
        <footer>
            <div class="wrap">
                <div class="social-links">
                    <a href="www.facebook.com"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href="www.twitter.com"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                    <a href="www.instagram.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
                <input type="text" placeholder="Email Address" />
                <button type="submit">Subscribe</button>
            </div>

            <p class="copyright">&copy;2016 Sarah Holden</p>
        </footer>
      </div>
  )
}

export default Footer;
