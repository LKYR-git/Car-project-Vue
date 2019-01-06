<template>
  <div>
        <div id="myChart" :style="{width: '600px', height: '200px'}"></div>
        <div class="contentNav">
            <h6>关注指数排行榜</h6>
            <ul>
                <li v-for="(item,index) in arr1" :key="index">
                    <p><span>{{index}}</span><span>{{item.name}}</span></p>
                    <p>{{item.type}}</p>
                </li>
            </ul>
        </div>
        <div class="contentNav">
            <h6>竞购胜率排行榜</h6>
            <ul>
                <li v-for="(item,index) in arr1" :key="index">
                    <p><span>{{index}}</span><span>{{item.name}}</span></p>
                    <p>{{item.type}}</p>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
     mounted(){
       this.drawLine();
       this.getCarList()
    },
    computed:{
        ...mapState({
            arr:state=>state.PcCar.arr,
            arr1:state=>state.PcCar.arr1,
            number:state=>state.PcCar.number
        })
    },
  methods: {
      ...mapMutations({
        getCarList:'PcCar/getCarList'
      }),
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '关注指数' },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['本田CR-V','缤智','途观','吉利博越','冠道','奔驰GLA级','汉兰达','奥迪Q3','本田XR-V','哈弗H6']
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan/18','','Mar/18','','May/18','','Jul/18','','Sep/18','','Nov/18','',]
            },
            yAxis: {
                type: 'value'
            },
            series: this.arr
        });
    }
  }
    
}
</script>

<style lang="scss">
     
.contentNav {
    width: 100%;
    height: auto;
    h6 {
        text-align: center;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
    }
    ul {
        width: 100%;
        height: auto;
        li {
            width: 100%;
            height: .5rem;
            line-height: .5rem;
            display: flex;
            justify-content: space-between;
            padding: 0 .3rem;
            box-sizing: border-box;
            p:nth-child(1) {
                span {
                    padding: 0 .2rem;
                }
            }
            p:nth-child(2) {
                color: rgb(153, 153, 153);
                font-size: 0.28rem;
            }
        }
    }
}

</style>
