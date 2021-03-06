import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AuthStyles = StyleSheet.create({

    authContainer: {

        flex:1,

        backgroundColor:'#fff',
        paddingHorizontal: 30
    },
    textInputView:{

        borderWidth:1,
        borderColor: '#000',
    },
    smallButton:{

        paddingHorizontal:20,
        paddingVertical:10,

        alignItems:'center',
        justifyContent: 'center',

        alignSelf:'center',
        backgroundColor:'#000'
        
    },
    largeButton:{

        paddingHorizontal:20,
        paddingVertical:10,

        alignItems:'center',
        justifyContent: 'center',

        backgroundColor:'#000'
    },
    centerImageView:{

        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    deviceWidth:{
        width: width
    },
    deviceHeight:{
        height: height
    }
})

export default AuthStyles;