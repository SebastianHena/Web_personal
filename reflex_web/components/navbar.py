import reflex as rx
import reflex_web.styles.styles as styles
from reflex_web.styles.colors import Color as Color


def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.span("Sebas", color = Color.TERCEARY.value),
            rx.span("Dev", color = Color.SECUNDARY.value),
            style=styles.navbar_title_style
        ),
        position = "sticky",
        bg = Color.FOUR.value,
        padding_x = styles.Size.BIG.value,
        padding_y = styles.Size.DEFAULT.value,
        top = "0", 
        z_index = "999"    
    )