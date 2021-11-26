import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
} from "@chakra-ui/react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/input";
import { FiSearch } from "react-icons/fi";
import Sidebar from "../sidebar/Sidebar";

export default function CustomerTable() {
  return (
    <Flex p={30} w="100%">
      <Sidebar />

      <Flex flexDir="column" w="100%">
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
          <Input type="text" placeholder="Search Customers" border="10px" />
        </InputGroup>
        <Table
          variant="simple"
          h="80%"
          w="80%"
          ml={10}
          border="1px transparent #Ee8a2e"
          borderRadius="15px"
        >
          <TableCaption color="#444444">Customer Database</TableCaption>
          <Thead>
            <Tr>
              <Th>Customer Name</Th>
              <Th>Email</Th>
              <Th color="#e5e5e5">Number</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>John Doe</Td>
              <Td>john.doe@gmail.com</Td>
              <Td color="#e5e5e5">0467-989-654</Td>
            </Tr>
            <Tr>
              <Td>Harry Longfellow</Td>
              <Td>hazza98@yahoo.com</Td>
              <Td color="#e5e5e5">0456-234-123</Td>
            </Tr>
            <Tr>
              <Td>Jeff Punching</Td>
              <Td>Punchman78@gmail.com</Td>
              <Td color="#e5e5e5">0567-932-023</Td>
            </Tr>
            <Tr>
              <Td>Tyler Matthews</Td>
              <Td>TM98@gmail.com</Td>
              <Td color="#e5e5e5">0567-632-023</Td>
            </Tr>
            <Tr>
              <Td>Will Mayler</Td>
              <Td>willIAM@gmail.com</Td>
              <Td color="#e5e5e5">0789-435-234</Td>
            </Tr>
            <Tr>
              <Td>Adam Finch</Td>
              <Td>Afinch@yahoo.com</Td>
              <Td color="#e5e5e5">0673-345-234</Td>
            </Tr>
            <Tr>
              <Td>Kyle Kuzma</Td>
              <Td>Kkuzma8@gmail.com</Td>
              <Td color="#e5e5e5">0782-243-234</Td>
            </Tr>
            <Tr>
              <Td>Matt Habish</Td>
              <Td>habishmatt@gmail.com</Td>
              <Td color="#e5e5e5">0934-234-543</Td>
            </Tr>
            <Tr>
              <Td>Harry Hazmat</Td>
              <Td>doublehazz@gmail.com</Td>
              <Td color="#e5e5e5">0423-432-523</Td>
            </Tr>
            <Tr>
              <Td>Patrick Peters</Td>
              <Td>peters.patrick@hotmail.com</Td>
              <Td color="#e5e5e5">0860-234-234</Td>
            </Tr>
            <Tr>
              <Td>Kyle Dunstan</Td>
              <Td>Kyledunstan@gmail.com</Td>
              <Td color="#e5e5e5">0593-432-523</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Jessica Tradie</Th>
              <Th>thebestjess@yahoo.com</Th>
              <Th color="#e5e5e5">0564-789-123</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Flex>
    </Flex>
  );
}
