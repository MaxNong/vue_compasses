<template>
    <div>
        <div @click="showHideList()" class="toptrans">
            <div class="flo-left midpic">
                <i :class="[upDown ? 'icon-up' : 'icon-down']"></i>
            </div>
            <span>{{title}}</span>
            <div class="flo-right midpic">
                <img src="../../assets/images/set.png" alt="">
            </div>
        </div>
        <listitem :showHide="showHide" :items="items"></listitem>
    </div>
</template>
<style>

</style>
<script>
    import listitem from '../../component/list/list-item.vue'
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            items: {
                type: Array,
                default: []
            }
        },
        data () {
            return {
                showHide: true,
                upDown: false
            }
        },
        components: {listitem},
        methods: {
            showHideList: function () {
                this.showHide = !this.showHide
                this.upDown = !this.upDown
            }
        }
    }
</script>