import { AppShell, Flex, Group, UnstyledButton } from '@mantine/core';
import { IconLogout, IconUserCircle } from '@tabler/icons-react';
import styles from './Home.module.css';

export const HomePage = () => (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex align="center" justify="space-between" h="100%" className={styles.navbarContainer}>
          <div>Brand Logo</div>
          <Group>
            <UnstyledButton><IconUserCircle /></UnstyledButton>
            <UnstyledButton><IconLogout /></UnstyledButton>
          </Group>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
