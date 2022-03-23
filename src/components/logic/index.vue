<!--
 * @Description:
 * @Reference: https://www.iconfont.cn/
 * @Date: 2021-11-10
 * @LastEditTime: 2021-11-11
-->
<template>
    <div class="parent">
        <button @click="test4()" >hi</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a:[77,11,33,3,1,5,3,4,12,54],
            b:[1,0,0,0,0,0,1,0,1,0],
            c:'Find the number of consecutive words in the same English string in the KTH row of length'
        }
    },
    methods:{
        // 一个数组均分两组，差值最小
        test() {
            let len = this.a.length
            let n = len/2
            let x = new Array(n)
            let y = new Array(n)
            let i,j
            for (i=0;i<len;i++) {
                if (i<n) {
                    x[i] = this.a[i] 
                } else {
                    y[i-n] = this.a[i]
                }
            }
            console.log(this.a, x, y)
            let diff = 0
            for(i=0;i<n;i++){
                // 算出两个数组的总差值
                diff += x[i]-y[i]   
            }
            console.log('初始化差值', diff)
            for(i=0;i<n;i++){
                for(j=0;j<n;j++){
                    let dv = x[i]-y[j]
                    // console.log(dv)
                    if(dv*(dv-diff)<0) {
                        let temp = x[i]
                        x[i] = y[j]
                        y[j] = temp
                        diff -= 2*dv
                    }
                }
            }
            console.log('遍历之后的差值', diff)
            console.log(x, y)
        },
        // 数组最长连续子序列
        test2() {
            let arr = this.a.sort(function(a,b){return a-b})
            let max = 1
            let final = 1
            let pre = arr[0]
            for(let i=0;i<arr.length;i++){
                if(pre == arr[i]-1) {
                    pre = arr[i]
                    max++
                }else if(pre < arr[i]-1) {
                    pre = arr[i]
                    max = 1
                }
                if(max>final){
                    final = max
                }
            }
            console.log(arr, final)
        },
        // 停车位问题
        test3() {
            let arry = this.b
            let num = 0
            let max = 0
            for(let i=0;i<arry.length;i++){
                if(arry[i]==0){
                    num++
                } else {
                    num = 0
                }
                if (max<=num){
                    max = num
                }
            }
            console.log(arry,max-1)
        },
        // 输入一段英文句子。然后输入一个字符串，寻找句子中是以该字符串开头的英文单词。
        // 区分大小写，并且按字典顺序输出 如果没有，则直接输出输入的字符串
        test4(){
            let cp = this.c.toLowerCase()
            let arry = this.c.split('c')
            console.log(cp,arry)
        }
    }
};
</script>

<style lang="scss" scoped>
</style>