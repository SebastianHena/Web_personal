import reflex as rx
import reflex_web.styles.styles as styles
from reflex_web.styles.colors import color_text as color_text
from datetime import datetime


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
        src="/logo.png",
        width="5em",
        height="auto",
        border_radius=styles.Size.MEDIUM.value,
        margin_top = styles.Size.MEDIUM.value,
        margin_bottom = styles.Size.MEDIUM.value
        
    ),
        rx.text(f"SebasDev | {datetime.now().year}", 
                color = color_text.TEXT_SECUNDARY.value),
        
    )