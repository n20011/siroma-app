(this["webpackJsonpshiroma-app"]=this["webpackJsonpshiroma-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(4),s=n.n(i),a=(n(18),n(9)),r=n(7),l=n(12),d=n(11),u=(n(19),n(39)),j=n(1),h=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={isLoaded:!1,items:[]},c}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://yesno.wtf/api").then((function(e){return e.json()})).then((function(t){console.log(t.rates),e.setState({isLoaded:!0,items:t.answer,images:t.image})}))}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.isLoaded,c=e.images;return console.log(this.state),n?Object(j.jsxs)("div",{class:"backcolor",children:[Object(j.jsx)("h1",{Style:"text-align:center",children:Object(j.jsxs)("font",{color:"#3d5afe",children:[t,"!"]})}),Object(j.jsx)("img",{class:"images",src:c}),Object(j.jsx)("div",{class:"button",children:Object(j.jsx)(u.a,{size:"large",variant:"contained",color:"primary",onClick:function(){return window.location.reload()},children:"Next Yes or No ?"})})]}):Object(j.jsx)("h1",{Style:"text-align:center",children:"Now Loading..."})}}]),n}(c.Component),b=h;Object(i.render)(Object(j.jsx)(h,{}),document.getElementById("root"));var g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),g()}},[[25,1,2]]]);
//# sourceMappingURL=main.5881a57b.chunk.js.map