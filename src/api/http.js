/*
 * @Author: gao
 * @Date: 2022-02-18 14:22:45
 * @LastEditTime: 2022-02-18 14:29:08
 */
import axios from "./axios"

const http = {
  getAppIdApi(){
    return axios({
      url: '/active/getAppId',
      method: 'get'
    })
  }
}

export default http