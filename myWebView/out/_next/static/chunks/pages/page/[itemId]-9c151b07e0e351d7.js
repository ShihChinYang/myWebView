(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7289],{10891:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/[itemId]",function(){return n(7202)}])},7202:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var i=n(85893),r=n(67294),a=n(11163),c=n(9473),s=n(38712),o=n.n(s),u=n(41975),d=n(32552),l=n(32132),f=n(69563),h=n(37865),p=n(85056),g=n(93530),k=n(24638),x=n(49411),m=n(49486),v=n(51892);function N(){(0,m.qu)(!1,"Rendering item");let e=(0,a.useRouter)(),t=(0,c.I0)(),[n,s]=(0,r.useState)(!1),N=(0,c.v9)(e=>e.page.changingPage),C=(0,c.v9)(e=>e.page.id),_=(0,c.v9)(e=>e.page.container),j=(0,c.v9)(e=>e.page.position);async function w(n){if((0,m.qu)(!1,"gotoAnotherItem ".concat(N," ").concat(C," ").concat(_," ").concat(j)),N||!(C||!_||!j))return;(0,x.cD)(!0);let i,r=null,a=e=>{let t;switch(e.split(":")[0]){case"b":t="/box/"+e;break;case"f":t="/folder/"+e;break;case"p":t="/page/"+e}return t};switch(n){case"-1":try{i=await (0,v.kN)("getPreviousItem",_,j,t),"EndOfContainer"===i?s(!0):r=a(i)}catch(e){}break;case"+1":try{i=await (0,v.kN)("getNextItem",_,j,t),"EndOfContainer"===i?s(!0):r=a(i)}catch(e){}}(0,m.qu)(!1,"setNavigationInSameContainer ..."),(0,k.RB)(!0),r?e.push(r):(0,x.cD)(!1)}return(0,m.qu)(!1,"router.query.itemId: ",e.query.itemId),(0,i.jsxs)("div",{className:o().pageBackground,children:[(0,i.jsx)(d.Z,{children:(0,i.jsxs)(l.Z,{itemId:e.query.itemId,children:[(0,i.jsx)("br",{}),(0,i.jsx)(f.Z,{onCoverClicked:()=>{if(!_)return;let t=(0,v.Eo)(_).converLink;e.push(t)},onContentsClicked:()=>{if(!_)return;let t=(0,v.Eo)(_).contentsLink;e.push(t)}}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:o().pagePanel,children:[(0,i.jsx)(h.Z,{}),(0,i.jsx)(p.Z,{})]}),(0,i.jsx)(g.Z,{onNextClicked:()=>{(0,m.qu)(!1,"Next item "),w("+1")},onPreviousClicked:()=>{(0,m.qu)(!1,"Previous item "),w("-1")},showAlert:n,alertClosed:()=>s(!1)})]})}),(0,i.jsx)(u.Z,{})]})}}},function(e){e.O(0,[571,9769,6743,2890,416,4377,9706,6536,3362,9774,2888,179],function(){return e(e.s=10891)}),_N_E=e.O()}]);