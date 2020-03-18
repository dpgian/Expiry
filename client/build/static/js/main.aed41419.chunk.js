(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{357:function(e,t,a){e.exports=a(472)},362:function(e,t,a){},472:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),c=(a(362),a(16)),i=a(86),s=a(98),u=a(236),m=a.n(u),d=a(338),g=a(339),f=a(20),p=a(100),b=a.n(p),v=function(){return b.a.get("/api/items",{headers:{token:window.localStorage.getItem("token")}})},E=function(e){return b.a.delete("/api/items/".concat(e))},h=function(e){return b.a.post("/api/items",e)},w=function(e){return b.a.post("/api/store",e)},y=function(e){return b.a.post("/api/store/login",e)},j=function(e){return b.a.get("/api/store",{params:{name:e}})},O=a(340),k=a.n(O),D=a(23),x=a(225),N=a(182),S=a(57),M=a(28),_=a.n(M),T=a(347),C=function(e){var t=e.storeId,a=function(e){var t=[];e.length>0&&e.forEach((function(e){e.date.length>1?e.date.map((function(a){return t=a===e.date[0]?[].concat(Object(f.a)(t),[{_id:e._id,name:e.name,date:a}]):[].concat(Object(f.a)(t),[{_id:(new Date).valueOf(),date:a,parentId:e._id}])})):t=[].concat(Object(f.a)(t),[Object(g.a)({},e,{date:e.date[0]})])})),t.sort((function(e,t){var a=e.date.split("-").reverse().join(),n=t.date.split("-").reverse().join();return a<n?-1:a>n?1:0})),p(t)};function o(){return l.apply(this,arguments)}function l(){return(l=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v().then((function(e){return a(e.data)})).catch((function(e){switch(console.log(e),e.response.status){case 500:I("Session expired: Please log out and log in again."),window.localStorage.removeItem("storeName");break;default:console.log("Error while fetching items: "+e)}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){o()}),[]);var i=Object(n.useState)([]),s=Object(c.a)(i,2),u=s[0],p=s[1],b=Object(n.useState)(new Date),w=Object(c.a)(b,2),y=w[0],j=w[1],O=Object(n.useState)(""),M=Object(c.a)(O,2),C=M[0],I=M[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{maxWidth:"100%",margin:"auto",paddingTop:"1rem",paddingBottom:"3rem"}},C?r.a.createElement(N.a,{elevation:23,square:!1},r.a.createElement(S.a,{variant:"h6",align:"center"},C)):r.a.createElement(k.a,{columns:[{title:"Name",field:"name",sorting:!1,removable:!1},{title:"Date",field:"date",sorting:!1,removable:!1,editComponent:function(){return r.a.createElement(D.a,{utils:T.a},r.a.createElement(x.a,{disablePast:!0,variant:"inline",format:"DD-MM-YY",margin:"normal",id:"date-picker",value:y,onChange:j}))}},{title:"Group",field:"category",sorting:!0}],data:u,editable:{onRowAdd:function(e){return h({store:t,name:e.name,date:_()(y).format("DD-MM-YY"),category:e.category}).then((function(e){return o()})).catch((function(e){return console.log(e)}))},onRowDelete:function(e){return E(e._id).then((function(e){return o()})).catch((function(e){return console.log(e)}))}},options:{columnsButton:!0,grouping:!1,actionsColumnIndex:-1,paging:!1,draggable:!1,showTitle:!1,rowStyle:function(e){return{backgroundColor:e.date===_()().format("DD-MM-YY")?"#FF5722":e.date===_()().add(1,"days").format("DD-MM-YY")?"#FFA726":e.date===_()().add(2,"days").format("DD-MM-YY")?"#FFEE58":_()(e.date,"DD-MM-YY").isBefore(_()())?"#9E9E9E":""}}},parentChildData:function(e,t){return t.find((function(t){return t._id===e.parentId}))},localization:{body:{emptyDataSourceMessage:"No tracked items in store.",editRow:{deleteText:"Are you sure you want to delete this item?"}}}})))},I=function(){return r.a.createElement("h1",null,"Page Not Found \ud83d\ude44")},F=function(e){var t=e.store,a=e.setStore,n=Object(s.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},t?r.a.createElement(i.b,{to:"/item",className:"navbar-brand"},"Expy"):r.a.createElement(i.b,{to:"/",className:"navbar-brand"},"Expy"),r.a.createElement("span",{className:"navbar-text"},t),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarMain","aria-controls":"navbarMain","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse flex-grow-1 text-center",id:"navbarMain"},r.a.createElement("ul",{className:"navbar-nav ml-auto flex-nowrap"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/dotting",className:"nav-link"},"Dotting")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link",style:{cursor:"pointer"},onClick:function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("storeName"),a(""),n.push("/")}},"Log Out"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/dotting",className:"nav-link"},"Dotting")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/user",className:"nav-link"},"Login/Register")))))))},Y=a(58),P=a(189),A=a(99),R=function(e){var t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],o=a[1];return{value:r,setValue:o,reset:function(){return o("")},bind:{value:r,onChange:function(e){o(e.target.value)}}}},z=Object(Y.a)({login_page:{width:"360px",margin:"5% auto"},form:{padding:"45px",textAlign:"center"},form_input:{margin:"0 0 15px","& .MuiFormHelperText-root":{color:"rgb(181, 17, 68)"}},form_button:{background:"rgb(109, 31, 55)",width:"100%",padding:"15px",color:"#ffffff","&:hover":{background:"rgb(191, 3, 65)"}},message:{margin:"15px 0 0",color:"#b3b3b3",font:"Medium"},message_link:{margin:"5px 0 0",color:"rgb(109, 31 ,55)",textDecoration:"underline",cursor:"pointer"}}),q=function(e){var t=e.setStore,a=e.setStoreId,o=Object(s.f)(),l=Object(n.useState)("login"),i=Object(c.a)(l,2),u=i[0],m=i[1],d=R(""),g=d.value,f=d.bind,p=d.reset,b=R(""),v=b.value,E=b.bind,h=b.reset,j=R(""),O=j.value,k=j.bind,D=j.reset,x=R(""),M=x.value,_=x.bind,T=x.reset,C=Object(n.useState)(""),I=Object(c.a)(C,2),F=I[0],Y=I[1],q=Object(n.useState)(""),B=Object(c.a)(q,2),L=B[0],Z=B[1],J=Object(n.useState)(""),V=Object(c.a)(J,2),W=V[0],$=V[1],G=Object(n.useState)(""),H=Object(c.a)(G,2),X=H[0],K=H[1],Q=Object(n.useState)(""),U=Object(c.a)(Q,2),ee=U[0],te=U[1],ae=function(e){h(),D(),T(),m(e)},ne=z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{elevation:23,square:!1,className:ne.login_page},r.a.createElement("form",{className:ne.form,noValidate:!0,autoComplete:"off"},"login"===u?r.a.createElement("div",{className:"login_form"},r.a.createElement(P.a,Object.assign({error:""!==F,className:ne.form_input,id:"store-name",variant:"outlined",label:"Enter store name",helperText:F},f)),r.a.createElement(P.a,Object.assign({error:""!==L,className:ne.form_input,id:"store-password",variant:"outlined",type:"password",label:"Enter password",helperText:L},E)),r.a.createElement(A.a,{className:ne.form_button,variant:"outlined",onClick:function(e){return e.preventDefault(),g?v.length<6?(Z("Please enter a valid password"),void setTimeout((function(){return Z("")}),2500)):void y({name:g,password:v}).then((function(e){var n=e.data.token;window.localStorage.setItem("token",n),window.localStorage.setItem("storeName",g),t(g),a(e.data.storeId),o.push("/item")})).catch((function(e){switch(e.response.status){case 404:Y(e.response.data.message),setTimeout((function(){return Y("")}),2500);break;case 400:Z(e.response.data.message),setTimeout((function(){return Z("")}),2500);break;default:Y("Server error. Please try again."),Z("Server error. Please try again."),setTimeout((function(){return Y("")}),2500),setTimeout((function(){return Z("")}),2500)}})):(p(),Y("Please enter your store name"),void setTimeout((function(){return Y("")}),2500))}},"Log In"),r.a.createElement("div",{className:ne.message},"Don't have an account? ",r.a.createElement(S.a,{className:ne.message_link,onClick:function(){return ae("register")}},"Create an account"))):r.a.createElement("div",{className:"register_form"},r.a.createElement(P.a,Object.assign({error:""!==W,className:ne.form_input,id:"store-name",variant:"outlined",label:"Enter store name",helperText:W},f)),r.a.createElement(P.a,Object.assign({error:""!==X,className:ne.form_input,id:"store-password1",variant:"outlined",type:"password",label:"Enter password",helperText:X},k)),r.a.createElement(P.a,Object.assign({error:""!==ee,className:ne.form_input,id:"store-password2",variant:"outlined",type:"password",label:"Re-enter password",helperText:ee},_)),r.a.createElement(A.a,{className:ne.form_button,variant:"outlined",onClick:function(e){return e.preventDefault(),/\s/g.test(g)||!g?(p(),$("Enter a valid name (no white spaces)"),void setTimeout((function(){return $("")}),2500)):/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/g.test(O)?/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/g.test(M)?O!==M?(te("The two password must match"),void setTimeout((function(){return te("")}),2500)):void w({name:g,password:O}).then((function(e){m("login")})).catch((function(e){switch(e.response.status){case 400:$(e.response.data.message),setTimeout((function(){$(""),m("login")}),2500);break;default:$("Server error. Please try again."),K("Server error. Please try again."),te("Server error. Please try again."),setTimeout((function(){return $("")}),2500),setTimeout((function(){return K("")}),2500),setTimeout((function(){return te("")}),2500)}})):(te("Please re-enter password (no spaces, min 6 digit)"),void setTimeout((function(){return te("")}),2500)):(K("Please enter a valid password (no spaces, min 6 digit)"),void setTimeout((function(){return K("")}),2500))}},"Register"),r.a.createElement("div",{className:ne.message},"Already registered? ",r.a.createElement(S.a,{className:ne.message_link,onClick:function(){return ae("login")}},"Log In"))))))},B=Object(Y.a)({about_page:{width:"80%",margin:"5% auto",padding:"3%"}}),L=function(){var e=B();return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{elevation:23,square:!1,className:e.about_page},r.a.createElement(S.a,{variant:"h4",align:"center",style:{letterSpacing:".5rem"}},"EXPY"),r.a.createElement(S.a,{variant:"subtitle1",align:"center",style:{margin:"3% auto"}},"Expy is a products expiration date tracker."),r.a.createElement("br",null),r.a.createElement(S.a,{variant:"body2",align:"center"},"Day dotting made easy.",r.a.createElement("br",null),"Register and account and log in for the expiration manager table",r.a.createElement("br",null),"Sync between multiple devices",r.a.createElement("br",null),"( More features coming with future updates )")))},Z=a(10),J=a(500),V=a(497),W=Object(Y.a)((function(e){return{about_page:{width:"80%",margin:"5% auto",padding:"3%"},button_group:Object(Z.a)({display:"flex",flexDirection:"row",margin:"0 auto",justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"})}})),$=function(){var e=W(),t=function(e){return"Mon"===e?"blue":"Tue"===e?"yellow":"Wed"===e?"red":"Thu"===e?"brown":"Fri"===e?"green":"Sat"===e?"orange":"black"},a=function(e,a){var n=_()().add(e,a);g(_()(n).format("ddd: D-M"));var r=_()(n).format("ddd");s(t(r))},o=Object(n.useState)("transparent"),l=Object(c.a)(o,2),i=l[0],s=l[1],u=Object(n.useState)(""),m=Object(c.a)(u,2),d=m[0],g=m[1],f=[{name:"1 Day",value:_()().add(1,"d").format("ddd: D-M"),color:t(_()().add(1,"d").format("ddd"))},{name:"3 Days",value:_()().add(3,"d").format("ddd: D-M"),color:t(_()().add(3,"d").format("ddd"))},{name:"4 Days",value:_()().add(4,"d").format("ddd: D-M"),color:t(_()().add(4,"d").format("ddd"))},{name:"5 Days",value:_()().add(5,"d").format("ddd: D-M"),color:t(_()().add(5,"d").format("ddd"))},{name:"1 Month",value:_()().add(1,"M").format("ddd: D-M"),color:t(_()().add(1,"M").format("ddd"))},{name:"3 Months",value:_()().add(3,"M").format("ddd: D-M"),color:t(_()().add(3,"M").format("ddd"))}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{elevation:23,square:!1,className:e.about_page},r.a.createElement(S.a,{variant:"h4",align:"center",style:{letterSpacing:".5rem"}},"DAYDOT"),r.a.createElement(S.a,{variant:"body2",align:"center",style:{margin:"3% auto"}},"Click on the daydot you need or check the full table below. ",r.a.createElement("br",null),"You can also look up and item for an automated daydot."),r.a.createElement(J.a,{style:{margin:"3%"},className:e.button_group,variant:"text"},r.a.createElement(A.a,{onClick:function(){return a(1,"d")}},"1 Day"),r.a.createElement(A.a,{onClick:function(){return a(3,"d")}},"3 Days"),r.a.createElement(A.a,{onClick:function(){return a(4,"d")}},"4 Days"),r.a.createElement(A.a,{onClick:function(){return a(5,"d")}},"5 Days"),r.a.createElement(A.a,{onClick:function(){return a(1,"M")}},"1 Month"),r.a.createElement(A.a,{onClick:function(){return a(3,"M")}},"3 Months")),r.a.createElement(N.a,{elevation:10,align:"center",style:{backgroundColor:i}},r.a.createElement(S.a,{style:{color:"white"}},d)),r.a.createElement("br",null),r.a.createElement(V.a,{container:!0,spacing:3,style:{textAlign:"center"}},f.map((function(e){return r.a.createElement(V.a,{item:!0,xs:12,sm:2},r.a.createElement(N.a,null,r.a.createElement("p",{style:{color:"white",margin:"0",backgroundColor:e.color}}," ",e.name," ")," ",r.a.createElement("p",null," ",e.value," ")))})))))},G=function(){Object(n.useEffect)((function(){""===m&&window.localStorage.getItem("storeName")&&j(window.localStorage.getItem("storeName")).then((function(e){o(e.data[0].name),d(e.data[0]._id)})).catch((function(e){return console.log(e)}))}),[]);var e=r.a.useState(""),t=Object(c.a)(e,2),a=t[0],o=t[1],l=r.a.useState(""),u=Object(c.a)(l,2),m=u[0],d=u[1];return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(F,{store:a,setStore:o}),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(s.a,{exact:!0,path:"/item",render:function(){return r.a.createElement(C,{storeId:m})}}),r.a.createElement(s.a,{exact:!0,path:"/user",render:function(){return r.a.createElement(q,{setStore:o,setStoreId:d})}}),r.a.createElement(s.a,{exact:!0,path:"/dotting",render:function(){return r.a.createElement($,null)}}),r.a.createElement(s.a,{component:I}))))};l.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[357,1,2]]]);
//# sourceMappingURL=main.aed41419.chunk.js.map