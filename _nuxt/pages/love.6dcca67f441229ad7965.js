webpackJsonp([6],{"Gm/C":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{startDay:"2015-05-19"}},computed:{getTimeDiff:function(){var t=new Date;this.startDay=new Date(this.startDay);var e=Math.abs(this.startDay.getTime()-t.getTime());return Math.ceil(e/864e5)-1}}},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-jumbotron",[a("h1",{staticClass:"text-center"},[t._v("Bao lâu rồi?")]),a("b-form-input",{attrs:{type:"date",value:"2013-01-08"},model:{value:t.startDay,callback:function(e){t.startDay=e},expression:"startDay"}}),a("h1",{staticClass:"text-center"},[t._v(t._s(t.getTimeDiff))]),a("p",{staticClass:"text-center"},[t._v("Ngày")])],1)},n=[],i={render:s,staticRenderFns:n},c=i,l=a("VU/8"),u=l(r,c,null,null,null);e.default=u.exports}});
//# sourceMappingURL=love.6dcca67f441229ad7965.js.map