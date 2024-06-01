import { Box, Container, VStack, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          About Us
        </Heading>
        <Text fontSize="lg" textAlign="center">
          We are a leading retailer of electronic devices, offering the latest and greatest in technology.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;