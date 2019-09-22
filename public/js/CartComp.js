Vue.component('cart',{
  data(){
    return{
      imgCart: 'https://placehold.it/50x100',
      cartUrl: '/getBasket.json',
      cartItems: [],
      totalSum: 0,
    }
  },

  methods: {
    addProduct(product){
      let find = this.cartItems.find(el => el.id_product === product.id_product);
      if(find){
        this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
        find.quantity++;
        this.totalSum += find.price;
      }else{
        let prod = Object.assign({quantity: 1}, product);
        this.$root.postJson('/api/cart', prod)
        .then(data =>{
          if(data.result === 1){
            this.cartItems.push(prod);
          }
        });
        this.totalSum += prod.price;
      }

      //console.log(find);
    },

remove(cartItem){
  //console.log(cartItem);
  let find = this.cartItems.find(el => el.id_product === cartItem.id_product);
  this.$root.deleteJson(`/api/cart/${find.id_product}`, {quantity: 1});
  if(cartItem.quantity == 1){
    this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    this.totalSum -= cartItem.price;
  }else{
  cartItem.quantity--;
  this.totalSum -= cartItem.price;
}
},


  },

  mounted(){
    //this.$parent.getJson(`${API + this.cartUrl}`)
    this.$root.getJson(`/api/cart`)
    .then(data => {
      for(let el of data.contents){
        this.cartItems.push(el);
        this.totalSum += el.price * el.quantity;
      }
    });

    //console.log(typeof(this.cartItems));
    console.log(this.cartItems);
  },

  template: `
  <div class="cart__drop__menu"><a href="cart.html" alt="cart"><img class="cart__img" src="../img/cart.svg" alt="cart"></a>
      <div class="cart__menu" style="left:-40px">
        <cart-item
        v-for="item of cartItems"
        :key="item.id_product"
        :cart-item="item"
        :img="imgCart"
        @remove="remove">
        </cart-item>
        <div class="cart_total-price">
                       <p>TOTAL	</p>
                        <p>$ {{totalSum}}</p>
                       </div>
                       <a href="checkout.html"><button class="cart__button_checkout">
                           Checkout
                       </button></a>
                       <a href="/cart"><button class="cart__button_go-to-cart">
                           go to cart
                       </button></a>
      </div>
    </div>
  `

});

Vue.component('cart-item',{
props:['cartItem', 'img'],
template: `<div class="cart__menu__item">
                           <img :src="img" alt="good" class="cart__menu__img">
                           <div class="cart__menu__item__description">
                               <a href="single-product.html" class="cart__menu_name">{{cartItem.product_name}}</a>
                               <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                               <div class="cart__item_price">{{cartItem.quantity}}  x   {{cartItem.price}}</div>
                           </div>
                           <a style="cursor:pointer" @click="$emit('remove', cartItem)" class="cart__button_delite"><i class="fas fa-times-circle"></i></a>
                       </div>`
});
