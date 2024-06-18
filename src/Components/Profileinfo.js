const Profileinfo = () => {
  return (
    <div id="about">
      <h1 className="pghead">SRIDHAR S</h1>
      <ul className="infouser">
        <li>
          {" "}
          <img src="./location.svg" /> Chennai, India
        </li>
        <li>
          <img src="./phone.svg" />{" "}
          <a href="tel:+919597280532">+91 9597280532</a>
        </li>
        <li>
          <img src="./envelope.svg" />{" "}
          <a href="mailto:ronsridhar607@gmail.com">ronsridhar607@gmail.com</a>
        </li>
        <li>
          <a href="./sridhar-resume.pdf" target="_blank" download="sridhar.pdf">
            Download CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Profileinfo;
