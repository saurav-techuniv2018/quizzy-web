const actionGenerator = (type, payload) => {
  if (typeof type !== 'string') return undefined;

  return {
    type,
    payload,
  };
};

export default actionGenerator;
