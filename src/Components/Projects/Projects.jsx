import { Box, Button, color, Flex, Image, Kbd, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(()=>{
    AOS.init( ({ duration : 2000}))
  }, [])

  return (
    <Box  bgColor="black" id="projects">
       <Text fontWeight="700" pt={[20, 40]} pb={[10, 20]}  textAlign="center" bgColor="black" fontSize={["30","40","50","50","60"]} color="gray.400" letterSpacing={5}>Projects</Text>
    <Box width="85%" m="auto"  border="1px solid gray" >
        {/* <SimpleGrid columns={[2, 3, 4 , 5]} spacing={[2 , 5]} spacingY={[10, 20]} className={styles.mainGrid}> */}

        <SimpleGrid columns={[1, 1, 2]}>
         <Box     p={["2","4","6","8","10"]} border="1px solid gray" m="3" boxShadow= "rgba(211, 211, 211, 0.5) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px">
            <Box>
                <Image h="60%" w="95%" outline=" 4px ridge gray;border-radius: 2rem" src="timecamp.png" /> 
            </Box>
            <Box textAlign="center">
                <Text color="teal.100" fontSize={["18", "22", "25", "30"]} fontWeight={["500", "600"]}>
                      TimeCamp Clone
                </Text>
                <Text pb={["5","10"]} color="whiteAlpha.700" fontSize={["11", "15", "17", "18"]}>
                Timecamp.com is a tool for time tracking your current or upcoming projects/tasks.
                </Text>
                <Flex m="auto" width={["100%","90%","80%"]} wrap="wrap" justifyContent="space-evenly">
                <span><Kbd fontSize={["10", "13", "14", "16"]}>HTML</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>CSS</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>JavaScript</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>React JS</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>MongoDb</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>Express JS</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>Node JS</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>Mongoose</Kbd></span>
              </Flex>
            </Box>
            <Flex pt="10" justifyContent="space-evenly">
              <Button colorScheme='teal' leftIcon={<BsGithub />}><a target="blank" href="https://github.com/bishal00sharma/TimeCampClone"> Source</a></Button>
              <Button colorScheme='teal' leftIcon={<FiExternalLink color="white" />}><a target="wikiWindow"  href="https://roaring-travesseiro-7b0d65.netlify.app/"> Live</a></Button>
            </Flex>
         </Box>
         {/* Box ends here */}
         <Box    p={["2","4","6","8","10"]} border="1px solid gray" m="3" boxShadow= "rgba(211, 211, 211, 0.5) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px">
            <Box>
                <Image outline=" 8px ridge gray;border-radius: 1rem"  src="tripoto.png" /> 
            </Box>
            <Box textAlign="center">
                <Text color="teal.100" fontSize={["18", "22", "25", "30"]} fontWeight={["500", "600"]}>
                      Tripoto Clone
                </Text>
                <Text pb={["5","10"]} color="whiteAlpha.700" fontSize={["11", "15", "17", "18"]}>
                This is a clone of a hotel and tour package booking website tripoto.com. You will be able to signin using reqres api authentication. User can Book any hotel.                </Text>
                <Flex m="auto" width={["100%","90%","80%"]} wrap="wrap" justifyContent="space-evenly">
                <span><Kbd fontSize={["10", "13", "14", "16"]}>HTML</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>CSS</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>JavaScript</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>React JS</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>Chakra UI</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>JSON server</Kbd></span>
              </Flex>
            </Box>
            <Flex pt="10" justifyContent="space-evenly">
              <Button colorScheme='teal' leftIcon={<BsGithub />}><a target="blankk"  href="https://github.com/bishal00sharma/tripotoClone/tree/main/project"> Source </a></Button>
              <Button colorScheme='teal' leftIcon={<FiExternalLink color="white" />}><a target="yahooWindow"  href="https://grand-rolypoly-4c97a0.netlify.app/"> Live</a></Button>
            </Flex>
         </Box>


         <Box  data-aos="fade-right" p={["2","4","6","8","10"]} border="1px solid gray" m="3" boxShadow= "rgba(211, 211, 211, 0.5) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px">
            <Box>
                <Image outline=" 8px ridge gray;border-radius: 1rem" src="geekbuying.png" /> 
            </Box>
            <Box textAlign="center">
                <Text color="teal.100" fontSize={["18", "22", "25", "30"]} fontWeight={["500", "600"]}>
                      GeekBuying Clone
                </Text>
                <Text  pb={["5","10"]} color="whiteAlpha.700" fontSize={["11", "15", "17", "18"]}>
                This is a clone of an ecommerce website geekbuying.com. it has features like sorting products by price, filtering, adding to cart, and searching.                </Text>
                <Flex m="auto" width={["100%","90%","80%"]} wrap="wrap" justifyContent="space-evenly">
                <span><Kbd fontSize={["10", "13", "14", "16"]}>HTML</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>CSS</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>JavaScript</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>JSON server</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>Bootstrap</Kbd></span>
            </Flex>
            </Box>
            <Flex pt="10" justifyContent="space-evenly">
              <Button colorScheme='teal' leftIcon={<BsGithub />}> <a target="blannk" href="https://github.com/vaishali31verma/geekbuyingsproject"> Source</a></Button>
              <Button colorScheme='teal' leftIcon={<FiExternalLink color="white" />}> <a target="bingWindow" href="https://nimble-melba-09757f.netlify.app/"> Live</a> </Button>
            </Flex>
         </Box>


         <Box  data-aos="fade-left" p={["2","4","6","8","10"]} border="1px solid gray" m="3" boxShadow= "rgba(211, 211, 211, 0.5) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px">
            <Box>
                <Image outline=" 8px ridge gray;border-radius: 1rem" src="boat.png" /> 
            </Box>
            <Box textAlign="center">
                <Text color="teal.100" fontSize={["18", "22", "25", "30"]} fontWeight={["500", "600"]}>
                      Boat Clone
                </Text>
                <Text  pb={["5","10"]} color="whiteAlpha.700" fontSize={["11", "15", "17", "18"]}>
                BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables                </Text>
                <Flex m="auto" width={["100%","90%","80%"]} wrap="wrap" justifyContent="space-evenly">
                <span><Kbd fontSize={["10", "13", "14", "16"]}>HTML</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>CSS</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>JavaScript</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>React JS</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>MongoDb</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>Express JS</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>Node JS</Kbd></span>
                <span><Kbd fontSize={["10", "13", "14", "16"]}>Mongoose</Kbd></span>
              </Flex>
            </Box>
            <Flex pt="10" justifyContent="space-evenly">
              <Button colorScheme='teal' leftIcon={<BsGithub />}><a target="blannkk" href="https://roaring-travesseiro-7b0d65.netlify.app/"> Source </a></Button>
              <Button colorScheme='teal' leftIcon={<FiExternalLink color="white" />}><a target="googleWindow" href="https://roaring-travesseiro-7b0d65.netlify.app/"> Live</a></Button>
            </Flex>
         </Box>
         
        </SimpleGrid>
    </Box>
    </Box>
  )
}
export default Projects ;