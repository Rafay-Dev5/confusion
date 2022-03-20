import React from "react";
import { Link } from "react-router-dom";

//import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Loading } from "./LoadingComponent";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function Menu(props) {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        {/* <Media tag="li">
            <Media left middle>
              <Media object src={dish.image} alt={dish.name} />
            </Media>
            <Media body className="ml-5">
              <Media heading={dish.name}></Media>
              <p>{dish.description}</p>
            </Media>
          </Media> */}
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{this.state.props.errMess}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {/* <Media list>{menu}</Media> */}
          {menu}
        </div>
        {/* <div className="row">{this.renderDish(this.state.selectedDish)}</div> 
        <DishDetail selectedDish={this.state.selectedDish} />*/}
      </div>
    );
  }
}

export default Menu;
