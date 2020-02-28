(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,n){e.exports=n(62)},34:function(e,t,n){},43:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(24),r=n.n(c),i=(n(34),n(5)),o=n(28),m=n(8),u=n(9),s=n(11),d=n(10),h=n(12),f=(n(43),function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e),"\u2717")}),E=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both"},className:"jumbotron"},t)},p=n(7),g=n.n(p),v=function(){return g.a.get("/api/items")},b=function(e){return g.a.get("/api/items/".concat(e))},j=function(e){return g.a.delete("/api/items/".concat(e))},y=function(e){return g.a.post("/api/items",e)},I=function(e){var t=e.size,n=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)},O=function(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)},k=function(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)},N=(n(61),function(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}),C=function(e){return l.a.createElement("li",{className:"list-group-item"},e.children)},w=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))},z=function(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)},S=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={items:[],name:"",date:""},n.loadItems=function(){v().then((function(e){return n.setState({items:e.data,name:"",date:""})})).catch((function(e){return console.log(e)}))},n.deleteBook=function(e){j(e).then((function(e){return n.loadItems()})).catch((function(e){return console.log(e)}))},n.handleInputChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(o.a)({},a,l))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.name&&n.state.date&&y({name:n.state.name,date:n.state.date}).then((function(e){return n.loadItems()})).catch((function(e){return console.log(e)}))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){var e=this;return l.a.createElement(O,{fluid:!0},l.a.createElement(k,null,l.a.createElement(I,{size:"md-6"},l.a.createElement(E,null,l.a.createElement("h1",null,"What Items am I looking for?")),l.a.createElement("form",null,l.a.createElement(w,{value:this.state.name,onChange:this.handleInputChange,name:"name",placeholder:"Item name (required)"}),l.a.createElement(w,{value:this.state.date,onChange:this.handleInputChange,name:"date",placeholder:"Item date (required)"}),l.a.createElement(z,{onClick:this.handleFormSubmit},"Submit Item"))),l.a.createElement(I,{size:"md-6 sm-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"Registered Items")),this.state.items.length?l.a.createElement(N,null,this.state.items.map((function(t){return l.a.createElement(C,{key:t._id},l.a.createElement(i.b,{to:"/items/"+t._id},l.a.createElement("strong",null,t.name," : ",t.date)),l.a.createElement(f,{onClick:function(){return e.deleteBook(t._id)}}))}))):l.a.createElement("h3",null,"No items registered yet"))))}}]),t}(a.Component),B=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={item:{}},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b(this.props.match.params.id).then((function(t){return e.setState({item:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(O,{fluid:!0},l.a.createElement(k,null,l.a.createElement(I,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,this.state.item.name," : ",this.state.item.date)))),l.a.createElement(k,null,l.a.createElement(I,{size:"md-12"},l.a.createElement(i.b,{to:"/"},"Back to all items"))))}}]),t}(a.Component),x=function(){return l.a.createElement(O,{fluid:!0},l.a.createElement(k,null,l.a.createElement(I,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},F=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(i.d,null,l.a.createElement(i.c,{exact:!0,path:"/",component:S}),l.a.createElement(i.c,{exact:!0,path:"/items",component:S}),l.a.createElement(i.c,{exact:!0,path:"/items/:id",component:B}),l.a.createElement(i.c,{component:x}))))};r.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.57bca49d.chunk.js.map