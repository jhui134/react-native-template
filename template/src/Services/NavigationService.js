import { NavigationActions, StackActions } from 'react-navigation';
/**
 * The navigation is implemented as a service so that it can be used outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */

let navigator;

/**
 * This function is called when the RootScreen is created to set the navigator instance to use.
 */
function setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
}

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigate(routeName, params) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        }),
    );
}

function navigatePush(routeName, params) {
    navigator.dispatch(StackActions.push({ routeName: routeName, params: params }));
}

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigateAndReset(routeName, params) {
    navigator.dispatch(
        StackActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({
                    routeName,
                    params,
                }),
            ],
        }),
    );
}

function navigateReset(routeName) {
    navigator.dispatch(
        StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: routeName })],
        }),
    );
}

function navigateReplace(routeName) {
    navigator.dispatch(
        StackActions.replace({
            routeName: routeName,
        }),
    );
}

function navigateBack(n) {
    navigator.dispatch(StackActions.pop({ n: n }));
}

export default {
    navigate,
    navigateAndReset,
    setTopLevelNavigator,
    navigateBack,
    navigateReset,
    navigateReplace,
    navigatePush,
};
