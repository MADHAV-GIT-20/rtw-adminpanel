import { SimpleGrid, Stack, Title } from '@mantine/core';
import { Login } from 'C:/Users/Megha/OneDrive/Desktop/Repo/rtw-adminpanel/frontend/src/components/Login/Login';


export const Authenticate = () => (
  <Stack h="100%" w="100%" align="center" justify="center">
    <SimpleGrid cols={2}>
      <Title>Welcome to RTW Admin</Title>
      <Login />
    </SimpleGrid>
  </Stack>
);
