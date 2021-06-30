export type ResponseType<T> = {
  data: T;
  error: boolean;
  errorText: string;
};
