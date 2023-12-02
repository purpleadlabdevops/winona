<template>
  <section class="faq">
    <div class="container">
      <h2>Frequently Asked Questions</h2>
      <div class="faq__item" v-for="(item, index) in items" :class="itemIndex === index ? 'faq__item-in':''" >
        <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.003 8.82 14.391 0l-1.17 9.06L18.8 1.829l-4.55 7.922 7.929-4.549-7.239 5.583L24 9.614l-8.815 2.39L24 14.39l-9.06-1.17 7.238 5.578-7.928-4.55 4.549 7.929-5.577-7.239L14.392 24l-2.389-8.815L9.615 24l1.17-9.06L5.2 22.177l4.55-7.928-7.923 4.549 7.233-5.577L0 14.392l8.82-2.389L0 9.615l9.06 1.17L1.829 5.2l7.922 4.55-4.549-7.923 5.583 7.233L9.614 0l2.39 8.82Z' fill='#A783FF'/></svg>
        <button class="faq__question" @click.prevent="openQuestion(index)" :key="`faq_${index}`">
          {{ item.q }}
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none"><path d="M1.22269 1.81937e-05L8.47155 7.60153L15.7204 1.69254e-05L16.9431 1.2822L8.47155 10.1659L-1.31187e-05 1.2822L1.22269 1.81937e-05Z" fill="#2B2660"/></svg>
        </button>
        <div class="faq__answer" v-html="item.a"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const itemIndex = ref(false)

interface ItemType {
  q: string | boolean
  a: string | boolean
}

