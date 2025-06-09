
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
     <header>
  <h1>Rahul Naikar</h1>
 <img
  src="/crop.jpg"
  alt="Profile"
  className="profile-photo"
  onError={(e) => {
    e.target.onerror = null; // prevent infinite loop
    e.target.src = "/default.jpg";
  }}
/>

  <p>Frontend Developer | Problem Solver | Tech Enthusiast</p>
</header>


      <section>
        <h2>About Me</h2>
        <p>
         I am a dedicated engineering student from Malnad College of Engineering with a strong passion for technology and innovation. I enjoy solving real-world problems through practical applications of engineering concepts. Eager to learn, adapt, and contribute effectively in a collaborative environment. Always striving to enhance my technical and problem-solving skills.
        </p>
      </section>
      

      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>Employee Management System</strong> – A React + Node app to manage employee data.</li>
          <li><strong>IDT Project</strong> – Created a system for energy generation from waste heat sources.</li>
          <li><strong>HCI Certification</strong> – Completed NPTEL HCI course with 90%.</li>
          <li><strong>Stress Management Certification</strong> – Completed NPTEL course in Stress Management with 90%.</li>
         
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Machine Learning (SVM, PCA)</li>
          <li>Problem Solving & Debugging</li>
        </ul>
      </section>
       <section>
        <h2>Hobbies</h2>
        <p>
          I'm a passionate about playing Cricket , listening  Music ,reading Spiritual books.
        </p>
      </section>

      <section>
        <h2>Contact Me</h2>
        <p>Email: naikarrahul6@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/rahul-naikar-467a92267/</a></p>
      </section>
    </div>
  );
}

export default App;