import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greet from './Greet';

describe('<Greet />', () => {

  test('it should mount', () => {
    render(<Greet />);

    const greet = screen.getByTestId('Greet');

    expect(greet).toBeInTheDocument();
  });

  test('it should greet', () => {

 
    render(<Greet />);

    const textElement = screen.getByText(/Hello/) // '+name)

    expect(textElement).toBeInTheDocument();
  });

  
  test('it should greet with a name', () => {

    const name = "Pihh"
    render(<Greet name={name}/>);

    const textElement = screen.getByText("Hello "  +name)

    expect(textElement).toBeInTheDocument();
  });
  test('it should greet with a <b> attribute name', () => {

    const name = "Pihh"
    const  {container} = render(<Greet name={name}/>);

    const element = container.querySelector('[data-test="Greet::name"]')
    expect(element instanceof HTMLElement).toBeTruthy();
  });

});