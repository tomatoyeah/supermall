<!--
 * @Description:
 * @Reference: https://www.iconfont.cn/
 * @Date: 2021-11-10
 * @LastEditTime: 2021-11-11
-->
<template>
    <div class="parent">
        <input type="text" placeholder="searchtip" />
        <img
            src="../../assets/img/components/search.png"
            alt=""
        />
    </div>
</template>

<script>
export default {
    props: {
        searchtip: {
            type: String,
            default: "请输入检索内容",
        },
    },
};
</script>

<style lang="scss" scoped>
.parent {
    height: 50px;
    min-width: 50px;
    border-radius: 25px;
    background-color: red;
    // 向左滑动的属性
    text-align: right;      
    // 组件所在位置
    position: absolute;
    right: 100px;
    input {
        width: 0;
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
        background-color: red;
        outline-style: none;
        border: 0px;
        overflow: hidden;
        // 相对父盒子的位置
        position: relative;
        left: 0px;
        top: 23%;
        margin: 0 40px 0 10px;
        // 动画
        transition: width 0.5s;
    }
    input::-webkit-input-placeholder {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8);
    }
    img {
        position: absolute;
        top: 23%;
        right: 12px;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
}
.parent:hover {
    input {
        width: 120px;
        margin-left: 15px;
    }
}
</style>