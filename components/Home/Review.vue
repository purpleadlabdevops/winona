<template>
  <section class="review">
    <div class="container">
      <div class="review__img"><Image format="webp" name="review" alt="review picture" /></div>
      <div class="review__info">
        <h2>Trusted by thousands of <br> happy patients:</h2>
        <div class="review__text">I was skeptical at first, but with my fatigue, joint pain and unending mood swings, I decided to give it a try. The process was quite easy and I had access to a real doctor. Once I received my prescriptions, I immediately felt the change. My moods evened out. My skin halted its progress to just dry and like crepe to what it was before. I sleep better, I’m not exhausted, and I feel like my old self. ”</div>
        <div class="review__name">Lisa W., 58</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.review{
  background: rgb(199 189 255 / 30%);
  padding-top: res(60, 120);
  padding-bottom: res(60, 120);
  text-align: center;
  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
  }
  &__info{
    @media(min-width:768px){
      max-width: 60%;
    }
  }
  &__text{
    font-size: res(16, 20);
    margin-top: res(0, 56);
    padding-left: 30px;
    padding-right: 30px;
    &:before{
      content:"“";
      display: block;
      color: rgb(199 189 255);
      font-size: 96px;
      text-align: left;
      line-height: 1;
      margin-bottom: -50px;
      margin-left: -30px;
    }
  }
  &__name{
    margin-top: 20px;
    font-size: res(18, 24);
    font-weight: 500;
    font-family: 'Hatton',serif;
  }
  &__img{
    width: calc(35% - 60px);
    position: relative;
    margin-left: 5%;
    display: block;
    @media(max-width:767px){
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
    }
    &:before{
      content: "";
      position: absolute;
      left: 0; top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgb(227 221 255);
      transform: translate(-20%, -5%);
    }
    img{
      display: block;
      width: 100%;
      position: relative;
      z-index: 2;
    }
  }
}
</style>