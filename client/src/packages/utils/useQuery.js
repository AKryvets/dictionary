export const useQuery = (name) => {
  try {
    return JSON.parse(sessionStorage.getItem(`${name}-query`));
  } catch (e) {
    return {};
  }
};

export const setQuery = (name, newQueryParams) => {
  const query = useQuery(name);

  sessionStorage.setItem(
    `${name}-query`,
    JSON.stringify({ ...query, ...newQueryParams })
  );
};
