<template>
    <div class="pagination">



        <!--上一页一直显示:  当前页如果没有上一页就要禁用
        currentPage>1 : 代表一定有上一页;不能禁用 disabled:false
        currentPage<=1 : 代表没有上一页;要禁用 disabled:true-->

        <!--第一页什么时候出现?
            当连续页码数不是从1开始 就该出现
                startEnd.start > 1
         -->

        <!-- ....页什么时候出现?
            当连续页码数的起始页和第一页之间还存在其他页数
                startEnd.start > 2
         -->

        <button :disabled="currentPage<=1" @click="updateCPage(currentPage-1)">上一页</button>
        <button v-if="startEnd.start > 1" @click="updateCPage(1)">1</button>
        <button v-if="startEnd.start > 2" disabled>···</button>

        <!--根据连续页面数&当前页 计算出连续页码的起始页&最终页-->
        <!--在每一次v-for时;都会阿里执行一次v-if-->
        <button v-for="item in totalPage" :class="{active:currentPage===item}"
                v-if="item>=startEnd.start && item<=startEnd.end"
                @click="updateCPage(item)">{{item}}</button>


        <!--下一页一直显示:  当前页如果没有下一页就要禁用
            currentPage>=totalPage : 代表没有下一页;要禁用 disabled:true
            currentPage<totalPage : 代表有下一页;不要禁用 disabled:false-->

        <!--最后页什么时候出现?
            当连续页码数不是以最后一页结束 就该出现
                startEnd.end < totalPage
         -->

        <!-- ....页什么时候出现?
            当连续页码数的最后页和总页数之间还存在其他页数
               totalPage - startEnd.end > 1
               startEnd.end < totalPage -1
         -->
        <button v-if="startEnd.end < totalPage -1" disabled>···</button>
        <button v-if="startEnd.end < totalPage" @click="updateCPage(totalPage)">
            {{totalPage}}
        </button>
        <button :disabled="currentPage>=totalPage"
                @click="updateCPage(currentPage+1)">下一页</button>

        <!--总条数-->
        <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>

<script>
    /*
        1. total,总条数 (外部使用Pagination组件的区域传递进来的数据)
        2. pageSize,每页显示多少条(外部使用Pagination组件的区域传递进来的数据)
        3. totalPage, 根据1,2派生出总页数
        4. lxyms,连续页码数(外部使用Pagination组件的区域传递进来的数据)
        5. currentPage,当前页(内部数据)
        6. startEnd,连续页码的起始页 & 最终页

        7. indexFromWrap: 外部逻辑传入的当前页下标
    */

    export default {
        name: "Pagination",
        // props:["total","pageSize","lxyms","indexFromWrap"],
        props:{
            total:{
                type:Number,
                required:true
            },
            pageSize:{
                type:Number,
                default:5
            },
            lxyms:{
                type:Number,
                default:3
            },
            indexFromWrap:{
                type:Number,
                default:1
            }
        },
        data(){
            return {
                currentPage:this.indexFromWrap
            }
        },
        computed:{
            totalPage(){
                // 总页数 = 总条数 / 每页显示多少条
                return Math.ceil(this.total/this.pageSize);
            },
            startEnd(){
                //规律:
                // 最终页 - 起始页 = 连续页码数 - 1
                // end - start = lxyms -1
                // start = end - lxyms + 1
                // end = start + lxyms - 1

                let {currentPage,lxyms,totalPage} = this;
                let start;
                let end;

                //计算连续页码的起始页
                start = currentPage - Math.floor(lxyms/2)
                //防止start小于1 因为我们最小的也就是第1页
                start < 1 ? start = 1 : ""

                //计算连续页码的结束页
                end = start + lxyms - 1 //(当start小于1 其实在计算end时就已经补位了)
                //防止end大于totalPage 因为我们最大的也就是第totalPage页
                // end > totalPage ? end = totalPage : ""
                if(end > totalPage){
                    end = totalPage;
                    //重新再次计算start;  保证start和end确定完之后;连续页码数还是lxyms
                    start = end - lxyms + 1; //(当end超出 用start进行补位)
                    //页码的总数就小于lxyms
                    //控制双超的情况 start < 1 && end > totalPage
                    start < 1 ? start = 1 : ""//(用start进行补位时 发现总页数没有满足 从而进行修改start 满足start1要处于一个正常值)
                }

                return {start,end}
            }
        },
        methods:{
            updateCPage(currentPage){
                //currentPage < 1 不让变
                //currentPage > totalPage 不让变
                //currentPage === currentPage 不让变
                if(currentPage<1) return;
                if(currentPage>this.totalPage) return;
                if(currentPage===this.currentPage) return;

                this.currentPage = currentPage

                //与外部的父组件进行数据交互;将当前页的信息直接同步给外部父组件
                this.$emit("updateCPage",this.currentPage)
            }
        },
        watch:{
            indexFromWrap:{
                handler(val){
                    this.currentPage = val;
                },
                deep:true,
                immediate:true
            }
        }
    }
</script>

<style lang="less" scoped>
    .pagination {
        display: inline-block;
        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
</style>