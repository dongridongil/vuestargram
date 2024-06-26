import axios from 'axios';
import { createStore } from 'vuex'
import posts from './data'

const store = createStore({
    state() {
        return {
            name: "kim",
            age: 20,
            likes: [15, 20, 36],
            likebutton: false,
            more: {},
            posts: posts,
            count: 0
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
        incrementLikes(state, postId) {
            const post = state.posts.find(p => p.id === postId)
            if (post) {
                post.likes++;
                post.liked = true;
            }
        },
        decrementLikes(state, postId) {
            const post = state.posts.find(p => p.id === postId)
            if (post) {
                post.likes--;
                post.liked = false;
            }

        }

    },
    actions: {
        getData(context) {
            axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a) => {

                context.commit('setMore', a.data)
            })
        }
        ,
        likePost(context, postId) {
            context.commit('incrementLikes', postId)
        },
        unlikePost({ commit }, postId) {
            commit('decrementLikes', postId)

        }
    },


})

export default store