import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className="btn btn-info" href={props.ghLink}>
          <BsFillArrowRightCircleFill /> &nbsp;
          {props.isBlog ? "Blog" : "Ver tratamientos"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {props.demoLink && (
        <Button className="btn btn-info" href={props.ghLinK}>
        <BsFillArrowRightCircleFill /> &nbsp;
        </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;