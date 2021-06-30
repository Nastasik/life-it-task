import { ResponseType } from './types';

export const fetchApi = <T>(
  url: string,
  options = {},
): Promise<ResponseType<T>> =>
  new Promise((resolve, reject) =>
    fetch(url, options)
      .then((response) => {
        if (response.status === 204) {
          return response;
        } else if (response.status < 400) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data = {}) => resolve({ data, error: false, errorText: '' }))
      .catch((response) =>
        response
          .json()
          .then(({ error }: { error: string }) =>
            reject({ data: null, error: true, errorText: error }),
          ),
      ),
  );
