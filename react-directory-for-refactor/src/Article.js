import './Landing.css';

function Article(props) {
    return (
        <article class="col-third">
        <img src={props.img} alt="" />
            <div>
                <h3>{props.h3}</h3>
                <p>{props.p}</p>
                <button>Read More</button>
            </div>
        </article>
    )
}

export default Article;
