import {Platform, StatusBar  } from "react-native";

export default {

    images: {
        heartIcon: require("../../ReactInstagram/assets/like.png"),
        heartFilledIcon: require("../../ReactInstagram/assets/heart.png"),
        fireIcon: require("../../ReactInstagram/assets/fire.png"),
        commentIcon: require("../../ReactInstagram/assets/chat.png"),
        sendIcon: require("../../ReactInstagram/assets/send.png"),
        background: require("../../ReactInstagram/assets/start.jpg"),
        send: require("../../ReactInstagram/assets/navigation.png"),
        sync: require("../../ReactInstagram/assets/sync.png"),
        addReaction: require("../../ReactInstagram/assets/add.png"),
    },

    colors: {
        appColor: "#ff471a",
        secondaryColor: "#e62e00",
        tabBgColor: "#D5DBDB",
        tabInActiveColor: "#FFFFFF",
        black: "#000000",
        appBgColor: "#E5E8E8"
    },

    constants: {
        appName: "Reactify",
        headerFontSize: 20, 
        headerFontColor: "white", 
        headerFontStyle: "normal",
        headerFontWeight: "500", 
        headerFontFamily: "arial", 
        imagePickerTitle: "Create Reaction",
        profileTitle: "Profile",
        defaultPadding: 15,
        buttonHeight: 45,
        padding20: 20,
        padding5: 5,
        padding2: 2,
        padding3: 3,
        padding8: 8,
        padding10: 10,
        padding25: 25,
        padding30: 30,
        padding50: 50,
        padding70: 70,
        padding80: 80,
        padding90: 90,
        padding100: 100,
        padding120: 120,
        textsize_14: 14,
        textsize_16: 16,
        LOGIN: "login",
        STATUSBAR_HEIGHT : 0,  //Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        APPBAR_HEIGHT : 0, //Platform.OS === 'ios' ? 44 : 56,

        registerFirePath : "/User/",
        reactionFirePath : "/Reaction/",
        uploadFirePath : "/Image/",
    }
}

export const printLog = (message) => {
    console.log(message)
}