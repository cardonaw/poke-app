import{a as j,b as oe,c as me}from"./chunk-BBAQUVE2.js";import{$ as A,A as N,B as r,C as a,D as F,Da as G,E as v,F as c,Fa as re,G as f,Ga as ae,Ha as le,Ia as se,K as p,M as k,N as X,O as Y,P as Z,Q as H,R as ee,S as h,T as x,U as W,W as te,X as ie,Y as I,Z as P,_ as D,ba as ne,c as q,f as K,j as Q,k as O,ka as z,m as C,n as B,na as M,o as _,p as b,pa as E,q as S,s as T,u as m,v as w,y as d,z as s}from"./chunk-HMSV6PB7.js";var L=(()=>{let e=class e{constructor(){this.battleCacheStore=[],this.loadFromLocalStorage()}loadFromLocalStorage(){localStorage.getItem("battleCacheStore")&&(this.battleCacheStore=JSON.parse(localStorage.getItem("battleCacheStore")))}saveResults(n,i){this.battleCacheStore.unshift({fighters:i.map(o=>this.getNameNSprite(o)),winner:n}),this.battleCacheStore.splice(10),this.saveToLocalStorage()}getNameNSprite(n){let i=n.name,o=n.sprites.front_default;return{name:i,sprite:o}}saveToLocalStorage(){localStorage.setItem("battleCacheStore",JSON.stringify(this.battleCacheStore))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=Q({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ce=()=>({width:"auto",margin:"0 2rem"});function we(t,e){t&1&&(r(0,"div",4)(1,"div",5)(2,"span",6),p(3," Seleccionar Pokemon "),a(),r(4,"span",7),p(5,"Selecciona un pokemon para el enfrentamiento, luego presiona Aceptar"),a()()())}function Se(t,e){if(t&1){let l=v();r(0,"p-button",8),c("click",function(){_(l);let i=f();return b(i.setVisibleFalse())}),a(),r(1,"p-button",9),c("click",function(){_(l);let i=f();return b(i.onDone())}),a()}if(t&2){let l=f();s("text",!0),m(),s("outlined",!0)("disabled",!l.isSelected)}}var de=(()=>{let e=class e{constructor(){this.isSelected=!1,this.visibleModal=!1,this.hideModal=new S,this.pokemonSelected=new S}setVisibleFalse(){this.hideModal.emit()}onDone(){this.isSelected&&(this.pokemonSelected.emit(this.selectedPokemon),this.hideModal.emit())}onPokemonSelect(n){this.selectedPokemon=n,this.isSelected=!0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=C({type:e,selectors:[["game-select-modal"]],inputs:{visibleModal:"visibleModal"},outputs:{hideModal:"hideModal",pokemonSelected:"pokemonSelected"},decls:4,vars:9,consts:[["header","Seleccionar Pokemon",3,"modal","visible","closable","focusOnShow","draggable"],["pTemplate","header"],[3,"onPokemonSelect","gameMode"],["pTemplate","footer"],[1,"inline-flex","align-items-center","justify-content-center","gap-2"],[1,"flex","flex-column"],[1,"font-bold","white-space-nowrap","text-xl","mb-1"],[1,"p-text-secondary","block"],["label","Cancelar","severity","secondary","styleClass","mt-2",3,"click","text"],["label","Aceptar","severity","secondary","styleClass","mt-2",3,"click","outlined","disabled"]],template:function(i,o){i&1&&(r(0,"p-dialog",0),d(1,we,6,0,"ng-template",1),r(2,"pokedex-pokedex",2),c("onPokemonSelect",function(u){return o.onPokemonSelect(u)}),a(),d(3,Se,2,3,"ng-template",3),a()),i&2&&(N(H(8,Ce)),s("modal",!0)("visible",o.visibleModal)("closable",!1)("focusOnShow",!1)("draggable",!1),m(2),s("gameMode",!0))},dependencies:[E,M,G,oe],encapsulation:2});let t=e;return t})();function Me(t,e){if(t&1&&(r(0,"div",10),p(1),h(2,"i18nSelect"),h(3,"titlecase"),a()),t&2){let l=e.$implicit,n=f(2);m(),k(" ",x(3,4,W(2,1,l.type.name,n.typeMap))," ")}}function Ee(t,e){if(t&1){let l=v();r(0,"div",11)(1,"p-button",12),c("onClick",function(){_(l);let i=f(2);return b(i.showDialog())}),a()()}}function Te(t,e){if(t&1&&(r(0,"p-card",4),h(1,"titlecase"),r(2,"div",5),F(3,"img",6),h(4,"titlecase"),r(5,"div",7),d(6,Me,4,6,"div",8),a()(),d(7,Ee,2,0,"ng-template",9),a()),t&2){let l=f();s("header",x(1,4,l.pokemon.name)),m(3),s("src",l.setSprite(),T)("alt",x(4,6,l.pokemon.name)),m(3),s("ngForOf",l.pokemon.types)}}function Fe(t,e){if(t&1){let l=v();r(0,"p-button",13),c("onClick",function(){_(l);let i=f();return b(i.showDialog())}),r(1,"div",14)(2,"div",15),p(3,"Presiona para elegir pokemon"),a()()()}}var fe=(()=>{let e=class e{constructor(n){this.typeService=n,this.visibleModal=!1,this.visibleModalAnimDelay=!1,this.typeMap=this.typeService.i18nTypeMap,this.pokemonEmitter=new S}showDialog(){this.visibleModal=!0,this.visibleModalAnimDelay=!0}hideDialog(){this.visibleModal=!1,setTimeout(()=>{this.visibleModalAnimDelay=!1},200)}changePokemon(n){this.pokemon=n,this.pokemonEmitter.emit(n)}setSprite(){return this.pokemon.sprites.other["official-artwork"].front_default?this.pokemon.sprites.other["official-artwork"].front_default:this.pokemon.sprites.front_default}};e.\u0275fac=function(i){return new(i||e)(w(j))},e.\u0275cmp=C({type:e,selectors:[["game-card"]],outputs:{pokemonEmitter:"pokemonEmitter"},decls:4,vars:3,consts:[[1,"flex","flex-column","justify-content-center","align-items-center"],["styleClass","w-18rem  md:w-25rem",3,"header",4,"ngIf"],["styleClass","",3,"onClick",4,"ngIf"],[3,"hideModal","pokemonSelected","visibleModal"],["styleClass","w-18rem  md:w-25rem",3,"header"],[1,"flex","flex-wrap","justify-content-around","align-items-center","gap-4"],["width","200px",3,"src","alt"],[1,"flex","flex-row","md:flex-column","justify-content-center","align-items-center","gap-4"],["class","text-md md:text-lg px-2 py-1 surface-500 text-50 border-round-xl",4,"ngFor","ngForOf"],["pTemplate","footer"],[1,"text-md","md:text-lg","px-2","py-1","surface-500","text-50","border-round-xl"],[1,"flex","gap-3"],["label","Cambiar","severity","secondary","styleClass","w-full",1,"w-full",3,"onClick"],["styleClass","",3,"onClick"],[1,"w-15rem","sm:w-22rem","xl:w-26rem","h-5rem","sm:h-10rem","md:h-12rem","sm:text-xl","md:text-3xl","flex","justify-content-center","align-items-center"],[1,"label"]],template:function(i,o){i&1&&(r(0,"div",0),d(1,Te,8,8,"p-card",1)(2,Fe,4,0,"p-button",2),a(),r(3,"game-select-modal",3),c("hideModal",function(){return o.hideDialog()})("pokemonSelected",function(u){return o.changePokemon(u)}),a()),i&2&&(m(),s("ngIf",o.pokemon),m(),s("ngIf",!o.pokemon),m(),s("visibleModal",o.visibleModal))},dependencies:[I,P,E,M,re,de,D,A]});let t=e;return t})();var Ie=()=>({width:"auto",margin:"0 2rem"});function Pe(t,e){if(t&1&&(r(0,"div",7)(1,"div",8)(2,"span",9),p(3),h(4,"titlecase"),a(),r(5,"span",10),p(6),h(7,"titlecase"),a()()()),t&2){let l=f();m(3),k(" ",x(4,2,l.winner.name)," gana!!! "),m(3),k(" ",x(7,4,l.winner.name)," ha ganado el enfrentamiento")}}function De(t,e){if(t&1&&(r(0,"div",11),p(1),h(2,"i18nSelect"),h(3,"titlecase"),a()),t&2){let l=e.$implicit,n=f();m(),k(" ",x(3,4,W(2,1,l.type.name,n.typeMap))," ")}}function je(t,e){if(t&1){let l=v();r(0,"p-button",12),c("click",function(){_(l);let i=f();return b(i.setVisibleFalse())}),a()}t&2&&s("outlined",!0)}var ge=(()=>{let e=class e{constructor(n){this.typeService=n,this.typeMap=this.typeService.i18nTypeMap,this.visibleModal=!1,this.hideModal=new S}setVisibleFalse(){this.hideModal.emit()}setSprite(){return this.winner.sprites.other["official-artwork"].front_default?this.winner.sprites.other["official-artwork"].front_default:this.winner.sprites.front_default}};e.\u0275fac=function(i){return new(i||e)(w(j))},e.\u0275cmp=C({type:e,selectors:[["game-wins-modal"]],inputs:{visibleModal:"visibleModal",winner:"winner"},outputs:{hideModal:"hideModal"},decls:8,vars:13,consts:[["header","Ganador",3,"modal","visible","closable","focusOnShow","draggable"],["pTemplate","header"],[1,"flex","flex-wrap","justify-content-around","align-items-center","gap-4","mx-3"],[1,"w-15rem","md:w-20rem",3,"src","alt"],[1,"flex","flex-row","md:flex-column","justify-content-center","align-items-center","gap-4"],["class","text-md md:text-lg px-2 py-1 surface-500 text-50 border-round-xl",4,"ngFor","ngForOf"],["pTemplate","footer"],[1,"flex","align-items-center","justify-content-center","gap-2"],[1,"flex","flex-column"],[1,"font-bold","white-space-nowrap","text-4xl","mb-1"],[1,"p-text-secondary","block"],[1,"text-md","md:text-lg","px-2","py-1","surface-500","text-50","border-round-xl"],["label","Aceptar","severity","primary","styleClass","mt-2",3,"click","outlined"]],template:function(i,o){i&1&&(r(0,"p-dialog",0),d(1,Pe,8,6,"ng-template",1),r(2,"div",2),F(3,"img",3),h(4,"titlecase"),r(5,"div",4),d(6,De,4,6,"div",5),a()(),d(7,je,1,1,"ng-template",6),a()),i&2&&(N(H(12,Ie)),s("modal",!0)("visible",o.visibleModal)("closable",!1)("focusOnShow",!1)("draggable",!1),m(3),s("src",o.setSprite(),T)("alt",x(4,10,o.winner.name)),m(3),s("ngForOf",o.winner.types))},dependencies:[I,E,M,G,D,A]});let t=e;return t})();var Be=t=>({"border-top-1 surface-border":t});function Ne(t,e){t&1&&(r(0,"h4",18),p(1,"VS"),a())}function He(t,e){if(t&1&&(r(0,"div")(1,"div",14)(2,"div",15)(3,"h4",16),p(4),h(5,"titlecase"),a(),F(6,"img",13),a(),d(7,Ne,2,0,"h4",17),a()()),t&2){let l=e.$implicit,n=e.first;m(4),k(" ",x(5,4,l.name)," "),m(2),s("src",l.sprite,T)("alt",l.name),m(),s("ngIf",n)}}function We(t,e){if(t&1&&(r(0,"div",6)(1,"div",7),d(2,He,8,6,"div",8),r(3,"div",9)(4,"h2",10),p(5,"="),a(),r(6,"div",11)(7,"h4",12),p(8),h(9,"titlecase"),a(),F(10,"img",13),a()()()()),t&2){let l=e.$implicit,n=e.first;m(),s("ngClass",ee(7,Be,!n)),m(),s("ngForOf",l.fighters),m(6),k(" ",x(9,5,l.fighters[l.winner].name)," "),m(2),s("src",l.fighters[l.winner].sprite,T)("alt",l.fighters[l.winner].name)}}function Ae(t,e){if(t&1&&(r(0,"div",4),d(1,We,11,9,"div",5),a()),t&2){let l=e.$implicit;m(),s("ngForOf",l)}}var ue=(()=>{let e=class e{constructor(n){this.gameService=n,this.sidebarVisible=!1,this.sidebarVisibleChange=new S}get battles(){return this.gameService.battleCacheStore}ngOnInit(){}visibilityChange(n){this.sidebarVisible=n,this.sidebarVisibleChange.emit(this.sidebarVisible)}};e.\u0275fac=function(i){return new(i||e)(w(L))},e.\u0275cmp=C({type:e,selectors:[["game-history-bar"]],inputs:{sidebarVisible:"sidebarVisible"},outputs:{sidebarVisibleChange:"sidebarVisibleChange"},decls:6,vars:3,consts:[["dv",""],["position","right","styleClass"," sm:w-30rem",3,"visibleChange","visible","modal"],[3,"value"],["pTemplate","list"],[1,"grid","grid-nogutter"],["class","col-12",4,"ngFor","ngForOf"],[1,"col-12"],[1,"flex","flex-row","align-items-center","gap-0","flex-wrap","justify-content-center",3,"ngClass"],[4,"ngFor","ngForOf"],[1,"flex","flex-column","sm:flex-row","align-items-center"],[1,"m-0","sm:mx-3","text-indigo-400"],[1,"relative","text-center"],[1,"mb-0","mt-3","text-sm","sm:text-base","md:text-lg"],[1,"w-5rem",3,"src","alt"],[1,"flex","align-items-center"],[1,"relative","text-center","w-5rem","md:w-7rem"],[1,"mb-0","mt-3","text-sm","sm:text-base","md:text-lg","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],["class","mx-3 text-indigo-400",4,"ngIf"],[1,"mx-3","text-indigo-400"]],template:function(i,o){if(i&1){let g=v();r(0,"p-sidebar",1),c("visibleChange",function($){return _(g),b(o.visibilityChange($))}),r(1,"h2"),p(2,"\xDAltimos 10 de enfrentamientos"),a(),r(3,"p-dataView",2,0),d(5,Ae,2,1,"ng-template",3),a()()}i&2&&(s("visible",o.sidebarVisible)("modal",!0),m(3),s("value",o.battles))},dependencies:[ie,I,P,M,ae,le,D]});let t=e;return t})();function Le(t,e){if(t&1){let l=v();r(0,"div",15)(1,"p-button",16),c("onClick",function(){_(l);let i=f();return b(i.onFight())}),a()()}}function $e(t,e){if(t&1){let l=v();r(0,"game-wins-modal",17),c("hideModal",function(){_(l);let i=f();return b(i.hideDialog())}),a()}if(t&2){let l=f();s("visibleModal",l.visibleModal)("winner",l.winner)}}var he=(()=>{let e=class e{constructor(n,i,o){this.typeService=n,this.gameService=i,this.location=o,this.pokemonsFighters=[],this.visibleModal=!1,this.visibleModalAnimDelay=!1,this.visibleHistory=!1,this.destroy$=new q}ngOnInit(){}back(){this.location.back()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}showHistory(){this.visibleHistory=!0}twoFighters(){return!!(this.pokemonsFighters[0]&&this.pokemonsFighters[1])}showDialog(){this.visibleModal=!0,this.visibleModalAnimDelay=!0}hideDialog(){this.visibleModal=!1,setTimeout(()=>{this.visibleModalAnimDelay=!1},200)}onPokemonChange(n,i){this.pokemonsFighters[i]=n}onWinner(n){this.winner=this.pokemonsFighters[n],this.showDialog(),this.gameService.saveResults(n,this.pokemonsFighters)}onFight(){this.getFighterTypes()}getFighterTypes(){K(this.pokemonsFighters[0].types.map(n=>this.typeService.getTypeInfo(n.type.name))).subscribe(n=>this.getWinner(n))}getWinner(n){let i=this.calcProb(n);Math.floor(Math.random()*101)<i?this.onWinner(0):this.onWinner(1),console.log("La probabilidad de ganar del luchador #1 es de: ",i),console.log("La probabilidad de ganar del luchador #2 es de: ",100-i)}calcProb(n){let i=0,o=0;return n.forEach(g=>{i+=this.probAssign(g,this.pokemonsFighters[1].types[0].type.name),o+=1,this.pokemonsFighters[1].types[1]&&(i+=this.probAssign(g,this.pokemonsFighters[1].types[1].type.name),o+=1)}),i/o}probAssign(n,i){let o=0,{double_damage_to:g,half_damage_to:u,no_damage_to:$,double_damage_from:be,half_damage_from:ve,no_damage_from:xe}=n.damage_relations;return g.some(y=>y.name===i)?o=75:u.some(y=>y.name===i)?o=50:$.some(y=>y.name===i)?o=25:o=50,be.some(y=>y.name===i)?o=(o+25)/2:ve.some(y=>y.name===i)?o=(o+50)/2:xe.some(y=>y.name===i)?o=(o+75)/2:o=(o+50)/2,o}};e.\u0275fac=function(i){return new(i||e)(w(j),w(L),w(te))},e.\u0275cmp=C({type:e,selectors:[["game-game-page"]],decls:22,vars:7,consts:[[3,"sidebarVisibleChange","sidebarVisible"],[1,"pb-4"],[1,"flex","justify-content-center"],[1,"w-10","xl:w-7","mb-0"],[1,"flex","justify-content-between","align-items-end","flex-wrap","gap-3"],[1,"text-4xl","md:text-6xl","mb-0"],["icon","pi pi-arrow-left","styleClass","ml-2  md:ml-3",3,"onClick","text","raised"],["label","Historial","icon","pi pi-history","styleClass","ml-0  md:ml-3 bg-indigo-900 ",3,"onClick","text","raised"],[1,"mb-4","lg:mb-8"],[1,"md:mt-4","pt-6","flex","flex-column","lg:flex-row","justify-content-between","align-items-center","column-gap-8","row-gap-3"],[1,""],[1,"m-1","text-xl","md:text-3xl"],[3,"pokemonEmitter"],["class","flex justify-content-center my-4",4,"ngIf"],[3,"visibleModal","winner","hideModal",4,"ngIf"],[1,"flex","justify-content-center","my-4"],["label","Luchar","severity","warning",3,"onClick"],[3,"hideModal","visibleModal","winner"]],template:function(i,o){i&1&&(r(0,"game-history-bar",0),Z("sidebarVisibleChange",function(u){return Y(o.visibleHistory,u)||(o.visibleHistory=u),u}),a(),r(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),p(6," Game-Mode "),r(7,"p-button",6),c("onClick",function(){return o.back()}),a()(),r(8,"p-button",7),c("onClick",function(){return o.showHistory()}),a()(),r(9,"p",8),p(10,"Selecciona dos pokemons para el enfrentamiento"),a(),r(11,"div",9)(12,"div",10)(13,"h2",11),p(14,"Personaje 1"),a(),r(15,"game-card",12),c("pokemonEmitter",function(u){return o.onPokemonChange(u,0)}),a()(),d(16,Le,2,0,"div",13),r(17,"div",10)(18,"h2",11),p(19,"Personaje 2"),a(),r(20,"game-card",12),c("pokemonEmitter",function(u){return o.onPokemonChange(u,1)}),a()()()()(),d(21,$e,1,2,"game-wins-modal",14),a()),i&2&&(X("sidebarVisible",o.visibleHistory),m(7),s("text",!0)("raised",!0),m(),s("text",!0)("raised",!0),m(8),s("ngIf",o.twoFighters()),m(5),s("ngIf",o.winner))},dependencies:[P,E,fe,ge,ue]});let t=e;return t})();var ze=[{path:"",component:he},{path:"**",redirectTo:""}],_e=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=B({type:e}),e.\u0275inj=O({imports:[z.forChild(ze),z]});let t=e;return t})();var Ft=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=B({type:e}),e.\u0275inj=O({imports:[ne,_e,se,me]});let t=e;return t})();export{Ft as GameModule};