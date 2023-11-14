import Link from 'next/link';
import Layout from '../components/MyLayout';
import Image from 'react-bootstrap/Image';

export default () => (
  <Layout>
    <div className="container d-flex flex-column align-items-center">
      {/* Adding some line breaks */}
      <br></br><br></br><br></br>
      {/* Section heading */}
      <h5 className="text-center mt-5">
        HTML | CSS | Javascript | jQuery | React | Node | Expless | MongoDB | JWT (JSON web tokens) | Next.js | REST API's | Bootstrap | Git and Github | Wordpress
      </h5>
      {/* Circle image */}
      <div className="circle-image-container mt-3">
        <Image
          src="https://media.licdn.com/dms/image/D4D03AQG3XNScvgHsQw/profile-displayphoto-shrink_800_800/0/1697539151675?e=1705536000&v=beta&t=ySDCaoDRcERpXbwMEy0nJth-FsmWpV7mqq4SmTUr95M"
          thumbnail
          className="rounded-circle"
        />
      </div>
      {/* Main heading */}
      <h1 className="text-center mt-5">I am Matthew Liebenberg, a skilled Full Stack Web Developer</h1>
      {/* Description */}
      <h5 className="text-center mt-5">
        Feel free to browse through and discover more
        {/* Adding a space */}
        {' '}
        {/* Link to the about page */}
        <Link href="/about">
          <span className="about-link">about my experience</span>
        </Link>
        {' '}
        and to see examples of my
        {' '}
        {/* Link to the projects page */}
        <Link href="/projects">
          <span className="about-link">recent coding projects</span>
        </Link>
        {' '}.
        I possess expertise in both front end and back end technologies/frameworks.
      </h5>
    </div>
    {/* Inline styles */}
    <style jsx>{`
      /* CSS styles for the container */
      .container {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -100px;
      }

      /* CSS styles for the circle image */
      .circle-image-container {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
      }

      /* CSS styles for the main heading */
      h1 {
        margin-top: 20px;
      }

      /* CSS styles for the about link */
      .about-link {
        color: #007bff;
        text-decoration: underline;
      }
    `}</style>
  </Layout>
);
