import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContents} from '../../data/dataStore';


const FAQ = () => (
  <Container>
    <Hero titleText={faqContents.title} image={faqContents.image} />
    {faqContents.content}
  </Container>
);

export default FAQ;
