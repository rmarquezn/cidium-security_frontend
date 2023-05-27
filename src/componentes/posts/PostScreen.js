import React from 'react';
import { useState, useEffect } from 'react';
import { PostEntry } from './PostEntry';
import { PostVisualization } from './PostVisualization';
import { Container, Row, Col } from 'react-bootstrap';

export const PostScreen = () => {
  const token = localStorage.getItem("token");
  const headers = { 'auth_key': token };

  return (
    <Container fluid className='align-items-center min-vh-100'>
      <Row>
        <Col lg={12} className='mb-3'>
          <PostEntry />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
        </Col>
      </Row>
    </Container>
  );
};
