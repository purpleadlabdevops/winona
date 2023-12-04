<script  setup>
import { ref, watch } from 'vue'

/* -----START V-MODELS----- */
const isLoading = ref(false),
      success   = ref(true),
      firstName = ref(''),
      lastName  = ref(''),
      email     = ref(''),
      phone     = ref(''),
      agree     = ref(false)
/* -----END Agree----- */

/* -----START Feedback----- */
const formFeedback = ref(null),
      textFeedback = {
        error: 'There was an error processing your request.',
        success: 'Thanks for signing up!',
        incomplete: 'Please complete all required fields.',
        email: 'Please enter a valid email address.',
        phone: 'Please enter a valid phone number.',
        agree: 'Please agree to terms and conditions.'
      }

const setFeedback = (type, status) => {
  formFeedback.value = type
  isLoading.value = false
  success.value = status
  setTimeout(() => {
    formFeedback.value = null
  }, 2000)
}
/* -----START Feedback----- */

/* -----START SUBMIT----- */
const submitForm = async () => {
  isLoading.value = true
  formFeedback.value = null

  if( !firstName.value.trim() || !lastName.value.trim() || !email.value.trim() || !phone.value.trim() ) {
    setFeedback('incomplete', null)
    return
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (email.value && !regex.test(email.value)) {
    setFeedback('email', false)
    return
  }

  if (phone.value && phone.value.length < 15) {
    setFeedback('phone', false)
    return
  }
  console.dir(agree.value)
  if (!agree.value) {
    console.log('agree.value')
    setFeedback('agree', false)
    return
  }

  setFeedback('success', true)
}
/* -----END SUBMIT----- */
</script>

<template>
  <form @submit.prevent="submitForm" class="form">
    <FieldText
      class="form__field-6"
      v-model="firstName"
      label="First name"
      placeholder="exJohn"
      autocomplete="given-name"
      :required="true" />
    <FieldText
      class="form__field-6"
      v-model="lastName"
      label="Last name"
      placeholder="ex.Doe"
      autocomplete="family-name"
      :required="true" />
    <FieldEmail
      label="Your email"
      v-model="email"
      placeholder="ex.example@gmail.com"
      autocomplete="email"
      :required="true" />
    <FieldPhone
      v-model="phone"
      label="Your country code and phone"
      placeholder="(###) ###-##-##"
      autocomplete="phone"
      :required="true" />
    <FieldCheckbox
      v-model="agree"
      label="I agree to terms and conditions"
      :required="true" />
    <div class="form__field form__feedback" v-if="formFeedback">
      {{ textFeedback[formFeedback] }}
    </div>
    <div class="form__field form__field-6">
      <button type="submit" @click.prevent="submitForm">
        {{ isLoading ? 'Loading...' : 'Submit' }}
      </button>
    </div>
  </form>
</template>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
  *{
    box-sizing: border-box;
  }
}
</style>
<style lang="scss">
.form{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 600px;
  margin: 100px auto 0;
  &__row{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
  &__field{
    width: 100%;
    margin-bottom: 15px;
    @media(min-width:768px){
      &-6{
        width: calc(100% / (12 / 6) - 10px);
      }
      &-2{
        width: calc(100% / (12 / 2) - 10px);
      }
      &-4{
        width: calc(100% / (12 / 4) - 10px);
      }
      &-8{
        width: calc(100% / (12 / 8) - 10px);
      }
      &-10{
        width: calc(100% / (12 / 10) - 10px);
      }
    }
    &:last-child{
      margin-bottom: 0;
    }
  }
  label{
    display: block;
    width: 100%;
  }
  input, select{
    display: block;
    width: 100%;
    height: 50px;
    padding: 0 15px;
    outline: none !important;
    &[type="checkbox"]{
      width: 24px;
      height: 24px;
      display: inline-block;
      vertical-align: middle;
    }
  }
  [type="submit"]{
    display: block;
    width: 100%;
    height: 50px;
  }
}
</style>
