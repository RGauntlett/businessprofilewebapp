import {
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  Divider,
  Box,
} from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/icon";
import {
  FiBriefcase,
  FiCalendar,
  FiDollarSign,
  FiHome,
  FiUser,
  FiSettings,
  FiChevronsUp,
  FiChevronsDown,
  FiSearch,
  FiBell,
  FiCreditCard,
} from "react-icons/fi";
import { FaHammer } from "react-icons/fa";
import MyChart from "./MyChart";
import { IconButton, Button } from "@chakra-ui/button";
import { Table, Thead, Th, Tr, Tbody, Td } from "@chakra-ui/table";
import { useState } from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/input";

export default function AccountPage() {
  const [display, changeDisplay] = useState("hide");
  const [value, changeValue] = useState(1);
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px" w="100%">
      <Flex
        w="20%"
        flexDir="column"
        alignItems="center"
        backgroundColor="#08185E"
        color="#fff"
      >
        <Flex flexDir="column" justifyContent="space-between" h="100vh">
          <Flex flexDir="column" as="nav">
            <Heading
              mt={50}
              mb={100}
              fontSize="4xl"
              alignSelf="center"
              letterSpacing="tight"
            >
              Dashboard
            </Heading>
            <Flex flexDir="column" align="flex-start" justifyContent="center">
              <Flex className="sidebar-items">
                <Link to="/">
                  <ChakraLink
                    fontSize="2xl"
                    className="active-icon"
                    as={FiHome}
                  />
                </Link>
                <Link _hover={{ textDecor: "none" }} to="accountpage">
                  <Text className="active">Home</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items">
                <Link to="calendar">
                  <ChakraLink fontSize="2xl" as={FiCalendar} />
                </Link>
                <Link _hover={{ textDecor: "none" }} to="calendar">
                  <Text>Calendar</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items">
                <Link to="customers">
                  <ChakraLink fontSize="2xl" as={FiUser} />
                </Link>
                <Link _hover={{ textDecor: "none" }} to="customers">
                  <Text>Clients</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items">
                <Link to="Sales">
                  <ChakraLink fontSize="2xl" as={FiDollarSign} />
                </Link>
                <Link _hover={{ textDecor: "none" }} to="Sales">
                  <Text>Sales</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items">
                <Link to="reports">
                  <ChakraLink fontSize="2xl" as={FiBriefcase} />
                </Link>
                <Link _hover={{ textDecor: "none" }} to="reports">
                  <Text>Reports</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items">
                <Link to="Settings">
                  <ChakraLink fontSize="2xl" as={FiSettings} />
                </Link>
                <Link _hover={{ textDecor: "none" }} to="settings">
                  <Text>Settings</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDir="column"
            alignItems="center"
            mb={10}
            mt={5}
            textAlign="center"
            ml={4}
          >
            <Link to="login">
              <Icon as={FaHammer} my={2} />
            </Link>

            <Heading as="h3" size="sm">
              Bunnings Warehouse
            </Heading>
            <Text color="#08185E" fontWeight="bold">
              Supplier
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Column 2 */}
      <Flex
        w="50%"
        p="3%"
        flexDir="column"
        overflow="auto"
        minHeight="100vh"
        backgroundColor="#fafafa"
      >
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Your Business Account,{" "}
          <Flex fontWeight="bold" display="inline-flex">
            Bunnings Warehouse
          </Flex>
        </Heading>
        <Text color="gray" fontSize="small">
          My Sales
        </Text>
        <Text fontWeight="bold" fontSize="2xl">
          $56,789.87
        </Text>
        <MyChart />

        <Flex justifyContent="space-between" mt={8}>
          <Flex align="flex-end">
            <Heading as="h2" size="large" letterSpacing="tight">
              Transactions
            </Heading>
            <Text fontSize="small" color="gray" ml={4}>
              Nov 28, 2021
            </Text>
          </Flex>
          <IconButton icon={<FiCalendar />} />
        </Flex>

        <Flex flexDir="column">
          <Flex overflow="auto">
            <Table variant="unstyled" mt={4}>
              <Thead>
                <Tr color="gray">
                  <Th>Name of Customer</Th>
                  <Th>Category</Th>
                  <Th isNumeric>Delivery Fee</Th>
                  <Th isNumeric>Purchase Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td size="sm" letterSpacing="tight">
                    John Doe
                  </Td>

                  <Td>Paint Supplies</Td>
                  <Td isNumeric>$56.23</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      $242
                    </Text>
                    .47
                  </Td>
                </Tr>
                <Tr>
                  <Td>Bill Russ</Td>
                  <Td>Scaffolding</Td>
                  <Td isNumeric>$87.23</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      $453
                    </Text>
                    .73
                  </Td>
                </Tr>
                <Tr>
                  <Td>Matty Matthews</Td>
                  <Td>Carpentry Supplies</Td>
                  <Td isNumeric>$14.23</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      $104
                    </Text>
                    .92
                  </Td>
                </Tr>
                <Tr>
                  <Td>John Doe</Td>
                  <Td>Paint Supplies</Td>
                  <Td isNumeric>$145.65</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      $1004
                    </Text>
                    .34
                  </Td>
                </Tr>
                <Tr>
                  <Td>Adam Shec</Td>
                  <Td>Electronic Tools</Td>
                  <Td isNumeric>$108.32</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      $895
                    </Text>
                    .23
                  </Td>
                </Tr>
                <Tr>
                  <Td>Jeff Punching</Td>
                  <Td>Wood Supplies</Td>
                  <Td isNumeric>$112.23</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      $567
                    </Text>
                    .34
                  </Td>
                </Tr>
                <Tr>
                  <Td>Tyler Anderes</Td>
                  <Td>Hardware</Td>
                  <Td isNumeric>$75.23</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      $789
                    </Text>
                    .63
                  </Td>
                </Tr>
                {display === "show" && (
                  <>
                    <Tr>
                      <Td>Jeff Punching</Td>
                      <Td>Paint Supplies</Td>
                      <Td isNumeric>$112.23</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          $567
                        </Text>
                        .34
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Max Kort</Td>
                      <Td>Tools</Td>
                      <Td isNumeric>$112.23</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          $589
                        </Text>
                        .34
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Sam Stone</Td>
                      <Td>Garden Supplies</Td>
                      <Td isNumeric>$85.65</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          $345
                        </Text>
                        .34
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Chris Ward</Td>
                      <Td>Scaffolding</Td>
                      <Td isNumeric>$230.22</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          $1094
                        </Text>
                        .57
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Jeff Punching</Td>
                      <Td>Wood Supplies</Td>
                      <Td isNumeric>$112.23</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          $567
                        </Text>
                        .34
                      </Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            </Table>
          </Flex>
          <Flex align="center">
            <Divider />
            <IconButton
              icon={display === "show" ? <FiChevronsUp /> : <FiChevronsDown />}
              onClick={() => {
                if (display === "show") {
                  changeDisplay("hide");
                } else {
                  changeDisplay("show");
                }
              }}
            />
            <Divider />
          </Flex>
        </Flex>
      </Flex>

      {/* Column 3 */}
      <Flex
        w="30%"
        backgroundColor="#f5f5f5"
        p="3%"
        flexDir="column"
        overflow="auto"
      >
        <Flex alignContent="center">
          <InputGroup
            bgColor="#fff"
            mb={4}
            border="none"
            borderColor="#fff"
            borderRadius="10px"
            mr={2}
          >
            <InputLeftElement pointerEvents="none" children={<FiSearch />} />
            <Input
              type="text"
              placeholder="Search Transactions"
              border="10px"
            />
          </InputGroup>

          <IconButton
            icon={<FiBell />}
            fontSize="sm"
            bgColor="#fff"
            borderRadius="50%"
            p="10px"
          />
          <Flex
            w={30}
            h={25}
            bgColor="#Ee8a2e"
            borderRadius="50%"
            color="#fff"
            align="center"
            justify="center"
            ml="-3"
            mt="-2"
            zIndex="100"
            fontSize="xs"
          >
            2
          </Flex>
        </Flex>
        <Heading letterSpacing="tight">My Cards</Heading>
        {value === 1 && (
          <Box
            borderRadius="25px"
            mt={4}
            w="100%"
            h="200px"
            bgGradient="linear(to-t, #Ee8a2e, #08185E)"
          >
            <Flex
              p="1em"
              color="#fff"
              flexDir="column"
              h="100%"
              justify="space-between"
            >
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex flexDir="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold" fontSize="xl">
                    $5,750.20
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>Getter</Text>
                </Flex>
              </Flex>
              <Text mb={4}>**** **** **** 1289</Text>
              <Flex align="flex-end" justify="space-between">
                <Flex>
                  <Flex flexDir="column" mr={4}>
                    <Text textTransform="uppercase" fontSize="xs">
                      Valid Thru
                    </Text>
                    <Text fontSize="lg">12/23</Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Text textTransform="uppercase" fontSize="xs">
                      CVV
                    </Text>
                    <Text fontSize="lg">***</Text>
                  </Flex>
                </Flex>
                <Icon as={FiCreditCard} />
              </Flex>
            </Flex>
          </Box>
        )}
        {value === 2 && (
          <Box
            borderRadius="25px"
            mt={4}
            w="100%"
            h="200px"
            bgGradient="linear(to-t, #32a855, #08185E)"
          >
            <Flex
              p="1em"
              color="#fff"
              flexDir="column"
              h="100%"
              justify="space-between"
            >
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex flexDir="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold" fontSize="xl">
                    $35,750.20
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>Getter</Text>
                </Flex>
              </Flex>
              <Text mb={4}>**** **** **** 4539</Text>
              <Flex align="flex-end" justify="space-between">
                <Flex>
                  <Flex flexDir="column" mr={4}>
                    <Text textTransform="uppercase" fontSize="xs">
                      Valid Thru
                    </Text>
                    <Text fontSize="lg">12/25</Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Text textTransform="uppercase" fontSize="xs">
                      CVV
                    </Text>
                    <Text fontSize="lg">***</Text>
                  </Flex>
                </Flex>
                <Icon as={FiCreditCard} />
              </Flex>
            </Flex>
          </Box>
        )}
        {value === 3 && (
          <Box
            borderRadius="25px"
            mt={4}
            w="100%"
            h="200px"
            bgGradient="linear(to-t, #a832a2, #08185E)"
          >
            <Flex
              p="1em"
              color="#fff"
              flexDir="column"
              h="100%"
              justify="space-between"
            >
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex flexDir="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold" fontSize="xl">
                    $16,532.64
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>Getter</Text>
                </Flex>
              </Flex>
              <Text mb={4}>**** **** **** 8493</Text>
              <Flex align="flex-end" justify="space-between">
                <Flex>
                  <Flex flexDir="column" mr={4}>
                    <Text textTransform="uppercase" fontSize="xs">
                      Valid Thru
                    </Text>
                    <Text fontSize="lg">11/23</Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Text textTransform="uppercase" fontSize="xs">
                      CVV
                    </Text>
                    <Text fontSize="lg">***</Text>
                  </Flex>
                </Flex>
                <Icon as={FiCreditCard} />
              </Flex>
            </Flex>
          </Box>
        )}

        <Flex justifyContent="center" mt={2}>
          <Button
            bgColor={value === 1 ? "gray.600" : "gray.400"}
            size="xs"
            mx={1}
            onClick={() => changeValue(1)}
          />
          <Button
            bgColor={value === 2 ? "gray.600" : "gray.400"}
            size="xs"
            mx={1}
            onClick={() => changeValue(2)}
          />
          <Button
            bgColor={value === 3 ? "gray.600" : "gray.400"}
            size="xs"
            mx={1}
            onClick={() => changeValue(3)}
          />
        </Flex>
        <Flex flexDir="column" my={4}>
          <Flex justify="space-between" mb={2}>
            <Text>Balance</Text>
            <Text fontWeight="bold">$56,789.87.42</Text>
          </Flex>
          <Flex justify="space-between">
            <Text>Credit Limit</Text>
            <Text fontWeight="bold">$150,000.00</Text>
          </Flex>
        </Flex>
        <Heading letterSpacing="tight" size="md" my={4}>
          Withdraw Funds
        </Heading>

        <Text color="gray" mt={10} mb={2}>
          Card number
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiCreditCard color="gray.700" />}
          />
          <Input type="number" placeholder="xxxx xxxx xxxx xxxx" />
        </InputGroup>
        <Text color="gray" mt={4} mb={2}>
          Sum
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiDollarSign color="gray.700" />}
          />
          <Input type="number" placeholder="130.00" />
        </InputGroup>
        <Button
          mt={4}
          bgColor="blackAlpha.900"
          color="#fff"
          p={7}
          borderRadius={15}
        >
          Withdraw Funds
        </Button>
      </Flex>
    </Flex>
  );
}
