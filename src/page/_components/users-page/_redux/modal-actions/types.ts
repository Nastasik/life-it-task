export type ActionsType = {
  type: string;
  payload?: DataForEditType;
};

export type CreateActionModalStatePart = {
  actionModalReducer: CreateActionModalStorageType;
};

export type CreateActionModalStorageType = {
  editData: DataForEditType | null;
  isModalOpened: boolean;
};

export type DataForEditType = {
  name: string;
  id: number;
};
