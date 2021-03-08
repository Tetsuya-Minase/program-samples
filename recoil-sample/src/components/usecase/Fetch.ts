type Method = 'GET' | 'POST';

const fetchClient = async<T, U>(url: string, method: Method, body?: T): Promise<U | Error> => {
  const request: RequestInit = {
    method,
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(body)
  }
  const response = await fetch(url, request);
  if (!response.ok) {
    console.log('error');
    return new Error('Response Error');
  }
  return response.json();
};

export const get = async<R>(url: string): Promise<R | Error> => {
  return await fetchClient<never, R>(url, 'GET');
}
