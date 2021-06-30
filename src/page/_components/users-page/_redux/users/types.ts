export type UsersActionsType = {
  type: string;
  payload?: Array<UserType>;
};

export type CreateUsersStatePart = {
  usersReducer: CreateUsersStorageType;
};

export type CreateUsersStorageType = {
  users: Array<UserType>;
  page: number;
  isLoading: boolean;
};

//Приходит в /api/users response
export type UserType = {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
};

export type ChangePageType = {
  currentPage: number;
  rowsPerPage: number;
};
