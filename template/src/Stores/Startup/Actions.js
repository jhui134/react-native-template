import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    // This action is triggered when the application starts
    startup: null,
    fetchNavigate: ['params'],
    fetchNavigateBack: ['params'],
    fetchTopLevelNavigator: ['params'],
    fetchNavigateAndReset: ['params'],
    fetchNavigatePush: ['params'],
});

export const StartupTypes = Types;
export default Creators;
