import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <Box>
        <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-around">
          <Link as={RouterLink} to="/" fontWeight="bold">
            Home
          </Link>
          <Link as={RouterLink} to="/products" fontWeight="bold">
            Products
          </Link>
          <Link as={RouterLink} to="/about" fontWeight="bold">
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" fontWeight="bold">
            Contact
          </Link>
        </Flex>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;