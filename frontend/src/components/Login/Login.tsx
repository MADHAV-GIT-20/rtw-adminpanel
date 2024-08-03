import { Button, Grid, Stack, TextInput, Title, Group, Anchor, Box, Space, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        height: '200vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://cdn2.vectorstock.com/i/1000x1000/18/46/seamless-pattern-background-travel-vector-9631846.jpg)',
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
          <Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Welcome to RTW
          </Text>
        </Box>

        <Title order={2} align="center" style={{ textDecoration: 'underline' }}>
          RTW Admin
        </Title>
        <Space h="md" />
        <Grid gutter="lg">
          <Grid.Col>
            <TextInput label="Username" placeholder="Enter your username" required />
          </Grid.Col>
          <Grid.Col>
            <TextInput label="Password" placeholder="Enter your password" type="password" required />
          </Grid.Col>
          <Grid.Col>
            <Group>
              <Button fullWidth>Login</Button>
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