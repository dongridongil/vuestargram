<template>
    <div class="header">
        <ul class="header-button-left">
            <li @click="goBack">Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li v-if="step == 0" @click="$emit('follow', step)">Follow</li>
            <li v-if="step == 1" @click="$emit('stepUp', step)">글쓰기</li>
            <li v-if="step == 2" @click="$emit('publish')">완료</li>
        </ul>
        <img src="../assets/logo.png" class="logo" />
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        step: Number,
    },
    methods: {
        goBack() {
            window.location.reload();
        },
    },
};
</script>
<style></style>
