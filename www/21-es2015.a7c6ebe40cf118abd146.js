(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{o5AU:function(l,n,t){"use strict";t.r(n);var a=t("8Y7J");class u{}var e=t("pMnS"),o=t("oBZk"),i=t("ZZ/e"),r=t("SVse"),s=t("njzu");class c{constructor(l,n,t){this.dataservice=l,this.http=n,this.nav=t,this.notDataLoaded=!0,this.imageset=["https://cdn1.newsstate.com/images/andhra-pradesh-boardandhraboardlogo-69_5.jpg","https://i.pinimg.com/474x/93/29/3b/93293b489e5a8fde2ead6ea09439da8a.jpg","https://upload.wikimedia.org/wikipedia/commons/6/61/Assam_State_Emblem.png","https://qph.fs.quoracdn.net/main-qimg-fa115c9727f5b77889383b719f21a173","https://cdn.s3waas.gov.in/s36a10bbd480e4c5573d8f3af73ae0454b/uploads/2018/03/20180326100.gif","https://www.hubert-herald.nl/BhaGoa_bestanden/image008.jpg","https://www.studyandscore.com/images_all/1_Study%20material/General%20knowledge/State%20emblem/Gujarat-state-emblem.jpg","https://www.hubert-herald.nl/BhaHaryana_bestanden/image008.jpg","https://cdn.meramaal.com/wp-content/uploads/2018/06/himachala-Logo.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Seal_of_Jammu_and_Kashmir_color.png/212px-Seal_of_Jammu_and_Kashmir_color.png"]}ngOnInit(){this.http.get("https://api.data.gov.in/resource/fbea81df-d156-4de5-89a3-512401ff8117?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10").subscribe(l=>{this.records=l,this.notDataLoaded=!1})}sendData(l,n,t,a,u,e,o,i){this.dataservice.saveData(l,n,t,a,u,e,o,i),this.nav.navigateForward("/womencrimes")}}var b=t("IheW"),_=a.pb({encapsulation:0,styles:[[""]],data:{}});function p(l){return a.Ib(0,[(l()(),a.rb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),a.rb(1,0,null,null,1,"ion-progress-bar",[["type","indeterminate"]],null,null,null,o.V,o.v)),a.qb(2,49152,null,0,i.X,[a.h,a.k,a.x],{type:[0,"type"]},null)],(function(l,n){l(n,2,0,"indeterminate")}),null)}function d(l){return a.Ib(0,[(l()(),a.rb(0,0,null,null,7,"ion-item",[],null,[[null,"click"]],(function(l,n,t){var a=!0;return"click"===n&&(a=!1!==l.component.sendData(l.context.$implicit.state_ut_col_3_,l.context.$implicit._cases_pending_investigation_from_previous_year_col_4_,l.context.$implicit._cases_reported_during_the_year_col_5_,l.context.$implicit.total_cases_for_investigation_col_6_col_4_5_,l.context.$implicit.final_report___true_but_insufficient_evidence_col_10_,l.context.$implicit.final_report___false_col_11_,l.context.$implicit.final_report___mistake_of_fact_col_12_,l.context.$implicit.total_cases_disposed_off_by_police_col_16_col_8_col_9_col_14_col_15_)&&a),a}),o.P,o.p)),a.qb(1,49152,null,0,i.F,[a.h,a.k,a.x],null,null),(l()(),a.rb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,o.B,o.b)),a.qb(3,49152,null,0,i.d,[a.h,a.k,a.x],null,null),(l()(),a.rb(4,0,null,0,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),a.rb(5,0,null,0,2,"ion-label",[],null,null,null,o.Q,o.q)),a.qb(6,49152,null,0,i.L,[a.h,a.k,a.x],null,null),(l()(),a.Hb(7,0,[" "," "]))],null,(function(l,n){l(n,4,0,a.vb(1,"",n.component.imageset[n.context.index],"")),l(n,7,0,n.context.$implicit.state_ut_col_3_)}))}function m(l){return a.Ib(0,[(l()(),a.rb(0,0,null,null,10,"ion-header",[],null,null,null,o.N,o.n)),a.qb(1,49152,null,0,i.z,[a.h,a.k,a.x],null,null),(l()(),a.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.Z,o.z)),a.qb(3,49152,null,0,i.Ab,[a.h,a.k,a.x],null,null),(l()(),a.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.E,o.e)),a.qb(5,49152,null,0,i.j,[a.h,a.k,a.x],null,null),(l()(),a.rb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.S,o.t)),a.qb(7,49152,null,0,i.P,[a.h,a.k,a.x],null,null),(l()(),a.rb(8,0,null,0,2,"ion-title",[],null,null,null,o.Y,o.y)),a.qb(9,49152,null,0,i.yb,[a.h,a.k,a.x],null,null),(l()(),a.Hb(-1,0,[" Select State or Union Territories "])),(l()(),a.rb(11,0,null,null,7,"ion-content",[],null,null,null,o.K,o.k)),a.qb(12,49152,null,0,i.s,[a.h,a.k,a.x],null,null),(l()(),a.gb(16777216,null,0,1,null,p)),a.qb(14,16384,null,0,r.i,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.rb(15,0,null,0,3,"ion-list",[],null,null,null,o.R,o.r)),a.qb(16,49152,null,0,i.M,[a.h,a.k,a.x],null,null),(l()(),a.gb(16777216,null,0,1,null,d)),a.qb(18,278528,null,0,r.h,[a.M,a.J,a.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,14,0,t.notDataLoaded),l(n,18,0,null==t.records?null:t.records.records)}),null)}function h(l){return a.Ib(0,[(l()(),a.rb(0,0,null,null,1,"app-list",[],null,null,null,m,_)),a.qb(1,114688,null,0,c,[s.a,b.c,i.Fb],null,null)],(function(l,n){l(n,1,0)}),null)}var f=a.nb("app-list",c,h,{},{},[]),g=t("s7LF"),k=t("iInd");t.d(n,"ListPageModuleNgFactory",(function(){return w}));var w=a.ob(u,[],(function(l){return a.Ab([a.Bb(512,a.j,a.Z,[[8,[e.a,f]],[3,a.j],a.v]),a.Bb(4608,r.k,r.j,[a.s,[2,r.r]]),a.Bb(4608,g.c,g.c,[]),a.Bb(4608,i.a,i.a,[a.x,a.g]),a.Bb(4608,i.Eb,i.Eb,[i.a,a.j,a.p]),a.Bb(4608,i.Hb,i.Hb,[i.a,a.j,a.p]),a.Bb(1073742336,r.b,r.b,[]),a.Bb(1073742336,g.b,g.b,[]),a.Bb(1073742336,g.a,g.a,[]),a.Bb(1073742336,i.Cb,i.Cb,[]),a.Bb(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),a.Bb(1073742336,u,u,[]),a.Bb(1024,k.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);