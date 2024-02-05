import reflex as rx
from reflex_web.components.link_button import link_button
from reflex_web.components.title import title
import reflex_web.styles.styles as styles
import reflex_web.constanst_links as const


def links() -> rx.Component:
    return rx.vstack(
        title("Personal"), 
            link_button("Proyectos",
                     "Puedes ir a mis proyectos personales",  
                     const.PROYECTS_LINK),

            link_button("GitHub", 
                     "Sigueme", 
                     const.GITHUB_LINK),

        title("¡Redes sociales y más!"), 
            link_button("Facebook", 
                     "Sigueme", 
                     const.FACEBOOK_LINK), 

            link_button("Instagram", 
                     "Sigueme", 
                     const.INSTAGRAM_LINK),


            link_button("Magneto", 
                     "Perfil de Magneto", 
                     const.MAGNETO_LINK),

            link_button("Linkedin", 
                     "Perfil de Linkedin", 
                     const.LINKEDIN_LINK), 

        title("Contacto"),
        link_button("Email", 
                     const.GMAIL_LINK,
                     f"mailto:{const.GMAIL_LINK}"),        

         width="100%"
         
    )