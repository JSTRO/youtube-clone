(window["webpackJsonpyoutube-clone"]=window["webpackJsonpyoutube-clone"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),l=a(39),s=a.n(l),o=a(53),m=a(25),u=a(14),d=a(29),p=a(30),h=a(37),E=a(62),v=a(150),b=a(144),f=a(54),g=a(17),S=a(140),y=a(148),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleSubmit=function(e){var t=a.state.searchTerm;(0,a.props.onFormSubmit)(t),e.preventDefault()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{elevation:6},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"searchBar"},r.a.createElement(y.a,{fullWidth:!0,placeholder:"Search...",name:"searchTerm",value:this.state.searchTerm,onChange:this.handleChange})))}}]),t}(r.a.Component),x=a(59),j=a.n(x);function k(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var w=a(143),I=a(147),N=a(145),O=a(146),V=function(e){var t=e.video;e.darkMode;if(!t)return r.a.createElement(w.a,{variant:"h6"},"Loading...");var a,n="https://www.youtube.com/embed/".concat(t.id),i=t.statistics,c=i.viewCount,l=i.likeCount,s=i.dislikeCount,o=t.snippet,m=o.title,u=o.channelTitle,d=o.publishedAt,p=o.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{elevation:6,className:"videoContainer"},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:n,className:"iframe"}),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"h6"},m)),r.a.createElement(b.a,{alignItems:"center",container:!0,spacing:2,className:"stats"},r.a.createElement(b.a,{item:!0,xs:7},r.a.createElement(w.a,{variant:"subtitle1"},k(c)," views")),r.a.createElement(N.a,null),r.a.createElement(b.a,{item:!0,xs:1},r.a.createElement(w.a,null,k(l))),r.a.createElement(b.a,{item:!0,xs:1}),r.a.createElement(O.a,null),r.a.createElement(b.a,{item:!0,xs:1},r.a.createElement(w.a,null,k(s)))),r.a.createElement(I.a,{variant:"middle"}),r.a.createElement(b.a,{alignItems:"center",container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:1},r.a.createElement("img",{alt:"thumbnail",src:t.thumbnails.medium.url,className:"channelImg"})),r.a.createElement(b.a,{item:!0,xs:4},r.a.createElement(w.a,{variant:"subtitle1"},u),r.a.createElement(w.a,{variant:"subtitle2"},"Published on ",function(e){var t=e.substring(8,10),a=parseInt(e.substring(5,7))-1,n=e.substring(0,4);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][a]," ").concat(t,", ").concat(n)}(d)))),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:1}),r.a.createElement(b.a,{item:!0,xs:11},r.a.createElement(j.a,null,r.a.createElement(w.a,{variant:"subtitle2"},(a=p,a.split("\n")).map(function(e,t){return r.a.createElement("p",{key:t},e)})))))))};var M=function(e){var t,a=e.video,n=e.onVideoSelect;return r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(S.a,{className:"videoItem",onClick:function(){n(a)}},r.a.createElement("img",{className:"videoImg",alt:"thumbnail",src:a.snippet.thumbnails.medium.url}),r.a.createElement(w.a,{className:"videoItemTitle",variant:"subtitle1"},r.a.createElement("b",null,a.snippet.title,"..."),r.a.createElement(w.a,null,a.snippet.channelTitle),r.a.createElement(w.a,null,(t=a.statistics.viewCount)>999&&t<=999999?"".concat(Math.round(t/1e3),"K"):t>=1e6?"".concat(Math.round(t/1e6),"M"):t," views"))))},T=(a(44),function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e,t){return r.a.createElement(M,{onVideoSelect:a,key:t,video:e})});return r.a.createElement(b.a,{container:!0,spacing:2},n)}),A=a(149),D=function(e){var t=e.onChange;return r.a.createElement(b.a,{alignItems:"center",justify:"center",container:!0,spacing:2},r.a.createElement(w.a,null,"Dark Mode"),r.a.createElement(A.a,{onChange:t,color:"primary"}))},B=a(61),J=a.n(B).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),P=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={videos:[],selectedVideo:null,darkMode:!1},a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a.handleChange=function(){a.setState({darkMode:!a.state.darkMode}),console.log(a.state.darkMode)},a.handleSubmit=function(){var e=Object(o.a)(s.a.mark(function e(t){var n,r,i,c,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("search",{params:{part:"snippet",maxResults:5,key:"AIzaSyC20Se7X2phj5V02E7mnTN8CjlDxePS1s4",type:"video",q:t}});case 2:return n=e.sent,r=n.data.items,e.next=6,J.get("videos",{params:{part:"snippet, statistics",id:r.map(function(e){return e.id.videoId}).join(","),key:"AIzaSyC20Se7X2phj5V02E7mnTN8CjlDxePS1s4"}});case 6:return i=e.sent,e.next=9,J.get("channels",{params:{part:"snippet",id:r.map(function(e){return e.snippet.channelId}).join(","),key:"AIzaSyC20Se7X2phj5V02E7mnTN8CjlDxePS1s4"}});case 9:(c=e.sent).data.items.map(function(e){e.channelSnippet=e.snippet,delete e.snippet}),l=r.map(function(e){return Object.assign({},e,i.data.items.find(function(t){return t.id===e.id.videoId}),c.data.items.find(function(t){return t.id===e.snippet.channelId}).channelSnippet)}),a.setState({videos:l,selectedVideo:l[0]});case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.handleSubmit("javascript")}},{key:"render",value:function(){var e=this.state,t=e.selectedVideo,a=e.videos,n=e.darkMode,i=(this.props.handleChange,Object(E.a)({palette:{type:"dark"}}));return r.a.createElement(v.a,{theme:n?i:null},r.a.createElement(f.Helmet,null,r.a.createElement("title",null,t?"YouTube Clone | ".concat(t.snippet.title):"YouTube Clone")),r.a.createElement(b.a,{container:!0,spacing:4,className:n?"darkBackground":null},r.a.createElement(b.a,{className:"videoContainer",item:!0,xs:12},r.a.createElement(b.a,{alignItems:"center",container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:8},r.a.createElement(C,{onFormSubmit:this.handleSubmit})),r.a.createElement(b.a,{item:!0,xs:4},r.a.createElement(D,{onChange:this.handleChange})))),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:8},r.a.createElement(V,{video:t})),r.a.createElement(b.a,{className:"videoCard",item:!0,xs:4},r.a.createElement(T,{videos:a,onVideoSelect:this.onVideoSelect}))))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(P,null),document.getElementById("root"))},44:function(e,t,a){},66:function(e,t,a){e.exports=a(110)}},[[66,1,2]]]);
//# sourceMappingURL=main.8b6078f2.chunk.js.map