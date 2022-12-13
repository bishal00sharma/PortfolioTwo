import { Box, Flex, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';






const Github = () => {

  useEffect(()=>{
    AOS.init( ({ duration : 2000}))
  }, [])

  return (
   
    <Box bgColor="black" id="stats">
    <Text pt={[20, 40]} pb={[10, 20]}  textAlign="center" bgColor="black" fontWeight="700" color="gray.400" fontSize={["30","40","50","50","60"]} letterSpacing={5}>Github Statistics</Text>
    <Box m="auto">
      <Box data-aos="zoom-out-down" border="1px solid gray" p={["1","2","3","5","8",""]} w={["90%","90%","80%","70%"]} pl={["15","27","31","49","59","89"]} m="auto" textAlign="center">
            <GitHubCalendar color="teal" textAlign="center" style={ {color : "white"} } username="bishal00sharma" />
      </Box>
    </Box>

    <Box bgColor="black" pt="10">
      <Image w={["40%","30%","25%","25%"]} m="auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=bishal00sharma&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=true&layout=compact" /> 
    </Box>

    <Flex pt="10"  w={["70%","70%"]} m="auto" justifyContent="space-evenly"> 
    <Image w={["50%","50%","50%","40%"]} m="auto" src="https://github-readme-stats.vercel.app/api?username=bishal00sharma&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=true" />
   <Image w={["50%","50%","50%","40%"]} m="auto" src="https://github-readme-streak-stats.herokuapp.com/?user=bishal00sharma&theme=tokyonight&hide_border=false" />
   </Flex>

    </Box>
  )
}
export default Github ;
