(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/statistics/day/day"],{209:
/*!*************************************************************************!*\
  !*** F:/shop/xcxshop/main.js?{"page":"pages%2Fstatistics%2Fday%2Fday"} ***!
  \*************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){n(/*! uni-pages */4),n(/*! @dcloudio/uni-stat */5);e(n(/*! vue */2));function e(t){return t&&t.__esModule?t:{default:t}}t(e(n(/*! ./pages/statistics/day/day.vue */210)).default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createPage)},210:
/*!****************************************************!*\
  !*** F:/shop/xcxshop/pages/statistics/day/day.vue ***!
  \****************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! ./day.vue?vue&type=template&id=632fb280& */211),a=n(/*! ./day.vue?vue&type=script&lang=js& */213);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n(/*! ./day.vue?vue&type=style&index=0&lang=css& */283);var o=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */14),u=Object(o.default)(a.default,i.render,i.staticRenderFns,!1,null,null,null,!1,i.components,void 0);u.options.__file="F:/shop/xcxshop/pages/statistics/day/day.vue",e.default=u.exports},211:
/*!***********************************************************************************!*\
  !*** F:/shop/xcxshop/pages/statistics/day/day.vue?vue&type=template&id=632fb280& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./day.vue?vue&type=template&id=632fb280& */212);n.d(e,"render",function(){return i.render}),n.d(e,"staticRenderFns",function(){return i.staticRenderFns}),n.d(e,"recyclableRender",function(){return i.recyclableRender}),n.d(e,"components",function(){return i.components})},212:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/shop/xcxshop/pages/statistics/day/day.vue?vue&type=template&id=632fb280& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return i}),n.d(e,"staticRenderFns",function(){return r}),n.d(e,"recyclableRender",function(){return a}),n.d(e,"components",function(){});var i=function(){var t=this.$createElement;this._self._c},a=!1,r=[];i._withStripped=!0},213:
/*!*****************************************************************************!*\
  !*** F:/shop/xcxshop/pages/statistics/day/day.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./day.vue?vue&type=script&lang=js& */214),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},214:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/shop/xcxshop/pages/statistics/day/day.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a,r=(i=n(/*! ../../../components/u-charts/u-charts.js */279))&&i.__esModule?i:{default:i};n(/*! ../../../common/checker.js */282);var o=null,u={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},onLoad:function(){a=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.getServerData()},methods:{getServerData:function(){var t={categories:[],series:[]};t.categories=["2013","2014","2015","2016","2017","2018"],t.series=[{name:"新成交量3",data:[35,36,31,33,13,34]},{name:"新成交量4",data:[18,27,21,24,6,28]}],a.textarea=JSON.stringify(t),a.showColumn("canvasColumn",t)},showColumn:function(t,e){o=new r.default({$this:a,canvasId:t,type:"column",padding:[15,5,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:11,background:"#FFFFFF",pixelRatio:a.pixelRatio,animation:!0,categories:e.categories,series:e.series,xAxis:{disableGrid:!0},yAxis:{data:[{position:"right",axisLine:!1,format:function(t){return t.toFixed(0)+"元"}}]},dataLabel:!0,width:a.cWidth*a.pixelRatio,height:a.cHeight*a.pixelRatio,extra:{column:{type:"group",width:a.cWidth*a.pixelRatio*.45/e.categories.length}}})},touchColumn:function(t){o.showToolTip(t,{format:function(t,e){return"object"==typeof t.data?e+" "+t.name+":"+t.data.value:e+" "+t.name+":"+t.data}}),o.touchLegend(t,{animation:!0})}}};e.default=u}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},283:
/*!*************************************************************************************!*\
  !*** F:/shop/xcxshop/pages/statistics/day/day.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./day.vue?vue&type=style&index=0&lang=css& */284),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},284:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/shop/xcxshop/pages/statistics/day/day.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}},[[209,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/statistics/day/day.js.map