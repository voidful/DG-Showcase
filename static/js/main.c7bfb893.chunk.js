(this.webpackJsonpDGShowcase=this.webpackJsonpDGShowcase||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),c=(a(14),a(1)),s=a(2),o=a(3),u=a(5),d=a(4),m=(a(7),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(c.a)(this,a);var r=(n=t.call(this,e)).props.selected_id;return n.state={selected_id:r,isLoading:!0},n}return Object(s.a)(a,[{key:"getQueryVariable",value:function(e){for(var t=window.location.search.substring(1).split("&"),a=0;a<t.length;a++){var n=t[a].split("=");if(n[0]===e)return n[1]}return!1}},{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0});var t=this.state.selected_id;!1!==this.getQueryVariable("id")&&(t=this.getQueryVariable("id"),this.setState({selected_id:t})),fetch("/DG-Showcase/distractors/"+t+".json").then((function(e){return e.json()})).then((function(t){return e.setState({data:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this;return this.state.isLoading?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{id:"main"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"ID: ",this.state.selected_id))),r.a.createElement("div",{className:"mini-posts"},r.a.createElement("div",null,r.a.createElement("h2",null,"Context"),r.a.createElement("p",null,this.state.data.article," ")),r.a.createElement("div",null,r.a.createElement("h2",null,"Question"),r.a.createElement("h3",null,this.state.data.questions),r.a.createElement("h2",null,"Model generate result"),r.a.createElement("ul",null,this.state.data.options.model.map((function(t,a){return r.a.createElement("li",{key:t+a,style:{color:a===e.state.data.answer.model?"crimson":"black"}},t)}))),r.a.createElement("br",null),r.a.createElement("h2",null,"Human generate result"),r.a.createElement("ul",null,this.state.data.options.human.map((function(t,a){return r.a.createElement("li",{key:t+a,style:{color:a===e.state.data.answer.human?"crimson":"black"}},t)})))))))}}]),a}(r.a.Component)),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={selected_id:n.random()},n.random=n.random.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"random",value:function(){return Math.floor(5792*Math.random())+1}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{id:"header"},r.a.createElement("h1",null,r.a.createElement("a",{href:"index.html"},"Distractor Generator Showcase"))),r.a.createElement(m,{selected_id:this.state.selected_id}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.c7bfb893.chunk.js.map