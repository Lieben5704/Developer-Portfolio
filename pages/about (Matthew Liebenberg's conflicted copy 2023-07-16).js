import Layout from '../components/MyLayout';

const About = () => (
  <Layout>
    <div className="container">
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
        <div className="col-md-6">
          <h2 className="mt-5 mb-4">My Development Knowledge</h2>
          <hr></hr>
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
        <div className="col-md-6">
          <h2 className="mt-5 mb-4">&nbsp;</h2>
          <hr></hr>
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
    <style jsx>{`
      .skills-list {
        list-style-type: none;
        padding: 0;
      }

      .skills-list li {
        margin-bottom: 10px;
      }
    `}</style>
  </Layout>
);

export default About;
