(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{75:function(e,a,t){"use strict";t.d(a,"a",(function(){return X}));var r=t(15),n=t.n(r),o=t(0),l=t.n(o),c=t(79),d=t(43),s=Object(o.createContext)(),i=Object(o.createContext)(),u="UPDATE_THEME",g={theme:"dark"},k=function(e,a){switch(a.type){case u:return{theme:a.payload};default:return e}};function b(e){var a=e.children,t=Object(o.useReducer)(k,g),r=n()(t,2),c=r[0],d=r[1];return l.a.createElement(i.Provider,{value:c},l.a.createElement(s.Provider,{value:d},a))}var h=t(16),y=t.n(h),m=t(2),f=t(71),p=t(77),w=t(3),C=t(14),x=t(36),v={dark:{background:{primary:"hsl(222, 26%, 31%)",secondary:"hsl(223, 31%, 20%)",screen:"hsl(224, 36%, 15%)"},keys:{primaryBackground:"hsl(30, 25%, 89%)",primaryShadow:"hsl(28, 16%, 65%)",secondaryBackground:"hsl(225, 21%, 49%)",secondaryShadow:"hsl(224, 28%, 35%)",accentBackground:"hsl(6, 63%, 50%)",accentShadow:"hsl(6, 70%, 34%)"},text:{dark:"hsl(221, 14%, 31%)",light:"hsl(0, 0%, 100%)"}},light:{background:{primary:"hsl(0, 0%, 90%)",secondary:"hsl(0, 5%, 81%)",screen:"hsl(0, 0%, 93%)"},keys:{primaryBackground:"hsl(45, 7%, 89%)",primaryShadow:"hsl(35, 11%, 61%)",secondaryBackground:"hsl(185, 42%, 37%)",secondaryShadow:"hsl(185, 58%, 25%)",accentBackground:"hsl(25, 98%, 40%)",accentShadow:"hsl(25, 99%, 27%)"},text:{dark:"hsl(60, 10%, 19%)",light:"hsl(0, 0%, 100%)"}},contrast:{background:{primary:"hsl(268, 75%, 9%)",secondary:"hsl(268, 71%, 12%)",screen:"hsl(268, 71%, 12%)"},keys:{primaryBackground:"hsl(268, 47%, 21%)",primaryShadow:"hsl(290, 70%, 36%)",secondaryBackground:"hsl(281, 89%, 26%)",secondaryShadow:"hsl(285, 91%, 52%)",accentBackground:"hsl(176, 100%, 44%)",accentShadow:"hsl(177, 92%, 70%)"},text:{accent:"hsl(52, 100%, 62%)",dark:"hsl(198, 20%, 13%)",light:"hsl(0, 0%, 100%)"}}};function B(){var e=Object(o.useContext)(i).theme,a=Object(o.useContext)(s),t=["dark","light","contrast"],r=Object(o.useState)(1),c=n()(r,2),d=c[0],g=c[1],k=[O.toggleBackground,O[e+"Position"],O[e+"ToggleBackground"]],b=t.map((function(a,t){return l.a.createElement(C.a,{key:a+" - "+t,style:[O.label,O.themeLabel,O[e+"LabelColor"]]},t+1)}));return l.a.createElement(w.a,{style:O.container},l.a.createElement(C.a,{style:[O.label,O[e+"LabelColor"]]},"THEME"),l.a.createElement(x.a,{android_disableSound:!0,style:O.selector,onPress:function(){var r=t.indexOf(e);if(-1!==r){var n,o=r;(o+=d)===t.length-1?g(-1):0===o&&g(1),a((n=t[o],{type:u,payload:n}))}}},l.a.createElement(w.a,{style:O.themeLabels},b),l.a.createElement(w.a,{style:k},l.a.createElement(w.a,{style:[O.thumb,O[e+"Thumb"]]}))))}var O=m.a.create({container:{display:"flex",flexDirection:"row",alignItems:"flex-end"},selector:{display:"flex",flexDirection:"column"},themeLabels:{display:"flex",flexDirection:"row",justifyContent:"space-between"},label:{fontFamily:"Spartan_700Bold",fontSize:12,padding:6},darkLabelColor:{color:v.dark.text.light},lightLabelColor:{color:v.light.text.dark},contrastLabelColor:{color:v.contrast.text.accent},themeLabel:{width:28,textAlign:"center"},toggleBackground:{padding:6,borderRadius:22,display:"flex",flexDirection:"row"},darkToggleBackground:{backgroundColor:v.dark.background.secondary},lightToggleBackground:{backgroundColor:v.light.background.secondary},contrastToggleBackground:{backgroundColor:v.contrast.background.secondary},thumb:{width:16,height:16,borderRadius:16},darkThumb:{backgroundColor:v.dark.keys.accentBackground},lightThumb:{backgroundColor:v.light.keys.accentBackground},contrastThumb:{backgroundColor:v.contrast.keys.accentBackground},darkPosition:{justifyContent:"flex-start"},lightPosition:{justifyContent:"center"},contrastPosition:{justifyContent:"flex-end"}});function E(){var e=Object(o.useContext)(i).theme;return l.a.createElement(w.a,{style:S.headerContainer},l.a.createElement(C.a,{style:[S.title,S[e+"Title"]]},"calc"),l.a.createElement(B,null))}var S=m.a.create({headerContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",marginBottom:24},title:{fontFamily:"Spartan_700Bold",fontSize:32},darkTitle:{color:v.dark.text.light},lightTitle:{color:v.light.text.dark},contrastTitle:{color:v.contrast.text.accent}}),j=t(76),D=t(78),P=t(70),L=t.n(P);function T(e){var a=e.value,t=Object(o.useContext)(i).theme,r=L()(a).format({thousandSeparated:!0});return l.a.createElement(C.a,{style:[F.displayText,F[t]]},r)}var F=m.a.create({displayText:{padding:24,marginBottom:24,fontFamily:"Spartan_700Bold",fontSize:32,textAlign:"right",borderRadius:12},dark:{backgroundColor:v.dark.background.screen,color:v.dark.text.light},light:{backgroundColor:v.light.background.screen,color:v.light.text.dark},contrast:{backgroundColor:v.contrast.background.screen,color:v.contrast.text.accent}}),R=t(10),A=t.n(R),_=t(4);function I(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function K(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?I(Object(t),!0).forEach((function(a){y()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function z(e){var a=e.label,t=e.lastInLine,r=e.variant,n=Object(o.useContext)(i).theme,c=[M.background],d=[M.container],s=[M.label];t&&d.push(M.noRightMargin);var u=function(e){switch(e){case"eq":return{key:[M.doubleKey,M[n+"Accent"]],background:[M[n+"AccentBackground"]],label:[M[n+"AccentLabel"]]};case"fnDouble":return{key:[M.doubleKey,M[n+"Function"]],background:[M[n+"FunctionBackground"]],label:[M.smallerText,M[n+"FunctionLabel"]]};case"fn":return{key:[M[n+"Function"]],background:[M[n+"FunctionBackground"]],label:[M.smallerText,M[n+"FunctionLabel"]]};case"dot":case"op":case"num":default:return{key:[M[n+"Default"]],background:[M[n+"DefaultBackground"]],label:[M[n+"DefaultLabel"]]}}}(r),g=u.background,k=u.key,b=u.label;d=_.a.select({web:[].concat(A()(d),A()(k),A()(g)),default:[].concat(A()(d),A()(k))}),c=[].concat(A()(c),A()(g)),s=[].concat(A()(s),A()(b));var h=_.a.select({web:l.a.createElement(C.a,{style:s},a),default:l.a.createElement(w.a,{style:c},l.a.createElement(C.a,{style:s},a))});return l.a.createElement(x.a,{android_disableSound:!0,style:d,onPress:function(){return console.log(a+" key pressed")}},h)}var M=m.a.create({container:K(K({},_.a.select({web:{width:"calc(25% - 18px)",display:"flex",justifyContent:"center",alignItems:"center",marginRight:24,paddingTop:12,paddingBottom:6,shadowOffset:{width:0,height:4},borderRadius:8,cursor:"pointer",userSelect:"none"},default:{flex:1,aspectRatio:.95,marginRight:12,borderRadius:4}})),{},{overflow:"hidden"}),noRightMargin:{marginRight:0},label:{fontFamily:"Spartan_700Bold",fontSize:32},background:{width:"100%",height:"100%",borderRadius:4,position:"absolute",bottom:4,display:"flex",justifyContent:"center",alignItems:"center"},doubleKey:K({},_.a.select({web:{width:"calc(50% - 12px)"},default:{aspectRatio:1.95}})),smallerText:{fontSize:18},darkDefault:K({},_.a.select({web:{shadowColor:v.dark.keys.primaryShadow},default:{backgroundColor:v.dark.keys.primaryShadow}})),darkDefaultBackground:{backgroundColor:v.dark.keys.primaryBackground},darkDefaultLabel:{color:v.dark.text.dark},darkFunction:K({},_.a.select({web:{shadowColor:v.dark.keys.secondaryShadow},default:{backgroundColor:v.dark.keys.secondaryShadow}})),darkFunctionBackground:{backgroundColor:v.dark.keys.secondaryBackground},darkFunctionLabel:{color:v.dark.text.light},darkAccent:K({},_.a.select({web:{shadowColor:v.dark.keys.accentShadow},default:{backgroundColor:v.dark.keys.accentShadow}})),darkAccentBackground:{backgroundColor:v.dark.keys.accentBackground},darkAccentLabel:{color:v.dark.text.light},lightDefault:K({},_.a.select({web:{shadowColor:v.light.keys.primaryShadow},default:{backgroundColor:v.light.keys.primaryShadow}})),lightDefaultBackground:{backgroundColor:v.light.keys.primaryBackground},lightDefaultLabel:{color:v.light.text.dark},lightFunction:K({},_.a.select({web:{shadowColor:v.light.keys.secondaryShadow},default:{backgroundColor:v.light.keys.secondaryShadow}})),lightFunctionBackground:{backgroundColor:v.light.keys.secondaryBackground},lightFunctionLabel:{color:v.light.text.light},lightAccent:K({},_.a.select({web:{shadowColor:v.light.keys.accentShadow},default:{backgroundColor:v.light.keys.accentShadow}})),lightAccentBackground:{backgroundColor:v.light.keys.accentBackground},lightAccentLabel:{color:v.light.text.light},contrastDefault:K({},_.a.select({web:{shadowColor:v.contrast.keys.primaryShadow},default:{backgroundColor:v.contrast.keys.primaryShadow}})),contrastDefaultBackground:{backgroundColor:v.contrast.keys.primaryBackground},contrastDefaultLabel:{color:v.contrast.text.accent},contrastFunction:K({},_.a.select({web:{shadowColor:v.contrast.keys.secondaryShadow},default:{backgroundColor:v.contrast.keys.secondaryShadow}})),contrastFunctionBackground:{backgroundColor:v.contrast.keys.secondaryBackground},contrastFunctionLabel:{color:v.contrast.text.light},contrastAccent:K({},_.a.select({web:{shadowColor:v.contrast.keys.accentShadow},default:{backgroundColor:v.contrast.keys.accentShadow}})),contrastAccentBackground:{backgroundColor:v.contrast.keys.accentBackground},contrastAccentLabel:{color:v.contrast.text.dark}}),H=[[{label:"7",variant:"num"},{label:"8",variant:"num"},{label:"9",variant:"num"},{label:"DEL",variant:"fn"}],[{label:"4",variant:"num"},{label:"5",variant:"num"},{label:"6",variant:"num"},{label:"+",variant:"op"}],[{label:"1",variant:"num"},{label:"2",variant:"num"},{label:"3",variant:"num"},{label:"-",variant:"op"}],[{label:".",variant:"dot"},{label:"0",variant:"num"},{label:"/",variant:"op"},{label:"X",variant:"op"}],[{label:"RESET",variant:"fnDouble"},{label:"=",variant:"eq"}]];function q(){var e=Object(o.useContext)(i).theme,a=H.map((function(e,a){var t=[J.keypadRow];a===H.length-1&&t.push(J.lastKeyPadRow);var r=e.map((function(a,t){var r=t===e.length-1;return l.a.createElement(z,{key:t+" - "+a.label,label:a.label,variant:a.variant,lastInLine:r})}));return l.a.createElement(w.a,{key:"Keypad row "+a,style:t},r)}));return l.a.createElement(w.a,{style:[J.keypadContainer,J[e]]},a)}var J=m.a.create({keypadContainer:{padding:24,borderRadius:12,display:"flex",flexDirection:"column"},keypadRow:{display:"flex",flexDirection:"row",marginBottom:16},lastKeyPadRow:{marginBottom:0},dark:{backgroundColor:v.dark.background.secondary},light:{backgroundColor:v.light.background.secondary},contrast:{backgroundColor:v.contrast.background.secondary}});function V(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function U(){var e=Object(o.useContext)(i).theme,a=v[e].background.primary,t=_.a.select({web:l.a.createElement(w.a,{style:[W.container,W[e]]},l.a.createElement(w.a,{style:W.calculatorContainer},l.a.createElement(E,null),l.a.createElement(T,{value:1000000.542}),l.a.createElement(q,null))),default:l.a.createElement(f.a,{style:W.safeAreaView},l.a.createElement(p.a,{style:[W.container,W[e]]},l.a.createElement(E,null),l.a.createElement(T,{value:1000000.542}),l.a.createElement(q,null)))});return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{backgroundColor:a}),t)}var W=m.a.create({safeAreaView:{flex:1},container:function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?V(Object(t),!0).forEach((function(a){y()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({flex:1,display:"flex",flexDirection:"column",padding:24,marginTop:D.a.statusBarHeight},_.a.select({web:{justifyContent:"center",alignItems:"center"}})),calculatorContainer:{width:"35vw",minWidth:375},dark:{backgroundColor:v.dark.background.primary},light:{backgroundColor:v.light.background.primary},contrast:{backgroundColor:v.contrast.background.primary}});function X(){var e=Object(d.b)({Spartan_700Bold:d.a});return n()(e,1)[0]?l.a.createElement(b,null,l.a.createElement(U,null)):l.a.createElement(c.a,null)}},81:function(e,a,t){e.exports=t(118)}},[[81,1,2]]]);
//# sourceMappingURL=app.060b760d.chunk.js.map