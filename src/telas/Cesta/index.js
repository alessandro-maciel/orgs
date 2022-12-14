import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Topo from "./components/Topo";
import Detalhe from "./components/Detalhe";
import Item from "./components/Item";
import Texto from "../../components/Texto";

export default function Cesta({topo, detalhe, itens}){
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({nome})=>{nome}}
            ListHeaderComponent={()=>{
                return <>
                    <Topo { ...topo }/>
                    <View style={style.cesta}>
                        <Detalhe { ...detalhe }/>
                        <Texto style={style.titulo}>{itens.titulo}</Texto>
                    </View>
                </> 
            }}
        />
       
    </>
}

const style = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
});