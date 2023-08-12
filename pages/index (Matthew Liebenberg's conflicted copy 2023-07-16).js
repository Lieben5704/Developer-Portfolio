import Link from 'next/link';
import Layout from '../components/MyLayout';
import Image from 'react-bootstrap/Image';

export default () => (
  <Layout>
    <div className="container d-flex flex-column align-items-center">
      <h5 className="text-center mt-5">
        HTML | CSS | Javascript | jQuery | React | Node | Expless | MongoDB | JWT (JSON web tokens) | Next.js | REST API's | Bootstrap | Git and Github | Wordpress
      </h5>
      <div className="circle-image-container mt-3">
        <Image
          src="https://media.licdn.com/dms/image/C5603AQFTcdNTpZN2bg/profile-displayphoto-shrink_800_800/0/1616740254498?e=2147483647&v=beta&t=tKwsFsiBrnQMAdfL0nXdhx-Jun_bcbIuQMFX06p9K6A"
          thumbnail
          className="rounded-circle"
        />
      </div>
      <h1 className="text-center mt-5">I am Matthew Liebenberg, a skilled Full Stack Web Developer</h1>
      <h5 className="text-center mt-5">
        Feel free to browse through and discover more {' '}
        <Link href="/about">
          <span className="about-link">about my experience</span>
        </Link>
        {' '} and to see examples of my 
		
		{' '}
        <Link href="/projects">
          <span className="about-link">recent coding projects</span>
        </Link>
		
		{' '}. I possess expertise in both front end and back end technologies/frameworks.
      </h5>
    </div>
    <style jsx>{`
      .container {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -100px;
      }

      .circle-image-container {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
      }

      h1 {
        margin-top: 20px;
      }

      .about-link {
        color: #007bff;
        text-decoration: underline;
      }
    `}</style>
  </Layout>
);
