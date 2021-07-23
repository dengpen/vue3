<template>
  <el-container>
    <el-header>
      <my-header></my-header>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
import MyHeader from '@/components/MyHeader'

export default {
  name: 'Home',
  components: {
    MyHeader
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.24rem;
}

</style>
