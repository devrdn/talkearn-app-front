<template>
  <v-footer class="footer">
    <div class="footer__container">
      <div class="footer__container__left">
        <p>
          TalkEarn is a marketplace of crypto experts where you can find an
          assistancy on every topic.
        </p>
        <div class="footer__container__left__icons">
          <a href="#">
            <img
              src="/img/index/footer/fb.svg"
              alt=""
              class="footer__container__left__icons_fb"
            />
          </a>
          <a href="#">
            <img
              src="/img/index/footer/tw.svg"
              alt=""
              class="footer__container__left__icons_tw"
            />
          </a>
          <a href="#">
            <img
              src="/img/index/footer/yt.svg"
              alt=""
              class="footer__container__left__icons_yt"
            />
          </a>
          <a href="#">
            <img
              src="/img/index/footer/lin.svg"
              alt=""
              class="footer__container__left__icons_lin"
            />
          </a>
          <a href="#">
            <img
              src="/img/index/footer/inst.svg"
              alt=""
              class="footer__container__left__icons_inst"
            />
          </a>
        </div>
      </div>
      <div class="footer__container__right">
        <div class="footer__container__right__block">
          <p class="footer__container__right__block__name">TalkEarn</p>
          <a href="/" class="footer__container__right__block__link">
            Why Talkearn
          </a>
          <a href="/" class="footer__container__right__block__link">
            Enterprise
          </a>
          <a href="/" class="footer__container__right__block__link"></a>
        </div>
        <div class="footer__container__right__block">
          <p class="footer__container__right__block__name">Resources</p>
          <a href="/" class="footer__container__right__block__link">
            Download
          </a>
          <a href="/" class="footer__container__right__block__link">
            Help Center
          </a>
        </div>
        <div class="footer__container__right__block">
          <p class="footer__container__right__block__name">Company</p>
          <a href="/" class="footer__container__right__block__link">About us</a>
          <a href="/" class="footer__container__right__block__link">
            Contact us
          </a>
          <a href="/" class="footer__container__right__block__link">Products</a>
        </div>
        <div class="footer__container__right__block footer__adress">
          <p class="footer__container__right__block__name">
            Get in Touch with Us
          </p>
          <div class="footer__container__right__block__link__icon">
            <img src="/img/index/footer/map.svg" alt="" />
            <a href="/" class="footer__container__right__block__link">
              832 Thompson Drive, San Fransisco CA 94107, United States
            </a>
          </div>
          <div class="footer__container__right__block__link__icon">
            <img src="/img/index/footer/phone.svg" alt="" />
            <a href="/" class="footer__container__right__block__link">
              +123 345123 556
            </a>
          </div>
          <div class="footer__container__right__block__link__icon">
            <img src="/img/index/footer/mail.svg" alt="" />
            <a href="/" class="footer__container__right__block__link">
              support@ziro.id
            </a>
          </div>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #1f2131;
  color: $whiteColor;

  &__adress {
    @include rwdmax(1200px) {
      max-width: 230px;
    }
  }

  @include rwdmax(1200px) {
    justify-content: center;
  }

  &__container {
    max-width: 85%;
    margin: 0px auto;
    padding: 70px 0;
    display: flex;
    justify-content: space-between;
    gap: 45px;

    @include rwdmax(1200px) {
      max-width: 100%;
      flex-direction: column;
      margin: 0;
    }

    &__left {
      display: flex;
      width: 20%;
      flex-direction: column;
      gap: 70px;
      @include rwdmax(1200px) {
        width: 100%;
        gap: 10px;
        text-align: center;
      }
      & p {
        font-size: $fs;
        line-height: 1.3;
      }
      &__icons {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &__icons img {
        height: 20px;
      }
      &__icons a {
        padding: 20px;
      }
      &__icons a:hover {
        border-radius: 50px;
        background-color: $purpleColor;
      }
    }
    &__right {
      display: flex;
      gap: 130px;

      @include rwdmax(1200px) {
        flex-wrap: wrap;
        justify-content: center;
      }

      @include rwdmax(1100px) {
        gap: 70px;
      }

      @include rwdmax(742px) {
        display: flex;
        flex-wrap: wrap;
      }

      &__block {
        display: flex;
        align-items: stretch;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
        @include rwdmax(742px) {
          flex-basis: 100%;
          flex: 2;
        }
        &__name {
          font-size: 20px;
          font-weight: 600;
        }
        &__link {
          font-size: 13px;
          font-weight: 400;
          color: $whiteColor;
          line-height: 1.3;
          &__icon {
            display: flex;
            align-items: center;
            gap: 7px;
          }
        }
      }
    }
  }
}
</style>
