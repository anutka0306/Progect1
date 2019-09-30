const singleProduct = {
  props:['prodId'],
  data(){
    return{
      products: [],
      filtered: [],
      singleProduct:{},
      productId: this.prodId,
      productUrl: '/product/',
    }
  },

  methods:{

  },

  mounted(){
  this.$parent.getJson('/api/products')
  .then(data => {
    for(let el of data){
      this.products.push(el);
      this. filtered.push(el);
      if(el.id_product == this.productId){
        console.log(el.id_product);
        this.singleProduct = el;
      }
    }
  });
  },

  template: `
  <div>
  <div class="page-title__block">
      <div class="container page__title">
          <h1 class="page-title__h1">{{this.singleProduct.product_name}}</h1>
          <div class="breadcrumbs">
              <a href="/" class="breadcrumbs__item">Home</a> / <a href="/catalog" class="breadcrumbs__item">Men</a> / <a href="#" class="breadcrumbs__item_active">{{this.singleProduct.product_name}}</a>
          </div>
      </div>
  </div>

  <div class="product-slider__block">
      <img src="../img/arrow-left.png" alt="" class="product-slider__arrow">
      <img src="../img/single-product-img.jpg" alt="" class="product-slider__image">
      <img src="../img/arrow-right.png" alt="" class="product-slider__arrow">
  </div>

  <div class="product-description container">
      <div class="product-description__content">
          <hgroup class="product-description__title">
              <h3 class="product-description__h3">WOMEN COLLECTION</h3>
              <h4 class="product-description__h4">Moschino Cheap And Chic</h4>
          </hgroup>
          <p class="product-description__text">
              Compellingly actualize fully researched processes before proactive outsourcing.
              Progressively syndicate collaborative architectures before cutting-edge services.
              Completely visualize parallel core competencies rather than exceptional portals.
          </p>
          <div class="product-description__params">
              <p class="product-description__param-name">MATERIAL: <span class="product-description__param-value">COTTON</span></p>
              <p class="product-description__param-name">DESIGNER: <span class="product-description__param-value">BINBURHAN</span></p>
          </div>
          <div class="product-description__price" style="width:100px">$ {{this.singleProduct.price}}</div>
      </div>
      <form action="" name="product-description__options" class="product-description__options">
          <div class="product-description__options-container">
              <label class="product-description__option-name">CHOOSE COLOR<input
                  type="color" name="" class="product-description__option" value="#ef5b70"></label>
              <label class="product-description__option-name">CHOOSE SIZE
                  <select class="product-description__option" placeholder="XXS">

                          <option value="xxs">XXS</option>
                          <option value="xs">XS</option>
                          <option value="s">S</option>
                          <option value="m">M</option>
                          <option value="l">L</option>
                          <option value="xl">XL</option>
                          <option value="xxl">XXL</option>

                  </select>
              </label>
              <label class="product-description__option-name">QUANTITY<input
                  type="number" value="2" class="product-description__option"></label>
          </div>
          <a class="product-description__button" style="cursor:pointer" value="Add to Cart" @click="$root.$refs.cart.addProduct(singleProduct)">
              <img class="product-description__cart-img" src="../img/cart-pink.svg" alt="cart"> Add to Cart
          </a>
      </form>
  </div>

  <div class="additional-looks container">
      <h3 class="additional-looks__title">you may like also</h3>
      <div class="additional-looks__content flex-between">

          <div class="additional-looks__item" v-for="item of products"
          :key="item.id_product">
              <div class="additional-looks__img"> <img src="../img/look3.jpg" alt=""></div>
              <a :href="productUrl + item.id_product"><h4 class="additional-looks__item-title">{{item.product_name}}</h4></a>
              <p class="additional-looks__item-price">{{item.price}}</p>

              <div class="additional-looks_hover">
                  <a href="#">
                      <div class="additional-looks__item-button" @click="$root.$refs.cart.addProduct(item)">
                          <img src="../img/cart-white.svg" alt="add to cart">
                          <p class="additional-looks__item-button-text">Add to Cart</p>
                      </div>
                  </a>
              </div>

          </div>
      </div>
  </div>
</div>
  `
};

export default singleProduct;
