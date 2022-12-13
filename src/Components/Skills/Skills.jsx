import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import Tools from './Tools'


export const Skills = () => {
  return (
    <Box id="skills">
        <Text pt={[0,0, 40,40,40, 40]} pb={[10, 20]}  textAlign="center" bgColor="black" fontWeight="700" color="gray.400" fontSize={["40","40","50","50","60"]} letterSpacing={5}>Skills</Text>
        <Frontend />
        <Backend />
        <Tools />
    </Box>

  )
}
