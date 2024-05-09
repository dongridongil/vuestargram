<template>
    <div @click="fire(filter)" :class="filter + ' filter-item'" :style="`background-image:url(${imageUrl})`">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'FilterBox',
    methods: {
        fire(filter) {
            //이벤트 발사
            this.emitter.emit('filterSend', filter);
        },
    },
    props: {
        imageUrl: String,
        filter: String,
    },
};
</script>
<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 500;
    background-size: cover;
    background-position: center;
}
</style>
