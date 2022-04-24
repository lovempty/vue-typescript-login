import { computed, reactive } from 'vue'
import * as Request from '@/requests'

const state = reactive({
  name: '',
  username: '',
  message: '',
  error: ''
})

const getters = reactive({
  isLoggedIn: computed(() => state.username !== '')
})

const actions = {
  async getUser() {
    const user = await Request.getUser()
    if (user == null) return

    state.name = user.name
    state.username = user.username
  },
  async login(username: string, password: string) {
    const user = await Request.login(username, password)
    if (user == null) {
      state.error = 'Sai thong tin'
      return false
    }

    state.name = user.name
    state.username = username
    state.message = 'Dang nhap thanh cong'
    state.error = ''

    return true
  },
  async logout() {
    state.name = ''
    state.username = ''
  }
}

export default { state, getters, ...actions }
