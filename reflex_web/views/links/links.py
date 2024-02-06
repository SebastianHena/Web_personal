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
                     "icons/project.svg",  
                     const.PROYECTS_LINK),

            link_button("GitHub", 
                     "Sigueme",
                     "icons/github.svg", 
                     const.GITHUB_LINK),

        title("¡Redes sociales y más!"), 
            link_button("Facebook", 
                     "Sigueme",
                     "icons/facebook.svg", 
                     const.FACEBOOK_LINK), 

            link_button("Instagram", 
                     "Sigueme",
                     "icons/instagram.svg", 
                     const.INSTAGRAM_LINK),


            link_button("Magneto", 
                     "Perfil de Magneto",
                     "icons/M.svg", 
                     const.MAGNETO_LINK),

            link_button("Linkedin", 
                     "Perfil de Linkedin",
                     "icons/linkedin.svg", 
                     const.LINKEDIN_LINK), 

        title("Contacto"),
        link_button("Email", 
                     const.GMAIL_LINK,
                     "icons/mail.svg",
                     f"mailto:{const.GMAIL_LINK}"),        

         width="100%"
         
    )