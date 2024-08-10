// import { HomePage } from '@/pages/Home/Home.page';
import {
  Anchor,
  Box,
  Button,
  Grid,
  Group,
  NavLink,
  SimpleGrid,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { Signup } from '../Signup/Signup';
import { Authenticate } from '../../pages/Authenticate/Authenticate.page';
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
    <Box
      style={{
        height: '200vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage:
          'url(https://cdn2.vectorstock.com/i/1000x1000/18/46/seamless-pattern-background-travel-vector-9631846.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <Stack
        align="center"
        justify="center"
        style={{
          padding: '2rem',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <Box
          style={{
            padding: '1rem',
            borderRadius: '8px',
            backgroundColor: '#a8dadc', // Semi-transparent dark background
            color: '#000000',
            textAlign: 'center',
            marginBottom: '1rem',
            width: '100%', // Ensure the box takes full width
          }}
        >
          <Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Welcome to RTW</Text>
        </Box>

        <Title order={2} style={{ textDecoration: 'underline' }}>
          RTW Admin
        </Title>
        <Space h="md" />
        <Grid gutter="lg">
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
            <Group>
              <Button fullWidth onClick={handleSignup}>
                Login
              </Button>

              <Anchor component="button" type="button" onClick={() => navigate('/signup')}>
                Signup
              </Anchor>
            </Group>
          </Grid.Col>
        </Grid>
      </Stack>
    </Box>
  );
};
