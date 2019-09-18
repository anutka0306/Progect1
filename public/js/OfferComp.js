Vue.component('offer-el', {
  data(){
return{

}
  },

  template: `
  <div class="offer container flex-between">
      <div class="offer__content">

         <a href="catalog.html" class="offer__item offer__item_big">
             <div class="offer__lable">
                 <h3 class="offer__h3">hOT dEAL</h3>
                 <h4 class="offer__h4">FOR MEN</h4>
             </div>
          </a>
          <a href="catalog.html" class="offer__item offer__item_mini">
              <div class="offer__lable">
                 <h3 class="offer__h3">LUXIROUS & trendy</h3>
                 <h4 class="offer__h4">ACCESORIES</h4>
             </div>
          </a>
      </div>
      <div class="offer__content">
           <a href="catalog.html" class="offer__item offer__item_mini">
               <div class="offer__lable">
                 <h3 class="offer__h3">30% offer</h3>
                 <h4 class="offer__h4">women</h4>
             </div>
           </a>
          <a href="catalog.html" class="offer__item offer__item_big">
              <div class="offer__lable">
                 <h3 class="offer__h3">new arrivals</h3>
                 <h4 class="offer__h4">FOR kids</h4>
             </div>
          </a>
      </div>
  </div>
  `
});
