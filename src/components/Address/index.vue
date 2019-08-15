<template>
    <div>
        <el-row>
            <el-col :span="12">
                <el-row :gutter="16">
                    <el-col span="8">
                        <el-select
                            v-model="formData.provinceId"
                            :label-in-value="true"
                            style="width: 100%"
                            placeholder="省份"
                            @on-change="changeActivityProvince"
                        >
                            <el-option
                                v-for="i in provinceList"
                                :key="i.id"
                                :value="i.id"
                            >{{ i.provinceName }}</el-option>
                        </el-select>
                    </el-col>

                    <el-col span="8">
                        <el-select
                            v-model="formData.cityId"
                            :label-in-value="true"
                            style="width: 100%"
                            placeholder="城市"
                            @on-change="changeActivityCity"
                        >
                            <el-option
                                v-for="i in cityList"
                                :key="i.id"
                                :value="i.id"
                            >{{ i.cityName }}</el-option>
                        </el-select>
                    </el-col>

                    <el-col span="8">
                        <el-select
                            v-model="formData.areaId"
                            :label-in-value="true"
                            style="width: 100%"
                            placeholder="区"
                            @on-change="changeActivityArea"
                        >
                            <el-option
                                v-for="i in areaList"
                                :key="i.id"
                                :value="i.id"
                            >{{ i.areaName }}</el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="12">
                <el-input v-model="formData.addressDetail" placeholder="详细地址"/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    /* methods: {
    // 获取省份
    getProvinceFun() {
      const form = {
        pageNum: '1',
        pageSize: '1000'
      }
      baseProvinceList(form)
        .then(res => {
          const data = res.data
          if (data.result === '0') {
            this.provinceList = data.context.list
          } else {
            // console.log(data.message)
          }
        })
        .catch(err => {
          // console.log(err)
        })
    },

    // 获取市
    getCityFun(type) {
      const form = {
        provinceId: this.formData.provinceId,
        pageNum: '1',
        pageSize: '1000'
      }
      baseCityList(form)
        .then(res => {
          const data = res.data
          if (data.result === '0') {
            this.cityList = data.context.list
          } else {
            // console.log(data.message)
          }
        })
        .catch(err => {
          // console.log(err)
        })
    },

    // 获取区
    getAreaFun(type) {
      const form = {
        cityId: this.formData.cityId,
        pageNum: '1',
        pageSize: '1000'
      }
      baseDistrictList(form)
        .then(res => {
          const data = res.data
          if (data.result === '0') {
            this.areaList = data.context.list
          } else {
            // console.log(data.message)
          }
        })
        .catch(err => {
          // console.log(err)
        })
    },
    // 改变所在城市省份
    changeActivityProvince(e) {
      this.formData.provinceId = e.value
      this.formData.provinceName = e.label
      this.getCityFun()
      this.searchAddr()
    },

    // 改变活动地点城市
    changeActivityCity(e) {
      this.formData.cityId = e.value
      this.formData.cityName = e.label
      this.getAreaFun()
      this.searchAddr()
    },

    // 改变活动地点区域
    changeActivityArea(e) {
      this.formData.areaId = e.value
      this.formData.areaName = e.label
      this.searchAddr()
    },
  } */
}
</script>
