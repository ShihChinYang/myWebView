"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4417],{88255:function(e,r,a){a.d(r,{Z:function(){return d}});var t=a(85893),n=a(67294),s=a(35005),l=a(91820),i=a(38712),c=a.n(i),o=a(49486);function d(e){let{addAnItem:r,pageOnly:a=!1}=e,[i,d]=(0,n.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{variant:"primary",className:c().btnCircle,onClick:()=>d(!0),children:(0,t.jsx)("i",{id:"1",className:"fa fa-plus fa-lg","aria-hidden":"true"})}),(0,t.jsx)(l.Z,{pageOnly:a,show:i,handleClose:()=>d(!1),optionSelected:e=>{(0,o.qu)(!1,e),d(!1),r(e,"addAnItemOnTop")}})]})}},88160:function(e,r,a){a.d(r,{Z:function(){return o}});var t=a(85893),n=a(67294),s=a(32171),l=a(35005),i=a(12529),c=a(49486);function o(e){let{show:r=!1,handleClose:a,handleCreateANewItem:o}=e;(0,c.qu)(!1,"Rendering NewItemModal: ","".concat(r,"}"));let d=(0,n.useRef)(null);return(0,t.jsx)(s.Z,{show:r,onHide:a,onEntered:()=>{d.current.focus()},children:(0,t.jsxs)(s.Z.Body,{children:[(0,t.jsx)("h3",{children:"Title"}),(0,t.jsx)(i.Z.Control,{ref:d,size:"lg",type:"text"}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(l.Z,{variant:"primary",onClick:()=>{o(d.current.value)},className:"pull-right",children:"Create"}),(0,t.jsx)(l.Z,{variant:"secondary",onClick:a,className:"pull-right",children:"Close"})]})})}},32405:function(e,r,a){a.d(r,{Z:function(){return k}});var t=a(85893),n=a(67294),s=a(9473),l=a(11163),i=a(41664),c=a.n(i),o=a(10682),d=a(34051),u=a(31555),h=a(35005),f=a(12529),x=a(76515),m=a(52686),j=a(38712),v=a.n(j),g=a(88255),p=a(88160),N=a(77280),Z=a(49541),y=a(51892),C=a(24638),b=a(49411),w=a(49486);function k(e){let{readyToList:r=!1}=e;(0,w.qu)(!1,"Rendering Workspace");let a=(0,l.useRouter)(),i=(0,s.I0)(),j=(0,s.v9)(e=>e.container.workspace),k=(0,s.v9)(e=>e.container.workspaceKey),E=(0,s.v9)(e=>e.container.workspaceKeyReady),R=(0,s.v9)(e=>e.container.searchKey),I=(0,s.v9)(e=>e.container.searchIV),S=(0,s.v9)(e=>e.container.container),A=(0,s.v9)(e=>e.container.mode),q=(0,s.v9)(e=>e.container.listingDone),[T,B]=(0,n.useState)(""),$=(0,s.v9)(e=>e.container.items),D=(0,s.v9)(e=>e.container.newItem),H=(0,s.v9)(e=>e.container.pageNumber),O=(0,s.v9)(e=>e.container.itemsPerPage),K=(0,s.v9)(e=>e.container.total),[P,_]=(0,n.useState)(null),[z,F]=(0,n.useState)(null),[L,G]=(0,n.useState)(null),[J,M]=(0,n.useState)(null),[V,W]=(0,n.useState)(!1),Q=(e,r,a,t)=>{(0,w.qu)(!1,"".concat(e," ").concat(r," ").concat(a," ").concat(t)),X(e,r,a,t)},U=$.map((e,r)=>(0,t.jsx)(N.Z,{itemIndex:r,item:e,onAdd:Q},r)),X=function(e,r){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;_(e),F(r),G(a),M(t),W(!0)},Y=async e=>{(0,w.qu)(!1,"createANewItem",e),W(!1),i((0,C.Ag)({titleStr:e,currentContainer:j,selectedItemType:P,addAction:z,targetItem:L,targetPosition:J,workspaceKey:k,searchKey:R,searchIV:I}))},ee=e=>{e.preventDefault(),i((0,C.zs)({searchValue:T,pageNumber:1}))},er=e=>{let{pageNumber:r=1,searchMode:a}=e,t=a||A;"listAll"===t?i((0,C.bZ)({pageNumber:r})):"search"===t&&i((0,C.zs)({searchValue:T,pageNumber:r}))};return(0,n.useEffect)(()=>{let e=(e,r)=>{let{shallow:a}=r;console.log("App is changing to ".concat(e," ").concat(a?"with":"without"," shallow routing")),i((0,C.No)(!1)),i((0,b.JG)()),i((0,b.rs)()),i((0,C.H5)())},r=()=>{(0,w.qu)(!1,"handleRouteChangeComplete")};return a.events.on("routeChangeStart",e),a.events.on("routeChangeComplete",r),()=>{a.events.off("routeChangeStart",e),a.events.off("routeChangeComplete",r)}},[]),(0,n.useEffect)(()=>{if((0,w.qu)(!1,"workspaceKeyReady: ".concat(E," ")),!r||!j||!E||"root"!==S)return;(0,w.qu)(!1,"listItemsThunk"),i((0,b.rs)());let e=[{_id:j}];i((0,b.rJ)(e)),i((0,C.bZ)({pageNumber:1}))},[r,S,j,E]),(0,n.useEffect)(()=>{if(D){let e=(0,y.vp)(D,!0);i((0,C.Ej)()),a.push(e)}},[D]),(0,t.jsxs)(o.Z,{className:v().container,children:[(0,t.jsx)(d.Z,{children:(0,t.jsx)(f.Z,{onSubmit:ee,children:(0,t.jsxs)(x.Z,{className:"mb-3",children:[(0,t.jsx)(f.Z.Control,{size:"lg",type:"text",value:T,onChange:e=>{(0,w.qu)(!1,"search value:",e.target.value),B(e.target.value)}}),(0,t.jsx)(h.Z,{variant:"link",children:(0,t.jsx)("i",{id:"1",className:"fa fa-search fa-lg text-dark","aria-hidden":"true",onClick:ee})})]})})}),(0,t.jsx)(d.Z,{className:"justify-content-center",children:(0,t.jsx)(g.Z,{addAnItem:X})}),(0,t.jsx)(p.Z,{show:V,handleClose:()=>W(!1),handleCreateANewItem:Y}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"search"===A&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Z,{children:(0,t.jsx)(u.Z,{children:(0,t.jsx)(h.Z,{variant:"default",className:"".concat(v().btnCircle," pull-right"),onClick:e=>{e.preventDefault(),B(""),i((0,C.bZ)({pageNumber:1}))},children:(0,t.jsx)("i",{id:"1",className:"fa fa-times fa-lg","aria-hidden":"true"})})})}),(0,t.jsx)("br",{})]}),q&&"search"!==A&&0===U.length&&(0,t.jsx)(d.Z,{className:"justify-content-center",children:(0,t.jsx)(u.Z,{sm:8,children:(0,t.jsxs)(m.Z,{children:[(0,t.jsx)(m.Z.Header,{children:"\uD83D\uDE0AWelcome!"}),(0,t.jsxs)(m.Z.Body,{children:[(0,t.jsx)(m.Z.Title,{children:"Instructions"}),(0,t.jsx)(m.Z.Text,{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Adding a record"})," - Click on the central blue button, then select an item type."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Searching for records"})," - Enter keywords in central field, then click on search button."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Opening a new tab"})," - Click on the blue button on upper right, then select an item."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Lock"})," - Click on the Lock button on upper right."]})]})})]})]})})}),U,$&&$.length>0&&(0,t.jsx)(d.Z,{children:(0,t.jsx)(u.Z,{sm:{span:10,offset:1},md:{span:8,offset:2},children:(0,t.jsx)("div",{className:"mt-4 d-flex justify-content-center",children:(0,t.jsx)(Z.Z,{page:H,total:K,limit:O,changePage:e=>{er({pageNumber:e})},ellipsis:1})})})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),j&&(0,t.jsx)(d.Z,{children:(0,t.jsx)(u.Z,{xs:12,children:(0,t.jsx)(c(),{href:"/trashBox/"+j,legacyBehavior:!0,children:(0,t.jsx)(h.Z,{variant:"light",className:"pull-right border-0 shadow-none",children:(0,t.jsx)("i",{className:"fa fa-5x fa-trash","aria-hidden":"true"})})})})})]})}},2086:function(e,r,a){var t=a(94184),n=a.n(t),s=a(67294),l=a(76792),i=a(85893);let c=s.forwardRef(({bsPrefix:e,size:r,vertical:a=!1,className:t,role:s="group",as:c="div",...o},d)=>{let u=(0,l.vE)(e,"btn-group"),h=u;return a&&(h=`${u}-vertical`),(0,i.jsx)(c,{...o,ref:d,role:s,className:n()(t,h,r&&`${u}-${r}`)})});c.displayName="ButtonGroup",r.Z=c},52686:function(e,r,a){a.d(r,{Z:function(){return y}});var t=a(94184),n=a.n(t),s=a(67294),l=a(76792),i=a(85893);let c=s.forwardRef(({className:e,bsPrefix:r,as:a="div",...t},s)=>(r=(0,l.vE)(r,"card-body"),(0,i.jsx)(a,{ref:s,className:n()(e,r),...t})));c.displayName="CardBody";let o=s.forwardRef(({className:e,bsPrefix:r,as:a="div",...t},s)=>(r=(0,l.vE)(r,"card-footer"),(0,i.jsx)(a,{ref:s,className:n()(e,r),...t})));o.displayName="CardFooter";var d=a(49059);let u=s.forwardRef(({bsPrefix:e,className:r,as:a="div",...t},c)=>{let o=(0,l.vE)(e,"card-header"),u=(0,s.useMemo)(()=>({cardHeaderBsPrefix:o}),[o]);return(0,i.jsx)(d.Z.Provider,{value:u,children:(0,i.jsx)(a,{ref:c,...t,className:n()(r,o)})})});u.displayName="CardHeader";let h=s.forwardRef(({bsPrefix:e,className:r,variant:a,as:t="img",...s},c)=>{let o=(0,l.vE)(e,"card-img");return(0,i.jsx)(t,{ref:c,className:n()(a?`${o}-${a}`:o,r),...s})});h.displayName="CardImg";let f=s.forwardRef(({className:e,bsPrefix:r,as:a="div",...t},s)=>(r=(0,l.vE)(r,"card-img-overlay"),(0,i.jsx)(a,{ref:s,className:n()(e,r),...t})));f.displayName="CardImgOverlay";let x=s.forwardRef(({className:e,bsPrefix:r,as:a="a",...t},s)=>(r=(0,l.vE)(r,"card-link"),(0,i.jsx)(a,{ref:s,className:n()(e,r),...t})));x.displayName="CardLink";var m=a(39602);let j=(0,m.Z)("h6"),v=s.forwardRef(({className:e,bsPrefix:r,as:a=j,...t},s)=>(r=(0,l.vE)(r,"card-subtitle"),(0,i.jsx)(a,{ref:s,className:n()(e,r),...t})));v.displayName="CardSubtitle";let g=s.forwardRef(({className:e,bsPrefix:r,as:a="p",...t},s)=>(r=(0,l.vE)(r,"card-text"),(0,i.jsx)(a,{ref:s,className:n()(e,r),...t})));g.displayName="CardText";let p=(0,m.Z)("h5"),N=s.forwardRef(({className:e,bsPrefix:r,as:a=p,...t},s)=>(r=(0,l.vE)(r,"card-title"),(0,i.jsx)(a,{ref:s,className:n()(e,r),...t})));N.displayName="CardTitle";let Z=s.forwardRef(({bsPrefix:e,className:r,bg:a,text:t,border:s,body:o=!1,children:d,as:u="div",...h},f)=>{let x=(0,l.vE)(e,"card");return(0,i.jsx)(u,{ref:f,...h,className:n()(r,x,a&&`bg-${a}`,t&&`text-${t}`,s&&`border-${s}`),children:o?(0,i.jsx)(c,{children:d}):d})});Z.displayName="Card";var y=Object.assign(Z,{Img:h,Title:N,Subtitle:v,Body:c,Link:x,Text:g,Header:u,Footer:o,ImgOverlay:f})}}]);