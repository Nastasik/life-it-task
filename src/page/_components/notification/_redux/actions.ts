import { NoticeType } from './types';
type BaseAction = () => { type: string };
type Action<T> = (payload: T) => { type: string; payload: T };

export const OPEN_NOTIFICATION = 'OPEN_NOTIFICATION';
export const openNotificationAction: BaseAction = () => ({
  type: OPEN_NOTIFICATION,
});

export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';
export const closeNotificationAction: BaseAction = () => ({
  type: CLOSE_NOTIFICATION,
});

export const SET_NOTICE = 'SET_NOTICE';
export const setNoticeAction: Action<NoticeType> = (payload) => ({
  type: SET_NOTICE,
  payload,
});
