import React, { useRef } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  useDisclosure,
  Button,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ComponentDrawer } from './ComponentDrawer';
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
    </ChakraProvider>
  );
}

export default App;
