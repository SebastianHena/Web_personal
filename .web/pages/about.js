/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Alert, AlertIcon, AlertTitle, Box, Center, HStack, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "top": "0", "zIndex": "999"}}>
  <Box sx={{"fontFamily": "Dosis", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#22618C"}}>
  {`Sebas`}
</Text>
  <Text as={`span`} sx={{"color": "#3498db"}}>
  {`Dev`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginY": "1em"}}>
  <Alert status={`info`} sx={{"width": "100%", "borderRadius": "5px"}}>
  <AlertIcon/>
  <AlertTitle>
  {`¡No te preocupes, estamos desarrollando!😁`}
</AlertTitle>
</Alert>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`SebasDev | Web personal`}
</title>
  <meta content={`¡Bienvenidos a mi Web!`} name={`description`}/>
  <meta content={`code-solid.svg`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
