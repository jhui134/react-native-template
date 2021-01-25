import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '@/Sagas';
import { reducer as CommonReducer } from './Common/Reducers';

export default () => {
    const rootReducer = combineReducers({
        common: CommonReducer,
    });
    return configureStore(rootReducer, rootSaga);
};
