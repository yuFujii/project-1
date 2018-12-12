<template>
  <main>
    <div class="hero">
      <div class="container">
        <div class="hero__content">
          <p class="hero__title">HERO</p>
          <nuxt-link
            to="/contact"
            class="btn"
          >Contact</nuxt-link>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <h2 class="hdg">FEATURE</h2>
        <div class="feature-hero">
          <no-ssr>
            <carousel
              :per-page="1"
              :pagination-active-color="'#fff'"
            >
              <slide>
                <div class="feature-hero__item">
                  Slide 1 Content
                </div>
              </slide>
              <slide>
                <div class="feature-hero__item">
                  Slide 1 Content
                </div>
              </slide>
              <slide>
                <div class="feature-hero__item">
                  Slide 1 Content
                </div>
              </slide>
              <slide>
                <div class="feature-hero__item">
                  Slide 1 Content
                </div>
              </slide>
            </carousel>
          </no-ssr>
        </div>

        <div class="row">
          <div class="feature">
            <figure class="feature__icon" />
            <h3 class="feature__title">Feature</h3>
            <p class="feature__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, rem.</p>
          </div>
          <div class="feature">
            <figure class="feature__icon" />
            <h3 class="feature__title">Feature</h3>
            <p class="feature__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, rem.</p>
          </div>
          <div class="feature">
            <figure class="feature__icon" />
            <h3 class="feature__title">Feature</h3>
            <p class="feature__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, rem.</p>
          </div>
          <div class="feature">
            <figure class="feature__icon" />
            <h3 class="feature__title">Feature</h3>
            <p class="feature__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, rem.</p>
          </div>
          <div class="feature">
            <figure class="feature__icon" />
            <h3 class="feature__title">Feature</h3>
            <p class="feature__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, rem.</p>
          </div>
          <div class="feature">
            <figure class="feature__icon" />
            <h3 class="feature__title">Feature</h3>
            <p class="feature__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, rem.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="concept">
      <div class="container">
        <div class="concept__body">
          <h2 class="concept__title">Lorem, ipsum dolor.</h2>
          <p class="concept__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid alias, aperiam fuga dolorem sit vitae rerum similique! Vel maiores suscipit in enim laborum itaque eligendi fugiat neque ut ratione.</p>
          <div class="concept__btn">
            <nuxt-link
              class="btn"
              to="/contact"
            >Contact</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="hdg">PRICE</h2>

        <table class="tbl">
          <caption class="tbl__caption">Superheros and sidekicks</caption>
          <colgroup>
            <col>
            <col>
            <col>
            <col>
          </colgroup>
          <thead>
            <tr>
              <td />
              <th scope="col">Free</th>
              <th scope="col">Basic</th>
              <th scope="col">Stundard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Point</th>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Point</th>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Point</th>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">Point</th>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section voice-section">
      <div class="container">
        <div
          class="voice"
          data-aos="flip-down"
        >
          <figure class="voice__thumbnail" />
          <div class="voice__body">
            <h2 class="voice__title">Taro Yamada</h2>
            <p class="voice__sub-title">CEO</p>
            <p class="voice__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nostrum fuga cupiditate doloribus animi dolorum amet dolorem repudiandae quisquam dolore possimus corrupti voluptates aliquid quos ratione cum, eius facere necessitatibus.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="hdg">NEWS</h2>

        <ul class="news">
          <li class="news__item">
            <figure class="news__thumbnail" />
            <div class="news__body">
              <h3 class="news__title">Lorem, ipsum dolor.</h3>
              <p class="news__date">2018.11.11</p>
              <p class="news__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore alias nam ipsa minima, repellat sint tempora vitae non. Nisi voluptates quisquam nobis numquam? Assumenda commodi suscipit rem excepturi perferendis?</p>
            </div>
          </li>
          <li class="news__item">
            <figure class="news__thumbnail" />
            <div class="news__body">
              <h3 class="news__title">Lorem, ipsum dolor.</h3>
              <p class="news__date">2018.11.11</p>
              <p class="news__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore alias nam ipsa minima, repellat sint tempora vitae non. Nisi voluptates quisquam nobis numquam? Assumenda commodi suscipit rem excepturi perferendis?</p>
            </div>
          </li>
          <li class="news__item">
            <figure class="news__thumbnail" />
            <div class="news__body">
              <h3 class="news__title">Lorem, ipsum dolor.</h3>
              <p class="news__date">2018.11.11</p>
              <p class="news__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore alias nam ipsa minima, repellat sint tempora vitae non. Nisi voluptates quisquam nobis numquam? Assumenda commodi suscipit rem excepturi perferendis?</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`https://reqres.in/api/users/2`)
    return data
  },

  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.hero {
  background: #000;
  color: #ffffff;
  &__title {
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 24px;
  }
  &__content {
    height: 600px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
}

.feature-hero {
  background: #000;
  border-radius: 12px;
  margin-bottom: 80px;
  &__item {
    height: 300px;
    @media screen and (max-width: 700px) {
      height: 150px;
    }
  }
}

.feature {
  text-align: center;
  &__icon {
    width: 100px;
    height: 100px;
    background: #000;
    border-radius: 12px;
    margin: 0 auto 16px;
  }
  &__title {
    margin-bottom: 8px;
  }
  &__description {
    line-height: 1.8;
    font-size: 14px;
  }
}

.concept {
  background: #000;
  color: #ffffff;
  padding: 200px 0;
  @media screen and (max-width: 700px) {
    padding: 40px 0;
  }
  &__body {
    display: flex;
    flex-flow: column;
    padding-left: 50%;
    @media screen and (max-width: 700px) {
      padding-left: 0;
      padding-top: 200px;
      text-align: center;
    }
  }
  &__title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 24px;
  }
  &__description {
    font-size: 13px;
    opacity: 0.8;
    margin-bottom: 24px;
  }
}

.news {
  padding: 0;
  &__title {
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: bold;
  }
  &__description {
    font-size: 13px;
    margin-bottom: 16px;
  }
  &__date {
    font-size: 13px;
    margin-bottom: 8px;
    opacity: 0.8;
  }
  &__item {
    display: grid;
    grid-gap: 24px;
    grid-auto-flow: column;
    margin-bottom: 24px;
    @media screen and (max-width: 700px) {
      grid-gap: 16px;
    }
  }
  &__thumbnail {
    background: #000;
    border-radius: 12px;
    width: 100px;
    height: 100px;
    @media screen and (max-width: 700px) {
      width: 60px;
      height: 60px;
    }
  }
}

.voice {
  border-radius: 12px;
  background: #fff;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0 16px #ddd;
  @media screen and (max-width: 700px) {
    display: block;
  }
  &__thumbnail {
    width: 50%;
    height: 500px;
    background: #000;
    @media screen and (max-width: 700px) {
      width: 100%;
      height: 230px;
    }
  }
  &__body {
    padding: 64px;
    flex: 1;
    @media screen and (max-width: 700px) {
      padding: 32px;
    }
  }
  &__title {
    margin-bottom: 8px;
  }
  &__sub-title {
    margin-bottom: 16px;
    opacity: 0.6;
  }
}

.voice-section {
  background: #fafafa;
}
</style>
