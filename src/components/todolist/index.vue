<!--
 * @Description:
 * @Reference: https://www.bilibili.com/video/BV1Zy4y1K7SH?p=70
 * @Date: 2021-11-22
 * @LastEditTime: 2021-11-25
-->
<template>
    <div class="todolist">
        <div class="title">TODO LIST</div>
        <div class="addpart">
            <input
                class="addinput"
                type="text"
                placeholder="新增代办事件~"
                @keyup.enter="AddThing"
                v-model="value"
            />
            <div class="addbutton" @click="AddThing" />
        </div>
        <!-- 代办列表 -->
        <div class="thinglist">
            <div
                class="each"
                :class="selectindex == index ? 'selected' : ''"
                v-for="(item, index) in list"
                :key="index"
                @click="ChosedThing(index)"
            >
                <div
                    class="donebutton"
                    :class="item.done ? 'havedone' : 'notdone'"
                    @click="item.done = !item.done"
                />
                <div class="thing">{{ item.thing }}</div>
                <div
                    class="delete"
                    @click="DeleteThing(index)"
                    v-if="selectindex == index"
                />
            </div>
        </div>
        <!-- 操作栏 -->
        <div class="actionbar">
            <div class="countpart">
                <div
                    class="selectall"
                    :class="selectall ? 'havedone' : 'notdone'"
                    @click="SeclectAllThings"
                />
                <div class="count">
                    已完成{{ havedone }}/全部{{ list.length }}
                </div>
            </div>
            <div class="deletepart">
                <div class="deletebut" @click="DeleteDone" />
                <div class="deletetext">删除已完成代办</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
            // list初始化是从本地存储中去取
            list: JSON.parse(localStorage.getItem("list")) || [],
            selectindex: -1,
        };
    },
    computed: {
        havedone() {
            return this.list.filter((list) => list.done).length;
        },
        selectall() {
            return this.havedone == this.list.length && this.list.length > 0;
        },
    },
    watch: {
        // list一旦修改，就往本地存储一份
        list: {
            // 深度监视
            deep: true,
            handler(value) {
                localStorage.setItem("list", JSON.stringify(value));
            },
        },
    },
    methods: {
        // 新增代办事件
        AddThing() {
            if (this.value) {
                this.list.unshift({ done: false, thing: this.value });
                this.value = "";
            } else {
                alert("代办事件不能为空哦");
            }
        },
        // 选中某一个代办事件
        ChosedThing(index) {
            this.selectindex = index;
        },
        DeleteThing(index) {
            var result = [];
            this.list.forEach((elem, i) => {
                if (i != index) {
                    result.push(elem);
                }
            });
            this.list = result;
        },

        // 全选/反选代办事件
        SeclectAllThings() {
            var bool = !this.selectall;
            this.list.forEach((elem) => {
                elem.done = bool;
            });
        },

        // 删除已完成代办
        DeleteDone() {
            if (confirm("确定要删除吗~")) {
                this.list = this.list.filter((list) => !list.done);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.todolist {
    // width: 100%;
    // height: 100%;
    font-size: 20px;
    .title {
        text-align: center;
        font-size: 30px;
        color: rgba(124, 193, 245, 1);
        margin: 12px;
    }
    .addpart {
        position: relative;
        .addinput {
            width: 95%;
            height: 25px;
            padding: 5px;
            font-size: 17px;
            border-radius: 10px;
            border: 1px solid grey;
            outline: none;
        }
        .addbutton {
            position: absolute;
            right: 20px;
            top: 3px;
            width: 30px;
            height: 30px;
            background: url("../../assets/img/components/todolist/add.png")
                no-repeat;
            background-size: contain;
        }
    }
    .thinglist {
        max-height: 550px;
        overflow: scroll;
        margin: 10px 8px;
        .selected {
            background-color: rgba(206, 232, 250, 0.4);
        }
        .each {
            padding: 5px;
            position: relative;
            border-bottom: 1px solid rgba(128, 128, 128, 0.3);
            transition: all 0.4s;
            div {
                display: inline-block;
            }
            .donebutton {
                width: 30px;
                height: 30px;
                position: relative;
                top: 3px;
                transition: all 0.4s;
            }
            .thing {
                position: relative;
                bottom: 5px;
                left: 5px;
            }
            .delete {
                width: 25px;
                height: 25px;
                position: absolute;
                right: 10px;
                top: 10px;
                background: url("../../assets/img/components/todolist/cancle.png")
                    no-repeat;
                background-size: contain;
            }
        }
    }
    .actionbar {
        width: 90%;
        position: absolute;
        bottom: 0;
        font-size: 18px;
        border-top: 1px solid rgba(128, 128, 128, 0.3);
        display: flex;
        padding: 10px;
        div {
            display: inline-block;
            flex: 1;
        }
        .countpart {
            margin-top: 5px;
            .selectall {
                width: 30px;
                height: 30px;
                display: inline-block;
                transition: all 0.4s;
            }
            .count {
                position: relative;
                bottom: 8px;
            }
        }
        .deletepart {
            .deletebut {
                width: 35px;
                height: 35px;
                background: url("../../assets/img/components/todolist/delete.png")
                    no-repeat;
                background-size: contain;
            }
            .deletetext {
                position: relative;
                bottom: 8px;
            }
        }
    }
    .havedone {
        background: url("../../assets/img/components/todolist/selected.png")
            no-repeat;
        background-size: contain;
    }
    .notdone {
        background: url("../../assets/img/components/todolist/unselect.png")
            no-repeat;
        background-size: contain;
    }
}
</style>