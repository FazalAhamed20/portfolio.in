import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fazal Ahamed AG </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            I am a self-taught Developer.
            <br />
            I have completed Masters in Computer Science at Bharathiar University.
            <br />
            <br />
          </p>
         

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Fazal Ahamed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