const items: Array<ItemType> = [
  {
    q: 'What is bioidentical HRT?',
    a: `Hormone replacement therapy (HRT) replenishes the levels of estrogen, progesterone, and testosterone that decline and fluctuate with age. Supplementing these hormones helps combat the symptoms of menopause and prevent the development of long-term diseases that can result from hormone deficiencies. The goal of HRT is to help your body maintain healthy, balanced hormone levels for holistic wellness. All of the hormones in Winona treatments are plant-based and bioidentical, meaning they are functionally identical to those produced naturally in your body.`,
  },
  {
    q: 'How safe is HRT? What are the risks?',
    a: `At Winona, patient safety comes first. “Do no harm” has been one of the guiding principles of medicine for millennia, and Winona takes that seriously. For this reason, there are certain conditions that have too high a risk to justify the benefits of HRT. As long as you fill out our questionnaire accurately, our Winona physicians will be able to determine whether or not HRT is a safe option for you.<br><br>That being said, Winona’s medical professionals believe, based on scientific evidence, that HRT is the most effective treatment for menopause symptoms and is worth taking for patients who have been appropriately screened and deemed good candidates. For those patients, the risks are minimal. Your Winona physician can outline the risks and benefits based on your personal medical history and symptoms.`,
  },
  {
    q: 'Do I need blood or saliva hormone testing?',
    a: `Hormone levels vary greatly, not just day-to-day, but even throughout a single day. As a result, tests for hormone levels are inaccurate and therefore not helpful for prescribing treatment. <br><br>HRT is best prescribed and adjusted based on symptoms. We’ll check in with you periodically to see how your symptoms are responding, and we'll recommend dose adjustments based on your experience.<br><br>The body is more sensitive than any laboratory test. The actual lab value isn't really important; what is important is how the body responds. We're not interested in making the labs look good, we're interested in relieving symptoms. Everyone is different in what level of hormones they tolerate without symptoms. The body tells us there's a problem by creating symptoms, which is what we're trying to fix.<br><br>Your Winona physician will determine the proper treatment and dosage after you complete the medical intake process.`,
  },
  {
    q: 'How soon will I see improvements after starting my treatment?',
    a: `Your doctor can answer more specifically for you, as symptoms and intensity vary for each person; but many women start to notice relief from some symptoms within the first couple of weeks. Hot flashes, night sweats, and sleep issues tend to ease early on and continue to improve with time.<br><br>However, for other symptoms like weight loss and muscle gain, it can take up to 3-months to see results. Studies show that this is also the point at which 80% of women experience full relief. These are general patterns, and everyone’s body responds uniquely to any given treatment.`,
  },
  {
    q: 'Will HRT help me manage menopausal weight gain?',
    a: `HRT cream and DHEA work well in tandem to address weight loss - and even more important, fat loss with muscle gain.<br><br>You will see a redistribution of weight to lower your BMI and increase your lean muscle mass. There may be a temporary gain of water weight over the first week or two, but that should go away quickly, and you should then start to see the desired weight loss.<br><br>It's still important to eat well and exercise. In addition to the direct metabolic effects, you should also sleep better with these medications. This in turn helps with weight loss by affecting cortisol and decreasing the food cravings we get when we are tired.<br><br>Don't expect to lose a lot of weight in the first month; slow, steady progress is what to expect, which adds up over time. The medications reverse metabolic effects of declining hormone levels. Like reversing a moving train, first, the weight gain needs to stop before weight loss can occur.`,
  },
  {
    q: 'Are there more natural solutions for treating my menopause symptoms?',
    a: `There are some herbal remedies in circulation for treating menopause symptoms like Evening Primrose Oil and Dong Quai, but these products are not regulated. This means, you cannot be sure of their quality and safety. Be mindful if you choose to try any of these options. <br><br>The reality is that there is nothing more natural than using bioidentical hormones to replace the hormones your body is no longer producing. Bioidentical hormones are also micronized to be better absorbed and utilized by your body.`,
  },
  {
    q: 'How does Winona compare to an in-person visit?',
    a: `Once you complete your onboarding with Winona, you’ll have access to a patient portal, where you can connect with your doctor at any time. Rather than having to wait for an in-person visit, you can be prescribed, receive your medication, and communicate with your doctor all from the comfort of your home.`,
  },
  {
    q: 'Does Winona accept insurance?',
    a: `Some private or employer-designated insurance providers may pay for Winona, but this depends on your specific insurance plan and deductible. You can also opt to pay for your prescription out-of-pocket and submit your receipts to your insurance provider for possible reimbursement.<br><br>You can use your HSA (Health Saving Account) and FSA (Flexible Spending Account) to pay for Winona prescriptions at checkout.`,
  },
  {
    q: 'How do I order?',
    a: `Once you complete your medical questionnaire, you’ll receive a treatment recommendation and be prompted to add your payment method to your patient portal. Once your payment method has been added, a doctor will review the prescription and answer any questions you noted during the onboarding process.<br><br>You can watch our onboarding video to learn more.`,
  },
  {
    q: 'How do I consult a doctor first?',
    a: `Your Winona physician determines the proper treatment and dosage, by reviewing the information you provide during the intake process. During onboarding, you can submit any concerns or questions you'd like to address with the doctor. Assuming there were no questions or concerns from you or the doctor, and the physician has determined that you’re a good candidate for treatment, your prescription(s) will be filled.<br><br>However, if you’d like to consult with your physician before beginning your treatment, you can message them anytime in your patient portal here.`,
  },
  {
    q: 'Which treatment should I add?',
    a: `Treatments must be added by your physician. You'll first need to complete our online questionnaire, to have a prescription order placed with Winona. Once you’ve filled out the questionnaire, you’ll receive a recommended treatment plan. The doctor will review your treatment plan, order your prescription to the pharmacy, and then have it shipped directly to your door.`
  }
]

function openQuestion(index: number){
  itemIndex.value = index === itemIndex.value ? false : index
}
</script>

<style lang="scss" scoped>
.faq{
  background: rgb(227 222 255);
  padding: res(70, 100) 0;
  h2{
    text-align: center;
    margin-bottom: res(30, 50);
  }
  &__item{
    position: relative;
    padding: 12px 0 12px 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    svg{
      position: absolute;
      left: 0; top: 14px;
    }
    &-in{
      .faq__question{
        svg{
          transform: rotate(180deg);
        }
      }
      .faq__answer{
        max-height: 2000px;
        transition: 1s ease-in .5s;
      }
    }
  }
  &__question{
    font-size: res(18, 22);
    font-weight: 700;
    padding-bottom: 1rem;
    width: 100%;
    display: block;
    background: none;
    border: none;
    border-bottom: 0.3px solid #2b2660;
    text-align: left;
    position: relative;
    svg{
      right: 0;
      left: auto;
      top: 10px;
      transition: .5s ease;
    }
  }
  &__answer{
    font-size: res(18, 22);
    overflow: hidden;
    transition: .5s ease-out;
    max-height: 0px;
    &:before{
      content:"";
      height: 20px;
      display: block;
    }
    &:after{
      content:"";
      height: 30px;
      display: block;
    }
  }
}
</style>
