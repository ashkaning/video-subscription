import React, { Component } from "react";
//import API from "../utils/API";
import { toast } from "react-toastify"
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import { ColRow, Row, Container } from "../components/Grid";
import "./style.css"

class NoMatch extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <ColRow size="md-12">
                        <div className="text-center">
                            <h1 className="text-center">Are you lost?!</h1>
                            <Link className="btn btn-primary" to="/profile">Click Here</Link>
                        </div>
                    </ColRow>
                </Row>
            </Container>
        );
    }
}
export default NoMatch;