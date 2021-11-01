import React from 'react';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';
import uuid from 'react-uuid';

export default function Groups() {

    const groups = [
        {
            name: "Test",
            location: "subtext"
        }
    ]

    return (
                <FlatList
                data={groups}
                renderItem={({item}) =>
                <TouchableHighlight>
                    <View>
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.location}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                }
                keyExtractor={() => uuid()}
                />
    );
}
