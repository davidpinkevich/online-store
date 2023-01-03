const search = new URLSearchParams(window.location.search);

export function addQueryForCart(key: string, value: string): void {
  if (search.has(key)) {
    search.delete(key);
    search.set(key, value);
  } else {
    search.set(key, value);
  }
  const newPath = `${window.location.pathname}?${search.toString()}${
    window.location.hash
  }`;
  history.pushState(null, "", newPath);
  history.pushState(null, "", newPath);
}
