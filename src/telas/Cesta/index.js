import React from "react";
import { View, StyleSheet } from "react-native";

import Topo from "./components/Topo";
import Detalhe from "./components/Detalhe";

export default function Cesta(){
    return <>
        <Topo/>
        <View style={style.cesta}>
            <Detalhe/>
        </View>
    </>
}

const style = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});