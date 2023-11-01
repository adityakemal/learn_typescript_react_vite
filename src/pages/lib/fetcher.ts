import axios from "axios";

// axios.interceptors.request.use( (config)=> {
//     // const token = store.getState().session.token;
//     // config.headers.Authorization =  token;
//     // return config;
// });

// Add a 401 response interceptor
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     if (401 === error.response.status) {
//       // handle error: inform user, go to login, etc
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export const fetchGet = async (
  url: string,
  params: string | null | undefined
) => {
  const config = {
    method: "get",
    url: `${import.meta.env.VITE_BASE_URL}/${url}`,
    params,
    // headers: {
    //     Authorization: 'Bearer ' + varToken
    //   }
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export const fetchPost = async (url: string, data: string) => {
  const config = {
    method: "get",
    url: `${import.meta.env.VITE_BASE_URL}/${url}`,
    data,
    // headers: {
    //     Authorization: 'Bearer ' + varToken
    //   }
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
