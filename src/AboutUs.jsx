const AboutUs = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1>About Us</h1>
          <p>
            "We are a dedicated team of four men and one woman, each bringing unique talents and perspectives to the table. Our collaboration is driven by a shared passion for innovation, creativity,
             and excellence in every project we undertake. Together, we strive to deliver impactful results, turning challenges into opportunities for growth and success."
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: 'rgb(189, 189, 44)',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100vh',
    margin: 0,
  },
  nav: {
    display: 'flex',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '20px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '4rem',
    fontSize: '1.5rem',
  },
  content: {
    color: 'white',
  },
};

export default AboutUs;
