<template>
  <section class="advantages">
    <div class="container">
      <div class="advantages__item" v-for="(item, index) in items">
        <div class="advantages__head">
          <div class="advantages__index">{{ index + 1 }}</div>
          <div>
            <div class="advantages__title">{{ item.title }}</div>
            <div class="advantages__subtitle"><span>{{ item.subtitle }}</span></div>
          </div>
        </div>
        <Image format="webp" :name="item.img" :alt="item.title" />
        <div class="advantages__content">
          <div class="advantages__text">{{ item.text }}</div>
          <div class="advantages__subtext" v-if="item.subtext">{{ item.subtext }}</div>
          <div class="advantages__btn">
            <nuxt-link class="btn btn-lg" to="/health-quiz">TAKE THE QUIZ</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface ItemType {
  title: string | boolean
  subtitle: string | boolean
  text: string | boolean
  subtext: string | boolean
  img: string | boolean
}

const items: Array<ItemType> = [
  {
    title: 'The Visit',
    subtitle: 'Your easiest visit ever.',
    text: 'Before connecting you with a doctor, we’ll gather some basic medical information, and you’ll tell us the results you’re looking for. Simple, quick, and all within our secure platform.',
    subtext: 'We take privacy and security very seriously - any information you submit is encrypted within our secure platform.',
    img: 'adv-01'
  },
  {
    title: 'board-certified doctors',
    subtitle: 'You are in control.',
    text: `We'll connect you with a doctor in your state who will assist you in finding the best treatment for your symptoms. You'll be able to message your doctor at anytime directly through our platform to ensure your needs are being met.`,
    img: 'adv-01'
  },
  {
    title: 'free delivery + ongoing care',
    subtitle: 'Relief, delivered.',
    text: 'No more waiting in line at the pharmacy! If your doctor decides a treatment is right for you, your medications will be shipped right to your door. We’ll check in regularly to make sure you’re feeling great and make adjustments to your treatment if needed.',
    img: 'adv-01'
  }
]
</script>

<style lang="scss" scoped>
.advantages{
  .container{
    padding-top: res(150, 200);
    padding-bottom: res(70, 100);
    position: relative;
    &:before{
      content: "";
      background: var(--cyan);
      z-index: -1;
      position: absolute;
      left: 95px; top: 50px;
      height: 70%;
      width: 4px;
      @media(max-width:767px){
        display: none;
      }
    }
  }
  &__item{
    position: relative;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &:not(:first-child){
      margin-top: 170px;
    }
    img{
      display: block;
      margin-bottom: 30px;
      @media(min-width:768px){
        width: 40%;
        margin-bottom: 0;
      }
    }
    &:after{
      content: "";
      background: rgb(248 255 243);
      z-index: -1;
      position: absolute;
      left: 50%; top: 50%;
      height: 75%;
      width: 100vw;
      transform: translate(-50%, -50%);
    }
  }
  &__head{
    display: flex;
    align-items: flex-start;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-60%);
  }
  &__index{
    width: res(60, 145);
    height: res(60, 145);
    border-radius: 50%;
    background: var(--cyan);
    font-size: res(32, 96);
    color: rgb(237, 255, 225);
    font-family: 'Hatton', serif;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    padding-top: 10px;
    @media(min-width:768px){
      margin-right: res(15, 90);
    }
    @media(max-width:767px){
      & + div{
        padding-left: 30px;
      }
    }
  }
  &__title{
    font-size: res(16, 26);
    color: rgb(12, 53, 35);
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 4px;
    padding-top: 20px;
  }
  &__subtitle{
    padding-left: 12px;
    color: rgb(12, 53, 35);
    font-family: 'Hatton', serif;
    font-weight: 500;
    font-size: res(32, 56);
    line-height: 1;
    position: relative;
    display: inline-block;
    span{
      @media(max-width:767px){
        background: rgb(237 254 226);
      }
    }
    &:before{
      content: "";
      background: rgb(237 254 226);
      position: absolute;
      left: 15px;
      top: 35%;
      height: 50%;
      width: 100%;
      z-index: -1;
      @media(max-width:767px){
        display: none;
      }
    }
  }
  &__content{
    @media(min-width:768px){
      width: 60%;
    }
  }
  &__text, &__subtext{
    font-size: 20px;
    line-height: 1.4;
    max-width: 572px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
  &__subtext{}
  &__btn{
    max-width: 572px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: res(30, 80);
    .btn{
      display: inline-block;
      width: 300px;
    }
  }
}
</style>
