(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3761],{17002:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/folder/[itemId]",function(){return t(52217)}])},18118:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var c=t(85893),a=t(38712),i=t.n(a);function r(e){let{handleOpen:n}=e;return(0,c.jsxs)("div",{className:"".concat(i().containerOpenBtn," text-center"),onClick:n,style:{cursor:"pointer"},children:[(0,c.jsx)("h6",{children:"Open"}),(0,c.jsx)("h3",{children:(0,c.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"})})]})}},93530:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var c=t(85893),a=t(67294),i=t(35005),r=t(35015),s=t(72021),l=t(38712),o=t.n(l);function d(e){let{onNextClicked:n,onPreviousClicked:t,cover:l=!1,showAlert:d=!1,alertClosed:u=null}=e,[h,x]=(0,a.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{className:"".concat(o().previousPageBtn," ").concat(l?o().coverBtnFixed:o().pageBtnFixed),onClick:()=>{x(!1),t()},children:(0,c.jsx)("i",{className:"fa fa-chevron-left fa-lg","aria-hidden":"true"})}),(0,c.jsx)(i.Z,{className:"".concat(o().nextPageBtn," ").concat(l?o().coverBtnFixed:o().pageBtnFixed," pull-right"),onClick:()=>{x(!1),n()},children:(0,c.jsx)("i",{className:"fa fa-chevron-right fa-lg","aria-hidden":"true"})}),(0,c.jsx)(s.Z,{className:"p-3",position:l?"top-center":"middle-center",style:{zIndex:1e4},children:(0,c.jsxs)(r.Z,{show:d&&!h,onClose:()=>{x(!0),u()},bg:"warning",children:[(0,c.jsxs)(r.Z.Header,{children:[(0,c.jsx)("strong",{className:"me-auto",children:"Alert"}),(0,c.jsx)("small",{})]}),(0,c.jsx)(r.Z.Body,{children:"Hello, your have reached the end."})]})})]})}},52217:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var c=t(85893),a=t(67294),i=t(11163),r=t(9473),s=t(34051),l=t(31555),o=t(38712),d=t.n(o),u=t(41975),h=t(32552),x=t(32132),f=t(69563),j=t(37865),v=t(54232),g=t(18118),p=t(76822),m=t(93530),N=t(24638),C=t(49411),Z=t(49486),k=t(51892);function y(){(0,Z.qu)(!1,"Rendering item");let e=(0,r.I0)(),n=(0,i.useRouter)(),[t,o]=(0,a.useState)(!1),y=(0,r.v9)(e=>e.page.changingPage),b=(0,r.v9)(e=>e.page.id),w=(0,r.v9)(e=>e.page.container),q=(0,r.v9)(e=>e.page.position),E=(0,r.v9)(e=>e.container.workspaceKey),O=(0,r.v9)(e=>e.container.searchKey),P=(0,r.v9)(e=>e.container.searchIV),_=(0,r.v9)(e=>e.page.activity),I=(0,r.v9)(e=>e.page.activityErrors),[B,S]=(0,a.useState)(null),[R,F]=(0,a.useState)("ReadOnly"),W=(0,r.v9)(e=>e.page.title);async function T(t){if((0,Z.qu)(!1,"gotoAnotherItem ".concat(y," ").concat(b," ").concat(w," ").concat(q)),y||!(b||!w||!q))return;(0,C.cD)(!0);let c,a=null,i=e=>{let n;switch(e.split(":")[0]){case"b":n="/box/"+e;break;case"f":n="/folder/"+e;break;case"p":n="/page/"+e}return n};switch(t){case"-1":try{c=await (0,k.kN)("getPreviousItem",w,q,e),"EndOfContainer"===c?o(!0):a=i(c)}catch(e){}break;case"+1":try{c=await (0,k.kN)("getNextItem",w,q,e),"EndOfContainer"===c?o(!0):a=i(c)}catch(e){}}(0,Z.qu)(!1,"setNavigationInSameContainer ..."),(0,N.RB)(!0),a?n.push(a):(0,C.cD)(!1)}let A=e=>{"title"===B&&F(e)},L=async()=>{(0,Z.qu)(!1,"handleOpen");let e="/folder/contents/".concat(b);n.push(e)};return(0,a.useEffect)(()=>{0===_&&(0===I&&B?(A("ReadOnly"),S(null)):B&&A("Writing"))},[_]),(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:d().pageBackground,children:[(0,c.jsx)(h.Z,{children:(0,c.jsxs)(x.Z,{itemId:n.query.itemId,children:[(0,c.jsx)("br",{}),(0,c.jsx)(f.Z,{onCoverClicked:()=>{if(!w)return;let e=(0,k.Eo)(w).converLink;n.push(e)},onContentsClicked:()=>{if(!w)return;let e=(0,k.Eo)(w).contentsLink;n.push(e)}}),(0,c.jsx)("br",{}),(0,c.jsx)(s.Z,{children:(0,c.jsx)(l.Z,{lg:{span:10,offset:1},children:(0,c.jsxs)("div",{className:"".concat(d().folderPanel," ").concat(d().folderCoverPanel," ").concat(d().containerCoverPanel),children:[(0,c.jsx)("div",{className:d().folderTab}),(0,c.jsx)(j.Z,{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)(m.Z,{cover:!0,onNextClicked:()=>{(0,Z.qu)(!1,"Next item "),T("+1")},onPreviousClicked:()=>{(0,Z.qu)(!1,"Previous item "),T("-1")},showAlert:t,alertClosed:()=>o(!1)}),(0,c.jsx)(s.Z,{className:"justify-content-center",children:(0,c.jsx)(l.Z,{className:d().containerTitleLabel,xs:"10",sm:"10",md:"8",children:(0,c.jsx)(v.Z,{editorId:"title",mode:R,content:W,onContentChanged:(n,t)=>{(0,Z.qu)(!1,"editor-id: ".concat(n," content: ").concat(t)),"title"===B&&(t!==W?e((0,C.Vf)(t,E,O,P)):(A("ReadOnly"),S(null)))},onPenClicked:e=>{(0,Z.qu)(!1,"pen ".concat(e," clicked")),"title"===e&&(F("Writing"),S("title"))},editable:!B&&0===_})})}),(0,c.jsx)("br",{}),(0,c.jsx)(s.Z,{children:(0,c.jsx)(l.Z,{children:(0,c.jsx)(g.Z,{handleOpen:L})})}),(0,c.jsx)(p.Z,{isEditing:B,onWrite:()=>{(0,Z.qu)(!1,"handleWrite"),F("Writing"),S("title")},onSave:()=>{(0,Z.qu)(!1,"handleSave"),A("Saving")},onCancel:()=>{(0,Z.qu)(!1,"handleCancel"),A("ReadOnly"),S(null)}})]})})})]})}),(0,c.jsx)(u.Z,{})]})})}}},function(e){e.O(0,[571,9769,6743,568,4377,9706,6536,9774,2888,179],function(){return e(e.s=17002)}),_N_E=e.O()}]);