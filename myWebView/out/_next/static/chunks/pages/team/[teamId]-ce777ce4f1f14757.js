(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7406],{7320:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[teamId]",function(){return n(27948)}])},27948:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var c=n(85893),r=n(67294),s=n(9473),a=n(11163),o=n(41664),i=n.n(o),u=n(10682),d=n(34051),l=n(31555),h=n(32552),f=n(32405),x=n(38712),j=n.n(x),p=n(24638),m=n(49411),w=n(49486);function g(e){let t=(0,a.useRouter)(),n=(0,s.I0)(),[o,x]=(0,r.useState)(!1),g=(0,s.v9)(e=>e.auth.isLoggedIn),v=(0,s.v9)(e=>e.container.workspace),y=(0,s.v9)(e=>e.container.workspaceName),_=(0,s.v9)(e=>e.container.workspaceKeyReady);return(0,r.useEffect)(()=>{let e=(e,t)=>{let{shallow:c}=t;console.log("App is changing to ".concat(e," ").concat(c?"with":"without"," shallow routing")),n((0,m.JG)())};return t.events.on("routeChangeStart",e),()=>{t.events.off("routeChangeStart",e)}},[]),(0,r.useEffect)(()=>{g&&n((0,p.vB)(!1))},[g]),(0,r.useEffect)(()=>{if(g&&!_&&t.query.teamId){let e=t.query.teamId;(0,w.qu)(!1,"Set up workspace loggedIn:".concat(g," workspaceKeyReady:").concat(_," teamId:").concat(t.query.teamId)),n((0,p.H5)()),v&&v.startsWith(t.query.teamId)?(n((0,p.ef)({container:"root"})),n((0,p.vB)(!0))):n((0,p.VM)({teamId:e,container:"root"})),x(!0)}},[g,_,t.query.teamId]),(0,c.jsx)("div",{className:j().spaceBackground,children:(0,c.jsx)(h.Z,{children:(0,c.jsxs)(u.Z,{fluid:!0,children:[(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)(d.Z,{children:(0,c.jsx)(l.Z,{children:(0,c.jsx)("h2",{className:"text-center display-3",children:y})})}),(0,c.jsx)(d.Z,{children:(0,c.jsxs)(l.Z,{className:"text-center",children:[!1,(0,c.jsx)(i(),{href:"/activities/".concat(v),children:"Activities"})]})}),(0,c.jsx)(d.Z,{className:"justify-content-center",children:(0,c.jsx)(l.Z,{lg:8,children:(0,c.jsx)(f.Z,{readyToList:o})})})]})},t.pathname)})}}},function(e){e.O(0,[9769,1664,4377,9840,4417,9774,2888,179],function(){return e(e.s=7320)}),_N_E=e.O()}]);