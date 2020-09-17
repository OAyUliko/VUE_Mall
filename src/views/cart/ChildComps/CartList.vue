<template>
  <div class="cartlist">
    <CartListItem v-for="(item,index) in cCarLists" :caritem='item'></CartListItem>

  </div>
</template>

<script>
  import CartListItem from './CartListItem.vue'
  export default {
    name: 'CartList',
    props: {
      cCarLists: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      CartListItem
    },


  }
</script>

<style>

</style>
