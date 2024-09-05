import axios from 'axios';

export const getRequest = async (path: string) => {
  try {
    const response = await axios.get(`${path}`);
    return response;
  } catch (error) {
    showError(error);
  }
};

export const postRequest = async (path: string, data: any) => {
  try {
    const response = await axios.post(`${path}`, data, {});
    showOk(response);
    return response;
  } catch (error: any) {
    showError(error);
  }
};

const showError = (response: any) => {
  const messages = response.response.data.errors;
  const values = Object.values(messages);
  const concatenatedString = values.join(', ');

  alert(concatenatedString);
};

const showOk = (response: any) => {
  if (response.status >= 200 && response.status < 204) {
    alert('Process completed successfully');
  }
};
