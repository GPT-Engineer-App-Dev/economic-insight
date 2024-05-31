import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box as="section" p={8} bg="#f3f2ef">
        <Heading as="h2" size="2xl" mb={4}>Main Headline: Featured Article</Heading>
        <Image src="https://via.placeholder.com/800x400" alt="Featured Article" mb={4} />
        <Text fontSize="lg">This is a short description of the featured article. It provides a brief overview of the content to entice readers to click and read more.</Text>
      </Box>

      {/* Articles Grid */}
      <Box as="section" p={8} bg="#f3f2ef">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Box>
            <Image src="https://via.placeholder.com/400x200" alt="Article 1" mb={4} />
            <Heading as="h3" size="md" mb={2}>Article 1</Heading>
            <Text>This is a short description of the first article.</Text>
          </Box>
          <Box>
            <Image src="https://via.placeholder.com/400x200" alt="Article 2" mb={4} />
            <Heading as="h3" size="md" mb={2}>Article 2</Heading>
            <Text>This is a short description of the second article.</Text>
          </Box>
          <Box>
            <Image src="https://via.placeholder.com/400x200" alt="Article 3" mb={4} />
            <Heading as="h3" size="md" mb={2}>Article 3</Heading>
            <Text>This is a short description of the third article.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/about">About Us</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
            <Link as={RouterLink} to="/terms">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;