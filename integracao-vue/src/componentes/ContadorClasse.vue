<template>
    <div>
        <h1>Contador (Classe)</h1>
        <h2>{{ valor }}</h2>
        <button @click="setValor(-1)">Dec</button>
        <button @click="setValor(1)">Inc</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ContadorClasse extends Vue {
    private valor: number = 0;

    public setValor(delta: number) {
        this.valor += delta;
    }
}
</script>

<style>

</style>