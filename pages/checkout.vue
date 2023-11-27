<template>
  <div class="page page__checkout">
    <TransitionGroup name="fade">
      <CheckoutStart
        v-if="startModal"
        @start="getStart" />
      <CheckoutStatus
        v-if="!startModal"
        @start="getStart"
        @safety="toggleSafety"
        @shipping="toggleShipping"
        @payment="togglePayment" />
      <CheckoutSummary
        v-if="!startModal && !shipping && !payment"
        @cart="toggleCart"
        @start="getStart"
        @safety="toggleSafety"
        @shipping="toggleShipping" />
      <CheckoutCart
        v-if="cartModal"
        @cart="toggleCart" />
      <CheckoutSafety
        v-if="safetyModal"
        @safety="toggleSafety" />
      <CheckoutShipping
        v-if="shipping"
        @shipping="toggleShipping"
        @payment="togglePayment" />
      <CheckoutPayment
        v-if="payment"
        @billing="toggleBilling" />
      <CheckoutBilling
        v-if="billingModal"
        @billing="toggleBilling" />
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useGlobalStore } from '~/stores/global'

const globalStore = useGlobalStore()

definePageMeta({
  layout: 'checkout'
})

const startModal = ref(true),
      getStart = val => {
        if(shipping.value){
          shipping.value = false
          return
        }
        if(payment.value){
          payment.value = false
          shipping.value = true
          return
        }
        startModal.value = val
        globalStore.changeProgress(0)
      }

const cartModal = ref(false),
      toggleCart = val => cartModal.value = val

const safetyModal = ref(false),
      toggleSafety = val => safetyModal.value = val

const billingModal = ref(false),
      toggleBilling = val => billingModal.value = val

const shipping = ref(false),
      toggleShipping = val => shipping.value = val

const payment = ref(false),
      togglePayment = val => payment.value = val
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity .5s ease;
}
</style>