<!--
 * @Description:
 * @Reference: 
 * @Date: 2022-3-23
-->
<template>
    <div class="parent">
        <div class="mycharts" ref="myChart"></div>
        <div class="inputnew">
            输入今天的数据：
            <input type="text" v-model="value" />
            <button @click="addRest">ok</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: [
                "2-14",
                "2-17",
                "2-22",
                "2-25",
                "2-28",
                "3-7",
                "3-11",
                "3-17",
                "3-21",
            ],
            rest: [521, 519, 514, 508, 504, 495, 480, 464, 459],
            value: null,
            chart: null,
        };
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            this.chart = this.$echarts.init(this.$refs.myChart);
            // 绘制图表
            this.chart.setOption({
                title: {
                    text: "远洋万和剩余量",
                    left: "5%",
                },
                tooltip: { trigger: "axis" },
                legend: {
                    data: ["剩余量", "总量"],
                    right: "5%",
                },
                grid: {
                    left: "5%",
                    right: "6%",
                    bottom: "10%",
                    containLabel: true,
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: this.date,
                    axisLine: { lineStyle: { color: "#999", width: 0.1 } },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#999",
                            width: 0.1,
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    axisLine: { lineStyle: { color: "#999", width: 0.1 } },
                },
                series: [
                    {
                        name: "剩余量",
                        type: "line",
                        smooth: true,
                        data: this.rest,
                        areaStyle: {
                            color: "rgb(237,252,245)",
                        },
                        label: { show: true },
                        itemStyle: {
                            color: "#53e59d",
                        },
                    },
                    {
                        name: "总量",
                        type: "line",
                        data: [1488],
                        areaStyle: {
                            color: "rgb(220,247,245)",
                        },
                        smooth: true,
                        label: { show: true },
                        itemStyle: {
                            color: "#43c4fd",
                        },
                    },
                ],
            });
        },
        addRest() {
            let date = new Date();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let datex = month + "-" + day;
            if (this.date.indexOf(datex) == -1 && Number(this.value) > 0) {
                this.date.push(datex);
                this.rest.push(Number(this.value));
                // 销毁旧的echarts实例 新建新的实例
                this.chart.dispose();
                this.drawLine();
            } else {
                alert('请输入有效的日期和数据')
            }
        },
    },
};
</script>

<style scoped>
.mycharts {
    width: 700px;
    height: 500px;
}
.inputnew{
    margin-left: 50px;
}
</style>