<template>
    <div>
        <div class="cardList">
            <el-row>
                <el-col 
                    v-for="item in goodsData" 
                    :key="item.contentId" 
                    class="cardList-item" 
                    @click.native="linkTo(item.contentId)"
                >
                    <div class="hot">
                        <img src="../../assets/images/corner-tag-hot.png"/>
                    </div>
                    <img :src="item.pic" />
                    <div class="info">
                        <p class="name">{{ item.contentName }}</p>
                        <p class="nprice">{{ item.minPrice }}</p>
                        <el-tag type="info" class="oprice">{{ item.minReferencePrice }}</el-tag>
                    </div>
                </el-col>
            </el-row>
        </div>
        <template v-if="isPagination">
            <el-pagination
                :total="totalPageSize"
                :page-size="pageSize"
                background
                layout="prev, pager, next, total, jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            ></el-pagination>
        </template>
    </div>
</template>

<script>

export default {
    props: {
        //商品数据
        goodsData:{
            type: Array,
            default() {
                return []
            }
        },
        //总页数
        totalPageSize: {
            type: Number,
            default: 0
        },
        //当前页数
        pageSize:{
            type: Number,
            default: 0
        },
        isBanner:{
            type: Boolean,
            default: false
        },
        isPagination:{
            type: Boolean,
            default: false
        },
        handleSizeChange:{
            type: Function,
            default() {
                return function(){}
            }
        },
        handleCurrentChange:{
            type: Function,
            default() {
                return function(){}
            }
        },
    },
    data(){
        return{
        }
    },
    methods:{
        linkTo(id){
            this.$router.push({
                name: 'GoodsDetail',
                id: id
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>