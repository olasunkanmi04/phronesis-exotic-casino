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
import debriefImage1 from "@/assets/debriefs/13-01.png";
import debriefImage2 from "@/assets/debriefs/13-02.png";
import debriefImage3 from "@/assets/debriefs/13-03.png";
import debriefImage4 from "@/assets/debriefs/13-04.png";
import debriefImage5 from "@/assets/debriefs/13-05.png";
import debriefImage6 from "@/assets/debriefs/13-06.png";
import debriefImage7 from "@/assets/debriefs/13-07.png";
import debriefImage8 from "@/assets/debriefs/13-08.png";
import debriefImage9 from "@/assets/debriefs/13-09.png";
import debriefImage10 from "@/assets/debriefs/13-10.png";
import debriefImage11 from "@/assets/debriefs/13-11.png";
import debriefImage12 from "@/assets/debriefs/13-12.png";
import debriefImage13 from "@/assets/debriefs/13-13.png";
import debriefImage14 from "@/assets/debriefs/14-1.png";
import debriefImage15 from "@/assets/debriefs/14-2.png";
import debriefImage16 from "@/assets/debriefs/14-3.png";
import { ref } from "vue";
const projectFeedback = ref([
  {
    title: "Project 8",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Samuel",
      },
      {
        question: "What made you smile?",
        answer: "Documentation was straightforward",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer: "No issue, nothing confusing",
      },
    ],
  },
  {
    title: "Project 9",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Samuel",
      },
      {
        question: "What made you smile?",
        answer: "",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer:
          "<ul><li style='margin-bottom:10px;'>Shipping flow was a bit confusing. We didn't know the shipping amount will reflect after inputting the address, it initially showed $0.00.</li> <li style='margin-bottom:10px;'>We were expecting when shipping condition is met, shipping will be $0 but it threw an error message saying shipping is invalid until we create a separate shipping rate with the condition for $0.</li></ul>",
      },
    ],
  },
  {
    title: "Project 10",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Samuel",
      },
      {
        question: "What made you smile?",
        answer: "",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer:
          "<ul><li style='margin-bottom:10px;'>We couldn't fully achieve the form with instrument but far gone into the meeting we realized framepay will most likely be the best option but we didn't have enough time to explore implementing with FramePay.</li></ul>",
      },
    ],
  },
  {
    title: "Project 11",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Samuel",
      },
      {
        question: "What made you smile?",
        answer: "",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer:
          "<ul><li style='margin-bottom:10px;'>To get a customer token using customerAuthentication login endpoint, the documentation didn't specify that expiredTime is required yet it seem it was as creating token api fails and doesn't communicate specific cause of error.</li> <li style='margin-bottom:10px;'>Creating deposit request using the API, documentation allows the setting of amountLimits during creation but doesn't return it after create instead uses customAmount to determine minimum and maximum amount limits.</li></ul>",
      },
    ],
  },
  {
    title: "Project 12",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Samuel",
      },
      {
        question: "What made you smile?",
        answer: "",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer:
          "<ul><li style='margin-bottom:10px;'>Values from 1000 displays NaN in the amount input field. Seems there's a bug in instruments for that length of value</li> <li style='margin-bottom:10px;'>We went over the time by 30 mins.</li></ul>",
      },
    ],
  },
  {
    title: "Project 13",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Arif",
      },
      {
        question: "What made you smile?",
        answer: "",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer: [
          "We were not able to find the first clue on how to adjust available payment methods by searching documentation. Queries like `specific payment methods` or `available payment methods` return confusing results. While `display payment methods` got us to the target docs page via 2 clicks. Probably keywords search would help here.",
          "The spelling is different on a single screen which is confusing<br><img src=" +
            debriefImage1 +
            " alt='debrief image' style='width: 100%; margin-top: 10px;' />",
          "RSelect element with tagging enabled should not propose to create a tag if strict match was found<br><img src=" +
            debriefImage2 +
            " alt='debrief image' style='width: 100%; margin-top: 10px;' />",
          `"Add another payment method is not working if no payment methods available anymore. This is not stated anywhere, and the button itself seems completely active, just not working for some reason.<br><img src="${debriefImage3}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Payment methods select at the Gateway account edit screen has multiple "bank-transfer" options with no clear distinction between them except of the suffix number. It's not clear which one to choose.<br><img src="${debriefImage4}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Gateway account ID field is prefilled with the gateway name as a value which can already be occupied leading to error message.<br><img src="${debriefImage5}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `There is no way to open sidebar inside the API documentation.<br><img src="${debriefImage6}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `There is no way to prioritize payment card brands in the adjust ready to pay payment methods list. Had to disable other brands at the gateway account level.<br><img src="${debriefImage7}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `When dragging items in the list, the item dragg button is outlined and the dragged part is cut in a strange way.<br><img src="${debriefImage8}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Search on the documentation has wierd sort order, not really relevand and the "Documentation" and "API reference" tags are not enough as we'd like to filter blog posts out as well.<br><img src="${debriefImage9}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Search displays a strange &lt;mark&gt; tag in the results.<br><img src="${debriefImage10}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Search cuts spaces between words due to original text being split into separate HTML text nodes without trailing spaces (which eventually get concatenated as is).<br><img src="${debriefImage11}" alt='debrief image' style='width: 100%; margin-top: 10px;' /><img src="${debriefImage12}" alt='debrief image' style='width: 100%;' />`,
          `Instruments don't respect latest Ready to Pay response and draws methods available on mount, so the amount change would not be respected as well.<br><img src="${debriefImage13}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Rules engine filters for Ready to Pay (and Payout) requested event doesn't allow filtering by root properties like "currency" or "amount". This prevents us from using RTP through Recomm at all. We were forced to adjust filters via the API. We also added a <a href="https://github.com/Rebilly/rebilly/pull/8318" target="_blank">PR</a> to fix this.`,
        ],
      },
    ],
  },
  {
    title: "Project 14",
    questions: [
      {
        question: "Which teammates executed the project?",
        answer: "Team members: Olasunkanmi, and Bartlomiej",
      },
      {
        question: "What made you smile?",
        answer: "When we finally found the documentation.",
      },
      {
        question: "What did you find confusing? Did you encounter any issues?",
        answer: [
          `We couldn't find anything in the documentation relating to the project when we search 'Local currency' meanwhile when we searched for 'currency conversion', we found local currency in DCC. <br><img src="${debriefImage15}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Should be 'Use this process to activate...'.<br><img src="${debriefImage14}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `We were initially confused when a currency that isn't related to my location was shown but realised it's the payment card's curreny.<br><img src="${debriefImage16}" alt='debrief image' style='width: 100%; margin-top: 10px;' />`,
          `Currency conversion seem to work with only payment card, doesn't work with other payment methods such as bank transfer and interac.`,
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
