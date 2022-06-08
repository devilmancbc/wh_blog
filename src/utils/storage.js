const TOKEN_KEY = "wh_blog_token";

/**
 * 设置token
 * @param {} token
 */
export const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

/**
 * 获取token
 * @returns  token
 */
export const getToken = () => {
 return localStorage.getItem(TOKEN_KEY);
};

/**
 * 移除token
 * @returns {token} token
 */
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

/**
 * 判断是否有token
 * @returns  boolean
 */
export const hasToken = () => {
  return !!getToken();
};
