<template>
    <div class="footer">
        <div class="top">
            <el-row>
                <el-col :span="20" class="top-img">
                    <img
                        src="../../../assets/images/logo-w.png"
                        style="width: 177px;"
                    />
                </el-col>
                <el-col :span="4" class="top-text opacity">服务热线（9:00-18:00）</el-col>
            </el-row>
            <el-row class="top-phone">
                <span>400-600-1017</span>
            </el-row>
            <el-row class="top-link">
                <el-col :span="2" class="opacity">关于我们</el-col>
                <el-col :span="2" class="opacity">商品中心</el-col>
                <el-col :span="2" class="opacity">服务中心</el-col>
            </el-row>
        </div>
        <div class="bottom">
            <el-row class="opacity">增值电信业务经营许可证：京xxx-xxx</el-row>
            <el-row class="opacity">京ICP备：xxx-xxx 中国社</el-row>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
    position: relative;
    clear:both;
    min-width: 1200px;
    width: 100%;
    width: 100%;
    height: 234px;
    background: #333333;
    font-size: 10px;
    color: #ffffff;
    .opacity {
        opacity: 0.5;
    }
    .top {
        width: 70%;
        height: 60%;
        margin: 0 auto;
        padding-top: 32px;
        border-bottom: 1px solid #3c3c3c;
        &-img {
            img {
                margin-right: 27px;
            }
        }
        &-text {
            text-align: right;
        }
        &-phone {
            padding: 18px 0;
            text-align: right;
            font-size: 16px;
            text-align: right;
        }
        &-link {
            cursor: pointer;
        }
    }
    .bottom {
        width: 50%;
        margin: 0 auto;
        text-align: center;
        padding: 22px 0;
        .el-row {
            margin-bottom: 8px;
        }
    }
}
</style>


