(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discusstesemeishi/add-or-update"],{"2d6b":function(e,t,r){"use strict";r.r(t);var n=r("ab11"),a=r("5c4d");for(var u in a)"default"!==u&&function(e){r.d(t,e,(function(){return a[e]}))}(u);r("744b");var s,i=r("f0c5"),c=Object(i["a"])(a["default"],n["b"],n["c"],!1,null,"46649536",null,!1,n["a"],s);t["default"]=c.exports},"5c4d":function(e,t,r){"use strict";r.r(t);var n=r("e558"),a=r.n(n);for(var u in n)"default"!==u&&function(e){r.d(t,e,(function(){return n[e]}))}(u);t["default"]=a.a},"744b":function(e,t,r){"use strict";var n=r("8ffd"),a=r.n(n);a.a},"8ffd":function(e,t,r){},a62c:function(e,t,r){"use strict";(function(e){r("0924");n(r("66fd"));var t=n(r("2d6b"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},ab11:function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},e558:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n,a,u,s){try{var i=e[u](s),c=i.value}catch(o){return void r(o)}i.done?t(c):Promise.resolve(c).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){u(s,n,a,i,c,"next",e)}function c(e){u(s,n,a,i,c,"throw",e)}i(void 0)}))}}var i=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("08a3"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:i},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var r=this;return s(n.default.mark((function a(){var u,s,i,c;return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,r.$api.session(u);case 3:if(s=a.sent,r.user=s.data,r.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(r.ruleForm.refid=t.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return r.ruleForm.id=t.id,a.next=11,r.$api.info("discusstesemeishi",r.ruleForm.id);case 11:s=a.sent,r.ruleForm=s.data;case 13:if(r.cross=t.cross,!t.cross){a.next=41;break}i=e.getStorageSync("crossObj"),a.t0=n.default.keys(i);case 17:if((a.t1=a.t0()).done){a.next=41;break}if(c=a.t1.value,"refid"!=c){a.next=23;break}return r.ruleForm.refid=i[c],r.ro.refid=!0,a.abrupt("continue",17);case 23:if("userid"!=c){a.next=27;break}return r.ruleForm.userid=i[c],r.ro.userid=!0,a.abrupt("continue",17);case 27:if("nickname"!=c){a.next=31;break}return r.ruleForm.nickname=i[c],r.ro.nickname=!0,a.abrupt("continue",17);case 31:if("content"!=c){a.next=35;break}return r.ruleForm.content=i[c],r.ro.content=!0,a.abrupt("continue",17);case 35:if("reply"!=c){a.next=39;break}return r.ruleForm.reply=i[c],r.ro.reply=!0,a.abrupt("continue",17);case 39:a.next=17;break;case 41:r.styleChange();case 42:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return s(n.default.mark((function r(){var a,u,s,i,c,o,l,d,f,m,p,b,g,k;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:for(a="",u=[],a&&(u=a.split(",")),s=0;s<u.length;s++)i=new RegExp(u[s],"g"),t.ruleForm.content.indexOf(u[s])>-1&&(t.ruleForm.content=t.ruleForm.content.replace(i,"**"));if(t.ruleForm.refid){r.next=7;break}return t.$utils.msg("关联表id不能为空"),r.abrupt("return");case 7:if(t.ruleForm.userid){r.next=10;break}return t.$utils.msg("用户id不能为空"),r.abrupt("return");case 10:if(t.ruleForm.content){r.next=13;break}return t.$utils.msg("评论内容不能为空"),r.abrupt("return");case 13:if(!t.cross){r.next=29;break}if(d=e.getStorageSync("statusColumnName"),f=e.getStorageSync("statusColumnValue"),""==d){r.next=29;break}if(m=e.getStorageSync("crossObj"),d.startsWith("[")){r.next=25;break}for(p in m)p==d&&(m[p]=f);return b=e.getStorageSync("crossTable"),r.next=23,t.$api.update("".concat(b),m);case 23:r.next=29;break;case 25:c=Number(e.getStorageSync("userid")),o=m["id"],l=e.getStorageSync("statusColumnName"),l=l.replace(/\[/,"").replace(/\]/,"");case 29:if(!o||!c){r.next=52;break}return t.ruleForm.crossuserid=c,t.ruleForm.crossrefid=o,g={page:1,limit:10,crossuserid:c,crossrefid:o},r.next=35,t.$api.list("discusstesemeishi",g);case 35:if(k=r.sent,!(k.data.total>=l)){r.next=41;break}return t.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 41:if(!t.ruleForm.id){r.next=46;break}return r.next=44,t.$api.update("discusstesemeishi",t.ruleForm);case 44:r.next=48;break;case 46:return r.next=48,t.$api.add("discusstesemeishi",t.ruleForm);case 48:e.setStorageSync("discusstesemeishiCleanType",!0),t.$utils.msgBack("提交成功");case 50:r.next=61;break;case 52:if(!t.ruleForm.id){r.next=57;break}return r.next=55,t.$api.update("discusstesemeishi",t.ruleForm);case 55:r.next=59;break;case 57:return r.next=59,t.$api.add("discusstesemeishi",t.ruleForm);case 59:e.setStorageSync("discusstesemeishiCleanType",!0),t.$utils.msgBack("提交成功");case 61:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,r("543d")["default"])}},[["a62c","common/runtime","common/vendor"]]]);