<template>
  <div class="params" v-if="Object.keys(cparams).length!==0">
    <div class="info">
      <div class="item">{{cparams.info.key}}</div>
      <table>
        <tr v-for="(item,index) in cparams.info.set" :key="index">
          <td style="width: 20% ;text-align: center;">{{item.key}}</td>
          <td style="width: 80% ;">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class="rule">
      <div class="item">
        <p>{{cparams.rule.key}}</p>
        <p class="special">{{cparams.rule.disclaimer}}</p>
      </div>
      <table>
        <tr v-for="(item,index) in cparams.rule.tables[0]" :key="index">
          <td v-for="index in item.length" :key="index">{{item[index-1]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Params',
    props: {
      cparams: {
        type: Object,
        default () {
          return []
        }

      }
    },

  }
</script>

<style scoped>
  .params {
   padding-bottom: 10px;
     border-bottom: 6px solid #ececec;
  }
  .item {
    text-align: center;
    font-size: 17px;
    color: palevioletred;
    margin: 10px;
  }

  table {
    border-collapse: collapse;
    margin: auto;
    width: 90%;
    color: #a2a2a2;

  }

  table tr {
     font-size: 15px;
    height: 35px;
    border-bottom: 1px solid #cccccc;
  }
  .item .special {
    font-size: 10px;
     color: #a2a2a2;
     margin-top: 8px;
     text-align: left;
  }
  .rule table {
    text-align: center;
  }

  table td {}
</style>
