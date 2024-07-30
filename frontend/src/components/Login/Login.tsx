// import { HomePage } from '@/pages/Home/Home.page';
import { Button, Grid, NavLink, SimpleGrid, TextInput } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { Signup } from '../Signup/Signup';
import { Authenticate } from '@/pages/Authenticate/Authenticate.page';
import axios from 'axios';
import { useState } from 'react';

export const Login = () => {
  const navigate = useNavigate();
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Inside handleInputChange');
    const { name, value } = event.target;
    setLoginValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    // event.preventDefault;
    const response = await axios.post(
      'http://localhost:8181/api/v1/auth/authenticate',
      loginValues
    );

    console.log('Login Form Values:', loginValues);

    if (response.data != null) {
      navigate('/menu');
    }
  };

  return (
    <Grid w="70%">
      <Grid.Col>
        <TextInput
          placeholder="Enter email"
          name="email"
          value={loginValues.email}
          onChange={handleInputChange}
          required
        />
      </Grid.Col>
      <Grid.Col>
        <TextInput
          placeholder="Enter password"
          name="password"
          value={loginValues.password}
          onChange={handleInputChange}
          required
          type="password"
        />
      </Grid.Col>
      <Grid.Col>
        <SimpleGrid cols={2} w="70%">
          <Button onClick={handleSignup}>Login</Button>

          <NavLink label="Signup" onClick={() => navigate('/Signup')} />
        </SimpleGrid>
      </Grid.Col>
    </Grid>
  );
};
