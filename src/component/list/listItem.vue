<template>
  <div :class="[{martop: isMarTop}, 'listitem']">
    <ul>
      <li v-for="item in items">
        <icon :href="item.left_icon" size="30"></icon>
        <p>
          {{item.message}}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
  console.log('listitem.vue')
  export default {
    props: {
      items: {
        type: Array,
        require: true
      },
      isMarTop: {
        type: Boolean,
        require: false,
        default: false
      }
    }
  }
</script>