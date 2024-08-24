// import { HomePage } from '@/pages/Home/Home.page';
import {
  Anchor,
  Box,
  Button,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
  Space,
  PasswordInput,
  Alert,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IconEye, IconEyeOff, IconAlertCircle } from '@tabler/icons-react';
import axios from 'axios';

export const Login = () => {
  const navigate = useNavigate();
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8181/api/v1/auth/authenticate',
        loginValues
      );

      if (response.data != null) {
        navigate('/menu');
      } else {
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('Invalid credentials');
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
            backgroundColor: '#a8dadc',
            color: '#000000',
            textAlign: 'center',
            marginBottom: '1rem',
            width: '100%',
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
            <PasswordInput
              placeholder="Enter password"
              name="password"
              value={loginValues.password}
              onChange={handleInputChange}
              required
              visibilityToggleIcon={({ reveal, size }) =>
                reveal ? <IconEyeOff size={size} /> : <IconEye size={size} />
              }
              visible={showPassword}
              onVisibilityChange={() => setShowPassword((prev) => !prev)}
            />
          </Grid.Col>
          <Grid.Col>
            {errorMessage && (
              <Alert
                icon={<IconAlertCircle size="1rem" />}
                title="Login failed"
                color="red"
              >
                {errorMessage}
              </Alert>
            )}
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