(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2201],{89044:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trashBox/[spaceId]",function(){return s(74776)}])},74776:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return j}});var r=s(85893),t=s(67294),n=s(11163),l=s(9473),c=s(10682),i=s(34051),d=s(31555),o=s(35005),f=s(38712),u=s.n(f),p=s(32552),m=s(77280),x=s(49541),v=s(24638),h=s(49411),g=s(49486);function j(){let e=(0,l.I0)(),a=(0,n.useRouter)(),[s,f]=(0,t.useState)(null),[j,N]=(0,t.useState)(!1),y=(0,l.v9)(e=>e.auth.accountVersion),w=(0,l.v9)(e=>e.auth.isLoggedIn),k=(0,l.v9)(e=>e.auth.searchKey),Z=(0,l.v9)(e=>e.auth.searchIV),b=(0,l.v9)(e=>e.auth.expandedKey),C=(0,l.v9)(e=>e.container.workspace),I=(0,l.v9)(e=>e.container.workspaceKeyReady),E=(0,l.v9)(e=>e.container.items),R=(0,l.v9)(e=>e.container.pageNumber),_=(0,l.v9)(e=>e.container.itemsPerPage),B=(0,l.v9)(e=>e.container.total),P=(0,l.v9)(e=>e.container.selectedItems),q=(0,l.v9)(e=>e.container.trashBoxId),S=E.map((e,a)=>(0,r.jsx)(i.Z,{children:(0,r.jsx)(d.Z,{lg:{span:10,offset:1},children:(0,r.jsx)(m.Z,{itemIndex:a,item:e,isOpenable:!1})})},a)),T=async a=>{e((0,v.WB)({payload:{teamSpace:C,trashBoxId:q,selectedItems:a}}))},$=async a=>{e((0,v.ZB)({payload:{teamSpace:C,trashBoxId:q,selectedItems:a}}))},O=a=>{let{pageNumber:s=1}=a;e((0,v.bZ)({pageNumber:s}))};return(0,t.useEffect)(()=>{let s=(a,s)=>{let{shallow:r}=s;console.log("App is changing to ".concat(a," ").concat(r?"with":"without"," shallow routing")),e((0,h.JG)())},r=()=>{(0,g.qu)(!0,"handleRouteChangeComplete"),e((0,h.df)())};return a.events.on("routeChangeStart",s),a.events.on("routeChangeComplete",r),()=>{a.events.off("routeChangeStart",s),a.events.off("routeChangeComplete",r)}},[]),(0,t.useEffect)(()=>{w&&a.query.spaceId&&(console.log(a.query.spaceId),e((0,v.H5)()),e((0,v.vB)(!1)),(0,g.qu)(!0,"set space: ",a.query.spaceId),f(a.query.spaceId),a.query.spaceId===C?(e((0,v.ef)({container:"Unknown"})),e((0,v.vB)(!0))):(e((0,v.k_)()),N(!0)))},[w,a.query.spaceId]),(0,t.useEffect)(()=>{if(s&&j){if("u"===s.substring(0,1))e((0,v.XZ)({container:"Unknown",workspaceId:s,workspaceKey:b,searchKey:k,searchIV:Z})),e((0,v.vB)(!0));else{let a;a="v1"===y?s.substring(0,s.length-4):s,e((0,v.VM)({teamId:a,container:"Unknown"}))}}},[s,j]),(0,t.useEffect)(()=>{if(!C||!I)return;e((0,h.rs)());let a=[{_id:C},{_id:"t:workspaceId"}];e((0,h.rJ)(a)),e((0,v.Fd)())},[C,I]),(0,t.useEffect)(()=>{q&&"Unknown"!==q&&(e((0,v.ef)({container:q})),e((0,v.bZ)({pageNumber:1})))},[q]),(0,r.jsx)("div",{className:u().pageBackground,children:(0,r.jsx)(p.Z,{displayItemToolbar:!1,children:(0,r.jsx)(c.Z,{fluid:!0,children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(d.Z,{lg:{span:10,offset:1},children:(0,r.jsxs)("div",{className:"".concat(u().pagePanel," ").concat(u().boxPanel),children:[(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{className:"fs-1 text-center",children:"Trash"}),(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(d.Z,{xs:{span:10,offset:1},children:0===P.length?(0,r.jsxs)("div",{className:"pull-right",children:[(0,r.jsx)(o.Z,{variant:"link",className:"text-capitalize",onClick:()=>{T(E)},children:"Restore all"}),(0,r.jsx)(o.Z,{variant:"link",className:"text-danger text-capitalize",onClick:()=>{$(E)},children:"Empty all"})]}):(0,r.jsxs)("div",{className:"pull-right",children:[(0,r.jsx)(o.Z,{variant:"link",className:"text-capitalize",onClick:()=>{T(P)},children:"Restore"}),(0,r.jsx)(o.Z,{variant:"link",className:"text-danger text-capitalize",onClick:()=>{$(P)},children:"Empty"})]})})})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),S,(0,r.jsx)(i.Z,{children:(0,r.jsx)(d.Z,{sm:{span:10,offset:1},md:{span:8,offset:2},children:(0,r.jsx)("div",{className:"mt-4 d-flex justify-content-center",children:(0,r.jsx)(x.Z,{page:R,total:B,limit:_,changePage:e=>{O({pageNumber:e})},ellipsis:1})})})})]})})})})})})}},2086:function(e,a,s){"use strict";var r=s(94184),t=s.n(r),n=s(67294),l=s(76792),c=s(85893);let i=n.forwardRef(({bsPrefix:e,size:a,vertical:s=!1,className:r,role:n="group",as:i="div",...d},o)=>{let f=(0,l.vE)(e,"btn-group"),u=f;return s&&(u=`${f}-vertical`),(0,c.jsx)(i,{...d,ref:o,role:n,className:t()(r,u,a&&`${f}-${a}`)})});i.displayName="ButtonGroup",a.Z=i},52686:function(e,a,s){"use strict";s.d(a,{Z:function(){return w}});var r=s(94184),t=s.n(r),n=s(67294),l=s(76792),c=s(85893);let i=n.forwardRef(({className:e,bsPrefix:a,as:s="div",...r},n)=>(a=(0,l.vE)(a,"card-body"),(0,c.jsx)(s,{ref:n,className:t()(e,a),...r})));i.displayName="CardBody";let d=n.forwardRef(({className:e,bsPrefix:a,as:s="div",...r},n)=>(a=(0,l.vE)(a,"card-footer"),(0,c.jsx)(s,{ref:n,className:t()(e,a),...r})));d.displayName="CardFooter";var o=s(49059);let f=n.forwardRef(({bsPrefix:e,className:a,as:s="div",...r},i)=>{let d=(0,l.vE)(e,"card-header"),f=(0,n.useMemo)(()=>({cardHeaderBsPrefix:d}),[d]);return(0,c.jsx)(o.Z.Provider,{value:f,children:(0,c.jsx)(s,{ref:i,...r,className:t()(a,d)})})});f.displayName="CardHeader";let u=n.forwardRef(({bsPrefix:e,className:a,variant:s,as:r="img",...n},i)=>{let d=(0,l.vE)(e,"card-img");return(0,c.jsx)(r,{ref:i,className:t()(s?`${d}-${s}`:d,a),...n})});u.displayName="CardImg";let p=n.forwardRef(({className:e,bsPrefix:a,as:s="div",...r},n)=>(a=(0,l.vE)(a,"card-img-overlay"),(0,c.jsx)(s,{ref:n,className:t()(e,a),...r})));p.displayName="CardImgOverlay";let m=n.forwardRef(({className:e,bsPrefix:a,as:s="a",...r},n)=>(a=(0,l.vE)(a,"card-link"),(0,c.jsx)(s,{ref:n,className:t()(e,a),...r})));m.displayName="CardLink";var x=s(39602);let v=(0,x.Z)("h6"),h=n.forwardRef(({className:e,bsPrefix:a,as:s=v,...r},n)=>(a=(0,l.vE)(a,"card-subtitle"),(0,c.jsx)(s,{ref:n,className:t()(e,a),...r})));h.displayName="CardSubtitle";let g=n.forwardRef(({className:e,bsPrefix:a,as:s="p",...r},n)=>(a=(0,l.vE)(a,"card-text"),(0,c.jsx)(s,{ref:n,className:t()(e,a),...r})));g.displayName="CardText";let j=(0,x.Z)("h5"),N=n.forwardRef(({className:e,bsPrefix:a,as:s=j,...r},n)=>(a=(0,l.vE)(a,"card-title"),(0,c.jsx)(s,{ref:n,className:t()(e,a),...r})));N.displayName="CardTitle";let y=n.forwardRef(({bsPrefix:e,className:a,bg:s,text:r,border:n,body:d=!1,children:o,as:f="div",...u},p)=>{let m=(0,l.vE)(e,"card");return(0,c.jsx)(f,{ref:p,...u,className:t()(a,m,s&&`bg-${s}`,r&&`text-${r}`,n&&`border-${n}`),children:d?(0,c.jsx)(i,{children:o}):o})});y.displayName="Card";var w=Object.assign(y,{Img:u,Title:N,Subtitle:h,Body:i,Link:m,Text:g,Header:f,Footer:d,ImgOverlay:p})}},function(e){e.O(0,[9769,1664,4377,9840,9774,2888,179],function(){return e(e.s=89044)}),_N_E=e.O()}]);