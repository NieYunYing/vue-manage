<!--
 * @Author: NYY
 * @Date: 2022-08-29 10:10:50
 * @LastEditTime: 2022-08-29 17:01:34
 * @LastEditors: NYY
 * @Description: 
-->
<template>
  <el-row :gutter="20" class="home">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user" slot="header">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2021-7-19</span></p>
          <p>上次登录地点:<span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin-top:20px;height460px;">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
            width="width"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">¥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 200px"></el-card>
      <div class="graph">
        <el-card style="height: 260px"></el-card>
        <el-card style="height: 260px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import {getMenu} from "../../api/data"
export default {
  name: "home",
  data() {
    return {
      userImg: require("../../assets/images/user.png"),
      tableData: [
        {
          name: "oppo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: "魅族",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        }
      ],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买"
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef"
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-gooods",
          color: "#5ab1ef"
        }
      ]
    };
  },
  mounted() {
    getMenu().then(res=>{
      console.log(res)
    })
  }
};
</script>
<style lang="scss" scoped>
.user {
  display: flex;
  align-content: center;
  img {
    width: 120px;
    height: 120px;
    padding: 0 20px;
  }
  .userinfo {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 0px;
    text-align: center;
    .name {
      font-weight: 1000;
      font-size: 24px;
    }
    .access {
      color: #bdbdbd;
      font-size: 14px;
    }
  }
}
.login-info {
  p {
    color: #999;
    span {
      padding: 0 30px;
    }
  }
}
.num {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .el-card {
    width: 350px;
    height: 100px;
    display: flex;
    i {
      height: 80px;
      width: 80px;
    }
  }
}
.graph {
  display: flex;
  justify-content: space-around;
}
</style>
