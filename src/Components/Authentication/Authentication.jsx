// AuthPage.js
import React, { useState } from 'react';
import { AuthContainer, Input, CreateAccountButton,Title } from './Authentication.style'

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phone, setPhone] = useState('');

  const handleCreateAccount = () => {
    // Perform account creation logic here
    console.log('Account created!');
  };

  return (
    <AuthContainer>
      <Title>Create Account</Title>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <Input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <CreateAccountButton onClick={handleCreateAccount}>Create Account</CreateAccountButton>
    </AuthContainer>
  );
};

export default Authentication;
