<template>
  <div class="header">
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router="true"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" route="/">首页</el-menu-item>
        <el-submenu index="2">
            <template #title>demo</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template #title>选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4" route="/about">关于</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';

export default defineComponent ({
  name: 'MyHeader',
  components: {

  },
  setup() {
    const activeIndex = ref('1');
    const activeIndex2 = ref('1');

    const handleSelect = (key, keyPath) => {
        console.log(key, keyPath);
    };
    
    return {
        activeIndex,
        activeIndex2,
        handleSelect,
    }
  }
})
</script>

<style lang="scss" scoped>
$backgroud_color: #545c64;
.header {
  background: $backgroud_color;
}
.el-menu {
  display: flex;
  justify-content: center;
}
</style>