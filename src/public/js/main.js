import headerEl from './HeaderComp'
import cart from './CartComp'
import products from './ProductComp'
import filterEl from './FilterComp'
import navEl from './NavComp'
import bannerEl from './BannerComp'
import catalogProducts from './CatalogProductComp'
import footerEl from './FooterComp'
import offerEl from './OfferComp'
import promoEl from './PromoComp'
import singleProduct from './SingleProduct'


const app = {
  el: "#app",
  data:{

  },
  components: {
        'header-el': headerEl,
        cart,
        products,
        'filter-el': filterEl,
        'nav-el': navEl,
        'banner-el': bannerEl,
        'catalog-products': catalogProducts,
        'footer-el': footerEl,
        'offer-el': offerEl,
        'promo-el': promoEl,
        'single-product': singleProduct
    },

  methods:{

    getJson(url){
      return fetch(url)
      .then(result => result.json())
      .catch(error => {
        //this.$refs.error.setError(error);
      //  console.log(error);
      })
    },

    postJson(url, data){
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
      .catch(error => {
        console.log(error);
      });
    },

    putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
              .catch(error => {
                  //this.$refs.error.setError(error);
                  console.log(error);
              });
        },

    deleteJson(url, data){
          return fetch(url,{
            method: 'DELETE',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).then(result => result.json())
          .catch(error =>{
            console.log(error);
          });
        },

  },

  mounted(){
    console.log(this);
  }
};

export default app;
