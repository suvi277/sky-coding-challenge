import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import streamData from './streamData/streamData';
import timeSeries from './timeSeries/timeSeries';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    timeSeries,
    streamData
})

export default createRootReducer