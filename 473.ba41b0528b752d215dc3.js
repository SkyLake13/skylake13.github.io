(self.webpackChunkfrontend_task=self.webpackChunkfrontend_task||[]).push([[473],{7473:(n,t,r)=>{"use strict";r.r(t),r.d(t,{CountryDetailModule:()=>v});var e=r(1116),o=r(2797),c=r(5366),i=r(7064),u=(r(9861),r(5959),r(5416),r(6238),r(7388),r(8378),r(9235),r(1041),r(6278));let a=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[i.uc,i.si,i.BQ,i.us,e.ez],i.uc,i.BQ,i.us,u.t]}),n})();var s=r(7112),p=r(7307),l=r(2852),d=r(3050),g=r(3835),y=r(9996),Z=r(8100),m=r(1671);function f(n,t){if(1&n&&(c.ynx(0),c._UZ(1,"img",3),c.TgZ(2,"a",4),c._uU(3),c.qZA(),c.BQk()),2&n){const n=t.$implicit,r=c.oxw();c.xp6(1),c.s9C("src",n.flags[0],c.LSH),c.xp6(1),c.s9C("routerLink","/"+r.country_route+"/"+n.cca3),c.xp6(1),c.hij(" ",null==n||null==n.name?null:n.name.common," ")}}function h(n,t){if(1&n&&(c.TgZ(0,"a",4),c._uU(1),c.qZA()),2&n){const n=c.oxw();c.s9C("routerLink","/"+n.country_route+"/"+n.countryCode),c.xp6(1),c.hij(" ",n.countryCode," ")}}let x=(()=>{class n{constructor(n){this.store=n,this.country_route=d.cT}get country$(){return this.store.select(Z.U8).pipe((0,y.U)(n=>n.find(n=>n.cca3===this.countryCode)))}}return n.\u0275fac=function(t){return new(t||n)(c.Y36(m.yh))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-bordered-country"]],inputs:{countryCode:"countryCode"},decls:5,vars:4,consts:[[1,"container"],[4,"ngIf","ngIfElse"],["code",""],[3,"src"],[3,"routerLink"]],template:function(n,t){if(1&n&&(c.TgZ(0,"div",0),c.YNc(1,f,4,3,"ng-container",1),c.ALo(2,"async"),c.qZA(),c.YNc(3,h,2,2,"ng-template",null,2,c.W1O)),2&n){const n=c.MAs(4);c.xp6(1),c.Q6J("ngIf",c.lcZ(2,2,t.country$))("ngIfElse",n)}},directives:[e.O5,l.yS],pipes:[e.Ov],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;padding:10px}img[_ngcontent-%COMP%]{height:30px;width:40px;padding-right:10px}a[_ngcontent-%COMP%]{padding-top:5px}"]}),n})();function _(n,t){1&n&&(c.TgZ(0,"div"),c._uU(1," United Nations member "),c.qZA())}function C(n,t){if(1&n&&(c.TgZ(0,"div",13),c._UZ(1,"app-bordered-country",14),c.qZA()),2&n){const n=t.$implicit;c.xp6(1),c.Q6J("countryCode",n)}}let A=(()=>{class n{constructor(){this.country_route=d.cT}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-country-detail-presentation"]],inputs:{country:"country"},decls:36,vars:11,consts:[[1,"container"],[1,"flex-content"],["alt","Flag",1,"flag",3,"src"],[1,"primary"],[1,"capital"],[1,"sub-region"],[1,"region"],[1,"area"],[4,"ngIf"],[1,"borders"],[1,"borders-header"],[1,"border-items-container"],["class","border-item",4,"ngFor","ngForOf"],[1,"border-item"],[3,"countryCode"]],template:function(n,t){1&n&&(c.TgZ(0,"div",0),c.TgZ(1,"mat-card"),c.TgZ(2,"mat-card-header"),c.TgZ(3,"mat-card-title"),c._uU(4),c.qZA(),c.TgZ(5,"mat-card-subtitle"),c._uU(6),c.qZA(),c.qZA(),c.TgZ(7,"mat-card-content"),c.TgZ(8,"div",1),c.TgZ(9,"div"),c._UZ(10,"img",2),c.qZA(),c.TgZ(11,"div",3),c.TgZ(12,"div",4),c.TgZ(13,"span"),c._uU(14),c.qZA(),c.qZA(),c.TgZ(15,"div",5),c.TgZ(16,"span"),c._uU(17),c.qZA(),c.qZA(),c.TgZ(18,"div",6),c.TgZ(19,"span"),c._uU(20),c.qZA(),c.qZA(),c.TgZ(21,"div",7),c.TgZ(22,"span"),c._uU(23),c.ALo(24,"number"),c.qZA(),c.TgZ(25,"span"),c._uU(26," km"),c.TgZ(27,"sup"),c._uU(28,"2"),c.qZA(),c.qZA(),c.qZA(),c.YNc(29,_,2,0,"div",8),c.qZA(),c.qZA(),c._UZ(30,"mat-divider"),c.TgZ(31,"div",9),c.TgZ(32,"div",10),c._uU(33,"Borders"),c.qZA(),c.TgZ(34,"div",11),c.YNc(35,C,2,1,"div",12),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(4),c.Oqu(null==t.country||null==t.country.name?null:t.country.name.common),c.xp6(2),c.Oqu(null==t.country||null==t.country.name?null:t.country.name.official),c.xp6(4),c.s9C("src",null==t.country?null:t.country.flags[0],c.LSH),c.xp6(4),c.Oqu(null==t.country?null:t.country.capital),c.xp6(3),c.Oqu(null==t.country?null:t.country.subregion),c.xp6(3),c.Oqu(null==t.country?null:t.country.region),c.xp6(3),c.Oqu(c.lcZ(24,9,null==t.country?null:t.country.area)),c.xp6(6),c.Q6J("ngIf",null==t.country?null:t.country.unMember),c.xp6(6),c.Q6J("ngForOf",null==t.country?null:t.country.borders))},directives:[o.a8,o.dk,o.n5,o.$j,o.dn,e.O5,u.d,e.sg,x],pipes:[e.JJ],styles:[".container[_ngcontent-%COMP%]{width:70%;margin:32px auto}@media (max-width:460px){.container[_ngcontent-%COMP%]{width:98%;margin:32px auto}.flag[_ngcontent-%COMP%]{width:250px;padding-right:20px}}@media (min-width:461px) and (max-width:615px){.container[_ngcontent-%COMP%]{width:95%;margin:32px auto}.flag[_ngcontent-%COMP%]{width:300px;padding-right:20px}}.flex-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:15px}.flag[_ngcontent-%COMP%]{width:400px;padding-right:20px}.primary[_ngcontent-%COMP%]{margin:0 0 10px}.primary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:10px}.primary[_ngcontent-%COMP%]   .capital[_ngcontent-%COMP%]{font-size:1.4em}.borders[_ngcontent-%COMP%]{padding-top:15px}.borders[_ngcontent-%COMP%]   .borders-header[_ngcontent-%COMP%]{font-size:1.2em}.borders[_ngcontent-%COMP%]   .border-items-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}"],changeDetection:0}),n})();function q(n,t){if(1&n&&(c.ynx(0),c._UZ(1,"app-country-detail-presentation",2),c.BQk()),2&n){const n=t.$implicit;c.xp6(1),c.Q6J("country",n)}}function b(n,t){1&n&&(c.ynx(0),c.TgZ(1,"div",3),c.TgZ(2,"p"),c._uU(3," Sorry, country not found! "),c.qZA(),c.qZA(),c.BQk())}const O=[{path:`:${d.k3}`,component:(()=>{class n{constructor(n,t,r){this.route=n,this.store=t,this.location=r}get country$(){return this.store.select(Z.C2)}get error$(){return this.store.select(Z.xH)}back(){this.location.back()}ngOnInit(){this.dispatchGetCountry()}ngOnDestroy(){var n;this.dispatchClearCountry(),null===(n=this.subscription)||void 0===n||n.unsubscribe()}dispatchGetCountry(){this.subscription=this.route.paramMap.pipe((0,g.h)(n=>n.has(d.k3)),(0,y.U)(n=>n.get(d.k3))).subscribe(n=>null!==n&&this.store.dispatch((0,Z.rZ)({code:n})))}dispatchClearCountry(){this.store.dispatch((0,Z.bi)())}}return n.\u0275fac=function(t){return new(t||n)(c.Y36(l.gz),c.Y36(m.yh),c.Y36(e.Ye))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-country-detail-container"]],decls:8,vars:6,consts:[["mat-icon-button","",3,"click"],[4,"ngIf"],[3,"country"],[1,"not-found"]],template:function(n,t){1&n&&(c.TgZ(0,"mat-toolbar"),c.TgZ(1,"button",0),c.NdJ("click",function(){return t.back()}),c.TgZ(2,"mat-icon"),c._uU(3,"arrow_back"),c.qZA(),c.qZA(),c.qZA(),c.YNc(4,q,2,1,"ng-container",1),c.ALo(5,"async"),c.YNc(6,b,4,0,"ng-container",1),c.ALo(7,"async")),2&n&&(c.xp6(4),c.Q6J("ngIf",c.lcZ(5,2,t.country$)),c.xp6(2),c.Q6J("ngIf",c.lcZ(7,4,t.error$)))},directives:[s.Ye,p.Hw,e.O5,A],pipes:[e.Ov],styles:[".not-found[_ngcontent-%COMP%]{width:90%;margin:100px auto;text-align:center;font-size:1.5em}"],changeDetection:0}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[l.Bz.forChild(O)],l.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[e.ez,T,o.QW,a,s.g0,p.Ps]]}),n})()}}]);