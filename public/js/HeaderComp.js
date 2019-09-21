Vue.component('header-el',{
  data(){
    return{

    }
  },
  template:`
  <header class="header">
         <div class="container flex-between">
             <div class="header__item">
                 <a href="/" class="logo">
                     <img class="logo__img" src="../img/logo.png" alt="logo">BRAN<span class="logo_d">D</span>
                 </a>
                 <slot name="filter"></slot>
             </div>
             <div class="header__item">
                 <slot name="cart"></slot>
                 <a href="cart.html" class="button">My account</a>
             </div>
         </div>
     </header>
  `
});
