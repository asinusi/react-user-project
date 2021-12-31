import ApiError from './api-error';
const API_URL = '/api/names';

export async function getName() {
  try {
    const response = await fetch(API_URL);
    if (!response) {
      throw new Error('Failed to fetch name from API.');
    }
    const status = response.status;
    const result = await response.json();
    if (status >= 400) {
      return new ApiError(result);
    } else {
      return result;
    }
  } catch (e) {
    return e;
  }

}

export async function addName(name) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name})
    });
    const status = response.status;
    const result = await response.json();
    if (status >= 400) {
      return new ApiError(result);
    } else {
      return result;
    }
  } catch (e) {
    return e;
  }
}