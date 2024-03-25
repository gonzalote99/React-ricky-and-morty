import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Badge} from 'reactstrap';


function Status(props) {
  let color = '';
  switch(props) {
    case 'Alive':
      color = 'success';
     break;
    case 'Dead':
      color = 'danger';
      break;
    default:
      color = 'secondary';
      break;
      
  }
  return color;
}

export default function(props) {
  return(
    <Card className='h-100 overflow-hidden'>
    <img className='rounded img-fluid mb-2' draggable='false' alt={props.data.name} src={props.data.image}  />
      <CardText className='mb-1'>
      <Badge color={Status(props.data.status)}>{props.data.status}</Badge>
      </CardText>
      <CardBody className='p-0'>
      <CardTitle tag='h5'>{props.data.name}</CardTitle>
        <CardSubtitle className='mb-2 text-muted' tag='h6'>
          {props.data.gender}</CardSubtitle>

        <CardText className='d-flex flex-column'>
        <span className='text-muted'>last known location:</span>
          <span>{props.data.location.name}</span>
          
        </CardText>
      </CardBody>
    </Card>
  )
}
