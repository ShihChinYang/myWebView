(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2738],{98009:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/v1/extraMFA",function(){return a(75432)}])},80740:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(85893),s=a(67294),r=a(35005),i=a(12529),l=a(76515),c=a(38712),u=a.n(c);function o(e){let{onKeyChanged:t}=e,[a,c]=(0,s.useState)(""),[o,d]=(0,s.useState)(!0);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(i.Z.Control,{type:o?"password":"text",onChange:e=>{c(e.target.value),t(e.target.value)},value:a,className:u().inputBox}),(0,n.jsx)(r.Z,{className:u().inputButton,onClick:e=>{d(!o)},variant:"dark",children:o?(0,n.jsx)("i",{id:"1",className:"fa fa-eye-slash fa-lg","aria-hidden":"true"}):(0,n.jsx)("i",{id:"1",className:"fa fa-eye fa-lg","aria-hidden":"true"})})]})})}a(49486)},75432:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=a(85893),s=a(67294),r=a(9473),i=a(11163),l=a(10682),c=a(34051),u=a(31555),o=a(12529),d=a(35005),f=a(36968),h=a(38712),x=a.n(h);a(49486);var p=a(32552);a(80740);var v=a(58935);function m(){let e=(0,r.I0)(),t=(0,i.useRouter)(),[a,h]=(0,s.useState)(""),m=(0,r.v9)(e=>e.v1Account.activity),j=(0,r.v9)(e=>e.v1Account.nextAuthStep);return(0,s.useEffect)(()=>{j&&"KeyRequired"===j.step&&t.push("/v1/keyEnter")},[j]),(0,n.jsx)("div",{className:x().managedMemberLoginBackground,children:(0,n.jsx)(p.Z,{showNavbarMenu:!1,showPathRow:!1,children:(0,n.jsxs)(l.Z,{className:"mt-5",children:[(0,n.jsx)(c.Z,{className:"text-center",children:(0,n.jsx)("h1",{className:"display-5",children:"Multi-Factor Authentication"})}),(0,n.jsx)("br",{}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)(u.Z,{xs:{span:6,offset:3},sm:{span:6,offset:3},md:{span:6,offset:3},lg:{span:6,offset:3},children:[(0,n.jsxs)(o.Z.Group,{className:"mb-3",controlId:"MFA",children:[(0,n.jsx)(o.Z.Label,{children:"Please enter the token"}),(0,n.jsx)(o.Z.Control,{className:"py-2",type:"text",value:a,onChange:e=>{h(e.target.value)},placeholder:"",autoComplete:"off"})]}),(0,n.jsx)(d.Z,{variant:"primary",className:"py-2",onClick:t=>{e((0,v.Sf)({MFAToken:a}))},children:"VerifyMFA"===m?(0,n.jsx)(f.Z,{animation:"border"}):"Verify"}),"InvalidMFA"===m&&(0,n.jsx)("p",{className:"text-danger",children:"Invalid Token"})]})})]})})})}},36968:function(e,t,a){"use strict";var n=a(94184),s=a.n(n),r=a(67294),i=a(76792),l=a(85893);let c=r.forwardRef(({bsPrefix:e,variant:t,animation:a="border",size:n,as:r="div",className:c,...u},o)=>{e=(0,i.vE)(e,"spinner");let d=`${e}-${a}`;return(0,l.jsx)(r,{ref:o,...u,className:s()(c,d,n&&`${d}-${n}`,t&&`text-${t}`)})});c.displayName="Spinner",t.Z=c}},function(e){e.O(0,[9769,1707,9774,2888,179],function(){return e(e.s=98009)}),_N_E=e.O()}]);