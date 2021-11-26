import { Flex } from "@chakra-ui/react";
import Sidebar from "./sidebar/Sidebar";
import Reports from "./Reports/Reports";

export default function SupplierPage() {
  return (
    <Flex mt="2.5vh" px={30} w="100%">
      <Sidebar />
      <Reports />
    </Flex>
  );
}
