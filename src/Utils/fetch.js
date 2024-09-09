export async function api(url, method = "GET", body, headers = {}) {
    return fetch(url, {
      method: method,
      headers: {
        ...headers,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: method !== "GET" && body ? JSON.stringify(body) : undefined,
    }).then((response) => {
      if (response.status >= 500) {
        throw response;
      }
      return response;
    });
  }

  
export async function postForm(url, body, method = "POST", headers = {}) {
    return fetch(url, {
      method: method,
      headers: {
        ...headers,
        Accept: "application/json",
      },
      body: method !== "GET" ? body : undefined,
    }).then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response;
    });
  }
  
  export function createFormData(json) {
    let formData = new FormData();
    Object.keys(json).forEach((key) => {
      formData.append(key, json[key]);
      console.log(formData);
    });
    return formData;
  }
  