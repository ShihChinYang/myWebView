(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6536],{54232:function(e,a,t){"use strict";t.d(a,{Z:function(){return v}});var r=t(85893),n=t(67294),s=t(9473),i=t(34051),o=t(31555),l=t(35005),c=t(2086),d=t(19755),u=t.n(d),h=t(38712),f=t.n(h),m=t(51892),p=t(49486),g=t(94882),x=t(43454),b=t(24638),j=t(49411),y=t(42676).Buffer;let k=t(9669),w=t(22079);function v(e){let{editorId:a,mode:d,content:h,onContentChanged:v,onPenClicked:S,showPen:F=!0,editable:Z=!0,hideIfEmpty:C=!1,writingModeReady:N=null,readOnlyModeReady:T=null,onDraftSampled:q=null,onDraftClicked:L=null,onDraftDelete:U=null}=e,B=(0,s.I0)(),I=(0,n.useRef)(null),[R,E]=(0,n.useState)(null),[P,O]=(0,n.useState)(null),V=(0,s.v9)(e=>e.auth.expandedKey),A=(0,s.v9)(e=>e.auth.froalaLicenseKey),M=(0,s.v9)(e=>e.page.id),H=(0,s.v9)(e=>e.page.itemKey),K=(0,s.v9)(e=>e.page.itemIV),_=(0,s.v9)(e=>e.page.draft);(0,p.qu)(!1,"editor key: ".concat(A));let[G,z]=(0,n.useState)(!1),[X,D]=(0,n.useState)(!1),[W,J]=(0,n.useState)(null);(0,p.qu)(!1,"Rendering editor, id,  mode: ","".concat(a," ").concat(d));let Q=()=>{let e;if(X&&!G){switch(a){case"title":e={key:A,toolbarButtons:["undo","redo"],toolbarButtonsMD:["undo","redo"],toolbarButtonsSM:["undo","redo"],toolbarButtonsXS:["undo","redo"],placeholderText:"Page Title"};break;case"content":if(!H){let e=(0,b.d9)();B((0,j.Yj)({itemKey:e}))}$(I.current).html(h),e={key:A,toolbarButtons:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","lineHeight","|","color","emoticons","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","insertHR","-","insertLink","insertImage","insertVideo","insertTable","undo","redo","clearFormatting"],toolbarButtonsMD:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","lineHeight","|","color","emoticons","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","insertHR","-","insertLink","insertImage","insertVideo","insertTable","undo","redo","clearFormatting"],toolbarButtonsSM:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","lineHeight","|","color","emoticons","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","insertHR","-","insertLink","insertImage","insertVideo","insertTable","undo","redo","clearFormatting"],toolbarButtonsXS:["bold","italic","color","emoticons","paragraphFormat","align","formatOL","formatUL","insertLink","insertImage","insertVideo","insertTable","undo","redo"],fontFamily:{"Arial,Helvetica,sans-serif":"Arial","Georgia,serif":"Georgia","Impact,Charcoal,sans-serif":"Impact","Tahoma,Geneva,sans-serif":"Tahoma","'Times New Roman',Times,serif":"Times New Roman","Verdana,Geneva,sans-serif":"Verdana","Open Sans, serif":"Open Sans","La Belle Aurore":"La Belle Aurore","Cormorant Garamond":"Cormorant Garamond","Roboto,sans-serif":"Roboto","Oswald,sans-serif":"Oswald","Montserrat,sans-serif":"Montserrat","'Open Sans Condensed',sans-serif":"Open Sans Condensed"},fontFamilySelection:!1};break;default:e={key:A,toolbarButtons:["bold","italic","underline","strikeThrough","undo","redo"],toolbarButtonsMD:["bold","italic","underline","strikeThrough","undo","redo"],toolbarButtonsSM:["bold","italic","underline","strikeThrough","undo","redo"],toolbarButtonsXS:["bold","italic","underline","strikeThrough","undo","redo"]}}$(I.current).froalaEditor(e),"content"===a&&J($(I.current).froalaEditor("html.get")),I.current.style.overflowX=null,G||((0,p.qu)(!1,"setEditorOn"),z(!0)),N&&N()}},Y=()=>{let e=$(I.current).froalaEditor("html.get");(0,p.qu)(!1,"editor content: ",e),setTimeout(()=>{v(a,e)},0)},ee=()=>{G&&($(I.current).froalaEditor("destroy"),$(I.current).html(h),I.current.style.overflowX="auto",R&&(clearInterval(R),E(null),O(null)),J(null),z(!1),T&&T())};(0,n.useEffect)(()=>{switch(d){case"ReadOnly":ee();break;case"Writing":Q();break;case"Saving":Y()}},[d]),(0,n.useEffect)(()=>{M&&H&&($(".container").data("itemId",M),$(".container").data("itemKey",H))},[M,H,K]),(0,n.useEffect)(()=>{window.$=window.jQuery=u(),t.e(1401).then(t.bind(t,41401)).then(async e=>{await e.Froala,await e.FroalaPlugins,await e.Codemirror,await e.Photoswipe,await e.Others,D(!0)})},[]),(0,n.useEffect)(()=>{X&&window&&((0,p.qu)(!1,"bsafesFroala: ".concat(window.bsafesFroala.name)),window.bsafesFroala.bSafesPreflight=ea,window.bsafesFroala.rotateImage=et,window.bsafesFroala.convertUint8ArrayToBinaryString=p.tp,window.bsafesFroala.compareArraryBufferAndUnit8Array=er,window.bsafesFroala.encryptBinaryString=en,window.bsafesFroala.encryptLargeBinaryString=es,window.bsafesFroala.encryptChunkBinaryStringToBinaryStringAsync=ei,window.bsafesFroala.preS3Upload=eo,window.bsafesFroala.preS3ChunkUpload=el,window.bsafesFroala.postS3Upload=ec,window.bsafesFroala.uploadData=ed,window.bsafesFroala.getBrowserInfo=eu,window.bsafesFroala.arraryBufferToStr=eh,window.bsafesFroala.getEditorConfig=ef)},[X]),(0,n.useEffect)(()=>{null!==W&&"content"===a&&O("Start")},[W]),(0,n.useEffect)(()=>{let e;switch((0,p.qu)(!1,"interval state:",P),P){case"Start":E(setInterval(()=>{(0,p.qu)(!1,"Saving draft ..."),(e=$(I.current).froalaEditor("html.get"))!==W&&((0,p.qu)(!1,"Content changed"),q(e),J(e),O("Stop"))},1e3));break;case"Stop":clearInterval(R),E(null)}},[P]);let ea=e=>{(0,p.qu)(!1,"bSafesPreflight"),(0,p.$3)({api:"/memberAPI/preflight",dispatch:B}).then(a=>{(0,p.qu)(!1,a),"ok"===a.status?((0,p.qu)(!1,"bSafesPreflight ok: "),e(null,V)):((0,p.qu)(!1,"woo... bSafesPreflight failed: ",a.error),e(a.error))}).catch(a=>{(0,p.qu)(!1,"woo... bSafesPreflight failed."),e(a)})},et=async(e,a,t)=>{try{let r=await (0,x.N)(e,a);(0,p.qu)(!1,"Rotation done"),t(null,r.blob,r.byteString)}catch(e){(0,p.qu)(!1,"rotateImage error:",e),t(e)}},er=(e,a)=>(0,g.nW)(e,a),en=(e,a)=>(0,g.UJ)(e,a),es=(e,a)=>(0,g.sz)(e,a),ei=(e,a)=>(0,g.kh)(e,a),eo=()=>new Promise(async(e,a)=>{(0,p.$3)({api:"/memberAPI/preS3Upload",dispatch:B}).then(t=>{if((0,p.qu)(!1,t),"ok"===t.status){let a=t.s3Key;e({status:"ok",s3Key:a,signedURL:t.signedURL,signedGalleryURL:t.signedGalleryURL,signedThumbnailURL:t.signedThumbnailURL})}else(0,p.qu)(!1,"preS3Upload failed: ",t.error),a({status:"error",error:t.error})}).catch(e=>{(0,p.qu)(!1,"preS3Upload failed: ",e),a({status:"error",error:e})})}),el=(e,a,t)=>new Promise((r,n)=>{let s,i;(0,p.$3)({api:"/memberAPI/preS3ChunkUpload",body:{itemId:e,chunkIndex:a.toString(),timeStamp:t},dispatch:B}).then(e=>{(0,p.qu)(!1,e),"ok"===e.status?(i=(s=e.s3Key).split("_chunk_")[0],r({s3Key:s,s3KeyPrefix:i,signedURL:e.signedURL})):((0,p.qu)(!1,"preS3ChunkUpload failed: ",e.error),n(e.error))}).catch(e=>{(0,p.qu)(!1,"preS3ChunkUpload failed: ",e),n(e)})}),ec=e=>new Promise(async(a,t)=>{e.keyEnvelope=w.util.encode64(e.keyEnvelope),(0,p.$3)({api:"/memberAPI/postS3Upload",body:e,dispatch:B}).then(e=>{(0,p.qu)(!1,e),"ok"===e.status?a({status:"ok"}):((0,p.qu)(!1,"postS3Upload failed: ",e.error),t(e.error))}).catch(e=>{(0,p.qu)(!1,"postS3Upload failed: ",e),t(e)})}),ed=(e,a,t)=>new Promise(async(r,n)=>{try{let n=await k.put(a,y.from(e,"binary"),{onUploadProgress:async e=>{t(e)},headers:{"Content-Type":"binary/octet-stream"}});r(n)}catch(e){n(e)}}),eu=()=>(0,p.S7)(),eh=e=>(0,p.q_)(e),ef=()=>(0,m.M2)();return(0,r.jsx)(r.Fragment,{children:X?(0,r.jsxs)(r.Fragment,{children:[F&&Z?(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(o.Z,{xs:6,children:["title"===a&&"<h2></h2>"===h&&(0,r.jsx)("h6",{className:"m-0 text-secondary",children:"Title"}),"content"===a&&null===h&&(0,r.jsx)("h6",{className:"m-0 text-secondary",children:"Content"})]}),(0,r.jsxs)(o.Z,{xs:6,children:[(0,r.jsx)(l.Z,{variant:"link",className:"text-dark pull-right p-0",onClick:()=>{S(a)},children:(0,r.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true"})}),"content"===a&&null!==_&&(0,r.jsxs)(c.Z,{className:"pull-right mx-3",size:"sm",children:[(0,r.jsx)(l.Z,{variant:"outline-danger",className:"m-0",onClick:L,children:"Draft"}),(0,r.jsx)(l.Z,{variant:"danger",onClick:U,children:"X"})]})]})]}):"",("Writing"===d||"Saving"===d||"ReadOnly"===d||!(C&&(!h||0===h.length)))&&(0,r.jsx)(i.Z,{className:"".concat("title"===a?f().titleEditorRow:f().editorRow," fr-element fr-view"),children:(0,r.jsx)("div",{className:"inner-html",ref:I,dangerouslySetInnerHTML:{__html:h},style:{overflowX:"auto"}})})]}):""})}},37865:function(e,a,t){"use strict";t.d(a,{Z:function(){return w}});var r=t(85893),n=t(67294),s=t(9473),i=t(11163),o=t(10682),l=t(34051),c=t(31555),d=t(35005),u=t(32171),h=t(39060),f=t(63327),m=t(12053),p=t(18695),g=t(37820),x=t.n(g),b=t(38712),j=t.n(b),y=t(49411),k=t(51892);function w(){let e=(0,s.I0)(),a=(0,i.useRouter)(),t=(0,s.v9)(e=>e.container.workspaceKey),u=(0,s.v9)(e=>e.container.searchKey),h=(0,s.v9)(e=>e.container.searchIV),f=(0,s.v9)(e=>e.page.oldVersion),m=(0,s.v9)(e=>e.page.activity),p=(0,s.v9)(e=>e.page.tags),g=(0,s.v9)(e=>e.page.itemCopy),[b,k]=(0,n.useState)([]),[w,S]=(0,n.useState)(!1),[F,Z]=(0,n.useState)(!1),C=e=>{k(e),w||S(!0)};return(0,n.useEffect)(()=>{k(p)},[p]),(0,n.useEffect)(()=>{0===m&&w&&S(!1)},[m]),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(c.Z,{children:(0,r.jsxs)("div",{className:"pull-right",children:[(0,r.jsx)("span",{children:g&&"v.".concat(g.version)}),(0,r.jsx)(d.Z,{variant:"link",className:"text-dark",onClick:()=>{Z(!0),e((0,y.Ey)()),e((0,y.Kh)({page:1}))},children:(0,r.jsx)("i",{className:"fa fa-history","aria-hidden":"true"})}),!1]})})}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{xs:"1",className:"px-0",children:(0,r.jsx)("label",{className:"pull-right py-2",children:(0,r.jsx)("span",{children:(0,r.jsx)("i",{className:"fa fa-tags fa-lg","aria-hidden":"true"})})})}),(0,r.jsx)(c.Z,{xs:"10",children:f?(0,r.jsx)(x(),{value:b,onChange:C,disabled:!0}):(0,r.jsx)(x(),{value:b,onChange:C})})]}),w&&(0,r.jsx)(l.Z,{children:(0,r.jsxs)(c.Z,{md:"10",children:[(0,r.jsx)(d.Z,{variant:"link",className:"pull-right",onClick:()=>{k(p),S(!1)},children:(0,r.jsx)("i",{className:"fa fa-times fa-lg ".concat(j().orangeText),"aria-hidden":"true"})}),(0,r.jsx)(d.Z,{variant:"link",className:"pull-right",onClick:()=>{e((0,y.Sx)(b,t,u,h))},children:(0,r.jsx)("i",{className:"fa fa-check fa-lg ".concat(j().greenText),"aria-hidden":"true"})})]})}),(0,r.jsx)(v,{onLinkChanged:e=>{a.push(e),Z(!1)},versionsHistoryModalOpened:F,closeVersionsHistoryModal:()=>Z(!1)})]})}function v(e){let{onLinkChanged:a,versionsHistoryModalOpened:t,closeVersionsHistoryModal:n}=e,i=(0,s.I0)(),o=(0,s.v9)(e=>e.page.itemVersions),l=(0,s.v9)(e=>e.page.totalVersions),c=(0,s.v9)(e=>e.page.versionsPageNumber),p=(0,s.v9)(e=>e.page.versionsPerPage),g=e=>{a(e)},x=o.map((e,a)=>(0,r.jsx)(S,{onVersionSelected:g,id:e.id,container:e.container,updatedBy:e.updatedBy,updatedTime:e.updatedTime,updatedText:e.updatedText,updatedTimeStamp:e.updatedTimeStamp,version:e.version,latestVersion:0===a},a));return(0,r.jsxs)(u.Z,{show:t,onHide:n,children:[(0,r.jsx)(h.Z,{closeButton:!0,children:(0,r.jsxs)(f.Z,{children:[(0,r.jsx)("h4",{children:"Versions"}),(0,r.jsx)(d.Z,{variant:"link",href:"#",size:"sm",children:"Go to top"})]})}),(0,r.jsxs)(m.Z,{children:[x,l>c*p&&(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(d.Z,{variant:"link",className:"text-center",size:"sm",onClick:e=>{i((0,y.Kh)({page:c+1}))},children:"More"})})]})]})}function S(e){let{onVersionSelected:a,id:t,container:n,updatedBy:s,updatedTime:i,updatedText:o,updatedTimeStamp:d,version:u,latestVersion:h}=e,f=(0,k.vp)({id:t,container:n});h||(f+="?version=".concat(u));let m=()=>{a(f)};return(0,r.jsxs)(p.Z.Item,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{xs:3,onClick:m,style:{cursor:"pointer"},children:(0,r.jsxs)("h4",{children:["v.",u]})}),(0,r.jsx)(c.Z,{xs:8,onClick:m,style:{cursor:"pointer"},children:(0,r.jsx)("h5",{className:"pull-right px-2",children:o})}),(0,r.jsx)(c.Z,{xs:1,children:(0,r.jsx)("a",{className:j().externalLink,target:"_blank",href:f,rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"me-2 fa fa-external-link mt-1  text-dark pull-right","aria-hidden":"true"})})})]}),(0,r.jsxs)(l.Z,{onClick:m,style:{cursor:"pointer"},children:[(0,r.jsx)(c.Z,{xs:6,children:(0,r.jsx)("p",{children:s})}),(0,r.jsx)(c.Z,{xs:6,children:(0,r.jsx)("p",{className:"pull-right",children:i})})]}),(0,r.jsx)(l.Z,{onClick:m,style:{cursor:"pointer"},children:(0,r.jsx)(c.Z,{xs:12,children:(0,r.jsx)("p",{className:"pull-right",children:d})})})]},t)}},76822:function(e,a,t){"use strict";t.d(a,{Z:function(){return o}});var r=t(85893),n=t(35005),s=t(38712),i=t.n(s);function o(e){let{isEditing:a,onWrite:t,readyForSaving:s=!0,onSave:o,onCancel:l,canEdit:c=!0}=e;return(0,r.jsxs)(r.Fragment,{children:[c&&!a?(0,r.jsx)(n.Z,{onClick:t,className:"".concat(i().btnCircle," ").concat(i().btnFloating," ").concat(i().btnFloatingWrite),children:(0,r.jsx)("i",{className:"fa fa-pencil fa-2x","aria-hidden":"true"})}):(0,r.jsx)(r.Fragment,{}),a&&s?(0,r.jsx)(n.Z,{onClick:o,className:"".concat(i().btnCircle," ").concat(i().btnFloating," ").concat(i().btnFloatingSave),children:(0,r.jsx)("i",{className:"fa fa-check fa-2x","aria-hidden":"true"})}):(0,r.jsx)(r.Fragment,{}),a?(0,r.jsx)(n.Z,{onClick:l,className:"".concat(i().btnCircle," ").concat(i().btnFloating," ").concat(i().btnFloatingCancel),children:(0,r.jsx)("i",{className:"fa fa-times fa-2x","aria-hidden":"true"})}):(0,r.jsx)(r.Fragment,{})]})}},41975:function(e,a,t){"use strict";t.d(a,{Z:function(){return d}});var r=t(85893);t(67294);var n=t(4298),s=t.n(n),i=t(9473),o=t(78602),l=t(49486),c=0;function d(){let e=(0,i.I0)(),a=(0,i.v9)(e=>e.scripts.scripts);(0,i.v9)(e=>e.scripts.done),(0,l.qu)(!1,"Render count:",c),c++;let t=a.map((a,t)=>(0,r.jsx)(s(),{id:a.id,src:a.src,onLoad:()=>{e((0,o.CL)(t))}},t));return(0,r.jsx)("div",{children:t})}},42676:function(){}}]);