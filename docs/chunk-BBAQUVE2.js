import{$ as B,A as M,Aa as we,B as s,Ba as A,C as l,Ca as K,D as w,Da as ke,E as v,Ea as Ce,F as f,G as m,H as le,I as se,Ia as be,J as pe,K as d,L as $,M as k,N as j,O,P as R,Q as E,R as Y,S as _,T as x,U as I,W as me,Y as z,Z as L,_ as V,aa as de,ba as ce,c as Q,ca as fe,d as ie,da as ge,e as ne,f as oe,g as X,h as N,j as ae,k as q,ka as Z,l as re,la as _e,m as T,n as G,na as D,o as u,oa as he,p as y,pa as F,q as C,s as P,t as J,u as r,v as b,xa as ue,y as g,ya as ye,z as p,za as xe}from"./chunk-HMSV6PB7.js";var S=(()=>{let t=class t{constructor(i){this.http=i,this.apiUrl="https://pokeapi.co/api/v2",this.i18nTypeMap={normal:"normal",fighting:"lucha",flying:"volador",poison:"veneno",ground:"tierra",rock:"roca",bug:"bicho",ghost:"fantasma",steel:"acero",fire:"fuego",water:"agua",grass:"planta",electric:"el\xE9ctrico",psychic:"ps\xEDquico",ice:"hielo",dragon:"dragon",fairy:"hada",dark:"siniestro",stellar:"estelar"}}getTypesList(i,a){let o=new fe().set("offset",i).set("limit",a);return this.http.get(`${this.apiUrl}/type?`,{params:o}).pipe(X(h=>{throw"Error while fetching typesList: "+h}))}getTypeInfo(i){return this.http.get(`${this.apiUrl}/type/${i}`).pipe(X(a=>{throw"Error while fetching pokeType: "+a}))}getPokemonsByType(i){return this.http.get(`${this.apiUrl}/type/${i}`).pipe(ie(a=>a.pokemon.map(o=>this.http.get(o.pokemon.url))),ne(a=>oe([...a])))}};t.\u0275fac=function(a){return new(a||t)(re(ge))},t.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Be=e=>({"min-width":e}),De=()=>[5,10,100];function Fe(e,t){e&1&&(s(0,"th",8),d(1," Categor\xEDa "),l())}function We(e,t){e&1&&w(0,"th",9)}function $e(e,t){e&1&&(s(0,"th",10),d(1," Detalles "),l())}function je(e,t){if(e&1&&(s(0,"tr")(1,"th",4),d(2," GIF "),l(),s(3,"th",4),d(4," Nombre "),l(),g(5,Fe,2,0,"th",5)(6,We,1,0,"th",6)(7,$e,2,0,"th",7),l()),e&2){let n=m();r(),M(n.smallViewWidth()?"width: 50%":"width: 20%"),r(2),M(n.smallViewWidth()?"width: 50%":"width: 25%"),r(2),p("ngIf",!n.smallViewWidth()),r(),p("ngIf",!n.smallViewWidth()),r(),p("ngIf",!n.smallViewWidth())}}function Oe(e,t){if(e&1&&w(0,"img",17),e&2){let n=m().$implicit;p("src",n.sprites.other.showdown.front_default,P)("alt",n.name)}}function Re(e,t){if(e&1&&w(0,"img",18),e&2){let n=m().$implicit;p("src",n.sprites.front_default,P)}}function ze(e,t){if(e&1&&(s(0,"td",19),d(1),_(2,"titlecase"),l()),e&2){let n=m().$implicit;r(),k(" ",x(2,1,n.name)," ")}}function Ae(e,t){if(e&1){let n=v();s(0,"td",12)(1,"p-button",20),f("onClick",function(){u(n);let a=m().$implicit,o=m();return y(o.onClickInfo(a.id))}),d(2),_(3,"titlecase"),l()()}if(e&2){let n=m().$implicit;r(),p("outlined",!0),r(),k(" ",x(3,2,n.name)," ")}}function Ne(e,t){if(e&1&&(s(0,"span",23),d(1),_(2,"i18nSelect"),_(3,"titlecase"),l()),e&2){let n=t.$implicit,i=m(3);r(),k(" ",x(3,4,I(2,1,n.type.name,i.typeMap))," ")}}function Ue(e,t){if(e&1&&(s(0,"td",12)(1,"div",21),g(2,Ne,4,6,"span",22),l()()),e&2){let n=m().$implicit;r(2),p("ngForOf",n.types)}}function He(e,t){e&1&&w(0,"td",12)}function Qe(e,t){if(e&1){let n=v();s(0,"td",12)(1,"p-button",24),f("onClick",function(){u(n);let a=m().$implicit,o=m();return y(o.onClickInfo(a.id))}),l()()}}function qe(e,t){if(e&1&&(s(0,"tr",11)(1,"td",12),g(2,Oe,1,2,"img",13)(3,Re,1,1,"img",14),l(),g(4,ze,3,3,"td",15)(5,Ae,4,4,"td",16)(6,Ue,3,1,"td",16)(7,He,1,0,"td",16)(8,Qe,2,0,"td",16),l()),e&2){let n=t.$implicit,i=m();p("pSelectableRow",n),r(2),p("ngIf",n.sprites.other.showdown.front_default),r(),p("ngIf",!n.sprites.other.showdown.front_default),r(),p("ngIf",!i.smallViewWidth()),r(),p("ngIf",i.smallViewWidth()),r(),p("ngIf",!i.smallViewWidth()),r(),p("ngIf",!i.smallViewWidth()),r(),p("ngIf",!i.smallViewWidth())}}var ve=(()=>{let t=class t{constructor(i){this.typeService=i,this.offset=0,this.rows=5,this.flag=!1,this.paginatorPosition="top",this.windowSize=window.innerWidth,this.typeMap=this.typeService.i18nTypeMap,this.gameMode=!1,this.isLoading=!1,this.firstLoadingFlag=!1,this.pokemonsArray=[],this.pokemonsCount=0,this.onPageChange=new C,this.showDialog=new C,this.onPokemonSelect=new C}ngOnInit(){this.selectionMode(),this.onPageChange.emit({first:this.offset,rows:this.rows})}onResize(){this.windowSize=window.innerWidth}pageChange(i){this.paginatorPositionControl(i.rows),this.offset=i.first,this.rows=i.rows,this.onPageChange.emit(i)}paginatorPositionControl(i){i>=10?this.paginatorPosition="both":this.paginatorPosition="top"}paginatorLinksControl(){return this.windowSize<780?1:5}smallViewWidth(){return this.windowSize<655}onClickInfo(i){this.showDialog.emit(i)}selectionMode(){return this.gameMode?"single":null}rowSelect(){this.onPokemonSelect.emit(this.selectedPokemon)}};t.\u0275fac=function(a){return new(a||t)(b(S))},t.\u0275cmp=T({type:t,selectors:[["pokedex-pokemons-table"]],hostBindings:function(a,o){a&1&&f("resize",function(c){return o.onResize(c)},!1,J)},inputs:{gameMode:"gameMode",isLoading:"isLoading",firstLoadingFlag:"firstLoadingFlag",pokemonsArray:"pokemonsArray",pokemonsCount:"pokemonsCount"},outputs:{onPageChange:"onPageChange",showDialog:"showDialog",onPokemonSelect:"onPokemonSelect"},decls:4,vars:17,consts:[[1,"card"],["loadingIcon","pi pi-spinner pi-spin text-7xl","currentPageReportTemplate","Mostrando Pokemons del {first} al {last} de {totalRecords}","styleClass","p-datatable-striped",3,"onPage","selectionChange","onRowSelect","value","totalRecords","loading","paginator","paginatorPosition","pageLinks","rows","first","showCurrentPageReport","tableStyle","rowsPerPageOptions","lazy","selectionMode","selection"],["pTemplate","header"],["pTemplate","body"],[1,"text-center","text-lg"],["class","text-center text-lg","style","width: 30%",4,"ngIf"],["class","text-center text-lg","style","width: 10%",4,"ngIf"],["class","text-center text-lg","style","width: 15%",4,"ngIf"],[1,"text-center","text-lg",2,"width","30%"],[1,"text-center","text-lg",2,"width","10%"],[1,"text-center","text-lg",2,"width","15%"],[3,"pSelectableRow"],[1,"text-center"],[3,"src","alt",4,"ngIf"],["alt","No Disponible",3,"src",4,"ngIf"],["class","text-center text-primary font-bold text-xl",4,"ngIf"],["class","text-center",4,"ngIf"],[3,"src","alt"],["alt","No Disponible",3,"src"],[1,"text-center","text-primary","font-bold","text-xl"],["size","small","styleClass","text-primary font-bold text-md",3,"onClick","outlined"],[1,"flex","justify-content-center"],["class","m-2 py-1 px-2 surface-200 text-center border-round-lg",4,"ngFor","ngForOf"],[1,"m-2","py-1","px-2","surface-200","text-center","border-round-lg"],["label","Ver m\xE1s","size","small",3,"onClick"]],template:function(a,o){a&1&&(s(0,"div",0)(1,"p-table",1),f("onPage",function(c){return o.pageChange(c)}),R("selectionChange",function(c){return O(o.selectedPokemon,c)||(o.selectedPokemon=c),c}),f("onRowSelect",function(){return o.rowSelect()}),g(2,je,8,7,"ng-template",2)(3,qe,9,8,"ng-template",3),l()()),a&2&&(r(),p("value",o.pokemonsArray)("totalRecords",o.pokemonsCount)("loading",o.isLoading)("paginator",!0)("paginatorPosition",o.paginatorPosition)("pageLinks",o.paginatorLinksControl())("rows",o.rows)("first",o.offset)("showCurrentPageReport",!0)("tableStyle",Y(14,Be,o.smallViewWidth()?"20rem":"50rem"))("rowsPerPageOptions",E(16,De))("lazy",!0)("selectionMode",o.selectionMode()),j("selection",o.selectedPokemon))},dependencies:[z,L,F,D,A,K,V,B]});let e=t;return e})();var Je=e=>({"min-width":e}),Ye=()=>[5,10,100];function Ke(e,t){e&1&&(s(0,"th",8),d(1," Categor\xEDa "),l())}function Xe(e,t){e&1&&w(0,"th",9)}function Ze(e,t){e&1&&(s(0,"th",10),d(1," Detalles "),l())}function et(e,t){if(e&1&&(s(0,"tr")(1,"th",4),d(2," GIF "),l(),s(3,"th",4),d(4," Nombre "),l(),g(5,Ke,2,0,"th",5)(6,Xe,1,0,"th",6)(7,Ze,2,0,"th",7),l()),e&2){let n=m();r(),M(n.smallViewWidth()?"width: 50%":"width: 20%"),r(2),M(n.smallViewWidth()?"width: 50%":"width: 25%"),r(2),p("ngIf",!n.smallViewWidth()),r(),p("ngIf",!n.smallViewWidth()),r(),p("ngIf",!n.smallViewWidth())}}function tt(e,t){if(e&1&&w(0,"img",17),e&2){let n=m().$implicit;p("src",n.sprites.other.showdown.front_default,P)("alt",n.name)}}function it(e,t){if(e&1&&w(0,"img",18),e&2){let n=m().$implicit;p("src",n.sprites.front_default,P)}}function nt(e,t){if(e&1&&(s(0,"td",19),d(1),_(2,"titlecase"),l()),e&2){let n=m().$implicit;r(),k(" ",x(2,1,n.name)," ")}}function ot(e,t){if(e&1){let n=v();s(0,"td",12)(1,"p-button",20),f("onClick",function(){u(n);let a=m().$implicit,o=m();return y(o.onClickInfo(a.id))}),d(2),_(3,"titlecase"),l()()}if(e&2){let n=m().$implicit;r(),p("outlined",!0),r(),k(" ",x(3,2,n.name)," ")}}function at(e,t){if(e&1&&(s(0,"span",23),d(1),_(2,"i18nSelect"),_(3,"titlecase"),l()),e&2){let n=t.$implicit,i=m(3);r(),k(" ",x(3,4,I(2,1,n.type.name,i.typeMap))," ")}}function rt(e,t){if(e&1&&(s(0,"td",12)(1,"div",21),g(2,at,4,6,"span",22),l()()),e&2){let n=m().$implicit;r(2),p("ngForOf",n.types)}}function lt(e,t){e&1&&w(0,"td",12)}function st(e,t){if(e&1){let n=v();s(0,"td",12)(1,"p-button",24),f("onClick",function(){u(n);let a=m().$implicit,o=m();return y(o.onClickInfo(a.id))}),l()()}}function pt(e,t){if(e&1&&(s(0,"tr",11)(1,"td",12),g(2,tt,1,2,"img",13)(3,it,1,1,"img",14),l(),g(4,nt,3,3,"td",15)(5,ot,4,4,"td",16)(6,rt,3,1,"td",16)(7,lt,1,0,"td",16)(8,st,2,0,"td",16),l()),e&2){let n=t.$implicit,i=m();p("pSelectableRow",n),r(2),p("ngIf",n.sprites.other.showdown.front_default),r(),p("ngIf",!n.sprites.other.showdown.front_default),r(),p("ngIf",!i.smallViewWidth()),r(),p("ngIf",i.smallViewWidth()),r(),p("ngIf",!i.smallViewWidth()),r(),p("ngIf",!i.smallViewWidth()),r(),p("ngIf",!i.smallViewWidth())}}var Se=(()=>{let t=class t{constructor(i){this.typeService=i,this.offset=0,this.rows=5,this.flag=!1,this.paginatorPosition="top",this.windowSize=window.innerWidth,this.typeMap=this.typeService.i18nTypeMap,this.gameMode=!1,this.isLoading=!1,this.firstLoadingFlag=!1,this.pokemonsArray=[],this.pokemonsCount=0,this.showDialog=new C,this.onPokemonSelect=new C}ngOnInit(){}onResize(){this.windowSize=window.innerWidth}pageChange(i){this.paginatorPositionControl(i.rows)}paginatorPositionControl(i){i>=10?this.paginatorPosition="both":this.paginatorPosition="top"}paginatorLinksControl(){return this.windowSize<780?1:5}smallViewWidth(){return this.windowSize<655}onClickInfo(i){this.showDialog.emit(i)}selectionMode(){return this.gameMode?"single":null}rowSelect(){this.onPokemonSelect.emit(this.selectedPokemon)}};t.\u0275fac=function(a){return new(a||t)(b(S))},t.\u0275cmp=T({type:t,selectors:[["pokedex-by-type-table"]],hostBindings:function(a,o){a&1&&f("resize",function(c){return o.onResize(c)},!1,J)},inputs:{gameMode:"gameMode",isLoading:"isLoading",firstLoadingFlag:"firstLoadingFlag",pokemonsArray:"pokemonsArray",pokemonsCount:"pokemonsCount"},outputs:{showDialog:"showDialog",onPokemonSelect:"onPokemonSelect"},decls:4,vars:15,consts:[[1,"card"],["loadingIcon","pi pi-spinner pi-spin text-7xl","currentPageReportTemplate","Mostrando Pokemons del {first} al {last} de {totalRecords}","styleClass","p-datatable-striped",3,"onPage","selectionChange","onRowSelect","value","totalRecords","loading","paginator","paginatorPosition","pageLinks","rows","showCurrentPageReport","tableStyle","rowsPerPageOptions","selectionMode","selection"],["pTemplate","header"],["pTemplate","body"],[1,"text-center","text-lg"],["class","text-center text-lg","style","width: 30%",4,"ngIf"],["class","text-center text-lg","style","width: 10%",4,"ngIf"],["class","text-center text-lg","style","width: 15%",4,"ngIf"],[1,"text-center","text-lg",2,"width","30%"],[1,"text-center","text-lg",2,"width","10%"],[1,"text-center","text-lg",2,"width","15%"],[3,"pSelectableRow"],[1,"text-center"],[3,"src","alt",4,"ngIf"],["alt","No Disponible",3,"src",4,"ngIf"],["class","text-center text-primary font-bold text-xl",4,"ngIf"],["class","text-center",4,"ngIf"],[3,"src","alt"],["alt","No Disponible",3,"src"],[1,"text-center","text-primary","font-bold","text-xl"],["size","small","styleClass","text-primary font-bold text-md",3,"onClick","outlined"],[1,"flex","justify-content-center"],["class","m-2 py-1 px-2 surface-200 text-center border-round-lg",4,"ngFor","ngForOf"],[1,"m-2","py-1","px-2","surface-200","text-center","border-round-lg"],["label","Ver m\xE1s","size","small",3,"onClick"]],template:function(a,o){a&1&&(s(0,"div",0)(1,"p-table",1),f("onPage",function(c){return o.pageChange(c)}),R("selectionChange",function(c){return O(o.selectedPokemon,c)||(o.selectedPokemon=c),c}),f("onRowSelect",function(){return o.rowSelect()}),g(2,et,8,7,"ng-template",2)(3,pt,9,8,"ng-template",3),l()()),a&2&&(r(),p("value",o.pokemonsArray)("totalRecords",o.pokemonsCount)("loading",o.isLoading)("paginator",!0)("paginatorPosition",o.paginatorPosition)("pageLinks",o.paginatorLinksControl())("rows",o.rows)("showCurrentPageReport",!0)("tableStyle",Y(12,Je,o.smallViewWidth()?"20rem":"50rem"))("rowsPerPageOptions",E(14,Ye))("selectionMode",o.selectionMode()),j("selection",o.selectedPokemon))},dependencies:[z,L,F,D,A,K,V,B]});let e=t;return e})();function dt(e,t){if(e&1&&(s(0,"div",5)(1,"div"),d(2),_(3,"i18nSelect"),_(4,"titlecase"),l()()),e&2){let n=t.$implicit,i=m();r(2),$(x(4,4,I(3,1,n.name,i.typeMap)))}}function ct(e,t){if(e&1&&(s(0,"div",5)(1,"div"),d(2),_(3,"i18nSelect"),_(4,"titlecase"),l()()),e&2){let n=t.$implicit,i=m();r(2),$(x(4,4,I(3,1,n.name,i.typeMap)))}}var Pe=(()=>{let t=class t{constructor(i){this.typeService=i,this.offset=0,this.limit=100,this.typesArray=[],this.typeMap=this.typeService.i18nTypeMap,this.onTypeChange=new C,this.destroy$=new Q}ngOnInit(){this.getTypesList(this.offset,this.limit)}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}getTypesList(i,a){this.typeService.getTypesList(i,a).pipe(N(this.destroy$)).subscribe(o=>{let h=[];this.typesArray=o.results.filter(c=>!["shadow","unknown","stellar"].includes(c.name))})}onChange(){this.onTypeChange.emit(this.selectedType?this.selectedType.name:"all")}};t.\u0275fac=function(a){return new(a||t)(b(S))},t.\u0275cmp=T({type:t,selectors:[["pokedex-table-settings"]],outputs:{onTypeChange:"onTypeChange"},decls:6,vars:3,consts:[[1,"flex","flex-row","justify-content-start","align-items-center","flex-wrap","pl-6"],[1,"mr-2"],["optionLabel","name","placeholder","Todas",3,"ngModelChange","onChange","options","ngModel","showClear"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"flex","align-items-center","gap-2"]],template:function(a,o){a&1&&(s(0,"div",0)(1,"h3",1),d(2,"Categor\xEDa:"),l(),s(3,"p-dropdown",2),R("ngModelChange",function(c){return O(o.selectedType,c)||(o.selectedType=c),c}),f("onChange",function(){return o.onChange()}),g(4,dt,5,6,"ng-template",3)(5,ct,5,6,"ng-template",4),l()()),a&2&&(r(3),p("options",o.typesArray),j("ngModel",o.selectedType),p("showClear",!0))},dependencies:[D,we,ue,ye,V,B]});let e=t;return e})();var gt=["cries"],_t=()=>({width:"auto",margin:"0 2rem"}),Ie=()=>({"min-width":"20rem"});function ht(e,t){if(e&1&&(s(0,"div",30),d(1),_(2,"i18nSelect"),_(3,"titlecase"),l()),e&2){let n=t.$implicit,i=m(2);r(),k(" ",x(3,4,I(2,1,n.type.name,i.typeMap))," ")}}function ut(e,t){if(e&1&&(s(0,"div",26)(1,"div",27),d(2),_(3,"titlecase"),l(),s(4,"div",28),g(5,ht,4,6,"div",29),l()()),e&2){let n=m();r(2),k(" ",x(3,2,n.pokemonInfo.name)," "),r(3),p("ngForOf",n.pokemonInfo.types)}}function yt(e,t){e&1&&w(0,"p-skeleton",31)}function xt(e,t){if(e&1&&(s(0,"tr")(1,"td")(2,"li"),d(3),l()()()),e&2){let n=t.$implicit;r(3),$(n.ability.name)}}function wt(e,t){if(e&1&&(s(0,"tr")(1,"td")(2,"li"),d(3),l()()()),e&2){let n=t.$implicit;r(3),$(n.move.name)}}var Me=(()=>{let t=class t{constructor(i){this.typeService=i,this.imgUrl="",this.soundUrl="",this.imgLoaded=!1,this.typeMap=this.typeService.i18nTypeMap,this.visibleModal=!1,this.hideModal=new C}ngOnInit(){this.setSprite()}setSprite(){this.pokemonInfo.sprites.other["official-artwork"].front_default?this.imgUrl=this.pokemonInfo.sprites.other["official-artwork"].front_default:this.imgUrl=this.pokemonInfo.sprites.front_default}setVisibleFalse(){this.hideModal.emit()}onLoadImg(){this.imgLoaded=!0}cry(){this.cries.nativeElement.volume=.3,this.cries.nativeElement.play()}};t.\u0275fac=function(a){return new(a||t)(b(S))},t.\u0275cmp=T({type:t,selectors:[["pokedex-modal"]],viewQuery:function(a,o){if(a&1&&le(gt,5),a&2){let h;se(h=pe())&&(o.cries=h.first)}},inputs:{visibleModal:"visibleModal",pokemonInfo:"pokemonInfo"},outputs:{hideModal:"hideModal"},decls:48,vars:33,consts:[["cries",""],[3,"header","modal","visible","closable","focusOnShow","draggable"],["pTemplate","header"],[1,"flex","flex-row","justify-content-center","flex-wrap","gap-5"],[1,"flex","flex-column","align-items-center","justify-content-center","w-15rem","sm:w-20rem","md:w-21rem","lg:w-25rem"],[1,"w-full",3,"load","hidden","src","alt"],["width","20rem","height","20rem",4,"ngIf"],[1,"flex","flex-row","gap-5","mt-3"],[1,"flex","align-items-center","text-md","p-text-secondary","font-bold","block","gap-2"],[1,"text-600","text-lg"],[1,"flex","align-items-center","justify-content-end","gap-3"],["type","audio/ogg",3,"src"],["pButton","","label","Escuchar","icon","pi pi-play text-md",1,"p-1","pr-2",3,"click","outlined","raised"],[1,"w-15rem","sm:w-20rem","md:w-21rem","lg:w-25rem","flex","flex-column","justify-content-between"],[1,"flex","justify-content-evenly","flex-wrap","mt-3","mb-2"],[1,"flex","align-items-center","justify-content-start","gap-2","mb-3","text-xl"],[1,"text-primary"],[1,"flex","flex-column","align-items-center","justify-content-start","mb-3","w-full"],[1,"text-yellow-400","text-xl","font-bold","ml-3"],[1,"border-round-lg","surface-50","px-2","h-5rem","overflow-y-auto"],["styleClass","p-datatable-sm p-datatable-striped",3,"value","tableStyle","scrollable"],["pTemplate","body"],[1,"text-cyan-400","text-xl","font-bold","ml-3"],[1,"border-round-lg","surface-50","px-2","h-9rem","overflow-y-auto"],[1,"flex","justify-content-end","gap-2"],["label","Cerrar","severity","secondary",3,"click"],[1,"flex","align-items-center","justify-content-center","flex-wrap","gap-2"],[1,"text-3xl","md:text-5xl","font-bold"],[1,"flex","align-items-end"],["class","text-md md:text-xl mx-2 mt-2 px-2 py-1 surface-100 border-round-xl",4,"ngFor","ngForOf"],[1,"text-md","md:text-xl","mx-2","mt-2","px-2","py-1","surface-100","border-round-xl"],["width","20rem","height","20rem"]],template:function(a,o){if(a&1){let h=v();s(0,"p-dialog",1),_(1,"titlecase"),g(2,ut,6,4,"ng-template",2),s(3,"div",3)(4,"div",4)(5,"img",5),f("load",function(){return u(h),y(o.onLoadImg())}),l(),g(6,yt,1,0,"p-skeleton",6),s(7,"div",7)(8,"div",8),d(9," Experiencia Base: "),s(10,"span",9),d(11),l()(),s(12,"div",10)(13,"audio",null,0),w(15,"source",11),d(16," Your browser does not support the audio element. "),l(),s(17,"button",12),f("click",function(){return u(h),y(o.cry())}),l()()()(),s(18,"div",13)(19,"div",14)(20,"div",15)(21,"span"),d(22,"Estatura: "),l(),s(23,"span",16),d(24),_(25,"number"),l()(),s(26,"div",15)(27,"span"),d(28,"Peso: "),l(),s(29,"span",16),d(30),_(31,"number"),l()()(),s(32,"div",17)(33,"div")(34,"div",18),d(35,"Habilidades:"),l(),s(36,"div",19)(37,"p-table",20),g(38,xt,4,1,"ng-template",21),l()()()(),s(39,"div",17)(40,"div")(41,"div",22),d(42,"Movimientos:"),l(),s(43,"div",23)(44,"p-table",20),g(45,wt,4,1,"ng-template",21),l()()()(),s(46,"div",24)(47,"p-button",25),f("click",function(){return u(h),y(o.setVisibleFalse())}),l()()()()()}a&2&&(M(E(30,_t)),p("header",x(1,24,o.pokemonInfo.name))("modal",!0)("visible",o.visibleModal)("closable",!1)("focusOnShow",!1)("draggable",!1),r(5),p("hidden",!o.imgLoaded)("src",o.imgUrl,P)("alt",o.pokemonInfo.name),r(),p("ngIf",!o.imgLoaded),r(5),k(" ",o.pokemonInfo.base_experience," "),r(4),p("src",o.pokemonInfo.cries.latest,P),r(2),p("outlined",!0)("raised",!0),r(7),k(" ",x(25,26,o.pokemonInfo.height*10),"cm "),r(6),k(" ",x(31,28,o.pokemonInfo.weight*100),"g "),r(7),p("value",o.pokemonInfo.abilities)("tableStyle",E(31,Ie))("scrollable",!0),r(7),p("value",o.pokemonInfo.moves)("tableStyle",E(32,Ie))("scrollable",!0))},dependencies:[z,L,he,F,D,ke,Ce,A,de,V,B]});let e=t;return e})();function Ct(e,t){if(e&1){let n=v();s(0,"pokedex-pokemons-table",6),f("onPageChange",function(a){u(n);let o=m();return y(o.onTablePageChange(a))})("showDialog",function(a){u(n);let o=m();return y(o.showDialog(a))})("onPokemonSelect",function(a){u(n);let o=m();return y(o.onPokemonSelect.emit(a))}),l()}if(e&2){let n=m();p("gameMode",n.gameMode)("isLoading",n.isLoading)("firstLoadingFlag",n.firstLoadingFlag)("pokemonsCount",n.pokemonsCount)("pokemonsArray",n.pokemonsArray)}}function bt(e,t){if(e&1){let n=v();s(0,"pokedex-by-type-table",7),f("showDialog",function(a){u(n);let o=m();return y(o.showDialog(a))})("onPokemonSelect",function(a){u(n);let o=m();return y(o.onPokemonSelect.emit(a))}),l()}if(e&2){let n=m();p("gameMode",n.gameMode)("isLoading",n.isLoading)("firstLoadingFlag",n.firstLoadingFlag)("pokemonsCount",n.pokemonsCount)("pokemonsArray",n.pokemonsArray)}}function Tt(e,t){if(e&1){let n=v();s(0,"pokedex-modal",8),f("hideModal",function(){u(n);let a=m();return y(a.hideDialog())}),l()}if(e&2){let n=m();p("visibleModal",n.visibleModal)("pokemonInfo",n.pokemonInfo)}}var Ee=(()=>{let t=class t{constructor(i,a){this.pokemonService=i,this.typeService=a,this.offset=0,this.limit=5,this.isLoading=!1,this.firstLoadingFlag=!1,this.pokemonsArray=[],this.pokemonsCount=0,this.visibleModal=!1,this.visibleModalAnimDelay=!1,this.switchTable=!1,this.gameMode=!1,this.onPokemonSelect=new C,this.destroy$=new Q}ngOnInit(){this.getPokemons(this.offset,this.limit)}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}showDialog(i){this.pokemonsArray.forEach(a=>{a.id===i&&(this.pokemonInfo=a)}),this.visibleModal=!0,this.visibleModalAnimDelay=!0}hideDialog(){this.visibleModal=!1,setTimeout(()=>{this.visibleModalAnimDelay=!1},200)}onTablePageChange(i){this.offset=i.first,this.limit=i.rows,this.getPokemons(this.offset,this.limit)}getPokemons(i,a){this.isLoading=!0,this.pokemonService.getPokemons(i,a).pipe(N(this.destroy$)).subscribe(o=>{this.firstLoadingFlag||(this.firstLoadingFlag=!0),this.pokemonsCount=this.pokemonService.pokemonsCount,this.pokemonsArray=o,this.isLoading=!1})}onTypeChange(i){i==="all"?this.switchTable=!1:this.tableSwap(i)}tableSwap(i){this.switchTable=!0,this.getPokemonsByType(i)}getPokemonsByType(i){this.isLoading=!0,this.typeService.getPokemonsByType(i).pipe(N(this.destroy$)).subscribe(a=>{this.pokemonsCount=a.length,this.pokemonsArray=a,this.isLoading=!1})}};t.\u0275fac=function(a){return new(a||t)(b(_e),b(S))},t.\u0275cmp=T({type:t,selectors:[["pokedex-pokedex"]],inputs:{gameMode:"gameMode"},outputs:{onPokemonSelect:"onPokemonSelect"},decls:6,vars:3,consts:[[1,"mb-3","py-1","sm:border-round-xl","surface-50"],[3,"onTypeChange"],[1,"py-3","sm:border-round-xl","surface-50"],[3,"gameMode","isLoading","firstLoadingFlag","pokemonsCount","pokemonsArray","onPageChange","showDialog","onPokemonSelect",4,"ngIf"],[3,"gameMode","isLoading","firstLoadingFlag","pokemonsCount","pokemonsArray","showDialog","onPokemonSelect",4,"ngIf"],[3,"visibleModal","pokemonInfo","hideModal",4,"ngIf"],[3,"onPageChange","showDialog","onPokemonSelect","gameMode","isLoading","firstLoadingFlag","pokemonsCount","pokemonsArray"],[3,"showDialog","onPokemonSelect","gameMode","isLoading","firstLoadingFlag","pokemonsCount","pokemonsArray"],[3,"hideModal","visibleModal","pokemonInfo"]],template:function(a,o){a&1&&(s(0,"div",0)(1,"pokedex-table-settings",1),f("onTypeChange",function(c){return o.onTypeChange(c)}),l()(),s(2,"div",2),g(3,Ct,1,5,"pokedex-pokemons-table",3)(4,bt,1,5,"pokedex-by-type-table",4),l(),g(5,Tt,1,2,"pokedex-modal",5)),a&2&&(r(3),p("ngIf",!o.switchTable),r(),p("ngIf",o.switchTable),r(),p("ngIf",o.visibleModalAnimDelay))},dependencies:[L,ve,Se,Pe,Me]});let e=t;return e})();var Le=(()=>{let t=class t{ngOnInit(){}constructor(i){this.location=i}back(){this.location.back()}};t.\u0275fac=function(a){return new(a||t)(b(me))},t.\u0275cmp=T({type:t,selectors:[["pokedex-pokedex-page"]],decls:8,vars:3,consts:[[1,"flex","justify-content-center"],[1,"w-12","sm:w-11","xl:w-9","xl:px-6","mb-0","flex"],[1,"text-6xl","mb-0"],["icon","pi pi-arrow-left","styleClass","ml-3",3,"onClick","rounded","text","raised"],[1,"flex","flex-column","align-items-center","pb-6"],[1,"w-12","sm:w-11","xl:w-9","sm:border-round-xl","xl:px-6","pt-3","pb-5"]],template:function(a,o){a&1&&(s(0,"div",0)(1,"div",1)(2,"h1",2),d(3," Pokedex "),s(4,"p-button",3),f("onClick",function(){return o.back()}),l()()()(),s(5,"div",4)(6,"div",5),w(7,"pokedex-pokedex"),l()()),a&2&&(r(4),p("rounded",!0)("text",!0)("raised",!0))},dependencies:[F,Ee]});let e=t;return e})();var St=[{path:"",component:Le},{path:"**",redirectTo:""}],Ve=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=G({type:t}),t.\u0275inj=q({imports:[Z.forChild(St),Z]});let e=t;return e})();var vi=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=G({type:t}),t.\u0275inj=q({imports:[ce,be,xe,Ve]});let e=t;return e})();export{S as a,Ee as b,vi as c};