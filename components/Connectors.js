import React, { useContext } from 'react';
import { Text, Image, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-uuid';
import { endpointURI } from '../variables';
import { ProjectContext } from '../ProjectContext';
import styles from './styles';

export default function Connectors() {

    const { name, connectorData, setConnectorData } = useContext(ProjectContext);

    let connectors = connectorData;
    let projectName = name;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.groupBar}>
                <TouchableOpacity onPress={() => console.log("search button pressed")} title="+"><Ionicons name="search-outline" size={30}/></TouchableOpacity>
                <Text>Connectors</Text>
                <TouchableOpacity onPress={() => console.log("add group button pressed")} title="+"><Ionicons name="add-sharp" size={30}/></TouchableOpacity>
            </View>
            <FlatList
                style={styles.projectList}
                data={connectors}
                renderItem={({item}) =>
                <View style={styles.item}>
                    <View style={styles.container}>
                        <Image
                            style={styles.thumbImage}
                            source={{
                                uri: `${endpointURI()}/${projectName}/img/${item.imagePath}`
                            }}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.subtext}>{item.location}</Text>
                        </View>
                    </View>
                </View>
                }
                keyExtractor={() => uuid()}
                />
        </View>
    );
}