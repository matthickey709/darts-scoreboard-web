(this["webpackJsonpdarts-scoreboard"]=this["webpackJsonpdarts-scoreboard"]||[]).push([[0],{104:function(e,t,a){(function(e){e.dartboardCork="#F9DFBC",e.dartboardRed="#E3292E",e.dartboardGreen="#309F6A",e.mainTextColor="#4b4b4b"}).call(this,a(29))},115:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var r=a(17),n=a(18),o=a(19),s=a(20),c=a(0),i=a.n(c),l=a(65),u=a(28),d=a(116),p=a(89),g=a(119),h=a(120),f=501,m=301,b=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(l.a,{basename:"/darts-scoreboard-web"},i.a.createElement(h.default,{title:"Dart Games"}),i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/",exact:!0,component:d.default}),i.a.createElement(u.a,{path:"/Classic501",render:function(e){return i.a.createElement(p.default,Object.assign({},e,{startingScore:f}))}}),i.a.createElement(u.a,{path:"/Classic301",render:function(e){return i.a.createElement(p.default,Object.assign({},e,{startingScore:m}))}}),i.a.createElement(u.a,{path:"/AroundTheWorld",component:g.default})))}}]),a}(c.Component)},116:function(e,t,a){"use strict";a.r(t);var r=a(39),n=a.n(r),o=a(71),s=a(17),c=a(18),i=a(19),l=a(20),u=a(0),d=a.n(u),p=a(127),g=a(680),h=a(2),f=a(117),m=a(87),b=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={games:m,loading:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getGames()}},{key:"getGames",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({games:m,loading:!1});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return d.a.createElement(p.a,{noSpacer:!0,noScroll:!0,style:y.container},this.state.loading?d.a.createElement(g.a,{style:[y.centering],color:"#E3292E",size:"large"}):d.a.createElement(f.default,{games:this.state.games}))}}]),a}(d.a.Component),y=h.a.create({container:{backgroundColor:"rgba(255, 255, 255, 0.4)"},centering:{alignItems:"center",justifyContent:"center",padding:8,height:"100vh"}});t.default=b},117:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(681),s=a(118);t.default=function(e){var t=e.games;return n.a.createElement(o.a,{data:t,renderItem:s.default})}},118:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(65),s=a(3),c=a(262),i=a(41),l=a(2),u=l.a.create({row:{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:15,marginBottom:5,backgroundColor:"#F9DFBC",borderBottomWidth:l.a.hairlineWidth,borderBottomColor:"rgba(0,0,0,0.1)"},rowIcon:{width:64,height:64,marginRight:20,borderRadius:"50%",boxShadow:"0 1px 2px 0 rgba(0,0,0,0.1)"},rowData:{flex:1},rowDataText:{fontSize:15,textTransform:"capitalize",color:"#4b4b4b"},rowDataSubText:{fontSize:13,opacity:.8,color:"#a8a689",marginTop:4}});t.default=function(e){var t=e.item;return n.a.createElement(o.b,{to:t.path,style:{textDecoration:"none"}},n.a.createElement(s.a,{style:u.row},n.a.createElement(c.a,{style:u.rowIcon,source:a(278)("".concat(t.icon))}),n.a.createElement(s.a,{style:u.rowData},n.a.createElement(i.a,{style:u.rowDataText},t.name),n.a.createElement(i.a,{style:u.rowDataSubText},t.description))))}},119:function(e,t,a){"use strict";a.r(t);var r=a(17),n=a(18),o=a(44),s=a(19),c=a(20),i=a(0),l=a.n(i),u=a(3),d=a(2),p=a(88),g=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={player1Status:{target:0,targetText:"0"},player2Status:{target:0,targetText:"0"}},n.increasePlayerScoreCallback=n.increasePlayerScoreCallback.bind(Object(o.a)(n)),n.decreasePlayerScoreCallback=n.decreasePlayerScoreCallback.bind(Object(o.a)(n)),n}return Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,{style:h.containerStyle},l.a.createElement(p.default,{score:this.state.player1Status.targetText,increaseScoreCallback:this.increasePlayerScoreCallback,decreaseScoreCallback:this.decreasePlayerScoreCallback,playerNumber:1}),l.a.createElement(p.default,{score:this.state.player2Status.targetText,increaseScoreCallback:this.increasePlayerScoreCallback,decreaseScoreCallback:this.decreasePlayerScoreCallback,playerNumber:2}))}},{key:"handleTargetText",value:function(e){return 21===e?"BULL":e>=22?"WINNER!!":e.toString()}},{key:"increasePlayerScoreCallback",value:function(e){var t,a;1===e?(t=this.state.player1Status.target+1,a=this.handleTargetText(t),this.setState({player1Status:{target:t,targetText:a}})):2===e&&(t=this.state.player2Status.target+1,a=this.handleTargetText(t),this.setState({player2Status:{target:t,targetText:a}}))}},{key:"decreasePlayerScoreCallback",value:function(e){var t,a;1===e?(t=this.state.player1Status.target-1>=0?this.state.player1Status.target-1:0,a=this.handleTargetText(t),this.setState({player1Status:{target:t,targetText:a}})):2===e&&(t=this.state.player2Status.target-1>=0?this.state.player2Status.target-1:0,a=this.handleTargetText(t),this.setState({player2Status:{target:t,targetText:a}}))}}]),a}(l.a.Component),h=d.a.create({containerStyle:{flexWrap:"wrap"}});t.default=g},120:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(678),s=a(3),c=a(679),i=a(262),l=a(41),u=a(2),d=a(65),p=u.a.create({headerContainer:{borderBottomWidth:u.a.hairlineWidth,borderBottomColor:"#E3292E",backgroundColor:"#E3292E"},header:{padding:10,paddingVertical:5,alignItems:"center",flexDirection:"row",minHeight:50},headerIcon:{width:24,height:24},headerCenter:{flex:1,order:2},headerLeft:{order:1},headerRight:{order:3,width:80},title:{fontSize:19,fontWeight:"600",textAlign:"center",color:"white"}});t.default=function(e){e.onBack;var t=e.title;return n.a.createElement(o.a,{style:p.headerContainer},n.a.createElement(s.a,{style:p.header},n.a.createElement(c.a,null,n.a.createElement(d.b,{to:"/"},n.a.createElement(s.a,{style:p.headerLeft},n.a.createElement(i.a,{style:p.headerIcon,source:a(206)})))),n.a.createElement(s.a,{style:p.headerCenter},n.a.createElement(l.a,{accessibilityRole:"heading","aria-level":"3",style:p.title},t))))}},121:function(e,t,a){"use strict";a.r(t),a.d(t,"register",(function(){return n})),a.d(t,"unregister",(function(){return s}));var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(e){if("serviceWorker"in navigator){if(new URL("/darts-scoreboard-web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/darts-scoreboard-web","/service-worker.js");r?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(t,e)}))}}function o(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function s(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},164:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(257),s=a(64);test("renders learn react link",(function(){var e=(0,Object(o.a)(n.a.createElement(s.default,null)).getByText)(/learn react/i);expect(e).toBeInTheDocument()}))},206:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABrUlEQVRoge3XsWoUQRjA8W8laKNRCy20MKWNWCU2iogIvkGwCVbW6fIKtpa+gSCICJZqYbAICjY2YmOjaKxEA5qQn0V29VyP3O1lb3eI83uA2e/PsjOzEdlomMMzPMWZvueZCK7gkz++4Hrfc40NBVaw5V/buI0Dfc+5K8ziwZCAusc43ve8Q+E83o0RUXmP+doaQ3UZsYSNBhGV71gaWGcZPzsPwSHcmSCg7i4OlmtexIfOQnAaL1qIqLzEXLn2CTyZeggu42OLEZV1XCufMWNnh9ueRsBuW2tbtspnFOUzF9uOOIL7Uwyoe4RjbUecxZsOIypvca6tiBv41kNEZQM39xJQfWyp+L1FN4k4aefGmppVnBo34pLagZSYz7g6KuKWIVeEBG0a2KIHAw7jXr+zTeQhjkZEVIfOWkTMR8TXiJht9EH1p5p1rSiKC9UPzmZEvI6Ihd7Gam4hIl5FxI+I8o0MosP7/x4URfHX7Gn/cjaQQ1KTQ1KTQ1Iz0+Zi9b19lDbPrH3zRnJIanJIanJIanJIanJIanJIanJIavZ1yGrnUzT3vO8Bsv/GL/0QiUrT+XKgAAAAAElFTkSuQmCC"},207:function(e,t,a){"use strict";a.r(t);var r=a(23);t.default=Object(r.b)()},208:function(e,t,a){"use strict";a.r(t);a(536)},263:function(e,t,a){e.exports=a(75)},278:function(e,t,a){var r={".":75,"./":75,"./App":64,"./App.css":279,"./App.js":64,"./App.test":167,"./App.test.js":167,"./Routes":115,"./Routes.js":115,"./data/dartGames":87,"./data/dartGames.json":87,"./data/dartboard.png":531,"./data/icons8-home-48.png":206,"./game-item":118,"./game-item.js":118,"./game-list":117,"./game-list.js":117,"./gameModes/AroundTheWorld":119,"./gameModes/AroundTheWorld.js":119,"./gameModes/ClassicGame":89,"./gameModes/ClassicGame.js":89,"./gameModes/gameComponents/AroundTheWorldInput":88,"./gameModes/gameComponents/AroundTheWorldInput.js":88,"./gameModes/gameComponents/ClassicPlayerScoreboard":90,"./gameModes/gameComponents/ClassicPlayerScoreboard.js":90,"./global":104,"./global.js":104,"./header":120,"./header.js":120,"./history":207,"./history.js":207,"./home":116,"./home.js":116,"./index":75,"./index.css":164,"./index.js":75,"./logo.svg":535,"./serviceWorker":121,"./serviceWorker.js":121,"./setupTests":208,"./setupTests.js":208};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=278},279:function(e,t,a){},531:function(e,t,a){e.exports=a.p+"static/media/dartboard.8773ac05.png"},535:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},64:function(e,t,a){"use strict";a.r(t);var r=a(17),n=a(18),o=a(19),s=a(20),c=a(0),i=a.n(c),l=a(3),u=a(2),d=a(682),p=a(115),g=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(l.a,{style:h.appContainer},i.a.createElement(p.default,null))}}]),a}(i.a.Component),h=u.a.create({appContainer:{flex:1,backgroundColor:"rgba(249, 223, 188, 0.4)"}});d.a.registerComponent("App",(function(){return g})),t.default=g},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),s=a.n(o),c=(a(164),a(64)),i=a(121);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c.default,null)),document.getElementById("root")),i.unregister()},87:function(e){e.exports=JSON.parse('[{"name":"Classic 501 Darts","description":"Classic game of darts with a starting score of 501.","icon":"./data/dartboard.png","path":"/Classic501"},{"name":"Classic 301 Darts","description":"Classic game of darts with a starting score of 301.","icon":"./data/dartboard.png","path":"/Classic301"},{"name":"Baseball","description":"Aim for the number corresponding to the current inning to score.","icon":"./data/dartboard.png","path":"/Baseball"},{"name":"Around the World","description":"Start at 1 and work your way up to bullseye.","icon":"./data/dartboard.png","path":"/AroundTheWorld"},{"name":"Cricket","description":"Honestly idk","icon":"./data/dartboard.png","path":"/Cricket"}]')},88:function(e,t,a){"use strict";a.r(t),function(e){var r=a(17),n=a(18),o=a(19),s=a(20),c=a(0),i=a.n(c),l=a(3),u=a(162),d=a(41),p=a(2),g=(a(104),function(t){Object(s.a)(c,t);var a=Object(o.a)(c);function c(){return Object(r.a)(this,c),a.apply(this,arguments)}return Object(n.a)(c,[{key:"render",value:function(){var t=this;return i.a.createElement(l.a,{style:h.column},i.a.createElement(u.a,{title:"Increase",onPress:function(){return t.props.increaseScoreCallback(t.props.playerNumber)},color:e.dartboardGreen}),i.a.createElement(d.a,{style:h.scoreDataText},this.props.score),i.a.createElement(u.a,{title:"Decrease",onPress:function(){return t.props.decreaseScoreCallback(t.props.playerNumber)},color:e.dartboardRed}))}}]),c}(i.a.Component)),h=p.a.create({column:{flexDirection:"column",justifyContent:"center",alignItems:"center",padding:50},rowData:{flex:1},scoreDataText:{fontSize:36,textTransform:"capitalize",color:e.mainTextColor,textAlign:"center"}});t.default=g}.call(this,a(29))},89:function(e,t,a){"use strict";a.r(t);var r=a(58),n=a(17),o=a(18),s=a(44),c=a(19),i=a(20),l=a(0),u=a.n(l),d=a(3),p=a(2),g=a(90),h=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={startingScore:e.startingScore,player1Status:{score:e.startingScore,legs:0,sets:0},player2Status:{score:e.startingScore,legs:0,sets:0}},r.onSubmitScoreCallback=r.onSubmitScoreCallback.bind(Object(s.a)(r)),r}return Object(o.a)(a,[{key:"render",value:function(){return u.a.createElement(d.a,{style:f.containerStyle},u.a.createElement(g.default,{playerNumber:1,legsValue:this.state.player1Status.legs,setsValue:this.state.player1Status.sets,scoreValue:this.state.player1Status.score,startScoreInput:this.onSubmitScoreCallback}),u.a.createElement(g.default,{playerNumber:2,legsValue:this.state.player2Status.legs,setsValue:this.state.player2Status.sets,scoreValue:this.state.player2Status.score,startScoreInput:this.onSubmitScoreCallback}))}},{key:"isInteger",value:function(e){return e===parseInt(e,10)}},{key:"onSubmitScoreCallback",value:function(e,t){this.updatePlayerScore(Number(e),1===t)}},{key:"updatePlayerScore",value:function(e,t){var a,n=this;if(this.isValidMove(e,t)&&(t?((a=Object(r.a)({},this.state.player1Status)).score=a.score-e,this.setState({player1Status:a})):((a=Object(r.a)({},this.state.player2Status)).score=a.score-e,this.setState({player2Status:a})),0===a.score)){var o=Object(r.a)({},this.state.player1Status),s=Object(r.a)({},this.state.player2Status);o.score=this.state.startingScore,s.score=this.state.startingScore,this.setState({player1Status:o,player2Status:s},(function(){return n.updateLegsAndSets(t)}))}}},{key:"isValidMove",value:function(e,t){if(e>180||e<0||!Number.isInteger(e))return!1;if(t){if(this.state.player1Status.score-e<0)return!1}else if(this.state.player2Status.score-e<0)return!1;return!0}},{key:"updateLegsAndSets",value:function(e){var t=this,a=Object(r.a)({},this.state.player1Status),n=Object(r.a)({},this.state.player2Status);e?2===a.legs?(a.sets+=1,a.legs=0,n.legs=0,this.setState({player1Status:a,playerTwoStatus:n})):(a.legs+=1,console.log("setting state to:",a),this.setState({player1Status:a},(function(){return console.log("11111",t.state)}))):2===n.legs?(a.legs=0,n.legs=0,n.sets+=1,this.setState({player1Status:a,player2Status:n})):(n.legs+=1,this.setState({player2Status:n}))}}]),a}(u.a.Component),f=p.a.create({containerStyle:{flexDirection:"column",flexWrap:"wrap"},scoreItemStyle:{height:100,width:"50%"}});t.default=h},90:function(e,t,a){"use strict";a.r(t),function(e){var r=a(17),n=a(18),o=a(44),s=a(19),c=a(20),i=a(0),l=a.n(i),u=a(3),d=a(41),p=a(677),g=a(162),h=a(2),f=a(72),m=(a(104),function(t){Object(c.a)(i,t);var a=Object(s.a)(i);function i(e){var t;return Object(r.a)(this,i),(t=a.call(this,e)).state={playerNumber:e.playerNumber,enteredScore:""},t.submitAndClear=t.submitAndClear.bind(Object(o.a)(t)),t}return Object(n.a)(i,[{key:"submitAndClear",value:function(){this.props.startScoreInput(this.state.enteredScore,this.state.playerNumber),this.setState({enteredScore:""})}},{key:"render",value:function(){var t=this;return l.a.createElement(u.a,{styles:b.column},l.a.createElement(u.a,{style:b.row},l.a.createElement(d.a,{style:b.playerDataText},"Player ",this.state.playerNumber),l.a.createElement(d.a,{style:b.setsLegsDataText},this.props.legsValue),l.a.createElement(d.a,{style:b.setsLegsDataText},this.props.setsValue),l.a.createElement(d.a,{style:b.scoreDataText},this.props.scoreValue)),l.a.createElement(u.a,{styles:b.row},l.a.createElement(p.a,{keyboardType:"number-pad",style:b.input,value:this.state.enteredScore,placeholder:"Enter round score...",onChangeText:function(e){return t.setState({enteredScore:e})}}),l.a.createElement(g.a,{title:"Submit",color:e.dartboardGreen,onPress:function(){return t.submitAndClear()}})))}}]),i}(l.a.Component)),b=h.a.create({row:{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:50},column:{flexDirection:"column",justifyContent:"center",alignItems:"center",padding:50},rowData:{flex:1},scoreDataText:{fontSize:36,textTransform:"capitalize",color:"white",textAlign:"center",backgroundColor:e.dartboardRed,padding:5,borderColor:e.mainTextColor,borderWidth:"1px"},setsLegsDataText:{fontSize:36,textTransform:"capitalize",color:"white",textAlign:"center",backgroundColor:e.dartboardGreen,padding:5,borderColor:e.mainTextColor,borderWidth:"1px"},playerDataText:{fontSize:36,textTransform:"capitalize",color:e.mainTextColor,textAlign:"center",backgroundColor:e.dartboardCork,padding:20},input:{flex:1,borderWidth:1,borderColor:e.dartboardGreen,fontSize:36,color:e.mainTextColor,textTransform:"capitalize",textAlign:"center",width:f.a.get("window").width}});t.default=m}.call(this,a(29))}},[[263,1,2]]]);
//# sourceMappingURL=main.43d7bb2f.chunk.js.map