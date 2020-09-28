export const sameAs = (field, getValues) => (value) => {
  const valuesObj = getValues();
  return valuesObj[field] === value;
};
