import { Flex, Heading, Text, Divider } from "@chakra-ui/layout";
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/table";
import { useState } from "react";
import { IconButton } from "@chakra-ui/button";
import {
  FiChevronsDown,
  FiChevronsUp,
  FiCalendar,
  FiSearch,
} from "react-icons/fi";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/input";
import Sidebar from "../sidebar/Sidebar";

export default function SalesPage() {
  const [display, changeDisplay] = useState("hide");

  return (
    <Flex p={30} w="100%">
      <Sidebar />

      <Flex flexDir="column" px={30} w="100%">
        <InputGroup
          bgColor="#fff"
          mb={4}
          border="none"
          borderColor="#fff"
          borderRadius="10px"
          ml={10}
          w="80%"
        >
          <InputLeftElement pointerEvents="none" children={<FiSearch />} />
          <Input type="text" placeholder="Search Transactions" border="10px" />
        </InputGroup>
        <Flex
          w="100%"
          p="3%"
          flexDir="column"
          overflow="auto"
          minHeight="100vh"
        >
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
                  <Tr color="#e5e5e5">
                    <Th color="gray">Name of Customer</Th>
                    <Th>Category</Th>
                    <Th isNumeric>Delivery Fee</Th>
                    <Th color="#e5e5e5" isNumeric>
                      Purchase Amount
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td size="sm" letterSpacing="tight">
                      John Doe
                    </Td>

                    <Td>Paint Supplies</Td>
                    <Td isNumeric>$56.23</Td>
                    <Td color="#e5e5e5" isNumeric>
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
                    <Td color="#e5e5e5" isNumeric>
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
                    <Td color="#e5e5e5" isNumeric>
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
                    <Td color="#e5e5e5" isNumeric>
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
                    <Td color="#e5e5e5" isNumeric>
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
                    <Td color="#e5e5e5" isNumeric>
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
                    <Td color="#e5e5e5" isNumeric>
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
                        <Td color="#e5e5e5" isNumeric>
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
                        <Td color="#e5e5e5" isNumeric>
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
                        <Td color="#e5e5e5" isNumeric>
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
                        <Td color="#e5e5e5" isNumeric>
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
                        <Td color="#e5e5e5" isNumeric>
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
                icon={
                  display === "show" ? <FiChevronsUp /> : <FiChevronsDown />
                }
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
      </Flex>
    </Flex>
  );
}
