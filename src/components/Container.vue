<template>
    <div>
        <div v-for="(post, i) in $store.state.posts" :key="post.id">
            <Post :Data="post" v-if="step == 0" />
        </div>

        <!-- 필터선택페이지 -->
        <div v-if="step == 1">
            <div :class="`${filterSend} upload-image`" :style="`background-image:url(${imageUrl})`"></div>
            <div class="filters">
                <FilterBox :filter="filter" :imageUrl="imageUrl" v-for="filter in filterData" :key="filter">
                    <span>{{ filter }}</span></FilterBox
                >
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step == 2">
            <div :class="`${filterSend} upload-image`" :style="`background-image:url(${imageUrl})`"></div>
            <div class="write">
                <textarea v-model="writeData" @input="sendWrite" class="write-box">write!</textarea>
            </div>
        </div>

        <!-- 팔로워 페이지 -->
        <div v-if="step == 3">
            <MyPage />
        </div>
    </div>
</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';
import MyPage from './MyPage.vue';

export default {
    name: 'Container',
    data() {
        return {
            writeData: '',
            filterData: [
                'aden',
                '_1977',
                'brannan',
                'brooklyn',
                'clarendon',
                'earlybird',
                'gingham',
                'hudson',
                'inkwell',
                'kelvin',
                'lark',
                'lofi',
                'maven',
                'mayfair',
                'moon',
                'nashville',
                'perpetua',
                'reyes',
                'rise',
                'slumber',
                'stinson',
                'toaster',
                'valencia',
                'walden',
                'willow',
                'xpro2',
            ],
            filterSend: '',
        };
    },
    mounted() {
        this.emitter.on('filterSend', (filter) => {
            this.filterSend = filter;
        });
    },
    components: {
        Post: Post,
        FilterBox: FilterBox,
        MyPage: MyPage,
    },
    methods: {
        sendWrite() {
            this.$emit('writeData', this.writeData);
        },
    },
    props: {
        Data: Array,
        step: Number,
        imageUrl: String,
    },
};
</script>

<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
    background-repeat: no-repeat;
}
.filters {
    overflow-x: scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}
.filters::-webkit-scrollbar {
    height: 5px;
}
.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>
