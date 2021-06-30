export type ActionsTokenType = {
  type: string;
  payload?: string;
};

export type CreateTokenStatePart = {
  tokenReducer: CreateTokenStorageType;
};

export type CreateTokenStorageType = {
  token: string;
};
