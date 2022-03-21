<!--
 * @Description:
 * @Reference: https://www.iconfont.cn/
 * @Date: 2021-11-10
 * @LastEditTime: 2021-11-11
-->
<template>
    <div class="box">
        <ul class="box-inner">
            <li>九宫格1</li>
            <li>九宫格2</li>
            <li>九宫格3</li>
            <li>九宫格4</li>
            <li>九宫格5</li>
            <li>九宫格6</li>
            <li>九宫格7</li>
            <li>九宫格8</li>
            <li>九宫格9</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
    // position: relative;
    // width: 500px;
    // height: 500px;
}
.box-inner {
    width: 500px;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
}
.box-inner > li {
    overflow: hidden;
    flex-grow: 1;
    background-color: darkorange;
    text-align: center;
    width: 32%;
    height: 32%;
    // line-height: 200px;
    border: 1px solid black;
}
</style>