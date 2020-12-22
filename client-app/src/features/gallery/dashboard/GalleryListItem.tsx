import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Label, Segment, Image } from 'semantic-ui-react';

import { IMotofy } from '../../../app/models/motofy';

interface IProps {
  motofy: IMotofy;
}

const GalleryListItem: React.FC<IProps> = ({ motofy }) => {

  return (
    <Segment.Group>
      <Segment>
        <Item>
          <Item.Group>
            {/* <Item.Image size='' bordered src='/assets/user.png'/> */}
            <Item.Image size='big' bordered src={motofy.photoUrl} centered/>
          </Item.Group>
          <Item.Content>
            <Item.Header as='a'>{motofy.name}</Item.Header>
            {/* <Item.Meta>{motofy.brand}</Item.Meta> */}
            <Image
              size='mini'
              src={`/assets/brandImages/${motofy.brand}.png`}
            />
              <Label basic content={motofy.brand} />
            <Item.Description>Owned by Bob</Item.Description>
            <Item.Extra>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Segment>
      <Segment>
        <Icon name='clock' /> {motofy.datePublished}
        <Icon name='marker' /> {motofy.city}, {motofy.country}
      </Segment>
      <Segment>
        <Icon name='motorcycle' /> {motofy.model} /
        <Icon name='flag checkered' /> {motofy.cubicCentimeters} cc
      </Segment>
      <Segment clearing>
        <span>{motofy.description}</span>
        <Button
          as={Link}
          to={`/gallery/${motofy.id}`}
          floated='right'
          content='View'
          color='blue'
        ></Button>
      </Segment>
    </Segment.Group>
  );
};

export default GalleryListItem;
