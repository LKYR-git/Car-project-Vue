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
        </div>
        <div class="footer">
                底部
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
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
        }
        .footer{
            width: 100%;
            height: 1rem;
            border-top: 1px solid #ccc;
        }
    }
</style>
