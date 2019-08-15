<template>
    <div class="app-wrapper">
        <div class="main-container">
            <navbar />
            <app-main />
            <com-footer />
        </div>
    </div>
</template>

<script>
import { Navbar, AppMain, ComFooter } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
    name: 'Layout',
    components: {
        Navbar,
        AppMain,
        ComFooter
    },
    mixins: [ResizeMixin],
    computed: {
        device() {
            return this.$store.state.app.device
        }
    },
    methods: {

    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
    /* 主体区域 */
    .app-wrapper {
        @include clearfix;
        position: relative;
        //height: 100%;
        width: 100%;

        .main-container {
            //height: 100%;
            position: relative;
            //background: $c-nav-bg;
            transition: margin-left .28s;
        }
    }

    .drawer-bg {
        background: #fff;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }

</style>
