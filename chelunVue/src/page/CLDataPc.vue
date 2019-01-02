<template>
    <div class="CLPcwrap">
        <div class="header">
            <h2><img src="https://www.chelun.com/static/dist/img/logo-black.png" alt=""></h2>
            <div class="headBtn">
                <span class="menu-btn-1"></span>
                <span class="menu-btn-2"></span>
                <span class="menu-btn-3"></span>
            </div>
        </div>
        <div class="content">
            <div class="bannerCommon">
                <img src="http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png" alt="">
            </div>
            <nav>
                <div class="contentList">
                    <div>分析评论</div>
                    <div>市场趋势</div>
                    <div>研究报告</div>
                </div>
            </nav>
        <div id="myChart" :style="{width: '600px', height: '500px'}"></div>
        </div>
        <div class="footer">
                底部
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
       this.drawLine();
    },
  methods: {
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
        left: '3%',
        right: '4%',
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
        data: ['Nov/17','Jan/18','Mar/18','May/18','Jul/18','Sep/18']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'本田CR-V',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'缤智',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'途观',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'吉利博越',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'冠道',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },{
            name:'奔驰GLA级',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'汉兰达',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'奥迪Q3',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'本田XR-V',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'哈弗H6',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
        });
    }
  }
}
</script>
<style lang="scss"> 
    *{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    html,body,.CLPcwrap{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .CLPcwrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: 1rem;
            background-color: #fff;
            line-height: 40px;
            border-bottom:1px solid #ccc;
            display: flex;
            justify-content:space-between;
            h2{
                position: relative;
                z-index: 100;
                width: 1.2rem;
                height: .38rem;
                margin-left: .3rem;
                margin-top: .29rem;
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            .headBtn{
                position: relative;
                z-index: 100;
                height: 1rem;
                width: 1.1rem;
                span{
                    position: absolute;
                    margin: 0 .3rem;
                    width: .5rem;
                    top: .5rem;
                    height: 2px;
                    background-color: #0099f8;
                    border-radius: 2px;
                    -webkit-transform-origin: 50% 50%;
                    -moz-transform-origin: 50% 50%;
                    -ms-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
                }
                .menu-btn-1{
                    transform: translateY(-.2rem);
                }
                 .menu-btn-3{
                    transform: translateY(.2rem);
                }
            }
        }
        .content{
           flex: 1;
            .bannerCommon{
                width:100%;
                height: auto;
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                } 
            }
            .contentList{
                width: 100%;
                height: 0.8rem;
                display: flex;
                line-height: 0.8rem;
                justify-content:space-between;
                
                div{
                    width: 100%;
                    text-align: center;
                }
            }
        }
        .footer{
            width: 100%;
            height: 1rem;
            border-top: 1px solid #ccc;
        }
    }
</style>
