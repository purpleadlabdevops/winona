<template>
  <section class="treatments">
    <div class="container">
      <h2>Bioidentical Treatments <br>That Really Work</h2>
      <div class="treatments__item" v-for="item in items">
        <Image class="treatments__img" format="webp" :name="item.img" :alt="item.title" />
        <div class="treatments__info">
          <div class="treatments__title">{{ item.title }}</div>
          <div class="treatments__text">{{ item.text }}</div>
          <h5>Treatment types</h5>
          <div class="treatments__types">
            <div v-if="item.body">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M3.724 22.542c-.819 0-2.283-.154-3.117-1.138-.648-.765-.778-1.843-.387-3.202.006-.221.082-.68.543-1.198.919-1.031 3.401-2.26 10.005-2.26h3.567a.486.486 0 110 .972h-3.567c-6.422 0-8.529 1.169-9.214 1.865-.364.371-.364.642-.364.653a.683.683 0 01-.019.174c-.316 1.058-.258 1.855.175 2.367.85 1.008 2.896.771 2.917.769l18.177-.004c.101-.021 1.588-.305 1.588-2.457 0-3.095-.617-5.178-3.634-5.287a.486.486 0 01-.202-.918c.012-.007 1.475-.785 2.037-2.68.466-1.567.216-3.434-.74-5.568-.21 1.199-.671 2.753-1.684 3.656-.647.575-1.429.821-2.328.73-4.034-.409-11.804-.025-12.311 4.35a.485.485 0 11-.964-.112c.594-5.116 8.683-5.683 13.376-5.204.622.063 1.142-.098 1.583-.49 1.465-1.305 1.533-4.59 1.533-4.623a.487.487 0 01.909-.231c1.688 2.993 2.211 5.615 1.553 7.793a5.714 5.714 0 01-1.508 2.482C25 13.776 25 17.298 25 19.082c0 2.448-1.632 3.31-2.495 3.425l-18.182.004a4.804 4.804 0 01-.599.031z" stroke="0" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              Body
            </div>
            <div v-if="item.vaginal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M12.5 25c-.3 0-.54-.24-.54-.54v-6.39a4.39 4.39 0 00-.15-.47c-.49-.35-.97-.82-1.42-1.27-.53-.53-1.08-1.08-1.67-1.47-.04-.03-3.95-2.79-3.27-4.17.4-.81 1.66-.39 2.2-.21 2.81.94 4.43 4.63 5.06 6.41.45.24.77.19 1.13-.13.73-.66 1.25-1.3 3.39-6.7.11-.28.42-.41.7-.3.28.11.41.42.3.7-2.12 5.36-2.72 6.25-3.67 7.1-.53.48-1.04.63-1.53.57v5.77c6.05-.28 10.89-5.29 10.89-11.41 0-6.3-5.12-11.42-11.42-11.42C6.2 1.08 1.08 6.2 1.08 12.5c0 4.34 2.41 8.25 6.28 10.21.27.13.37.46.24.72-.13.27-.46.37-.72.24A12.438 12.438 0 010 12.5C0 5.61 5.61 0 12.5 0S25 5.61 25 12.5 19.39 25 12.5 25zM6.55 11.32c.35.59 1.52 1.82 2.78 2.66.55.37 1.05.83 1.52 1.3-.78-1.54-1.95-3.23-3.54-3.76-.36-.12-.6-.18-.76-.2z" stroke="0" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              Vaginal
            </div>
            <div v-if="item.oral">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M16.097 25a6.055 6.055 0 01-5.298-3.109l-3.397-6.109a.474.474 0 01.183-.642l9.337-5.192-3.548-6.38a5.11 5.11 0 00-6.942-1.981 5.111 5.111 0 00-1.981 6.942l2.21 3.974a.473.473 0 01-.826.46l-2.21-3.974A6.058 6.058 0 015.972.761 6.007 6.007 0 0110.57.237a6.007 6.007 0 013.629 2.871l3.778 6.794a.47.47 0 01-.182.642l-9.337 5.192 3.166 5.696a5.111 5.111 0 006.943 1.981 5.11 5.11 0 001.98-6.942l-1.882-3.385a.473.473 0 01.826-.46l1.883 3.385a6.056 6.056 0 01-2.347 8.227 6.002 6.002 0 01-2.93.762z" stroke="0" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              Oral
            </div>
            <div v-if="item.patch">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M23.685 14.239L20.59 8.517a2.293 2.293 0 00-3.166-.909 2.169 2.169 0 00-1.171 1.357 2.08 2.08 0 00.236 1.533 4.56 4.56 0 01-1.367 5.883 4.593 4.593 0 01-6.029-.599 4.559 4.559 0 01-.174-6.037 4.59 4.59 0 012.815-1.596 4.593 4.593 0 013.171.654c.131.083.293.11.442.077a.587.587 0 00.186-1.066 5.758 5.758 0 00-3.981-.82A5.747 5.747 0 008.021 9a5.723 5.723 0 00.232 7.579 5.766 5.766 0 007.572.729 5.722 5.722 0 001.68-7.399.952.952 0 01-.115-.661 1.072 1.072 0 01.548-.596l.004.003.038-.023a1.13 1.13 0 011.582.445l3.113 5.753c.364.58.511 1.272.414 1.94a1.822 1.822 0 01-.929 1.113l-.001-.005-9.476 5.093-.003-.005-.054.036a3.766 3.766 0 01-2.541.629 2.201 2.201 0 01-1.401-1.201L2.257 10.544a2.471 2.471 0 01-.326-1.783A2.955 2.955 0 013.578 6.98l10.039-5.396a1.773 1.773 0 011.237-.252 1.68 1.68 0 011.034.94.604.604 0 00.348.283c.074.022.15.029.228.022a.587.587 0 00.358-.17l.002.002.072-.088-.002-.002a.556.556 0 00.073-.156c.022-.074.029-.15.022-.228a.588.588 0 00-.065-.213A2.8 2.8 0 0015.131.194a2.927 2.927 0 00-2.121.389L3.026 5.95A4.06 4.06 0 00.789 8.492a3.581 3.581 0 00.46 2.657l6.399 11.836a3.176 3.176 0 002.9 1.877l.023-.001h.004a5.246 5.246 0 002.668-.859l9.386-5.041a2.97 2.97 0 001.004-.774c.27-.32.466-.684.582-1.083l.013-.047a3.964 3.964 0 00-.543-2.818z" stroke="0" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              Patch
            </div>
          </div>
          <nuxt-link class="treatments__link" to="/health-quiz">
            Take The Quiz
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M1.548 5.718c-.417.022-.82.175-1.12.51-.603.668-.568 1.706.101 2.309l11.954 10.765L24.471 8.537c.67-.603.704-1.64.102-2.31-.602-.669-1.64-.704-2.31-.102l-9.746 8.796-9.78-8.796a1.646 1.646 0 0 0-1.19-.407Z" stroke="0" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script  setup>
import { ref } from 'vue'
const items = ref([
  {
    title: 'Estrogen Therapy',
    img: 'estrogen-therapy',
    text: 'A powerful, base replacement therapy to assist in your overall wellness, with a focus on body, mood, mind, and sex.',
    body: true,
    vaginal: true,
    oral: true,
    patch: true
  },
  {
    title: 'Progesterone Therapy',
    img: 'updated-progesterone-therapy',
    text: 'An assistive replacement therapy that may be recommended by your doctor alongside your estrogen treatment.',
    body: true,
    oral: true
  },
  {
    title: 'DHEA',
    img: 'dhea',
    text: 'An effective, combination therapy that gently boosts testosterone to help maintain healthy body weight, increase lean muscle, and improve libido.',
    oral: true
  },
])
</script>

