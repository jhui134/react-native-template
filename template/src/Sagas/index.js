import { takeLatest, all } from 'redux-saga/effects';
import { StartupTypes } from '@/Stores/Startup/Actions';

import {
    startup,
    fetchNavigate,
    fetchNavigateBack,
    fetchTopLevelNavigator,
    fetchNavigateAndReset,
    fetchNavigatePush,
} from './StartupSaga';

export default function* root() {
    yield all([
        // startup
        takeLatest(StartupTypes.STARTUP, startup),
        takeLatest(StartupTypes.FETCH_NAVIGATE, fetchNavigate),
        takeLatest(StartupTypes.FETCH_NAVIGATE_BACK, fetchNavigateBack),
        takeLatest(StartupTypes.FETCH_TOP_LEVEL_NAVIGATOR, fetchTopLevelNavigator),
        takeLatest(StartupTypes.FETCH_NAVIGATE_AND_RESET, fetchNavigateAndReset),
        takeLatest(StartupTypes.FETCH_NAVIGATE_PUSH, fetchNavigatePush),
    ]);
}
