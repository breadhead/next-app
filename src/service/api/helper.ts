export const apiErrorHandler = async error => {
  if (error.data) throw error.data;
};
