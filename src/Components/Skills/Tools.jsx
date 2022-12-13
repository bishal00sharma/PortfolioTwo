import { Box, Heading, Image, SimpleGrid, Text, Tooltip } from '@chakra-ui/react'
import React from 'react';
import styles from "./Tools.module.css"

const Tools = () => {
  return (
    <Box bgColor="black">
    <Box>
      <Text  fontFamily="cursive" color="teal.100" className={styles.backend} textAlign="center">Tools</Text>
    <Box>
       <SimpleGrid columns={[2, 3, 4 ,5]} className={styles.mainGrid} spacing={[2 , 5]} spacingY={[10, 20]}>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(205, 155, 81, 0.8)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="git.svg" />  <Text className={styles.text} color="white" textAlign="center">Git</Text> </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow="  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="github.png" /> <Text color="white" className={styles.text} textAlign="center">GitHub</Text>  </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(255, 99, 71, 0.5)   0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="npm.png" />  <Text color="white" textAlign="center" className={styles.text}>npm</Text> </Box>
       <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(205, 155, 81, 0.8)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="postman.png" />  <Text color="white" textAlign="center" className={styles.text}>Postman</Text>  </Box>
       <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgba(147, 102, 234, 0.8)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="heroku.svg" />  <Text color="white" textAlign="center" className={styles.text}>Heroku</Text>  </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgb(135, 206, 235)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="netlify.png" />  <Text color="white" textAlign="center" className={styles.text}>Netlify</Text>  </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgb(135, 206, 235)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="vercel.png" />  <Text color="white" textAlign="center" className={styles.text}>Vercel</Text>  </Box>
        <Box height={[100, 110, 120]} m="auto" p="2" boxShadow=" rgb(135, 206, 235)  0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"> <Image height="100%" src="vscode.png" />  <Text color="white" textAlign="center" className={styles.text}>VS code</Text>  </Box>
      </SimpleGrid>
    </Box>

    
    </Box>
    </Box>

  )
}
export default Tools ;