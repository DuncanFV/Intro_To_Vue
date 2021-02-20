app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

    template: 
   /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image">
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out Of Stock</p>

            <p>Shipping: {{ shipping }}</p>
            <p>{{ onSaleDisplay }}</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
            
            <div 
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color }">
            </div>

            <button
              class="button"
              :class="{ disabledButton: !inStock }"
              :disabled="!inStock"
              @click="addToCart">
              Add to Cart
            </button>

            <button 
              class="button"
              :class="{ disabledButton: !inStock }"
              :disabled="!inStock"
              @click="deleteCart">
              Remove Item
            </button>

            <p>
              <a :href="url">Mystery Link</a>
            </p>
          </div>
        </div>
        <review-list v-if="reviews.length":reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
      </div>`,


      data() {
        return {
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
            sizes: ['Small', 'Medium', 'Large'],
            reviews: []
        }
    },
    
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },

        deleteCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },

        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
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
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return '$2.99'
        }
    }
})