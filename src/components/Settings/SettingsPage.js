import { Center, Stack, Text, Heading, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import Sidebar from "../sidebar/Sidebar";

export default function SettingsPage() {
  return (
    <Flex p={30} w="100%">
      <Sidebar />
      <Center h="100vh" w="100%">
        <Stack
          boxShadow="md"
          bg="whiteAlpha.900"
          p="15"
          rounded="md"
          justify="center"
          alignContent="center"
        >
          <Image
            src="https://getter.com.au/images/van.png"
            alt="Logo"
            maxW="70px"
            mb="0"
            mx="auto"
          />
          <Heading as="h1">Bunnings Warehouse</Heading>
          <Text textAlign="center" fontSize="lg">
            We Love Our Suppliers!
          </Text>

          <Stack justify="center" color="gray.600" spacing="3">
            <Text as="div" textAlign="center">
              <span>Unsubscribe? </span>
              <Button color="#08185E" variant="link">
                Click Me
              </Button>
            </Text>
            <Button color="#08185E" variant="link">
              Change Password?
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Flex>
  );
}
