import React from 'react';
import {Card, Image, Button, } from 'semantic-ui-react'

const Item = ({name, description, image, likes}) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic color='green'>{likes}</Button>
    </Card.Content>
  </Card>
)

export default Item