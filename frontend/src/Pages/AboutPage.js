import "../Styles/About.css"

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Kende",
      role: "3D Modeler",
      bio: "The team's 3D modeler who brings game characters and environments to life. Contributes to the project with creative solutions and highly detailed models.",
      image: "https://avatars.githubusercontent.com/u/78867738?v=4"
    },
    {
      name: "Dongesz",
      role: "Team Leader / Game Developer",
      bio: "Developer of the game engine and mechanics. Responsible for gameplay and technical implementation.",
      image: "https://avatars.githubusercontent.com/u/83972650?v=4"
    },
    {
      name: "Lapma",
      role: "Team Leader / Website Developer",
      bio: "Responsible for the animations of the game characters. Brings movements and characters to life.",
      image: 'https://avatars.githubusercontent.com/u/112930985?v=4'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About us</h1>
        <p>
          Welcome to the website of our 3D game development team! Our goal is to create an impressive 3D game that offers a unique experience for players. Our team is committed to quality and innovation.
        </p>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-image"
                />
              )}
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2>About Our Game</h2>
        <div className="about-content">
          <p> Our game takes place in a stunning 3D world where players embark on unique adventures. We're developing the game using modern graphics solutions and innovative gameplay mechanics. </p> <p> Throughout the project, we utilize the latest 3D modeling and animation techniques to create a realistic and captivating world. </p> <p> We believe that quality and player experience are the most important aspects, which is why we pay close attention to every detail during development. </p>
        </div>
      </div>
    </div>

  );
};

export default AboutPage;
