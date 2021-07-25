<template>
    <div class="pagination">
        <button :disabled="currentPageNo === 1" @click="$emit('changePageNo',currentPageNo-1)">上一页</button>
        <button v-if='startEnd.start > 1' @click="$emit('changePageNo',1)">1</button>
        <button v-if='startEnd.start > 2'>···</button>

        <button v-for="page in pageArr" :key="page" :class='{active:currentPageNo===page}' @click="$emit('changePageNo',page)">{{page}}</button>

        <button v-if='startEnd.end < totalPageNo-1'>···</button>
        <button v-if='startEnd.end < totalPageNo'  @click="$emit('changePageNo',totalPageNo)">{{ totalPageNo }}</button>
        <button :disabled="currentPageNo === totalPageNo" @click="$emit('changePageNo',currentPageNo+1)">下一页</button>

        <button style="margin-left: 30px" >共 {{ total }} 条</button>
    </div>
</template>

<script>
import range  from 'lodash/range'
export default {
    name: "Pagination",
    props: ["currentPageNo", "total", "pageSize", "continueNo"],
    computed: {
        // 计算总页码
        totalPageNo() {
            return Math.ceil(this.total / this.pageSize);
        },
        // 计算连续页起始位置和结束位置
        startEnd() {
            let { continueNo, currentPageNo, totalPageNo } = this;
            let start, end;
            if (continueNo >= totalPageNo) {
                // 传递的连续页数比页码打，没有那么多连续页
                start = 1;
                end = totalPageNo;
            } else {
                // 正常情况
                start = currentPageNo - Math.floor(continueNo / 2);
                end = currentPageNo + Math.floor(continueNo / 2);

                // 非正常情况
                if (start <= 0) {
                    start = 1;
                    end = continueNo;
                }
                if (end > totalPageNo) {
                    start = totalPageNo - continueNo + 1;
                    end = totalPageNo;
                }
            }
            return { start, end };
        },
        pageArr(){
            let { start, end } = this.startEnd
            return range(start,end+1)
        }
    },
};
</script>

<style lang="less" scoped>
.pagination {
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
            background-color: #e1251b;
            color: #fff;
        }
    }
}
</style>
