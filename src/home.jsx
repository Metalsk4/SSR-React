import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
    return (
        <div style={{ textAlign: "center", minHeight: "100%", minWidth: "100%" }}>
            <Row noGutters className="justify-content-center align-items-center">
                <Col>
                    <header className="text-info h1">
                        SSR DEMO
                    </header>
                    <h1 className="text-white">Home Page</h1>
                </Col>
            </Row>
        </div>

    )
}

export default HomePage;