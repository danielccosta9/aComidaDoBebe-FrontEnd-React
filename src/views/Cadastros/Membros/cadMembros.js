/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import "../../../assets/css/button.css";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Membros() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Cadastro de Membros</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Nome do Membro</label>
                        <Input
                          placeholder="JOSE DA SILVA MARQUES"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>CPF</label>
                        <Input
                          placeholder="123.456.789-00"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="3">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Data de nascimento
                        </label>
                        <Input
                          placeholder="15/10/1999" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Número de telefone</label>
                        <Input
                          placeholder="(83) 99999-9999"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Alergias</label>
                        <Input
                          placeholder="Sem alergias" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Residência</label>
                        <Input
                          placeholder="Centro" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup className="marginTop">
                        <Button className="buttonNew buttonComponents">Novo</Button>
                        <Button className="buttonCancel buttonComponents">Cancelar</Button>
                        <Button className="buttonAdd buttonComponents">Cadastrar</Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Membros;
