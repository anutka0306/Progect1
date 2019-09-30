Vue.component('catalog-products',{
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

  template:`
<div class="fetured__content flex-between">

  <catalog-product v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item">
  </catalog-product>
  <footer class="fetured__footer">
      <div class="pagination__block">
          <a href="#" class="pagination__item"><</a>
          <a href="#" class="pagination__item pagination__item_active">1</a>
          <a href="#" class="pagination__item">2</a>
          <a href="#" class="pagination__item">3</a>
          <a href="#" class="pagination__item">4</a>
          <a href="#" class="pagination__item">5</a>
          <a href="#" class="pagination__item">6</a>
          <a href="#" class="pagination__item">...</a>
          <a href="#" class="pagination__item">20</a>
          <a href="#" class="pagination__item">></a>
      </div>
          <button class="view-all__button">View All</button>
  </footer>
  </div>`

});

Vue.component('catalog-product',{
  props:['product','img'],

  data(){
    return{
      productUrl: '/product/',
    };
  },

  template: `
  <div class="fetured__item">
      <div class="fetured__img"> <img :src="img" alt=""></div>
      <a :href="productUrl + product.id_product"><h4 class="fetured__item__title">{{product.product_name}}</h4></a>
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
