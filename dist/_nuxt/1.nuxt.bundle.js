webpackJsonp([1],{128:function(e,t,a){a(168);var s=a(16)(a(157),a(200),"data-v-5d73d652",null);e.exports=s.exports},130:function(e,t,a){"use strict";t.a=[{name:"Evan You",title:"Creator of Vue.js",img:"img/evan.jpg",github:"https://github.com/yyx990803",twitter:"https://twitter.com/youyuxi",quote:"If something can be easy, why make it hard?"},{name:"Jacob Schatz",title:"Lead Frontend at Gitlab",img:"img/jacob.jpg",gitlab:"https://gitlab.com/jschatz1",twitter:"https://twitter.com/jakecodes",bio:"Jacob is the frontend lead at GitLab, published author and YouTuber. He likes to make stuff. Currently making another electric skateboard. With a degree in piano performance, he also likes playing concerts."},{name:"Sarah Drasner",title:"Consultant",img:"img/sarah.jpg",github:"https://github.com/sdras",twitter:"https://twitter.com/sarah_edo",bio:"Sarah is an award-winning Speaker, Consultant, and Staff Writer at CSS-Tricks. Sarah is also the co-founder of Web Animation Workshops, with Val Head. She’s given a Frontend Masters workshop on Advanced SVG Animations, and is working on a book for O’Reilly on SVG Animations. She’s formerly Manager of UX Design & Engineering at Trulia (Zillow). Last year Sarah won CSS Dev Conf’s “Best of Best of Award” as well as “Best Code Wrangler” from CSS Design Awards.",quote:"Vue has elegantly matched all of the best qualities of other frameworks in our ecosystem, while developing new techniques and capabilities. In this talk, we'll go beyond static rendering and use the virtual dom to render interactive, and engaging experiences through animation and SVG."},{name:"Blake Newman",title:"Software Engineer at Sainsbury’s",img:"img/blake.jpg",github:"https://github.com/blake-newman",twitter:"https://twitter.com/blakenewman",bio:"Software Engineer at Sainsbury’s and core Vue.js team member. Helping to build a sustainable and scalable Front-end architectures within Sainsbury’s. Encouraging use of Vue.js while promoting maintainable, functional and modularised code.",quote:"Keeping code and architecture quality high, maintainable and performant is evident. Despite this, it should also be highly adaptable and cope with change and is often ignored. Thus one of my core principles is to enable Sacrificial Architecture to ensure highly flexible and scalable front-end architecture."}]},131:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},132:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(137),i=a.n(s);t.default={components:{Modal:i.a},props:{speaker:{type:Object,required:!0},adjustImgUrl:{type:Boolean,default:!1}},data:function(){return{modalVisible:!1}},computed:{image:function(){return this.adjustImgUrl?"/../"+this.speaker.img:this.speaker.img}}}},133:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(138),i=a.n(s);t.default={components:{Speaker:i.a},props:{limit:{type:Number,default:999},speakers:{type:Array,required:!0},adjustImgUrl:{type:Boolean,default:!1}},computed:{speakersList:function(){return this.speakers.slice(0,this.limit)}}}},134:function(e,t){},135:function(e,t){},136:function(e,t){},137:function(e,t,a){a(136);var s=a(16)(a(131),a(142),"data-v-f161e5b2",null);e.exports=s.exports},138:function(e,t,a){a(135);var s=a(16)(a(132),a(140),null,null);e.exports=s.exports},139:function(e,t,a){a(134);var s=a(16)(a(133),a(141),null,null);e.exports=s.exports},140:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"speaker__container"},[e.modalVisible?a("modal",{on:{close:function(t){e.modalVisible=!1}}},[a("div",{slot:"body"},[a("div",{staticClass:"speaker__large"},[a("img",{staticClass:"speaker__image",attrs:{src:e.image,alt:e.speaker.name}}),a("div",{staticClass:"speaker__aside"},[a("div",{staticClass:"speaker__title"},[e._v(e._s(e.speaker.name))]),a("div",{staticClass:"speaker__subtitle"},[e._v(e._s(e.speaker.title))]),a("div",{staticClass:"speaker__social"},[e.speaker.github?a("a",{staticClass:"icon icon--github",attrs:{href:e.speaker.github,target:"_blank"}}):e._e(),e.speaker.gitlab?a("a",{staticClass:"icon icon--gitlab",attrs:{href:e.speaker.gitlab,target:"_blank"}}):e._e(),e.speaker.twitter?a("a",{staticClass:"icon icon--twitter",attrs:{href:e.speaker.twitter,target:"_blank"}}):e._e()])]),a("div",{staticClass:"speaker__bio"},[e._v(e._s(e.speaker.bio))]),e.speaker.quote?a("blockquote",{staticClass:"speaker__quote"},[e._v(e._s(e.speaker.quote)),a("cite",[e._v(e._s(e.speaker.name))])]):e._e()],1)])]):e._e(),a("div",{staticClass:"speaker",on:{click:function(t){e.modalVisible=!0}}},[a("img",{staticClass:"speaker__image",attrs:{src:e.image,alt:e.speaker.name},on:{click:function(t){e.modalVisible=!0}}}),a("div",{staticClass:"speaker__aside"},[a("div",{staticClass:"speaker__title"},[e._v(e._s(e.speaker.name))]),a("div",{staticClass:"speaker__subtitle"},[e._v(e._s(e.speaker.title))]),a("div",{staticClass:"speaker__social"},[e.speaker.gitlab?a("a",{staticClass:"icon icon--gitlab",attrs:{href:e.speaker.gitlab,target:"_blank"},on:{click:function(e){e.stopPropagation()}}}):e._e(),e.speaker.github?a("a",{staticClass:"icon icon--github",attrs:{href:e.speaker.github,target:"_blank"},on:{click:function(e){e.stopPropagation()}}}):e._e(),e.speaker.twitter?a("a",{staticClass:"icon icon--twitter",attrs:{href:e.speaker.twitter,target:"_blank"},on:{click:function(e){e.stopPropagation()}}}):e._e()]),a("button",{staticClass:"button-secondary",on:{click:function(t){e.modalVisible=!0}}},[e._v("Learn more")])])])],1)},staticRenderFns:[]}},141:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition-group",{attrs:{name:"fade",tag:"div"}},e._l(e.speakersList,function(t){return a("speaker",{key:t,staticClass:"fade",attrs:{speaker:t,"adjust-img-url":e.adjustImgUrl}})}))],1)},staticRenderFns:[]}},142:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper",on:{click:function(t){t.target===t.currentTarget&&e.$emit("close")}}},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[e._t("header")],2),a("div",{staticClass:"modal-body"},[e._t("body")],2),a("div",{staticClass:"modal-footer"},[e._t("footer",[a("button",{staticClass:"button-secondary",on:{click:function(t){e.$emit("close")}}},[e._v("Close")])])],2)])])])])},staticRenderFns:[]}},157:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(139),i=a.n(s),n=a(130);t.default={head:{title:"VueConf 2017 | Speakers"},components:{SpeakersList:i.a},data:function(){return{speakers:n.a}}}},168:function(e,t){},200:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"container__inner post-section"},[a("h1",[e._v("Speakers")]),a("speakers-list",{attrs:{speakers:e.speakers,"adjust-img-url":!0}}),a("h2",[e._v("More announcements soon!")]),e._m(0)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"post-section center cfp-section",attrs:{id:"apply"}},[a("h2",[e._v("Want to become a speaker?")]),a("p",[e._v("Do you have something great to show? Want to share some knowledge?")]),a("p",[a("strong",[e._v("That’s pretty Vuesome!")])]),a("a",{staticClass:"post-section__button button",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSdtbxBpV0j_zCnELXQuIkeGH8x6gaOWE0J8tTsAdpa0O5MYOw/viewform",target:"_blank"}},[e._v("Apply as a speaker")]),a("p",{staticClass:"post-section__paragraph"},[e._v("We will come back to you within a few days.")])])}]}}});