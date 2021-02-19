app.component('product-display', {
    template: 
   /*html*/
    '<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image">
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <p v-if="inStock">In Stock</p>
            <!-- <p v-else-if="inventory <=10 && inventory>0">Almost Sold Out</p> -->
            <p v-else>Out Of Stock</p>
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
            <!-- <ul> <li v-for="size in sizes">{{ size }}</li> </ul> -->
            <button
              class="button"
              :class="{ disabledButton: !inStock }"
              :disabled="!inStock"
              @click="addToCart">
              Add to Cart
            </button>
            <!-- <button class="button" @click="removeFromCart">Remove from Cart</button> -->
            <p>
              <a :href="url">Mystery Link</a>
            </p>
          </div>
        </div>
      </div>'
})