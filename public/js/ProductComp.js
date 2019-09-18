Vue.component('products',{
  data(){
    return {
      products: [],
      filtered: [],
      imgCatalog: 'https://placehold.it/200x150',
    }
  },

  methods: {
      filter(value){
        let regExp = new RegExp(value, 'i');
        this.filtered = this.products.filter(el => regExp.test(el.product_name));
      }
  },

  mounted(){
    this.$parent.getJson('/api/products')
    .then(data => {
      for(let el of data){
        this.products.push(el);
        this.filtered.push(el);
      }
    });
    //console.log(this);
    console.log(this.filtered);
  },

  template:`<div class="fetured">
  <div class="fetured__title">
     <h3 class="fetured__h3">Fetured Items</h3>
     <p class="fetured__description">Shop for items based on what we featured in this week</p>
  </div>
  <div class="fetured__content container flex-between">
  <product v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item">
  </product>
  </div>
  <div class="fetured__button container">
      <a href="#" class="button">Browse All Product</a>
  </div>
  </div>`

});

Vue.component('product',{
  props:['product','img'],

  data(){
    return{

    };
  },

  template: `
  <div class="fetured__item">
      <div class="fetured__img"> <img :src="img" alt="Some alt"></div>
      <a href="single-product.html"><h4 class="fetured__item__title">{{product.product_name}}</h4></a>
      <p class="fetured__item__price">$ {{product.price}}</p>
         <div class="fetured_hover">
         <a style="cursor:pointer">
             <div class="fetured__item__button">
              <img src="img/cart-white.svg" alt="add to cart">
              <p class="fetured__item__button__text" @click="$root.$refs.cart.addProduct(product)">Add to Cart</p>
             </div>
           </a>
      </div>
  </div>
  `
});
