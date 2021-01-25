import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    fetchCommonReducer: ['params'],
});

export const CommonTypes = Types;
export default Creators;
