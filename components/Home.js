import React from 'react';
import { Text, View, FlatList } from 'react-native';

export default function Home({navigation}) {

    let homeOptions = [{key: "Projects"}, {key: "Groups"}];

    return (
        <View>
            <View>
                <Text>Home Page</Text>
                <FlatList
                data={homeOptions}
                renderItem={({item}) => 
                <Text onPress={() => navigation.navigate(item.key)}>{item.key}</Text>}
                />
            </View>
        </View>
    );
}
