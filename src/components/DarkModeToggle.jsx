import { useColorMode, Button } from '@chakra-ui/react';

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
}