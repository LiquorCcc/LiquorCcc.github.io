webpackJsonp([0],{"+usA":function(t,n){},"01hJ":function(t,n){},CNmX:function(t,n){},HYrK:function(t,n){},IrVb:function(t,n){},MDrw:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("kV13"),a={props:{poiInfo:{type:Object,default:{}}},data:function(){return{}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._v(this._s(this.poiInfo.name))])},staticRenderFns:[]};var i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"nav"},[n("router-link",{staticClass:"nav-item",attrs:{to:"/goods"}},[this._v("\n    点餐\n    "),n("i",{staticClass:"line"})]),this._v(" "),n("router-link",{staticClass:"nav-item",attrs:{to:"/ratings"}},[this._v("\n    评价\n    "),n("i",{staticClass:"line"})]),this._v(" "),n("router-link",{staticClass:"nav-item",attrs:{to:"/seller"}},[this._v("\n    商家\n    "),n("i",{staticClass:"line"})])],1)},staticRenderFns:[]};var o={name:"App",components:{"app-header":e("C7Lr")(a,s,!1,function(t){e("HYrK")},"data-v-bbdb5edc",null).exports,"app-nav":e("C7Lr")({data:function(){return{}}},i,!1,function(t){e("+usA")},"data-v-bf9d6c9c",null).exports},data:function(){return{poiInfo:{}}},created:function(){var t=this;fetch("/api/goods").then(function(t){return t.json()}).then(function(n){0==n.code&&(t.poiInfo=n.data.poi_info)})}},c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header",{attrs:{poiInfo:this.poiInfo}}),this._v(" "),n("app-nav"),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var u=e("C7Lr")(o,c,!1,function(t){e("MDrw")},null,null).exports,l=e("5inH"),p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"goods"},[this._v("商品信息")])},staticRenderFns:[]};var d=e("C7Lr")({data:function(){return{}}},p,!1,function(t){e("CNmX")},"data-v-70e7b472",null).exports,f={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ratings"},[this._v("评价信息")])},staticRenderFns:[]};var v=e("C7Lr")({data:function(){return{}}},f,!1,function(t){e("IrVb")},"data-v-6ea08222",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"seller"},[this._v("商家信息")])},staticRenderFns:[]};var _=e("C7Lr")({data:function(){return{}}},h,!1,function(t){e("01hJ")},"data-v-b41bfaee",null).exports;r.a.config.productionTip=!1,r.a.use(l.a);var C=[{path:"/",redirect:"/goods"},{path:"/goods",component:d},{path:"/ratings",component:v},{path:"/seller",component:_}],m=new l.a({routes:C,linkActiveClass:"active"});new r.a({el:"#app",router:m,components:{App:u},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.6dc19fcb4b45c752f353.js.map