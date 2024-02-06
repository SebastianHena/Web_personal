import reflex as rx
#Importarmos componentes
from reflex_web.components.navbar import navbar 
from reflex_web.components.footer import footer
from reflex_web.components.alert import alert
#Importamos Vistas
from reflex_web.views.links.links import links
from reflex_web.views.header.header import header
#Importamos estilos
from reflex_web.styles.styles import Size as Size
import reflex_web.styles.styles as styles



#class State(rx.State):
    #pass


def index() -> rx.component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack( 
             header(),
            links(),
            max_width=styles.MAX_WIDTH,
            width="100%",
            margin_y=Size.DEFAULT.value,
            )
        ),
        footer()
    )


def about():
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                alert(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.DEFAULT.value,
            )

        )
    )


app = rx.App(
    style=styles.BASE_STYLE
)
app.add_page(
    index,
    route="/",
    title="SebasDev | Web personal",
    description="¡Bienvenidos a mi Web!",
    image="code-solid.svg"
    )
app.add_page(
    about,
    route="/about",
    title="SebasDev | Web personal",
    description="¡Bienvenidos a mi Web!",
    image="code-solid.svg"
    )
