import { combineSlices } from '@reduxjs/toolkit';
import authentication from '../pages/Authenticate/store/slice';

const rootReducer = combineSlices({
    ...authentication,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
