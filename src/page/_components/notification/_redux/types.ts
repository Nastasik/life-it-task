export type ActionsNotificationType = {
  type: string;
  payload?: NoticeType;
};

export type CreateNotificationStatePart = {
  notificationReducer: CreateNotificationStorageType;
};

export type CreateNotificationStorageType = {
  isOpened: boolean;
  notice: NoticeType;
};

export type NoticeType = {
  text?: string;
  status?: 'error' | 'success';
};
