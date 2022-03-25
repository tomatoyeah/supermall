<template>
    <div class="parent">
        <button @click="lastPage">上一页</button>
        <button v-if="startAndend.start > 1" @click="gotoPage(1)">1</button>
        <button v-if="startAndend.start > 2">···</button>

        <button
            v-for="(page, index) in 5"
            :key="index"
            :class="{ Nowpage: startAndend.start - 1 + page == pageNo }"
            @click="gotoPage(startAndend.start - 1 + page)"
        >
            {{ startAndend.start - 1 + page }}
        </button>

        <button v-if="startAndend.end < totalPage - 1">···</button>
        <button v-if="startAndend.end < totalPage" @click="gotoPage(totalPage)">
            {{ totalPage }}
        </button>
        <button @click="nextPage">下一页</button>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        // // 当前页数
        // pageNo: {
        //     type: Number,
        //     default: 2,
        // },
        // // 页面容量
        // pageSize: {
        //     type: Number,
        //     default: 3,
        // },
        // // 总数据条数
        // total: {
        //     type: Number,
        //     default: 91,
        // },
        // // 连续页码的数量
        // continueNum: {
        //     type: Number,
        //     default: 5,
        // },
    },
    data() {
        return {
            pageNo: 1,
            total: 91,
            pageSize: 3,
            continueNum: 5,
        };
    },
    computed: {
        // 总页数
        totalPage() {
            return Math.ceil(this.total / this.pageSize);
        },
        // 连续页数的起末
        startAndend() {
            // 解构
            const { pageNo, totalPage, continueNum } = this;
            let start = 0,
                end = 0;
            // 判断连续数量和总页数的大小关系
            if (continueNum >= totalPage) {
                start = 1;
                end = totalPage;
            } else {
                start = pageNo - parseInt(continueNum / 2);
                end = pageNo + parseInt(continueNum / 2);
                // 判断当前页面算出来的值是否在范围内
                if (start < 1) {
                    start = 1;
                    end = continueNum;
                } else if (end > totalPage) {
                    start = totalPage - continueNum + 1;
                    end = totalPage;
                }
            }
            // console.log(start, end);
            return { start, end };
        },
    },
    methods: {
        lastPage() {
            if (this.pageNo > 1) {
                this.pageNo -= 1;
            }
        },
        nextPage() {
            if (this.pageNo < 31) {
                this.pageNo += 1;
            }
        },
        gotoPage(num) {
            this.pageNo = num;
        },
    },
};
</script>

<style lang="scss" scoped>
.parent {
    div {
        display: inline;
    }
    button {
        width: 60px;
        height: 25px;
        background-color: white;
        border: 1px solid grey;
        margin: 1px;
        text-align: center;
    }
    .Nowpage {
        background-color: red;
    }
}
</style>