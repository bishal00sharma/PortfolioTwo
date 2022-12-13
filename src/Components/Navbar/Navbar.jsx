import { Box, Button, Flex, Heading, Image, Link, Tab, TabList, Tabs, Text, Tooltip, VStack } from '@chakra-ui/react';
import React from 'react'
import "./Navbar.css"
import ScrollToTop from "react-scroll-up";
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineHome,AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiGhost } from 'react-icons/bi';
import { RiContactsLine} from 'react-icons/ri';
import {IoIosStats} from 'react-icons/io';
import {BsLinkedin,BsFillFileEarmarkTextFill} from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';  


const Navbar = () => {

  useEffect(()=>{
    AOS.init( ({ duration : 2000}))
  }, [])


  return (
    <Box>
    <Flex className='mainBox' id="home">
        <Box className='mainBoxFirst'>
          <Text>BS</Text>
        </Box>
        <Flex className='mainBoxSecond'> 
            <a className='aZInex' href="#home">home()</a>
            <a className='aZInex' href="#skills">skills()</a>
            <a className='aZInex' href="#projects">projects()</a>
            <a className='aZInex' href="#stats">stats()</a>
            <a className='aZInex' href="#contact">contact()</a>
            <a target="blank" className='aZInex' id="aResume" href="https://drive.google.com/file/d/1VSyZnguwd8wYtMYDb2KhXJ2caNQVpXj7/view?usp=share_link">Resume</a>
       </Flex>
       
    </Flex>
    <ScrollToTop style={{fontSize:"30px",color:"white", backgroundColor:"teal", padding:"10px", borderRadius:"40%"}} showUnder={160}>
  <span>
  <BiGhost/>
  </span>
</ScrollToTop>
    <Box className='mainAbout'>
        <Box className='mainAboutFirst'>
            <Text className='heyThere'>Hey there!, I'm</Text>
            <Text className='bishal' color="red">
            <FloatingLettersTextBuilder
                floatingSpeed={10}
                lettersAppearanceDelay={250}
                animationMaxMargin={"200px"}
                animationMinMargin={"0px"}
              > Bishal     Sharma </FloatingLettersTextBuilder></Text>

        <TypeAnimation 
       sequence={[
        'I am Full Stack Dev', // Types 'One'
        2000, // Waits 1s
        'I love coding', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'I love Reading Books', // Types 'Three' without deleting 'Two',
        1000
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em',color:"orange" }}
      
    />
            <Text  className='bishalAbout'>
            Passionate Full-Stack developer with hands-on experience of more than 1200 hours of coding in MERN Stack & soft-ckils, with development of uarious prajects using wide range of front-end & backend skills.            </Text>
            <Flex m="auto" w={["70%","70%","50%"]} mt="20">
          {/* <Button mr="5" onClick={()=>window.open("https://drive.google.com/file/d/1VSyZnguwd8wYtMYDb2KhXJ2caNQVpXj7/view?usp=share_link")} color="white" bgColor="teal.400">  <a download="Bishal-Sharma-Resume" target="blank" zIndex="999" href="Bishal-Sharma-Resume.pdf">Resume</a></Button>
          <a target="blankkkk" className='aZInex mainButton' href="https://drive.google.com/file/d/1VSyZnguwd8wYtMYDb2KhXJ2caNQVpXj7/view?usp=share_link"> LinkdeIn</a> */}
            <Tabs zIndex="9999"
             colorScheme='orange'
            border="1px solid black"
             defaultIndex={0}
             isLazy
             overflow='hidden'
               className='ResumeLinkdein'
          >
             <TabList
                flexDir="column"
              
                pb={5}
                pl={1}
                pt='8'
                justifyContent="space-between"
                borderTopRightRadius={"xl"}
             >
                
                <Tooltip placement='left-start'  hasArrow arrowSize={15}  label='Resume' fontSize='md' color="red" bg="white">


                   <Tab  onClick={()=>window.open("https://drive.google.com/file/d/1VSyZnguwd8wYtMYDb2KhXJ2caNQVpXj7/view?usp=share_link")}
                      fontSize={"lg"}
                      h="70px"
                      bg="transparent"
                      transition="0.2s ease-out"
                      color='black'
                      _hover={{
                          background:  "orange",
                          opacity: "0.9",
                          transition: "0.2s ease-out",
                          color:'white'
                      }}
                      _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                      className="tab"
                      borderRadius='12px'
                      justifyContent="center"
                   >
                      <BsFillFileEarmarkTextFill fontSize="30px"  />
                   </Tab>
                   </Tooltip>
                   </TabList></Tabs>
            <Tabs  zIndex="9999"
             colorScheme='orange'
             border="1px solid black"
             isLazy
             overflow='hidden'
              className='ResumeLinkdein'
          >
             <TabList
                flexDir="column"
      
                pb={5}
                pl={1}
                pt='8'
                justifyContent="space-between"
                borderTopRightRadius={"xl"}
             >
              
                <Tooltip  hasArrow arrowSize={15}  placement='right-start' label='LinkdeIn' fontSize='md' color="red" bg="white">
                   <Tab  onClick={()=>window.open("https://www.linkedin.com/in/bishal-sharma-0312911a3/")}
                      fontSize={"lg"}
                      h="70px"
                      bg="transparent"
                      transition="0.2s ease-out"
                      color='black'
                      _hover={{
                          background:  "orange",
                          opacity: "0.9",
                          transition: "0.2s ease-out",
                          color:'white'
                      }}
                      _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                      className="tab"
                      borderRadius='12px'
                      justifyContent="center"
                   >
                      <BsLinkedin fontSize="30px" />
                   </Tab>
                   </Tooltip>
                   </TabList></Tabs>
       
       </Flex> 
        </Box>
        
        <Box className='mainAboutSecond'>
            <Image pt="10" className='mainAboutImage' src="Bishal_profile_pic.jpg" />
        </Box>
       </Box>
       <Box pt={["20","0"]}  className='sideBox' w={["20%","20%"]}>
        <a smooth duration={500} href="#home"> <Text className='sideBoxText' color="teal"><AiOutlineHome className='icons' /></Text> <Text  color="gray">Home</Text> </a>
        <a smooth duration={500} href="#skills"> <Text className='sideBoxText' color="teal"> <HiOutlineLightBulb className='icons' /></Text> <Text  color="gray">Skills</Text>  </a>
        <a smooth duration={500} href="#projects"> <Text className='sideBoxText' color="teal">  <AiOutlineFundProjectionScreen className='icons' /> </Text> <Text  color="gray">Projects</Text>  </a>
        <a smooth duration={500} href="#stats"> <Text className='sideBoxText' color="teal"> <IoIosStats className='icons' /></Text> <Text  color="gray">Stats</Text>  </a>
        <a smooth duration={500} href="#contact"> <Text className='sideBoxText' color="teal"> <RiContactsLine className='icons' /></Text>  <Text  color="gray">Contact</Text>  </a>
      </Box>
    </Box>
  )
}
export default Navbar ;