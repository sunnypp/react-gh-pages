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
            `Pioneered <1>Peri</1> (ported <3>JasmineJS</3>, an Automated Testing Framework to Perl), which is used in production. Earned me <5>Developer of the Month</5> 🏛️`,
            `Reduced <1>95% of the "overwriting staging environments" deployment issue</1> by launching a Slackbot 🤖`,
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
        hiddenGoUpHint: "Please go <1>UP</1> to read more! ⬆️ Thanks 😘",
      },
    }
  },
  "zh-CN": {
    translation: {
      aboutMe: {
        title: "我思我在",
        greetings: "<0>hi! 👋🏻</0><br/>我是 <3>Sunny Pun ☀️</3>：<br/>一个会着眼于 <br/><7>产品设计 🎨 及营运 💁🏻‍♂️</7> ，<br/>并<9>关心未来世代 👦🏻🧒🏼👧🏾</9>的<br/><5>充满热情的软件工程师 🔥</5>"
      },
      experience: {
        title: "工善其事",
        goodnotes: {
          company: "GoodNotes",
          duration: "19年4月 - 22年10月",
          experiences: [
            "实行概念验证 (Proof-of-Concept) 🏗️",
            "提升<1>算法速度</1> (前台渲染相关) 📐",
            "为达到程式码重用的<1>抽象化(Abstraction)及逆向工程(Reverse-engineering)</1> 🤹🏻",
            "曾在<1>1至20人以上</1>的队伍中遥距工作 🏃🏻‍♀️🏃🏼🏃🏾‍♂️",
          ],
          recommendation: "同事这么说 📣：",
          recommendations: [
            "<0>有深度的评改员 (Insightful grader) 👁️</0> <1>(评改面试者的CRDT编码挑战)</1>",
            "<0>好的“说书人”(Good story-teller) 🧑🏻‍🏫</0> <2>(在第一次内部骇客松 (Hackathon)的胜利队伍中获得了全场最佳演播员 (Best Presenter))</2>",
          ]
        },
        pred: {
          company: "Pred Limited",
          duration: "18年1月 - 18年12月",
          experiences: [
            "从零开始着手的专案多达5个，包括<1>MOSTown商场网页</1>) 🗒️",
            "对潜在客户的投标推销会议报告 🧑🏻‍💼",
            "和供应商、自由工作者、客户及专案主管的紧密合作 🤝",
            "软件技术的搜集及概念验证 🪄",
          ],
          libraries: "(接触过的程式库有<1>Phaser.js</1>, <3>Tensorflow.js</3>, <5>web3.js</5>, <7>gulp</7>, <9>React</9>, <11>GSAP</11>等)",
        },
        neto: {
          company: "Neto <1>(by Maropost)</1>",
          duration: "15年8月 - 18年1月",
          experiences: [
            "研发了<1>Peri</1>，一个基于移植<3>JasmineJS</3>至Perl的自动化程序测试框架，而获得了<5>本月最佳程序员</5> 🏛️",
            "以聊天机器人 (Slackbot) <1>减少了95%以上的“预备环境相互覆盖”状况</1> 🤖",
            "作为澳洲公司的遥距员工，在日常的JavaScript及Perl编程外，更透过编写IntelliJ Groovy插件、<1>Bash编程</1>、Chrome插件等去提升效率",
          ],
        },
      },
      passion: {
        title: "我心所向",
        cnc: "<0>C'n'C</0>是我和一些基督徒朋友建立的YouTube频道。我们把一些外语的诗班合唱歌翻译成广东话。我们各自在百忙之中仍继续抽出时间去制作新的作品 🎬",
        music: "时至今日，我依然是香港大学基督徒诗班的诗班员，也逢星期日在教会诗班中唱歌侍奉。🎶 在空余时间我也会弹吉他 🎸",
        startup: "我也有参与过创业比赛，也有其他人尝试过创业。如有兴趣了解我创业方面的经历，欢迎提问！（因为<1>以往把那些全写出来</1>太冗长了）",
        knowledge: {
          title: "知识传承",
          description: `自从看了<1>Jonathan Blow的《阻止文明倒塌（英语）》</1>后，我心中想把知识传承下去的火就被点燃了。<br/><br/>其后，我查找了<5>Zettelkasten</5>及其他例如<7>个人知识管理系统</7>等资料。在我接触大纲笔记软件（Outliner）之前我一直是一个<9>vim-wiki</9>的用家。在资料海洋中寻找方向的过程中，我更遇见了“把一切连接起来”的有趣（同时也实用）的概念：<11>GraphOS</11>`,
        },
        sync: {
          title: "同步/协作的两个极端",
          description: "支援离线的协同编辑：在我眼中，<1>无冲突复制数据类型</1> (CRDT)的技术概念就是数学之虚和应用之实的平衡。当人们即使偶尔离线，依然能够在同一份文件上作出改动（等待上线时才同步），并且每一个改动都不用等待伺服器的确认—— CRDT 这技术的实践让人类可以建构一个这样的世界。<br/><br/>实时同步：我喜欢在<6>Jamulus</6>上和别人线上玩音乐。有一次，我更和广东、马来西亚、台湾、泰国的人一起实时合奏。我希望未来能见到更多如此低延迟的实时应用，例如视像会议、虚拟/扩充实境等等。",
        }
      },
      gears: {
        title: "先利其器",
        lists: [
          {
            name: "LG 48吋OLED电视",
            description: "我在机缘巧合下遇上<1>这个视频</1>后，便开始了使用48吋电视作为“两个可随意改变位置及水平垂直摆放的27吋荧幕（视窗）”。我也经常会同时打开6个编码视窗（占用2/3个画面）然后利用剩余空间去浏览网页和进行即时通 📺",
          },
          {
            name: "LG SL4条形音箱",
            description: "当我买电视的时候，我享用了同时购买的修形音箱优惠。然后我每天过着快乐听音乐工作的日子——一时充满动感、一时柔情似水——而沉浸在音乐和编程中的我头上并没有重担 🎼",
          },
          {
            name: "究极骇客键盘（Ultimate Hacking Keyboard）",
            description: "一个拥有多重功能分层及巨集指令的键盘——它还可以分成左右两边 🤲🏻"
          },
          {
            name: "滚动指标．红（RollerMouse Red）",
            description: "将手指放在SDFJKL上的习惯能提升打字速度——这个设备可以让我在不用离开亲爱的SDFJKL的情况下，用拇指控制指标 👍🏻"
          },
          {
            name: "电脑冷却支架",
            description: "<1>我把初次用它的经验的起承转合写成了故事。</1>它真的提升了电脑的效能 😉",
          },
        ],
        "extraInfo": "我有更多“利器”: 便携电脑支架、外接显示卡，更有录音拍片的工具，例如一些麦克风、一些耳机、一个手机稳定器等等。全都是我的爱将 ❤️"
      },
      lifeGoals: {
        title: "生之意义",
        abstract: "一些人生目标——排名不分先后：",
        lists: [
          "成为心灵的巨人 ✝️",
          "为下一代做一点好事 🚼",
          "宏扬爱 🧡",
          "给予他人力量 💪🏻",
          "弄一些广东话基督徒诗班合唱歌 🎵",
        ]
      },
      message: {
        goUp: "一起向上！",
        hiddenGoUpHint: "请一反常态 <1>向上浏览资料</1> ⬆️ 谢谢 😘",
      },
    },
  },
  "zh-TW": {
    translation: {
      aboutMe: {
        title: "我思我在",
        greetings: "<0>hi! 👋🏻</0><br/>我是 <3>Sunny Pun ☀️</3>：<br/>一個會著眼於 <br/><7>產品設計 🎨 及營運 💁🏻‍♂️</7> ，<br/>並<9>關心未來世代 👦🏻🧒🏼👧🏾</9>的<br/><5>充滿熱情的軟件工程師 🔥</5>"
      },
      experience: {
        title: "工善其事",
        goodnotes: {
          company: "GoodNotes",
          duration: "19年4月 - 22年10月",
          experiences: [
            "實行概念驗證 (Proof-of-Concept) 🏗️",
            "提升<1>算法速度</1> (前台渲染相關) 📐",
            "為達到程式碼重用的<1>抽象化(Abstraction)及逆向工程(Reverse-engineering)</1> 🤹🏻",
            "曾在<1>1至20人以上</1>的隊伍中遙距工作 🏃🏻‍♀️🏃🏼🏃🏾‍♂️",
          ],
          recommendation: "同事這麼說 📣：",
          recommendations: [
            "<0>有深度的評改員 (Insightful grader) 👁️</0> <1>(評改面試者的CRDT編碼挑戰)</1>",
            "<0>好的「說書人」(Good story-teller) 🧑🏻‍🏫</0> <2>(在第一次內部駭客松 (Hackathon)的勝利隊伍中獲得了全場最佳演播員 (Best Presenter))</2>",
          ]
        },
        pred: {
          company: "Pred Limited",
          duration: "18年1月 - 18年12月",
          experiences: [
            "從零開始著手的專案多達5個，包括<1>MOSTown商場網頁</1>) 🗒️",
            "對潛在客戶的投標推銷會議報告 🧑🏻‍💼",
            "和供應商、自由工作者、客戶及專案主管的緊密合作 🤝",
            "軟件技術的搜集及概念驗證 🪄",
          ],
          libraries: "(接觸過的程式庫有<1>Phaser.js</1>, <3>Tensorflow.js</3>, <5>web3.js</5>, <7>gulp</7>, <9>React</9>, <11>GSAP</11>等)",
        },
        neto: {
          company: "Neto <1>(by Maropost)</1>",
          duration: "15年8月 - 18年1月",
          experiences: [
            "研發了<1>Peri</1>，一個基於移植<3>JasmineJS</3>至Perl的自動化程序測試框架，而獲得了<5>本月最佳程序員</5> 🏛️",
            "以聊天機器人 (Slackbot) <1>減少了95%以上的「預備環境相互覆蓋」狀況</1> 🤖",
            "作為澳洲公司的遙距員工，在日常的JavaScript及Perl編程外，更透過編寫IntelliJ Groovy插件、<1>Bash編程</1>、Chrome插件等去提升效率",
          ],
        },
      },
      passion: {
        title: "我心所向",
        cnc: "<0>C'n'C</0>是我和一些基督徒朋友建立的YouTube頻道。我們把一些外語的詩班合唱歌翻譯成廣東話。我們各自在百忙之中仍繼續抽出時間去製作新的作品 🎬",
        music: "時至今日，我依然是香港大學基督徒詩班的詩班員，也逢星期日在教會詩班中唱歌侍奉。🎶 在空餘時間我也會彈吉他 🎸",
        startup: "我也有參與過創業比賽，也有其他人嘗試過創業。如有興趣了解我創業方面的經歷，歡迎提問！（因為<1>以往把那些全寫出來</1>太冗長了）",
        knowledge: {
          title: "知識傳承",
          description: `自從看了<1>Jonathan Blow的《阻止文明倒塌（英語）》</1>後，我心中想把知識傳承下去的火就被點燃了。<br/><br/>其後，我查找了<5>Zettelkasten</5>及其他例如<7>個人知識管理系統</7>等資料。在我接觸大綱筆記軟件（Outliner）之前我一直是一個<9>vim-wiki</9>的用家。在資料海洋中尋找方向的過程中，我更遇見了「把一切連接起來」的有趣（同時也實用）的概念：<11>GraphOS</11>`,
        },
        sync: {
          title: "同步/協作的兩個極端",
          description: "支援離線的協同編輯：在我眼中，<1>無衝突複製數據類型</1> (CRDT)的技術概念就是數學之虛和應用之實的平衡。當人們即使偶爾離線，依然能夠在同一份文件上作出改動（等待上線時才同步），並且每一個改動都不用等待伺服器的確認—— CRDT 這技術的實踐讓人類可以建構一個這樣的世界。<br/><br/>實時同步：我喜歡在<6>Jamulus</6>上和別人線上玩音樂。有一次，我更和廣東、馬來西亞、台灣、泰國的人一起實時合奏。我希望未來能見到更多如此低延遲的實時應用，例如視像會議、虛擬/擴充實境等等。",
        }
      },
      gears: {
        title: "先利其器",
        lists: [
          {
            name: "LG 48吋OLED電視",
            description: "我在機緣巧合下遇上<1>這個視頻</1>後，便開始了使用48吋電視作為「兩個可隨意改變位置及水平垂直擺放的27吋螢幕（視窗）」。我也經常會同時打開6個編碼視窗（佔用2/3個畫面）然後利用剩餘空間去瀏覽網頁和進行即時通 📺",
          },
          {
            name: "LG SL4條形音箱",
            description: "當我買電視的時候，我享用了同時購買的修形音箱優惠。然後我每天過著快樂聽音樂工作的日子——一時充滿動感、一時柔情似水——而沉浸在音樂和編程中的我頭上並沒有重擔 🎼",
          },
          {
            name: "究極駭客鍵盤（Ultimate Hacking Keyboard）",
            description: "一個擁有多重功能分層及巨集指令的鍵盤——它還可以分成左右兩邊 🤲🏻"
          },
          {
            name: "滾動指標．紅（RollerMouse Red）",
            description: "將手指放在SDFJKL上的習慣能提升打字速度——這個設備可以讓我在不用離開親愛的SDFJKL的情況下，用拇指控制指標 👍🏻"
          },
          {
            name: "電腦冷卻支架",
            description: "<1>我把初次用它的經驗的起承轉合寫成了故事。</1>它真的提升了電腦的效能 😉",
          },
        ],
        "extraInfo": "我有更多「利器」: 便攜電腦支架、外接顯示卡，更有錄音拍片的工具，例如一些麥克風、一些耳機、一個手機穩定器等等。全都是我的愛將 ❤️"
      },
      lifeGoals: {
        title: "生之意義",
        abstract: "一些人生目標——排名不分先後：",
        lists: [
          "成為心靈的巨人 ✝️",
          "為下一代做一點好事 🚼",
          "宏揚愛 🧡",
          "給予他人力量 💪🏻",
          "弄一些廣東話基督徒詩班合唱歌 🎵",
        ]
      },
      message: {
        goUp: "一起向上！",
        hiddenGoUpHint: "請一反常態 <1>向上瀏覽資料</1> ⬆️ 謝謝 😘",
      },
    },
  },
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
