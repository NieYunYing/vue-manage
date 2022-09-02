<!--
 * @Author: NYY
 * @Date: 2022-08-31 10:55:52
 * @LastEditTime: 2022-08-31 16:22:29
 * @LastEditors: NYY
 * @Description: 
-->
<template>
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <el-form-item
      v-for="item in fromLabel"
      :key="item.label"
      :label="item.label"
    >
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="from[item.model]"
      >
        <el-switch
          v-if="item.type === 'switch'"
          v-model="from[item.model]"
        ></el-switch>
        <el-date-picker
          v-if="item.type === 'data'"
          type="data"
          value-format="yyyy-MM-dd"
          :placeholder="'选择日期'"
          v-model="from[item.model]"
        ></el-date-picker>
        <el-select v-if="item.type === 'select'" :placeholder="'请选择'" v-model="from[item.model]">
          <el-option
            v-for="item in item.opts"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-input>
    </el-form-item>
    <el-form-item label="label">
      <slot></slot>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "CommonForm",
  props: {
    fromLabel: Array,
    form: Object,
    inline: Boolean
  },
  data() {}
};
</script>
