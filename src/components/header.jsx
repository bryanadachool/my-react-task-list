import { Box,Text,Heading } from "@chakra-ui/react";
export default function Header() {
  
  return (
    //<div className="header">
    <Box bg="teal" p={4} color="white">
        <Heading as="h1" size="lg">
            Task Manager
        </Heading>
    </Box>
      
   // </div>
  );
}