export const formatName = (title, firstName, lastName) => {
  return `${title} ${firstName} ${lastName}`;
};

export const formatDate = (date) => {
  return date.substr(0, 10);
};
