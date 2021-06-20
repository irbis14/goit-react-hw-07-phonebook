(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__GmRc1",label:"ContactForm_label__2tB8O",input:"ContactForm_input__3CNgm",button:"ContactForm_button__1ITJa"}},,,,,,,function(t,e,n){t.exports={filter__container:"Filter_filter__container__ruQ--",label:"Filter_label__3JdSt",input:"Filter_input__3UYrC"}},,function(t,e,n){t.exports={list__item:"ContactsItem_list__item__2VJ5R",button__delete:"ContactsItem_button__delete__Qe1l6"}},,function(t,e,n){t.exports={list:"Contacts_list__TryJv"}},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),o=(n(19),n(14)),s=n(3),l=n(5),u=n(6),m=n(8),b=n(7),d=n(4),h=n(2),j=n.n(h),f=n(0),_={name:"",number:""},p=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state=Object(s.a)({},_),t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),console.log(t.state),t.reset()},t.reset=function(){t.setState(Object(s.a)({},_))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:j.a.label,htmlFor:"name",children:["Name",Object(f.jsx)("input",{className:j.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(f.jsxs)("label",{className:j.a.label,children:["Number",Object(f.jsx)("input",{className:j.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(f.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(9),O=n.n(C),v=function(t){var e=t.value,n=t.onChangeFilter;return Object(f.jsx)("div",{className:O.a.filter__container,children:Object(f.jsxs)("label",{htmlFor:"filter",className:O.a.label,children:["Find contacts by name",Object(f.jsx)("input",{className:O.a.input,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:e,onChange:n})]})})},x=n(13),g=n.n(x),y=function(t){var e=t.children;return Object(f.jsx)("ul",{className:g.a.list,children:e})},N=n(11),F=n.n(N),S=function(t){var e=t.items,n=t.onDeleteContact;return e.map((function(t){return Object(f.jsxs)("li",{className:F.a.list__item,children:[t.name,": ",t.number,Object(f.jsx)("button",{name:t.name,type:"button",className:F.a.button__delete,onClick:n,children:"Delete"})]},t.id)}))},A=n(24),w=(n(21),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=Object(s.a)({id:Object(A.a)()},e);t.state.contacts.find((function(t){return t.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[n])}}))},t.onChangeFilter=function(e){t.setState({filter:e.target.value})},t.filterContact=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){var n=t.state.contacts,a=e.target.name,r=n.filter((function(t){return t.name!==a}));t.setState({contacts:r})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.filterContact();return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{onSubmit:this.addContact}),Object(f.jsx)(v,{onChangeFilter:this.onChangeFilter,value:t}),Object(f.jsx)(y,{children:Object(f.jsx)(S,{items:e,onDeleteContact:this.deleteContact})})]})}}]),n}(a.Component));i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.8bc62dde.chunk.js.map