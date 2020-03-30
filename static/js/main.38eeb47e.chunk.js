(this["webpackJsonpdarts-scoreboard"]=this["webpackJsonpdarts-scoreboard"]||[]).push([[0],{103:function(e,t,a){(function(e){e.dartboardCork="#F9DFBC",e.dartboardRed="#E3292E",e.dartboardGreen="#309F6A",e.mainTextColor="#4b4b4b"}).call(this,a(29))},114:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var r=a(17),n=a(18),o=a(19),s=a(20),i=a(0),c=a.n(i),l=a(63),u=a(28),d=a(115),p=a(87),h=a(118),g=a(119),f=501,m=301,y=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement(l.a,{basename:"/darts-scoreboard-web"},c.a.createElement(g.default,{title:"Dart Games"}),c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0,component:d.default}),c.a.createElement(u.a,{path:"/Classic501",render:function(e){return c.a.createElement(p.default,Object.assign({},e,{startingScore:f}))}}),c.a.createElement(u.a,{path:"/Classic301",render:function(e){return c.a.createElement(p.default,Object.assign({},e,{startingScore:m}))}}),c.a.createElement(u.a,{path:"/AroundTheWorld",component:h.default})))}}]),a}(i.Component)},115:function(e,t,a){"use strict";a.r(t);var r=a(39),n=a.n(r),o=a(69),s=a(17),i=a(18),c=a(19),l=a(20),u=a(0),d=a.n(u),p=a(126),h=a(679),g=a(2),f=a(116),m=a(85),y=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={games:m,loading:!0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getGames()}},{key:"getGames",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({games:m,loading:!1});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return d.a.createElement(p.a,{noSpacer:!0,noScroll:!0,style:b.container},this.state.loading?d.a.createElement(h.a,{style:[b.centering],color:"#E3292E",size:"large"}):d.a.createElement(f.default,{games:this.state.games}))}}]),a}(d.a.Component),b=g.a.create({container:{backgroundColor:"rgba(255, 255, 255, 0.4)"},centering:{alignItems:"center",justifyContent:"center",padding:8,height:"100vh"}});t.default=y},116:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(680),s=a(117);t.default=function(e){var t=e.games;return n.a.createElement(o.a,{data:t,renderItem:s.default})}},117:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(63),s=a(3),i=a(261),c=a(41),l=a(2),u=l.a.create({row:{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:15,marginBottom:5,backgroundColor:"#F9DFBC",borderBottomWidth:l.a.hairlineWidth,borderBottomColor:"rgba(0,0,0,0.1)"},rowIcon:{width:64,height:64,marginRight:20,borderRadius:"50%",boxShadow:"0 1px 2px 0 rgba(0,0,0,0.1)"},rowData:{flex:1},rowDataText:{fontSize:15,textTransform:"capitalize",color:"#4b4b4b"},rowDataSubText:{fontSize:13,opacity:.8,color:"#a8a689",marginTop:4}});t.default=function(e){var t=e.item;return n.a.createElement(o.b,{to:t.path,style:{textDecoration:"none"}},n.a.createElement(s.a,{style:u.row},n.a.createElement(i.a,{style:u.rowIcon,source:a(277)("".concat(t.icon))}),n.a.createElement(s.a,{style:u.rowData},n.a.createElement(c.a,{style:u.rowDataText},t.name),n.a.createElement(c.a,{style:u.rowDataSubText},t.description))))}},118:function(e,t,a){"use strict";a.r(t);var r=a(17),n=a(18),o=a(89),s=a(19),i=a(20),c=a(0),l=a.n(c),u=a(3),d=a(2),p=a(86),h=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={player1Status:{target:0,targetText:"0"},player2Status:{target:0,targetText:"0"}},n.increasePlayerScoreCallback=n.increasePlayerScoreCallback.bind(Object(o.a)(n)),n.decreasePlayerScoreCallback=n.decreasePlayerScoreCallback.bind(Object(o.a)(n)),n}return Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,{style:g.containerStyle},l.a.createElement(p.default,{score:this.state.player1Status.targetText,increaseScoreCallback:this.increasePlayerScoreCallback,decreaseScoreCallback:this.decreasePlayerScoreCallback,playerNumber:1}),l.a.createElement(p.default,{score:this.state.player2Status.targetText,increaseScoreCallback:this.increasePlayerScoreCallback,decreaseScoreCallback:this.decreasePlayerScoreCallback,playerNumber:2}))}},{key:"handleTargetText",value:function(e){return 21===e?"BULL":e>=22?"WINNER!!":e.toString()}},{key:"increasePlayerScoreCallback",value:function(e){var t,a;1===e?(t=this.state.player1Status.target+1,a=this.handleTargetText(t),this.setState({player1Status:{target:t,targetText:a}})):2===e&&(t=this.state.player2Status.target+1,a=this.handleTargetText(t),this.setState({player2Status:{target:t,targetText:a}}))}},{key:"decreasePlayerScoreCallback",value:function(e){var t,a;1===e?(t=this.state.player1Status.target-1>=0?this.state.player1Status.target-1:0,a=this.handleTargetText(t),this.setState({player1Status:{target:t,targetText:a}})):2===e&&(t=this.state.player2Status.target-1>=0?this.state.player2Status.target-1:0,a=this.handleTargetText(t),this.setState({player2Status:{target:t,targetText:a}}))}}]),a}(l.a.Component),g=d.a.create({containerStyle:{flexWrap:"wrap"}});t.default=h},119:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(677),s=a(3),i=a(678),c=a(261),l=a(41),u=a(2),d=a(63),p=u.a.create({headerContainer:{borderBottomWidth:u.a.hairlineWidth,borderBottomColor:"#E3292E",backgroundColor:"#E3292E"},header:{padding:10,paddingVertical:5,alignItems:"center",flexDirection:"row",minHeight:50},headerIcon:{width:24,height:24},headerCenter:{flex:1,order:2},headerLeft:{order:1},headerRight:{order:3,width:80},title:{fontSize:19,fontWeight:"600",textAlign:"center",color:"white"}});t.default=function(e){e.onBack;var t=e.title;return n.a.createElement(o.a,{style:p.headerContainer},n.a.createElement(s.a,{style:p.header},n.a.createElement(i.a,null,n.a.createElement(d.b,{to:"/"},n.a.createElement(s.a,{style:p.headerLeft},n.a.createElement(c.a,{style:p.headerIcon,source:a(205)})))),n.a.createElement(s.a,{style:p.headerCenter},n.a.createElement(l.a,{accessibilityRole:"heading","aria-level":"3",style:p.title},t))))}},120:function(e,t,a){"use strict";a.r(t),a.d(t,"register",(function(){return n})),a.d(t,"unregister",(function(){return s}));var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(e){if("serviceWorker"in navigator){if(new URL("/%7Bdarts-scoreboard-web%7D",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/%7Bdarts-scoreboard-web%7D","/service-worker.js");r?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(t,e)}))}}function o(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function s(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},163:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(256),s=a(62);test("renders learn react link",(function(){var e=(0,Object(o.a)(n.a.createElement(s.default,null)).getByText)(/learn react/i);expect(e).toBeInTheDocument()}))},205:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABrUlEQVRoge3XsWoUQRjA8W8laKNRCy20MKWNWCU2iogIvkGwCVbW6fIKtpa+gSCICJZqYbAICjY2YmOjaKxEA5qQn0V29VyP3O1lb3eI83uA2e/PsjOzEdlomMMzPMWZvueZCK7gkz++4Hrfc40NBVaw5V/buI0Dfc+5K8ziwZCAusc43ve8Q+E83o0RUXmP+doaQ3UZsYSNBhGV71gaWGcZPzsPwSHcmSCg7i4OlmtexIfOQnAaL1qIqLzEXLn2CTyZeggu42OLEZV1XCufMWNnh9ueRsBuW2tbtspnFOUzF9uOOIL7Uwyoe4RjbUecxZsOIypvca6tiBv41kNEZQM39xJQfWyp+L1FN4k4aefGmppVnBo34pLagZSYz7g6KuKWIVeEBG0a2KIHAw7jXr+zTeQhjkZEVIfOWkTMR8TXiJht9EH1p5p1rSiKC9UPzmZEvI6Ihd7Gam4hIl5FxI+I8o0MosP7/x4URfHX7Gn/cjaQQ1KTQ1KTQ1Iz0+Zi9b19lDbPrH3zRnJIanJIanJIanJIanJIanJIanJIavZ1yGrnUzT3vO8Bsv/GL/0QiUrT+XKgAAAAAElFTkSuQmCC"},206:function(e,t,a){"use strict";a.r(t);var r=a(23);t.default=Object(r.b)()},207:function(e,t,a){"use strict";a.r(t);a(535)},262:function(e,t,a){e.exports=a(73)},277:function(e,t,a){var r={".":73,"./":73,"./App":62,"./App.css":278,"./App.js":62,"./App.test":166,"./App.test.js":166,"./Routes":114,"./Routes.js":114,"./data/dartGames":85,"./data/dartGames.json":85,"./data/dartboard.png":530,"./data/icons8-home-48.png":205,"./game-item":117,"./game-item.js":117,"./game-list":116,"./game-list.js":116,"./gameModes/AroundTheWorld":118,"./gameModes/AroundTheWorld.js":118,"./gameModes/ClassicGame":87,"./gameModes/ClassicGame.js":87,"./gameModes/gameComponents/AroundTheWorldInput":86,"./gameModes/gameComponents/AroundTheWorldInput.js":86,"./gameModes/gameComponents/ClassicPlayerScoreboard":88,"./gameModes/gameComponents/ClassicPlayerScoreboard.js":88,"./global":103,"./global.js":103,"./header":119,"./header.js":119,"./history":206,"./history.js":206,"./home":115,"./home.js":115,"./index":73,"./index.css":163,"./index.js":73,"./logo.svg":534,"./serviceWorker":120,"./serviceWorker.js":120,"./setupTests":207,"./setupTests.js":207};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=277},278:function(e,t,a){},530:function(e,t,a){e.exports=a.p+"static/media/dartboard.8773ac05.png"},534:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},62:function(e,t,a){"use strict";a.r(t);var r=a(17),n=a(18),o=a(19),s=a(20),i=a(0),c=a.n(i),l=a(3),u=a(2),d=a(681),p=a(114),h=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement(l.a,{style:g.appContainer},c.a.createElement(p.default,null))}}]),a}(c.a.Component),g=u.a.create({appContainer:{flex:1,backgroundColor:"rgba(249, 223, 188, 0.4)"}});d.a.registerComponent("App",(function(){return h})),t.default=h},73:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),s=a.n(o),i=(a(163),a(62)),c=a(120);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.default,null)),document.getElementById("root")),c.unregister()},85:function(e){e.exports=JSON.parse('[{"name":"Classic 501 Darts","description":"Classic game of darts with a starting score of 501.","icon":"./data/dartboard.png","path":"/Classic501"},{"name":"Classic 301 Darts","description":"Classic game of darts with a starting score of 301.","icon":"./data/dartboard.png","path":"/Classic301"},{"name":"Baseball","description":"Aim for the number corresponding to the current inning to score.","icon":"./data/dartboard.png","path":"/Baseball"},{"name":"Around the World","description":"Start at 1 and work your way up to bullseye.","icon":"./data/dartboard.png","path":"/AroundTheWorld"},{"name":"Cricket","description":"Honestly idk","icon":"./data/dartboard.png","path":"/Cricket"}]')},86:function(e,t,a){"use strict";a.r(t),function(e){var r=a(17),n=a(18),o=a(19),s=a(20),i=a(0),c=a.n(i),l=a(3),u=a(161),d=a(41),p=a(2),h=(a(103),function(t){Object(s.a)(i,t);var a=Object(o.a)(i);function i(){return Object(r.a)(this,i),a.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){var t=this;return c.a.createElement(l.a,{style:g.row},c.a.createElement(u.a,{title:"Increase",onPress:function(){return t.props.increaseScoreCallback(t.props.playerNumber)},color:e.dartboardGreen}),c.a.createElement(d.a,{style:g.scoreDataText},this.props.score),c.a.createElement(u.a,{title:"Decrease",onPress:function(){return t.props.decreaseScoreCallback(t.props.playerNumber)},color:e.dartboardRed}))}}]),i}(c.a.Component)),g=p.a.create({row:{flexDirection:"column",justifyContent:"center",alignItems:"center",padding:50},rowData:{flex:1},scoreDataText:{fontSize:36,textTransform:"capitalize",color:e.mainTextColor,textAlign:"center"}});t.default=h}.call(this,a(29))},87:function(e,t,a){"use strict";a.r(t);var r=a(17),n=a(18),o=a(19),s=a(20),i=a(0),c=a.n(i),l=a(3),u=a(2),d=a(88),p=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={startingScore:999,player1Status:{score:999,legs:0,sets:0},player2Status:{score:999,legs:0,sets:0}},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.setState({startingScore:this.props.startingScore,player1Status:{score:this.props.startingScore,legs:0,sets:0},player2Status:{score:this.props.startingScore,legs:0,sets:0}})}},{key:"render",value:function(){return c.a.createElement(l.a,{style:h.containerStyle},c.a.createElement(d.default,{playerNumber:1,legsValue:this.state.player1Status.legs,setsValue:this.state.player1Status.sets,scoreValue:this.state.player1Status.score,startScoreInput:this.showInputModalCallback}),c.a.createElement(d.default,{playerNumber:2,legsValue:this.state.player2Status.legs,setsValue:this.state.player2Status.sets,scoreValue:this.state.player2Status.score,startScoreInput:this.showInputModalCallback}))}},{key:"showInputModalCallback",value:function(e){}},{key:"updatePlayerScore",value:function(e,t){var a;this.isValidMove(e,t)&&(t?(this.setState({player1Status:{score:this.state.player1Status.score-e}}),a=this.state.player1Status.score):(this.setState({player2Status:{score:this.state.player2Status.score-e}}),a=this.state.player1Status.score)),0===a&&(this.updateLegsAndSets(t),this.setState({player1Status:{score:this.state.startingScore}}),this.setState({player2Status:{score:this.state.startingScore}}))}},{key:"isValidMove",value:function(e,t){if(e>180)return!1;if(t){if(this.state.player1Status.score-e<0)return!1}else if(this.state.player2Status.score-e<0)return!1;return!0}},{key:"updateLegsAndSets",value:function(e){var t;e?(t=this.state.player1Status.sets,2===this.state.player1Status.legs?this.setState({player1Status:{sets:t+1,legs:0},player2Status:{legs:0}}):this.setState({player1Status:{legs:t+1}})):(t=this.state.player2Status.sets,2===this.state.player2Status.legs?this.setState({player1Status:{legs:0},player2Status:{sets:t+1,legs:0}}):this.setState({player2Status:{legs:t+1}}))}}]),a}(c.a.Component),h=u.a.create({containerStyle:{flexDirection:"column",flexWrap:"wrap"},scoreItemStyle:{height:100,width:"50%"}});t.default=p},88:function(e,t,a){"use strict";a.r(t),function(e){var r=a(17),n=a(18),o=a(19),s=a(20),i=a(0),c=a.n(i),l=a(3),u=a(41),d=a(676),p=a(161),h=a(2),g=a(70),f=(a(103),function(t){Object(s.a)(i,t);var a=Object(o.a)(i);function i(e){var t;return Object(r.a)(this,i),(t=a.call(this,e)).state={playerNumber:e.playerNumber},t}return Object(n.a)(i,[{key:"render",value:function(){return c.a.createElement(l.a,{styles:m.column},c.a.createElement(l.a,{style:m.row},c.a.createElement(u.a,{style:m.playerDataText},"Player ",this.state.playerNumber),c.a.createElement(u.a,{style:m.setsLegsDataText},this.props.legsValue),c.a.createElement(u.a,{style:m.setsLegsDataText},this.props.setsValue),c.a.createElement(u.a,{style:m.scoreDataText},this.props.scoreValue)),c.a.createElement(l.a,{styles:m.row},c.a.createElement(d.a,{keyboardType:"number-pad",style:m.input,placeholder:"Enter round score..."}),c.a.createElement(p.a,{title:"Submit",color:e.dartboardGreen})))}}]),i}(c.a.Component)),m=h.a.create({row:{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:50},column:{flexDirection:"column",justifyContent:"center",alignItems:"center",padding:50},rowData:{flex:1},scoreDataText:{fontSize:36,textTransform:"capitalize",color:"white",textAlign:"center",backgroundColor:e.dartboardRed,padding:5,borderColor:e.mainTextColor,borderWidth:"1px"},setsLegsDataText:{fontSize:36,textTransform:"capitalize",color:"white",textAlign:"center",backgroundColor:e.dartboardGreen,padding:5,borderColor:e.mainTextColor,borderWidth:"1px"},playerDataText:{fontSize:36,textTransform:"capitalize",color:e.mainTextColor,textAlign:"center",backgroundColor:e.dartboardCork},input:{flex:1,borderWidth:1,borderColor:e.dartboardGreen,fontSize:36,color:e.mainTextColor,textTransform:"capitalize",textAlign:"center",width:g.a.get("window").width}});t.default=f}.call(this,a(29))}},[[262,1,2]]]);
//# sourceMappingURL=main.38eeb47e.chunk.js.map