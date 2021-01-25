import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartupActions from '@/Stores/Startup/Actions';
import { AppNavigator } from '@/Navigators/AppNavigator';
import CommonActions from '@/Stores/Common/Actions';
import { Alert, BackHandler, Platform, StatusBar, ToastAndroid, View } from 'react-native';
/******************
 *
 *    스크린 계층 최상단 스크린입니다.
 *
 ******************/
class RootScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <AppNavigator
                ref={(navigatorRef) => {
                    this.props.fetchTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    fetchTopLevelNavigator: (params) => dispatch(StartupActions.fetchTopLevelNavigator(params)),
    fetchCommonReducer: (params) => dispatch(CommonActions.fetchCommonReducer(params)),
    fetchNavigate: (params) => dispatch(StartupActions.fetchNavigate(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen);
