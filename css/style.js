import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "linear-gradient(to left, #76b852, #8DC26F)",
        "fontFamily": "\"Roboto\", sans-serif",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "btn-success-custom": {
        "boxShadow": "none !important",
        "textAlign": "center",
        "paddingTop": "2%",
        "paddingRight": "2%",
        "paddingBottom": "2%",
        "paddingLeft": "2%",
        "marginTop": "50%"
    },
    "login-page": {
        "width": "50%",
        "paddingTop": "8%",
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "form": {
        "background": "#FFFFFF",
        "maxWidth": "30%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 100,
        "marginLeft": "auto",
        "paddingTop": 45,
        "paddingRight": 45,
        "paddingBottom": 45,
        "paddingLeft": 45,
        "top": "15%",
        "bottom": "30%",
        "textAlign": "center",
        "boxShadow": "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)"
    },
    "form input": {
        "fontFamily": "\"Roboto\", sans-serif",
        "outline": 0,
        "background": "#f2f2f2",
        "width": "100%",
        "border": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "boxSizing": "border-box",
        "fontSize": 14
    },
    "form button": {
        "fontFamily": "\"Roboto\", sans-serif",
        "textTransform": "uppercase",
        "outline": 0,
        "background": "#4CAF50",
        "width": "100%",
        "border": 0,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "color": "#FFFFFF",
        "fontSize": 14,
        "WebkitTransition": "all 0.3 ease",
        "transition": "all 0.3 ease",
        "cursor": "pointer"
    },
    "form button:hover": {
        "background": "#43A047"
    },
    "form button:active": {
        "background": "#43A047"
    },
    "form button:focus": {
        "background": "#43A047"
    },
    "form message": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#b3b3b3",
        "fontSize": 12
    },
    "form message a": {
        "color": "#4CAF50",
        "textDecoration": "none"
    },
    "form register-form": {
        "display": "none"
    }
});