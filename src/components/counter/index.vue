<template>
    <div class="counter">
        <div class="counter__container">
            <span
                :class="{'disabled':count<2 }"
                class="iconfont icon-reduce"
                @click.stop="reduce()"
            ></span>
            <span class="counter__text">{{ count }}</span>
            <span
                class="iconfont icon-add"
                @click.stop="add()"
            ></span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: [Number],
            default() {
                return []
            }
        }
    },
    data() {
        return {
            count: 0
        }
    },
    watch: {
        'value'(a) {
            this.count = Number(a)
        }
    },
    mounted() {
        this.count = Number(this.value)
    },
    methods: {
        add() {
            const me = this
            me.count++
            me.$emit('change', me.count)
            me.$emit('input', me.count)
        },
        reduce() {
            const me = this
            if (this.count > 1) {
                me.count--
                me.$emit('change', me.count)
                me.$emit('input', me.count)
            }
        }
    },
}
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
    @import "~@/styles/gobal-base";
    @import "~@/styles/mixin";
    
    .counter {
        width: 150px;
        display: inline-block;
        .counter__container {
            @include flex(flex-start, center);
            border: 1px solid #CCCCCC;
            border-radius: 2px;
            overflow: hidden;
            & > * {
                @include flex(center, center);
                height: 36px;
            }
        }
        .iconfont {
            display: block;
            cursor: pointer;
            width: 36px;
            color: #666666;
            font-size: 18px;
            @include flex(center,center);
            &.disabled {
                color: #ccc;
                cursor: not-allowed;
                background: #F4F4F4;
            }
        }
        &__text {
            padding: 0 15px;
            width: 76px;
            font-size: 14px;
            color: #333;
            border-right: 1px solid #ccc;
            border-left: 1px solid #ccc;
        }
    }
</style>
