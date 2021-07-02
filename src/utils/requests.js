export const Post = async (url, body, additionalHeaders={}, isReturnJson=true) => {
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    ...additionalHeaders,
  };

  // make request
  const response = await fetch(
    url,
    {
      method      : 'POST',
      // credentials : 'include',
      mode        : 'cors',
      headers     : headers,
      body        : JSON.stringify(body),
    }
  );
  if (response.ok) {
    return isReturnJson ? await response.json(): response;
  } else {
    return { status: response.status, statusText: response.statusText, json: response.json() };
  }
};

export const Get = async (url, additionalHeaders={}, isReturnJson=true) => {
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    ...additionalHeaders,
  };

  const response = await fetch(
    url,
    {
      method: 'GET',
      mode: 'cors',
      headers: headers,
    },
  );
  return isReturnJson ? await response.json(): response;
};

export const Put = async (url, body, additionalHeaders={}, isReturnJson=true) => {
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    ...additionalHeaders,
  };

  // make request
  const response = await fetch(
    url,
    {
      method      : 'PUT',
      mode        : 'cors',
      // TODO ADD CREDENTIALS
      headers     : headers,
      body        : JSON.stringify(body),
    }
  );
  return isReturnJson ? await response.json(): response;
  // try {
  // } catch (err) {
  //   throw err;
  // }
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
