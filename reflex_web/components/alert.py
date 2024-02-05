import reflex as rx


def alert() -> rx.Component:
    return rx.alert(
        rx.alert_icon(),
        rx.alert_title("¡No te preocupes, estamos desarrollando!😁"),
        status="info",
        width="100%",
        border_radius = "5px"
        )