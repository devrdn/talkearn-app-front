<template>
  <div class="become-expert-page">
    <!-- Banner -->
    <UiBaseBanner title="Join our growing expert's community" />

    <form class="form">
      <p class="form__title">Fill the application</p>
      <div class="form__fields">
        <UiBaseInput
          v-model="expert.name"
          label="Name"
          type="text"
          name="name"
        />
        <UiBaseInput
          v-model="expert.wallet"
          label="Wallet"
          type="text"
          name="wallet"
        />
        <UiBaseInput
          v-model="expert.region"
          label="Duration"
          type="text"
          name="region"
        />
        <UiBaseInput
          v-model="expert.duration"
          label="Duration"
          type="number"
          name="duration"
        />
      </div>

      <UiBaseTextArea
        v-model="expert.description"
        label="Describe you and your services"
        name="description"
      />

      <UiBaseFileInput
        :format="['TIFF', 'JPG']"
        @file-updated="captureFile($event)"
        name="photo"
      />

      <div class="form__upload-photo">
        <p class="form__upload-photo__title">Upload your photo</p>
        <div class="form__upload-photo__content">
          <div class="form__upload-photo__content__block">
            <label
              for="form__upload-photo__content__block__input"
              class="form__upload-photo__content__block__label"
            >
              <img src="/img/form/cloud.svg" alt="" />
              <div class="form__upload-photo__content__block__label__text">
                <p>Upload image</p>
                <span>JPEG, PNG, TIFF</span>
              </div>
            </label>
            <input
              type="file"
              class="form__upload-photo__content__block__input"
              id="form__upload-photo__content__block__input"
            />
          </div>
        </div>
      </div>

      <div class="form__upload-photo video">
        <p class="form__upload-photo__title">Upload your video</p>
        <div class="form__upload-photo__content">
          <div class="form__upload-photo__content__block">
            <label
              for="form__upload-photo__content__block__input"
              class="form__upload-photo__content__block__label"
            >
              <img src="/img/form/cloud.svg" alt="" />
              <div class="form__upload-photo__content__block__label__text">
                <p>Upload video</p>
                <span>AVI, MOV, MPEG</span>
              </div>
            </label>
            <input
              type="file"
              class="form__upload-photo__content__block__input"
              id="form__upload-photo__content__block__input"
            />
          </div>
          <div class="form__upload-photo__content__block">
            <label
              for="form__upload-photo__content__block__input"
              class="form__upload-photo__content__block__label"
            >
              <img src="/img/form/cloud.svg" alt="" />
              <div class="form__upload-photo__content__block__label__text">
                <input
                  type="text"
                  class="form__upload-photo__content__block__input__text"
                  id="form__upload-photo__content__block__input__text"
                  placeholder="Paste video link"
                />
              </div>
            </label>
          </div>
        </div>
      </div>

      <div class="form__services">
        <p class="form__services__title">Services You offer:</p>
        <div class="form__services__container">
          <div class="form__services__container__content">
            <div class="form__services__container__content__block">
              <p class="form__services__container__content__block__name">
                Service 1
              </p>
              <p class="form__services__container__content__block__ex">
                Example: I will consult You on how to invest in HODL (spot
                crypto currency)
              </p>
              <input type="text" />
            </div>
            <div class="form__upload-photo__content__block">
              <label
                for="form__upload-photo__content__block__input"
                class="form__upload-photo__content__block__label"
              >
                <img src="/img/form/cloud.svg" alt="" />
                <div class="form__upload-photo__content__block__label__text">
                  <p>Upload image</p>
                  <span>JPEG, PNG, TIFF</span>
                </div>
              </label>
              <input
                type="file"
                class="form__upload-photo__content__block__input"
                id="form__upload-photo__content__block__input"
              />
            </div>
          </div>
          <div class="form__services__container__content">
            <div class="form__services__container__content__block">
              <p class="form__services__container__content__block__name">
                Service 2
              </p>
              <p class="form__services__container__content__block__ex">
                Example: I will consult You on how to setup a Metamask wallet
              </p>
              <input type="text" />
            </div>
            <div class="form__upload-photo__content__block">
              <label
                for="form__upload-photo__content__block__input"
                class="form__upload-photo__content__block__label"
              >
                <img src="/img/form/cloud.svg" alt="" />
                <div class="form__upload-photo__content__block__label__text">
                  <p>Upload image</p>
                  <span>JPEG, PNG, TIFF</span>
                </div>
              </label>
              <input
                type="file"
                class="form__upload-photo__content__block__input"
                id="form__upload-photo__content__block__input"
              />
            </div>
          </div>
          <div class="form__services__container__content">
            <div class="form__services__container__content__block">
              <p class="form__services__container__content__block__name">
                Service 3
              </p>
              <p class="form__services__container__content__block__ex">
                Example: I will consult You on how to start trading on crypto
              </p>
              <input type="text" />
            </div>
            <div class="form__upload-photo__content__block">
              <label
                for="form__upload-photo__content__block__input"
                class="form__upload-photo__content__block__label"
              >
                <img src="/img/form/cloud.svg" alt="" />
                <div class="form__upload-photo__content__block__label__text">
                  <p>Upload image</p>
                  <span>JPEG, PNG, TIFF</span>
                </div>
              </label>
              <input
                type="file"
                class="form__upload-photo__content__block__input"
                id="form__upload-photo__content__block__input"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="form__btns">
        <input type="submit" value="Submit" />
        <a href="">Cancel</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: () => 'emptyhero',
  data: () => {
    return {
      expert: {
        name: '',
        wallet: '',
        region: '',
        duration: '',
        description: '',
        photo: {
          preview: '',
          name: '',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 70%;
  margin: 0 auto;
  margin-top: -20px;
  margin-bottom: 70px;
  padding: 50px;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 0px 28px rgba(62, 53, 120, 0.1);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  &__title {
    font-weight: 600;
    font-size: 20px;
    color: $darkColor;
  }

  &__fields {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  &__txtarea {
    display: flex;
    flex-direction: column;

    label {
      font-weight: 500;
      font-size: 14px;
      color: $darkColor;
    }

    textarea {
      background: #fbfbfb;
      border: 1px solid #c2c2c2;
      border-radius: 14px;
      padding: 15px 30px;
      width: 100%;
      resize: none;
    }
  }

  &__upload-photo {
    display: flex;
    flex-direction: column;
    gap: 15px;

    &__title {
      color: $darkColor;
      font-weight: 600;
      font-size: 14px;
    }

    &__content {
      display: flex;
      gap: 15px;

      &__block {
        background: #f5f5f5;
        border: 2px dashed #c2c2c2;
        border-radius: 14px;
        padding: 10px 10px;
        display: flex;

        img {
          background: $purpleColor;
          border-radius: 14px;
          padding: 15px 14px;
        }

        &__input {
          display: none;
          &__text {
            background: #fbfbfb;
            border: 1px solid #5f4bdb;
            border-radius: 14px;
            padding: 10px;
          }
        }

        &__label {
          display: flex;
          gap: 20px;
          cursor: pointer;

          &__text {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            p {
              font-weight: 600;
              font-size: 14px;
              color: $darkColor;
            }

            span {
              font-weight: 600;
              font-size: 12px;
              color: #a5a5a5;
            }
          }
        }
      }
    }
  }
  &__services {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &__title {
      font-weight: 600;
      font-size: 20px;
    }
    &__container {
      display: flex;
      flex-direction: column;
      gap: 40px;
      &__content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          input {
            background: #fbfbfb;
            border: 1px solid #c2c2c2;
            border-radius: 14px;
            padding: 10px 20px;
          }
        }
      }
    }
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    input {
      background: #5f4bdb;
      border-radius: 60px;
      padding: 10px 40px;
      color: $whiteColor;
      font-weight: 600;
      font-size: 16px;
    }
    a {
      background: #f4f4f4;
      border-radius: 60px;
      padding: 10px 40px;
      color: #9f9f9f;
      font-weight: 600;
      font-size: 16px;
    }
  }
}
</style>
