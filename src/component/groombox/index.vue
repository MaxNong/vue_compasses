<template>
    <div>
        <div v-for="item in items" class="groombox">
            <div class="groom-title">
                <span class="icon-montant blockspan"></span>
                <span>{{item.title}}</span>
                <span>&nbsp;</span>
            </div>
            <ul>
                <li v-for="list in item.content" class="musbox">
                    <i :class="list.img"></i>
                    <span>{{list.text}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>

</style>
<script>
  import contentCon from '../../constants/contentCon'
  export default {
    data(){
      return {
        items: contentCon.musboxdetail
      }
    }
  }
</script>