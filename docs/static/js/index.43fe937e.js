(function(){"use strict";var t={522:function(t,e,r){var a=r(963),n=r(252);function i(t,e){const r=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(r)}var s=r(744);const o={},l=(0,s.Z)(o,[["render",i]]);var c=l,u=r(201),d={class:"home"};function m(t,e,r,a,i,s){var o=(0,n.up)("HomeHeader"),l=(0,n.up)("HomeMainVisual"),c=(0,n.up)("HomeAbout"),u=(0,n.up)("HomeProgram"),m=(0,n.up)("HomeDesign"),f=(0,n.up)("HomeFooter");return(0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(o,{id:"top"}),(0,n.Wm)(l),(0,n.Wm)(c,{id:"about"}),(0,n.Wm)(u,{id:"program"}),(0,n.Wm)(m,{id:"design"}),(0,n.Wm)(f)])}var f=r.p+"static/img/logo-small.23113754.png",p=function(t){return(0,n.dD)("data-v-29df4e6c"),t=t(),(0,n.Cn)(),t},g={class:"home-header"},v={class:"home-header__logo-wrapper"},w={href:"#top"},b=p((function(){return(0,n._)("img",{class:"home-header__logo",src:f},null,-1)})),h=[b];function x(t,e,r,a,i,s){var o=(0,n.up)("router-link"),l=(0,n.up)("HamburgerMenu"),c=(0,n.up)("NavMenu"),u=(0,n.Q2)("smooth-scroll");return(0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("div",v,[(0,n.Wm)(o,{to:"/"},{default:(0,n.w5)((function(){return[(0,n.wy)(((0,n.wg)(),(0,n.iD)("a",w,h)),[[u,{duration:800,offset:0}]])]})),_:1})]),(0,n.Wm)(l,{class:"home-header__hamburger",onHamburgerBtnClick:t.isClick},null,8,["onHamburgerBtnClick"]),t.state.isClick?((0,n.wg)(),(0,n.j4)(c,{key:0,class:"home-header__drawer-menu"})):(0,n.kq)("",!0)])}var A=r(262),k=r(577);function y(t,e,r,a,i,s){return(0,n.wg)(),(0,n.iD)("div",{class:"hamburger-button",onClick:e[0]||(e[0]=function(e){t.state.isClick=!t.state.isClick,t.$emit("hamburger-btn-click",t.state.isClick)})},[(0,n._)("span",{class:(0,k.C_)(["line line_01",{btn_line01:t.state.isClick}])},null,2),(0,n._)("span",{class:(0,k.C_)(["line line_02",{btn_line02:t.state.isClick}])},null,2),(0,n._)("span",{class:(0,k.C_)(["line line_03",{btn_line03:t.state.isClick}])},null,2)])}var C=(0,n.aZ)({setup:function(){var t=(0,A.qj)({isClick:!1});return{state:t}}});const _=(0,s.Z)(C,[["render",y],["__scopeId","data-v-8ab663ea"]]);var B=_,j={href:"#about"},D=(0,n.Uk)("about"),E=[D],H={href:"#program"},I=(0,n.Uk)("program"),S=[I],Z={href:"#design"},O=(0,n.Uk)("design"),W=[O];function Y(t,e,r,a,i,s){var o=(0,n.Q2)("smooth-scroll");return(0,n.wg)(),(0,n.iD)("ul",null,[(0,n._)("li",null,[(0,n.wy)(((0,n.wg)(),(0,n.iD)("a",j,E)),[[o,{duration:800,offset:0}]])]),(0,n._)("li",null,[(0,n.wy)(((0,n.wg)(),(0,n.iD)("a",H,S)),[[o,{duration:800,offset:0}]])]),(0,n._)("li",null,[(0,n.wy)(((0,n.wg)(),(0,n.iD)("a",Z,W)),[[o,{duration:800,offset:0}]])])])}var G=(0,n.aZ)({});const R=(0,s.Z)(G,[["render",Y]]);var U=R,Q=(0,n.aZ)({components:{HamburgerMenu:B,NavMenu:U},setup:function(){var t=(0,A.qj)({isClick:!1}),e=function(e){t.isClick=e};return{state:t,isClick:e}}});const P=(0,s.Z)(Q,[["render",x],["__scopeId","data-v-29df4e6c"]]);var K=P,M=r.p+"static/img/logo.d410bb4c.png",T=r.p+"static/img/title.d70e6d7a.png";const q={class:"home-main-visual pt-24 pb-60"},L=(0,n.uE)('<div class="w-10/12 mx-auto" data-v-d36a8cca><div class="flex justify-center mb-2" data-v-d36a8cca><img class="home-main-visual__image" src="'+M+'" data-v-d36a8cca></div><div class="flex justify-center mb-2" data-v-d36a8cca><h1 data-v-d36a8cca><img class="home-main-visual__title" src="'+T+'" data-v-d36a8cca></h1></div><div class="text-primary tracking-widest" data-v-d36a8cca> Kakedashi Engineer&#39;s Portfolio Site. </div><div class="text-sm tracking-widest" data-v-d36a8cca> Go / Gin / Python / Vue.js / HTML5 / CSS3 / TypeScript / ExcelVBA / MySQL </div></div>',1),J=[L];function F(t,e){return(0,n.wg)(),(0,n.iD)("div",q,J)}const X={},z=(0,s.Z)(X,[["render",F],["__scopeId","data-v-d36a8cca"]]);var N=z,V=r.p+"static/img/about.b30d547f.png";const $=t=>((0,n.dD)("data-v-a175f714"),t=t(),(0,n.Cn)(),t),tt={class:"home-about"},et=$((()=>(0,n._)("div",{class:"w-10/12 max-w-3xl mx-auto"},[(0,n._)("div",{class:"flex justify-center mb-6"},[(0,n._)("h2",null,[(0,n._)("img",{class:"h-6",src:V})])]),(0,n._)("div",{class:"text-sm leading-8"},[(0,n._)("p",null,"Kawaichi"),(0,n._)("p",null,"age 28"),(0,n._)("p",null,"Kawasaki City, Kanagawa"),(0,n._)("p",null," 元会計事務所。税務会計業務全般 ExcelVBAを使った確定申告用のツール作成。 卒業後は、JAグループ会社にて勤務。 子会社のDTPデザインや、補助金業務の総括、ExcelVBA等を使った業務自動化に携わる。 ")])],-1))),rt=[et];function at(t,e){return(0,n.wg)(),(0,n.iD)("div",tt,rt)}const nt={},it=(0,s.Z)(nt,[["render",at],["__scopeId","data-v-a175f714"]]);var st=it,ot=r.p+"static/img/program.c5c7ef5b.png",lt=function(t){return(0,n.dD)("data-v-f6bee3fc"),t=t(),(0,n.Cn)(),t},ct={class:"home-program"},ut={class:"home-program__wrap w-10/12 mx-auto"},dt=lt((function(){return(0,n._)("div",{class:"flex justify-center mb-12"},[(0,n._)("h2",null,[(0,n._)("img",{class:"h-6",src:ot})])],-1)})),mt={class:"flex flex-col md:flex-row justify-center md:space-x-16"},ft={class:"flex flex-col md:flex-row justify-center md:space-x-16"};function pt(t,e,r,a,i,s){var o=(0,n.up)("HomeProgramDotTask"),l=(0,n.up)("HomeProgramFitScreenWindow"),c=(0,n.up)("HomeProgramPortfolio"),u=(0,n.up)("HomeProgramShotokukakudai");return(0,n.wg)(),(0,n.iD)("div",ct,[(0,n._)("div",ut,[dt,(0,n._)("div",mt,[(0,n.Wm)(o,{class:"mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg"}),(0,n.Wm)(l,{class:"mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg"})]),(0,n._)("div",ft,[(0,n.Wm)(c,{class:"mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg"}),(0,n.Wm)(u,{class:"mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg"})])])])}var gt=r.p+"static/img/logo.b78f4514.png",vt={class:"flex flex-row flex-wrap justify-center text-left"},wt={class:"w-full mx-auto overflow-hidden bg-white"},bt=(0,n._)("div",null,[(0,n._)("a",{class:"tw__hover-motion-opacity",href:"/"},[(0,n._)("img",{class:"object-cover object-center w-full h-56",src:gt,alt:"avatar"})])],-1),ht={class:"px-6 py-4"},xt=(0,n._)("h1",{class:"mb-2 text-xl font-bold"},"KAWAICHI Port folio",-1),At={class:"mb-4 text-sm"},kt=(0,n._)("div",{class:"mb-4"},[(0,n._)("p",{class:"leading-6"},"このポートフォリオサイトです。")],-1),yt=(0,n._)("div",{class:"mb-4 text-primary"},[(0,n._)("div",{class:"mb-4"},[(0,n._)("p",null,"- 開発期間 -"),(0,n._)("p",null,"2022.7 (約2週間)")])],-1),Ct={class:"flex flex-row space-x-2 justify-center"},_t=(0,n._)("div",{class:"flex flex-row flex-nowrap"},[(0,n._)("div",{class:"tw__round-box-dark bg-primary text-sm mr-3"},"Vue3"),(0,n._)("div",{class:"tw__round-box-dark bg-primary text-sm mr-3"},"Tailwind"),(0,n._)("div",{class:"tw__round-box-dark bg-primary text-sm"},"TypeScript")],-1);function Bt(t,e,r,a,i,s){var o=(0,n.up)("ButtonRightAllow"),l=(0,n.up)("ButtonGitHub");return(0,n.wg)(),(0,n.iD)("div",vt,[(0,n._)("div",wt,[bt,(0,n._)("div",ht,[xt,(0,n._)("div",At,[kt,yt,(0,n._)("div",Ct,[(0,n.Wm)(o,{linkUrl:"/",class:"w-6/12"}),(0,n.Wm)(l,{linkUrl:"https://github.com/Kawaichi0228/kawaichi-portfolio",class:"w-6/12"})])]),_t])])])}var jt=["href"],Dt=(0,n.uE)('<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-letterlight group-hover:translate-x-0 ease"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span><span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease font-semibold"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>WebSite</span><span class="relative invisible">WebSite</span>',3),Et=[Dt];function Ht(t,e,r,a,i,s){return(0,n.wg)(),(0,n.iD)("a",{href:t.linkUrl,target:"_blank",rel:"noreferrer",class:"w-full relative inline-flex items-center justify-center py-2 overflow-hidden transition duration-300 ease-out border-2 border-letterlight group"},Et,8,jt)}var It=(0,n.aZ)({props:{linkUrl:{type:String,required:!0}},setup:function(t){t.linkUrl}});const St=(0,s.Z)(It,[["render",Ht]]);var Zt=St,Ot=r.p+"static/img/github-fill-white.195efbd8.png",Wt=r.p+"static/img/github-fill-black.4a28c42b.png",Yt=["href"],Gt=(0,n.uE)('<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-letterlight group-hover:translate-x-0 ease"><img class="h-8" src="'+Ot+'"></span><span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease font-semibold"><img class="h-6 mr-2" src="'+Wt+'"> GitHub</span><span class="relative invisible">GitHub</span>',3),Rt=[Gt];function Ut(t,e,r,a,i,s){return(0,n.wg)(),(0,n.iD)("a",{href:t.linkUrl,target:"_blank",rel:"noreferrer",class:"w-full relative inline-flex items-center justify-center py-2 overflow-hidden transition duration-300 ease-out border-2 border-letterlight group"},Rt,8,Yt)}var Qt=(0,n.aZ)({props:{linkUrl:{type:String,required:!0}},setup:function(t){t.linkUrl}});const Pt=(0,s.Z)(Qt,[["render",Ut]]);var Kt=Pt,Mt=(0,n.aZ)({components:{ButtonRightAllow:Zt,ButtonGitHub:Kt}});const Tt=(0,s.Z)(Mt,[["render",Bt]]);var qt=Tt,Lt=r.p+"static/img/logo.c3ce8def.png",Jt={class:"flex flex-row flex-wrap overflow-hidden justify-center text-left"},Ft={class:"mx-auto overflow-hidden bg-white"},Xt=(0,n._)("div",null,[(0,n._)("a",{class:"tw__hover-motion-opacity",target:"_blank",rel:"noreferrer",href:"https://github.com/Kawaichi0228/golang-vue-portfolio"},[(0,n._)("img",{class:"object-cover object-center w-full h-56",src:Lt,alt:"avatar"})])],-1),zt={class:"px-6 py-4"},Nt=(0,n._)("h1",{class:"mb-2 text-xl font-bold"},"dot.Task",-1),Vt={class:"mb-4 text-sm"},$t=(0,n._)("div",{class:"mb-4"},[(0,n._)("p",{class:"leading-6"}," 日々のタスクを迅速に管理するための機能を備えた、 簡単で使いやすいコンセプトでデザインされたツールです。 ")],-1),te=(0,n._)("div",{class:"mb-4 text-primary"},[(0,n._)("div",{class:"mb-4"},[(0,n._)("p",null,"- 開発期間 -"),(0,n._)("p",null,"2022.6 - 2022.7 (約1ヶ月)")]),(0,n._)("div",null,[(0,n._)("p",null,"- 備考 -"),(0,n._)("p",null,"・Webアプリケーション"),(0,n._)("p",null,"・API実装(ログイン認証、CRUD操作等)")])],-1),ee={class:"flex flex-row space-x-2 justify-left"},re=(0,n.uE)('<div class="flex flex-row flex-wrap"><div class="tw__round-box-dark bg-primary text-sm mr-3 mb-3">Go</div><div class="tw__round-box-dark bg-primary text-sm mr-3 mb-3">Gin</div><div class="tw__round-box-dark bg-primary text-sm mr-3 mb-3"> Vue2 </div><div class="tw__round-box-dark bg-primary text-sm mr-3 mb-3"> TypeScript </div><div class="tw__round-box-dark bg-primary text-sm mr-3 mb-3"> MySQL </div><div class="tw__round-box-dark bg-primary text-sm mb-3">Vuetify</div></div>',1);function ae(t,e,r,a,i,s){var o=(0,n.up)("ButtonGitHub");return(0,n.wg)(),(0,n.iD)("div",Jt,[(0,n._)("div",Ft,[Xt,(0,n._)("div",zt,[Nt,(0,n._)("div",Vt,[$t,te,(0,n._)("div",ee,[(0,n.Wm)(o,{linkUrl:"https://github.com/Kawaichi0228/golang-vue-portfolio",class:"w-6/12"})])]),re])])])}var ne=(0,n.aZ)({components:{ButtonGitHub:Kt}});const ie=(0,s.Z)(ne,[["render",ae]]);var se=ie,oe=r.p+"static/img/logo.b2221351.png",le={class:"flex flex-row flex-wrap justify-center text-left"},ce={class:"w-full mx-auto overflow-hidden bg-white"},ue=(0,n._)("div",null,[(0,n._)("a",{class:"tw__hover-motion-opacity",href:"https://fitscreenwindow.com/",target:"_blank",rel:"noreferrer"},[(0,n._)("img",{class:"object-cover object-center w-full h-56",src:oe,alt:"avatar"})])],-1),de={class:"px-6 py-4"},me=(0,n._)("h1",{class:"mb-2 text-xl font-bold"},"Fit Screen Window",-1),fe={class:"mb-4 text-sm"},pe=(0,n._)("div",{class:"mb-4"},[(0,n._)("p",{class:"leading-6"}," 選択中のアクティブなウィンドウを、すばやく画面にフィットすることができるWindows向けのアプリです。 ")],-1),ge=(0,n._)("div",{class:"mb-4 text-primary"},[(0,n._)("div",{class:"mb-4"},[(0,n._)("p",null,"- 開発期間 -"),(0,n._)("p",null,"2022.3 - 2022.4 (約2ヶ月)")]),(0,n._)("div",null,[(0,n._)("p",null,"- 備考 -"),(0,n._)("p",null,"・デスクトップアプリケーション"),(0,n._)("p",null,"・スクラッチ開発(CSSフレームワーク未使用)")])],-1),ve={class:"flex flex-row space-x-2 justify-center"},we=(0,n._)("div",{class:"flex flex-row flex-nowrap"},[(0,n._)("div",{class:"tw__round-box-dark bg-primary text-sm mr-3"},"Python"),(0,n._)("div",{class:"tw__round-box-dark bg-primary text-sm mr-3"},"Qt"),(0,n._)("div",{class:"tw__round-box-dark bg-primary text-sm"},"Vue2")],-1);function be(t,e,r,a,i,s){var o=(0,n.up)("ButtonRightAllow"),l=(0,n.up)("ButtonGitHub");return(0,n.wg)(),(0,n.iD)("div",le,[(0,n._)("div",ce,[ue,(0,n._)("div",de,[me,(0,n._)("div",fe,[pe,ge,(0,n._)("div",ve,[(0,n.Wm)(o,{linkUrl:"https://fitscreenwindow.com/",class:"w-6/12"}),(0,n.Wm)(l,{linkUrl:"https://github.com/Kawaichi0228/FitScreenWindow",class:"w-6/12"})])]),we])])])}var he=(0,n.aZ)({components:{ButtonRightAllow:Zt,ButtonGitHub:Kt}});const xe=(0,s.Z)(he,[["render",be]]);var Ae=xe,ke=r.p+"static/img/logo.c93ecc89.png",ye={class:"flex flex-row flex-wrap justify-center text-left"},Ce={class:"w-full mx-auto overflow-hidden bg-white"},_e=(0,n._)("div",null,[(0,n._)("a",{class:"tw__hover-motion-opacity",href:"https://sites.google.com/view/shotokukakudai-excel",target:"_blank",rel:"noreferrer"},[(0,n._)("img",{class:"object-cover object-center w-full h-56",src:ke,alt:"avatar"})])],-1),Be={class:"px-6 py-4"},je=(0,n._)("h1",{class:"mb-2 text-xl font-bold"}," 所得拡大促進税制計算エクセルソフト ",-1),De={class:"mb-4 text-sm"},Ee=(0,n._)("div",{class:"mb-4"},[(0,n._)("p",{class:"leading-6"}," 法人税を税額控除できる制度としてメジャーである 「所得拡大促進税制」 の計算を、簡単に・スピーディーに行うことができる本格的なエクセルマクロです。 ")],-1),He=(0,n._)("div",{class:"mb-4 text-primary"},[(0,n._)("div",{class:"mb-4"},[(0,n._)("p",null,"- 開発期間 -"),(0,n._)("p",null,"2021.12 - 2022.2 (約3ヶ月)")]),(0,n._)("div",null,[(0,n._)("p",null,"- 備考 -"),(0,n._)("p",null,"・実ステップ数 約5,700ステップ"),(0,n._)("p",null,"・フルスクラッチ開発")])],-1),Ie=(0,n._)("div",{class:"flex flex-row flex-nowrap"},[(0,n._)("div",{class:"tw__round-box-dark bg-primary text-sm mr-3"},"ExcelVBA"),(0,n._)("div",{class:"tw__round-box-dark bg-primary text-sm"},"MySQL")],-1);function Se(t,e,r,a,i,s){var o=(0,n.up)("ButtonRightAllow");return(0,n.wg)(),(0,n.iD)("div",ye,[(0,n._)("div",Ce,[_e,(0,n._)("div",Be,[je,(0,n._)("div",De,[Ee,He,(0,n.Wm)(o,{linkUrl:"https://sites.google.com/view/shotokukakudai-excel",class:"w-6/12"})]),Ie])])])}var Ze=(0,n.aZ)({components:{ButtonRightAllow:Zt}});const Oe=(0,s.Z)(Ze,[["render",Se]]);var We=Oe,Ye=(0,n.aZ)({components:{HomeProgramPortfolio:qt,HomeProgramDotTask:se,HomeProgramFitScreenWindow:Ae,HomeProgramShotokukakudai:We}});const Ge=(0,s.Z)(Ye,[["render",pt],["__scopeId","data-v-f6bee3fc"]]);var Re=Ge,Ue=r.p+"static/img/design.b16efc56.png",Qe=function(t){return(0,n.dD)("data-v-321eec24"),t=t(),(0,n.Cn)(),t},Pe={class:"home-design py-28"},Ke={class:"w-10/12 mx-auto"},Me=Qe((function(){return(0,n._)("div",{class:"flex justify-center mb-12"},[(0,n._)("h2",null,[(0,n._)("img",{class:"h-6",src:Ue})])],-1)})),Te={class:"flex flex-row flex-wrap justify-center"},qe=["src"];function Le(t,e,r,a,i,s){var o=(0,n.up)("HomeDesignImageCard");return(0,n.wg)(),(0,n.iD)("div",Pe,[(0,n._)("div",Ke,[Me,(0,n._)("div",Te,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.imagePathArray,(function(t){return(0,n.wg)(),(0,n.iD)("div",{key:t,class:"w-6/12 sm:w-4/12 md:w-3/12"},[(0,n.Wm)(o,null,{default:(0,n.w5)((function(){return[(0,n._)("img",{src:t},null,8,qe)]})),_:2},1024)])})),128))])])])}const Je={class:"tw__flex-center container mx-auto max-w-sm p-4"},Fe={class:"shadow-lg tw__hover-motion-opacity-scale"};function Xe(t,e){return(0,n.wg)(),(0,n.iD)("div",Je,[(0,n._)("div",Fe,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])])}const ze={},Ne=(0,s.Z)(ze,[["render",Xe],["__scopeId","data-v-3117c1f0"]]);var Ve=Ne,$e=(0,n.aZ)({components:{HomeDesignImageCard:Ve},setup:function(){var t=(0,A.iH)([r(696),r(247),r(135),r(677),r(107),r(28),r(693),r(772),r(628),r(561),r(188)]);return{imagePathArray:t}}});const tr=(0,s.Z)($e,[["render",Le],["__scopeId","data-v-321eec24"]]);var er=tr,rr="data:image/png;base64,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",ar="data:image/png;base64,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";const nr={class:"home-footer"},ir=(0,n.uE)('<div class="flex flex-row justify-center mb-8" data-v-d688cf16><a href="http://twitter.com/kawaichi228" class="home-footer__icon" target="_blank" rel="noreferrer" data-v-d688cf16><img src="'+rr+'" style="height:28px;" data-v-d688cf16></a><a href="https://github.com/Kawaichi0228" class="home-footer__icon" target="_blank" rel="noreferrer" data-v-d688cf16><img src="'+ar+'" style="height:28px;" data-v-d688cf16></a></div><p class="text-gray text-xs" data-v-d688cf16>Copyright - all rights reserved.</p>',2),sr=[ir];function or(t,e){return(0,n.wg)(),(0,n.iD)("div",nr,sr)}const lr={},cr=(0,s.Z)(lr,[["render",or],["__scopeId","data-v-d688cf16"]]);var ur=cr,dr=(0,n.aZ)({name:"HomeView",components:{HomeHeader:K,HomeMainVisual:N,HomeAbout:st,HomeProgram:Re,HomeDesign:er,HomeFooter:ur}});const mr=(0,s.Z)(dr,[["render",m]]);var fr=mr,pr=[{path:"/",name:"home",component:fr},{path:"/about",name:"about",component:function(){return r.e(443).then(r.bind(r,242))}}],gr=(0,u.p7)({history:(0,u.PO)(""),routes:pr}),vr=gr,wr=r(907),br=(0,wr.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),hr=r(493),xr=r.n(hr),Ar=(0,a.ri)(c);Ar.use(xr()),Ar.use(br),Ar.use(vr),Ar.mount("#app")},696:function(t,e,r){t.exports=r.p+"static/img/brawnhambark.e4b4340c.png"},247:function(t,e,r){t.exports=r.p+"static/img/brawnice.2a94ddb1.png"},135:function(t,e,r){t.exports=r.p+"static/img/brawnmenu.94038a40.png"},561:function(t,e,r){t.exports=r.p+"static/img/cafeore.51fa54c5.png"},28:function(t,e,r){t.exports=r.p+"static/img/menchikorokke.8f3a7830.png"},693:function(t,e,r){t.exports=r.p+"static/img/nikkomilk.388f5bfc.png"},772:function(t,e,r){t.exports=r.p+"static/img/nokomilk.e1a7a664.png"},628:function(t,e,r){t.exports=r.p+"static/img/ozasa.407c4d51.png"},677:function(t,e,r){t.exports=r.p+"static/img/rakunouseminor.be830c5c.png"},107:function(t,e,r){t.exports=r.p+"static/img/resthouse.54a1ca12.png"},188:function(t,e,r){t.exports=r.p+"static/img/yakinikuhouse.b01771f8.png"}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,i){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],i=t[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(o=!1,i<s&&(s=i));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,n,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"static/js/about.164f7ac7.js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="kawaichi-portfolio:";r.l=function(a,n,i,s){if(t[a])t[a].push(n);else{var o,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+i){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",e+i),o.src=a),t[a]=[n];var m=function(e,r){o.onerror=o.onload=null,clearTimeout(f);var n=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(t){return t(r)})),e)return e(r)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p=""}(),function(){var t={826:0};r.f.j=function(e,a){var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var i=new Promise((function(r,a){n=t[e]=[r,a]}));a.push(n[2]=i);var s=r.p+r.u(e),o=new Error,l=function(a){if(r.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,n[1](o)}};r.l(s,l,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,i,s=a[0],o=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var u=l(r)}for(e&&e(a);c<s.length;c++)i=s[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},a=self["webpackChunkkawaichi_portfolio"]=self["webpackChunkkawaichi_portfolio"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(522)}));a=r.O(a)})();
//# sourceMappingURL=index.43fe937e.js.map