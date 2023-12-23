"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6536],{54232:function(e,a,r){r.d(a,{Z:function(){return v}});var t=r(85893),n=r(67294),s=r(9473),i=r(34051),o=r(31555),l=r(35005),c=r(2086),d=r(19755),u=r.n(d),h=r(38712),f=r.n(h),m=r(51892),p=r(49486),g=r(94882),x=r(43454),b=r(24638),j=r(49411),y=r(21876).Buffer;let k=r(9669),w=r(22079);function v(e){let{editorId:a,mode:d,content:h,onContentChanged:v,onPenClicked:S,showPen:F=!0,editable:Z=!0,hideIfEmpty:C=!1,writingModeReady:N=null,readOnlyModeReady:T=null,onDraftSampled:q=null,onDraftClicked:L=null,onDraftDelete:U=null}=e,B=(0,s.I0)(),I=(0,n.useRef)(null),[R,E]=(0,n.useState)(null),[P,O]=(0,n.useState)(null),V=(0,s.v9)(e=>e.auth.expandedKey),A=(0,s.v9)(e=>e.auth.froalaLicenseKey),M=(0,s.v9)(e=>e.page.id),H=(0,s.v9)(e=>e.page.itemKey),K=(0,s.v9)(e=>e.page.itemIV),_=(0,s.v9)(e=>e.page.draft);(0,p.qu)(!0,"editor key: ".concat(A));let[G,z]=(0,n.useState)(!1),[X,D]=(0,n.useState)(!1),[W,J]=(0,n.useState)(null);(0,p.qu)(!0,"Rendering editor, id,  mode: ","".concat(a," ").concat(d));let Q=()=>{let e;if(X&&!G){switch(a){case"title":e={key:A,toolbarButtons:["undo","redo"],toolbarButtonsMD:["undo","redo"],toolbarButtonsSM:["undo","redo"],toolbarButtonsXS:["undo","redo"],placeholderText:"Page Title"};break;case"content":if(!H){let e=(0,b.d9)();B((0,j.Yj)({itemKey:e}))}$(I.current).html(h),e={key:A,toolbarButtons:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","lineHeight","|","color","emoticons","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","insertHR","-","insertLink","insertImage","insertVideo","insertTable","undo","redo","clearFormatting"],toolbarButtonsMD:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","lineHeight","|","color","emoticons","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","insertHR","-","insertLink","insertImage","insertVideo","insertTable","undo","redo","clearFormatting"],toolbarButtonsSM:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","lineHeight","|","color","emoticons","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","insertHR","-","insertLink","insertImage","insertVideo","insertTable","undo","redo","clearFormatting"],toolbarButtonsXS:["bold","italic","color","emoticons","paragraphFormat","align","formatOL","formatUL","insertLink","insertImage","insertVideo","insertTable","undo","redo"],fontFamily:{"Arial,Helvetica,sans-serif":"Arial","Georgia,serif":"Georgia","Impact,Charcoal,sans-serif":"Impact","Tahoma,Geneva,sans-serif":"Tahoma","'Times New Roman',Times,serif":"Times New Roman","Verdana,Geneva,sans-serif":"Verdana","Open Sans, serif":"Open Sans","La Belle Aurore":"La Belle Aurore","Cormorant Garamond":"Cormorant Garamond","Roboto,sans-serif":"Roboto","Oswald,sans-serif":"Oswald","Montserrat,sans-serif":"Montserrat","'Open Sans Condensed',sans-serif":"Open Sans Condensed"},fontFamilySelection:!1};break;default:e={key:A,toolbarButtons:["bold","italic","underline","strikeThrough","undo","redo"],toolbarButtonsMD:["bold","italic","underline","strikeThrough","undo","redo"],toolbarButtonsSM:["bold","italic","underline","strikeThrough","undo","redo"],toolbarButtonsXS:["bold","italic","underline","strikeThrough","undo","redo"]}}$(I.current).froalaEditor(e),"content"===a&&J($(I.current).froalaEditor("html.get")),I.current.style.overflowX=null,G||((0,p.qu)(!0,"setEditorOn"),z(!0)),N&&N()}},Y=()=>{let e=$(I.current).froalaEditor("html.get");(0,p.qu)(!0,"editor content: ",e),setTimeout(()=>{v(a,e)},0)},ee=()=>{G&&($(I.current).froalaEditor("destroy"),$(I.current).html(h),I.current.style.overflowX="auto",R&&(clearInterval(R),E(null),O(null)),J(null),z(!1),T&&T())};(0,n.useEffect)(()=>{switch(d){case"ReadOnly":ee();break;case"Writing":Q();break;case"Saving":Y()}},[d]),(0,n.useEffect)(()=>{M&&H&&($(".container").data("itemId",M),$(".container").data("itemKey",H))},[M,H,K]),(0,n.useEffect)(()=>{window.$=window.jQuery=u(),r.e(1401).then(r.bind(r,41401)).then(async e=>{await e.Froala,await e.FroalaPlugins,await e.Codemirror,await e.Photoswipe,await e.Others,D(!0)})},[]),(0,n.useEffect)(()=>{X&&window&&((0,p.qu)(!0,"bsafesFroala: ".concat(window.bsafesFroala.name)),window.bsafesFroala.bSafesPreflight=ea,window.bsafesFroala.rotateImage=er,window.bsafesFroala.convertUint8ArrayToBinaryString=p.tp,window.bsafesFroala.compareArraryBufferAndUnit8Array=et,window.bsafesFroala.encryptBinaryString=en,window.bsafesFroala.encryptLargeBinaryString=es,window.bsafesFroala.encryptChunkBinaryStringToBinaryStringAsync=ei,window.bsafesFroala.preS3Upload=eo,window.bsafesFroala.preS3ChunkUpload=el,window.bsafesFroala.postS3Upload=ec,window.bsafesFroala.uploadData=ed,window.bsafesFroala.getBrowserInfo=eu,window.bsafesFroala.arraryBufferToStr=eh,window.bsafesFroala.getEditorConfig=ef)},[X]),(0,n.useEffect)(()=>{null!==W&&"content"===a&&O("Start")},[W]),(0,n.useEffect)(()=>{let e;switch((0,p.qu)(!0,"interval state:",P),P){case"Start":E(setInterval(()=>{(0,p.qu)(!0,"Saving draft ..."),(e=$(I.current).froalaEditor("html.get"))!==W&&((0,p.qu)(!0,"Content changed"),q(e),J(e),O("Stop"))},1e3));break;case"Stop":clearInterval(R),E(null)}},[P]);let ea=e=>{(0,p.qu)(!0,"bSafesPreflight"),(0,p.$3)({api:"/memberAPI/preflight",dispatch:B}).then(a=>{(0,p.qu)(!0,a),"ok"===a.status?((0,p.qu)(!0,"bSafesPreflight ok: "),e(null,V)):((0,p.qu)(!0,"woo... bSafesPreflight failed: ",a.error),e(a.error))}).catch(a=>{(0,p.qu)(!0,"woo... bSafesPreflight failed."),e(a)})},er=async(e,a,r)=>{try{let t=await (0,x.N)(e,a);(0,p.qu)(!0,"Rotation done"),r(null,t.blob,t.byteString)}catch(e){(0,p.qu)(!0,"rotateImage error:",e),r(e)}},et=(e,a)=>(0,g.nW)(e,a),en=(e,a)=>(0,g.UJ)(e,a),es=(e,a)=>(0,g.sz)(e,a),ei=(e,a)=>(0,g.kh)(e,a),eo=()=>new Promise(async(e,a)=>{(0,p.$3)({api:"/memberAPI/preS3Upload",dispatch:B}).then(r=>{if((0,p.qu)(!0,r),"ok"===r.status){let a=r.s3Key;e({status:"ok",s3Key:a,signedURL:r.signedURL,signedGalleryURL:r.signedGalleryURL,signedThumbnailURL:r.signedThumbnailURL})}else(0,p.qu)(!0,"preS3Upload failed: ",r.error),a({status:"error",error:r.error})}).catch(e=>{(0,p.qu)(!0,"preS3Upload failed: ",e),a({status:"error",error:e})})}),el=(e,a,r)=>new Promise((t,n)=>{let s,i;(0,p.$3)({api:"/memberAPI/preS3ChunkUpload",body:{itemId:e,chunkIndex:a.toString(),timeStamp:r},dispatch:B}).then(e=>{(0,p.qu)(!0,e),"ok"===e.status?(i=(s=e.s3Key).split("_chunk_")[0],t({s3Key:s,s3KeyPrefix:i,signedURL:e.signedURL})):((0,p.qu)(!0,"preS3ChunkUpload failed: ",e.error),n(e.error))}).catch(e=>{(0,p.qu)(!0,"preS3ChunkUpload failed: ",e),n(e)})}),ec=e=>new Promise(async(a,r)=>{e.keyEnvelope=w.util.encode64(e.keyEnvelope),(0,p.$3)({api:"/memberAPI/postS3Upload",body:e,dispatch:B}).then(e=>{(0,p.qu)(!0,e),"ok"===e.status?a({status:"ok"}):((0,p.qu)(!0,"postS3Upload failed: ",e.error),r(e.error))}).catch(e=>{(0,p.qu)(!0,"postS3Upload failed: ",e),r(e)})}),ed=(e,a,r)=>new Promise(async(t,n)=>{try{let n=await k.put(a,y.from(e,"binary"),{onUploadProgress:async e=>{r(e)},headers:{"Content-Type":"binary/octet-stream"}});t(n)}catch(e){n(e)}}),eu=()=>(0,p.S7)(),eh=e=>(0,p.q_)(e),ef=()=>(0,m.M2)();return(0,t.jsx)(t.Fragment,{children:X?(0,t.jsxs)(t.Fragment,{children:[F&&Z?(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(o.Z,{xs:6,children:["title"===a&&"<h2></h2>"===h&&(0,t.jsx)("h6",{className:"m-0 text-secondary",children:"Title"}),"content"===a&&null===h&&(0,t.jsx)("h6",{className:"m-0 text-secondary",children:"Content"})]}),(0,t.jsxs)(o.Z,{xs:6,children:[(0,t.jsx)(l.Z,{variant:"link",className:"text-dark pull-right p-0",onClick:()=>{S(a)},children:(0,t.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true"})}),"content"===a&&null!==_&&(0,t.jsxs)(c.Z,{className:"pull-right mx-3",size:"sm",children:[(0,t.jsx)(l.Z,{variant:"outline-danger",className:"m-0",onClick:L,children:"Draft"}),(0,t.jsx)(l.Z,{variant:"danger",onClick:U,children:"X"})]})]})]}):"",("Writing"===d||"Saving"===d||"ReadOnly"===d||!(C&&(!h||0===h.length)))&&(0,t.jsx)(i.Z,{className:"".concat("title"===a?f().titleEditorRow:f().editorRow," fr-element fr-view"),children:(0,t.jsx)("div",{className:"inner-html",ref:I,dangerouslySetInnerHTML:{__html:h},style:{overflowX:"auto"}})})]}):""})}},37865:function(e,a,r){r.d(a,{Z:function(){return w}});var t=r(85893),n=r(67294),s=r(9473),i=r(11163),o=r(10682),l=r(34051),c=r(31555),d=r(35005),u=r(32171),h=r(39060),f=r(63327),m=r(12053),p=r(18695),g=r(37820),x=r.n(g),b=r(38712),j=r.n(b),y=r(49411),k=r(51892);function w(){let e=(0,s.I0)(),a=(0,i.useRouter)(),r=(0,s.v9)(e=>e.container.workspaceKey),u=(0,s.v9)(e=>e.container.searchKey),h=(0,s.v9)(e=>e.container.searchIV),f=(0,s.v9)(e=>e.page.oldVersion),m=(0,s.v9)(e=>e.page.activity),p=(0,s.v9)(e=>e.page.tags),g=(0,s.v9)(e=>e.page.itemCopy),[b,k]=(0,n.useState)([]),[w,S]=(0,n.useState)(!1),[F,Z]=(0,n.useState)(!1),C=e=>{k(e),w||S(!0)};return(0,n.useEffect)(()=>{k(p)},[p]),(0,n.useEffect)(()=>{0===m&&w&&S(!1)},[m]),(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(l.Z,{children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)("div",{className:"pull-right",children:[(0,t.jsx)("span",{children:g&&"v.".concat(g.version)}),(0,t.jsx)(d.Z,{variant:"link",className:"text-dark",onClick:()=>{Z(!0),e((0,y.Ey)()),e((0,y.Kh)({page:1}))},children:(0,t.jsx)("i",{className:"fa fa-history","aria-hidden":"true"})}),!1]})})}),(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{xs:"1",className:"px-0",children:(0,t.jsx)("label",{className:"pull-right py-2",children:(0,t.jsx)("span",{children:(0,t.jsx)("i",{className:"fa fa-tags fa-lg","aria-hidden":"true"})})})}),(0,t.jsx)(c.Z,{xs:"10",children:f?(0,t.jsx)(x(),{value:b,onChange:C,disabled:!0}):(0,t.jsx)(x(),{value:b,onChange:C})})]}),w&&(0,t.jsx)(l.Z,{children:(0,t.jsxs)(c.Z,{md:"10",children:[(0,t.jsx)(d.Z,{variant:"link",className:"pull-right",onClick:()=>{k(p),S(!1)},children:(0,t.jsx)("i",{className:"fa fa-times fa-lg ".concat(j().orangeText),"aria-hidden":"true"})}),(0,t.jsx)(d.Z,{variant:"link",className:"pull-right",onClick:()=>{e((0,y.Sx)(b,r,u,h))},children:(0,t.jsx)("i",{className:"fa fa-check fa-lg ".concat(j().greenText),"aria-hidden":"true"})})]})}),(0,t.jsx)(v,{onLinkChanged:e=>{a.push(e),Z(!1)},versionsHistoryModalOpened:F,closeVersionsHistoryModal:()=>Z(!1)})]})}function v(e){let{onLinkChanged:a,versionsHistoryModalOpened:r,closeVersionsHistoryModal:n}=e,i=(0,s.I0)(),o=(0,s.v9)(e=>e.page.itemVersions),l=(0,s.v9)(e=>e.page.totalVersions),c=(0,s.v9)(e=>e.page.versionsPageNumber),p=(0,s.v9)(e=>e.page.versionsPerPage),g=e=>{a(e)},x=o.map((e,a)=>(0,t.jsx)(S,{onVersionSelected:g,id:e.id,container:e.container,updatedBy:e.updatedBy,updatedTime:e.updatedTime,updatedText:e.updatedText,updatedTimeStamp:e.updatedTimeStamp,version:e.version,latestVersion:0===a},a));return(0,t.jsxs)(u.Z,{show:r,onHide:n,children:[(0,t.jsx)(h.Z,{closeButton:!0,children:(0,t.jsxs)(f.Z,{children:[(0,t.jsx)("h4",{children:"Versions"}),(0,t.jsx)(d.Z,{variant:"link",href:"#",size:"sm",children:"Go to top"})]})}),(0,t.jsxs)(m.Z,{children:[x,l>c*p&&(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)(d.Z,{variant:"link",className:"text-center",size:"sm",onClick:e=>{i((0,y.Kh)({page:c+1}))},children:"More"})})]})]})}function S(e){let{onVersionSelected:a,id:r,container:n,updatedBy:s,updatedTime:i,updatedText:o,updatedTimeStamp:d,version:u,latestVersion:h}=e,f=(0,k.vp)({id:r,container:n});h||(f+="?version=".concat(u));let m=()=>{a(f)};return(0,t.jsxs)(p.Z.Item,{children:[(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{xs:3,onClick:m,style:{cursor:"pointer"},children:(0,t.jsxs)("h4",{children:["v.",u]})}),(0,t.jsx)(c.Z,{xs:8,onClick:m,style:{cursor:"pointer"},children:(0,t.jsx)("h5",{className:"pull-right px-2",children:o})}),(0,t.jsx)(c.Z,{xs:1,children:(0,t.jsx)("a",{className:j().externalLink,target:"_blank",href:f,rel:"noopener noreferrer",children:(0,t.jsx)("i",{className:"me-2 fa fa-external-link mt-1  text-dark pull-right","aria-hidden":"true"})})})]}),(0,t.jsxs)(l.Z,{onClick:m,style:{cursor:"pointer"},children:[(0,t.jsx)(c.Z,{xs:6,children:(0,t.jsx)("p",{children:s})}),(0,t.jsx)(c.Z,{xs:6,children:(0,t.jsx)("p",{className:"pull-right",children:i})})]}),(0,t.jsx)(l.Z,{onClick:m,style:{cursor:"pointer"},children:(0,t.jsx)(c.Z,{xs:12,children:(0,t.jsx)("p",{className:"pull-right",children:d})})})]},r)}},76822:function(e,a,r){r.d(a,{Z:function(){return o}});var t=r(85893),n=r(35005),s=r(38712),i=r.n(s);function o(e){let{isEditing:a,onWrite:r,readyForSaving:s=!0,onSave:o,onCancel:l,canEdit:c=!0}=e;return(0,t.jsxs)(t.Fragment,{children:[c&&!a?(0,t.jsx)(n.Z,{onClick:r,className:"".concat(i().btnCircle," ").concat(i().btnFloating," ").concat(i().btnFloatingWrite),children:(0,t.jsx)("i",{className:"fa fa-pencil fa-2x","aria-hidden":"true"})}):(0,t.jsx)(t.Fragment,{}),a&&s?(0,t.jsx)(n.Z,{onClick:o,className:"".concat(i().btnCircle," ").concat(i().btnFloating," ").concat(i().btnFloatingSave),children:(0,t.jsx)("i",{className:"fa fa-check fa-2x","aria-hidden":"true"})}):(0,t.jsx)(t.Fragment,{}),a?(0,t.jsx)(n.Z,{onClick:l,className:"".concat(i().btnCircle," ").concat(i().btnFloating," ").concat(i().btnFloatingCancel),children:(0,t.jsx)("i",{className:"fa fa-times fa-2x","aria-hidden":"true"})}):(0,t.jsx)(t.Fragment,{})]})}},41975:function(e,a,r){r.d(a,{Z:function(){return d}});var t=r(85893);r(67294);var n=r(4298),s=r.n(n),i=r(9473),o=r(78602),l=r(49486),c=0;function d(){let e=(0,i.I0)(),a=(0,i.v9)(e=>e.scripts.scripts);(0,i.v9)(e=>e.scripts.done),(0,l.qu)(!1,"Render count:",c),c++;let r=a.map((a,r)=>(0,t.jsx)(s(),{id:a.id,src:a.src,onLoad:()=>{e((0,o.CL)(r))}},r));return(0,t.jsx)("div",{children:r})}}}]);