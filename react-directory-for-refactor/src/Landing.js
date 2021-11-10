import './Landing.css';
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import Gallery from './Gallery'
import About from './About'
import Archive from './Archive'

function LandingPage() {
    return (
        <div>
            < Header />
            < NavBar />
            < Archive />
            < About />
            < Gallery />
            < Contact />
            < Footer />
        </div>
    )
}

export default LandingPage;
