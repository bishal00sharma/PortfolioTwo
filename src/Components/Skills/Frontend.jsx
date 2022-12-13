import { Box, Heading, Image, SimpleGrid, Text, Tooltip } from '@chakra-ui/react'
import React from 'react';
import styles from "./Frontend.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Frontend = () => {

  useEffect(()=>{
    AOS.init( ({ duration : 2000}))
  }, [])

  return (
    <Box bgColor="black">
    <Box>
      <Text fontFamily="cursive" color="teal.100" className={styles.frontend} textAlign="center">Frontend</Text>
    <Box>
       <SimpleGrid columns={[2, 3, 4 , 5]} spacing={[2 , 5]} spacingY={[10, 20]} className={styles.mainGrid}>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(245, 157, 39, 0.8) 0px 30px 60px -12px inset, rgba(255, 148, 112,1) 0px 18px 36px -18px inset" > <Image height="100%" src="html.png" /> <Text color="white" textAlign="center">HTML5</Text> </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(82, 78, 183) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="css.png" />  <Text color="white" textAlign="center">CSS3</Text>  </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(232, 210, 95, 0.8) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="javascript.png" />  <Text color="white" textAlign="center">JavaScript</Text> </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(46, 152, 197, 0.8) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="react.png" /> <Text color="white" textAlign="center">React JS</Text>  </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(84, 130, 36, 0.8) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="Chakra.jpg" />  <Text color="white" textAlign="center">Chakra UI</Text> </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(255, 255, 255, 255)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="nextjs.png" /> <Text color="white" textAlign="center">Next JS</Text>  </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(147, 102, 234, 0.8)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="redux-original.svg" />  <Text color="white" textAlign="center">Redux</Text>  </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgb(135, 206, 235)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="typescript.png" />  <Text color="white" textAlign="center">TypeScript</Text>  </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(255, 255, 255, 255)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="reactrouter.png" /> <Text color="white" textAlign="center">React Router</Text>  </Box>
        </SimpleGrid>
    </Box>

    
    </Box>
    </Box>
  )
}
export default Frontend;