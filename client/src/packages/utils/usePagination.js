export const usePagination = (name) => {
  const page = Number(sessionStorage.getItem(`${name}-page`) ?? 0);
  const count = Number(sessionStorage.getItem(`${name}-count`));

  return {
    page,
    count,
  };
};

export const setPagination = (name, pagination) => {
  sessionStorage.setItem(`${name}-page`, pagination.page || 0);
  sessionStorage.setItem(`${name}-count`, pagination.count);
};
