import React from 'react';
import { Text, FlatList } from 'react-native';

export default function Projects({navigation}) {

    const projectList = [{key: "Project 1"}, {key: "Project 2"}];

    return (
            <FlatList
            data={projectList}
            renderItem={({item}) => <Text onPress={() => navigation.navigate('ActualProject', { name: item.key })}>{item.key}</Text>}
            />
    )
}
