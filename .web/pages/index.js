/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar, Box, Button, Center, Heading, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
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
  <VStack alignItems={`start`}>
  <HStack sx={{"padding": "0.5em"}}>
  <Avatar name={`Sebastian Henao`} size={`xl`} src={`imagen2.ico`}/>
  <VStack alignItems={`start`} sx={{"color": "#ffffff"}}>
  <Heading size={`lg`} sx={{"width": "100%", "fontFamily": "Inconsolata", "color": "#ffffff", "padding": "0.5em"}}>
  {`Sebastian Henao`}
</Heading>
  <Text sx={{"marginTop": "0px !important"}}>
  {`@SebasDev`}
</Text>
</VStack>
</HStack>
  <Heading sx={{"width": "100%", "fontFamily": "Inconsolata", "paddingTop": "1em", "padding": "0.5em", "color": "#ffffff"}}>
  {`Bienvenido a mi Mundo Digital`}
</Heading>
  <Text sx={{"color": "#D6D6D6", "padding": "0.5em"}}>
  {`¡Hola, soy Sebastian Henao, un apasionado desarrollador con un enfoque especializado en Python!
                Este rincón virtual es mi espacio para compartir mi viaje de aprendizaje y exploración en el vasto universo de la programación.`}
</Text>
  <Heading size={`md`} sx={{"width": "100%", "fontFamily": "Inconsolata", "paddingTop": "1em", "padding": "0.5em", "color": "#ffffff"}}>
  {`Sobre Mí:`}
</Heading>
  <Text sx={{"color": "#D6D6D6", "padding": "0.5em"}}>
  {`Soy un eterno aprendiz, siempre hambriento de conocimiento y desafiando los límites de lo posible con Python. 
                 Mi misión es convertirme en uno de los mejores desarrolladores, y cada línea de código es un paso hacia ese objetivo.`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "fontFamily": "Inconsolata", "color": "#ffffff", "padding": "0.5em"}}>
  {`Personal`}
</Heading>
  <Link as={NextLink} href={`/about`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#ffffff", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3498db"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/project.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontFamily": "Inconsolata", "fontSize": "1em", "color": "#ffffff"}}>
  {`Proyectos`}
</Text>
  <Text sx={{"fontFamily": "Abel", "fontSize": "0.8em", "color": "#D6D6D6"}}>
  {`Puedes ir a mis proyectos personales`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/SebastianHena`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#ffffff", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3498db"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/github.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontFamily": "Inconsolata", "fontSize": "1em", "color": "#ffffff"}}>
  {`GitHub`}
</Text>
  <Text sx={{"fontFamily": "Abel", "fontSize": "0.8em", "color": "#D6D6D6"}}>
  {`Sigueme`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "fontFamily": "Inconsolata", "color": "#ffffff", "padding": "0.5em"}}>
  {`¡Redes sociales y más!`}
</Heading>
  <Link as={NextLink} href={`https://web.facebook.com/juansebastian1013`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#ffffff", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3498db"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/facebook.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontFamily": "Inconsolata", "fontSize": "1em", "color": "#ffffff"}}>
  {`Facebook`}
</Text>
  <Text sx={{"fontFamily": "Abel", "fontSize": "0.8em", "color": "#D6D6D6"}}>
  {`Sigueme`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/sebastianhenao_12/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#ffffff", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3498db"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/instagram.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontFamily": "Inconsolata", "fontSize": "1em", "color": "#ffffff"}}>
  {`Instagram`}
</Text>
  <Text sx={{"fontFamily": "Abel", "fontSize": "0.8em", "color": "#D6D6D6"}}>
  {`Sigueme`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://profile.magneto365.com/profile/resume`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#ffffff", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3498db"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/M.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontFamily": "Inconsolata", "fontSize": "1em", "color": "#ffffff"}}>
  {`Magneto`}
</Text>
  <Text sx={{"fontFamily": "Abel", "fontSize": "0.8em", "color": "#D6D6D6"}}>
  {`Perfil de Magneto`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`www.linkedin.com/in/sebastián-henao-vanegas-09885a24b`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#ffffff", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3498db"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/linkedin.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontFamily": "Inconsolata", "fontSize": "1em", "color": "#ffffff"}}>
  {`Linkedin`}
</Text>
  <Text sx={{"fontFamily": "Abel", "fontSize": "0.8em", "color": "#D6D6D6"}}>
  {`Perfil de Linkedin`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "fontFamily": "Inconsolata", "color": "#ffffff", "padding": "0.5em"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`mailto:sebastianhenaovanegas2@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#ffffff", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#3498db"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/mail.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontFamily": "Inconsolata", "fontSize": "1em", "color": "#ffffff"}}>
  {`Email`}
</Text>
  <Text sx={{"fontFamily": "Abel", "fontSize": "0.8em", "color": "#D6D6D6"}}>
  {`sebastianhenaovanegas2@gmail.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack>
  <ChakraImage src={`/logo.png`} sx={{"width": "5em", "height": "auto", "borderRadius": "0.8em", "marginTop": "0.8em", "marginBottom": "0.8em"}}/>
  <Text sx={{"color": "#D6D6D6"}}>
  {`SebasDev | 2024`}
</Text>
</VStack>
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
