import { HomePage } from '@/pages/Home/Home.page';
import { Button, Grid, NavLink, SimpleGrid, TextInput } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { Signup } from '../Signup/Signup';
import { Authenticate } from '@/pages/Authenticate/Authenticate.page';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Grid w="70%">
      <Grid.Col>
        <TextInput placeholder="Enter user name" />
      </Grid.Col>
      <Grid.Col>
        <TextInput placeholder="Enter password" type="password" />
      </Grid.Col>
      <Grid.Col>
        <SimpleGrid cols={2} w="70%">
          <Button>Login</Button>

          <NavLink label="Signup" onClick={() => navigate('/Signup')} />
        </SimpleGrid>
      </Grid.Col>
    </Grid>
  );
};
