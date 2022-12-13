import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';

const Bottom = () => {
  return (
    <Flex fontSize={["11","15","17","19"]} bgColor="gray" justifyContent="space-evenly" color="white" p={["1","3","5"]}>
        <Box>Made with ❤️ by Bishal Sharma</Box>
        <Box>Copyright © 2022</Box>  
        <Flex fontSize={["18","20","22","25"]}>
            <Box><BsGithub /></Box>
            <Box ml="5"><GrLinkedin /></Box>
        </Flex>

    </Flex>
  )
}
export default Bottom ;