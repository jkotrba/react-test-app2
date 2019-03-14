import { ThunkAction } from 'redux-thunk';
import { AppState } from './index';
import { ActionType } from './counter/types';

type ThunkResult<R> = ThunkAction<R, AppState, null, ActionType>

export default ThunkResult;
