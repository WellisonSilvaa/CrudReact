import React, { useContext } from "react";
import { View, FlatList, Alert } from "react-native";
import { Avatar, Button, Icon, ListItem } from "@rneui/themed";
import UsersContext from "../context/UsersContext";

export default props => {
    /* console.warn(Object.keys(props)) */

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                >
                    <Icon name="pencil" type="material-community" color="grey" />
                </Button>
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                >
                    <Icon name="trash-can-outline" type="material-community" color="grey" />
                </Button>
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem 
                
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar
                    rounded
                    source={{ uri: user.avatarUrl}}
                    key={user.id}
                />
                <ListItem.Content >
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content
                    style={{
                        flexDirection: "row",
                        justifyContent: "flex-end"
                    }}
                >{getActions(user)}</ListItem.Content>
            </ListItem>
            
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}