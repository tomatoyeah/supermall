<template>
    <div class="parent">
        <div :class="{ back: active == 1 }" @click="handleClick(1)">
            综合
            <div v-show="active == 1">
                <span v-if="isUp">↑</span>
                <span v-else>↓</span>
            </div>
        </div>
        <div :class="{ back: active == 2 }" @click="handleClick(2)">
            价格
            <div v-show="active == 2">
                <span v-if="isUp">↑</span>
                <span v-else>↓</span>
            </div>
        </div>
        <div>
            <input autocomplete="on"  type="text">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 1,
            isUp: true,
        };
    },
    methods: {
        handleClick(item) {
            if(this.active == item){
                this.isUp = !this.isUp
            }
            else{
                this.isUp = true
            }
            this.active = item
        },
    },
};
</script>

<style scoped>
.parent div {
    width: 100px;
}
.back {
    background-color: aquamarine;
}
</style>