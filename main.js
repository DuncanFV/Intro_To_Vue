const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'Wear on feet',
            selectedVariant: 0,
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            //inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: false},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false},
            ],
            sizes: ['Small', 'Medium', 'Large']
        }
    },
    
    methods: {
        addToCart() {
            this.cart += 1
            //inventory -= 1 //doesn't work
        },

        removeFromCart() {
            this.cart -= 1
            //inventory += 1
        },

        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSaleDisplay() {   //currently both set to false so it won't show
            if (this.variants[this.selectedVariant].onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
})
