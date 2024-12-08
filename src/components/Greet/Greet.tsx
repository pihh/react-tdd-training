import React, { FC } from 'react';
import './Greet.css';

interface GreetProps {name?:string}

const Greet: FC<GreetProps> = (props:GreetProps) => (

  <div className="Greet" data-testid="Greet">
   <b data-test="Greet::name">
   Hello  {props.name  ? props.name :  "Guest"}
      </b>
  </div>
);

export default Greet;
