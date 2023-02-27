import { Heading, Box, Text} from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box textAlign={{base:"left", md:"left", lg:"center"}} 
     pl="15px"
     bg='#6B46C1' 
     pt="100px" 
     pb='250px' 
     color='white'>
     <Heading> Simple pricing for your business </Heading>
     <Text pt='3'> Plans that are carefully crafted to suit your business. </Text>
    </Box>)
}
