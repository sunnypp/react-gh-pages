// from https://react.i18next.com/guides/quick-start
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      aboutMe: {
        title: "About Me",
        greetings: "<0>hi! 👋🏻</0><br/>I'm <3>Sunny Pun ☀️</3>, a <br/><5>Passionate Programmer 🔥</5><br/> who also cares about <br/><7>Design 🎨 & Product 💁🏻‍♂️</7>, for <br/><9>next generations 👦🏻🧒🏼👧🏾</9>."
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
            "<0>Insightful grader 👁️</0> <1>(for take-home CRDT assignment)</1>",
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
            "Enabled Automated Unit / Integration Testing of Perl codebase by porting <1>JasmineJS</1> to Perl (open-sourced as <3>Peri</3>, earned me <5>Developer of the Month</5> 🏛️",
            `<0>Solved the issue of "overwriting staging environments"</0>, by providing a Server Vacancy Management solution with a Slackbot 🤖`,
            "IntelliJ Groovy plugin, <1>bash script</1>, Chrome plugins and more on top of daily JavaScript + Perl coding to meet new eCommerce requirements as a remote team member of an Australian company",
          ],
        },
      },
      passion: {
        title: "Passion",
        cnc: "<0>C'n'C</0> is a YouTube channel that I started with my Christian friends for translating English choral songs into Cantonese. It's an on-going project. 🎬",
        music: "I am a regular choral singer for my church and my University's Christian Choir. 🎶 I am also a casual guitar player. 🎸",
        startup: "I've joined startup competitions and have a few startup attempts. Details to be added later or please ask me in person! It was probably too detailed <1>here (my old portfolio on Web Archive)</1>",
        knowledge: {
          title: "Knowledge",
          description: `There is an urge inside me to care about how knowledge can be passed into future generations, after I have watched this amazing talk which outlined some of the lost technologies in human history: <1>Preventing the Collapse of Civilisations by Jonathan Blow</1><br/><br/>Along the same path, I investigated about <5>Zettelkasten</5> and other ways of organizing knowledge (e.g. <7>Personal Knowledge Management</7> to start with). I was using <9>vim-wiki</9> before I use any outliners (e.g. Workflowy, Dynalist, Logseq). The idea of everything being connected as a graph is also interesting to me: <11>GraphOS</11>`,
        },
        sync: {
          title: "Synchronization / Collaboration in 2 Extremes",
          description: "Offline-first: I am heavily intrigued by the mathematical beauty of <1>Conflict-free Replicated Data Type</1> (CRDT). Imagine a world where people can collaborate while they are offline (and sync later) and data modification requires no one to wait for server response.<br/><br/>Real-time: I enjoy making music with others online using <6>Jamulus</6>. Once I tried jamming with people from Guangdong, Malaysia, Taiwan, Thailand at the same time. I hope this technology to be promoted and adapted in other sync-related application, like conference calls, VR / AR.",
        }
      },
      gears: {
        title: "Gears",
        lists: [
          {
            name: "LG OLED 48-inch TV",
            description: "Inspired by <1>this video</1>, I use such a large screen as freely-movable-and-rotatable 27-inch monitors. And I often open 6+ files using 2/3 of my screen leaving 1/3 for browsers and messaging. 📺",
          },
          {
            name: "LG SL4 Soundbar",
            description: "There was a great discount when I bought this with the TV. I then enjoyed playing music while working -- sometimes energetic ones, sometimes soothing ones -- without my headphones on. 🎼",
          },
          {
            name: "Ultimate Hacking Keyboard",
            description: "A highly customizable keyboard with layers and macros. It can be used as a split keyboard too. 🤲🏻"
          },
          {
            name: "RollerMouse Red",
            description: "Moving the cursor without fingers leaving the home row on keyboard. 👍🏻"
          },
          {
            name: "PC Cooling Pad",
            description: "This boosts the machine's performance. I have a <1>story</1> to tell about it. 😉",
          },
        ],
        extraInfo: "I have other gears like a portable computer stand, an eGPU, and video-audio equipments like microphones, headphones, a stabilizer, etc.. I love everyone of them."
      },
      lifeGoals: {
        title: "Life Goals",
        abstract: "These are super important to me, in no particular order:",
        lists: [
          "Be a spiritual giant ✝️",
          "Do good for next generations 🚼",
          "Spread love 🧡",
          "Empower others 💪🏻",
          "Make Cantonese Christian Choral Music 🎵",
        ]
      },
      message: {
        goUp: "Let's go UP!",
      },
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
