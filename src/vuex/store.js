import Vue from 'vue'
import Vuex from 'vuex'
import { login, home } from '../utils/http'

Vue.use(Vuex)
const state = {
  
}
const mutations = {
  
}
const actions = {
  updata ({commit}, {fadeData, notify}) {
    login(fadeData)
    .then(res => {
      if (res.success == 0) {
        window.localStorage.setItem('token', res.token)
        window.localStorage.setItem('user', fadeData.username)
        notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success',
          duration: 500
        })
      } else {
        notify({
          title: '失败',
          message: '这是一条失败的提示消息',
          type: 'err',
          duration: 500
        })
      }
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
