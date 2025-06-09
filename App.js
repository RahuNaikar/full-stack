import './App.css';
import profilePic from './sagar.png';

function App() {
  return (
    <div>
      <header className="header">
        <img src={profilePic} alt="Your Name" className="profile-pic" />
        <h1>SAGAR M S</h1>
        <p> Student|Web Developer | Designer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>Hello! I'm a passionate web developer and Web Designer with experience in building full-stack web apps and AI models. I love turning ideas into digital reality using code and creativity.</p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Digital Voting System</h3>
          <p>A secure, animated web platform for electronic voting using OTP and session-based authentication. Built with HTML, CSS, JS, PHP, Node.js, and MySQL.</p>
        </div>
        <div className="project">
          <h3>Blood Smear Segmentation</h3>
          <p>Deep learning project using V-Net to segment leukemia-affected cells in blood smear images (ALL_IDB1 dataset).</p>
        </div>
        <div className="project">
          <h3>Crop Suitability Classifier</h3>
          <p>ML-based project that classifies the best-suited crops based on soil, rainfall, temperature, and season using KNN, Decision Tree, SVM, and Naive Bayes.</p>
        </div>
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>Responsive React-based personal portfolio with clean UI/UX, photo, project showcase, and contact section.</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:your.email@example.com">2005sagarms@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/sagarms</a></p>
        <p>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">github.com/2005sagarms</a></p>
      </section>

      <footer className="footer">
        &copy; 2025 sagar m s. All rights reserved.
      </footer>
    </div>
  );
}

export default App;