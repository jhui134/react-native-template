import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';

/******************
 *
 *    메인 스크린입니다.
 *
 ******************/
class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
                <Text>스플릿 화이팅</Text>
            </View>
        );
    }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
