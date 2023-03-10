import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconName } from "react-icons/bs";

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Center,
} from "@chakra-ui/react";

import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "https://63c5cfbdf80fabd877f05d4d.mockapi.io/login");
  xmlhttp.send();

  function Verificar() {
    if (
      (email === JSON.parse(xmlhttp.response)[0].email &&
        senha === JSON.parse(xmlhttp.response)[0].senha) ||
      (email === JSON.parse(xmlhttp.response)[1].email &&
        senha === JSON.parse(xmlhttp.response)[1].senha) ||
      (email === JSON.parse(xmlhttp.response)[2].email &&
        senha === JSON.parse(xmlhttp.response)[2].senha) ||
      (email === JSON.parse(xmlhttp.response)[3].email &&
        senha === JSON.parse(xmlhttp.response)[3].senha) ||
      (email === JSON.parse(xmlhttp.response)[4].email &&
        senha === JSON.parse(xmlhttp.response)[4].senha) ||
      (email === JSON.parse(xmlhttp.response)[5].email &&
        senha === JSON.parse(xmlhttp.response)[5].senha)
    ) {
      alert("Foiiii!");
    } else {
      alert("Não foi!!!!");
    }
  }
  /*for (var i = 1; i < 7; i++) {
      if (
        email === JSON.parse(xmlhttp.response)[i].email &&
        senha === JSON.parse(xmlhttp.response)[i].senha
      ) {
        alert("Foi");
      } else if (
        email != JSON.parse(xmlhttp.response)[i].email &&
        senha != JSON.parse(xmlhttp.response)[i].senha
      ) {
        alert("Não foi");
      }
    }
  }*/

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="#7590f8">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email address"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Center>
                <Button
                  onClick={Verificar}
                  id="btn"
                  w={240}
                  p="6"
                  type="submit"
                  bg="#7590f8"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "#7590f8" }}
                >
                  Login
                </Button>
              </Center>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="#7590f8" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
