import * as types from './mutations_type.js'

export const state = {
    count: 0
}

// mutations
export const mutations = {
    [types.INCREASE] (state, num) {
        state.count += num;
        console.log(state, num);
    },
    [types.DECREASE] (state, num) {
        state.count -= num;
        console.log(state, num);
    },
    [types.COUNT_RESET] (state) {
        state.count = 0;
    }
}