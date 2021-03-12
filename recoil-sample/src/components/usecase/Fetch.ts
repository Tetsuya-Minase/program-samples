type Method = 'GET' | 'POST';

const fetchClient = async<B, R>(url: string, method: Method, body?: B): Promise<R | Error> => {
  const request: RequestInit = {
    method,
    headers: new Headers({ 'Content-Type': 'application/json' }),
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
};
export const post = async<R, B>(url: string, body: B): Promise<R | Error> => {
  return await fetchClient<B, R>(url, 'POST', body);
};