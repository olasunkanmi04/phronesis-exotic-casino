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
          <div v-html="feedback.answer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
