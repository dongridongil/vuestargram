<template>
    <Header :step="step" @follow="step = 3" @stepUp="step++" @publish="publish" />

    <Container :imageUrl="imageUrl" :step="step" :Data="Data" @writeData="updateWrite" />

    <div class="buttonContainer">
        <button class="morebutton" @click="more">더보기</button>
    </div>
    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="upload" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>
</template>

<script>
import Header from './components/Header';
import Container from './components/Container.vue';
import Data from './data.js';
import axios from 'axios';
import { mapState } from 'vuex';

export default {
    name: 'App',
    data() {
        return {
            step: 0,
            Data: Data,
            imageUrl: '',
            writeData: '',
            filterSend: '',
            count: 0,
        };
    },
    mounted() {
        this.emitter.on('filterSend', (filter) => {
            this.filterSend = filter;
        });
    },
    components: { Container: Container, Header: Header },

    computed: {
        // 처음실행하고 값을 간직함 항상 return 이필요함
        // name() {
        //     return this.$store.state.name;
        // },
        // age() {
        //     return this.$store.state.age;
        // },
        /// 위에것들을 한번에 불러오는방법 ...mapState
        ...mapState(['name', 'age', 'likes']),
    },

    methods: {
        updateWrite(data) {
            this.writeData = data;
        },

        upload(e) {
            const file = e.target.files;
            const url = URL.createObjectURL(file[0]);
            this.imageUrl = url;
            this.step++;
        },
        more() {
            axios
                .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
                .then((result) => {
                    this.Data.push(result.data);
                    this.count++;
                })
                .catch(() => {
                    alert('마지막 자료 입니다.');
                });
        },

        publish() {
            let mypost = {
                name: 'Kim dong il',
                userImage: 'https://picsum.photos/100?random=1',
                postImage: this.imageUrl,
                likes: 36,
                date: 'May 15',
                liked: false,
                content: this.writeData,
                filter: this.filterSend,
            };
            this.Data.unshift(mypost);
            this.step = 0;
        },
    },
};
</script>

<style>
.buttonContainer {
    text-align: center;
}
.morebutton {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s ease;
}
.morebutton:hover {
    background-color: #45a049;
}
body {
    margin: 0;
}
ul {
    padding: 5px;
    list-style-type: none;
}
.logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}
.header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
}
.header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
}
.header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    padding-right: 20px;
    cursor: pointer;
    margin-top: 10px;
}
.footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}
.footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
}
.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}
.inputfile {
    display: none;
}
.input-plus {
    cursor: pointer;
}
#app {
    box-sizing: border-box;
    font-family: 'consolas';
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
</style>
