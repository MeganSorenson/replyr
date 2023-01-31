import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Card } from '@rneui/themed';

type InboxEmailEntryProps = {
    email: {
        id: number
        title: string
        body: string
        sender: string
        date: string
    }
}

const InboxEmailEntry = (props: InboxEmailEntryProps) => {
    return (
        <Card key={props.email.id}>
            <Text>{props.email.title}</Text>
            <Text>{props.email.body}</Text>
            <Text>{props.email.sender}</Text>
            <Text>{props.email.date}</Text>
        </Card>
    )
}

export default InboxEmailEntry

const styles = StyleSheet.create({})