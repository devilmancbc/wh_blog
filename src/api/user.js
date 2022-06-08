import request from 'utils/request'

/**
 * 
 * @param {String} telephonee 
 * @param {String} password 
 */
const login = async ({ telephonee, password }) => {
    return await request({
      method: "post",
      url: "/authorizations",
      data: {
        mobile: telephonee,
        code:password
      }
    });
  };

  /**
   * 获取用户信息
   */
export const getUserProfile = () => {
    return request({
      method: "get",
      url: "/user/profile",
      
    });
  };
  
  export default login;