import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DemoPage1 = () => {
    return (
        <div style={{ textAlign: "center", minHeight: "100%", minWidth: "100%" }}>
            <Row noGutters className="justify-content-center align-items-center">
                <Col>
                    <h1 className="text-white">DEMO PAGE 1</h1>
                </Col>
            </Row>
        </div>
    )
}

export default DemoPage1;