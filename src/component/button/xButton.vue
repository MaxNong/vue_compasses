<template>
  <div :class="'submit-button ' + parentClass">
    <input type="button" :value="value" @click="handleClick" :class="btnClass">
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        required: true,
        default: '按钮'
      },
      action: {
        type: String,
        default: ''
      },
      trackName: {
        type: String,
        default: ''
      },
      btnClass: {
        type: String,
        default: ''
      },
      parentClass: {
        type: String,
        default: ''
      },
      valid: {
        type: String,
        default: '1'
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', this.action, event)
      }
    }
  }
</script>
