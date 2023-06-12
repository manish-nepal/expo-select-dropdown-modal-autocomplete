import { useState, useEffect } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Octicons } from "@expo/vector-icons";


const SelectDropdownModal = ({ 
    title = 'Select Item', 
    data, 
    onSelect, 
    displayName 
}) => {

    const [filterInput, setFilterInput] = useState("");
    const [componentEntity, setComponentEntity] = useState();
    const [showModal, setShowModal] = useState(false);
    const [selectedEntity, setSelectedEntity] = useState('')


    useEffect(() => {

        if (!!filterInput) {
            filterEntity()
        } else {
            setComponentEntity(data)
        }

        return (() => { })
    }, [filterInput])

    const filterEntity = () => {
        const filteredEntity = data.filter((item) => {
            return item[displayName].toLowerCase().includes(filterInput.toLowerCase())
        });
        setComponentEntity(filteredEntity);
    }

    useEffect(() => {
        if (!!data.length) {
            setComponentEntity(data)
        }
    }, [data])

    return (
        <>
            <TouchableOpacity
                style={styles.selectModal}
                onPress={() => setShowModal(true)}
            >
                <Text>{!!selectedEntity ? selectedEntity[displayName] : title}</Text>
                <View>
                    <Octicons name="triangle-down" size={20} color="gray" />
                </View>
            </TouchableOpacity>

            <Modal
                visible={showModal}
                transparent
                onRequestClose={() => setShowModal(false)}
            >
                <Pressable
                    onPress={() => setShowModal(false)}
                    style={styles.modalBackground}
                >
                    <View style={styles.modalContainer}>
                        <View>
                            <TextInput
                                placeholder='search...'
                                onChangeText={(text) => setFilterInput(text)}
                                style={styles.textInput}
                            />
                        </View>
                        <View style={styles.separator}></View>
                        <FlatList
                            data={componentEntity}
                            renderItem={({ item }) =>
                            (<>
                                <TouchableOpacity
                                    onPress={() => {
                                        onSelect(item)
                                        setSelectedEntity(item)
                                        setShowModal(false)
                                    }}
                                    style={styles.listItem}
                                >
                                    <Text style={styles.listItemText}>{item[displayName]}</Text>
                                </TouchableOpacity>
                                <View style={styles.separator}></View>
                            </>)}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </Pressable>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
        justifyContent: 'center'
    },

    modalContainer: {
        backgroundColor: 'white',
        margin: 32,
        borderRadius: 8
    },

    textInput: {
        padding: 12
    },

    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#ddd'
    },
    listItem: {
        backgroundColor: 'white',
        padding: 10,
    },

    listItemText: {
        fontSize: 20,
        lineHeight: 28,
    },

    selectModal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        margin: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'gray'
    }
});

export default SelectDropdownModal;