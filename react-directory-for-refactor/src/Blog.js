import './Blog.css';
import Header from './Header'
import NavBar from './NavBar'
import BlogArticle from './BlogArticle'

function Blog() {
  return (
      <div>
        < Header />
        < NavBar />
        < BlogArticle h3="11/23/2016" h2="A Visual Guide to the Southwest" img1="images/blog_1.jpg" p1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta incidunt, eum quos consequuntur aliquam nobis velit mollitia iste, natus ex repellendus delectus quisquam et quae, in atque a. Perspiciatis excepturi ipsum temporibus, eius odit deleniti quasi voluptates eaque aliquam, iste consequatur repudiandae illo a. Voluptates eligendi reiciendis corporis itaque soluta fugit atque quaerat ipsum reprehenderit sapiente, voluptatem repellat eveniet fuga natus tempore modi vero distinctio nulla accusantium recusandae, omnis. Esse aliquam ea, similique repudiandae nihil numquam, neque enim perspiciatis. Facilis dolor praesentium impedit quidem, non unde accusantium, commodi error, soluta dolores modi blanditiis similique amet hic earum, reiciendis consectetur animi in. Exercitationem distinctio necessitatibus molestias quas laboriosam nam modi porro accusantium blanditiis, beatae incidunt aliquid nostrum laborum, magni cum recusandae autem doloremque qui perferendis iste non quaerat fugit. Aspernatur voluptatem impedit, enim!" img2="images/blog_2.jpg" p2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta incidunt, eum quos consequuntur aliquam nobis velit mollitia iste, natus ex repellendus delectus quisquam et quae, in atque a. Perspiciatis excepturi ipsum temporibus, eius odit deleniti quasi voluptates eaque aliquam, iste consequatur repudiandae illo a. Voluptates eligendi reiciendis corporis itaque soluta fugit atque quaerat ipsum reprehenderit sapiente, voluptatem repellat eveniet fuga natus tempore modi vero distinctio nulla accusantium recusandae, omnis. Esse aliquam ea, similique repudiandae nihil numquam, neque enim perspiciatis. Facilis dolor praesentium impedit quidem, non unde accusantium, commodi error, soluta dolores modi blanditiis similique amet hic earum, reiciendis consectetur animi in. Exercitationem distinctio necessitatibus molestias quas laboriosam nam modi porro accusantium blanditiis, beatae incidunt aliquid nostrum laborum, magni cum recusandae autem doloremque qui perferendis iste non quaerat fugit. Aspernatur voluptatem impedit, enim!" />
        <section class="comment">
            <div class="wrap">
            <h2>Leave a Comment</h2>
                <form>
                    <input type="text" placeholder="Name" class="col-half" />
                    <input type="email" placeholder="Email" class="col-half" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
        <footer>
            <div class="wrap">
                <div class="social-links">
                    <a href="www.facebook.com"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href="www.twitter.com"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                    <a href="www.instagram.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
                <input type="text" placeholder="Email Address" />
                <button type="submit">Keep in Touch</button>
            </div>

            <p class="copyright">&copy;2016 Sarah Holden</p>
        </footer>
      </div>
  )
}

export default Blog;
