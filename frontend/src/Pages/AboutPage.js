import "../Styles/About.css"  

const AboutPage = () => {
  const teamMembers = [
    {
      name: "kende",
      role: "3D Modellező",
      bio: "A csapat 3D modellezője, aki a játék karaktereit és környezetét hozza életre. Kreatív megoldásokkal és részletgazdag modellekkel járul hozzá a projekthez.",
      image: "https://avatars.githubusercontent.com/u/78867738?v=4"
    },
    {
      name: "Dongesz",
      role: "Csapat vezető / Játékfejlesztő",
      bio: "A játék motorjának és mechanikáinak fejlesztője. Felelős a játékmenetért és a technikai megvalósításért.",
      image: "https://avatars.githubusercontent.com/u/83972650?v=4"
    },
    {
      name: "Lapma",
      role: "Csapat vezető / Weboldal fejlesztő",
      bio: "A játék karaktereinek animációiért felelős. A mozgások és a karakterek életre keltéséért felelős.",
      image: 'https://avatars.githubusercontent.com/u/112930985?v=4'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Rólunk</h1>
        <p>
          Üdvözöljük a 3D játékfejlesztő csapatunk oldalán! Célunk egy lenyűgöző 3D játék létrehozása,
          ami egyedi élményt nyújt a játékosoknak. Csapatunk elkötelezett a minőség és az innováció mellett.
        </p>
      </div>

      <div className="team-section">
        <h2>A Csapatunk</h2>
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
        <h2>A Játékunkról</h2>
        <div className="about-content">
          <p>
            Játékunk egy lenyűgöző 3D világban játszódik, ahol a játékosok egyedi kalandokba csöppennek.
            Modern grafikai megoldásokkal és innovatív játékmechanikákkal készítjük a játékot.
          </p>
          <p>
            A projekt során a legújabb 3D modellezési és animációs technikákat használjuk,
            hogy egy valósághű és lenyűgöző világot hozzunk létre.
          </p>
          <p>
            Hiszünk abban, hogy a minőség és a játékélmény a legfontosabb, ezért minden
            részletre odafigyelünk a fejlesztés során.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default AboutPage;
