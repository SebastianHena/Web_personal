import reflex as rx
import reflex_web.styles.styles as styles
from reflex_web.styles.colors import color_text
from reflex_web.components.title import title


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
            name="Sebastian Henao",
            src = "imagen2.ico",
            size="xl",
        ),
       
       rx.vstack(
           title(
              "Sebastian Henao",
           ),
           rx.text(
               "@SebasDev",
               margin_top = "0px !important"
               
           ),
            align_items="start",
            color = color_text.TEXT_PRIMARY.value,
       ),

       padding = styles.Size.SMALL.value,
     
        ),
        

        rx.heading(
            """Bienvenido a mi Mundo Digital""",
            style=styles.title_style
                
        ),

        rx.text("""¡Hola, soy Sebastian Henao, un apasionado desarrollador con un enfoque especializado en Python!
                Este rincón virtual es mi espacio para compartir mi viaje de aprendizaje y exploración en el vasto universo de la programación.""",
                color =color_text.TEXT_SECUNDARY.value,
                padding = styles.Size.SMALL.value,), 
                
        
        rx.heading(
            "Sobre Mí:",
            size="md",
            style=styles.title_style
         
        ),
        rx.text("""Soy un eterno aprendiz, siempre hambriento de conocimiento y desafiando los límites de lo posible con Python. 
                 Mi misión es convertirme en uno de los mejores desarrolladores, y cada línea de código es un paso hacia ese objetivo.""",
                 color =color_text.TEXT_SECUNDARY.value,
                 padding = styles.Size.SMALL.value,),
                  

        align_items="start"
        
    )

