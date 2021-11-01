import { StyleSheet, Platform } from 'react-native';

let styles;
export default styles = StyleSheet.create({
    heightFix: {
        // height: Platform.OS === 'web' ? '100vh' : '100%',
        // backgroundColor: 'blue'
    },
    container: {
        // flex: 1,
        // backgroundColor: '#00ff00',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        // flexDirection: 'row',
        // width: '100%',
    },
    mainContainer: {
        // flex: 1,
        // backgroundColor: '#ff0000',
        // alignItems: 'center',
        // justifyContent: 'flex-start',
        // flexDirection: 'column',
        // width: '100%',
    },
    homeContainer: {
        // flex: 1,
        // flexDirection: 'column',
        // backgroundColor: '#ddd',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    homeHeaderText: {
        // color: '#fcba03',
        // fontSize: 28,
        // textShadowColor: '#000',
        // textShadowOffset: {width: 1, height: 1},
        // textShadowRadius: 15,
        // padding: 5,
    },
    menuList: {
        // flexGrow: 0,
        // flexShrink: 0,
        // marginTop: 20,
        // width: '80%',
    },
    menuListItem: {
        // padding: 10,
        // marginBottom: 15,
        // fontSize: 18,
        // height: 44,
        // backgroundColor: '#222',
        // width: '100%',
        // textAlign: 'center',
        // color: '#fcba03'
    },
    projectList: {
        // marginTop: 20,
        // width: '80%',
    },
    projectListItem: {
        // padding: 10,
        // marginBottom: 15,
        // fontSize: 18,
        // height: 44,
        // backgroundColor: '#222',
        // width: '100%',
        // textAlign: 'center',
        // color: '#0fb500'
    },
    groupDetailRow: {
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // justifyContent: 'space-between',
        // textAlign: 'left',
        // paddingTop: 10,
        // backgroundColor: 'white'

    },
    groupHeader: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-evenly',
        // textAlign: 'left',
        // paddingTop: 10,
        // width: '100%',
        // backgroundColor: 'white'
    },
    groupDetailName: {
        // fontSize: 15,
        // flex: 1,
        // textAlign: 'center'
    },
    groupBar: {
        // flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // width: '100%',
        // marginTop: 0,
        // paddingHorizontal: 20,
        // borderBottomColor: '#eee',
        // borderBottomWidth: 1,
        // flexBasis: 50
    },
    projectContainer: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'flex-start',
        // justifyContent: 'center',
        // flexDirection: 'row',
        // width: '100%',
    },
    textContainer: {
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // justifyContent: 'center',
    },
    item: {
        // padding: 10,
        // marginBottom: 15,
        // fontSize: 18,
        // height: 70,
        // backgroundColor: '#fff',
        // width: '100%',
        // borderBottomColor: '#eee',
        // borderBottomWidth: 1,
    },
    text: {
        // color: '#000',
        // textAlign: 'center',
        // fontSize: 16,
    },
    subtext: {
        // color: '#000',
        // textAlign: 'center',
        // fontSize: 12,
    },
    thumbImage: {
        // width: 50,
        // height: 50,
        // marginRight: 50,
        // resizeMode: 'contain',
    },
    fullImage: {
        // width: 150,
        // height: 150,
        // resizeMode: 'contain',
    },
    headerText: {
        // color: '#0000ff',
        // fontSize: 28,
        // padding: 0,
    },
    longText: {
        // padding: 20
    }
});
