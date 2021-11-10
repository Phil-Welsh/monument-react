import './Landing.css';
import Sidebar from './Sidebar'

function BlogArticle(props) {
    return (
        <div class="wrap grid-wrapper">
            <section>
                <article>
                    <h3>{props.h3}</h3>
                    <h2>{props.h2}</h2>
                    <img src={props.img1} alt="" />
                    <p>{props.p1}</p>
                    <img src={props.img2} alt="" />
                    <p>{props.p2}</p>
                </article>
            </section>
            < Sidebar />
        </div>
    )
}

export default BlogArticle;
