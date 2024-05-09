import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: "kim",
            age: 20,
            likes: 15,
            likebutton: false,
            more: {}
        }
    },
    mutations: { //state 수정 방법 정의
        setMore(state, data) {
            state.more = data
        },
        nameChange(state) {
            state.name = 'park'
        },
        ageCount(state, data) {
            state.age += data;
        },
        likesCount(state) {
            if (state.likebutton == false) {
                state.likes++;
                state.likebutton = true;
            } else {
                state.likes--;
                state.likebutton = false;
            }


        },

    },
    actions: {
        getData(context) {
            axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a) => {

                context.commit('setMore', a.data)
            })
        }
    }
})

export default store