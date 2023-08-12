import Layout from '../components/MyLayout';

const Projects = () => (
  <Layout>
    <div className="container">
      <h2 className="text-center mt-5 mb-4">Projects</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Itunes App</h5>
              <p className="card-text">
                App that searches through the Itunes API. This App is built with Express & React.js
              </p>
              <a href="https://github.com/Lieben5704/ITunes_Capstone" className="btn btn-primary">
                View on Github
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Flags and Mines Game</h5>
              <p className="card-text">
                Simple Minesweeper game built with React.js.
              </p>
              <a href="https://github.com/Lieben5704/L2T12-Capstone_React_Game" className="btn btn-primary">
                View on Github
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">
                Weather app that allows you to get weather info for a preferred location.
              </p>
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
