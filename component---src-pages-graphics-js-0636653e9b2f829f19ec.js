(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/7gK":function(e,t,n){e.exports=n.p+"static/beanjuice-79c7e2364750c98d74ae973e50c86d5b.jpg"},"4dyN":function(e,t,n){e.exports=n.p+"static/travelwriterad2-603ee5be0f1ac7c532ed4de074635fae.jpg"},DMqW:function(e,t,n){e.exports=n.p+"static/firefly-640bc5689de997728041dd29780f2580.jpg"},GlxY:function(e,t,n){e.exports=n.p+"static/rolatydog-0004de37c121b953040feedaf66d39dd.jpg"},"IO/Z":function(e,t,n){e.exports=n.p+"static/travel_logo-3be47cc68351dce1d11827b9feaff2d4.jpg"},"Qb/A":function(e,t,n){"use strict";var i=n("JX7q"),a=n("dI71"),o=n("q1tI"),r=n.n(o),c=function(e){function t(){var t;return(t=e.call(this)||this).state={backgroundImageSize:0,opacity:0},t.changeSize=t.changeSize.bind(Object(i.a)(t)),t.toggleOn=t.toggleOn.bind(Object(i.a)(t)),t.toggleOff=t.toggleOff.bind(Object(i.a)(t)),t}Object(a.a)(t,e);var n=t.prototype;return n.changeSize=function(){this.setState({backgroundImageSize:window.innerWidth>1200?25:window.innerWidth>960?33.33:window.innerWidth>768?50:100})},n.toggleOn=function(){this.setState({opacity:.97})},n.toggleOff=function(){this.setState({opacity:0})},n.componentDidMount=function(){window.addEventListener("resize",this.changeSize),this.changeSize()},n.componentWillUnmount=function(){window.removeEventListener("resize",this.changeSize)},n.render=function(){var e={box1:{width:this.state.backgroundImageSize+"%",height:this.state.backgroundImageSize+"vw",margin:"0",backgroundImage:"url("+this.props.image+")",backgroundPosition:"center",backgroundSize:"102%",cursor:"pointer"},box2:{width:"100%",height:"100%",opacity:this.state.opacity,transition:"opacity 0.33s",backgroundColor:"#151035"},title:{textAlign:"center",margin:"0",color:"white",padding:"32px 0 0 0",fontSize:"24px"}};return r.a.createElement("div",{style:Object.assign({},e.box1),onMouseOver:this.toggleOn,onMouseLeave:this.toggleOff},r.a.createElement("div",{style:Object.assign({},e.box2)},r.a.createElement("h5",{style:Object.assign({},e.title)},this.props.title),this.props.children))},t}(r.a.Component);t.a=c},Xyv5:function(e,t,n){"use strict";n.r(t);var i=n("JX7q"),a=n("dI71"),o=n("q1tI"),r=n.n(o),c=n("6us9"),s=n("fItr"),l=n("PJDU"),d=n("rxcZ"),p=n("cWx6"),h=n("Qb/A"),u=n("wHmj"),g=n.n(u),f=n("ie5n"),m=n.n(f),b=n("4dyN"),v=n.n(b),w=n("dTs6"),x=n.n(w),y=n("e1gE"),E=n.n(y),j=n("/7gK"),O=n.n(j),C=n("vhNQ"),S=n.n(C),k=n("DMqW"),z=n.n(k),P=n("wso4"),I=n.n(P),W=n("arDj"),M=n.n(W),D=n("GlxY"),q=n.n(D),L=n("IO/Z"),J=n.n(L),A={main:{margin:"48px 0 0 0"}},B=function(e){function t(){var t;return(t=e.call(this)||this).state={height:0},t.updatePortfolioContainer=t.updatePortfolioContainer.bind(Object(i.a)(t)),t}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.updatePortfolioContainer),this.updatePortfolioContainer()},n.updatePortfolioContainer=function(){"undefined"!=typeof window&&this.setState({height:window.innerWidth>1200?25:window.innerWidth>960?33.33:window.innerWidth>768?50:100})},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updatePortfolioContainer)},n.render=function(){var e={height:3*this.state.height+"vw",overflow:"hidden"};return r.a.createElement("div",null,r.a.createElement(l.a,{title:"Graphic Design Portfolio",desc:"I know how to use Photoshop CC and Illustrator CC from my graphic design"}),r.a.createElement(c.a,null),r.a.createElement("main",{style:A.main},r.a.createElement(d.a,{header:"Graphic Design Portfolio"},r.a.createElement(p.a,{css:e},r.a.createElement(h.a,{image:g.a,title:"Conspiracy Cruises"}),r.a.createElement(h.a,{image:x.a,title:"Summer Water"}),r.a.createElement(h.a,{image:m.a,title:"Straw Buried"}),r.a.createElement(h.a,{image:v.a,title:"Travel Writers"}),r.a.createElement(h.a,{image:I.a,title:"My Planes Logo"}),r.a.createElement(h.a,{image:O.a,title:"Bean Juice"}),r.a.createElement(h.a,{image:M.a,title:"Summer Pineapple"}),r.a.createElement(h.a,{image:S.a,title:"Hall-Dale Bulldog"}),r.a.createElement(h.a,{image:z.a,title:"Firefly Festival"}),r.a.createElement(h.a,{image:J.a,title:"Travel Writers"}),r.a.createElement(h.a,{image:E.a,title:"Bean Can"}),r.a.createElement(h.a,{image:q.a,title:"Royal Labrendar"})))),r.a.createElement(s.a,null))},t}(r.a.Component);t.default=B},arDj:function(e,t,n){e.exports=n.p+"static/pineapple-cbb5053d7238a5fb2b7b733ab4d06711.jpg"},cWx6:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("q1tI"),a=n.n(i);function o(e){var t={flex:{display:"flex",flexWrap:"wrap",justifyContent:void 0!==e.css&&e.css.justifyContent?e.css.justifyContent:"space-around"}};return a.a.createElement("div",{style:Object.assign({},e.css,t.flex)},e.children)}},dTs6:function(e,t,n){e.exports=n.p+"static/watermelon-c3e798636c7073593e9df4356d09c92c.jpg"},e1gE:function(e,t,n){e.exports=n.p+"static/beancan-09d9067b094e691dc851a0c5c8d0fd27.jpg"},ie5n:function(e,t,n){e.exports=n.p+"static/strawburiedad1-6a453664d5bb1968779b7be375089875.jpg"},rxcZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("q1tI"),a=n.n(i),o=n("JX7q"),r=n("dI71"),c=n("Wbzz"),s=function(e){function t(){var t;return(t=e.call(this)||this).state={hovering:!1,isPhone:!1},t.hover=t.hover.bind(Object(o.a)(t)),t.leave=t.leave.bind(Object(o.a)(t)),t.phoneCheck=t.phoneCheck.bind(Object(o.a)(t)),t}Object(r.a)(t,e);var n=t.prototype;return n.hover=function(){this.setState({hovering:!0})},n.leave=function(){this.setState({hovering:!1})},n.phoneCheck=function(){this.setState({isPhone:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)})},n.componentDidMount=function(){this.phoneCheck()},n.render=function(){var e={container:{width:"210px",height:"60px"},a:{width:"210px",height:"60px"},button:{width:"200px",height:"60px",backgroundColor:"rgba(0,0,0,0)",color:this.state.hovering||this.state.isPhone?"white":"#151035",border:"0",transition:"color 0.5s",cursor:"pointer",fontSize:"18px",fontFamily:'"Nunito", sans-serif'},circle:{width:this.state.hovering||this.state.isPhone?"230px":"60px",height:"60px",backgroundColor:"#20135c",borderRadius:"70px",position:"relative",bottom:"60px",left:"-30px",transition:"left 0.5s, width 0.5s",zIndex:"-1"}};return null!=this.props.title?a.a.createElement("div",{style:e.container},a.a.createElement(c.a,{style:e.a,to:this.props.link},a.a.createElement("button",{style:e.button,onMouseOver:this.hover,onMouseLeave:this.leave},this.props.title),a.a.createElement("div",{style:e.circle}))):a.a.createElement("div",null)},t}(a.a.Component),l={header:{color:"#20135c",fontSize:"48px",textAlign:"center",margin:"0 0 24px 0",padding:"64px 0 0 0",letterSpacing:"2px",fontWeight:"700"},section:{margin:"24px 0 0 0"}};function d(e){return a.a.createElement("div",null,a.a.createElement("section",{style:l.section},a.a.createElement("h4",{style:Object.assign({},l.header,e.css)},e.header),e.children,a.a.createElement(s,{title:e.actionName,link:e.link})))}},vhNQ:function(e,t,n){e.exports=n.p+"static/bulldog_logo-e10b6e9fb1945cbfafc291e738306425.jpg"},wHmj:function(e,t,n){e.exports=n.p+"static/conspiracy-0a71544fe521b5ce82ef7cbed64067f1.jpg"},wso4:function(e,t,n){e.exports=n.p+"static/myPlane_logo-962058b0d140cb2bb6f675346c580a2b.jpg"}}]);
//# sourceMappingURL=component---src-pages-graphics-js-0636653e9b2f829f19ec.js.map