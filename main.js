const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        deleteCart(id) {
            const length = this.cart.indexOf(id)
            if (length > -1) {
                this.cart.splice(length, 1)
            }
        }
    }
})
