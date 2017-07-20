<template>
    <div>
        <ul class="list-item">
            <li v-for="item in items">
                <div :class=item.left_icon class="icon-middle"></div>
                <div class="messbox">{{item.message}}</div>
            </li>
        </ul>
    </div>
</template>
<style>

</style>
<script>
  export default {
    props: {
      items: {
        type: Array,
        require: true
      }
    }
  }
</script>