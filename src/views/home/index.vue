<template>
    <div class="home">
        <el-backtop target=".home"></el-backtop>
        <div class="header-banner">
            <img :src="adImg" />
        </div>
       
    </div>
</template>

<script>
export default {
    components:{
    },
    data() {
        return {
            adImg: "",
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    height: 100%;
    .header-banner {
        width: 100%;
        height: 420px;
        background: #000;
    }
}
</style>

