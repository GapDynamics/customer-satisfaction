import { Dimensions } from "react-native";

export const WINDOW_HEIGHT = Dimensions.get('window').height
export const WINDOW_WIDTH = Dimensions.get('window').width
export const MAIN_CARD_WIDTH = WINDOW_WIDTH*0.9
export const AppColors={
    green:{
        primary:'#094D07',
        secondar:'#419301',
        black:'#000000',
        white:'#ffffff',
        backgroundColor:'#F0F0F0',
        borderColor:'#A6A6A6',
        iconColor:'#A6A6A6',
        primaryTextColor:'#6B5E5E',
        warning:'#cc0000',
        secondaryText:'#777777'
    },
};

export const Fontfamily = {
    bold:'TitilliumWeb-Bold',
    regular:'TitilliumWeb-Regular',
    light:'TitilliumWeb-Light',

}
export const AppFonts={
    bold:'TitilliumWeb-Bold',
    regular:'TitilliumWeb-Regular',
    light:'TitilliumWeb-Light',
    smallsize:10,
    extraSmall:12,
    small:14,
    semiMedium:16,
    medium:18,
    largemedium:20,
    large:24,
}
    
