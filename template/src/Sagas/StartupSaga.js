import { put } from 'redux-saga/effects';
import NavigationService from '@/Services/NavigationService';

export function* startup() {
    NavigationService.navigateAndReset('MainScreen');
}

export function* fetchNavigate(data) {
    NavigationService.navigate(data.params);
}

export function* fetchNavigateBack(data) {
    NavigationService.navigateBack(data.params);
}

export function* fetchTopLevelNavigator(data) {
    NavigationService.setTopLevelNavigator(data.params);
}

export function* fetchNavigateAndReset(data) {
    NavigationService.navigateAndReset(data.params);
}

export function* fetchNavigatePush(data) {
    NavigationService.navigatePush(data.params);
}
