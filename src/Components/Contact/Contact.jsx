import { Box, Button, Flex, Image, Input, InputGroup, InputLeftElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, SimpleGrid, Stack, TagLabel, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineMobile } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub,AiOutlinePhone } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

export const Contact = () => {
  return (
    <Box bgColor="black" color="white" id="contact">
        <Text pt={[20, 40]} pb={[10, 20]}  textAlign="center" bgColor="black" fontWeight="700" color="gray.400" fontSize={["30","40","50","50","60"]} letterSpacing={5}>Contact</Text>
        <SimpleGrid columns={[1,1,1,1, 2]} >

          <Box w={["70%","60%"]} m="auto" fontSize={["18","20","20","25"]} >
            <Flex justifyContent="space-between"borderBottom="1px solid gray" >
                <Flex>
                    <AiOutlineMail />
                    <Text>Email</Text>
                </Flex>
                <Text fontSize={["15","19","21","23"]} color="teal.400">bishalsharmaece@gmail.com</Text>
              
            </Flex>

            <Flex justifyContent="space-between" borderBottom="1px solid gray">
                <Flex>
                    <AiOutlineMobile />
                    <Text>Phone</Text>
                </Flex>
                <Text color="teal.400" fontSize={["15","19","21","23"]}>+91 8617626686</Text>
              
            </Flex>
            <Flex justifyContent="space-between" borderBottom="1px solid gray">
                <Flex>
                    <AiOutlineLinkedin />
                    <Text>Linkdein</Text>
                </Flex>
                <Text color="teal.400" fontSize={["15","19","21","23"]}>bishal-sharma-0312911a3</Text>
              
            </Flex>
            <Flex justifyContent="space-between" borderBottom="1px solid gray">
                <Flex>
                    <AiFillGithub />
                    <Text>Github</Text>
                </Flex>
                <Text color="teal.400" fontSize={["15","19","21","23"]}>bishal00sharma</Text>
              
            </Flex>

          </Box>
          <Box  data-aos="fade-left" w="45%" m="auto" pt="10">
          <FormControl>
          <Stack direction="column" spacing='24px'>

          <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<BsPerson color='gray.300' />}
                />
                <Input type='tel' placeholder='Name' />
            </InputGroup>

          
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<MdOutlineEmail color='gray.300' />}
                />
                <Input type='tel' placeholder="Email" />
            </InputGroup>

            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<AiOutlinePhone color='gray.300' />}
                />
                <Input type='tel' placeholder='Phone number' />
            </InputGroup>

          <Input type='text' placeholder='Message' />
             <NumberInput max={10} min={1}>
             <NumberInputField placeholder='Rate my Portfolio in 10' />
             <NumberInputStepper>
              <NumberIncrementStepper />
             <NumberDecrementStepper />
             </NumberInputStepper>
            </NumberInput>
            <Box textAlign="center" p="5" >
                 <Button m="auto" colorScheme='teal'>Send</Button>
            </Box>
           </Stack>
           </FormControl>

          </Box>
        </SimpleGrid>
    </Box>
  )
}
