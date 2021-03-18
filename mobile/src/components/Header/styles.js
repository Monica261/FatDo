import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Header: {
        width:'100%',
        height:90,//nº absoluto eu não preciso colocar em aspas simples
        backgroundColor:'#20295F',
        borderBottomColor:'#EE6B26',
        borderBottomWidth:5,
        alignItems:'center',
        justifyContent: 'center',
    },
    logo:{
        width: 100,
        height:30,
    },
    notification:{
        position: 'absolute',
        right: 20,
    },
    bell:{
        width:30,
        height:35
    },
    circle:{
        backgroundColor:'#fff',
        borderRadius:50,
        alignItems:'center',
        position:'absolute',
        left:13,
        bottom:13,
        width:25,
        height:25,
        justifyContent:'center',
    },
    leftIcon:{
        position:'absolute',
        left:20,
    },
    leftIconImage:{
        width:30,
        height:30,
    },
    notificationText:{
        fontWeight:'bold',
        color:'#EE6B26',
    }
});

export default styles;