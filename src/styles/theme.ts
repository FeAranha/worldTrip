import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        highlight: {
            "highlight": "#FFBA08",
        },
        dark: {
            "800": "#000000",
            "600 ": "#47585B",
            "400": "#999999",
        },
        light: {
            "white": "#FFFFFF",
            "headingsText": "#F5F8FA",
            "info": "#DADADA",
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'light.headingsText',
                color: 'light.headingsText',
            }
        }
    }
})