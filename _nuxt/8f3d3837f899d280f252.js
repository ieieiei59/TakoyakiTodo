(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{307:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return h}));var n=r(309),o=r(2),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),h=Object(o.h)("v-card__title");n.a},309:function(t,e,r){"use strict";r(10),r(8),r(5),r(4),r(7);var n=r(1),o=(r(17),r(313),r(134)),l=r(314),c=r(56),d=r(9);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return v({"v-card":!0},c.a.options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},313:function(t,e,r){var content=r(317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("e23b7040",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";r(17);var n=r(0),o=(r(10),r(8),r(5),r(4),r(7),r(85),r(1)),l=(r(318),r(129)),c=r(13),d=r(102),h=r(90),v=r(20),f=r(2),m=r(9);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y=Object(m.a)(c.a,Object(d.b)(["absolute","fixed","top","bottom"]),h.a,v.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(o.a)(t,this.$vuetify.rtl?"right":"left",Object(f.f)(this.normalizedValue,"%")),Object(o.a)(t,"width",Object(f.f)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?l.b:l.c},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f.f)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(f.l)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(o.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(y,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},317:function(t,e,r){(e=r(11)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--light.v-card.v-card--outlined{border:1px solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#424242;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:1px solid hsla(0,0%,100%,.12)}.v-card{display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card:not(.v-sheet--tile):not(.v-card--shaped){border-radius:4px}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle{padding:16px}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions .v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions .v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions .v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions .v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions .v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions .v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--shaped{border-radius:24px 4px}',""]),t.exports=e},318:function(t,e,r){var content=r(319);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("cf87dc84",content,!0,{sourceMap:!1})},319:function(t,e,r){(e=r(11)(!1)).push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s;width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%;z-index:1}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%;z-index:2}.v-progress-linear__determinate{height:inherit;transition:inherit}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate--active .long{animation:indeterminate;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear__indeterminate--active .short{animation:indeterminate-short;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear__stream{animation:stream .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;opacity:.3;pointer-events:none;position:absolute;right:-8px;top:calc(50% - 2px);transition:inherit}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat-x}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{animation:query;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{animation:query-short;animation-duration:2s;animation-iteration-count:infinite}@keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes stream{to{transform:translateX(-8px)}}",""]),t.exports=e},322:function(t,e,r){var content=r(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("3a5b4614",content,!0,{sourceMap:!1})},323:function(t,e,r){var content=r(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("54b3e4ba",content,!0,{sourceMap:!1})},330:function(t,e,r){"use strict";r(179);var n=r(126);e.a=Object(n.a)("flex")},331:function(t,e,r){"use strict";r(179);var n=r(126);e.a=Object(n.a)("layout")},357:function(t,e,r){"use strict";r(179);var n=r(2);e.a=Object(n.h)("spacer","div","v-spacer")},373:function(t,e,r){"use strict";var n=r(322);r.n(n).a},374:function(t,e,r){(e=r(11)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@keyframes turn{to{transform:rotateX(0deg)}}@keyframes godown{to{top:180px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},375:function(t,e,r){"use strict";var n=r(323);r.n(n).a},376:function(t,e,r){(e=r(11)(!1)).push([t.i,".VuetifyLogo{width:180px;transform:rotateY(560deg);animation:turn 3.5s ease-out 1s forwards}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=e},389:function(t,e,r){"use strict";r.r(e);r(373);var n=r(58),o=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,l=(r(375),{components:{Logo:o,VuetifyLogo:Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:"data:image/png;base64,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"}})}),[],!1,null,null,null).exports}}),c=r(82),d=r.n(c),h=r(138),v=r(309),f=r(307),m=r(330),x=r(331),y=r(357),_=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("div",{staticClass:"text-center"},[r("logo"),t._v(" "),r("vuetify-logo")],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("\n        Welcome to the Vuetify + Nuxt.js template\n      ")]),t._v(" "),r("v-card-text",[r("p",[t._v("\n          Vuetify is a progressive Material Design component framework for\n          Vue.js. It was designed to empower developers to create amazing\n          applications.\n        ")]),t._v(" "),r("p",[t._v("\n          For more information on Vuetify, check out the\n          "),r("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank"}},[t._v(" documentation ")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("\n          If you have questions, please join the official\n          "),r("a",{attrs:{href:"https://chat.vuetifyjs.com/",target:"_blank",title:"chat"}},[t._v("\n            discord ")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("\n          Find a bug? Report it on the github\n          "),r("a",{attrs:{href:"https://github.com/vuetifyjs/vuetify/issues",target:"_blank",title:"contribute"}},[t._v("\n            issue board ")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("\n          Thank you for developing with Vuetify and I look forward to bringing\n          more exciting features in the future.\n        ")]),t._v(" "),r("div",{staticClass:"text-xs-right"},[r("em",[r("small",[t._v("— John Leider")])])]),t._v(" "),r("hr",{staticClass:"my-3"}),t._v(" "),r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("\n          Nuxt Documentation\n        ")]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[t._v("\n          Nuxt GitHub\n        ")])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",nuxt:"",to:"/inspire"}},[t._v("\n          Continue\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=_.exports;d()(_,{VBtn:h.a,VCard:v.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VFlex:m.a,VLayout:x.a,VSpacer:y.a})}}]);