const footerEl = {
  data(){
    return{

    }
  },
  template: `
  <div>
  <section class="subscribe-review__block">
      <div class="review">
          <figure class="review__block">
              <img src="../img/review-img.png" class="review__photo">
              <figcaption class="review__text">
                  <p class="review__content">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                  <p class="reviewer_name">Bin Burhan</p>
                  <p class="reviewer_location">Dhaka, Bd</p>
                  <div class="review__dots">
                      <a href="#"><img class="review__dot" src="../img/review-dots-grey.svg"></a>
                      <a href="#"><img class="review__dot" src="../img/review-dots-pink.svg"></a>
                      <a href="#"><img class="review__dot" src="../img/review-dots-grey.svg"></a>
                  </div>
              </figcaption>
          </figure>
      </div>
      <div class="subscribe">
         <div class="subscribe__block">
              <h3 class="subscribe__h3">Subscribe</h3>
             <h4 class="suscribe__h4">FOR OUR NEWLETTER AND PROMOTION</h4>
             <form method="post" action="#" class="subscribe__form">
                 <input type="email" required placeholder="Enter Your Email" class="subscribe__input">
                 <button type="submit" class="subscribe__button">Subscribe</button>
             </form>
          </div>
      </div>
  </section>
  <footer class="footer__block">
      <div class="footer_big container">
          <div class="brand__content">
              <div class="footer__logo">
                  <a href="#" class="logo">
                 <img class="logo__img" src="../img/logo.png" alt="logo">BRAN<span class="logo_d">D</span>
             </a>
              </div>
              <p class="footer__text">
                  Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships. </p>

              <p class="footer__text">Efficiently plagiarize 24/365 action items and focused infomediaries.
                  Distinctively seize superior initiatives for wireless technologies. Dynamically optimize. </p>
          </div>
          <nav class="footer__menu">
              <ul class="footer__menu__block">
                  <li><h4 class="footer__menu__title">COMPANY</h4></li>
                  <li><a href="/" class="footer__menu__item">Home </a></li>
                  <li><a href="/catalog" class="footer__menu__item">Shop </a></li>
                  <li><a href="#" class="footer__menu__item">About </a></li>
                  <li><a href="#" class="footer__menu__item">How It Works </a></li>
                  <li><a href="#" class="footer__menu__item">Contact </a></li>
              </ul>
          </nav>
          <nav class="footer__menu">
              <ul class="footer__menu__block">
                  <li><h4 class="footer__menu__title">INFORMATION</h4></li>
                  <li><a href="#" class="footer__menu__item">Tearms & Condition </a></li>
                  <li><a href="#" class="footer__menu__item">Privacy Policy </a></li>
                  <li><a href="#" class="footer__menu__item">How to Buy </a></li>
                  <li><a href="#" class="footer__menu__item">How to Sell </a></li>
                  <li><a href="#" class="footer__menu__item">Promotion </a></li>
              </ul>
          </nav>
          <nav class="footer__menu">
              <ul class="footer__menu__block">
                  <li><h4 class="footer__menu__title">SHOP CATEGORY</h4></li>
                  <li><a href="/catalog" class="footer__menu__item">Men </a></li>
              <li><a href="/catalog" class="footer__menu__item">Women </a></li>
              <li><a href="/catalog" class="footer__menu__item">Child </a></li>
              <li><a href="/catalog" class="footer__menu__item">Apparel </a></li>
              <li><a href="/catalog" class="footer__menu__item">Brows All </a></li>
              </ul>
          </nav>
      </div>
      <div class="footer_small">
          <div class="container footer__small__block">
              <p class="copyright__text">© 2017  Brand  All Rights Reserved.</p>
              <div class="social__block">
                  <a href="#" class="social__item"><i class="fab fa-facebook-f social__img"></i></a>
                  <a href="#" class="social__item"><i class="fab fa-twitter social__img"></i></a>
                  <a href="#" class="social__item"><i class="fab fa-instagram social__img"></i></a>
                  <a href="#" class="social__item"><i class="fab fa-google-plus-g social__img"></i></i></a>
              </div>
          </div>
      </div>
  </footer>
  </div>
  `
};

export default footerEl;
