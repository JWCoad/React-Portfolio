import React from "react";

import Card from "../components/Card";

import project1 from "../assets/images/screenshot.JPG";
import project2 from "../assets/images/screenshot1.JPG";
import project3 from "../assets/images/screenshot2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Gigtastic",
          subTitle: "Event finder application",
          imgSrc: project2,
          link: "https://github.com/JWCoad/cool-event-app",
          selected: false,
        },
        {
          id: 1,
          title: "Warhouse",
          subTitle: "An inventory management system",
          imgSrc: project3,
          link: "https://github.com/JWCoad/WareHouse",
          selected: false,
        },
        {
          id: 2,
          title: "Imbibe",
          subTitle: "Table reservation system",
          imgSrc: project1,
          link: "https://github.com/JWCoad/Imbibe",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
