<template>
    <div class="container">
        <h2>count:
            <span>{{ count }}</span>
        </h2>
        <input type='number' v-model='num' style='width: 50px' />
        <br />
        <button @click="actionIncrease(num)"> + {{ num }} </button>
        <button @click="actionDecrease(num)"> - {{ num }}</button>
        <button @click="actionCountReset"> reset </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            num: 1
        }
    },
    watch: {
        num(value) {
            this.num = parseInt(value);
        }
    },
    computed: {
        ...mapGetters({
            count: 'getCount',
        })
    },
    methods: {
        ...mapActions([
            'actionIncrease',
            'actionDecrease',
            'actionCountReset'
        ]),
        callAction() {
            this.actionIncrease;
        }
    }
}

</script>