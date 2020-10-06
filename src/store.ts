import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

Vue.use(Vuex)

export type RootState = {
}


const defaultAccessPromise = () => {

}

export const state: RootState = {
}

const getters = {
}

export const mutations = {
}

const store: StoreOptions<RootState> = {
}

export default new Vuex.Store<RootState>(store)
