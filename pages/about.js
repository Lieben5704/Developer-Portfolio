import Layout from '../components/MyLayout';

const About = () => (
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
      {/* About Me section */}
      <h2 className="mt-5 mb-4">About Me</h2>
      <div className="row">
        <div className="col-md-12">
          <p className="mb-4">
            I'm Matthew Liebenberg, a professional Fullstack Web developer and IT support engineer.
            I thrive on challenges and find the tech world incredibly captivating.
            Throughout my career, I have taken on diverse technical responsibilities, including Cybersecurity, Linux Administration, and HelpDesk IT Support.
            Although my current focus is Full Stack Web development, I'm aware that the journey to achieving my fitness goals and increased muscle mass can be time-consuming.
            Nevertheless, I genuinely enjoy the process and find it both fulfilling and rewarding.
            The prospect of building a successful career in Full Stack Web Development is a strong motivation for me, and I derive immense pleasure from continuously learning and creating practical solutions.
          </p>
        </div>
      </div>

      <div className="row">
        {/* Left column */}
        <div className="col-md-6">
          <h2 className="mt-5 mb-4">My Development Knowledge</h2>
          <hr></hr>
          {/* Ordered list of skills */}
          <ol className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Node</li>
          </ol>
          <hr></hr>
        </div>
        {/* Right column */}
        <div className="col-md-6">
          <h2 className="mt-5 mb-4">&nbsp;</h2>
          {/* Horizontal line */}
          <hr></hr>
          {/* Ordered list of skills */}
          <ol className="skills-list">
            <li>Express</li>
            <li>MongoDB</li>
            <li>JWT (JSON web tokens)</li>
            <li>Next.js</li>
            <li>REST APIs</li>
            <li>Bootstrap</li>
          </ol>
          <hr></hr>
        </div>
      </div>
    </div>
    {/* Inline styles */}
    <style jsx>{`
      /* CSS styles for the skills list */
      .skills-list {
        list-style-type: none;
        padding: 0;
      }

      /* CSS styles for each skill item */
      .skills-list li {
        margin-bottom: 10px;
      }
    `}</style>
  </Layout>
);

export default About;
