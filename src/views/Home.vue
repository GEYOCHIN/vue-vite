<!--
 * @Author: gao
 * @LastEditTime: 2022-02-18 14:44:44
-->
<template>
  <div class="font">首页</div>
  <div class="index">
    <div class="index-a"></div>
  </div>
  <img src="../assets/logo.png" alt="" srcset="">
</template>

<script setup>
import { Toast } from 'vant'
import {onMounted, ref} from 'vue'
import $http from '../api/http'

const name = ref('我不是小强')

// 写法一
// const getAppId = ()=>{
//   $http.getAppIdApi().then((res)=>{
//     console.log(res)
//   })
// }
// 写法二
const getAppId = async()=>{
  let res = await $http.getAppIdApi()
  // console.log(res)
}

onMounted(()=>{
  console.log('我是小强')
  Toast(name.value)
  getAppId()
})
</script>

<style lang="less" scoped>
.index{
  width: 375px;
  height: 400px;
  background: red;
  .index-a{
    width: 200px;
    height: 99px;
    background: green;
  }
}
.font{
  font-size: 32px;
}
</style>