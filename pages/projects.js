import Layout from '../components/MyLayout';

const Projects = () => (
  <Layout>
    <div className="container">
      {/* Projects heading */}
      <h2 className="text-center mt-5 mb-4">Projects</h2>
      <div className="row">
        {/* Project #1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              {/* Project title */}
              <h5 className="card-title">Itunes App</h5>
              {/* Project description */}
              <p className="card-text">
                App that searches through the Itunes API. This App is built with Express & React.js
              </p>
              {/* Link to project on Github */}
              <a href="https://github.com/Lieben5704/ITunes_Capstone" className="btn btn-primary">
                View on Github
              </a>
            </div>
          </div>
        </div>
        {/* Project #2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              {/* Project title */}
              <h5 className="card-title">Flags and Mines Game</h5>
              {/* Project description */}
              <p className="card-text">
                Simple Minesweeper game built with React.js.
              </p>
              {/* Link to project on Github */}
              <a href="https://github.com/Lieben5704/L2T12-Capstone_React_Game" className="btn btn-primary">
                View on Github
              </a>
            </div>
          </div>
        </div>
        {/* Project #3  */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              {/* Project title */}
              <h5 className="card-title">Weather App</h5>
              {/* Project description */}
              <p className="card-text">
                Weather app that allows you to get weather info for a preferred location.
              </p>
              {/* Link to project on Github */}
              <a href="https://github.com/Lieben5704/Weather-App" className="btn btn-primary">
                View on Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Projects;
