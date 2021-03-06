/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text
} from 'native-base';

export default class FacialRecognition extends Component<{}> {

    static navigationOptions = {
        tabBarLabel: 'Face Recognition',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="happy" active={true} style={{color:tintColor}}/>
        ),
    };

    render() {
        return (
            <Container>
                <Content>
                    <Text>
                        This is FacialRecognition Content Section
                    </Text>
                </Content>
            </Container>
        );
    }
}

