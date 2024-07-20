import * as React from 'react';

export const EmailTemplate = ({
  firstName,
  lastName,
  company,
  email,
  phoneNumber,
  message
}) => (
  <div>
    <h1>You got a message from, {firstName} {lastName}!</h1>
    <p>Phone Number - {phoneNumber} </p>
    <p>Company - {company} </p>
    
    <h1>Message</h1>
    <p>{message} </p>
    
  </div>
);