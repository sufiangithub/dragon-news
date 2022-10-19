import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";


const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup className="w-100" vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login With Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaWhatsapp /> Whatsapp</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitch /> Twitch</ListGroup.Item>
          <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>

      <div className="mt-4">
       <BrandCarousel />
      </div>

    </div>
  );
};

export default RightSideNav;
