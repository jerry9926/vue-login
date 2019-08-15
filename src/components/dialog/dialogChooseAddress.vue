<template>
    <el-dialog
        :visible.sync="visible"
        class="dialog--choose-address"
        title="地址选择"
        width="680px"
    >
        <div class="list">
            <div class="item">
                <el-row :gutter="10">
                    <el-col class="field"><div class="justify">收货人</div></el-col>
                    <el-col :span="18">郑欣烁</el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col class="field">联系方式</el-col>
                    <el-col :span="18">18813750865</el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col class="field">详细地址</el-col>
                    <el-col :span="18">广州天河福利中心42楼</el-col>
                </el-row>
                <div class="default-tag">默认地址</div>
            </div>
            <div class="item">
                <el-row :gutter="10">
                    <el-col class="field"><div class="justify">收货人</div></el-col>
                    <el-col :span="18">郑欣烁</el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col class="field">联系方式</el-col>
                    <el-col :span="18">18813750865</el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col class="field">详细地址</el-col>
                    <el-col :span="18">广州天河福利中心42楼</el-col>
                </el-row>
                <div class="default-tag">默认地址</div>
            </div>
            <div class="item active">
                <el-row :gutter="10">
                    <el-col class="field"><div class="justify">收货人</div></el-col>
                    <el-col :span="18">郑欣烁</el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col class="field">联系方式</el-col>
                    <el-col :span="18">18813750865</el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col class="field">详细地址</el-col>
                    <el-col :span="18">广州天河福利中心42楼</el-col>
                </el-row>
                <div class="default-tag">默认地址</div>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type size="medium" @click="visible = false">取 消</el-button>
            <el-button type="primary" size="medium" @click="visible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    data() {
        return {
            visible: false
        }
    },
    watch: {
        show(val) {
            this.visible = val
        },
        visible(val) {
            if (this.show === val) return
            this.$emit('update:show', val)
        }
    }
}
</script>
<style lang='scss' rel='stylesheet/scss'>
    @import "~@/styles/gobal-base";
    @import "~@/styles/mixin";
    .dialog--choose-address{
        .el-dialog__body{
            max-height: 360px;
            overflow-y: auto;
            @include scrollBar();
        }
        .item {
            position: relative;
            border: 1px solid #EEEEEE;
            padding: 20px;
            margin: 0 20px;
            & + .item {
                margin-top: 15px;
            }
            &.active{
                border:2px solid rgba(238,107,43,1);
            }
        }
        .el-row {
            line-height: 20px;
            color: #333;
            & + .el-row {
                margin-top: 6px;
            }
        }
        .el-col:nth-child(1) {
            color: #999999;
        }
        .field{
            width: 68px;
        }
        .justify{
            height: 20px;
            width: 100%;
            text-align: justify;
            overflow-y: hidden;
            &:after{
                content: '';
                display: inline-block;
                width: 100%;
            }
        }
        .default-tag{
            position: absolute;
            top: 15px;
            right: 15px;
            height: 24px;
            width: 68px;
            background:rgba(244,244,244,1);
            @include flex(center,center);
            color: #999;
            font-size: 12px;
        }
    }
</style>
