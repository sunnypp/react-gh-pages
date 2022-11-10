// from https://react.i18next.com/guides/quick-start
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      aboutMe: {
        title: "About Me",
        greetings: "hi! I'm <1>Sunny Pun</1>, a <br/><3>Passionate Programmer</3><br/> who also cares about <br/><5>Design & Product</5>, for <br/> the sake of <7>next generations</7>."
      },
      experience: {
        title: "Experience",
        goodnotes: {
          company: "GoodNotes",
          duration: "Apr '19 - Oct '22",
          experiences: [
            "Built Proof-of-Concepts 🏗️",
            "Optimized performance by <1>tackling complexities</1> 📐",
            "Did <1>abstraction and reverse-engineering</1> for code reuse 🤹🏻",
            "Worked in various team sizes ranging from <1>solo to 20+</1> remotely 🏃🏻‍♀️🏃🏼🏃🏾‍♂️",
          ],
          recommendation: "What colleagues said: 📣",
          recommendations: [
            "<0>Insightful grader 👁️</0> <2>(for take-home CRDT assignment)</2>",
            "<0>Good story-teller 🧑🏻‍🏫</0> <2>(even won Best Presenter in 1st internal hackathon)</2>",
          ]
        },
        pred: {
          company: "Pred Limited",
          duration: "Jan '18 - Dec '18",
          experiences: [
            "Hands-on Development from Scratch (>5 projects, including <1>MOSTown</1>) 🗒️",
            "Client-Facing Tendering / Demonstration 🧑🏻‍💼",
            "Collaboration with Vendors / Freelancers / Clients and Project Managers 🤝",
            "Research & Development of New Tools As Proof-Of-Concept 🪄",
          ],
          libraries: "(briefly worked with <1>Phaser.js</1>, <3>Tensorflow.js</3>, <5>web3.js</5>, <7>gulp</7>, <9>React</9>, <11>GSAP</11>, etc.)",
        },
        neto: {
          company: "Neto <1>(by Maropost)</1>",
          duration: "Aug '15 - Jan '18",
          experiences: [
            "<0>100% of Perl test cases (>100 files and growing)</0> are based on <2>Peri</2> which I implemented as a Perl port of <4>JasmineJS</4> which earned me <6>Developer of the Month</6> 🏛️",
            "<0>Reduced 95%+ of the problem of \"overwriting staging environments\"</0> by making a Slackbot 🤖",
            "IntelliJ Groovy plugin, <1>bash script</1>, Chrome plugins and more on top of daily JavaScript + Perl coding to meet new eCommerce requirements as a remote team member of an Australian company",
          ],
        },
      },
      nonWork: {
        "title": "Non-Work",
      },
      gears: {
        "title": "Gears",
      },
      lifeGoals: {
        "title": "Life Goals",
      }
    }
  },
  zh: {
    translation: {
      aboutMe: {
        "greetings": "哈囉！"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
