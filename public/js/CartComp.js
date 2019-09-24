Vue.component('cart',{
  props:['type'],
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
updateCart(cart){
  console.log(cart, cartItem);
  cart.remove(cartItem);
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
  <div>
  <div class="cart__drop__menu" v-if="type === 1">
  <a href="cart.html" alt="cart"><img class="cart__img" src="../img/cart.svg" alt="cart"></a>
      <div class="cart__menu" style="left:-40px">
        <cart-item
        v-for="item of cartItems"
        :key="item.id_product"
        :cart-item="item"
        :img="imgCart"
        :type="type"
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

    <div v-else-if="type === 2">
    <div class="cart__list">
        <div class="cart__item cart__table-titles">
            <div class="cart__product-details">Product Details</div>
            <div class="cart__unite-price">unite Price</div>
            <div class="cart__quantity">Quantity</div>
            <div class="cart__shipping">shipping</div>
            <div class="cart__subtotal-price">Subtotal</div>
            <div class="cart__action_del">ACTION</div>
        </div>

<cart-item
v-for="item of cartItems"
:key="item.id_product"
:cart-item="item"
:img="imgCart"
:type="type"
@remove="remove">
</cart-item>

        <div class="cart__item cart__buttons-block">
            <a href="#" class="cart__clear-button cart__buttons-block-item">clear shopping cart</a>
            <a href="#" class="cart__shopping-button cart__buttons-block-item">continue shoppping</a>
        </div>
        <div class="cart__checkout">
            <div class="cart__delivery cart__checkout-item">
                <h4 class="cart__checkout-title">Shipping Adress</h4>
                <form action="#" class="cart__checkout-form">
                    <input list="countries" placeholder="Bangladesh" class="cart__checkout-form-input">
                    <datalist id="countries">
                        <option value="Bangladesh"></option>
                        <option value="Russia"></option>
                        <option value="Italy"></option>
                        <option value="Spain"></option>
                        <option value="Mexico"></option>
                    </datalist>
                    <input class="cart__checkout-form-input" placeholder="State">
                    <input class="cart__checkout-form-input" placeholder="Postcode/Zip">
                    <button class="cart__checkout-form-button">get a quote</button>
                </form>
            </div>
            <div class="cart__discount cart__checkout-item">
                <h4 class="cart__checkout-title">coupon  discount</h4>
                <p class="cart__checkout-text">Enter your coupon code if you have one</p>
                <form action="#" class="cart__checkout-form">
                    <input class="cart__checkout-form-input" placeholder="State">
                    <button class="cart__checkout-form-button">Apply coupon</button>
                </form>
            </div>
            <div class="cart__total-checkout cart__checkout-item">
                <div class="cart__checkout-price">
                    <p class="cart__checkout-subtotal">Sub total  <span class="cart__checkout-subtotal_span">{{totalSum}}</span> </p>
                    <p class="cart__checkout-grandtotal">GRAND TOTAL <span class="cart__checkout-grandtotal_pink">{{totalSum}}</span></p>
                </div>
                    <button class="cart__grandtotal-button">proceed to checkout</button>

            </div>
        </div>
    </div>
    </div>

    </div>
  `

});

Vue.component('cart-item',{
props:['cartItem', 'img', 'type'],
data(){
  return{
    productUrl: '/product/',
  }
},
 mounted(){
  this.$on('remove', (cartItem) =>{

    let find = this.$root.$refs.cart.cartItems.find(el => el.id_product === cartItem.id_product);
    let find1 = this.$root.$refs.cart2.cartItems.find(el => el.id_product === cartItem.id_product);
    console.log(this.$root.$refs.cart2.cartItems.indexOf(cartItem));
    console.log(this.$root.$refs.cart2.cartItems.indexOf(find1));
    if(this.$parent.$vnode.data.ref == 'cart'){
      if(find1.quantity == 1){
        this.$root.$refs.cart2.cartItems.splice(this.$root.$refs.cart2.cartItems.indexOf(find1),1);
      }else{
      find1.quantity--;
      this.$root.$refs.cart2.totalSum -= cartItem.price;
    }
    }else{
      if(find.quantity == 1){
        this.$root.$refs.cart.cartItems.splice(this.$root.$refs.cart.cartItems.indexOf(find),1);
        this.$root.$refs.cart.totalSum -= cartItem.price;
      }else{
      find.quantity--;
    }
    }

  });
},
template: `<div>
                <div class="cart__menu__item" v-if="type === 1">
                           <img :src="img" alt="good" class="cart__menu__img">
                           <div class="cart__menu__item__description">
                               <a :href="productUrl + cartItem.id_product" class="cart__menu_name">{{cartItem.product_name}}</a>
                               <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                               <div class="cart__item_price">{{cartItem.quantity}}  x   {{cartItem.price}}</div>
                           </div>
                           <a style="cursor:pointer" @click="$emit('remove', cartItem)" class="cart__button_delite"><i class="fas fa-times-circle"></i></a>
                       </div>

                       <div v-else-if="type === 2">
                       <div class="cart__item cart__product">
                           <div class="cart__product-details">
                               <img :src="img" alt="cart good" class="cart__product-details-img">
                               <div class="cart__product-details-content">
                                   <a :href="productUrl + cartItem.id_product"> <h4 class="cart__product-details-title">{{cartItem.product_name}}</h4></a>
                                   <p class="cart__product-details-params"><strong>Color: </strong>Red</p>
                                   <p class="cart__product-details-params"><strong>Size: </strong>Xll</p>
                               </div>
                           </div>
                           <div class="cart__unite-price cart-font">{{cartItem.price}}</div>
                           <div class="cart__quantity"><input type="number" class="cart__quantity-input cart-font" :value="cartItem.quantity"></div>
                           <div class="cart__shipping cart-font">FREE</div>
                           <div class="cart__subtotal-price cart-font">{{cartItem.price * cartItem.quantity}}</div>
                           <div class="cart__action_del"><a style="cursor:pointer" @click="$emit('remove', cartItem)"><i class="fas fa-minus-square cart__icon_del"></i></a></div>
                       </div>
                       </div>

                       </div>`
});
