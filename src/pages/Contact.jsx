import { Box, Container, VStack, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Contact Us
        </Heading>
        <Text fontSize="lg" textAlign="center">
          For inquiries, please email us at contact@electronicsstore.com
        </Text>
      </VStack>
    </Container>
  );
};

export default Contact;