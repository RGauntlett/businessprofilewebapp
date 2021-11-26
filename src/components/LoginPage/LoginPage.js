import {
  Center,
  Stack,
  Image,
  Heading,
  Text,
  Button,
  Input,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Formik, Form } from "formik";

export default function LoginPage() {
  const Http = new XMLHttpRequest();
  const url = "localhost:3000/";
  return (
    <Center h="100vh" bg="#08185E" w="100%">
      <Stack boxShadow="md" bg="whiteAlpha.900" p="15" rounded="md">
        <Image
          src="https://getter.com.au/images/van.png"
          alt="Logo"
          maxW="70px"
          mb="0"
          mx="auto"
        />
        <Heading as="h1">Log in</Heading>
        <Text fontSize="lg" color="#08185E">
          Please log in with your username and password
        </Text>

        <Formik
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              Http.open("GET", url);
              Http.send();
            }, 1000);
          }}
          initialValues={{ email: "", password: "" }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack my="4" spacing="6">
                <Input name="email" type="email" />
                <Input name="password" type="password" />
                <Checkbox color="#08185E">Keep me logged in</Checkbox>
                <Flex w="100%" justify="center">
                  <Link to="/">
                    <Button
                      isLoading={isSubmitting}
                      loadingText="Loading"
                      size="lg"
                      backgroundColor="#Ee8a2e"
                      _hover={{ backgroundColor: "#08185E", color: "#Ee8a2e" }}
                      color="#08185E"
                      type="submit"
                      w="100%"
                    >
                      Login
                    </Button>
                  </Link>
                </Flex>
              </Stack>
            </Form>
          )}
        </Formik>

        <Stack justify="center" color="gray.600" spacing="3">
          <Text as="div" textAlign="center">
            <span>Don&lsquo;t have an account? </span>
            <Button color="#08185E" variant="link">
              Sign Up
            </Button>
          </Text>
          <Button color="#08185E" variant="link">
            Forgot Password?
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}
