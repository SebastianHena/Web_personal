import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import color_text as color_text
from .fonts import Fonts as Fonts

#Constants
MAX_WIDTH = "560px"

#Enums
class Size(Enum):
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"
    MAX_BIG = "3em"


#Styles Base

BASE_STYLE = {
    "font_family" : Fonts.DEFAULT.value,
    "background_color": Color.PRIMARY.value,

    rx.Button: {
    "width" : "100%",
    "height" : "100%",
    "padding" : Size.SMALL.value,
    "border_radius" : Size.DEFAULT.value,
    "color": color_text.TEXT_PRIMARY.value,
    "background_color": Color.FOUR.value,
    "white_space" : "normal",
    "text_align": "start",
    "_hover": {
        "background_color": Color.SECUNDARY.value,

        }
    },

    rx.Link : {
        "text_decoration":"none",
        "_hover" : {}
    }
}


#Styles Buttons
button_title_style = dict(
        font_family = Fonts.TITLE.value,
        font_size = Size.DEFAULT.value,
        color = color_text.TEXT_PRIMARY.value,

)

button_body_style = dict(
        font_family = Fonts.DEFAULT.value,
        font_size = Size.MEDIUM.value,
        color = color_text.TEXT_SECUNDARY.value,
        
)

#Styles Titles
title_style = dict (
    width = "100%",
    font_family = Fonts.TITLE.value,
    padding_top = Size.DEFAULT.value,
    padding = Size.SMALL.value,
    color = color_text.TEXT_PRIMARY.value,
)

subtitle_style = dict (
    width = "100%",
    font_family = Fonts.TITLE.value,
    font_size = Size.BIG.value,
    padding_top = Size.DEFAULT.value,
    padding = Size.SMALL.value,
    color = color_text.TEXT_PRIMARY.value,
)


#Styles Navbar
navbar_title_style = dict (
    font_family = Fonts.LOGO.value,
    font_size = Size.LARGE.value
)

avatar_title_style = dict (
    width = "100%",
    font_family = Fonts.TITLE.value,
    color = color_text.TEXT_PRIMARY.value,
    padding = Size.SMALL.value,
)


