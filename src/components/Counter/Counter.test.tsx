import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';
import user from '@testing-library/user-event'
describe('<Counter />', () => {
  test('it should mount', () => {
    render(<Counter count={0}/>);

    const counter = screen.getByTestId('Counter');

    expect(counter).toBeInTheDocument();
  });

  it('displays "0" as the count when the count prop is 0', () => {
    render(<Counter count={0} />);
    
    // Find the <p> element with data-test="Counter::count"
    const countElement = screen.getByTestId('Counter::count');
    
    // Assert that its text content is "0"
    expect(countElement).toHaveTextContent('0');
  });

  test('it renders correctly without functions',()=>{
    const {container} = render(<Counter count={0}/>);

    const counter = screen.getByTestId('Counter');
    const count:any = container.querySelector('[data-testid="Counter::count"]');
    const handleDecrement = container.querySelector('[data-testid="Counter::handleDecrement"]');
    const handleIncrement = container.querySelector('[data-testid="Counter::handleIncrement"]');
    const titleElement = screen.getByText('Counter Component')
  /*   console.log({count:count.innerHtml}) */
    expect(titleElement).toBeInTheDocument();
    expect(count).toBeInTheDocument()

    expect(handleDecrement).not.toBeInTheDocument()
    expect(handleIncrement).not.toBeInTheDocument()
  
  })
  test('handlers are called',async ()=>{
    user.setup()
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    render(
      <Counter
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    )
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })
    await user.click(incrementButton)
    await user.click(decrementButton)
    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
  test('handlers it increments and decrements correctly',async ()=>{

    user.setup()

    const CounterWrapper = () => {
      const [count, setCount] = useState(0);
      const handleIncrement =() => setCount(count + 1)
      const handleDecrement =() => setCount(count - 1)
      return (
        <Counter
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      );
    };

    // Render the wrapper component
    render(<CounterWrapper />);

    // Get the elements 
    // Find the <p> element with data-test="Counter::count"
    const $count = screen.getByTestId('Counter::count');
    const $handleDecrement = screen.getByTestId('Counter::handleDecrement');
    const $handleIncrement = screen.getByTestId('Counter::handleIncrement');

    await user.click($handleIncrement)
    expect($count).toHaveTextContent("1")
    await user.click($handleIncrement)
    expect($count).toHaveTextContent("2")
    await user.click($handleDecrement)
    expect($count).toHaveTextContent("1")
    await user.click($handleDecrement)
    expect($count).toHaveTextContent("0")
/*     await user.click($handleDecrement)
    expect(decrementHandler).toHaveBeenCalledTimes(1) */
  })
});