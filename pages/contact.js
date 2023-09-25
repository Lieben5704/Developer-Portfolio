import Layout from '../components/MyLayout';
import Image from 'react-bootstrap/Image';

const Contact = () => (
  <Layout>
 <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VDXE8N8ND1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VDXE8N8ND1');
</script>
    <div className="container">
      {/* Circle image */}
      <div className="circle-image-container mt-3 text-center">
        <Image
          src="https://media.licdn.com/dms/image/C5603AQFTcdNTpZN2bg/profile-displayphoto-shrink_800_800/0/1616740254498?e=2147483647&v=beta&t=tKwsFsiBrnQMAdfL0nXdhx-Jun_bcbIuQMFX06p9K6A"
          thumbnail
          className="rounded-circle"
        />
      </div>
      {/* Contact heading */}
      <h2 className="text-center mt-5 mb-4">Contact Me</h2>
      <div className="row">
        <div className="col-md-6 mx-auto">
          {/* Contact information */}
          <p className="mb-4">
            If you have any questions or inquiries, feel free to reach out to
            me using the contact details below:
          </p>
          {/* Unordered list of contact details */}
          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-label">Email:</span> liebenbergmatthew.ml@gmail.com
            </li>
            <li className="contact-item">
              <span className="contact-label">Phone:</span> 0763606473
            </li>
            <li className="contact-item">
              <span className="contact-label">Address:</span> 135 Patricia Street, Sandton
          
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Inline styles */}
    <style jsx>{`
      /* CSS styles for the circle image container */
      .circle-image-container {
        width: 200px;
        height: 200px;
        margin: 0 auto;
      }
      
      /* CSS styles for the contact list */
      .contact-list {
        list-style-type: none;
        padding: 0;
        margin-bottom: 40px;
      }
      
      /* CSS styles for each contact item */
      .contact-item {
        margin-bottom: 20px;
      }
      
      /* CSS styles for the contact label */
      .contact-label {
        font-weight: bold;
        margin-right: 10px;
      }
    `}</style>
  </Layout>
);

export default Contact;
