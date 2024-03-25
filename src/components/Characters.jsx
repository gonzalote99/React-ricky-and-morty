import React from 'react';

import {Container, Row, Col, Button} from 'reactstrap';
import CharacterCard from './CharacterCard';

function ViewCard(props) {
  if(props.data) {
    return props.data.map((character) => (
      <Col xs='6' md='4' lg='3' className='mb-4' key={character.name + character.id}>
      <CharacterCard data={character} />
      </Col>
    ));
  }
}

function FooterInfo(props) {
  if(props.dataInfo) {
    return(
      <p className='text-muted text-center'>
      toplam {props.dataInfo.count} kayittan {props.children } kayit
      </p>
    );
  }
}

export default function Characters(props) {
  return(
    <Container>
    <Row>
   <ViewCard data={props.data} />
      <FooterInfo dataInfo={props.dataInfo}>
         <strong>{props.data.length}</strong>
      </FooterInfo>
      <Col xs='12' lg='4' className='offset-lg-4'>
      <Button className='w-100 mx-auto mb-4' color='primary' onClick={() => props.getData(props.dataInfo.next)}>more</Button>
      </Col>
    </Row>
    </Container>
  )
}