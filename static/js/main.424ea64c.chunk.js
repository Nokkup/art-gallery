(this["webpackJsonpart-gallery"]=this["webpackJsonpart-gallery"]||[]).push([[0],{10:function(e,t,a){e.exports={footer:"Footer_footer__3zaZc",footer__link:"Footer_footer__link__3YHoe",footer__year:"Footer_footer__year__227OH"}},12:function(e,t,a){e.exports={gallery:"Gallery_gallery__8IZt1"}},24:function(e,t,a){e.exports={wrapper:"App_wrapper__1aJHy"}},25:function(e,t,a){e.exports={loader:"Loader_loader__19VAl"}},5:function(e,t,a){e.exports={gallery__card:"GalleryCard_gallery__card__BYD0s",gallery__popup__card:"GalleryCard_gallery__popup__card__3RCTG",gallery__popup__image:"GalleryCard_gallery__popup__image__2_VDd",gallery__popup__title:"GalleryCard_gallery__popup__title__3sesM",gallery__popup__author:"GalleryCard_gallery__popup__author__1XXxy",gallery__popup__url:"GalleryCard_gallery__popup__url__1A9ba",gallery__popup__years:"GalleryCard_gallery__popup__years__EG5S0",gallery__popup__tag:"GalleryCard_gallery__popup__tag__3AVy_"}},51:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(21),s=a.n(c),l=a(2),o=a.n(l),i=a(22),p=a(6),_=a(4),u=a(23),d=a.n(u).a.create({baseURL:"https://collectionapi.metmuseum.org/public/collection/v1",responseType:"json"});function j(){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/departments");case 2:return t=e.sent,a=200===t.status?t.data.departments:[],e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=Object(p.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/search",{params:{departmentId:t,hasImages:!0,q:"art"}});case 2:return a=e.sent,r=200===a.status?a.data.objectIDs:[],e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=Object(p.a)(o.a.mark((function e(t){var a,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/objects/".concat(t));case 2:if(200===(r=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return n={imageSmallSize:r.data.primaryImageSmall,imageFullSize:r.data.primaryImage,author:r.data.artistDisplayName||"unknown",title:r.data.title||"unknown",wiki:r.data.artistWikidata_URL,tags:(null===(a=r.data.tags)||void 0===a?void 0:a.map((function(e){return e.term})))||[]},r.data.objectBeginDate!==r.data.objectEndDate?n.years="".concat(r.data.objectBeginDate," \u2014 ").concat(r.data.objectEndDate):n.years=r.data.objectBeginDate,n.years=n.years||"undated",e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){var t=e.filter((function(e){return"European Paintings"===e.displayName}))[0];return!t&&e.length&&(t=e[0]),t}var O=a(24),x=a.n(O),v=a(12),N=a.n(v),k=a(5),w=a.n(k),S=a(7),I=a.n(S),C=a(0),G=function(e){var t=e.isActive,a=e.setActive,r=e.children;return t&&Object(C.jsx)("div",{className:I.a.popup,onClick:function(){return a(!1)},children:Object(C.jsx)("div",{className:I.a.popup__body,children:Object(C.jsxs)("div",{className:I.a.popup__content,onClick:function(e){return e.stopPropagation()},children:[Object(C.jsx)("span",{className:I.a.popup__close,onClick:function(){return a(!1)},children:"\xd7"}),r]})})})},A=function(e){var t=e.description,a=e.isActive,r=e.setActive;return Object(C.jsx)(G,{isActive:a,setActive:r,children:Object(C.jsx)("div",{className:w.a.gallery__popup__card,children:Object(C.jsxs)("figure",{children:[Object(C.jsx)("img",{className:w.a.gallery__popup__image,src:t.imageSmallSize,alt:t.title}),Object(C.jsxs)("figcaption",{children:[Object(C.jsx)("p",{className:w.a.gallery__popup__title,children:t.title}),Object(C.jsx)("p",{className:w.a.gallery__popup__author,children:t.author}),Object(C.jsx)("p",{className:w.a.gallery__popup__years,children:t.years})]}),t.wiki&&Object(C.jsx)("p",{children:Object(C.jsx)("a",{className:w.a.gallery__popup__url,href:t.wiki,target:"_blank",rel:"noreferrer",children:"Wiki Page"})}),t.imageFullSize&&Object(C.jsx)("p",{children:Object(C.jsx)("a",{className:w.a.gallery__popup__url,href:t.imageFullSize,target:"_blank",rel:"noreferrer",children:"Full size"})}),t.tags&&t.tags.map((function(e,t){return Object(C.jsx)("span",{className:w.a.gallery__popup__tag,children:e},t)}))]})})})},D=function(e){var t=e.id,a=Object(r.useState)({}),n=Object(_.a)(a,2),c=n[0],s=n[1],l=Object(r.useState)(!1),i=Object(_.a)(l,2),u=i[0],d=i[1];Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:a=e.sent,s(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("img",{className:w.a.gallery__card,src:c.imageSmallSize,alt:c.title,onClick:function(){return d(!0)},onKeyDown:function(e){"Space"===e.code?d(!0):"Escape"===e.code&&d(!1)},tabIndex:0}),u&&Object(C.jsx)(A,{description:c,isActive:u,setActive:d})]})},E=a(8),F=a.n(E),L=function(e){var t=e.departments,a=e.selected,r=e.setDepartment,n=e.setRefresh;return Object(C.jsxs)("div",{className:F.a.selector,children:[Object(C.jsx)("select",{className:F.a.selector__select,value:a,onChange:function(e){return r(e.target.value)},tabIndex:1,children:t.map((function(e,t){return Object(C.jsx)("option",{value:e.departmentId,children:e.displayName},t)}))}),Object(C.jsx)("button",{className:F.a.selector__button,onClick:n,tabIndex:1,children:"Refresh"})]})},z=a(26),P=a(25),B=a.n(P),H=function(){return Object(C.jsx)("div",{className:B.a.loader,children:Object(C.jsx)("div",{})})},M=function(e){var t=e.isLoading,a=Object(z.a)(e,["isLoading"]);return t?Object(C.jsx)(H,{}):a.children},R=function(e){var t=e.idsList,a=e.departments,n=Object(r.useState)(null),c=Object(_.a)(n,2),s=c[0],l=c[1],i=Object(r.useState)([]),u=Object(_.a)(i,2),d=u[0],j=u[1],b=Object(r.useState)(!1),h=Object(_.a)(b,2),g=h[0],m=h[1],O=Object(r.useState)(!1),x=Object(_.a)(O,2),v=x[0],k=x[1];Object(r.useEffect)((function(){var e=y(a);l(null===e||void 0===e?void 0:e.departmentId)}),[a]),Object(r.useEffect)((function(){d.length&&!g||(!function(){var e=[];if(t&&t[s]){for(var a=0;a<6;a++){var r=Math.floor(Math.random()*t[s].length);e.push(t[s][r])}j(e)}}(),m(!1))}),[s,t,g,d]);var w=function(){var e=Object(p.a)(o.a.mark((function e(a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),l(a),t[a]){e.next=7;break}return e.next=5,f(a);case 5:r=e.sent,t[a]=r;case 7:m(!0),k(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)("div",{className:N.a.main,children:Object(C.jsxs)(M,{isLoading:!s,children:[Object(C.jsx)(L,{departments:a,selected:s,setDepartment:w,setRefresh:function(){m(!0)}}),Object(C.jsx)(M,{isLoading:v,children:Object(C.jsx)("div",{className:N.a.gallery,children:d.map((function(e,t){return Object(C.jsx)(D,{id:e},t)}))})})]})})},J=a(9),T=a.n(J),V=function(){return Object(C.jsxs)("div",{className:T.a.header,children:[Object(C.jsx)("div",{className:T.a.header__logo,children:Object(C.jsx)("a",{href:"https://github.com/Nokkup/art-gallery",tabIndex:-1,children:Object(C.jsx)("img",{src:"logo.svg",alt:"logo"})})}),Object(C.jsx)("h1",{className:T.a.header__title,children:"The Metropolitan Museum of Art Collection"})]})},q=a(10),K=a.n(q),Q=function(){return Object(C.jsxs)("div",{className:K.a.footer,children:[Object(C.jsx)("span",{className:K.a.footer__year,children:"2021"}),Object(C.jsx)("a",{className:K.a.footer__link,href:"https://github.com/Nokkup/art-gallery",children:"Github link"})]})},U=function(){var e=Object(r.useState)([]),t=Object(_.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)({}),s=Object(_.a)(c,2),l=s[0],u=s[1];return Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(o.a.mark((function e(){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return t=e.sent,a=y(t),e.next=6,f(a.departmentId);case 6:r=e.sent,n(t),u(Object(i.a)({},a.departmentId,r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(C.jsxs)("div",{className:x.a.wrapper,children:[Object(C.jsx)(V,{}),Object(C.jsx)(R,{idsList:l,departments:a}),Object(C.jsx)(Q,{})]})};s.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(U,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={popup:"Popup_popup__2INlt",popup__body:"Popup_popup__body__1cjos",popup__content:"Popup_popup__content__3Nail",popup__close:"Popup_popup__close__1waVd"}},8:function(e,t,a){e.exports={selector:"GallerySelector_selector__1_Q9J",selector__select:"GallerySelector_selector__select__3Bmq7",selector__button:"GallerySelector_selector__button__25QtI"}},9:function(e,t,a){e.exports={header:"Header_header__17K1E",header__title:"Header_header__title__1r-TF",header__logo:"Header_header__logo__1593e"}}},[[51,1,2]]]);
//# sourceMappingURL=main.424ea64c.chunk.js.map