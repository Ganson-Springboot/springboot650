(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{6184:function(e,n,t){},8902:function(e,n,t){"use strict";t.r(n);var r=t("bea8"),a=t("cfda");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("b48f"),t("a371");var i,o=t("f0c5"),l=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"0ae088ee",null,!1,r["a"],i);n["default"]=l.exports},a371:function(e,n,t){"use strict";var r=t("bd11"),a=t.n(r);a.a},a47d:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,a,u,i){try{var o=e[u](i),l=o.value}catch(s){return void t(s)}o.done?n(l):Promise.resolve(l).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){u(i,r,a,o,l,"next",e)}function l(e){u(i,r,a,o,l,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var n=this;return i(r.default.mark((function t(){var a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],a=e.getStorageSync("loginTable"),n.tableName=a,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),n.styleChange();case 5:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!("yonghu"==e.tableName&&e.ruleForm.yonghuzhanghao.length<3)){n.next=3;break}return e.$utils.msg("用户账号长度不能小于3"),n.abrupt("return");case 3:if(!("yonghu"==e.tableName&&e.ruleForm.yonghuzhanghao.length>10)){n.next=6;break}return e.$utils.msg("用户账号长度不能大于10"),n.abrupt("return");case 6:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=9;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 9:if(!("yonghu"==e.tableName&&e.ruleForm.mima.length<3)){n.next=12;break}return e.$utils.msg("密码长度不能小于3"),n.abrupt("return");case 12:if(!("yonghu"==e.tableName&&e.ruleForm.mima.length>10)){n.next=15;break}return e.$utils.msg("密码长度不能大于10"),n.abrupt("return");case 15:if("yonghu"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=18;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 18:if("yonghu"!=e.tableName||!e.ruleForm.lianxifangshi||e.$validate.isMobile(e.ruleForm.lianxifangshi)){n.next=21;break}return e.$utils.msg("联系方式应输入手机格式"),n.abrupt("return");case 21:if("shangjiashitang"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=24;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 24:if("shangjiashitang"!=e.tableName||!e.ruleForm.lianxidianhua||e.$validate.isMobile(e.ruleForm.lianxidianhua)){n.next=27;break}return e.$utils.msg("联系电话应输入手机格式"),n.abrupt("return");case 27:return n.next=29,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 29:e.$utils.msgBack("注册成功");case 31:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},b48f:function(e,n,t){"use strict";var r=t("6184"),a=t.n(r);a.a},bd11:function(e,n,t){},bea8:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},cfda:function(e,n,t){"use strict";t.r(n);var r=t("a47d"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},d511:function(e,n,t){"use strict";(function(e){t("0924");r(t("66fd"));var n=r(t("8902"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["d511","common/runtime","common/vendor"]]]);