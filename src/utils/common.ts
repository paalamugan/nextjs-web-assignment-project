export const jsonParser = (value: unknown) => {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (error) {
    return null;
  }
};
