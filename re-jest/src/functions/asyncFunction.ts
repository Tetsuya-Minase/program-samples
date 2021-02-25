function asyncResolveClient(): Promise<string> {
  return Promise.resolve('OK');
}

function asyncRejectClient(): Promise<string>{
  return Promise.reject('Error');
}

export async function resolveSample(): Promise<string> {
  return await asyncResolveClient();
}

export async function rejectSample(): Promise<string> {
  return await asyncRejectClient();
}