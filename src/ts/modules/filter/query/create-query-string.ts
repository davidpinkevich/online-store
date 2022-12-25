const searchParams = new URLSearchParams(window.location.search);

export const addQueryString = (key: string, value: string): void => {
  if (searchParams.has(key)) {
    if (key === "stock") {
      searchParams.delete(key);
      searchParams.set(key, value);
    }
    if (key === "price") {
      searchParams.delete(key);
      searchParams.set(key, value);
    }
    const curr = searchParams.get(key);
    if (curr?.includes(value)) {
      const val = curr
        .split("↕")
        .filter((val) => val !== value)
        .join("↕");
      if (val === "") {
        searchParams.delete(key);
      } else {
        searchParams.set(key, val);
      }
    } else {
      searchParams.set(key, [searchParams.get(key), value].join("↕"));
    }
  } else {
    searchParams.set(key, value);
  }

  const newPath = `${window.location.pathname}?${searchParams.toString()}`;
  history.pushState(null, "", newPath);
};

export const addSearchQueryString = (key: string, value: string) => {
  if (searchParams.has(key)) {
    searchParams.delete(key);
    searchParams.set(key, value);
    if (value === "") searchParams.delete(key);
  } else {
    searchParams.set(key, value);
  }
  const newPath = `${window.location.pathname}?${searchParams.toString()}`;
  history.pushState(null, "", newPath);
};
