(this["webpackJsonpjira-app"]=this["webpackJsonpjira-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(14),l=a.n(o),u=(a(26),a(17)),c=a(1),i=a(15),s=a(16),m=a(20),d=a(19),D=a(8),p=function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,e.Type),n.a.createElement("td",null,e.TicketID),n.a.createElement("td",null,e.Summary),n.a.createElement("td",null,e.Status),n.a.createElement("td",null,e.CreatedDate))},y=function(e){var t=e.rowData,a=t.length>0?t.map((function(e){return n.a.createElement(p,{key:e.TicketID,Type:e.Type,TicketID:e.TicketID,Summary:e.Summary,Status:e.Status,CreatedDate:e.CreatedDate})})):"";return n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"TicketID"),n.a.createElement("th",null,"Summary"),n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"CreatedDate")),a))},h=(a(27),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleSort=function(e){return e?(r.handleDatesSort(e),e.sort((function(e,t){return new Date(t.CreatedDate)-new Date(e.CreatedDate)}))):[]},r.state={rowData:null},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleSort(D));var e=this.rowData();this.setState({rowData:e})}},{key:"mapResponseData",value:function(){return D?D.reduce((function(e,t){var a=t.Type,r=t.TicketID,n=t.Summary,o=t.Status,l=t.CreatedDate;return e[a]||(e[a]=[]),e[a].push({Type:a,TicketID:r,Summary:n,Status:o,CreatedDate:l}),e}),[]):[]}},{key:"rowData",value:function(){var e=this.mapResponseData(),t=[];if(e){for(var a in e)t=t.concat(e[a]);return t}return null}},{key:"handleDatesSort",value:function(e){if(e){var t=[];e.map((function(a,r){if(t.includes(a.CreatedDate))return e[r-1],e.sort((function(e,t){return e.TicketID-t.TicketID}));t.push(a.CreatedDate)}))}return[]}},{key:"render",value:function(){return n.a.createElement(y,{rowData:this.state.rowData?this.state.rowData:""})}}]),a}(r.Component));var S=function(){var e=n.a.createElement(u.a,null,n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/",component:h})));return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",null,"Welcome to JIRA Dashboard"),e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('[{"TicketID":"3","Type":"Epic","Summary":"Dashboard View","Status":"In progress","CreatedDate":"09/Jul/19"},{"TicketID":"5","Type":"Story","Summary":"Multiple API calls to fetch items for dashboard view","Status":"Done","CreatedDate":"16/Jul/19"},{"TicketID":"15","Type":"Bug","Summary":"UI doesn\'t waits for all API calls to return a response before moving to next steps","Status":"Ready for Dev","CreatedDate":"18/Jul/19"},{"TicketID":"17","Type":"Story","Summary":"Sort the dashboard items based on criticality","Status":"Done","CreatedDate":"17/Nov/19"},{"TicketID":"34","Type":"Bug","Summary":"Dashboard UI sorts numbers as String - 100 and 111 listed before 2 and 22","Status":"Ready for Dev","CreatedDate":"22/Jul/19"},{"TicketID":"9","Type":"Story","Summary":"Apply locale specific language translation to dashboard items","Status":"In progress","CreatedDate":"20/Jul/19"},{"TicketID":"10","Type":"Story","Summary":"Apply appropriate color scheme to dashboard items based on criticality","Status":"Ready for Dev","CreatedDate":"20/Jul/19"}]')}},[[21,1,2]]]);
//# sourceMappingURL=main.77d86d8f.chunk.js.map