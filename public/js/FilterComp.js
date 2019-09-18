Vue.component('filter-el', {
  data(){
    return{
      userSearch: ''
    }
  },

  template:`
  <form action="#" class="header__form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
     <div class="header__browse"><a class="header__browse__link" href="#">Browse</a>
      <div class="browse__menu drop__browse-menu">
      <div class="drop__browse">
          <h3 class="drop__h3">Women</h3>
          <ul class="drop__ul">
           <li><a href="catalog.html" class="drop__link">Dresses</a></li>
           <li><a href="catalog.html" class="drop__link">Tops</a></li>
           <li><a href="catalog.html" class="drop__link">Sweaters/Knits</a></li>
           <li><a href="catalog.html" class="drop__link">Jackets/Coats</a></li>
           <li><a href="catalog.html" class="drop__link">Blazers</a></li>
           <li><a href="catalog.html" class="drop__link">Denim</a></li>
           <li><a href="catalog.html" class="drop__link">Leggings/Pants</a></li>
           <li><a href="catalog.html" class="drop__link">Skirts/Shorts</a></li>
           <li><a href="catalog.html" class="drop__link">Accessories</a></li>
          </ul>
           <h3 class="drop__h3">Women</h3>
          <ul class="drop__ul">
           <li><a href="catalog.html" class="drop__link">Dresses</a></li>
           <li><a href="catalog.html" class="drop__link">Tops</a></li>
           <li><a href="catalog.html" class="drop__link">Sweaters/Knits</a></li>
           <li><a href="catalog.html" class="drop__link">Jackets/Coats</a></li>
          </ul>
      </div>

      </div>
      </div>
      <input v-model="userSearch" class="headerSearch__input" placeholder="Search for Item..." type="text"><button class="headerSearch__btn" type="submit"><i class="fas fa-search"></i></button>
  </form>
  `
});
