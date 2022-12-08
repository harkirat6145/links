import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Progress,
} from "reactstrap";
import { AiOutlinePlusSquare, BsGlobe2 } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

export default function Home() {
  let colorBg = localStorage.getItem("color");

  return (
    <>
      <div
        className="text-light text-center p-5"
        style={{
          background: colorBg,
        }}
      >
        <Form>
          <Row>
            <Col md={6} className="">
              <Input
                placeholder="Name Of Activity"
                className="fntwight  py-2"
              />

              <p className="text-dark text-start mb-4 fw-bold mt-4">
                What is the appropriate age?
              </p>

              <Progress className="mb-4 " value="25" />

              <div className="d-flex  align-items-center">
                <Button
                  color="info "
                  className="rounded-pill w-25 border-info bgwhite px-4 py-2 "
                >
                  0 y.o.
                </Button>{" "}
                <p className="text-dark ms-5 me-5 fw-bold mb-1">to</p>{" "}
                <Button
                  className="rounded-pill  w-25 bgwhite border-info px-4 py-2"
                  color="info"
                >
                  0 y.5.
                </Button>
              </div>

              <p className="text-dark text-start mb-4 fw-bold mt-4">
                How much is the price?
              </p>
              <Progress className="mb-4" value="25" />

              <div className="d-flex  align-items-center">
                <Button
                  className="rounded-pill w-25  bgwhite border-info px-4 py-2"
                  color="info"
                >
                  $0
                </Button>{" "}
                <p className="text-dark ms-5 me-5 fw-bold mb-1">to</p>{" "}
                <Button
                  className="rounded-pill  w-25 bgwhite border-info px-4 py-2"
                  color="info"
                >
                  $100
                </Button>
              </div>
              <FormGroup>
                <Label for="exampleDate"></Label>
                <Input
                  className="fntwight mt-3 py-2"
                  id="exampleDate"
                  name="date"
                  placeholder="date placeholder"
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col md={6} className="">
              {" "}
              <FormGroup>
                <Col sm={10} className="w-100">
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Catageoires</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  <p className="text-dark mb-4 text-start mt-4 fw-bold">
                    What is appropriate wether?
                  </p>
                  <Progress className="mb-4" value="25" />

                  <div className="d-flex align-items-center">
                    <Button
                      className="rounded-pill w-25  bgwhite border-info  px-4 py-2"
                      color="info"
                      pill
                    >
                      -30
                    </Button>
                    <p className="text-dark ms-5 me-5 fw-bold mb-0">to</p>{" "}
                    <Button
                      className="rounded-pill w-25  bgwhite  border-info px-4 py-2"
                      color="info"
                    >
                      +40
                    </Button>
                  </div>
                  <p className="text-dark text-start fw-bold mb-4 mt-4">
                    Season(s)
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="sprn">
                      <img
                        src="img/green-leaf-logo-free-vector.webp"
                        className="imgheight"
                        alt=""
                      />
                      <p className="text-dark fntwight mb-1">spring</p>
                      <Input type="checkbox" />
                    </div>

                    <div className="sprn">
                      <img
                        src="img/green-leaf-logo-free-vector.webp"
                        className="imgheight"
                        alt=""
                      />
                      <p className="text-dark fntwight mb-1">summer</p>
                      <Input type="checkbox" />
                    </div>
                    <div className="sprn">
                      <img
                        src="img/green-leaf-logo-free-vector.webp"
                        className="imgheight "
                        alt=""
                      />
                      <p className="text-dark fntwight mb-1">fall</p>
                      <Input type="checkbox" />
                    </div>
                    <div className="sprn">
                      <img
                        src="img/green-leaf-logo-free-vector.webp"
                        className="imgheight"
                        alt=""
                      />
                      <p className="text-dark fntwight mb-1">winter</p>
                      <Input type="checkbox" />
                    </div>
                  </div>
                  <div className="d-flex  position-relative">
                    <p>
                      <BsGlobe className="text-info global position-absolute" />
                    </p>
                    <Input
                      className="mt-4 fntwight py-2 ps-5"
                      placeholder="URL"
                    />
                  </div>
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-3 w-75">
            <p className="text-dark text-start fw-bold mb-4 mt-4">
              Upload images
            </p>
            <Col md={2} sm={3}>
              <div className="upload  borderradius  border">
                <AiOutlinePlusSquare className="text-info" />
              </div>
            </Col>
            <Col md={2} sm={3}>
              <div className="upload borderradius border">
                <AiOutlinePlusSquare className="text-info" />
              </div>
            </Col>
            <Col md={2} sm={3}>
              <div className="upload borderradius border">
                <AiOutlinePlusSquare className="text-info" />
              </div>
            </Col>
            <Col md={2} sm={3}>
              <div className="upload borderradius border">
                <AiOutlinePlusSquare className="text-info" />
              </div>
            </Col>
            <Col md={2} sm={3} className="d-sm-none d-lg-block">
              <div className="upload borderradius border">
                <AiOutlinePlusSquare className="text-info" />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
