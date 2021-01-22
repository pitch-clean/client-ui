export const Post = async (url, body, additionalHeaders={}, isReturnJson=false) => {
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    ...additionalHeaders,
  };

  // make request
  try {
    const response = await fetch(
      url,
      {
        method      : 'POST',
        credentials : 'include',
        mode        : 'cors',
        headers     : headers,
        body        : JSON.stringify(body),
      }
    );
    return isReturnJson ? await response.json(): response;
  } catch (error) {
    console.log('ERROR POST: ', error);
    console.log('url: ', url);
    console.log('headers: ', headers);
    console.log('body: ', body);
    console.error(error);
  }
};

export const Get = async (url, body, additionalHeaders={}, isReturnJson=false) => {
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    ...additionalHeaders,
  };

  try {
    const response = await fetch(
      url,
      {
        method: 'GET',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(body),
      },
    );
    return isReturnJson ? await response.json(): response;
  } catch (err) {
    console.log('Error: GET request');
    console.error(err);
  }
};

export const register = async (url, body) => {
  const res = await Post(url, body)
  console.log('the register res', res);
};

export const login = async (url, body) => {
  const headers = {
    // Authorization: `JWT ${JWT}`,
    // 'X-CSRFToken': `${getCookieByKey("csrftoken")}`,
  };
  const res = await Post(url, body)
  console.log('the login res', res);
};