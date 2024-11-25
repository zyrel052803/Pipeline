
const ProgrammerInfo = () => {
  const members = [
    {
      name: 'Kyle Salaysay',
      contact: '09123456789',
      email: 'kylesalaysay@gmail.com',
      image: 'P1.jpg',
    },
    {
      name: 'Zyrelle Cuizon',
      contact: '09123475843',
      email: 'zyrelcuizon@gmail.com',
      image: 'P2.jpg',
    },
    {
      name: 'Christopher Culanag',
      contact: '09123475843',
      email: 'topher@gmail.com',
      image: 'P3.jpg',
    },
    {
      name: 'Cristine Mamac',
      contact: '09123475843',
      email: 'cristine@gmail.com',
      image: 'P4.jpg',
    },
    {
      name: 'Gino Carrillo',
      contact: '09123475843',
      email: 'gino@gmail.com',
      image: 'P5.jpg',
    },
   
  ];

  return (
    <div style={styles.body}>
      <h1 style={styles.title}>Mathematicians</h1>
      <div style={styles.memberContainer}>
        {members.map((member, index) => (
          <div key={index} style={styles.member}>
            <img
              src={member.image}  
              alt={`Member ${index + 1}`}
              style={styles.memberImage}
            />
            <h2 style={styles.memberName}>{member.name}</h2>
            <p style={styles.memberDetails}>Contact: {member.contact}</p>
            <p style={styles.memberDetails}>Email Address: {member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: 'rgb(56, 56, 219)',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    margin: 0,
    height: '100vh',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '20px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  memberContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },
  member: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  memberImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  memberName: {
    margin: '10px 0 5px',
    fontSize: '20px',
  },
  memberDetails: {
    margin: '5px 0',
  },
};

export default ProgrammerInfo;
