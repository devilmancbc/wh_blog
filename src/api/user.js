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
  export default login;