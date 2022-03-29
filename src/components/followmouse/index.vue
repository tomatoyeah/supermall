<template>
    <div>
        <div class="parent" @mousemove="handler"></div>
        <div class="child" ref="child">:)</div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        handler(event) {
            let child = this.$refs.child;
            let top = event.offsetY - child.offsetHeight / 2;
            let left = event.offsetX - child.offsetWidth / 2;
            child.style.top = top + "px";
            child.style.left = left + "px";
        },
    },
};
</script>

<style scoped>
.parent {
    position: absolute;
    width: 500px;
    height: 500px;
    border: 2px solid black;
}
.child {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: grey;
}
</style>