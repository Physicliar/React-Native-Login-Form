import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    console.log(props);
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContetn: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};


export { CardSection };
