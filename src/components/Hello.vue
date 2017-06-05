<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>live1</li>
      <li>live1</li>
      <li>live1</li>
      <li>live1</li>
      <li>live1</li>
      <li>live1</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '标签列表'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
