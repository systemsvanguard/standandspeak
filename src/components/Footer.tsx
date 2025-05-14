// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-5">
      <div className="container text-center">
        <small>© 2024 - {new Date().getFullYear()} <strong>Stand and Speak Confidently!</strong> All rights reserved.
          <br />Yet another coding practice portfolio site by Toastmaster <a href="https://ryanhunter.ca/" className="link_no_underline">Ryan Hunter</a> | GitHub handle <span style={{ color: '#008b00', fontWeight: 'bold', fontStyle: 'italic' }}><a href="https://github.com/systemsvanguard" className="link_no_underline">SystemsVanguard</a></span>.
          <br />Built using React, Typescript, JSON, Bootstrap Icons, Google Fonts, CSS, & and lots of love <span style={{ color: '#ff0000'}}>&#9829; </span>  <span style={{ color: '#00008b'}}>&#9825; </span>  <span style={{ color: '#00008b'}}>&#9829; </span> .
          <br />
        </small>
      </div>
    </footer>
  );
};

export default Footer;
