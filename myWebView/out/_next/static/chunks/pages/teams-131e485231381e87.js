(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2219],{38206:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teams",function(){return s(577)}])},49541:function(e,a,s){"use strict";s.d(a,{Z:function(){return g}});var r=s(85893),t=s(34051),l=s(31555),n=s(94184),i=s.n(n),d=s(67294),c=s(76792),o=s(13551);let f=d.forwardRef(({active:e=!1,disabled:a=!1,className:s,style:t,activeLabel:l="(current)",children:n,linkStyle:d,linkClassName:c,...f},u)=>{let m=e||a?"span":o.Z;return(0,r.jsx)("li",{ref:u,style:t,className:i()(s,"page-item",{active:e,disabled:a}),children:(0,r.jsxs)(m,{className:i()("page-link",c),style:d,...f,children:[n,e&&l&&(0,r.jsx)("span",{className:"visually-hidden",children:l})]})})});function u(e,a,s=e){let t=d.forwardRef(({children:e,...t},l)=>(0,r.jsxs)(f,{...t,ref:l,children:[(0,r.jsx)("span",{"aria-hidden":"true",children:e||a}),(0,r.jsx)("span",{className:"visually-hidden",children:s})]}));return t.displayName=e,t}f.displayName="PageItem";let m=u("First","\xab"),x=u("Prev","‹","Previous"),h=u("Ellipsis","…","More"),j=u("Next","›"),p=u("Last","\xbb"),v=d.forwardRef(({bsPrefix:e,className:a,size:s,...t},l)=>{let n=(0,c.vE)(e,"pagination");return(0,r.jsx)("ul",{ref:l,...t,className:i()(a,n,s&&`${n}-${s}`)})});v.displayName="Pagination";var N=Object.assign(v,{First:m,Prev:x,Ellipsis:h,Item:f,Next:j,Last:p});function g(e){let{page:a,total:s,limit:n,changePage:i}=e,d=[],c=Math.ceil(s/n),o=Math.ceil(c/5);for(let e=1;e<=o;e++){let s=!1;5*e>=c&&(s=!0);let t=[];for(let l=(e-1)*5+1;l<=(s?c:5*e);l++)t.push((0,r.jsx)(N.Item,{active:l===a,onClick:()=>i(l),children:l},l));d.push((0,r.jsx)(l.Z,{children:(0,r.jsx)(N,{children:t})},e))}return(0,r.jsx)(t.Z,{children:d})}},577:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return b}});var r=s(85893),t=s(67294),l=s(9473),n=s(41664),i=s.n(n),d=s(10682),c=s(34051),o=s(31555),f=s(52686),u=s(32552),m=s(35005),x=s(32171),h=s(12529),j=s(49486);function p(e){let{show:a=!1,handleClose:s,handleCreateANewTeam:l}=e;(0,j.qu)(!1,"Rendering NewTeamModal: ","".concat(a,"}"));let n=(0,t.useRef)(null);return(0,r.jsx)(x.Z,{show:a,onHide:s,onEntered:()=>{n.current.focus()},children:(0,r.jsxs)(x.Z.Body,{children:[(0,r.jsx)("h3",{children:"Title"}),(0,r.jsx)(h.Z.Control,{ref:n,size:"lg",type:"text"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(m.Z,{variant:"primary",onClick:()=>{l(n.current.value)},className:"pull-right",children:"Create"}),(0,r.jsx)(m.Z,{variant:"secondary",onClick:s,className:"pull-right",children:"Close"})]})})}var v=s(38712),N=s.n(v);function g(e){let{addATeam:a}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m.Z,{variant:"primary",className:N().btnCircle,onClick:()=>a("addATeamOnTop"),children:(0,r.jsx)("i",{id:"1",className:"fa fa-plus fa-lg","aria-hidden":"true"})})})}var y=s(2086),Z=s(6763);function w(e){let{index:a,team:s,onAdd:l}=e,n=N().safeItem,d=s.id,u=document.createElement("span");u.innerHTML=s.title;let m=u.textContent||u.innerText,x=(0,t.forwardRef)(function(e,a){let{children:s,onClick:t}=e;return(0,r.jsxs)("a",{href:"",ref:a,onClick:e=>{e.preventDefault(),t(e)},children:[(0,r.jsx)("i",{className:"fa fa-plus text-dark","aria-hidden":"true"}),s]})}),h=e=>{l({action:e,index:a,targetTeam:d,targetPosition:s.position})};return(0,r.jsxs)(r.Fragment,{children:[!1,(0,r.jsx)(f.Z,{className:n,style:{cursor:"pointer"},children:(0,r.jsx)(f.Z.Body,{className:"",children:(0,r.jsxs)(c.Z,{className:"",children:[(0,r.jsx)(i(),{href:"/team/".concat(s.id),legacyBehavior:!0,children:(0,r.jsx)(o.Z,{xs:9,children:(0,r.jsx)("div",{children:(0,r.jsx)("h2",{dangerouslySetInnerHTML:{__html:m}})})})}),(0,r.jsx)(o.Z,{xs:3,children:(0,r.jsx)(y.Z,{className:"pull-right",children:(0,r.jsxs)(Z.Z,{align:"end",className:"justify-content-end",children:[(0,r.jsx)(Z.Z.Toggle,{as:x,variant:"link"}),(0,r.jsxs)(Z.Z.Menu,{children:[(0,r.jsx)(Z.Z.Item,{onClick:()=>h("addATeamBefore"),children:"Add before"}),(0,r.jsx)(Z.Z.Item,{onClick:()=>h("addATeamAfter"),children:"Add after"})]})]})})})]})})})]})}var C=s(49541),E=s(24638),T=s(75979);function b(){let e=(0,l.I0)(),[a,s]=(0,t.useState)(!1),n=(0,l.v9)(e=>e.auth.isLoggedIn),m=(0,l.v9)(e=>e.auth.publicKey),x=(0,l.v9)(e=>e.team.teams),h=(0,l.v9)(e=>e.team.pageNumber),v=(0,l.v9)(e=>e.team.itemsPerPage),y=(0,l.v9)(e=>e.team.total),[Z,b]=(0,t.useState)(null),[k,R]=(0,t.useState)(null),[_,I]=(0,t.useState)(null),[P,A]=(0,t.useState)(null),[B,$]=(0,t.useState)(!1),O=e=>{let{action:a="addATeamOnTop",index:s,targetTeam:r,targetPosition:t}=e;b(a),R(s),I(r),A(t),$(!0)},S=async a=>{(0,j.qu)(!1,"createANewTeam",a),$(!1),e((0,T.lR)({title:a,addAction:Z,targetIndex:k,targetTeam:_,targetPosition:P,publicKeyPem:m}))},M=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e((0,T.BA)({pageNumber:a})),s(!1)};return(0,t.useEffect)(()=>{(0,j.qu)(!1,"loggedIn value: ",n),n&&!a&&(e((0,E.k_)()),s(!0))},[n]),(0,t.useEffect)(()=>{a&&M()},[a]),(0,r.jsx)("div",{className:N().spaceBackground,children:(0,r.jsx)(u.Z,{children:(0,r.jsxs)(d.Z,{fluid:!0,children:[(0,r.jsx)(c.Z,{children:(0,r.jsxs)(o.Z,{sm:{span:10,offset:1},md:{span:8,offset:2},children:[(0,r.jsx)(f.Z,{children:(0,r.jsx)(i(),{href:"/safe",legacyBehavior:!0,children:(0,r.jsxs)(f.Z.Body,{children:[(0,r.jsx)("i",{className:"fa fa-heart text-danger"}),(0,r.jsx)("h2",{children:"Personal"})]})})}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{className:"text-muted",children:"Only you can access items in your personal workspace."})]})}),(0,r.jsx)(c.Z,{className:"justify-content-center",children:(0,r.jsxs)(o.Z,{lg:8,children:[(0,r.jsx)(c.Z,{className:"justify-content-center",children:(0,r.jsx)(g,{addATeam:O})}),(0,r.jsx)(p,{show:B,handleClose:()=>$(!1),handleCreateANewTeam:S})]})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(o.Z,{sm:{span:10,offset:1},md:{span:8,offset:2},children:x.map((e,a)=>(0,r.jsx)(w,{index:a,team:e,onAdd:O},a))})}),x&&x.length>0&&(0,r.jsx)(c.Z,{children:(0,r.jsx)(o.Z,{sm:{span:10,offset:1},md:{span:8,offset:2},children:(0,r.jsx)("div",{className:"mt-4 d-flex justify-content-center",children:(0,r.jsx)(C.Z,{page:h,total:y,limit:v,changePage:e=>{M(e)},ellipsis:1})})})})]})})})}},2086:function(e,a,s){"use strict";var r=s(94184),t=s.n(r),l=s(67294),n=s(76792),i=s(85893);let d=l.forwardRef(({bsPrefix:e,size:a,vertical:s=!1,className:r,role:l="group",as:d="div",...c},o)=>{let f=(0,n.vE)(e,"btn-group"),u=f;return s&&(u=`${f}-vertical`),(0,i.jsx)(d,{...c,ref:o,role:l,className:t()(r,u,a&&`${f}-${a}`)})});d.displayName="ButtonGroup",a.Z=d},52686:function(e,a,s){"use strict";s.d(a,{Z:function(){return Z}});var r=s(94184),t=s.n(r),l=s(67294),n=s(76792),i=s(85893);let d=l.forwardRef(({className:e,bsPrefix:a,as:s="div",...r},l)=>(a=(0,n.vE)(a,"card-body"),(0,i.jsx)(s,{ref:l,className:t()(e,a),...r})));d.displayName="CardBody";let c=l.forwardRef(({className:e,bsPrefix:a,as:s="div",...r},l)=>(a=(0,n.vE)(a,"card-footer"),(0,i.jsx)(s,{ref:l,className:t()(e,a),...r})));c.displayName="CardFooter";var o=s(49059);let f=l.forwardRef(({bsPrefix:e,className:a,as:s="div",...r},d)=>{let c=(0,n.vE)(e,"card-header"),f=(0,l.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,i.jsx)(o.Z.Provider,{value:f,children:(0,i.jsx)(s,{ref:d,...r,className:t()(a,c)})})});f.displayName="CardHeader";let u=l.forwardRef(({bsPrefix:e,className:a,variant:s,as:r="img",...l},d)=>{let c=(0,n.vE)(e,"card-img");return(0,i.jsx)(r,{ref:d,className:t()(s?`${c}-${s}`:c,a),...l})});u.displayName="CardImg";let m=l.forwardRef(({className:e,bsPrefix:a,as:s="div",...r},l)=>(a=(0,n.vE)(a,"card-img-overlay"),(0,i.jsx)(s,{ref:l,className:t()(e,a),...r})));m.displayName="CardImgOverlay";let x=l.forwardRef(({className:e,bsPrefix:a,as:s="a",...r},l)=>(a=(0,n.vE)(a,"card-link"),(0,i.jsx)(s,{ref:l,className:t()(e,a),...r})));x.displayName="CardLink";var h=s(39602);let j=(0,h.Z)("h6"),p=l.forwardRef(({className:e,bsPrefix:a,as:s=j,...r},l)=>(a=(0,n.vE)(a,"card-subtitle"),(0,i.jsx)(s,{ref:l,className:t()(e,a),...r})));p.displayName="CardSubtitle";let v=l.forwardRef(({className:e,bsPrefix:a,as:s="p",...r},l)=>(a=(0,n.vE)(a,"card-text"),(0,i.jsx)(s,{ref:l,className:t()(e,a),...r})));v.displayName="CardText";let N=(0,h.Z)("h5"),g=l.forwardRef(({className:e,bsPrefix:a,as:s=N,...r},l)=>(a=(0,n.vE)(a,"card-title"),(0,i.jsx)(s,{ref:l,className:t()(e,a),...r})));g.displayName="CardTitle";let y=l.forwardRef(({bsPrefix:e,className:a,bg:s,text:r,border:l,body:c=!1,children:o,as:f="div",...u},m)=>{let x=(0,n.vE)(e,"card");return(0,i.jsx)(f,{ref:m,...u,className:t()(a,x,s&&`bg-${s}`,r&&`text-${r}`,l&&`border-${l}`),children:c?(0,i.jsx)(d,{children:o}):o})});y.displayName="Card";var Z=Object.assign(y,{Img:u,Title:g,Subtitle:p,Body:d,Link:x,Text:v,Header:f,Footer:c,ImgOverlay:m})}},function(e){e.O(0,[9769,1664,4377,9774,2888,179],function(){return e(e.s=38206)}),_N_E=e.O()}]);