const bannerEl = {
  data(){
    return{

    }
  },
  template: `
  <div class="banner container">
      <div class="banner__image banner__item">
          <div class="banner__image__text">
              <h3 class="banner__h3">30% <span class="banner__h3_pink">OFFER</span> </h3>
              <h4 class="banner__h4">FOR WOMEN</h4>
          </div>
      </div>
      <div class="banner__conditions banner__item">
          <div class="conditions__item">
              <img src="img/car-icon.svg" alt="delivery" class="condition__image">
              <div class="condition__item__description">
                  <h3 class="condition__h3">Free Delivery</h3>
                  <p class="condition__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
              </div>
          </div>
          <div class="conditions__item">
              <img src="img/sale-icon.svg" alt="delivery" class="condition__image">
              <div class="condition__item__description">
                  <h3 class="condition__h3">Sales & discounts</h3>
                  <p class="condition__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
              </div>
          </div>
          <div class="conditions__item">
              <img src="img/quality-icon.svg" alt="delivery" class="condition__image">
              <div class="condition__item__description">
                  <h3 class="condition__h3">Quality assurance</h3>
                  <p class="condition__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
              </div>
          </div>
      </div>
  </div>
  `
};

export default bannerEl;
