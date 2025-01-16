<template>
  <div>
    <div v-for="project in projectFeedback">
      <nav @click="showResponse(project.title)">
        <p class="project-title">
          {{ project.title }}
        </p>
      </nav>
      <div class="project-reponse" v-if="activeProject === project.title">
        <div v-for="feedback in project.questions">
          <h5>{{ feedback.question }}</h5>
          <div
            v-html="feedback.answer"
            v-if="typeof feedback.answer === 'string'"
          ></div>
          <ol v-else-if="Array.isArray(feedback.answer)">
            <li
              v-for="answer in feedback.answer"
              :key="answer"
              v-html="answer"
            ></li>
          </ol>
          <div v-else>---</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import debriefImage1 from "@/assets/debriefs/13-01.png";
// import debriefImage2 from "@/assets/debriefs/13-02.png";
// import debriefImage3 from "@/assets/debriefs/13-03.png";
// import debriefImage4 from "@/assets/debriefs/13-04.png";
// import debriefImage5 from "@/assets/debriefs/13-05.png";
// import debriefImage6 from "@/assets/debriefs/13-06.png";
// import debriefImage7 from "@/assets/debriefs/13-07.png";
// import debriefImage8 from "@/assets/debriefs/13-08.png";
// import debriefImage9 from "@/assets/debriefs/13-09.png";
// import debriefImage10 from "@/assets/debriefs/13-10.png";
// import debriefImage11 from "@/assets/debriefs/13-11.png";
// import debriefImage12 from "@/assets/debriefs/13-12.png";
// import debriefImage13 from "@/assets/debriefs/13-13.png";
// import debriefImage14 from "@/assets/debriefs/14-1.png";
// import debriefImage15 from "@/assets/debriefs/14-2.png";
// import debriefImage16 from "@/assets/debriefs/14-3.png";
import debriefImage17 from "@/assets/debriefs/15-1.png";
import debriefImage18 from "@/assets/debriefs/15-2.png";
import debriefImage19 from "@/assets/debriefs/15-3.mov";
import debriefImage20 from "@/assets/debriefs/16-1.png";
import debriefImage21 from "@/assets/debriefs/16-2.png";
import debriefImage22 from "@/assets/debriefs/16-3.png";
import debriefImage23 from "@/assets/debriefs/16-4.png";
import debriefImage24 from "@/assets/debriefs/17-1.png";
import debriefImage25 from "@/assets/debriefs/17-2.png";
import debriefImage26 from "@/assets/debriefs/17-3.png";
import debriefImage27 from "@/assets/debriefs/17-4.png";
import debriefImage28 from "@/assets/debriefs/17-5.png";
import debriefImage29 from "@/assets/debriefs/18-1.png";
import debriefImage30 from "@/assets/debriefs/19-1.png";
import debriefImage31 from "@/assets/debriefs/19-2.png";
import debriefImage32 from "@/assets/debriefs/20-1.png";
import debriefImage33 from "@/assets/debriefs/20-2.png";
import debriefImage34 from "@/assets/debriefs/20-3.png";
import debriefImage35 from "@/assets/debriefs/20-4.png";
import debriefImage36 from "@/assets/debriefs/20-5.png";
import debriefImage37 from "@/assets/debriefs/20-6.png";
import debriefImage38 from "@/assets/debriefs/21-1.png";
import debriefImage39 from "@/assets/debriefs/21-2.png";
import debriefImage40 from "@/assets/debriefs/21-3.png";
import debriefImage41 from "@/assets/debriefs/21-4.png";
import debriefImage42 from "@/assets/debriefs/22-1.png";
import { ref } from "vue";
const projectFeedback = ref([
  // {
  //   title: "Project 8",
  //   questions: [
  //     {
  //       question: "Which teammates executed the project?",
  //       answer: "Team members: Olasunkanmi, and Samuel",
  //     },
  //     {
  //       question: "What made you smile?",
  //       answer: "Documentation was straightforward",
  //     },
  //     {
  //       question: "What did you find confusing? Did you encounter any issues?",
  //       answer: "No issue, nothing confusing",
  //     },
  //   ],
  // },
  // {
  //   title: "Project 9",
  //   questions: [
  //     {
  //       question: "Which teammates executed the project?",
  //       answer: "Team members: Olasunkanmi, and Samuel",
  //     },
  //     {
  //       question: "What made you smile?",
  //       answer: "",
  //     },
  //     {
  //       question: "What did you find confusing? Did you encounter any issues?",
  //       answer:
  //         "<ul><li style='margin-bottom:10px;'>Shipping flow was a bit confusing. We didn't know the shipping amount will reflect after inputting the address, it initially showed $0.00.</li> <li style='margin-bottom:10px;'>We were expecting when shipping condition is met, shipping will be $0 but it threw an error message saying shipping is invalid until we create a separate shipping rate with the condition for $0.</li></ul>",
  //     },
  //   ],
  // },
  // {
  //   title: "Project 10",
  //   questions: [
  //     {
  //       question: "Which teammates executed the project?",
  //       answer: "Team members: Olasunkanmi, and Samuel",
  //     },
  //     {
  //       question: "What made you smile?",
  //       answer: "",
  //     },
  //     {
  //       question: "What did you find confusing? Did you encounter any issues?",
  //       answer:
  //         "<ul><li style='margin-bottom:10px;'>We couldn't fully achieve the form with instrument but far gone into the meeting we realized framepay will most likely be the best option but we didn't have enough time to explore implementing with FramePay.</li></ul>",
  //     },
  //   ],
  // },
  // {
  //   title: "Project 11",
  //   questions: [
  //     {
  //       question: "Which teammates executed the project?",
  //       answer: "Team members: Olasunkanmi, and Samuel",
  //     },
  //     {
  //       question: "What made you smile?",
  //       answer: "",
  //     },
  //     {
  //       question: "What did you find confusing? Did you encounter any issues?",
  //       answer:
  //         "<ul><li style='margin-bottom:10px;'>To get a customer token using customerAuthentication login endpoint, the documentation didn't specify that expiredTime is required yet it seem it was as creating token api fails and doesn't communicate specific cause of error.</li> <li style='margin-bottom:10px;'>Creating deposit request using the API, documentation allows the setting of amountLimits during creation but doesn't return it after create instead uses customAmount to determine minimum and maximum amount limits.</li></ul>",
  //     },
  //   ],
  // },
  // {
  //   title: "Project 12",
  //   questions: [
  //     {
  //       question: "Which teammates executed the project?",
  //       answer: "Team members: Olasunkanmi, and Samuel",
  //     },
  //     {
  //       question: "What made you smile?",
  //       answer: "",
  //     },
  //     {
  //       question: "What did you find confusing? Did you encounter any issues?",
  //       answer:
  //         "<ul><li style='margin-bottom:10px;'>Values from 1000 displays NaN in the amount input field. Seems there's a bug in instruments for that length of value</li> <li style='margin-bottom:10px;'>We went over the time by 30 mins.</li></ul>",
  //     },
  //   ],
  // },
  // {
  //   title: "Project 13",
  //   questions: [
  //     {
  //       question: "Which teammates executed the project?",
  //       answer: "Team members: Olasunkanmi, and Arif",
  //     },
  //     {
  //       question: "What made you smile?",
  //       answer: "",
  //     },
  //     {
  //       question: "What did you find confusing? Did you encounter any issues?",
  //       answer: [
  //         "We were not able to find the first clue on how to adjust available payment methods by searching documentation. Queries like `specific payment methods` or `available payment methods` return confusing results. While `display payment methods` got us to the target docs page via 2 clicks. Probably keywords search would help here.",
  //         "The spelling is different on a single screen which is confusing<br><img src=" +
  //           debriefImage1 +
  //           " alt='debrief image' style='width: 100%; margin-top: 10px;' />",
  //         "RSelect element with tagging enabled should not propose to create a tag if strict match was found<br><img src=" +
  //           debriefImage2 +
  //           " alt='debrief image' style='width: 100%; margin-top: 10px;' />",
  //         `"Add another payment method is not working if no payment methods available anymore. This is not stated anywhere, and the button itself seems completely active, just not working for some reason.<br><img src="${debriefImage3}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `Payment methods select at the Gateway account edit screen has multiple "bank-transfer" options with no clear distinction between them except of the suffix number. It's not clear which one to choose.<br><img src="${debriefImage4}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `Gateway account ID field is prefilled with the gateway name as a value which can already be occupied leading to error message.<br><img src="${debriefImage5}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `There is no way to open sidebar inside the API documentation.<br><img src="${debriefImage6}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `There is no way to prioritize payment card brands in the adjust ready to pay payment methods list. Had to disable other brands at the gateway account level.<br><img src="${debriefImage7}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `When dragging items in the list, the item dragg button is outlined and the dragged part is cut in a strange way.<br><img src="${debriefImage8}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `Search on the documentation has wierd sort order, not really relevand and the "Documentation" and "API reference" tags are not enough as we'd like to filter blog posts out as well.<br><img src="${debriefImage9}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `Search displays a strange &lt;mark&gt; tag in the results.<br><img src="${debriefImage10}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `Search cuts spaces between words due to original text being split into separate HTML text nodes without trailing spaces (which eventually get concatenated as is).<br><img src="${debriefImage11}" alt='debrief image' style='width: 100%; margin-top: 10px;' /><img src="${debriefImage12}" alt='debrief image' style='width: 100%;' />`,
  //         `Instruments don't respect latest Ready to Pay response and draws methods available on mount, so the amount change would not be respected as well.<br><img src="${debriefImage13}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `Rules engine filters for Ready to Pay (and Payout) requested event doesn't allow filtering by root properties like "currency" or "amount". This prevents us from using RTP through Recomm at all. We were forced to adjust filters via the API. We also added a <a href="https://github.com/Rebilly/rebilly/pull/8318" target="_blank">PR</a> to fix this.`,
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Project 14",
  //   questions: [
  //     {
  //       question: "Which teammates executed the project?",
  //       answer: "Team members: Olasunkanmi, and Bartlomiej",
  //     },
  //     {
  //       question: "What made you smile?",
  //       answer: "When we finally found the documentation.",
  //     },
  //     {
  //       question: "What did you find confusing? Did you encounter any issues?",
  //       answer: [
  //         `We couldn't find anything in the documentation relating to the project when we search 'Local currency' meanwhile when we searched for 'currency conversion', we found local currency in DCC. <br><img src="${debriefImage15}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `Should be 'Use this process to activate...'.<br><img src="${debriefImage14}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `We were initially confused when a currency that isn't related to my location was shown but realised it's the payment card's curreny.<br><img src="${debriefImage16}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
  //         `Currency conversion seem to work with only payment card, doesn't work with other payment methods such as bank transfer and interac.`,
  //       ],
  //     },
  //   ],
  // },
  {
    title: "Project 15",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Bartlomiej",
      },
      {
        question: "What made you smile?",
        answer: "Documentation seem pretty straightforward.",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer: [
          `We're not sure if Rebilly has control over this but the text color is hard to read because it's dark color on a dark background. <br><img src="${debriefImage17}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          "We were confused as to how the system determines which gateway account to use. We created a separate gateway account for CAD that has 3DS enabled but the system used the previous gateway where we enabled DCC, so we had to remove CAD from the DCC enabled gateway for it to point to 3DS enabled gateway.",
          "Related to number 2 above, we enabled CAD for the DCC and one of our visa card uses the 3DS enabled gateway and the other uses the DCC enabled gateway, we are not sure how it determines which gateway to use.",
          `Choose another payment method button takes us out of our site. <br><img src="${debriefImage18}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `We noticed when testing, if you select a card, enter your cvv but change your mind and select another card and enter cvv for that card, it throws an error about billing address but when you start over and go straight to select the card throwing the error, it works fine.<br><video width="100%" controls>
  <source src="${debriefImage19}" type="video/mp4">
  Your browser does not support HTML video.
</video>`,
        ],
      },
    ],
  },
  {
    title: "Project 16",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Bartlomiej",
      },
      {
        question: "What made you smile?",
        answer: "Documentation seem pretty straightforward.",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer: [
          `Typographical error when testing on the website "anogther instead of another". We realised later on that this might have been the organization name. <br><img src="${debriefImage20}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `We had two errors on two attempt to make a payout request. One of the error was about permission and when you check the network, the error when this endpoint <em>/storefront/organizations/phronesis-exotic-escapes/payout-requests/{request_id}</em> is called had to do with ACL permissions, we updated the permissions and got the error in the image below but when we checked recomm we found both payout request attempt and we were able to fully fulfil one and partially fully the other. <br><img src="${debriefImage21}" alt='debrief image' style='width: 100%; margin-top: 10px;' /><br><img src="${debriefImage22}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `After getting a success message that allocation was successful, we immiedately got this error  <em>The total allocated amount must be less than or equal to the available amount.</em>. Also, there were two toast success notifications.". <br><img src="${debriefImage23}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
        ],
      },
    ],
  },
  {
    title: "Project 17",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Dara",
      },
      {
        question: "What made you smile?",
        answer: "Documentation seem pretty straightforward.",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer: [
          `We have eCheck, ACH and Skrill set up but only Skrill and Bank account show. <br><img src="${debriefImage24}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Ready to payout api returns eCheck but instrument doesn't display it for either USA or Canada. <br><img src="${debriefImage25}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `In recomm the payout request page should prepoluated the amount on the request instrument since we already know that. <br><img src="${debriefImage26}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Try to fulfil $5 out of $10 requested. Got an error and transaction was declined yet I payout request status changed to partially fulfil and total payout allocation remaining is now $5. <br><img src="${debriefImage27}" alt='debrief image' style='width: 100%; margin-top: 10px;' /> <br><img src="${debriefImage28}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Will be nice to see the transaction/timeline in the payout request page.`,
        ],
      },
    ],
  },
  {
    title: "Project 18",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Bartlomiej",
      },
      {
        question: "What made you smile?",
        answer: "",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer: [
          `We couldn't find documentation on how to configure apple pay or google pay outside of framepay.`,
          `When we tried paying with apple pay it says Amount Pending. <br><img src="${debriefImage29}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Is there a way the digital wallets know it's a test transaction? We thought because it's a testprocessor gateway it will know it's a test transaction.`,
        ],
      },
    ],
  },
  {
    title: "Project 19",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Bartlomiej",
      },
      {
        question: "What made you smile?",
        answer: "",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer: [
          `We weren't sure what to search for in the docs. We eventually figured it out without the docs.`,
          `We expect when two rules and conditions are met, both should take action but Skrill payment only displays when currency is USD and customer LTV is $10,000+. <br><img src="${debriefImage30}" alt='debrief image' style='width: 100%; margin-top: 10px;' /><br><img src="${debriefImage31}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          "We noticed we couldn't edit a segment that was created.",
        ],
      },
    ],
  },
  {
    title: "Project 20",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Bartlomiej",
      },
      {
        question: "What made you smile?",
        answer: "",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer: [
          `We kept getting this error intermittently and saved payment methods duplicate multiple times, but when we refresh it returns to normal. It happens when we switch page and back. <br><img src="${debriefImage32}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `There's disparity in the examples in the doc. One example says the mount options are, <em>cashierToken</em> and <em>element</em> while another says it's <em>token</em> and <em>mountElement</em>. <br><img src="${debriefImage33}" alt='debrief image' style='width: 100%; margin-top: 10px;' /><br><img src="${debriefImage34}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          "There is no variable for --r-payment-method-item-border-color-hover and it was in the documentation.",
          `Google pay button has a scroll bar. <br><img src="${debriefImage35}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `The --r-surface variable doesn't exist in the documentation, instead we have --r-alert-background. Both works because --r-alert-background is referencing --r-surface but for consistence, we shouldn't show --r-surface in the docs. <br><img src="${debriefImage36}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Google map API not working and we couldn't enter the address manually. <br><img src="${debriefImage37}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
        ],
      },
    ],
  },
  {
    title: "Project 21",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Radoslaw",
      },
      {
        question: "What made you smile?",
        answer: "",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer: [
          `No idea what to look at in the documentation. Was stock on Risk score documentation but couldn't get it to work work.`,
          `There should be a way to know here that 0 means permanently block. <br><img src="${debriefImage38}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `We were not sure how to enter number of consecutive decline transactions.`,
          `We couldn't save automated blocklist when there is a custom blocklist that isn't use. We should be able to delete the custom blocklist and save the automated blocklist.`,
          `When there is an error, there is no way to know if a user is at the bottom of the page.`,
          `We think there should be a separate UI for each blocklist instead of having them all in one page.`,
          `We think for block transactions with mismatched bank country and billing country, the first transaction should be blocked instead of letting it go through and then block subsequent transactions with the card. Maybe there should a switch if we want to block the first or just subsequent transactions.`,
          `UI alignment looks off. <br><img src="${debriefImage39}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `We get this error when we hit browser back button and tried the transaction again. <br><img src="${debriefImage40}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `After 6 declined transactions, we still have 0 declined payment intrument velocity. <br><img src="${debriefImage41}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `We couldn't test the first task Permanently block payment cards when the number of consecutive declined transactions exceeds 5.`,
        ],
      },
    ],
  },
  {
    title: "Project 22",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Radoslaw",
      },
      {
        question: "What made you smile?",
        answer: "",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer: [
          `There should be a way to toggle a gateway active or inactive from the table. <br><img src="${debriefImage42}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          "There should be a way to set Volume limits during gateway creation.",
          "We can't set a currency for volume limits, it's always in USD.",
          "Payment gateway will go over the limit if it's being forced by a rule. This probably should result in an error instead.",
          "When downtime schedule is deleted, the gateway is still down as transactions doesn't go to the gateway.",
          "The weighted distribution didn't seem to work for us. All transactions were routed to the gateway with larger weight, instead of roughly 60/30.",
          "We don't know if the limits work correctly. The downtime was sometimes applied, but it seemed like it either took much more than the specified limit, or there was a significant delay in triggering it. Also, even when removing the downtime, we couldn't get the originally prioritized gateway to work again.",
          "It seems like changing the limit resets the counter",
          "There's no way to check the current limit usage on the gateway",
        ],
      },
    ],
  },
]);
const activeProject = ref(null);
const showResponse = (project) => {
  activeProject.value = project;
};
</script>

<style scoped>
.project-title {
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: bold;
  transition:
    color 0.3s,
    background-color 0.3s;
  border-radius: 5px;
  cursor: pointer;
}

.project-title:hover {
  background-color: #d36135;
  color: #fff;
}

.project-reponse {
  padding: 0 20px;
  margin-bottom: 20px;
  color: #fff;
}

li {
  margin-bottom: 20px;
}
</style>
