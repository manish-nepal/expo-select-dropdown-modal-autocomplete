# React native expo select dropdown modal with autocomplete search filter


**Feature**

Using this package, you can display an array of object on select dropdown on modal screen and select a specific object and render its display name.


**Props**

***title*** - Default title is **Select Item**, Pass a title to display initially, such as   'Select company', 'Select user', etc, than after you select an item, selected item's display name will be displayed.

***data*** - To render your items on a list, just pass array of objects,  ***Note***: only pass array of objects.

***onSelect*** - Pass a method to select an item. For example, if you have a state like **const[selectedCompany, setSelectedCompany] = useState()**, just pass **setSelectedCompany** to **onSelect** prop.

***displayName*** - Pass a prop as string to displayName for example  **displayName={"name"}**, in this case name should be a field inside a object you passed on data array, like as 
**data = [{id: 1, name: abc, age: 50}, {id: 2, name: def, age: 25}]**, So now on this object, except for _id_, _name_ and _age_, if you mis-spell or pass a string which is not a field of a object on array, the package will not render anyhing on a modal list.


### Usage

```react

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectDropdownModal from 'expo-select-dropdonwn-modal-autocomplete'


export default function App() {

  const companyUsers = [
    { id: 1, name: 'Ram' },
    { id: 2, name: 'Shyam' },
    { id: 3, name: 'Hari' },
    { id: 4, name: 'Krishna' },
    { id: 5, name: 'Bishnu' },
    { id: 6, name: 'Basu' },
  ]

  const [selectedUser, setSelectedUser] = useState()

  return (
    <View style={styles.container}>
      <SelectDropdownModal
        data={companyUsers}
        displayName={'name'}
        onSelect={setSelectedUser}
        title='Select brand'
      />

      {!!selectedUser && <Text style={{textAlign: 'center', padding: 12, fontSize: 32}}>{selectedUser.name}</Text>}

      <StatusBar style="auto" />
    </View>
  );
}

```