<style lang="scss" scoped>
.treatments{
  padding-top: res(70, 100);
  padding-bottom: res(70, 100);
  h2{
    text-align: center;
  }
  &__item{
    @media(min-width:768px){
      display: flex;
    }
    &:not(:first-child){
      margin-top: 45px;
    }
  }
  &__img{
    @media(min-width:768px){
      width: 47%;
    }
  }
  &__info{
    padding: res(20, 50) res(20, 75) res(60, 100) res(20, 100);
    background: rgb(250 250 250);
    position: relative;
  }
  &__title{
    font-size: res(20, 24);
    color: var(--cyan);
    margin-bottom: res(10, 20);
    text-transform: uppercase;
    font-weight: 500;
  }
  &__text{
    font-size: res(18, 20);
    margin-bottom: res(18, 20);
    line-height: 1.5;
  }
  h5{
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
  }
  &__types{
    display: flex;
    column-gap: 2.5rem;
    div{
      text-align: center;
      color: var(--cyan);
      font-size: res(16, 20);
      letter-spacing: .02em;
      line-height: 1.75;
      margin-top: 20px;
    }
    svg{
      display: block;
      width: res(30, 40);
      height: auto;
      margin-bottom: res(5, 10);
      path{
        fill: var(--cyan);
      }
    }
  }
  &__link{
    position: absolute;
    left: 0; bottom: 0; right: 0;
    font-size: res(16, 20);
    color: #000;
    padding: 16px 16px 16px 104px;
    background: rgb(232 227 255);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2.5px;
    svg{
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      width: res(15, 25);
      height: auto;
    }
  }
}
</style>