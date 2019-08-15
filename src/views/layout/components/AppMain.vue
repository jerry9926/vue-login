<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <!-- or name="fade" -->
            <!-- <router-view :key="key"></router-view> -->
            <router-view />
        </transition>
    </section>
</template>

<script>
export default {
    name: 'AppMain',
    computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
    },
    updated() {
        // 滚动到顶
        const mainDom = document.querySelector('.app-main')
        if (mainDom) {
            mainDom.scrollTop = 0
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app-main {
        margin: 0 auto;
        width: 1200px;
        position: relative;
        padding-bottom: 309px;
        background: #FFF;
        //overflow-y: auto;
        //overflow-x: hidden;
        @include scrollBar;
    }
</style>
