<template>
    <div>
        <h2>BABA有存款: {{ money }}</h2>
        <button @click="borrowFromSon(100)">找儿子借钱100</button><br />
        <button @click="borrowFromDaughter(150)">找女儿借钱150</button><br />
        <button @click="borrowFromAll(200)">找所有孩子借钱200</button><br />

        <br />
        <Son ref="son" />

        <br />
        <Daughter ref="daughter" />
    </div>
</template>

<script>
import Son from "./Son";
import Daughter from "./Daughter";

export default {
    name: "ChildrenParentTest",
    data() {
        return {
            money: 1000,
        };
    },

    methods: {
        borrowFromSon(money) {
            this.money += money; //父亲加
            this.$refs.son.money -= money; //小明减
        },
        borrowFromDaughter(money) {
            this.money += money; //父亲加
            this.$refs.daughter.money -= money; //小明减
        },
        borrowFromAll(money) {
            this.money += money * 2;
            this.$children.forEach((vc) => (vc.money -= money));
            console.log(this);
        },
    },

    components: {
        Son,
        Daughter,
    },
};
</script>

<style>
</style>
