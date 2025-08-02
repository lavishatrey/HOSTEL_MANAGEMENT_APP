import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userRelated/userSlice';
import { studentReducer } from './studentRelated/studentSlice';
import { noticeReducer } from './noticeRelated/noticeSlice';
import { batchReducer } from './batchRelated/batchSlice';
import { wardenReducer } from './wardenRelated/wardenSlice';
import { complainReducer } from './complainRelated/complainSlice';
import hostelReducer from './hostelRelated/hostelSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        student: studentReducer,
        warden: wardenReducer,
        notice: noticeReducer,
        complain: complainReducer,
        batch: batchReducer,
        hostel: hostelReducer
    },
});

export default store;
