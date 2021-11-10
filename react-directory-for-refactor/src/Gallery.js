import './Landing.css';
import gallery_1 from './assets/gallery_1.jpg';
import gallery_2 from './assets/gallery_2.jpg';
import gallery_3 from './assets/gallery_3.jpg';
import gallery_4 from './assets/gallery_4.jpg';
import gallery_5 from './assets/gallery_5.jpg';
import gallery_6 from './assets/gallery_6.jpg';

function Gallery() {
    return (
        <div>
            <section id="gallery">
                <div class="wrap">
                    <h2>Issue Twenty</h2>
                    <h3>A visual guide to the Southwest</h3>
                    <div class="masonry">
                        <img src={gallery_1} alt="" />
                        <img src={gallery_2} alt="" />
                        <img src={gallery_3} alt="" />
                        <img src={gallery_4} alt="" />
                        <img src={gallery_5} alt="" />
                        <img src={gallery_6} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;
