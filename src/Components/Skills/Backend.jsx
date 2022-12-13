import { Box, Heading, Image, SimpleGrid, Text, Tooltip } from '@chakra-ui/react'
import React from 'react';
import styles from "./Backend.module.css"



const Backend = () => {
  return (
    <Box bgColor="black">
    <Box>
      <Text fontFamily="cursive" color="teal.100" className={styles.backend} textAlign="center">Backend</Text>
    <Box>
       <SimpleGrid columns={[2, 3, 4 ,5]} className={styles.mainGrid} spacing={[2 , 5]} spacingY={[10, 20]}>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(58, 213, 101, 0.8)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="nodejs-original.svg" />  <Text className={styles.text} color="white" textAlign="center">Node JS</Text> </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow="  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="express.png" /> <Text color="white" className={styles.text} textAlign="center">Express</Text>  </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(58, 213, 101, 0.8)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="mongodb.png" />  <Text color="white" textAlign="center" className={styles.text}>MongoDb</Text> </Box>
       <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(205, 155, 81, 0.8)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="mongoose.png" />  <Text color="white" textAlign="center" className={styles.text}>Mongoose</Text>  </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(205, 155, 81, 0.8)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="firebase.png" />  <Text color="white" textAlign="center" className={styles.text}>Mongoose</Text>  </Box>

        </SimpleGrid>
    </Box>

    
    </Box>
    </Box>
  )
}
export default Backend;