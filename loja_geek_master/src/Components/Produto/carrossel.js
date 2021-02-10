import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require('./img/avengeralta.jpg').default,
    altText: '',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: require('./img/panteraalta.png').default,
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: require('./img/heroialta.jpg').default,
    altText: '',
    caption: '',
    header: '',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;