import{n as m,t as l}from"./chunk-Da4-SChG.js";import{$r as re,An as ds$1,At as S2,B as Ib,Bn as em,D as Fg$1,Dr as nl$1,En as cn,Fi as zd$1,Ft as Ug$1,Ht as W,Ii as zg$1,J as Jw,Jr as ql$1,L as Hw,Lt as VB,O as Fw,On as cw,Pn as ea$1,Qr as rb,R as I,Rn as eh$1,Tn as cm,Tt as Rg$1,Un as et,Wt as Wd$1,Yr as qw,Yt as Xu$1,_ as DS,a as Ab,c as BB,cn as Zu$1,ct as Og$1,d as Bg$1,dn as _2,dr as je,ft as Oy$1,gr as kt,h as Bw,hr as kg$1,jr as ob,ki as xi,mr as kI,n as $g$1,or as il$1,pn as _e,pr as jw,q as Ju$1,qt as Xg$1,st as OE,v as Db,vi as um,vt as Pw,wi as vy$1,yr as lm,zn as el$1}from"./chunk-Dxd1qupI.js";import{t as ke$1}from"./chunk-DbKkIo1b.js";import{T as Mi$1}from"./chunk-qZnnpw69.js";import"./chunk-k6sZ0Lgv.js";import"./chunk-_ImxA8k0.js";import{Q as n,U as Qe,Z as a,z as W$1}from"./main-LPUUHBVD.js";import"./chunk-Dgfq2YCx.js";import{t as z}from"./chunk-d9oGl20J.js";import"./chunk-B8iK-3W5.js";import"./chunk-1Rd3_8-0.js";import{i as Z,n as B,r as F,t as A}from"./chunk-BW8dm-Oj.js";import"./chunk-CS_g4ek9.js";import{t as M}from"./chunk-DCdwivXN.js";import{t as e}from"./chunk-DT6KXDXF.js";import{n as h}from"./chunk-DgHnQV1M.js";import{t as h$1}from"./chunk-DQCr-2-J.js";import"./chunk-BtfGib65.js";import{t as a$1}from"./chunk-BQuhWPF3.js";import{i as p,n as h$2,t as c}from"./chunk-CknidBpK.js";import{n as u,t as d}from"./chunk-DqjsibYP.js";import{t as s}from"./chunk-C-m0lUTJ.js";import{t as a$2}from"./chunk-Cm7t4NVm.js";import{t as c$1}from"./chunk-DjBYjM1V.js";import{t as J}from"./chunk-ByNT_ldd.js";var rr=class i{audio=null;play(e,t=70){!e||typeof Audio>`u`||(this.audio?.pause(),this.audio=new Audio(e),this.audio.volume=Math.min(100,Math.max(0,t))/100,this.audio.play().catch(()=>{}))}stop(){this.audio?.pause(),this.audio=null}static ɵfac=function(t){return new(t||i)};static ɵprov=W({token:i,factory:i.ɵfac,providedIn:`root`})};function Ed(i,e){if(i&1&&(Xu$1(0,`p`,4),Ab(1),el$1()),i&2){let t=Jw();kI(),cm(t.message)}}function Td(i,e){if(i&1&&(Xu$1(0,`span`,5),Ab(1),el$1()),i&2){let t=Jw();kI(),cm(t.amount)}}function Cd(i,e){if(i&1&&(Xu$1(0,`div`,0)(1,`article`,1)(2,`span`,2),Ab(3),el$1(),Xu$1(4,`strong`,3),Ab(5),el$1(),Fw(6,Ed,2,1,`p`,4),Fw(7,Td,2,1,`span`,5),el$1()()),i&2){let t=e,n=Jw();kI(3),cm(n.typeLabel()),kI(2),cm(t.username||`Зритель`),kI(),Pw(t.message?6:-1),kI(),Pw(t.amount?7:-1)}}var Ad={follow:`Новый фолловер`,subscribe:`Новая подписка`,gift:`Подарочная подписка`,resub:`Продление подписки`,cheer:`Битсы`,raid:`Рейд`,hype_train:`Хайп-трейн`,goal:`Цель достигнута`,stream_online:`Стрим начался`,stream_offline:`Стрим завершён`};var Os=class i{service=I(h$1);audio=I(rr);destroyRef=I(re);tick=cn(Date.now());lastPlayedId=``;state=_2(je(0,2e3).pipe(ql$1(()=>this.service.getState().pipe(ea$1(()=>vy$1(null))))),{initialValue:null});latest=il$1(()=>this.state()?.events?.[0]??null);active=il$1(()=>{let e=this.latest(),t=this.state()?.settings;return!e||!t||this.tick()-new Date(e.createdAt).getTime()>t.durationSeconds*1e3?null:e});typeLabel=il$1(()=>Ad[this.active()?.type??``]??`Событие`);constructor(){je(0,500).pipe(DS(this.destroyRef)).subscribe(()=>this.tick.set(Date.now())),xi(()=>{let e=this.state()?.settings,t=this.latest();!e?.soundEnabled||!e.soundUrl||!t||t.id===this.lastPlayedId||(this.lastPlayedId=t.id,this.audio.play(e.soundUrl,e.soundVolume))})}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-alerts-overlay`]],decls:1,vars:1,consts:[[1,`overlay-stage`],[1,`alert-card`],[1,`alert-kicker`],[1,`alert-user`],[1,`alert-message`],[1,`alert-amount`]],template:function(t,n){if(t&1&&Fw(0,Cd,8,4,`div`,0),t&2){let r;Pw((r=n.active())?0:-1,r)}},styles:[`[_nghost-%COMP%]{display:block;padding:16px;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.overlay-stage[_ngcontent-%COMP%]{display:flex;justify-content:center}.alert-card[_ngcontent-%COMP%]{display:flex;gap:4px;flex-direction:column;align-items:center;width:min(420px,100%);padding:18px 24px;border:1px solid rgba(255,255,255,.12);border-radius:18px;background:#121218eb;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);box-shadow:0 18px 50px #00000073;text-align:center;animation:_ngcontent-%COMP%_alert-in .35s ease-out}.alert-kicker[_ngcontent-%COMP%]{color:var(--%NS%accent-primary);font:700 12px/16px var(--%NS%font-ui);letter-spacing:.16em;text-transform:uppercase}.alert-user[_ngcontent-%COMP%]{font:700 24px/32px var(--%NS%font-ui)}.alert-message[_ngcontent-%COMP%]{margin:0;color:var(--%NS%text-secondary);font:500 14px/20px var(--%NS%font-ui)}.alert-amount[_ngcontent-%COMP%]{color:var(--%NS%status-positive);font:700 18px/24px var(--%NS%font-ui)}@keyframes _ngcontent-%COMP%_alert-in{0%{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}@media(width<=560px){.overlay-stage[_ngcontent-%COMP%]{padding:8px}}`]})};var Us=class i{service=I(h$1);audio=I(rr);destroyRef=I(re);lastPlayedId=``;state=_2(je(0,2e3).pipe(ql$1(()=>this.service.getState().pipe(ea$1(()=>vy$1(null))))),{initialValue:null});constructor(){xi(()=>{let e=this.state()?.settings,t=this.state()?.events?.[0]??null;!e?.soundEnabled||!e.soundUrl||!t||t.id===this.lastPlayedId||(this.lastPlayedId=t.id,this.audio.play(e.soundUrl,e.soundVolume))}),this.destroyRef.onDestroy(()=>this.audio.stop())}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-audio-overlay`]],decls:1,vars:0,consts:[[`aria-hidden`,`true`]],template:function(t,n){t&1&&Fg$1(0,`span`,0)},styles:[`[_nghost-%COMP%]{display:block;overflow:hidden;width:0;height:0}`]})};var Rd=(i,e)=>e.id;var Pd=(i,e)=>e.set_id+e.version;function Id(i,e){if(i&1&&kg$1(0,`img`,7),i&2){let t=Jw().$implicit,n=Jw(2);Rg$1(`src`,e),Og$1(`title`,n.badgeLabel(t.set_id))}}function Nd(i,e){if(i&1&&kg$1(0,`tui-icon`,8),i&2){let t=Jw().$implicit,n=Jw(2);Rg$1(`icon`,n.badgeIcon(t.set_id)),Og$1(`title`,n.badgeLabel(t.set_id))}}function Dd(i,e){if(i&1&&Fw(0,Id,1,2,`img`,7)(1,Nd,1,2,`tui-icon`,8),i&2){let t,n=e.$implicit,r=Jw(2);Pw((t=r.badgeUrl(n.set_id,n.version))?0:1,t)}}function Ld(i,e){if(i&1&&kg$1(0,`span`,11),i&2){let t=Jw().$implicit;Xg$1(`background-image`,`url(`+t.url+`)`),Og$1(`aria-label`,t.text)}}function Od(i,e){if(i&1&&(ds$1(0,`span`,10),Ab(1),Ju$1()),i&2){let t=Jw().$implicit;kI(),cm(t.text)}}function Ud(i,e){if(i&1&&(ds$1(0,`span`),Ab(1),Ju$1()),i&2){let t=Jw().$implicit;kI(),cm(t.text)}}function Fd(i,e){if(i&1&&Fw(0,Ld,1,3,`span`,9)(1,Od,2,1,`span`,10)(2,Ud,2,1,`span`),i&2){let t=e.$implicit;Pw(t.type===`emote`?0:t.type===`mention`?1:2)}}function Bd(i,e){if(i&1&&(ds$1(0,`div`,2)(1,`span`,4),Bw(2,Dd,2,1,null,null,Pd),Ju$1(),ds$1(4,`span`,5),Ab(5),Ju$1(),ds$1(6,`span`,6),Bw(7,Fd,3,1,null,null,jw),Ju$1()()),i&2){let t=e.$implicit;kI(2),Hw(t.badges),kI(2),Xg$1(`color`,t.color),kI(),cm(t.author),kI(2),Hw(t.segments)}}function kd(i,e){i&1&&(ds$1(0,`span`,3),Ab(1,`Чат пока пуст`),Ju$1())}var zd={broadcaster:`5527c58c-fb7d-422d-b71b-f309dcb85cc1`,moderator:`3267646d-33f0-4b17-b3df-f923a41db1d0`,vip:`b817aba4-fad8-49e2-b88a-7cc744dfa6ec`,subscriber:`5d9f2208-5dd8-11e7-8513-2ff4adfae661`,premium:`bbbe0db0-a598-423e-86d0-f9fb98ca1933`,partner:`d12a2e27-16f6-41d0-ab77-b780518f00a3`,staff:`d97c37bd-a6f5-4c38-8f57-4e4bef88af34`};var Vd={broadcaster:`Стример`,moderator:`Модератор`,vip:`VIP`,subscriber:`Подписчик`,premium:`Prime`,partner:`Партнёр Twitch`,staff:`Сотрудник Twitch`};var Fs=class i{service=I(u);configService=I(h);config=_2(this.configService.watch(`chat`).pipe(ea$1(()=>vy$1({config:{}}))),{initialValue:{config:{}}});animated=il$1(()=>this.config().config.chatAnimation!==!1);channelMode=il$1(()=>this.config().config.chatChannelMode===`original`?`original`:`all`);messages=_2(je(0,2e3).pipe(ql$1(()=>this.service.recent(50,this.channelMode()).pipe(_e(e=>e.messages),ea$1(()=>vy$1(null)))),Oy$1((e,t)=>t??e,[])),{initialValue:[]});badges=_2(je(0,6e4).pipe(ql$1(()=>this.service.badges().pipe(ea$1(()=>vy$1(null))))),{initialValue:null});emotes=_2(je(0,6e4).pipe(ql$1(()=>this.service.emotes().pipe(ea$1(()=>vy$1(null))))),{initialValue:null});rows=il$1(()=>this.messages().map(e=>({id:e.message_id,author:e.author.display_name||e.author.login,color:/^#[0-9a-f]{6}$/i.test(e.color?.trim()??``)?e.color.trim():null,badges:e.badges??[],authorId:e.author.id,segments:d(e,this.emotes()?.sevenTV.emotes??{},this.emotes()?.twitchTemplate??`https://static-cdn.jtvnw.net/emoticons/v2/%s/default/dark/2.0`)})));badgeUrl(e,t){let n=this.badges()?.badges[`${e}/${t}`];if(n)return n;let r=zd[e];return r?`https://static-cdn.jtvnw.net/badges/v1/${r}/2`:null}badgeIcon(e){return e===`broadcaster`?`@tui.crown`:e===`moderator`?`@tui.shield`:e===`vip`?`@tui.gem`:e.startsWith(`subscriber`)?`@tui.star`:e===`premium`?`@tui.zap`:e===`partner`?`@tui.badge-check`:e===`staff`?`@tui.wrench`:`@tui.badge`}badgeLabel(e){return Vd[e]??e}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-chat-overlay`]],decls:5,vars:3,consts:[[1,`overlay-stage`],[1,`chat-card`],[1,`chat-line`],[1,`jk-caption`],[1,`chat-badges`],[1,`chat-author`],[1,`chat-text`],[1,`chat-badge`,3,`src`],[1,`chat-badge-icon`,3,`icon`],[`role`,`img`,1,`chat-emote`,3,`background-image`],[1,`chat-mention`],[`role`,`img`,1,`chat-emote`]],template:function(t,n){t&1&&(ds$1(0,`div`,0)(1,`article`,1),Bw(2,Bd,9,3,`div`,2,Rd,!1,kd,2,0,`span`,3),Ju$1()()),t&2&&(kI(),em(`no-animation`,!n.animated()),kI(),Hw(n.rows()))},dependencies:[z],styles:[`[_nghost-%COMP%]{display:block;padding:16px;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.overlay-stage[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}.chat-card[_ngcontent-%COMP%]{display:flex;gap:6px;flex-direction:column;width:min(520px,100%);padding:14px 18px;border:1px solid rgba(255,255,255,.1);border-radius:16px;background:#121218db;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}.chat-line[_ngcontent-%COMP%]{display:flex;gap:4px;align-items:baseline;font:500 14px/20px var(--%NS%font-ui);overflow-wrap:anywhere;animation:_ngcontent-%COMP%_chat-line-in .18s cubic-bezier(.2,.8,.3,1) both;animation-duration:var(--%NS%chat-animation-duration, .18s)}@keyframes _ngcontent-%COMP%_chat-line-in{0%{opacity:0;transform:translateY(5px)}}.chat-badges[_ngcontent-%COMP%]{display:inline-flex;gap:2px;align-items:center;flex:0 0 auto}.chat-badge[_ngcontent-%COMP%]{width:16px;height:16px;object-fit:contain}.chat-badge-icon[_ngcontent-%COMP%]{width:14px;height:14px;color:var(--%NS%text-secondary);font-size:14px}.chat-author[_ngcontent-%COMP%]{color:var(--%NS%accent-secondary);font-weight:700;margin-inline-end:6px}.chat-author.broadcaster[_ngcontent-%COMP%]{color:var(--%NS%accent-primary)}.chat-text[_ngcontent-%COMP%]{color:var(--%NS%text-primary)}.chat-emote[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:22px;height:22px;background-size:contain;margin-block:-3px}.chat-card.no-animation[_ngcontent-%COMP%]   .chat-line[_ngcontent-%COMP%]{animation:none}.chat-mention[_ngcontent-%COMP%]{display:inline-block;padding:0 4px;border-radius:5px;background:color-mix(in srgb,var(--%NS%accent-primary) 22%,transparent);color:var(--%NS%accent-primary);font-weight:700}`]})};var Zu=0;var kl=1;var Ju=2;var hs=1;var Xa=2;var Rr=3;var Ii=0;var yn=1;var jn=2;var Qn=0;var Pr=1;var zl=2;var Vl=3;var Gl=4;var Ku=5;var Ji=100;var ju=101;var Qu=102;var eh=103;var th=104;var nh=200;var ih=201;var rh=202;var sh=203;var Hl=204;var Wl=205;var ah=206;var oh=207;var lh=208;var ch=209;var uh=210;var hh=211;var dh=212;var fh=213;var ph=214;var ha=0;var da=1;var fa=2;var xr=3;var pa=4;var ma=5;var ga=6;var _a=7;var Xl=0;var mh=1;var gh=2;var zn=0;var ql=1;var Yl=2;var $l=3;var Zl=4;var Jl=5;var Kl=6;var jl=7;var Ql=300;var Ni=301;var Ki=302;var qa=303;var Ya=304;var ds=306;var vr=1e3;var $n=1001;var ya=1002;var tn=1003;var _h=1004;var fs=1005;var rn=1006;var $a=1007;var Di=1008;var bn=1009;var ec=1010;var tc=1011;var Ir=1012;var Za=1013;var Vn=1014;var Gn=1015;var Hn=1016;var Ja=1017;var Ka=1018;var Nr=1020;var nc=35902;var ic=35899;var rc=1021;var sc=1022;var Pn=1023;var Zn=1026;var Li=1027;var ac=1028;var ja=1029;var Oi=1030;var Qa=1031;var eo=1033;var ps=33776;var ms=33777;var gs=33778;var _s=33779;var to=35840;var no=35841;var io=35842;var ro=35843;var so=36196;var ao=37492;var oo=37496;var lo=37488;var co=37489;var ys=37490;var uo=37491;var ho=37808;var fo=37809;var po=37810;var mo=37811;var go=37812;var _o=37813;var yo=37814;var xo=37815;var vo=37816;var Mo=37817;var bo=37818;var So=37819;var wo=37820;var Eo=37821;var To=36492;var Co=36494;var Ao=36495;var Ro=36283;var Po=36284;var xs=36285;var Io=36286;var Wr=2300;var xa=2301;var la=2302;var Nl=2303;var Dl=2400;var Ll=2401;var Ol=2402;var yh=3200;var No=0;var xh=1;var hi=``;var Qt=`srgb`;var Xr=`srgb-linear`;var qr=`linear`;var mt=`srgb`;var ca=7680;var vh=519;var Mh=512;var bh=513;var Sh=514;var Do=515;var wh=516;var Eh=517;var Lo=518;var Th=519;var Ch=35044;var oc=`300 es`;var Fn=2e3;var Mr=2001;function Gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yr(i){return document.createElementNS(`http://www.w3.org/1999/xhtml`,i)}function Ah(){let i=Yr(`canvas`);return i.style.display=`block`,i}var wu={};var br=null;function lc(...i){let e=`THREE.`+i.shift();br?br(`log`,e,...i):console.log(e,...i)}function Rh(i){let e=i[0];if(typeof e==`string`&&e.startsWith(`TSL:`)){let t=i[1];t&&t.isStackTrace?i[0]+=` `+t.getLocation():i[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return i}function Fe(...i){i=Rh(i);let e=`THREE.`+i.shift();if(br)br(`warn`,e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ke(...i){i=Rh(i);let e=`THREE.`+i.shift();if(br)br(`error`,e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Wi(...i){let e=i.join(` `);e in wu||(wu[e]=!0,Fe(...i))}function Ph(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Ih={[ha]:da,[fa]:ga,[pa]:_a,[xr]:ma,[da]:ha,[ga]:fa,[_a]:pa,[ma]:xr};var Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};var un=[`00`,`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`0a`,`0b`,`0c`,`0d`,`0e`,`0f`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`1a`,`1b`,`1c`,`1d`,`1e`,`1f`,`20`,`21`,`22`,`23`,`24`,`25`,`26`,`27`,`28`,`29`,`2a`,`2b`,`2c`,`2d`,`2e`,`2f`,`30`,`31`,`32`,`33`,`34`,`35`,`36`,`37`,`38`,`39`,`3a`,`3b`,`3c`,`3d`,`3e`,`3f`,`40`,`41`,`42`,`43`,`44`,`45`,`46`,`47`,`48`,`49`,`4a`,`4b`,`4c`,`4d`,`4e`,`4f`,`50`,`51`,`52`,`53`,`54`,`55`,`56`,`57`,`58`,`59`,`5a`,`5b`,`5c`,`5d`,`5e`,`5f`,`60`,`61`,`62`,`63`,`64`,`65`,`66`,`67`,`68`,`69`,`6a`,`6b`,`6c`,`6d`,`6e`,`6f`,`70`,`71`,`72`,`73`,`74`,`75`,`76`,`77`,`78`,`79`,`7a`,`7b`,`7c`,`7d`,`7e`,`7f`,`80`,`81`,`82`,`83`,`84`,`85`,`86`,`87`,`88`,`89`,`8a`,`8b`,`8c`,`8d`,`8e`,`8f`,`90`,`91`,`92`,`93`,`94`,`95`,`96`,`97`,`98`,`99`,`9a`,`9b`,`9c`,`9d`,`9e`,`9f`,`a0`,`a1`,`a2`,`a3`,`a4`,`a5`,`a6`,`a7`,`a8`,`a9`,`aa`,`ab`,`ac`,`ad`,`ae`,`af`,`b0`,`b1`,`b2`,`b3`,`b4`,`b5`,`b6`,`b7`,`b8`,`b9`,`ba`,`bb`,`bc`,`bd`,`be`,`bf`,`c0`,`c1`,`c2`,`c3`,`c4`,`c5`,`c6`,`c7`,`c8`,`c9`,`ca`,`cb`,`cc`,`cd`,`ce`,`cf`,`d0`,`d1`,`d2`,`d3`,`d4`,`d5`,`d6`,`d7`,`d8`,`d9`,`da`,`db`,`dc`,`dd`,`de`,`df`,`e0`,`e1`,`e2`,`e3`,`e4`,`e5`,`e6`,`e7`,`e8`,`e9`,`ea`,`eb`,`ec`,`ed`,`ee`,`ef`,`f0`,`f1`,`f2`,`f3`,`f4`,`f5`,`f6`,`f7`,`f8`,`f9`,`fa`,`fb`,`fc`,`fd`,`fe`,`ff`];var ua=Math.PI/180;var va=180/Math.PI;function vs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+`-`+un[e&255]+un[e>>8&255]+`-`+un[e>>16&15|64]+un[e>>24&255]+`-`+un[t&63|128]+un[t>>8&255]+`-`+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Wd(i,e){return(i%e+e)%e}function ll(i,e,t){return(1-t)*i+t*e}function Br(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error(`THREE.MathUtils: Invalid component type.`)}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error(`THREE.MathUtils: Invalid component type.`)}}var rt=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var qt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3],u=s[a+0],m=s[a+1],_=s[a+2],M=s[a+3];if(f!==M||c!==u||l!==m||h!==_){let p=c*u+l*m+h*_+f*M;p<0&&(u=-u,m=-m,_=-_,M=-M,p=-p);let d=1-o;if(p<.9995){let b=Math.acos(p),A=Math.sin(b);d=Math.sin(d*b)/A,o=Math.sin(o*b)/A,c=c*d+u*o,l=l*d+m*o,h=h*d+_*o,f=f*d+M*o}else{c=c*d+u*o,l=l*d+m*o,h=h*d+_*o,f=f*d+M*o;let b=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=b,l*=b,h*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[a],u=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+h*f+c*m-l*u,e[t+1]=c*_+h*u+l*f-o*m,e[t+2]=l*_+h*m+o*u-c*f,e[t+3]=h*_-o*f-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),f=o(s/2),u=c(n/2),m=c(r/2),_=c(s/2);switch(a){case`XYZ`:this._x=u*h*f+l*m*_,this._y=l*m*f-u*h*_,this._z=l*h*_+u*m*f,this._w=l*h*f-u*m*_;break;case`YXZ`:this._x=u*h*f+l*m*_,this._y=l*m*f-u*h*_,this._z=l*h*_-u*m*f,this._w=l*h*f+u*m*_;break;case`ZXY`:this._x=u*h*f-l*m*_,this._y=l*m*f+u*h*_,this._z=l*h*_+u*m*f,this._w=l*h*f-u*m*_;break;case`ZYX`:this._x=u*h*f-l*m*_,this._y=l*m*f+u*h*_,this._z=l*h*_-u*m*f,this._w=l*h*f+u*m*_;break;case`YZX`:this._x=u*h*f+l*m*_,this._y=l*m*f+u*h*_,this._z=l*h*_-u*m*f,this._w=l*h*f-u*m*_;break;case`XZY`:this._x=u*h*f-l*m*_,this._y=l*m*f-u*h*_,this._z=l*h*_+u*m*f,this._w=l*h*f+u*m*_;break;default:Fe(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var O=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};var cl=new O;var Eu=new qt;var He=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],m=n[5],_=n[8],M=r[0],p=r[3],d=r[6],b=r[1],A=r[4],v=r[7],S=r[2],w=r[5],C=r[8];return s[0]=a*M+o*b+c*S,s[3]=a*p+o*A+c*w,s[6]=a*d+o*v+c*C,s[1]=l*M+h*b+f*S,s[4]=l*p+h*A+f*w,s[7]=l*d+h*v+f*C,s[2]=u*M+m*b+_*S,s[5]=u*p+m*A+_*w,s[8]=u*d+m*v+_*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*s,m=l*s-a*c,_=t*f+n*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=f*M,e[1]=(r*l-h*n)*M,e[2]=(o*n-r*a)*M,e[3]=u*M,e[4]=(h*t-r*c)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Wi(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ul.makeScale(e,t)),this}rotate(e){return Wi(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return Wi(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};var ul=new He;var Tu=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322);var Cu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xd(){let i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?qr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Wi(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Wi(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:e,whitePoint:n,transfer:qr,toXYZ:Tu,fromXYZ:Cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Tu,fromXYZ:Cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}var it=Xd();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var sr;var Ma=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{sr===void 0&&(sr=Yr(`canvas`)),sr.width=e.width,sr.height=e.height;let r=sr.getContext(`2d`);e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Yr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=li(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}};var qd=0;var Sr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(hl(r[a].image)):s.push(hl(r[a]))}else s=hl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function hl(i){return typeof HTMLImageElement<`u`&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&i instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&i instanceof ImageBitmap?Ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Fe(`Texture: Unable to serialize Texture.`),{})}var Yd=0;var dl=new O;var _n=class i extends Jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$n,r=$n,s=rn,a=Di,o=Pn,c=bn,l=i.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=vs(),this.name=``,this.source=new Sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dl).x}get height(){return this.source.getSize(dl).y}get depth(){return this.source.getSize(dl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==Ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Ql;_n.DEFAULT_ANISOTROPY=1;var Pt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],m=c[5],_=c[9],M=c[2],p=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,v=(m+1)/2,S=(d+1)/2,w=(h+u)/4,C=(f+M)/4,y=(_+p)/4;return A>v&&A>S?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=w/n,s=C/n):v>S?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=y/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=C/s,r=y/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-_)*(p-_)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(f-M)/b,this.z=(u-h)/b,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var ba=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s=new _n({width:e,height:t,depth:n.depth}),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Sr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}};var Mn=class extends ba{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};var $r=class extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sa=class extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var yt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,c,l,h,f,u,m,_,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,f,u,m,_,M,p)}set(e,t,n,r,s,a,o,c,l,h,f,u,m,_,M,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=_,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ar.setFromMatrixColumn(e,0).length(),s=1/ar.setFromMatrixColumn(e,1).length(),a=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order===`XYZ`){let u=a*h,m=a*f,_=o*h,M=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=u-M*l,t[9]=-o*c,t[2]=M-u*l,t[6]=_+m*l,t[10]=a*c}else if(e.order===`YXZ`){let u=c*h,m=c*f,_=l*h,M=l*f;t[0]=u+M*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=M+u*o,t[10]=a*c}else if(e.order===`ZXY`){let u=c*h,m=c*f,_=l*h,M=l*f;t[0]=u-M*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order===`ZYX`){let u=a*h,m=a*f,_=o*h,M=o*f;t[0]=c*h,t[4]=_*l-m,t[8]=u*l+M,t[1]=c*f,t[5]=M*l+u,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order===`YZX`){let u=a*c,m=a*l,_=o*c,M=o*l;t[0]=c*h,t[4]=M-u*f,t[8]=_*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*f+_,t[10]=u-M*f}else if(e.order===`XZY`){let u=a*c,m=a*l,_=o*c,M=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+M,t[5]=a*h,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*h,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($d,e,Zd)}lookAt(e,t,n){let r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),vi.crossVectors(n,Sn),vi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),vi.crossVectors(n,Sn)),vi.normalize(),Bs.crossVectors(Sn,vi),r[0]=vi.x,r[4]=Bs.x,r[8]=Sn.x,r[1]=vi.y,r[5]=Bs.y,r[9]=Sn.y,r[2]=vi.z,r[6]=Bs.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],m=n[13],_=n[2],M=n[6],p=n[10],d=n[14],b=n[3],A=n[7],v=n[11],S=n[15],w=r[0],C=r[4],y=r[8],E=r[12],P=r[1],L=r[5],F=r[9],V=r[13],N=r[2],G=r[6],J=r[10],K=r[14],oe=r[3],Y=r[7],te=r[11],re=r[15];return s[0]=a*w+o*P+c*N+l*oe,s[4]=a*C+o*L+c*G+l*Y,s[8]=a*y+o*F+c*J+l*te,s[12]=a*E+o*V+c*K+l*re,s[1]=h*w+f*P+u*N+m*oe,s[5]=h*C+f*L+u*G+m*Y,s[9]=h*y+f*F+u*J+m*te,s[13]=h*E+f*V+u*K+m*re,s[2]=_*w+M*P+p*N+d*oe,s[6]=_*C+M*L+p*G+d*Y,s[10]=_*y+M*F+p*J+d*te,s[14]=_*E+M*V+p*K+d*re,s[3]=b*w+A*P+v*N+S*oe,s[7]=b*C+A*L+v*G+S*Y,s[11]=b*y+A*F+v*J+S*te,s[15]=b*E+A*V+v*K+S*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],m=e[14],_=e[3],M=e[7],p=e[11],d=e[15],b=c*m-l*u,A=o*m-l*f,v=o*u-c*f,S=a*m-l*h,w=a*u-c*h,C=a*f-o*h;return t*(M*b-p*A+d*v)-n*(_*b-p*S+d*w)+r*(_*A-M*S+d*C)-s*(_*v-M*w+p*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(s*h-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],m=e[11],_=e[12],M=e[13],p=e[14],d=e[15],b=t*o-n*a,A=t*c-r*a,v=t*l-s*a,S=n*c-r*o,w=n*l-s*o,C=r*l-s*c,y=h*M-f*_,E=h*p-u*_,P=h*d-m*_,L=f*p-u*M,F=f*d-m*M,V=u*d-m*p,N=b*V-A*F+v*L+S*P-w*E+C*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/N;return e[0]=(o*V-c*F+l*L)*G,e[1]=(r*F-n*V-s*L)*G,e[2]=(M*C-p*w+d*S)*G,e[3]=(u*w-f*C-m*S)*G,e[4]=(c*P-a*V-l*E)*G,e[5]=(t*V-r*P+s*E)*G,e[6]=(p*v-_*C-d*A)*G,e[7]=(h*C-u*v+m*A)*G,e[8]=(a*F-o*P+l*y)*G,e[9]=(n*P-t*F-s*y)*G,e[10]=(_*w-M*v+d*b)*G,e[11]=(f*v-h*w-m*b)*G,e[12]=(o*E-a*L-c*y)*G,e[13]=(t*L-n*E+r*y)*G,e[14]=(M*A-_*S-p*b)*G,e[15]=(h*S-f*A+u*b)*G,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,f=o+o,u=s*l,m=s*h,_=s*f,M=a*h,p=a*f,d=o*f,b=c*l,A=c*h,v=c*f,S=n.x,w=n.y,C=n.z;return r[0]=(1-(M+d))*S,r[1]=(m+v)*S,r[2]=(_-A)*S,r[3]=0,r[4]=(m-v)*w,r[5]=(1-(u+d))*w,r[6]=(p+b)*w,r[7]=0,r[8]=(_+A)*C,r[9]=(p-b)*C,r[10]=(1-(u+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ar.set(r[0],r[1],r[2]).length(),o=ar.set(r[4],r[5],r[6]).length(),c=ar.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Dn.copy(this);let l=1/a,h=1/o,f=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,t.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Fn,c=!1){let l=this.elements,h=2*s/(t-e),f=2*s/(n-r),u=(t+e)/(t-e),m=(n+r)/(n-r),_,M;if(c)_=s/(a-s),M=a*s/(a-s);else if(o===Fn)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Mr)_=-a/(a-s),M=-a*s/(a-s);else throw new Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Fn,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-r),u=-(t+e)/(t-e),m=-(n+r)/(n-r),_,M;if(c)_=1/(a-s),M=a/(a-s);else if(o===Fn)_=-2/(a-s),M=-(a+s)/(a-s);else if(o===Mr)_=-1/(a-s),M=-s/(a-s);else throw new Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};var ar=new O;var Dn=new yt;var $d=new O(0,0,0);var Zd=new O(1,1,1);var vi=new O;var Bs=new O;var Sn=new O;var Au=new yt;var Ru=new qt;var ci=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],m=r[10];switch(t){case`XYZ`:this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case`YXZ`:this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case`ZXY`:this._x=Math.asin(st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case`ZYX`:this._y=Math.asin(-st(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case`YZX`:this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case`XZY`:this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Fe(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER=`XYZ`;var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var Jd=0;var Pu=new O;var or=new qt;var ni=new yt;var ks=new O;var kr=new O;var Kd=new O;var jd=new qt;var Iu=new O(1,0,0);var Nu=new O(0,1,0);var Du=new O(0,0,1);var Lu={type:`added`};var Qd={type:`removed`};var lr={type:`childadded`,child:null};var fl={type:`childremoved`,child:null};var sn=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=vs(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new ci,n=new qt,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new He}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Du,e)}translateOnAxis(e,t){return Pu.copy(e).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(kr,ks,this.up):ni.lookAt(ks,kr,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),or.setFromRotationMatrix(ni),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),lr.child=e,this.dispatchEvent(lr),lr.child=null):ke(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qd),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,jd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>m(l({},o),{boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>l({},o)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};sn.DEFAULT_UP=new O(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=class extends sn{constructor(){super(),this.isGroup=!0,this.type=`Group`}};var ef={type:`move`};var wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(l&&e.hand){a=!0;for(let M of e.hand.values()){let p=t.getJointPose(M,n),d=this._getHandJoint(l,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=l.joints[`index-finger-tip`],f=l.joints[`thumb-tip`],u=h.position.distanceTo(f.position);l.inputState.pinching&&u>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ef)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};var Mi={h:0,s:0,l:0};var zs={h:0,s:0,l:0};function pl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var $e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r==`number`?this.setHex(r):typeof r==`string`&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=Wd(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=pl(a,s,e+1/3),this.g=pl(a,s,e),this.b=pl(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&Fe(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case`hsl`:case`hsla`:if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Fe(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){let n=Nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe(`Color: Unknown color `+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return it.workingToColorSpace(hn.copy(this),e),Math.round(st(hn.r*255,0,255))*65536+Math.round(st(hn.g*255,0,255))*256+Math.round(st(hn.b*255,0,255))}getHexString(e=Qt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(hn.copy(this),t);let n=hn.r,r=hn.g,s=hn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Qt){it.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,r=hn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(zs);let n=ll(Mi.h,zs.h,t),r=ll(Mi.s,zs.s,t),s=ll(Mi.l,zs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};var hn=new $e;$e.NAMES=Nh;var Xi=class extends sn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ln=new O;var ii=new O;var ml=new O;var ri=new O;var cr=new O;var ur=new O;var Ou=new O;var gl=new O;var _l=new O;var yl=new O;var xl=new Pt;var vl=new Pt;var Ml=new Pt;var oi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ln.subVectors(r,t),ii.subVectors(n,t),ml.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(ii),c=Ln.dot(ml),l=ii.dot(ii),h=ii.dot(ml),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;let u=1/f,m=(l*c-o*h)*u,_=(a*h-o*c)*u;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,ri)===null?(c.x=0,c.y=0,`z`in c&&(c.z=0),`w`in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ri.x),c.addScaledVector(a,ri.y),c.addScaledVector(o,ri.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return xl.setScalar(0),vl.setScalar(0),Ml.setScalar(0),xl.fromBufferAttribute(e,t),vl.fromBufferAttribute(e,n),Ml.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(xl,s.x),a.addScaledVector(vl,s.y),a.addScaledVector(Ml,s.z),a}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),ii.subVectors(e,t),Ln.cross(ii).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Ln.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;cr.subVectors(r,n),ur.subVectors(s,n),gl.subVectors(e,n);let c=cr.dot(gl),l=ur.dot(gl);if(c<=0&&l<=0)return t.copy(n);_l.subVectors(e,r);let h=cr.dot(_l),f=ur.dot(_l);if(h>=0&&f<=h)return t.copy(r);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(cr,a);yl.subVectors(e,s);let m=cr.dot(yl),_=ur.dot(yl);if(_>=0&&m<=_)return t.copy(s);let M=m*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(ur,o);let p=h*_-m*f;if(p<=0&&f-h>=0&&m-_>=0)return Ou.subVectors(s,r),o=(f-h)/(f-h+(m-_)),t.copy(r).addScaledVector(Ou,o);let d=1/(p+M+u);return a=M*d,o=u*d,t.copy(n).addScaledVector(cr,a).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Ei=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute(`position`);if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Gs.subVectors(this.max,zr),hr.subVectors(e.a,zr),dr.subVectors(e.b,zr),fr.subVectors(e.c,zr),bi.subVectors(dr,hr),Si.subVectors(fr,dr),zi.subVectors(hr,fr);let t=[0,-bi.z,bi.y,0,-Si.z,Si.y,0,-zi.z,zi.y,bi.z,0,-bi.x,Si.z,0,-Si.x,zi.z,0,-zi.x,-bi.y,bi.x,0,-Si.y,Si.x,0,-zi.y,zi.x,0];return!bl(t,hr,dr,fr,Gs)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,hr,dr,fr,Gs))?!1:(Hs.crossVectors(bi,Si),t=[Hs.x,Hs.y,Hs.z],bl(t,hr,dr,fr,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};var si=[new O,new O,new O,new O,new O,new O,new O,new O];var On=new O;var Vs=new Ei;var hr=new O;var dr=new O;var fr=new O;var bi=new O;var Si=new O;var zi=new O;var zr=new O;var Gs=new O;var Hs=new O;var Vi=new O;function bl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vi.fromArray(i,s);let o=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Vt=new O;var Ws=new rt;var tf=0;var Rn=class extends Jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tf++}),this.name=``,this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ch,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}};var Jr=class extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Kr=class extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var nf=new Ei;var Vr=new O;var Sl=new O;var qi=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):nf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Sl)),this.expandByPoint(Vr.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};var rf=0;var An=new yt;var wl=new sn;var pr=new O;var wn=new Ei;var Gr=new Ei;var jt=new O;var an=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=vs(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?Kr:Jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute(`position`,new Mt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Fe(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(wn.min,Gr.min),wn.expandByPoint(jt),jt.addVectors(wn.max,Gr.max),wn.expandByPoint(jt)):(wn.expandByPoint(Gr.min),wn.expandByPoint(Gr.max))}wn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)jt.fromBufferAttribute(o,l),c&&(pr.fromBufferAttribute(e,l),jt.add(pr)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ke(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Rn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new O,c[y]=new O;let l=new O,h=new O,f=new O,u=new rt,m=new rt,_=new rt,M=new O,p=new O;function d(y,E,P){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,P),u.fromBufferAttribute(s,y),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,P),h.sub(l),f.sub(l),m.sub(u),_.sub(u);let L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(L),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(L),o[y].add(M),o[E].add(M),o[P].add(M),c[y].add(p),c[E].add(p),c[P].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,E=b.length;y<E;++y){let P=b[y],L=P.start,F=P.count;for(let V=L,N=L+F;V<N;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let A=new O,v=new O,S=new O,w=new O;function C(y){S.fromBufferAttribute(r,y),w.copy(S);let E=o[y];A.copy(E),A.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(w,E);let L=v.dot(c[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,L)}for(let y=0,E=b.length;y<E;++y){let P=b[y],L=P.start,F=P.count;for(let V=L,N=L+F;V<N;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,h=new O,f=new O;if(e)for(let u=0,m=e.count;u<m;u+=3){let _=e.getX(u+0),M=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),m=0,_=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*h;for(let d=0;d<h;d++)u[_++]=l[m++]}return new Rn(u,h,f)}if(this.index===null)return Fe(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],m=e(u,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],f=s[l];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}};var El=new O;var sf=new O;var af=new He;var Un=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=El.subVectors(n,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(El),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||af.getNormalMatrix(e),r=this.coplanarPoint(El).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};var of=0;var Kn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=vs(),this.name=``,this.type=`Material`,this.blending=Pr,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Wl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Un().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}};var ai=new O;var Tl=new O;var Xs=new O;var qs=new O;var jr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Tl.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),qs.copy(this.origin).sub(Tl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Xs),o=qs.dot(this.direction),c=-qs.dot(Xs),l=qs.lengthSq(),h=Math.abs(1-a*a),f,u,m,_;if(h>0)if(f=a*c-o,u=a*o-c,_=s*h,f>=0)if(u>=-_)if(u<=_){let M=1/h;f*=M,u*=M,m=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l):u<=_?(f=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Tl).addScaledVector(Xs,u),m}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,m=e.z-a.z,_=t.x-a.x,M=t.y-a.y,p=t.z-a.z,d=n.x-a.x,b=n.y-a.y,A=n.z-a.z,v=Math.abs(c),S=Math.abs(l),w=Math.abs(h),C,y,E,P,L,F,V,N,G,J,K,oe;if(v>=S&&v>=w?(E=c,F=f,G=_,oe=d,c>=0?(C=l,y=h,P=u,L=m,V=M,N=p,J=b,K=A):(C=h,y=l,P=m,L=u,V=p,N=M,J=A,K=b)):S>=w?(E=l,F=u,G=M,oe=b,l>=0?(C=h,y=c,P=m,L=f,V=p,N=_,J=A,K=d):(C=c,y=h,P=f,L=m,V=_,N=p,J=d,K=A)):(E=h,F=m,G=p,oe=A,h>=0?(C=c,y=l,P=f,L=u,V=_,N=M,J=d,K=b):(C=l,y=c,P=u,L=f,V=M,N=_,J=b,K=d)),E===0)return null;let Y=C/E,te=y/E,re=1/E,Le=P-Y*F,Ne=L-te*F,bt=V-Y*G,at=N-te*G,ct=J-Y*oe,$=K-te*oe,ee=ct*at-$*bt,Se=Le*$-Ne*ct,We=bt*Ne-at*Le;if(r){if(ee<0||Se<0||We<0)return null}else if((ee<0||Se<0||We<0)&&(ee>0||Se>0||We>0))return null;let Me=ee+Se+We;if(Me===0)return null;let Ke=re*(ee*F+Se*G+We*oe);return(Me>0?Ke<0:Ke>0)?null:this.at(Ke/Me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var Qr=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Uu=new yt;var Gi=new jr;var Ys=new qi;var Fu=new O;var $s=new O;var Zs=new O;var Js=new O;var Cl=new O;var Ks=new O;var Bu=new O;var js=new O;var Yt=class extends sn{constructor(e=new an,t=new Qr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Ks.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],f=s[c];h!==0&&(Cl.fromBufferAttribute(f,e),a?Ks.addScaledVector(Cl,h):Ks.addScaledVector(Cl.sub(t),h))}t.add(Ks)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(Ys.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Ys,Fu)===null||Gi.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Uu.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(Uu),(n.boundingBox===null||Gi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){let p=u[_],d=a[p.materialIndex],b=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=b,S=A;v<S;v+=3){let w=o.getX(v),C=o.getX(v+1),y=o.getX(v+2);r=Qs(this,d,e,n,l,h,f,w,C,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=_,d=M;p<d;p+=3){let b=o.getX(p),A=o.getX(p+1),v=o.getX(p+2);r=Qs(this,a,e,n,l,h,f,b,A,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){let p=u[_],d=a[p.materialIndex],b=Math.max(p.start,m.start),A=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=b,S=A;v<S;v+=3){let w=v,C=v+1,y=v+2;r=Qs(this,d,e,n,l,h,f,w,C,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let _=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=_,d=M;p<d;p+=3){let b=p,A=p+1,v=p+2;r=Qs(this,a,e,n,l,h,f,b,A,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function lf(i,e,t,n,r,s,a,o){let c;if(e.side===yn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Ii,o),c===null)return null;js.copy(o),js.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(js);return l<t.near||l>t.far?null:{distance:l,point:js.clone(),object:i}}function Qs(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,$s),i.getVertexPosition(c,Zs),i.getVertexPosition(l,Js);let h=lf(i,e,t,n,$s,Zs,Js,Bu);if(h){let f=new O;oi.getBarycoord(Bu,$s,Zs,Js,f),r&&(h.uv=oi.getInterpolatedAttribute(r,o,c,l,f,new rt)),s&&(h.uv1=oi.getInterpolatedAttribute(s,o,c,l,f,new rt)),a&&(h.normal=oi.getInterpolatedAttribute(a,o,c,l,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new O,materialIndex:0};oi.getNormal($s,Zs,Js,u.normal),h.face=u,h.barycoord=f}return h}var wa=class extends _n{constructor(e=null,t=1,n=1,r,s,a,o,c,l=tn,h=tn,f,u){super(null,a,o,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=new qi;var cf=new rt(.5,.5);var ea=new O;var Er=class{constructor(e=new Un,t=new Un,n=new Un,r=new Un,s=new Un,a=new Un){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],m=s[7],_=s[8],M=s[9],p=s[10],d=s[11],b=s[12],A=s[13],v=s[14],S=s[15];if(r[0].setComponents(l-a,m-h,d-_,S-b).normalize(),r[1].setComponents(l+a,m+h,d+_,S+b).normalize(),r[2].setComponents(l+o,m+f,d+M,S+A).normalize(),r[3].setComponents(l-o,m-f,d-M,S-A).normalize(),n)r[4].setComponents(c,u,p,v).normalize(),r[5].setComponents(l-c,m-u,d-p,S-v).normalize();else if(r[4].setComponents(l-c,m-u,d-p,S-v).normalize(),t===Fn)r[5].setComponents(l+c,m+u,d+p,S+v).normalize();else if(t===Mr)r[5].setComponents(c,u,p,v).normalize();else throw new Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);return Hi.radius=.7071067811865476+cf.distanceTo(e.center),Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ea.x=r.normal.x>0?e.max.x:e.min.x,ea.y=r.normal.y>0?e.max.y:e.min.y,ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yi=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};var Ea=new O;var Ta=new O;var ku=new yt;var Hr=new jr;var ta=new qi;var Al=new O;var zu=new O;var Ca=class extends sn{constructor(e=new an,t=new Yi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ea.fromBufferAttribute(t,r-1),Ta.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ea.distanceTo(Ta);e.setAttribute(`lineDistance`,new Mt(n,1))}else Fe(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),ta.radius+=s,e.ray.intersectsSphere(ta)===!1)return;ku.copy(r).invert(),Hr.copy(e.ray).applyMatrix4(ku);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=m,p=_-1;M<p;M+=l){let d=h.getX(M),b=h.getX(M+1),A=na(this,e,Hr,c,d,b,M);A&&t.push(A)}if(this.isLineLoop){let M=h.getX(_-1),p=h.getX(m),d=na(this,e,Hr,c,M,p,_-1);d&&t.push(d)}}else{let m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=m,p=_-1;M<p;M+=l){let d=na(this,e,Hr,c,M,M+1,M);d&&t.push(d)}if(this.isLineLoop){let M=na(this,e,Hr,c,_-1,m,_-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function na(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Ea.fromBufferAttribute(o,r),Ta.fromBufferAttribute(o,s),t.distanceSqToSegment(Ea,Ta,Al,zu)>n)return;Al.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Al);if(!(l<e.near||l>e.far))return{distance:l,point:zu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Vu=new O;var Gu=new O;var Tr=class extends Ca{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Vu.fromBufferAttribute(t,r),Gu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Vu.distanceTo(Gu);e.setAttribute(`lineDistance`,new Mt(n,1))}else Fe(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}};var es=class extends _n{constructor(e=[],t=Ni,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ti=class extends _n{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends _n{constructor(e,t,n=Vn,r,s,a,o=tn,c=tn,l,h=Zn,f=1){if(h!==Zn&&h!==Li)throw new Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:f},r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};var Aa=class extends Ci{constructor(e,t=Vn,n=Ni,r,s,a=tn,o=tn,c,l=Zn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};var ts=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Cr=class i extends an{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,m=0;_(`z`,`y`,`x`,-1,-1,n,t,e,a,s,0),_(`z`,`y`,`x`,1,-1,n,t,-e,a,s,1),_(`x`,`z`,`y`,1,1,e,n,t,r,a,2),_(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),_(`x`,`y`,`z`,1,-1,e,t,n,r,s,4),_(`x`,`y`,`z`,-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute(`position`,new Mt(l,3)),this.setAttribute(`normal`,new Mt(h,3)),this.setAttribute(`uv`,new Mt(f,2));function _(M,p,d,b,A,v,S,w,C,y,E){let P=v/C,L=S/y,F=v/2,V=S/2,N=w/2,G=C+1,J=y+1,K=0,oe=0,Y=new O;for(let te=0;te<J;te++){let re=te*L-V;for(let Le=0;Le<G;Le++)Y[M]=(Le*P-F)*b,Y[p]=re*A,Y[d]=N,l.push(Y.x,Y.y,Y.z),Y[M]=0,Y[p]=0,Y[d]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Le/C),f.push(1-te/y),K+=1}for(let te=0;te<y;te++)for(let re=0;re<C;re++){let Le=u+re+G*te,Ne=u+re+G*(te+1),bt=u+(re+1)+G*(te+1),at=u+(re+1)+G*te;c.push(Le,Ne,at),c.push(Ne,bt,at),oe+=6}o.addGroup(m,oe,E),m+=oe,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ns=class i extends an{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],f=[],u=[],m=[],_=0,M=[],p=n/2,d=0;b(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute(`position`,new Mt(f,3)),this.setAttribute(`normal`,new Mt(u,3)),this.setAttribute(`uv`,new Mt(m,2));function b(){let v=new O,S=new O,w=0,C=(t-e)/n;for(let y=0;y<=s;y++){let E=[],P=y/s,L=P*(t-e)+e;for(let F=0;F<=r;F++){let V=F/r,N=V*c+o,G=Math.sin(N),J=Math.cos(N);S.x=L*G,S.y=-P*n+p,S.z=L*J,f.push(S.x,S.y,S.z),v.set(G,C,J).normalize(),u.push(v.x,v.y,v.z),m.push(V,1-P),E.push(_++)}M.push(E)}for(let y=0;y<r;y++)for(let E=0;E<s;E++){let P=M[E][y],L=M[E+1][y],F=M[E+1][y+1],V=M[E][y+1];(e>0||E!==0)&&(h.push(P,L,V),w+=3),(t>0||E!==s-1)&&(h.push(L,F,V),w+=3)}l.addGroup(d,w,0),d+=w}function A(v){let S=_,w=new rt,C=new O,y=0,E=v===!0?e:t,P=v===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,p*P,0),u.push(0,P,0),m.push(.5,.5),_++;let L=_;for(let F=0;F<=r;F++){let N=F/r*c+o,G=Math.cos(N),J=Math.sin(N);C.x=E*J,C.y=p*P,C.z=E*G,f.push(C.x,C.y,C.z),u.push(0,P,0),w.x=G*.5+.5,w.y=J*.5*P+.5,m.push(w.x,w.y),_++}for(let F=0;F<r;F++){let V=S+F,N=L+F;v===!0?h.push(N,N+1,V):h.push(N+1,N,V),y+=3}l.addGroup(d,y,v===!0?1:2),d+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ia=new O;var ra=new O;var Rl=new O;var sa=new oi;var is=class extends an{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ua*t),a=e.getIndex(),o=e.getAttribute(`position`),c=a?a.count:o.count,l=[0,0,0],h=[`a`,`b`,`c`],f=new Array(3),u={},m=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);let{a:M,b:p,c:d}=sa;if(M.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),d.fromBufferAttribute(o,l[2]),sa.getNormal(Rl),f[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,f[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,f[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){let A=(b+1)%3,v=f[b],S=f[A],w=sa[h[b]],C=sa[h[A]],y=`${v}_${S}`,E=`${S}_${v}`;E in u&&u[E]?(Rl.dot(u[E].normal)<=s&&(m.push(w.x,w.y,w.z),m.push(C.x,C.y,C.z)),u[E]=null):y in u||(u[y]={index0:l[b],index1:l[A],normal:Rl.clone()})}}for(let _ in u)if(u[_]){let{index0:M,index1:p}=u[_];ia.fromBufferAttribute(o,M),ra.fromBufferAttribute(o,p),m.push(ia.x,ia.y,ia.z),m.push(ra.x,ra.y,ra.z)}this.setAttribute(`position`,new Mt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ui=class i extends an{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,f=e/o,u=t/c,m=[],_=[],M=[],p=[];for(let d=0;d<h;d++){let b=d*u-a;for(let A=0;A<l;A++){let v=A*f-s;_.push(v,-b,0),M.push(0,0,1),p.push(A/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<o;b++){let A=b+l*d,v=b+l*(d+1),S=b+1+l*(d+1),w=b+1+l*d;m.push(A,v,w),m.push(v,S,w)}this.setIndex(m),this.setAttribute(`position`,new Mt(_,3)),this.setAttribute(`normal`,new Mt(M,3)),this.setAttribute(`uv`,new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var rs=class i extends an{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new O,u=new O,m=[],_=[],M=[],p=[];for(let d=0;d<=n;d++){let b=[],A=d/n,v=a+A*o,S=e*Math.cos(v),w=Math.sqrt(e*e-S*S),C=0;d===0&&a===0?C=.5/t:d===n&&c===Math.PI&&(C=-.5/t);for(let y=0;y<=t;y++){let E=y/t,P=r+E*s;f.x=-w*Math.cos(P),f.y=S,f.z=w*Math.sin(P),_.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),p.push(E+C,1-A),b.push(l++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){let A=h[d][b+1],v=h[d][b],S=h[d+1][b],w=h[d+1][b+1];(d!==0||a>0)&&m.push(A,v,w),(d!==n-1||c<Math.PI)&&m.push(v,S,w)}this.setIndex(m),this.setAttribute(`position`,new Mt(_,3)),this.setAttribute(`normal`,new Mt(M,3)),this.setAttribute(`uv`,new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ss=class i extends an{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],l=[],h=[],f=[],u=new O,m=new O,_=new O;for(let M=0;M<=n;M++){let p=a+M/n*o;for(let d=0;d<=r;d++){let b=d/r*s;m.x=(e+t*Math.cos(p))*Math.cos(b),m.y=(e+t*Math.cos(p))*Math.sin(b),m.z=t*Math.sin(p),l.push(m.x,m.y,m.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),_.subVectors(m,u).normalize(),h.push(_.x,_.y,_.z),f.push(d/r),f.push(M/n)}}for(let M=1;M<=n;M++)for(let p=1;p<=r;p++){let d=(r+1)*M+p-1,b=(r+1)*(M-1)+p-1,A=(r+1)*(M-1)+p,v=(r+1)*M+p;c.push(d,b,v),c.push(b,A,v)}this.setIndex(c),this.setAttribute(`position`,new Mt(l,3)),this.setAttribute(`normal`,new Mt(h,3)),this.setAttribute(`uv`,new Mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var as=class extends Kn{constructor(e){super(),this.isShadowMaterial=!0,this.type=`ShadowMaterial`,this.color=new $e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function ji(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Hu(r))r.isRenderTargetTexture?(Fe(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Hu(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=ji(i[t]);for(let r in n)e[r]=n[r]}return e}function Hu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function uf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var Dh={clone:ji,merge:dn};var hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;var df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;var En=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:`t`,value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:`c`,value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:`v2`,value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:`v3`,value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:`v4`,value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:`m3`,value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:`m4`,value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new $e().setHex(r.value);break;case`v2`:this.uniforms[n].value=new rt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new O().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Pt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new He().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new yt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};var Ra=class extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}};var kn=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Pa=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var Ia=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT==`number`?new e(i):Array.prototype.slice.call(i)}function Pl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ai=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}};var Na=class extends Ai{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ll:s=e,o=2*t-n;break;case Ol:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ll:a=e,c=2*n-t;break;case Ol:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-t)/(r-t),M=_*_,p=M*_,d=-u*p+2*u*M-u*_,b=(1+u)*p+(-1.5-2*u)*M+(-.5+u)*_+1,A=(-1-m)*p+(1.5+m)*M+.5*_,v=m*p-m*M;for(let S=0;S!==o;++S)s[S]=d*a[h+S]+b*a[l+S]+A*a[c+S]+v*a[f+S];return s}};var Da=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),f=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*f+a[c+u]*h;return s}};var La=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}};var Oa=class extends Ai{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(n-t)/(r-t),M=1-_;for(let p=0;p!==o;++p)s[p]=a[l+p]*M+a[c+p]*_;return s}let u=o*2,m=e-1;for(let _=0;_!==o;++_){let M=a[l+_],p=a[c+_],d=m*u+_*2,b=f[d],A=f[d+1],v=e*u+_*2,S=h[v],w=h[v+1],C=pf(n,t,b,S,r);s[_]=Lh(C,M,A,w,p)}return s}};function Lh(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function ff(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function pf(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Lh(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=ff(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Tn=class{constructor(e,t,n,r){if(e===void 0)throw new Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw new Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=mr(t,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mr(e.times,Array),values:mr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Pl(e.settings)&&(n.settings={inTangents:mr(e.settings.inTangents,Array),outTangents:mr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Wr:t=this.InterpolantFactoryMethodDiscrete;break;case xa:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break;case Nl:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let n=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe(`KeyframeTrack:`,n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return xa;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Pl(this.settings)&&(Wu(this.settings.inTangents,e),Wu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(ke(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c==`number`&&isNaN(c)){ke(`KeyframeTrack: Time is not a valid number.`,this,o,c),e=!1;break}if(a!==null&&a>c){ke(`KeyframeTrack: Out of order keys.`,this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Hd(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){ke(`KeyframeTrack: Value is not a valid number.`,this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===la,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let f=o*n,u=f-n,m=f+n;for(let _=0;_!==n;++_){let M=t[f+_];if(M!==t[u+_]||M!==t[m+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[f+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Pl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Wu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Tn.prototype.ValueTypeName=``;Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=xa;var Ri=class extends Tn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName=`bool`;Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Wr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};Ua.prototype.ValueTypeName=`color`;var Fa=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};Fa.prototype.ValueTypeName=`number`;var Ba=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)qt.slerpFlat(s,0,a,l-o,a,l,c);return s}};var os=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}};os.prototype.ValueTypeName=`quaternion`;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Tn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName=`string`;Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Wr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};ka.prototype.ValueTypeName=`vector`;var za=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize(`NFC`),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let m=l[f],_=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};var Oh=new za;var Va=class{constructor(e){this.manager=e!==void 0?e:Oh,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Va.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ls=class extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var $i=class extends ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};var Il=new yt;var Xu=new O;var qu=new O;var Ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xu),qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Il,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Mr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var aa=new O;var oa=new qt;var Yn=new O;var cs=class extends sn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(aa,oa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(aa,oa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};var wi=new O;var Yu=new rt;var $u=new rt;var en=class extends cs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Yu,$u),t.subVectors($u,Yu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ar=class extends cs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ul=class extends Ga{constructor(){super(new Ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};var Zi=class extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Ul}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gr=-90;var _r=1;var Ha=class extends sn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new en(gr,_r,e,t);r.layers=this.layers,this.add(r);let s=new en(gr,_r,e,t);s.layers=this.layers,this.add(s);let a=new en(gr,_r,e,t);a.layers=this.layers,this.add(a);let o=new en(gr,_r,e,t);o.layers=this.layers,this.add(o);let c=new en(gr,_r,e,t);c.layers=this.layers,this.add(c);let l=new en(gr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}};var Wa=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var uc=`\\[\\]\\.:\\/`;var mf=new RegExp(`[`+uc+`]`,`g`);var hc=`[^`+uc+`]`;var gf=`[^`+uc.replace(`\\.`,``)+`]`;var _f=/((?:WC+[\/:])*)/.source.replace(`WC`,hc);var yf=/(WCOD+)?/.source.replace(`WCOD`,gf);var xf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace(`WC`,hc);var vf=/\.(WC+)(?:\[(.+)\])?/.source.replace(`WC`,hc);var Mf=new RegExp(`^`+_f+yf+xf+vf+`$`);var bf=[`material`,`materials`,`bones`,`map`];var Fl=class{constructor(e,t,n){let r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};var At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(mf,``)}static parseTrackName(e){let t=Mf.exec(e);if(t===null)throw new Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);bf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(n){let l=t.objectIndex;switch(n){case`materials`:if(!e.material){ke(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.materials){ke(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}e=e.material.materials;break;case`bones`:if(!e.skeleton){ke(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case`map`:if(`map`in e){e=e.map;break}if(!e.material){ke(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.map){ke(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}e=e.material.map;break;default:if(e[n]===void 0){ke(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ke(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;ke(`PropertyBinding: Trying to update property for track: `+l+`.`+r+` but it wasn't found.`,e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r===`morphTargetInfluences`){if(!e.geometry){ke(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!e.geometry.morphAttributes){ke(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Fl;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var us=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Fe(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}});function dc(i,e,t,n){let r=Sf(n);switch(t){case rc:return i*e;case ac:return i*e/r.components*r.byteLength;case ja:return i*e/r.components*r.byteLength;case Oi:return i*e*2/r.components*r.byteLength;case Qa:return i*e*2/r.components*r.byteLength;case sc:return i*e*3/r.components*r.byteLength;case Pn:return i*e*4/r.components*r.byteLength;case eo:return i*e*4/r.components*r.byteLength;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gs:case _s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:case ro:return Math.max(i,16)*Math.max(e,8)/4;case to:case io:return Math.max(i,8)*Math.max(e,8)/2;case so:case ao:case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:case ys:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case To:case Co:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ro:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xs:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sf(i){switch(i){case bn:case ec:return{byteLength:1,components:1};case Ir:case tc:case Hn:return{byteLength:2,components:1};case Ja:case Ka:return{byteLength:2,components:4};case Vn:case Za:case Gn:return{byteLength:4,components:1};case nc:case ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}}));typeof window<`u`&&(window.__THREE__?Fe(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function id(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ef(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<`u`&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<f.length;m++){let _=f[u],M=f[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,f[u]=M)}f.length=u+1;for(let m=0,_=f.length;m<_;m++){let M=f[m];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Je={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`};var ge={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}};var ti={basic:{uniforms:dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:dn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:dn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:dn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:dn([ge.points,ge.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:dn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:dn([ge.common,ge.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:dn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:dn([ge.sprite,ge.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:dn([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:dn([ge.lights,ge.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ti.physical={uniforms:dn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Oo={r:0,b:0,g:0};var ag=new yt;var rd=new He;rd.set(-1,0,0,0,1,0,0,0,1);function og(i,e,t,n,r,s){let a=new $e(0),o=r===!0?0:1,c,l,h=null,f=0,u=null;function m(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let v=b.backgroundBlurriness>0;A=e.get(A,v)}return A}function _(b){let A=!1,v=m(b);v===null?p(a,o):v&&v.isColor&&(p(v,1),A=!0);let S=i.xr.getEnvironmentBlendMode();S===`additive`?t.buffers.color.setClear(0,0,0,1,s):S===`alpha-blend`&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,A){let v=m(A);v&&(v.isCubeTexture||v.mapping===ds)?(l===void 0&&(l=new Yt(new Cr(1,1,1),new En({name:`BackgroundCubeMaterial`,uniforms:ji(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(S,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(rd),l.material.toneMapped=it.getTransfer(v.colorSpace)!==mt,(h!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Yt(new ui(2,2),new En({name:`BackgroundMaterial`,uniforms:ji(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=it.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,A){b.getRGB(Oo,cc(i)),t.buffers.color.setClear(Oo.r,Oo.g,Oo.b,A,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:_,addToRenderList:M,dispose:d}}function lg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,a=!1;function o(L,F,V,N,G){let J=!1,K=f(L,N,V,F);s!==K&&(s=K,l(s.object)),J=m(L,N,V,G),J&&_(L,N,V,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(L,F,V,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function f(L,F,V,N){let G=N.wireframe===!0,J=n[F.id];J===void 0&&(J={},n[F.id]=J);let K=L.isInstancedMesh===!0?L.id:0,oe=J[K];oe===void 0&&(oe={},J[K]=oe);let Y=oe[V.id];Y===void 0&&(Y={},oe[V.id]=Y);let te=Y[G];return te===void 0&&(te=u(c()),Y[G]=te),te}function u(L){let F=[],V=[],N=[];for(let G=0;G<t;G++)F[G]=0,V[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:N,object:L,attributes:{},index:null}}function m(L,F,V,N){let G=s.attributes,J=F.attributes,K=0,oe=V.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let re=G[Y],Le=J[Y];if(Le===void 0&&(Y===`instanceMatrix`&&L.instanceMatrix&&(Le=L.instanceMatrix),Y===`instanceColor`&&L.instanceColor&&(Le=L.instanceColor)),re===void 0||re.attribute!==Le||Le&&re.data!==Le.data)return!0;K++}return s.attributesNum!==K||s.index!==N}function _(L,F,V,N){let G={},J=F.attributes,K=0,oe=V.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let re=J[Y];re===void 0&&(Y===`instanceMatrix`&&L.instanceMatrix&&(re=L.instanceMatrix),Y===`instanceColor`&&L.instanceColor&&(re=L.instanceColor));let Le={};Le.attribute=re,re&&re.data&&(Le.data=re.data),G[Y]=Le,K++}s.attributes=G,s.attributesNum=K,s.index=N}function M(){let L=s.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function p(L){d(L,0)}function d(L,F){let V=s.newAttributes,N=s.enabledAttributes,G=s.attributeDivisors;V[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),G[L]!==F&&(i.vertexAttribDivisor(L,F),G[L]=F)}function b(){let L=s.newAttributes,F=s.enabledAttributes;for(let V=0,N=F.length;V<N;V++)F[V]!==L[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(L,F,V,N,G,J,K){K===!0?i.vertexAttribIPointer(L,F,V,G,J):i.vertexAttribPointer(L,F,V,N,G,J)}function v(L,F,V,N){M();let G=N.attributes,J=V.getAttributes(),K=F.defaultAttributeValues;for(let oe in J){let Y=J[oe];if(Y.location>=0){let te=G[oe];if(te===void 0&&(oe===`instanceMatrix`&&L.instanceMatrix&&(te=L.instanceMatrix),oe===`instanceColor`&&L.instanceColor&&(te=L.instanceColor)),te!==void 0){let re=te.normalized,Le=te.itemSize,Ne=e.get(te);if(Ne===void 0)continue;let bt=Ne.buffer,at=Ne.type,ct=Ne.bytesPerElement,$=at===i.INT||at===i.UNSIGNED_INT||te.gpuType===Za;if(te.isInterleavedBufferAttribute){let ee=te.data,Se=ee.stride,We=te.offset;if(ee.isInstancedInterleavedBuffer){for(let Me=0;Me<Y.locationSize;Me++)d(Y.location+Me,ee.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Me=0;Me<Y.locationSize;Me++)p(Y.location+Me);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let Me=0;Me<Y.locationSize;Me++)A(Y.location+Me,Le/Y.locationSize,at,re,Se*ct,(We+Le/Y.locationSize*Me)*ct,$)}else{if(te.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)d(Y.location+ee,te.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<Y.locationSize;ee++)p(Y.location+ee);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let ee=0;ee<Y.locationSize;ee++)A(Y.location+ee,Le/Y.locationSize,at,re,Le*ct,Le/Y.locationSize*ee*ct,$)}}else if(K!==void 0){let re=K[oe];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(Y.location,re);break;case 3:i.vertexAttrib3fv(Y.location,re);break;case 4:i.vertexAttrib4fv(Y.location,re);break;default:i.vertexAttrib1fv(Y.location,re)}}}}b()}function S(){E();for(let L in n){let F=n[L];for(let V in F){let N=F[V];for(let G in N){let J=N[G];for(let K in J)h(J[K].object),delete J[K];delete N[G]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let F=n[L.id];for(let V in F){let N=F[V];for(let G in N){let J=N[G];for(let K in J)h(J[K].object),delete J[K];delete N[G]}}delete n[L.id]}function C(L){for(let F in n){let V=n[F];for(let N in V){let G=V[N];if(G[L.id]===void 0)continue;let J=G[L.id];for(let K in J)h(J[K].object),delete J[K];delete G[L.id]}}}function y(L){for(let F in n){let V=n[F],N=L.isInstancedMesh===!0?L.id:0,G=V[N];if(G!==void 0){for(let J in G){let K=G[J];for(let oe in K)h(K[oe].object),delete K[oe];delete G[J]}delete V[N],Object.keys(V).length===0&&delete n[F]}}}function E(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function cg(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ug(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has(`EXT_texture_filter_anisotropic`)===!0){let C=e.get(`EXT_texture_filter_anisotropic`);r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let y=C===Hn&&(e.has(`EXT_color_buffer_half_float`)||e.has(`EXT_color_buffer_float`));return!(C!==bn&&C!==Gn&&!y&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C===`highp`){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return`highp`;C=`mediump`}return C===`mediump`&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=t.precision!==void 0?t.precision:`highp`,h=c(l);h!==l&&(Fe(`WebGLRenderer:`,l,`not supported, using`,h,`instead.`),l=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has(`EXT_clip_control`);t.reversedDepthBuffer===!0&&u===!1&&Fe(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:v,maxSamples:S,samples:w}}function hg(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Un,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||r;return r=u,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,m){let _=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!r||_===null||_.length===0||s&&!p)s?h(null):l();else{let b=s?0:n,A=b*4,v=d.clippingState||null;c.value=v,v=h(_,u,A,m);for(let S=0;S!==A;++S)v[S]=t[S];d.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,m,_){let M=f!==null?f.length:0,p=null;if(M!==0){if(p=c.value,_!==!0||p===null){let d=m+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,v=m;A!==M;++A,v+=4)a.copy(f[A]).applyMatrix4(b,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}var Lr=4;var dg=6;var fg=20;var pg=256;var Ms=new Ar;var Uh=new $e;var fc=null;var pc=0;var mc=0;var gc=!1;var mg=new O;var Qi=new O;var Fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=mg}=s;fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Hn,format:Pn,colorSpace:Xr,depthBuffer:!1},r=Fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gg(s)),this._blurMaterial=yg(s,e,t),this._ggxMaterial=_g(s,e,t)}return r}_compileMaterial(e){let t=new Yt(new an,e);this._renderer.compile(t,Ms)}_sceneToCubeUV(e,t,n,r,s){let c=new en(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(Uh),f.toneMapping=zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new Cr,new Qr({name:`PMREM.Background`,side:yn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,p=M.material,d=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,d=!0):(p.color.copy(Uh),d=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[A],s.y,s.z)):v===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[A]));let S=this._cubeSize;Dr(r,v*S,A>2?S:0,S,S),f.setRenderTarget(r),d&&f.render(M,c),f.render(e,c)}f.toneMapping=m,f.autoClear=u,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ni||e.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Dr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ms)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),m=Math.sqrt(l*l-h*h)*(l*1.25),{_lodMax:_}=this,M=this._sizeLods[n],p=3*M*(n>_-Lr?n-_+Lr:0),d=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-t,Dr(s,p,d,3*M,2*M),r.setRenderTarget(s),r.render(o,Ms),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-n,Dr(e,p,d,3*M,2*M),r.setRenderTarget(e),r.render(o,Ms)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[r];Dr(t,3*h*(r>this._lodMax-Lr?r-this._lodMax+Lr:0),4*(this._cubeSize-h),3*h,2*h),a.setRenderTarget(t),a.render(c,Ms)}};function gg(i){let e=[],t=[],n=i,r=i-Lr+1+dg;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,m=3,_=new Float32Array(108),M=new Float32Array(108);for(let d=0;d<f;d++){let b=d%3*2/3-1,A=d>2?0:-1,v=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];_.set(v,18*d);for(let S=0;S<u;S++){let w=h[S*2]*2-1,C=h[S*2+1]*2-1;d===0?Qi.set(1,C,w):d===1?Qi.set(-w,1,-C):d===2?Qi.set(-w,C,1):d===3?Qi.set(-1,C,-w):d===4?Qi.set(-w,-1,C):Qi.set(w,C,-1),Qi.toArray(M,(d*u+S)*m)}}let p=new an;p.setAttribute(`position`,new Rn(_,m)),p.setAttribute(`outputDirection`,new Rn(M,m)),t.push(new Yt(p,null)),n>Lr&&n--}return{lodMeshes:t,sizeLods:e}}function Fh(i,e,t){let n=new Mn(i,e,t);return n.texture.mapping=ds,n.texture.name=`PMREM.cubeUv`,n.scissorTest=!0,n}function Dr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function _g(i,e,t){return new En({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:pg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function yg(i,e,t){return new En({name:`SphericalGaussianBlur`,defines:{SAMPLES:fg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Bh(){return new En({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function kh(){return new En({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bo=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new es(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cr(5,5,5),s=new En({name:`CubemapFromEquirect`,uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Qn});s.uniforms.tEquirect.value=t;let a=new Yt(r,s),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=rn),new Ha(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function xg(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){let m=u.mapping;if(m===qa||m===Ya)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new Bo(_.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener(`dispose`,l),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,_=m===qa||m===Ya,M=m===Ni||m===Ki;if(_||M){let p=t.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Fo(i)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let b=u.image;return _&&b&&b.height>0||M&&b&&c(b)?(n===null&&(n=new Fo(i)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener(`dispose`,h),p.texture):null}}}return u}function o(u,m){return m===qa?u.mapping=Ni:m===Ya&&(u.mapping=Ki),u}function c(u){let m=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&m++;return m===_}function l(u){let m=u.target;m.removeEventListener(`dispose`,l);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(u){let m=u.target;m.removeEventListener(`dispose`,h);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function vg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t(`EXT_color_buffer_float`),t(`WEBGL_clip_cull_distance`),t(`OES_texture_float_linear`),t(`EXT_color_buffer_half_float`),t(`WEBGL_multisampled_render_to_texture`),t(`WEBGL_render_shared_exponent`)},get:function(n){let r=t(n);return r===null&&Wi(`WebGLRenderer: `+n+` extension not supported.`),r}}}function Mg(i,e,t,n){let r={},s=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener(`dispose`,a),delete r[u.id];let m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener(`dispose`,a),r[u.id]=!0,t.memory.geometries++),u}function c(f){let u=f.attributes;for(let m in u)e.update(u[m],i.ARRAY_BUFFER)}function l(f){let u=[],m=f.index,_=f.attributes.position,M=0;if(_===void 0)return;if(m!==null){let b=m.array;M=m.version;for(let A=0,v=b.length;A<v;A+=3){let S=b[A+0],w=b[A+1],C=b[A+2];u.push(S,w,w,C,C,S)}}else{let b=_.array;M=_.version;for(let A=0,v=b.length/3-1;A<v;A+=3){let S=A+0,w=A+1,C=A+2;u.push(S,w,w,C,C,S)}}let p=new(_.count>=65535?Kr:Jr)(u,1);p.version=M;let d=s.get(f);d&&e.remove(d),s.set(f,p)}function h(f){let u=s.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function bg(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,s,f*a),t.update(u,n,1)}function l(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,s,f*a,m),t.update(u,n,m))}function h(f,u,m){if(m===0)return;e.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(n,u,0,s,f,0,m);let M=0;for(let p=0;p<m;p++)M+=u[p];t.update(M,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Sg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ke(`WebGLInfo: Unknown draw mode:`,a)}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wg(i,e,t){let n=new WeakMap,r=new Pt;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let E=function(){C.dispose(),n.delete(o),o.removeEventListener(`dispose`,E)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;m===!0&&(A=1),_===!0&&(A=2),M===!0&&(A=3);let v=o.attributes.position.count*A,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*S*4*f),C=new $r(w,v,S,f);C.type=Gn,C.needsUpdate=!0;let y=A*4;for(let P=0;P<f;P++){let L=p[P],F=d[P],V=b[P],N=v*S*4*P;for(let G=0;G<L.count;G++){let J=G*y;m===!0&&(r.fromBufferAttribute(L,G),w[N+J+0]=r.x,w[N+J+1]=r.y,w[N+J+2]=r.z,w[N+J+3]=0),_===!0&&(r.fromBufferAttribute(F,G),w[N+J+4]=r.x,w[N+J+5]=r.y,w[N+J+6]=r.z,w[N+J+7]=0),M===!0&&(r.fromBufferAttribute(V,G),w[N+J+8]=r.x,w[N+J+9]=r.y,w[N+J+10]=r.z,w[N+J+11]=V.itemSize===4?r.w:1)}}u={count:f,texture:C,size:new rt(v,S)},n.set(o,u),o.addEventListener(`dispose`,E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,`morphTexture`,a.morphTexture,t);else{let m=0;for(let M=0;M<l.length;M++)m+=l[M];let _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,`morphTargetBaseInfluence`,_),c.getUniforms().setValue(i,`morphTargetInfluences`,l)}c.getUniforms().setValue(i,`morphTargetsTexture`,u.texture,t),c.getUniforms().setValue(i,`morphTargetsTextureSize`,u.size)}return{update:s}}function Eg(i,e,t,n,r){let s=new WeakMap;function a(l){let h=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener(`dispose`,c)===!1&&l.addEventListener(`dispose`,c),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return u}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener(`dispose`,c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Tg={[ql]:`LINEAR_TONE_MAPPING`,[Yl]:`REINHARD_TONE_MAPPING`,[$l]:`CINEON_TONE_MAPPING`,[Zl]:`ACES_FILMIC_TONE_MAPPING`,[Kl]:`AGX_TONE_MAPPING`,[jl]:`NEUTRAL_TONE_MAPPING`,[Jl]:`CUSTOM_TONE_MAPPING`};function Cg(i,e,t,n,r,s){let a=new Mn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new an;l.setAttribute(`position`,new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Mt([0,2,0,0,2,0],2));let h=new Ra({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Yt(l,h),u=new Ar(-1,1,1,-1,0,1),m=null,_=null,M=!1,p,d=null,b=[],A=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),c!==null&&c.setSize(v,S);for(let w=0;w<b.length;w++){let C=b[w];C.setSize&&C.setSize(v,S)}},this.setEffects=function(v){b=v,A=b.length>0&&b[0].isRenderPass===!0;let S=a.width,w=a.height;b.length>0&&o===null&&(o=new Mn(S,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),c=new Mn(S,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){let y=b[C];y.setSize&&y.setSize(S,w)}},this.begin=function(v,S){if(M||v.toneMapping===zn&&b.length===0)return!1;if(d=S,S!==null){let w=S.width,C=S.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return A===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=zn,!0},this.hasRenderPass=function(){return A},this.end=function(v,S){v.toneMapping=p,M=!0;let w=a,C=o;for(let y=0;y<b.length;y++){let E=b[y];E.enabled!==!1&&(E.render(v,C,w,S),E.needsSwap!==!1&&(w=C,C=C===o?c:o))}if(m!==v.outputColorSpace||_!==v.toneMapping){m=v.outputColorSpace,_=v.toneMapping,h.defines={},it.getTransfer(m)===mt&&(h.defines.SRGB_TRANSFER=``);let y=Tg[_];y&&(h.defines[y]=``),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(d),v.render(f,u),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var sd=new _n;var xc=new Ci(1,1);var ad=new $r;var od=new Sa;var ld=new es;var zh=[];var Vh=[];var Gh=new Float32Array(16);var Hh=new Float32Array(9);var Wh=new Float32Array(4);function Fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=zh[r];if(s===void 0&&(s=new Float32Array(r),zh[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zo(i,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function Ng(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;Wh.set(n),i.uniformMatrix2fv(this.addr,!1,Wh),Zt(t,n)}}function Dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;Hh.set(n),i.uniformMatrix3fv(this.addr,!1,Hh),Zt(t,n)}}function Lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;Gh.set(n),i.uniformMatrix4fv(this.addr,!1,Gh),Zt(t,n)}}function Og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function Hg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xc.compareFunction=t.isReversedDepthBuffer()?Lo:Do,s=xc):s=sd,t.setTexture2D(e||s,r)}function Wg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||od,r)}function Xg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ld,r)}function qg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ad,r)}function Yg(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Pg;case 35666:return Ig;case 35674:return Ng;case 35675:return Dg;case 35676:return Lg;case 5124:case 35670:return Og;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Bg;case 5125:return kg;case 36294:return zg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}function $g(i,e){i.uniform1fv(this.addr,e)}function Zg(i,e){let t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Jg(i,e){let t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Kg(i,e){let t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function jg(i,e){let t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qg(i,e){let t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function e0(i,e){let t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function t0(i,e){i.uniform1iv(this.addr,e)}function n0(i,e){i.uniform2iv(this.addr,e)}function i0(i,e){i.uniform3iv(this.addr,e)}function r0(i,e){i.uniform4iv(this.addr,e)}function s0(i,e){i.uniform1uiv(this.addr,e)}function a0(i,e){i.uniform2uiv(this.addr,e)}function o0(i,e){i.uniform3uiv(this.addr,e)}function l0(i,e){i.uniform4uiv(this.addr,e)}function c0(i,e,t){let n=this.cache,r=e.length,s=zo(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=xc:a=sd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function u0(i,e,t){let n=this.cache,r=e.length,s=zo(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||od,s[a])}function h0(i,e,t){let n=this.cache,r=e.length,s=zo(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ld,s[a])}function d0(i,e,t){let n=this.cache,r=e.length,s=zo(t,r);$t(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ad,s[a])}function f0(i){switch(i){case 5126:return $g;case 35664:return Zg;case 35665:return Jg;case 35666:return Kg;case 35674:return jg;case 35675:return Qg;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return r0;case 5125:return s0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return d0}}var vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yg(t.type)}};var Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f0(t.type)}};var bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}};var _c=/(\w+)(\])?(\[|\.)?/g;function Xh(i,e){i.seq.push(e),i.map[e.id]=e}function p0(i,e,t){let n=i.name,r=n.length;for(_c.lastIndex=0;;){let s=_c.exec(n),a=_c.lastIndex,o=s[1],c=s[2]===`]`,l=s[3];if(c&&(o=o|0),l===void 0||l===`[`&&a+2===r){Xh(t,l===void 0?new vc(o,i,e):new Mc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new bc(o),Xh(t,f)),t=f}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a);p0(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function qh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var m0=37297;var g0=0;function _0(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?`>`:` `} ${o}: ${t[a]}`)}return n.join(`
`)}var Yh=new He;function y0(i){it._getMatrix(Yh,it.workingColorSpace,i);let e=`mat3( ${Yh.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case qr:return[e,`LinearTransferOETF`];case mt:return[e,`sRGBTransferOETF`];default:return Fe(`WebGLProgram: Unsupported color space: `,i),[e,`LinearTransferOETF`]}}function $h(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||``).trim();if(n&&s===``)return``;let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+_0(i.getShaderSource(e),o)}else return s}function x0(i,e){let t=y0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,`}`].join(`
`)}var v0={[ql]:`Linear`,[Yl]:`Reinhard`,[$l]:`Cineon`,[Zl]:`ACESFilmic`,[Kl]:`AgX`,[jl]:`Neutral`,[Jl]:`Custom`};function M0(i,e){let t=v0[e];return t===void 0?(Fe(`WebGLProgram: Unsupported toneMapping:`,e),`vec3 `+i+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+i+`( vec3 color ) { return `+t+`ToneMapping( color ); }`}var Uo=new O;function b0(){it.getLuminanceCoefficients(Uo);return[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Uo.x.toFixed(4)}, ${Uo.y.toFixed(4)}, ${Uo.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function S0(i){return[i.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,i.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ss).join(`
`)}function w0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push(`#define `+t+` `+n)}return e.join(`
`)}function E0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ss(i){return i!==``}function Zh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(i){return i.replace(T0,A0)}var C0=new Map;function A0(i,e){let t=Je[e];if(t===void 0){let n=C0.get(e);if(n!==void 0)t=Je[n],Fe(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,e,n);else throw new Error(`THREE.WebGLProgram: Can not resolve #include <`+e+`>`)}return Sc(t)}var R0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(i){return i.replace(R0,P0)}function P0(i,e,t,n){let r=``;for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,`[ `+s+` ]`).replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision===`highp`?e+=`
#define HIGH_PRECISION`:i.precision===`mediump`?e+=`
#define MEDIUM_PRECISION`:i.precision===`lowp`&&(e+=`
#define LOW_PRECISION`),e}var I0={[hs]:`SHADOWMAP_TYPE_PCF`,[Rr]:`SHADOWMAP_TYPE_VSM`};function N0(i){return I0[i.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var D0={[Ni]:`ENVMAP_TYPE_CUBE`,[Ki]:`ENVMAP_TYPE_CUBE`,[ds]:`ENVMAP_TYPE_CUBE_UV`};function L0(i){return i.envMap===!1?`ENVMAP_TYPE_CUBE`:D0[i.envMapMode]||`ENVMAP_TYPE_CUBE`}var O0={[Ki]:`ENVMAP_MODE_REFRACTION`};function U0(i){return i.envMap===!1?`ENVMAP_MODE_REFLECTION`:O0[i.envMapMode]||`ENVMAP_MODE_REFLECTION`}var F0={[Xl]:`ENVMAP_BLENDING_MULTIPLY`,[mh]:`ENVMAP_BLENDING_MIX`,[gh]:`ENVMAP_BLENDING_ADD`};function B0(i){return i.envMap===!1?`ENVMAP_BLENDING_NONE`:F0[i.combine]||`ENVMAP_BLENDING_NONE`}function k0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function z0(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=N0(t),l=L0(t),h=U0(t),f=B0(t),u=k0(t),m=S0(t),_=w0(s),M=r.createProgram(),p,d,b=t.glslVersion?`#version `+t.glslVersion+`
`:``;t.isRawShaderMaterial?(p=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,_].filter(Ss).join(`
`),p.length>0&&(p+=`
`),d=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,_].filter(Ss).join(`
`),d.length>0&&(d+=`
`)):(p=[jh(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,_,t.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,t.batching?`#define USE_BATCHING`:``,t.batchingColor?`#define USE_BATCHING_COLOR`:``,t.instancing?`#define USE_INSTANCING`:``,t.instancingColor?`#define USE_INSTANCING_COLOR`:``,t.instancingMorph?`#define USE_INSTANCING_MORPH`:``,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.map?`#define USE_MAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+h:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.displacementMap?`#define USE_DISPLACEMENTMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.mapUv?`#define MAP_UV `+t.mapUv:``,t.alphaMapUv?`#define ALPHAMAP_UV `+t.alphaMapUv:``,t.lightMapUv?`#define LIGHTMAP_UV `+t.lightMapUv:``,t.aoMapUv?`#define AOMAP_UV `+t.aoMapUv:``,t.emissiveMapUv?`#define EMISSIVEMAP_UV `+t.emissiveMapUv:``,t.bumpMapUv?`#define BUMPMAP_UV `+t.bumpMapUv:``,t.normalMapUv?`#define NORMALMAP_UV `+t.normalMapUv:``,t.displacementMapUv?`#define DISPLACEMENTMAP_UV `+t.displacementMapUv:``,t.metalnessMapUv?`#define METALNESSMAP_UV `+t.metalnessMapUv:``,t.roughnessMapUv?`#define ROUGHNESSMAP_UV `+t.roughnessMapUv:``,t.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+t.anisotropyMapUv:``,t.clearcoatMapUv?`#define CLEARCOATMAP_UV `+t.clearcoatMapUv:``,t.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+t.clearcoatNormalMapUv:``,t.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+t.clearcoatRoughnessMapUv:``,t.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+t.iridescenceMapUv:``,t.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+t.iridescenceThicknessMapUv:``,t.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+t.sheenColorMapUv:``,t.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+t.sheenRoughnessMapUv:``,t.specularMapUv?`#define SPECULARMAP_UV `+t.specularMapUv:``,t.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+t.specularColorMapUv:``,t.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+t.specularIntensityMapUv:``,t.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+t.transmissionMapUv:``,t.thicknessMapUv?`#define THICKNESSMAP_UV `+t.thicknessMapUv:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexNormals?`#define HAS_NORMAL`:``,t.vertexColors?`#define USE_COLOR`:``,t.vertexAlphas?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.flatShading?`#define FLAT_SHADED`:``,t.skinning?`#define USE_SKINNING`:``,t.morphTargets?`#define USE_MORPHTARGETS`:``,t.morphNormals&&t.flatShading===!1?`#define USE_MORPHNORMALS`:``,t.morphColors?`#define USE_MORPHCOLORS`:``,t.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+t.morphTextureStride:``,t.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+t.morphTargetsCount:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+c:``,t.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ss).join(`
`),d=[jh(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,_,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,t.map?`#define USE_MAP`:``,t.matcap?`#define USE_MATCAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+l:``,t.envMap?`#define `+h:``,t.envMap?`#define `+f:``,u?`#define CUBEUV_TEXEL_WIDTH `+u.texelWidth:``,u?`#define CUBEUV_TEXEL_HEIGHT `+u.texelHeight:``,u?`#define CUBEUV_MAX_MIP `+u.maxMip+`.0`:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoat?`#define USE_CLEARCOAT`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.dispersion?`#define USE_DISPERSION`:``,t.retroreflection?`#define USE_RETROREFLECTION`:``,t.iridescence?`#define USE_IRIDESCENCE`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaTest?`#define USE_ALPHATEST`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.sheen?`#define USE_SHEEN`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexColors||t.instancingColor?`#define USE_COLOR`:``,t.vertexAlphas||t.batchingColor?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.gradientMap?`#define USE_GRADIENTMAP`:``,t.flatShading?`#define FLAT_SHADED`:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+c:``,t.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,t.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,t.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,t.toneMapping!==zn?`#define TONE_MAPPING`:``,t.toneMapping!==zn?Je.tonemapping_pars_fragment:``,t.toneMapping!==zn?M0(`toneMapping`,t.toneMapping):``,t.dithering?`#define DITHERING`:``,t.opaque?`#define OPAQUE`:``,Je.colorspace_pars_fragment,x0(`linearToOutputTexel`,t.outputColorSpace),b0(),t.useDepthPacking?`#define DEPTH_PACKING `+t.depthPacking:``,`
`].filter(Ss).join(`
`)),a=Sc(a),a=Zh(a,t),a=Jh(a,t),o=Sc(o),o=Zh(o,t),o=Jh(o,t),a=Kh(a),o=Kh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+p,d=[`#define varying in`,t.glslVersion===oc?``:`layout(location = 0) out highp vec4 pc_fragColor;`,t.glslVersion===oc?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+d);let A=b+p+a,v=b+d+o,S=qh(r,r.VERTEX_SHADER,A),w=qh(r,r.FRAGMENT_SHADER,v);r.attachShader(M,S),r.attachShader(M,w),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,`position`),r.linkProgram(M);function C(L){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(M)||``,V=r.getShaderInfoLog(S)||``,N=r.getShaderInfoLog(w)||``,G=F.trim(),J=V.trim(),K=N.trim(),oe=!0,Y=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError==`function`)i.debug.onShaderError(r,M,S,w);else{let te=$h(r,S,`vertex`),re=$h(r,w,`fragment`);ke(`WebGLProgram: Shader Error `+r.getError()+` - VALIDATE_STATUS `+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+te+`
`+re)}else G!==``?Fe(`WebGLProgram: Program Info Log:`,G):(J===``||K===``)&&(Y=!1);Y&&(L.diagnostics={runnable:oe,programLog:G,vertexShader:{log:J,prefix:p},fragmentShader:{log:K,prefix:d}})}r.deleteShader(S),r.deleteShader(w),y=new Or(r,M),E=E0(r,M)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(M,m0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=w,this}var V0=0;var wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ec(e),t.set(e,n)),n}};var Ec=class{constructor(e){this.id=V0++,this.code=e,this.usedTimes=0}};function G0(i){return i===Oi||i===ys||i===xs}function H0(i,e,t,n,r,s){let a=new Zr,o=new wc,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function _(y){return c.add(y),y===0?`uv`:`uv${y}`}function M(y,E,P,L,F,V){let N=L.fog,G=F.geometry,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,oe=e.get(y.envMap||J,K),Y=oe&&oe.mapping===ds?oe.image.height:null,te=m[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Fe(`WebGLProgram.getParameters:`,y.precision,`not supported, using`,u,`instead.`));let re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Le=re!==void 0?re.length:0,Ne=0;G.morphAttributes.position!==void 0&&(Ne=1),G.morphAttributes.normal!==void 0&&(Ne=2),G.morphAttributes.color!==void 0&&(Ne=3);let bt,at,ct,$;if(te){let wt=ti[te];bt=wt.vertexShader,at=wt.fragmentShader}else{bt=y.vertexShader,at=y.fragmentShader;let wt=o.getVertexShaderStage(y),ft=o.getFragmentShaderStage(y);o.update(y,wt,ft),ct=wt.id,$=ft.id}let ee=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),We=F.isInstancedMesh===!0,Me=F.isBatchedMesh===!0,Ke=!!y.map,Gt=!!y.matcap,Qe=!!oe,lt=!!y.aoMap,St=!!y.lightMap,tt=!!y.bumpMap&&y.wireframe===!1,Rt=!!y.normalMap,Jt=!!y.displacementMap,xn=!!y.emissiveMap,It=!!y.metalnessMap,Ot=!!y.roughnessMap,D=y.anisotropy>0,on=y.clearcoat>0,_t=y.dispersion>0,T=y.retroreflectivity>0,g=y.iridescence>0,U=y.sheen>0,z=y.transmission>0,q=D&&!!y.anisotropyMap,ce=on&&!!y.clearcoatMap,ue=on&&!!y.clearcoatNormalMap,Z=on&&!!y.clearcoatRoughnessMap,Q=g&&!!y.iridescenceMap,he=g&&!!y.iridescenceThicknessMap,Re=U&&!!y.sheenColorMap,me=U&&!!y.sheenRoughnessMap,de=!!y.specularMap,Pe=!!y.specularColorMap,Be=!!y.specularIntensityMap,Ye=z&&!!y.transmissionMap,I=z&&!!y.thicknessMap,fe=!!y.gradientMap,j=!!y.alphaMap,pe=y.alphaTest>0,xe=!!y.alphaHash,ie=!!y.extensions,De=zn;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(De=i.toneMapping);let Te={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:bt,fragmentShader:at,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Me,batchingColor:Me&&F._colorsTexture!==null,instancing:We,instancingColor:We&&F.instanceColor!==null,instancingMorph:We&&F.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ke,matcap:Gt,envMap:Qe,envMapMode:Qe&&oe.mapping,envMapCubeUVHeight:Y,aoMap:lt,lightMap:St,bumpMap:tt,normalMap:Rt,displacementMap:Jt,emissiveMap:xn,normalMapObjectSpace:Rt&&y.normalMapType===xh,normalMapTangentSpace:Rt&&y.normalMapType===No,packedNormalMap:Rt&&y.normalMapType===No&&G0(y.normalMap.format),metalnessMap:It,roughnessMap:Ot,anisotropy:D,anisotropyMap:q,clearcoat:on,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:Z,dispersion:_t,retroreflection:T,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:he,sheen:U,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:de,specularColorMap:Pe,specularIntensityMap:Be,transmission:z,transmissionMap:Ye,thicknessMap:I,gradientMap:fe,opaque:y.transparent===!1&&y.blending===Pr&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:pe,alphaHash:xe,combine:y.combine,mapUv:Ke&&_(y.map.channel),aoMapUv:lt&&_(y.aoMap.channel),lightMapUv:St&&_(y.lightMap.channel),bumpMapUv:tt&&_(y.bumpMap.channel),normalMapUv:Rt&&_(y.normalMap.channel),displacementMapUv:Jt&&_(y.displacementMap.channel),emissiveMapUv:xn&&_(y.emissiveMap.channel),metalnessMapUv:It&&_(y.metalnessMap.channel),roughnessMapUv:Ot&&_(y.roughnessMap.channel),anisotropyMapUv:q&&_(y.anisotropyMap.channel),clearcoatMapUv:ce&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(y.sheenRoughnessMap.channel),specularMapUv:de&&_(y.specularMap.channel),specularColorMapUv:Pe&&_(y.specularColorMap.channel),specularIntensityMapUv:Be&&_(y.specularIntensityMap.channel),transmissionMapUv:Ye&&_(y.transmissionMap.channel),thicknessMapUv:I&&_(y.thicknessMap.channel),alphaMapUv:j&&_(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Rt||D),vertexNormals:!!G.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Ke||j),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||G.attributes.normal===void 0&&Rt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ne,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Ke&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===mt,decodeVideoTextureEmissive:xn&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ie&&y.extensions.clipCullDistance===!0&&t.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ie&&y.extensions.multiDraw===!0||Me)&&t.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:t.has(`KHR_parallel_shader_compile`),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function p(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)E.push(P),E.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(d(E,y),b(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function d(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function b(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){let E=m[y.type],P;if(E){let L=ti[E];P=Dh.clone(L.uniforms)}else P=y.uniforms;return P}function v(y,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new z0(i,E,y,r),l.push(P),h.set(E,P)),P}function S(y){if(--y.usedTimes===0){let E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:A,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:C}}function W0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function X0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Qh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ed(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,M,p,d){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:d},i[e]=b):(b.id=u.id,b.object=u,b.geometry=m,b.material=_,b.materialVariant=a(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=p,b.group=d),e++,b}function c(u,m,_,M,p,d,b){b.reversedDepth===!0&&(p=-p);let A=o(u,m,_,M,p,d);_.transmission>0?n.push(A):_.transparent===!0?r.push(A):t.push(A)}function l(u,m,_,M,p,d){let b=o(u,m,_,M,p,d);_.transmission>0?n.unshift(b):_.transparent===!0?r.unshift(b):t.unshift(b)}function h(u,m){t.length>1&&t.sort(u||X0),n.length>1&&n.sort(m||Qh),r.length>1&&r.sort(m||Qh)}function f(){for(let u=e,m=i.length;u<m;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function q0(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new ed,i.set(n,[a])):r>=s.length?(a=new ed,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Y0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case`SunLight`:case`DirectionalLight`:t={direction:new O,color:new $e};break;case`SpotLight`:t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:t={position:new O,color:new $e,distance:0,decay:0};break;case`HemisphereLight`:t={direction:new O,skyColor:new $e,groundColor:new $e};break;case`RectAreaLight`:t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O}}return i[e.id]=t,t}}}function $0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case`SunLight`:case`DirectionalLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case`SpotLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case`PointLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3}}return i[e.id]=t,t}}}var Z0=0;function J0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function K0(i){let e=new Y0,t=$0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let r=new O,s=new yt,a=new yt;function o(l){let h=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,_=0,M=0,p=0,d=0,b=0,A=0,v=0,S=0,w=0,C=0,y=0,E=0,P=0;l.sort(J0);for(let F=0,V=l.length;F<V;F++){let N=l[F],G=N.color,J=N.intensity,K=N.distance,oe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Oi?oe=N.shadow.map.texture:oe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=G.r*J,f+=G.g*J,u+=G.b*J;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],J);P++}else if(N.isSunLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let te=N.shadow,re=t.get(N);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[_]=re,n.sunShadowMap[_]=oe;let Le=te.getViewportCount();for(let Ne=0;Ne<Le;Ne++)n.sunShadowMatrix[M+Ne]=te.getMatrix(Ne),n.sunShadowCascade[M+Ne]=te._cascadeData[Ne];M+=Le,_++}n.sun[m]=Y,m++}else if(N.isDirectionalLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let te=N.shadow,re=t.get(N);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,n.directionalShadow[p]=re,n.directionalShadowMap[p]=oe,n.directionalShadowMatrix[p]=N.shadow.matrix,S++}n.directional[p]=Y,p++}else if(N.isSpotLight){let Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(G).multiplyScalar(J),Y.distance=K,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[b]=Y;let te=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,te.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[b]=te.matrix,N.castShadow){let re=t.get(N);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,n.spotShadow[b]=re,n.spotShadowMap[b]=oe,C++}b++}else if(N.isRectAreaLight){let Y=e.get(N);Y.color.copy(G).multiplyScalar(J),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=Y,A++}else if(N.isPointLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let te=N.shadow,re=t.get(N);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,re.shadowCameraNear=te.camera.near,re.shadowCameraFar=te.camera.far,n.pointShadow[d]=re,n.pointShadowMap[d]=oe,n.pointShadowMatrix[d]=N.shadow.matrix,w++}n.point[d]=Y,d++}else if(N.isHemisphereLight){let Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(J),Y.groundColor.copy(N.groundColor).multiplyScalar(J),n.hemi[v]=Y,v++}}A>0&&(i.has(`OES_texture_float_linear`)===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let L=n.hash;(L.sunLength!==m||L.directionalLength!==p||L.pointLength!==d||L.spotLength!==b||L.rectAreaLength!==A||L.hemiLength!==v||L.numSunShadows!==_||L.numDirectionalShadows!==S||L.numPointShadows!==w||L.numSpotShadows!==C||L.numSpotMaps!==y||L.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=p,n.spot.length=b,n.rectArea.length=A,n.point.length=d,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,L.sunLength=m,L.directionalLength=p,L.pointLength=d,L.spotLength=b,L.rectAreaLength=A,L.hemiLength=v,L.numSunShadows=_,L.numDirectionalShadows=S,L.numPointShadows=w,L.numSpotShadows=C,L.numSpotMaps=y,L.numLightProbes=P,n.version=Z0++)}function c(l,h){let f=0,u=0,m=0,_=0,M=0,p=0,d=h.matrixWorldInverse;for(let b=0,A=l.length;b<A;b++){let v=l[b];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),f++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),u++}else if(v.isSpotLight){let S=n.spot[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),_++}else if(v.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),a.identity(),s.copy(v.matrixWorld),s.premultiply(d),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let S=n.point[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),m++}else if(v.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),p++}}}return{setup:o,setupView:c,state:n}}function td(i){let e=new K0(i),t=[],n=[],r=[];function s(u){f.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function j0(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new td(i),e.set(r,[o])):s>=a.length?(o=new td(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;var e_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`;var t_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)];var n_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)];var nd=new yt;var bs=new O;var yc=new O;function i_(i,e,t){let n=new Er,r=new rt,s=new rt,a=new Pt,o=new Pa,c=new Ia,l={},h=t.maxTextureSize,f={[Ii]:yn,[yn]:Ii,[jn]:jn},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Q0,fragmentShader:e_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new an;_.setAttribute(`position`,new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Yt(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let d=this.type;this.render=function(w,C,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Xa&&(Fe(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=hs);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=d!==this.type;V&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=w.length;N<G;N++){let J=w[N],K=J.shadow;if(K===void 0){Fe(`WebGLShadowMap:`,J,`has no shadow.`);continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);let oe=K.getFrameExtents();r.multiply(oe),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,K.mapSize.y=s.y));let Y=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Y,K.map===null||V===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Rr){if(J.isPointLight){Fe(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}K.map=new Mn(r.x,r.y,{format:Oi,type:Hn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),K.map.texture.name=J.name+`.shadowMap`,K.map.depthTexture=new Ci(r.x,r.y,Gn),K.map.depthTexture.name=J.name+`.shadowMapDepth`,K.map.depthTexture.format=Zn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=tn,K.map.depthTexture.magFilter=tn}else J.isPointLight?(K.map=new Bo(r.x),K.map.depthTexture=new Aa(r.x,Vn)):(K.map=new Mn(r.x,r.y),K.map.depthTexture=new Ci(r.x,r.y,Vn)),K.map.depthTexture.name=J.name+`.shadowMap`,K.map.depthTexture.format=Zn,this.type===hs?(K.map.depthTexture.compareFunction=Y?Lo:Do,K.map.depthTexture.minFilter=rn,K.map.depthTexture.magFilter=rn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=tn,K.map.depthTexture.magFilter=tn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);let te=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();J.isPointLight!==!0&&K.updateMatrices(J,y);for(let re=0;re<te;re++){let Le=K.getCamera(re);if(J.isPointLight){let Ne=K.camera,bt=K.matrix,at=J.distance||Ne.far;at!==Ne.far&&(Ne.far=at,Ne.updateProjectionMatrix()),bs.setFromMatrixPosition(J.matrixWorld),Ne.position.copy(bs),yc.copy(Ne.position),yc.add(t_[re]),Ne.up.copy(n_[re]),Ne.lookAt(yc),Ne.updateMatrixWorld(),bt.makeTranslation(-bs.x,-bs.y,-bs.z),nd.multiplyMatrices(Ne.projectionMatrix,Ne.matrixWorldInverse),K._frustum.setFromProjectionMatrix(nd,Ne.coordinateSystem,Ne.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,re),i.clear();else{re===0&&(i.setRenderTarget(K.map),i.clear());let Ne=K.getViewport(re);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),F.viewport(a)}n=K.getFrustum(re),v(C,y,Le,J,this.type)}K.isPointLightShadow!==!0&&this.type===Rr&&b(K,y),K.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(E,P,L)};function b(w,C){let y=e.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new Mn(r.x,r.y,{format:Oi,type:Hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,y,u,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,y,m,M,null)}function A(w,C,y,E){let P=null,L=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)P=L;else if(P=y.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=P.uuid,V=C.uuid,N=l[F];N===void 0&&(N={},l[F]=N);let G=N[V];G===void 0&&(G=P.clone(),N[V]=G,C.addEventListener(`dispose`,S)),P=G}if(P.visible=C.visible,P.wireframe=C.wireframe,E===Rr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:f[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=i.properties.get(P);F.light=y}return P}function v(w,C,y,E,P){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Rr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let V=e.update(w),N=w.material;if(Array.isArray(N)){let G=V.groups;for(let J=0,K=G.length;J<K;J++){let oe=G[J],Y=N[oe.materialIndex];if(Y&&Y.visible){let te=A(w,Y,E,P);w.onBeforeShadow(i,w,C,y,V,te,oe),i.renderBufferDirect(y,null,V,te,w,oe),w.onAfterShadow(i,w,C,y,V,te,oe)}}}else if(N.visible){let G=A(w,N,E,P);w.onBeforeShadow(i,w,C,y,V,G,null),i.renderBufferDirect(y,null,V,G,w,null),w.onAfterShadow(i,w,C,y,V,G,null)}}let F=w.children;for(let V=0,N=F.length;V<N;V++)v(F[V],C,y,E,P)}function S(w){w.target.removeEventListener(`dispose`,S);for(let y in l){let E=l[y],P=w.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function r_(i,e){function t(){let I=!1,fe=new Pt,j=null,pe=new Pt(0,0,0,0);return{setMask:function(xe){j!==xe&&!I&&(i.colorMask(xe,xe,xe,xe),j=xe)},setLocked:function(xe){I=xe},setClear:function(xe,ie,De,Te,wt){wt===!0&&(xe*=Te,ie*=Te,De*=Te),fe.set(xe,ie,De,Te),pe.equals(fe)===!1&&(i.clearColor(xe,ie,De,Te),pe.copy(fe))},reset:function(){I=!1,j=null,pe.set(-1,0,0,0)}}}function n(){let I=!1,fe=!1,j=null,pe=null,xe=null;return{setReversed:function(ie){if(fe!==ie){let De=e.get(`EXT_clip_control`);ie?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;let Te=xe;xe=null,this.setClear(Te)}},getReversed:function(){return fe},setTest:function(ie){ie?ee(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(ie){j!==ie&&!I&&(i.depthMask(ie),j=ie)},setFunc:function(ie){if(fe&&(ie=Ih[ie]),pe!==ie){switch(ie){case ha:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ie}},setLocked:function(ie){I=ie},setClear:function(ie){xe!==ie&&(xe=ie,fe&&(ie=1-ie),i.clearDepth(ie))},reset:function(){I=!1,j=null,pe=null,xe=null,fe=!1}}}function r(){let I=!1,fe=null,j=null,pe=null,xe=null,ie=null,De=null,Te=null,wt=null;return{setTest:function(ft){I||(ft?ee(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(ft){fe!==ft&&!I&&(i.stencilMask(ft),fe=ft)},setFunc:function(ft,In,Wn){(j!==ft||pe!==In||xe!==Wn)&&(i.stencilFunc(ft,In,Wn),j=ft,pe=In,xe=Wn)},setOp:function(ft,In,Wn){(ie!==ft||De!==In||Te!==Wn)&&(i.stencilOp(ft,In,Wn),ie=ft,De=In,Te=Wn)},setLocked:function(ft){I=ft},setClear:function(ft){wt!==ft&&(i.clearStencil(ft),wt=ft)},reset:function(){I=!1,fe=null,j=null,pe=null,xe=null,ie=null,De=null,Te=null,wt=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,h={},f={},u={},m=new WeakMap,_=[],M=null,p=!1,d=null,b=null,A=null,v=null,S=null,w=null,C=null,y=new $e(0,0,0),E=0,P=!1,L=null,F=null,V=null,N=null,G=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,oe=0,Y=i.getParameter(i.VERSION);Y.indexOf(`WebGL`)!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=oe>=1):Y.indexOf(`OpenGL ES`)!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=oe>=2);let te=null,re={},Le=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),bt=new Pt().fromArray(Le),at=new Pt().fromArray(Ne);function ct(I,fe,j,pe){let xe=new Uint8Array(4),ie=i.createTexture();i.bindTexture(I,ie),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<j;De++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(fe+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ie}let $={};$[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(xr),tt(!1),Rt(kl),ee(i.CULL_FACE),lt(Qn);function ee(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Se(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function We(I,fe){return u[I]!==fe?(i.bindFramebuffer(I,fe),u[I]=fe,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Me(I,fe){let j=_,pe=!1;if(I){j=m.get(fe),j===void 0&&(j=[],m.set(fe,j));let xe=I.textures;if(j.length!==xe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,De=xe.length;ie<De;ie++)j[ie]=i.COLOR_ATTACHMENT0+ie;j.length=xe.length,pe=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,pe=!0);pe&&i.drawBuffers(j)}function Ke(I){return M!==I?(i.useProgram(I),M=I,!0):!1}let Gt={[Ji]:i.FUNC_ADD,[ju]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};Gt[eh]=i.MIN,Gt[th]=i.MAX;let Qe={[nh]:i.ZERO,[ih]:i.ONE,[rh]:i.SRC_COLOR,[Hl]:i.SRC_ALPHA,[uh]:i.SRC_ALPHA_SATURATE,[lh]:i.DST_COLOR,[ah]:i.DST_ALPHA,[sh]:i.ONE_MINUS_SRC_COLOR,[Wl]:i.ONE_MINUS_SRC_ALPHA,[ch]:i.ONE_MINUS_DST_COLOR,[oh]:i.ONE_MINUS_DST_ALPHA,[hh]:i.CONSTANT_COLOR,[dh]:i.ONE_MINUS_CONSTANT_COLOR,[fh]:i.CONSTANT_ALPHA,[ph]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(I,fe,j,pe,xe,ie,De,Te,wt,ft){if(I===Qn){p===!0&&(Se(i.BLEND),p=!1);return}if(p===!1&&(ee(i.BLEND),p=!0),I!==Ku){if(I!==d||ft!==P){if((b!==Ji||S!==Ji)&&(i.blendEquation(i.FUNC_ADD),b=Ji,S=Ji),ft)switch(I){case Pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ke(`WebGLState: Invalid blending: `,I)}else switch(I){case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vl:ke(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case Gl:ke(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:ke(`WebGLState: Invalid blending: `,I)}A=null,v=null,w=null,C=null,y.set(0,0,0),E=0,d=I,P=ft}return}xe=xe||fe,ie=ie||j,De=De||pe,(fe!==b||xe!==S)&&(i.blendEquationSeparate(Gt[fe],Gt[xe]),b=fe,S=xe),(j!==A||pe!==v||ie!==w||De!==C)&&(i.blendFuncSeparate(Qe[j],Qe[pe],Qe[ie],Qe[De]),A=j,v=pe,w=ie,C=De),(Te.equals(y)===!1||wt!==E)&&(i.blendColor(Te.r,Te.g,Te.b,wt),y.copy(Te),E=wt),d=I,P=!1}function St(I,fe){I.side===jn?Se(i.CULL_FACE):ee(i.CULL_FACE);let j=I.side===yn;fe&&(j=!j),tt(j),I.blending===Pr&&I.transparent===!1?lt(Qn):lt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);let pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xn(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function Rt(I){I!==Zu?(ee(i.CULL_FACE),I!==F&&(I===kl?i.cullFace(i.BACK):I===Ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),F=I}function Jt(I){I!==V&&(K&&i.lineWidth(I),V=I)}function xn(I,fe,j){I?(ee(i.POLYGON_OFFSET_FILL),(N!==fe||G!==j)&&(N=fe,G=j,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,j))):Se(i.POLYGON_OFFSET_FILL)}function It(I){I?ee(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Ot(I){I===void 0&&(I=i.TEXTURE0+J-1),te!==I&&(i.activeTexture(I),te=I)}function D(I,fe,j){j===void 0&&(te===null?j=i.TEXTURE0+J-1:j=te);let pe=re[j];pe===void 0&&(pe={type:void 0,texture:void 0},re[j]=pe),(pe.type!==I||pe.texture!==fe)&&(te!==j&&(i.activeTexture(j),te=j),i.bindTexture(I,fe||$[I]),pe.type=I,pe.texture=fe)}function on(){let I=re[te];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _t(){try{i.compressedTexImage2D(...arguments)}catch(I){ke(`WebGLState:`,I)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(I){ke(`WebGLState:`,I)}}function g(){try{i.texSubImage2D(...arguments)}catch(I){ke(`WebGLState:`,I)}}function U(){try{i.texSubImage3D(...arguments)}catch(I){ke(`WebGLState:`,I)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(I){ke(`WebGLState:`,I)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(I){ke(`WebGLState:`,I)}}function ce(){try{i.texStorage2D(...arguments)}catch(I){ke(`WebGLState:`,I)}}function ue(){try{i.texStorage3D(...arguments)}catch(I){ke(`WebGLState:`,I)}}function Z(){try{i.texImage2D(...arguments)}catch(I){ke(`WebGLState:`,I)}}function Q(){try{i.texImage3D(...arguments)}catch(I){ke(`WebGLState:`,I)}}function he(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function Re(I,fe){f[I]!==fe&&(i.pixelStorei(I,fe),f[I]=fe)}function me(I){bt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),bt.copy(I))}function de(I){at.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),at.copy(I))}function Pe(I,fe){let j=l.get(fe);j===void 0&&(j=new WeakMap,l.set(fe,j));let pe=j.get(I);pe===void 0&&(pe=i.getUniformBlockIndex(fe,I.name),j.set(I,pe))}function Be(I,fe){let pe=l.get(fe).get(I);c.get(fe)!==pe&&(i.uniformBlockBinding(fe,pe,I.__bindingPointIndex),c.set(fe,pe))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},te=null,re={},u={},m=new WeakMap,_=[],M=null,p=!1,d=null,b=null,A=null,v=null,S=null,w=null,C=null,y=new $e(0,0,0),E=0,P=!1,L=null,F=null,V=null,N=null,G=null,bt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:Se,bindFramebuffer:We,drawBuffers:Me,useProgram:Ke,setBlending:lt,setMaterial:St,setFlipSided:tt,setCullFace:Rt,setLineWidth:Jt,setPolygonOffset:xn,setScissorTest:It,activeTexture:Ot,bindTexture:D,unbindTexture:on,compressedTexImage2D:_t,compressedTexImage3D:T,texImage2D:Z,texImage3D:Q,pixelStorei:Re,getParameter:he,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:ce,texStorage3D:ue,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:z,compressedTexSubImage3D:q,scissor:me,viewport:de,reset:Ye}}function s_(i,e,t,n,r,s,a){let o=e.has(`WEBGL_multisampled_render_to_texture`)?e.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,h=new WeakMap,f=new Set,u,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function M(T,g){return _?new OffscreenCanvas(T,g):Yr(`canvas`)}function p(T,g,U){let z=1,q=_t(T);if((q.width>U||q.height>U)&&(z=U/Math.max(q.width,q.height)),z<1)if(typeof HTMLImageElement<`u`&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&T instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&T instanceof ImageBitmap||typeof VideoFrame<`u`&&T instanceof VideoFrame){let ce=Math.floor(z*q.width),ue=Math.floor(z*q.height);u===void 0&&(u=M(ce,ue));let Z=g?M(ce,ue):u;return Z.width=ce,Z.height=ue,Z.getContext(`2d`).drawImage(T,0,0,ce,ue),Fe(`WebGLRenderer: Texture has been resized from (`+q.width+`x`+q.height+`) to (`+ce+`x`+ue+`).`),Z}else return`data`in T&&Fe(`WebGLRenderer: Image in DataTexture is too big (`+q.width+`x`+q.height+`).`),T;return T}function d(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,g,U,z,q,ce=!1){if(T!==null){if(i[T]!==void 0)return i[T];Fe(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+T+`'`)}let ue;z&&(ue=e.get(`EXT_texture_norm16`),ue||Fe(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let Z=g;if(g===i.RED&&(U===i.FLOAT&&(Z=i.R32F),U===i.HALF_FLOAT&&(Z=i.R16F),U===i.UNSIGNED_BYTE&&(Z=i.R8),U===i.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),U===i.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.R8UI),U===i.UNSIGNED_SHORT&&(Z=i.R16UI),U===i.UNSIGNED_INT&&(Z=i.R32UI),U===i.BYTE&&(Z=i.R8I),U===i.SHORT&&(Z=i.R16I),U===i.INT&&(Z=i.R32I)),g===i.RG&&(U===i.FLOAT&&(Z=i.RG32F),U===i.HALF_FLOAT&&(Z=i.RG16F),U===i.UNSIGNED_BYTE&&(Z=i.RG8),U===i.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),U===i.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RG8UI),U===i.UNSIGNED_SHORT&&(Z=i.RG16UI),U===i.UNSIGNED_INT&&(Z=i.RG32UI),U===i.BYTE&&(Z=i.RG8I),U===i.SHORT&&(Z=i.RG16I),U===i.INT&&(Z=i.RG32I)),g===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),U===i.UNSIGNED_INT&&(Z=i.RGB32UI),U===i.BYTE&&(Z=i.RGB8I),U===i.SHORT&&(Z=i.RGB16I),U===i.INT&&(Z=i.RGB32I)),g===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),U===i.UNSIGNED_INT&&(Z=i.RGBA32UI),U===i.BYTE&&(Z=i.RGBA8I),U===i.SHORT&&(Z=i.RGBA16I),U===i.INT&&(Z=i.RGBA32I)),g===i.RGB&&(U===i.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),U===i.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),g===i.RGBA){let Q=ce?qr:it.getTransfer(q);U===i.FLOAT&&(Z=i.RGBA32F),U===i.HALF_FLOAT&&(Z=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Z=Q===mt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),U===i.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get(`EXT_color_buffer_float`),Z}function S(T,g){let U;return T?g===null||g===Vn||g===Nr?U=i.DEPTH24_STENCIL8:g===Gn?U=i.DEPTH32F_STENCIL8:g===Ir&&(U=i.DEPTH24_STENCIL8,Fe(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):g===null||g===Vn||g===Nr?U=i.DEPTH_COMPONENT24:g===Gn?U=i.DEPTH_COMPONENT32F:g===Ir&&(U=i.DEPTH_COMPONENT16),U}function w(T,g){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==rn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function C(T){let g=T.target;g.removeEventListener(`dispose`,C),E(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function y(T){let g=T.target;g.removeEventListener(`dispose`,y),L(g)}function E(T){let g=n.get(T);if(g.__webglInit===void 0)return;let U=T.source,z=m.get(U);if(z){let q=z[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(T),Object.keys(z).length===0&&m.delete(U)}n.remove(T)}function P(T){let g=n.get(T);i.deleteTexture(g.__webglTexture);let U=T.source,z=m.get(U);delete z[g.__cacheKey],a.memory.textures--}function L(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let q=0;q<g.__webglFramebuffer[z].length;q++)i.deleteFramebuffer(g.__webglFramebuffer[z][q]);else i.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)i.deleteFramebuffer(g.__webglFramebuffer[z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let U=T.textures;for(let z=0,q=U.length;z<q;z++){let ce=n.get(U[z]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(U[z])}n.remove(T)}let F=0;function V(){F=0}function N(){return F}function G(T){F=T}function J(){let T=F;return T>=r.maxTextures&&Fe(`WebGLTextures: Trying to use `+(T+1)+` texture units while this GPU supports only `+r.maxTextures),F+=1,T}function K(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function oe(T,g){let U=n.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){let z=T.image;if(z===null)Fe(`WebGLRenderer: Texture marked for update but no image data found.`);else if(z.complete===!1)Fe(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(U,T,g);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function Y(T,g){let U=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){Se(U,T,g);return}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function te(T,g){let U=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){Se(U,T,g);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function re(T,g){let U=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&U.__version!==T.version){We(U,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}let Le={[vr]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},Ne={[tn]:i.NEAREST,[_h]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},bt={[Mh]:i.NEVER,[Th]:i.ALWAYS,[bh]:i.LESS,[Do]:i.LEQUAL,[Sh]:i.EQUAL,[Lo]:i.GEQUAL,[wh]:i.GREATER,[Eh]:i.NOTEQUAL};function at(T,g){if(g.type===Gn&&e.has(`OES_texture_float_linear`)===!1&&(g.magFilter===rn||g.magFilter===$a||g.magFilter===fs||g.magFilter===Di||g.minFilter===rn||g.minFilter===$a||g.minFilter===fs||g.minFilter===Di)&&Fe(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),i.texParameteri(T,i.TEXTURE_WRAP_S,Le[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Le[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Le[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ne[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ne[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,bt[g.compareFunction])),e.has(`EXT_texture_filter_anisotropic`)===!0){if(g.magFilter===tn||g.minFilter!==fs&&g.minFilter!==Di||g.type===Gn&&e.has(`OES_texture_float_linear`)===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let U=e.get(`EXT_texture_filter_anisotropic`);i.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ct(T,g){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener(`dispose`,C));let z=g.source,q=m.get(z);q===void 0&&(q={},m.set(z,q));let ce=K(g);if(ce!==T.__cacheKey){q[ce]===void 0&&(q[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),q[ce].usedTimes++;let ue=q[T.__cacheKey];ue!==void 0&&(q[T.__cacheKey].usedTimes--,ue.usedTimes===0&&P(g)),T.__cacheKey=ce,T.__webglTexture=q[ce].texture}return U}function $(T,g,U){return Math.floor(Math.floor(T/U)/g)}function ee(T,g,U,z){let ce=T.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,U,z,g.data);else{ce.sort((Re,me)=>Re.start-me.start);let ue=0;for(let Re=1;Re<ce.length;Re++){let me=ce[ue],de=ce[Re],Pe=me.start+me.count,Be=$(de.start,g.width,4),Ye=$(me.start,g.width,4);de.start<=Pe+1&&Be===Ye&&$(de.start+de.count-1,g.width,4)===Be?me.count=Math.max(me.count,de.start+de.count-me.start):(++ue,ce[ue]=de)}ce.length=ue+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Re=0,me=ce.length;Re<me;Re++){let de=ce[Re],Pe=Math.floor(de.start/4),Be=Math.ceil(de.count/4),Ye=Pe%g.width,I=Math.floor(Pe/g.width),fe=Be;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ye,I,fe,1,U,z,g.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function Se(T,g,U){let z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=i.TEXTURE_3D);let q=ct(T,g),ce=g.source;t.bindTexture(z,T.__webglTexture,i.TEXTURE0+U);let ue=n.get(ce);if(ce.version!==ue.__version||q===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<`u`&&g.image instanceof ImageBitmap)===!1){let j=it.getPrimaries(it.workingColorSpace),pe=g.colorSpace===hi?null:it.getPrimaries(g.colorSpace),xe=g.colorSpace===hi||j===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=p(g.image,!1,r.maxTextureSize);Q=on(g,Q);let he=s.convert(g.format,g.colorSpace),Re=s.convert(g.type),me=v(g.internalFormat,he,Re,g.normalized,g.colorSpace,g.isVideoTexture);at(z,g);let de,Pe=g.mipmaps,Be=g.isVideoTexture!==!0,Ye=ue.__version===void 0||q===!0,I=ce.dataReady,fe=w(g,Q);if(g.isDepthTexture)me=S(g.format===Li,g.type),Ye&&(Be?t.texStorage2D(i.TEXTURE_2D,1,me,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,me,Q.width,Q.height,0,he,Re,null));else if(g.isDataTexture)if(Pe.length>0){Be&&Ye&&t.texStorage2D(i.TEXTURE_2D,fe,me,Pe[0].width,Pe[0].height);for(let j=0,pe=Pe.length;j<pe;j++)de=Pe[j],Be?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,he,Re,de.data):t.texImage2D(i.TEXTURE_2D,j,me,de.width,de.height,0,he,Re,de.data);g.generateMipmaps=!1}else Be?(Ye&&t.texStorage2D(i.TEXTURE_2D,fe,me,Q.width,Q.height),I&&ee(g,Q,he,Re)):t.texImage2D(i.TEXTURE_2D,0,me,Q.width,Q.height,0,he,Re,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Be&&Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,Pe[0].width,Pe[0].height,Q.depth);for(let j=0,pe=Pe.length;j<pe;j++)if(de=Pe[j],g.format!==Pn)if(he!==null)if(Be){if(I)if(g.layerUpdates.size>0){let xe=dc(de.width,de.height,g.format,g.type);for(let ie of g.layerUpdates){let De=de.data.subarray(ie*xe/de.data.BYTES_PER_ELEMENT,(ie+1)*xe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ie,de.width,de.height,1,he,De)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,Q.depth,he,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,me,de.width,de.height,Q.depth,0,de.data,0,0);else Fe(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else Be?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,Q.depth,he,Re,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,me,de.width,de.height,Q.depth,0,he,Re,de.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Be&&Ye&&t.texStorage2D(i.TEXTURE_2D,fe,me,Pe[0].width,Pe[0].height);for(let j=0,pe=Pe.length;j<pe;j++)de=Pe[j],g.format!==Pn?he!==null?Be?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(i.TEXTURE_2D,j,me,de.width,de.height,0,de.data):Fe(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):Be?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,he,Re,de.data):t.texImage2D(i.TEXTURE_2D,j,me,de.width,de.height,0,he,Re,de.data)}else if(g.isDataArrayTexture)if(Be){if(Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,Q.width,Q.height,Q.depth),I)if(g.layerUpdates.size>0){let j=dc(Q.width,Q.height,g.format,g.type);for(let pe of g.layerUpdates){let xe=Q.data.subarray(pe*j/Q.data.BYTES_PER_ELEMENT,(pe+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,Q.width,Q.height,1,he,Re,xe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Re,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,Q.width,Q.height,Q.depth,0,he,Re,Q.data);else if(g.isData3DTexture)Be?(Ye&&t.texStorage3D(i.TEXTURE_3D,fe,me,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Re,Q.data)):t.texImage3D(i.TEXTURE_3D,0,me,Q.width,Q.height,Q.depth,0,he,Re,Q.data);else if(g.isFramebufferTexture){if(Ye)if(Be)t.texStorage2D(i.TEXTURE_2D,fe,me,Q.width,Q.height);else{let j=Q.width,pe=Q.height;for(let xe=0;xe<fe;xe++)t.texImage2D(i.TEXTURE_2D,xe,me,j,pe,0,he,Re,null),j>>=1,pe>>=1}}else if(g.isHTMLTexture){if(`texElementImage2D`in i){let j=i.canvas;if(j.hasAttribute(`layoutsubtree`)||j.setAttribute(`layoutsubtree`,`true`),Q.parentNode!==j){j.appendChild(Q),f.add(g),j.onpaint=pe=>{let xe=pe.changedElements;for(let ie of f)xe.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let xe=i.RGBA,ie=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,ie,De,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Be&&Ye){let j=_t(Pe[0]);t.texStorage2D(i.TEXTURE_2D,fe,me,j.width,j.height)}for(let j=0,pe=Pe.length;j<pe;j++)de=Pe[j],Be?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,he,Re,de):t.texImage2D(i.TEXTURE_2D,j,me,he,Re,de);g.generateMipmaps=!1}else if(Be){if(Ye){let j=_t(Q);t.texStorage2D(i.TEXTURE_2D,fe,me,j.width,j.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Re,Q)}else t.texImage2D(i.TEXTURE_2D,0,me,he,Re,Q);d(g)&&b(z),ue.__version=ce.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function We(T,g,U){if(g.image.length!==6)return;let z=ct(T,g),q=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+U);let ce=n.get(q);if(q.version!==ce.__version||z===!0){t.activeTexture(i.TEXTURE0+U);let ue=it.getPrimaries(it.workingColorSpace),Z=g.colorSpace===hi?null:it.getPrimaries(g.colorSpace),Q=g.colorSpace===hi||ue===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let he=g.isCompressedTexture||g.image[0].isCompressedTexture,Re=g.image[0]&&g.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!he&&!Re?me[ie]=p(g.image[ie],!0,r.maxCubemapSize):me[ie]=Re?g.image[ie].image:g.image[ie],me[ie]=on(g,me[ie]);let de=me[0],Pe=s.convert(g.format,g.colorSpace),Be=s.convert(g.type),Ye=v(g.internalFormat,Pe,Be,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,fe=ce.__version===void 0||z===!0,j=q.dataReady,pe=w(g,de);at(i.TEXTURE_CUBE_MAP,g);let xe;if(he){I&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ye,de.width,de.height);for(let ie=0;ie<6;ie++){xe=me[ie].mipmaps;for(let De=0;De<xe.length;De++){let Te=xe[De];g.format!==Pn?Pe!==null?I?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,0,0,Te.width,Te.height,Pe,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,Ye,Te.width,Te.height,0,Te.data):Fe(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,0,0,Te.width,Te.height,Pe,Be,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,Ye,Te.width,Te.height,0,Pe,Be,Te.data)}}}else{if(xe=g.mipmaps,I&&fe){xe.length>0&&pe++;let ie=_t(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ye,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,Pe,Be,me[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,me[ie].width,me[ie].height,0,Pe,Be,me[ie].data);for(let De=0;De<xe.length;De++){let wt=xe[De].image[ie].image;I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,0,0,wt.width,wt.height,Pe,Be,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,Ye,wt.width,wt.height,0,Pe,Be,wt.data)}}else{I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,Be,me[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ye,Pe,Be,me[ie]);for(let De=0;De<xe.length;De++){let Te=xe[De];I?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,0,0,Pe,Be,Te.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,Ye,Pe,Be,Te.image[ie])}}}d(g)&&b(i.TEXTURE_CUBE_MAP),ce.__version=q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Me(T,g,U,z,q,ce){let ue=s.convert(U.format,U.colorSpace),Z=s.convert(U.type),Q=v(U.internalFormat,ue,Z,U.normalized,U.colorSpace),he=n.get(g),Re=n.get(U);if(Re.__renderTarget=g,!he.__hasExternalTextures){let me=Math.max(1,g.width>>ce),de=Math.max(1,g.height>>ce);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ce,Q,me,de,g.depth,0,ue,Z,null):t.texImage2D(q,ce,Q,me,de,0,ue,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ot(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,q,Re.__webglTexture,0,It(g)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,q,Re.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(T,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){let z=g.depthTexture,q=z&&z.isDepthTexture?z.type:null,ce=S(g.stencilBuffer,q),ue=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ot(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(g),ce,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(g),ce,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ce,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,T)}else{let z=g.textures;for(let q=0;q<z.length;q++){let ce=z[q],ue=s.convert(ce.format,ce.colorSpace),Z=s.convert(ce.type),Q=v(ce.internalFormat,ue,Z,ce.normalized,ce.colorSpace);Ot(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(g),Q,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(g),Q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Gt(T,g,U){let z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let q=n.get(g.depthTexture);if(q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(q.__webglInit===void 0&&(q.__webglInit=!0,g.depthTexture.addEventListener(`dispose`,C)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),at(i.TEXTURE_CUBE_MAP,g.depthTexture);let he=s.convert(g.depthTexture.format),Re=s.convert(g.depthTexture.type),me;g.depthTexture.format===Zn?me=i.DEPTH_COMPONENT24:g.depthTexture.format===Li&&(me=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,me,g.width,g.height,0,he,Re,null)}}else oe(g.depthTexture,0);let ce=q.__webglTexture,ue=It(g),Z=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Q=g.depthTexture.format===Li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Zn)Ot(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,ce,0);else if(g.depthTexture.format===Li)Ot(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,ce,0);else throw new Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Qe(T){let g=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let z=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){let q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener(`dispose`,q)};z.addEventListener(`dispose`,q),g.__depthDisposeCallback=q}g.__boundDepthTexture=z}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let z=0;z<6;z++)Gt(g.__webglFramebuffer[z],T,z);else{let z=T.texture.mipmaps;z&&z.length>0?Gt(g.__webglFramebuffer[0],T,0):Gt(g.__webglFramebuffer,T,0)}else if(U){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=i.createRenderbuffer(),Ke(g.__webglDepthbuffer[z],T,!1);else{let q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ce)}}else{let z=T.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ke(g.__webglDepthbuffer,T,!1);else{let q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,g,U){let z=n.get(T);g!==void 0&&Me(z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Qe(T)}function St(T){let g=T.texture,U=n.get(T),z=n.get(g);T.addEventListener(`dispose`,y);let q=T.textures,ce=T.isWebGLCubeRenderTarget===!0,ue=q.length>1;if(ue||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=g.version,a.memory.textures++),ce){U.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[Z]=[];for(let Q=0;Q<g.mipmaps.length;Q++)U.__webglFramebuffer[Z][Q]=i.createFramebuffer()}else U.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)U.__webglFramebuffer[Z]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ue)for(let Z=0,Q=q.length;Z<Q;Z++){let he=n.get(q[Z]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ot(T)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Z=0;Z<q.length;Z++){let Q=q[Z];U.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[Z]);let he=s.convert(Q.format,Q.colorSpace),Re=s.convert(Q.type),me=v(Q.internalFormat,he,Re,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),de=It(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,me,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,U.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),at(i.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)Me(U.__webglFramebuffer[Z][Q],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else Me(U.__webglFramebuffer[Z],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(g)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let Z=0,Q=q.length;Z<Q;Z++){let he=q[Z],Re=n.get(he),me=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(me=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Re.__webglTexture),at(me,he),Me(U.__webglFramebuffer,T,he,i.COLOR_ATTACHMENT0+Z,me,0),d(he)&&b(me)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,z.__webglTexture),at(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)Me(U.__webglFramebuffer[Q],T,g,i.COLOR_ATTACHMENT0,Z,Q);else Me(U.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,Z,0);d(g)&&b(Z),t.unbindTexture()}T.depthBuffer&&Qe(T)}function tt(T){let g=T.textures;for(let U=0,z=g.length;U<z;U++){let q=g[U];if(d(q)){let ce=A(T),ue=n.get(q).__webglTexture;t.bindTexture(ce,ue),b(ce),t.unbindTexture()}}}let Rt=[],Jt=[];function xn(T){if(T.samples>0){if(Ot(T)===!1){let g=T.textures,U=T.width,z=T.height,q=i.COLOR_BUFFER_BIT,ce=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(T),Z=g.length>1;if(Z)for(let he=0;he<g.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let Q=T.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let he=0;he<g.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);let Re=n.get(g[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,U,z,0,0,U,z,q,i.NEAREST),c===!0&&(Rt.length=0,Jt.length=0,Rt.push(i.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(Rt.push(ce),Jt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let he=0;he<g.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);let Re=n.get(g[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function It(T){return Math.min(r.maxSamples,T.samples)}function Ot(T){let g=n.get(T);return T.samples>0&&e.has(`WEBGL_multisampled_render_to_texture`)===!0&&g.__useRenderToTexture!==!1}function D(T){let g=a.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function on(T,g){let U=T.colorSpace,z=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Xr&&U!==hi&&(it.getTransfer(U)===mt?(z!==Pn||q!==bn)&&Fe(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):ke(`WebGLTextures: Unsupported texture color space:`,U)),g}function _t(T){return typeof HTMLImageElement<`u`&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<`u`&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=G,this.setTexture2D=oe,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=re,this.rebindTextures=lt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function a_(i,e){function t(n,r=hi){let s,a=it.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ec)return i.BYTE;if(n===tc)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===Za)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===rc)return i.ALPHA;if(n===sc)return i.RGB;if(n===Pn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===ac)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===Qa)return i.RG_INTEGER;if(n===eo)return i.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===_s)if(a===mt)if(s=e.get(`WEBGL_compressed_texture_s3tc_srgb`),s!==null){if(n===ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get(`WEBGL_compressed_texture_s3tc`),s!==null){if(n===ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===no||n===io||n===ro)if(s=e.get(`WEBGL_compressed_texture_pvrtc`),s!==null){if(n===to)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===no)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ao||n===oo||n===lo||n===co||n===ys||n===uo)if(s=e.get(`WEBGL_compressed_texture_etc`),s!==null){if(n===so||n===ao)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===lo)return s.COMPRESSED_R11_EAC;if(n===co)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ys)return s.COMPRESSED_RG11_EAC;if(n===uo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ho||n===fo||n===po||n===mo||n===go||n===_o||n===yo||n===xo||n===vo||n===Mo||n===bo||n===So||n===wo||n===Eo)if(s=e.get(`WEBGL_compressed_texture_astc`),s!==null){if(n===ho)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_o)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===Co||n===Ao)if(s=e.get(`EXT_texture_compression_bptc`),s!==null){if(n===To)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ro||n===Po||n===xs||n===Io)if(s=e.get(`EXT_texture_compression_rgtc`),s!==null){if(n===Ro)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`;var l_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;var Tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ts(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new En({vertexShader:o_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var Cc=class extends Jn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o=`local-floor`,c=1,l=null,h=null,f=null,u=null,m=null,_=null,M=typeof XRWebGLBinding<`u`,p=new Tc,d={},b=t.getContextAttributes(),A=null,v=null,S=[],w=[],C=new rt,y=null,E=null,P=new en;P.viewport=new Pt;let L=new en;L.viewport=new Pt;let F=[P,L],V=new Wa,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=S[$];return ee===void 0&&(ee=new wr,S[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=S[$];return ee===void 0&&(ee=new wr,S[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=S[$];return ee===void 0&&(ee=new wr,S[$]=ee),ee.getHandSpace()};function J($){let ee=w.indexOf($.inputSource);if(ee===-1)return;let Se=S[ee];Se!==void 0&&(Se.update($.inputSource,$.frame,l||a),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){r.removeEventListener(`select`,J),r.removeEventListener(`selectstart`,J),r.removeEventListener(`selectend`,J),r.removeEventListener(`squeeze`,J),r.removeEventListener(`squeezestart`,J),r.removeEventListener(`squeezeend`,J),r.removeEventListener(`end`,K),r.removeEventListener(`inputsourceschange`,oe);for(let $=0;$<S.length;$++){let ee=w[$];ee!==null&&(w[$]=null,S[$].disconnect(ee))}N=null,G=null,p.reset();for(let $ in d)delete d[$];if(e.setRenderTarget(A),m=null,u=null,f=null,r=null,v=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),E!==null){let $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Fe(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Fe(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(A=e.getRenderTarget(),r.addEventListener(`select`,J),r.addEventListener(`selectstart`,J),r.addEventListener(`selectend`,J),r.addEventListener(`squeeze`,J),r.addEventListener(`squeezestart`,J),r.addEventListener(`squeezeend`,J),r.addEventListener(`end`,K),r.addEventListener(`inputsourceschange`,oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),M&&`createProjectionLayer`in XRWebGLBinding.prototype){let Se=null,We=null,Me=null;b.depth&&(Me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=b.stencil?Li:Zn,We=b.stencil?Nr:Vn);let Ke={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ke),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Mn(u.textureWidth,u.textureHeight,{format:Pn,type:bn,depthTexture:new Ci(u.textureWidth,u.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Mn(m.framebufferWidth,m.framebufferHeight,{format:Pn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe($){for(let ee=0;ee<$.removed.length;ee++){let Se=$.removed[ee],We=w.indexOf(Se);We>=0&&(w[We]=null,S[We].disconnect(Se))}for(let ee=0;ee<$.added.length;ee++){let Se=$.added[ee],We=w.indexOf(Se);if(We===-1){for(let Ke=0;Ke<S.length;Ke++)if(Ke>=w.length){w.push(Se),We=Ke;break}else if(w[Ke]===null){w[Ke]=Se,We=Ke;break}if(We===-1)break}let Me=S[We];Me&&Me.connect(Se)}}let Y=new O,te=new O;function re($,ee,Se){Y.setFromMatrixPosition(ee.matrixWorld),te.setFromMatrixPosition(Se.matrixWorld);let We=Y.distanceTo(te),Me=ee.projectionMatrix.elements,Ke=Se.projectionMatrix.elements,Gt=Me[14]/(Me[10]-1),Qe=Me[14]/(Me[10]+1),lt=(Me[9]+1)/Me[5],St=(Me[9]-1)/Me[5],tt=(Me[8]-1)/Me[0],Rt=(Ke[8]+1)/Ke[0],Jt=Gt*tt,xn=Gt*Rt,It=We/(-tt+Rt),Ot=It*-tt;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ot),$.translateZ(It),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Me[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let D=Gt+It,on=Qe+It,_t=Jt-Ot,T=xn+(We-Ot),g=lt*Qe/on*D,U=St*Qe/on*D;$.projectionMatrix.makePerspective(_t,T,g,U,D,on),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Le($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ee=$.near,Se=$.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(Se=p.depthFar)),V.near=L.near=P.near=ee,V.far=L.far=P.far=Se,(N!==V.near||G!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,G=V.far),V.layers.mask=$.layers.mask|6,P.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let We=$.parent,Me=V.cameras;Le(V,We);for(let Ke=0;Ke<Me.length;Ke++)Le(Me[Ke],We);Me.length===2?re(V,P,L):V.projectionMatrix.copy(P.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),Ne($,V,We)};function Ne($,ee,Se){Se===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=va*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function($){return d[$]};let bt=null;function at($,ee){if(h=ee.getViewerPose(l||a),_=ee,h!==null){let Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let We=!1;Se.length!==V.cameras.length&&(V.cameras.length=0,We=!0);for(let Qe=0;Qe<Se.length;Qe++){let lt=Se[Qe],St=null;if(m!==null)St=m.getViewport(lt);else{let Rt=f.getViewSubImage(u,lt);St=Rt.viewport,Qe===0&&(e.setRenderTargetTextures(v,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(v))}let tt=F[Qe];tt===void 0&&(tt=new en,tt.layers.enable(Qe),tt.viewport=new Pt,F[Qe]=tt),tt.matrix.fromArray(lt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(lt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(St.x,St.y,St.width,St.height),Qe===0&&(V.matrix.copy(tt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),We===!0&&V.cameras.push(tt)}let Me=r.enabledFeatures;if(Me&&Me.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&M){f=n.getBinding();let Qe=f.getDepthInformation(Se[0]);Qe&&Qe.isValid&&Qe.texture&&p.init(Qe,r.renderState)}if(Me&&Me.includes(`camera-access`)&&M){e.state.unbindTexture(),f=n.getBinding();for(let Qe=0;Qe<Se.length;Qe++){let lt=Se[Qe].camera;if(lt){let St=d[lt];St||(St=new ts,d[lt]=St);let tt=f.getCameraImage(lt);St.sourceTexture=tt}}}}for(let Se=0;Se<S.length;Se++){let We=w[Se],Me=S[Se];We!==null&&Me!==void 0&&Me.update(We,ee,l||a)}bt&&bt($,ee),ee.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:ee}),_=null}let ct=new id;ct.setAnimationLoop(at),this.setAnimationLoop=function($){bt=$},this.dispose=function(){}}};var c_=new yt;var cd=new He;cd.set(-1,0,0,0,1,0,0,0,1);function u_(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,cc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,A,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,v)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),M(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,b,A):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===yn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===yn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let b=e.get(d),A=b.envMap,v=b.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(cd),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,b,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===yn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){let b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function h_(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let w=S.program;n.uniformBlockBinding(v,w)}function l(v,S){let w=r[v.id];w===void 0&&(p(v),w=h(v),r[v.id]=w,v.addEventListener(`dispose`,b));let C=S.program;n.updateUBOMapping(v,C);let y=e.render.frame;s[v.id]!==y&&(u(v),s[v.id]=y)}function h(v){let S=f();v.__bindingPointIndex=S;let w=i.createBuffer(),C=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return ke(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function u(v){let S=r[v.id],w=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,E=w.length;y<E;y++){let P=w[y];if(Array.isArray(P))for(let L=0,F=P.length;L<F;L++)m(P[L],y,L,C);else m(P,y,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,S,w,C){if(M(v,S,w,C)===!0){let y=v.__offset,E=v.value;if(Array.isArray(E)){let P=0;for(let L=0;L<E.length;L++){let F=E[L],V=d(F);_(F,v.__data,P),typeof F!=`number`&&typeof F!=`boolean`&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function _(v,S,w){typeof v==`number`||typeof v==`boolean`?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function M(v,S,w,C){let y=v.value,E=S+`_`+w;if(C[E]===void 0)return typeof y==`number`||typeof y==`boolean`?C[E]=y:ArrayBuffer.isView(y)?C[E]=y.slice():C[E]=y.clone(),!0;{let P=C[E];if(typeof y==`number`||typeof y==`boolean`){if(P!==y)return C[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function p(v){let S=v.uniforms,w=0,C=16;for(let E=0,P=S.length;E<P;E++){let L=Array.isArray(S[E])?S[E]:[S[E]];for(let F=0,V=L.length;F<V;F++){let N=L[F],G=Array.isArray(N.value)?N.value:[N.value];for(let J=0,K=G.length;J<K;J++){let oe=G[J],Y=d(oe),te=w%C,re=te%Y.boundary,Le=te+re;w+=re,Le!==0&&C-Le<Y.storage&&(w+=C-Le),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=Y.storage}}}let y=w%C;return y>0&&(w+=C-y),v.__size=w,v.__cache={},this}function d(v){let S={boundary:0,storage:0};return typeof v==`number`||typeof v==`boolean`?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Fe(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Fe(`WebGLRenderer: Unsupported uniform value type.`,v),S}function b(v){let S=v.target;S.removeEventListener(`dispose`,b);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function A(){for(let v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:A}}var d_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var ei=null;function f_(){return ei===null&&(ei=new wa(d_,16,16,Oi,Hn),ei.name=`DFG_LUT`,ei.minFilter=rn,ei.magFilter=rn,ei.wrapS=$n,ei.wrapT=$n,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var Ur=class{constructor(e={}){let{canvas:t=Ah(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=bn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw new Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let M=m,p=new Set([eo,Qa,ja]),d=new Set([bn,Vn,Ir,Nr,Ja,Ka]),b=new Uint32Array(4),A=new Int32Array(4),v=new O,S=null,w=null,C=[],y=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,F=null,V=null,N=null,G=null;this._outputColorSpace=Qt;let J=0,K=0,oe=null,Y=-1,te=null,re=new Pt,Le=new Pt,Ne=null,bt=new $e(0),at=0,ct=t.width,$=t.height,ee=1,Se=null,We=null,Me=new Pt(0,0,ct,$),Ke=new Pt(0,0,ct,$),Gt=!1,Qe=new Er,lt=!1,St=!1,tt=new yt,Rt=new O,Jt=new Pt,xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function Ot(){return oe===null?ee:1}let D=n;function on(x,R){return t.getContext(x,R)}let _t,T,g,U,z,q,ce,ue,Z,Q,he,Re,me,de,Pe,Be,Ye,I,fe,j,pe,xe,ie;try{let x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,wt,!1),t.addEventListener(`webglcontextrestored`,ft,!1),t.addEventListener(`webglcontextcreationerror`,In,!1),D===null){let R=`webgl2`;if(D=on(R,x),D===null)throw on(R)?new Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):new Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}De()}catch(x){throw t.removeEventListener(`webglcontextlost`,wt,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,In,!1),ke(`WebGLRenderer: `+x.message),x}function De(){_t=new vg(D),_t.init(),pe=new a_(D,_t),T=new ug(D,_t,e,pe),g=new r_(D,_t),T.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),V=D.createFramebuffer(),N=D.createFramebuffer(),G=D.createFramebuffer(),U=new Sg(D),z=new W0,q=new s_(D,_t,g,z,T,pe,U),ce=new xg(P),ue=new Ef(D),xe=new lg(D,ue),Z=new Mg(D,ue,U,xe),Q=new Eg(D,Z,ue,xe,U),I=new wg(D,T,q),Pe=new hg(z),he=new H0(P,ce,_t,T,xe,Pe),Re=new u_(P,z),me=new q0,de=new j0(_t),Ye=new og(P,ce,g,Q,_,c),Be=new i_(P,Q,T),ie=new h_(D,U,T,g),fe=new cg(D,_t,U),j=new bg(D,_t,U),U.programs=he.programs,P.capabilities=T,P.extensions=_t,P.properties=z,P.renderLists=me,P.shadowMap=Be,P.state=g,P.info=U}M!==bn&&(E=new Cg(M,t.width,t.height,o,r,s));let Te=new Cc(P,D);this.xr=Te,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let x=_t.get(`WEBGL_lose_context`);x&&x.loseContext()},this.forceContextRestore=function(){let x=_t.get(`WEBGL_lose_context`);x&&x.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(x){x!==void 0&&(ee=x,this.setSize(ct,$,!1))},this.getSize=function(x){return x.set(ct,$)},this.setSize=function(x,R,H=!0){if(Te.isPresenting){Fe(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ct=x,$=R,t.width=Math.floor(x*ee),t.height=Math.floor(R*ee),H===!0&&(t.style.width=x+`px`,t.style.height=R+`px`),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,R)},this.getDrawingBufferSize=function(x){return x.set(ct*ee,$*ee).floor()},this.setDrawingBufferSize=function(x,R,H){ct=x,$=R,ee=H,t.width=Math.floor(x*H),t.height=Math.floor(R*H),this.setViewport(0,0,x,R)},this.setEffects=function(x){if(M===bn){ke(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(x){for(let R=0;R<x.length;R++)if(x[R].isOutputPass===!0){Fe(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(re)},this.getViewport=function(x){return x.copy(Me)},this.setViewport=function(x,R,H,B){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,R,H,B),g.viewport(re.copy(Me).multiplyScalar(ee).round())},this.getScissor=function(x){return x.copy(Ke)},this.setScissor=function(x,R,H,B){x.isVector4?Ke.set(x.x,x.y,x.z,x.w):Ke.set(x,R,H,B),g.scissor(Le.copy(Ke).multiplyScalar(ee).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(x){g.setScissorTest(Gt=x)},this.setOpaqueSort=function(x){Se=x},this.setTransparentSort=function(x){We=x},this.getClearColor=function(x){return x.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(x=!0,R=!0,H=!0){let B=0;if(x){let k=!1;if(oe!==null){let ye=oe.texture.format;k=p.has(ye)}if(k){let ye=oe.texture.type,be=d.has(ye),_e=Ye.getClearColor(),we=Ye.getClearAlpha(),Ae=_e.r,Ze=_e.g,et=_e.b;be?(b[0]=Ae,b[1]=Ze,b[2]=et,b[3]=we,D.clearBufferuiv(D.COLOR,0,b)):(A[0]=Ae,A[1]=Ze,A[2]=et,A[3]=we,D.clearBufferiv(D.COLOR,0,A))}else B|=D.COLOR_BUFFER_BIT}R&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),F=x},this.dispose=function(){t.removeEventListener(`webglcontextlost`,wt,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,In,!1),Ye.dispose(),me.dispose(),de.dispose(),z.dispose(),ce.dispose(),Q.dispose(),xe.dispose(),ie.dispose(),he.dispose(),Te.dispose(),Te.removeEventListener(`sessionstart`,Fc),Te.removeEventListener(`sessionend`,Bc),Ui.stop()};function wt(x){x.preventDefault(),lc(`WebGLRenderer: Context Lost.`),L=!0}function ft(){lc(`WebGLRenderer: Context Restored.`),L=!1;let x=U.autoReset,R=Be.enabled,H=Be.autoUpdate,B=Be.needsUpdate,k=Be.type;De(),U.autoReset=x,Be.enabled=R,Be.autoUpdate=H,Be.needsUpdate=B,Be.type=k}function In(x){ke(`WebGLRenderer: A WebGL context could not be created. Reason: `,x.statusMessage)}function Wn(x){let R=x.target;R.removeEventListener(`dispose`,Wn),yd(R)}function yd(x){xd(x),z.remove(x)}function xd(x){let R=z.get(x).programs;R!==void 0&&(R.forEach(function(H){he.releaseProgram(H)}),x.isShaderMaterial&&he.releaseShaderCache(x))}this.renderBufferDirect=function(x,R,H,B,k,ye){R===null&&(R=xn);let be=k.isMesh&&k.matrixWorld.determinantAffine()<0,_e=bd(x,R,H,B,k);g.setMaterial(B,be);let we=H.index,Ae=1;if(B.wireframe===!0){if(we=Z.getWireframeAttribute(H),we===void 0)return;Ae=2}let Ze=H.drawRange,et=H.attributes.position,Ee=Ze.start*Ae,pt=(Ze.start+Ze.count)*Ae;ye!==null&&(Ee=Math.max(Ee,ye.start*Ae),pt=Math.min(pt,(ye.start+ye.count)*Ae)),we!==null?(Ee=Math.max(Ee,0),pt=Math.min(pt,we.count)):et!=null&&(Ee=Math.max(Ee,0),pt=Math.min(pt,et.count));let Ut=pt-Ee;if(Ut<0||Ut===1/0)return;xe.setup(k,B,_e,H,we);let Ct,vt=fe;if(we!==null&&(Ct=ue.get(we),vt=j,vt.setIndex(Ct)),k.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*Ot()),vt.setMode(D.LINES)):vt.setMode(D.TRIANGLES);else if(k.isLine){let ln=B.linewidth;ln===void 0&&(ln=1),g.setLineWidth(ln*Ot()),k.isLineSegments?vt.setMode(D.LINES):k.isLineLoop?vt.setMode(D.LINE_LOOP):vt.setMode(D.LINE_STRIP)}else k.isPoints?vt.setMode(D.POINTS):k.isSprite&&vt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(_t.get(`WEBGL_multi_draw`))vt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let ln=k._multiDrawStarts,ve=k._multiDrawCounts,fn=k._multiDrawCount,ot=we?ue.get(we).bytesPerElement:1,Cn=z.get(B).currentProgram.getUniforms();for(let Xn=0;Xn<fn;Xn++)Cn.setValue(D,`_gl_DrawID`,Xn),vt.render(ln[Xn]/ot,ve[Xn])}else if(k.isInstancedMesh)vt.renderInstances(Ee,Ut,k.count);else if(H.isInstancedBufferGeometry){let ln=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ve=Math.min(H.instanceCount,ln);vt.renderInstances(Ee,Ut,ve)}else vt.render(Ee,Ut)};function Uc(x,R,H,B){F!==null&&x.isNodeMaterial&&F.setObject(B,x),lt===!0&&Pe.setState(x,H,!1),x.transparent===!0&&x.side===jn&&x.forceSinglePass===!1?(x.side=yn,x.needsUpdate=!0,Cs(x,R,B),x.side=Ii,x.needsUpdate=!0,Cs(x,R,B),x.side=jn):Cs(x,R,B)}this.compile=function(x,R,H=null){H===null&&(H=x),F!==null&&F.renderStart(x,R,H),w=de.get(H),w.init(R),y.push(w),H.traverseVisible(function(k){k.isLight&&k.layers.test(R.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),x!==H&&x.traverseVisible(function(k){k.isLight&&k.layers.test(R.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),St=this.localClippingEnabled,lt=Pe.init(this.clippingPlanes,St),lt===!0&&Pe.setGlobalState(this.clippingPlanes,R),F!==null&&Be.render(w.state.shadowsArray,H,R);let B=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ye=k.material;if(ye)if(Array.isArray(ye))for(let be=0;be<ye.length;be++){let _e=ye[be];Uc(_e,H,R,k),B.add(_e)}else Uc(ye,H,R,k),B.add(ye)}),w=y.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(x,R,H=null){let B=this.compile(x,R,H);return new Promise(k=>{function ye(){if(B.forEach(function(be){let we=z.get(be).currentProgram;(we===void 0||we.isReady())&&B.delete(be)}),B.size===0){k(x);return}setTimeout(ye,10)}_t.get(`KHR_parallel_shader_compile`)!==null?ye():setTimeout(ye,10)})};let al=null;function vd(x){al&&al(x)}function Fc(){Ui.stop()}function Bc(){Ui.start()}let Ui=new id;Ui.setAnimationLoop(vd),typeof self<`u`&&Ui.setContext(self),this.setAnimationLoop=function(x){al=x,Te.setAnimationLoop(x),x===null?Ui.stop():Ui.start()},Te.addEventListener(`sessionstart`,Fc),Te.addEventListener(`sessionend`,Bc),this.render=function(x,R){if(R!==void 0&&R.isCamera!==!0){ke(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(L===!0)return;F!==null&&F.renderStart(x,R);let H=Te.enabled===!0&&Te.isPresenting===!0,B=E!==null&&(oe===null||H)&&E.begin(P,oe);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(R),R=Te.getCamera()),x.isScene===!0&&x.onBeforeRender(P,x,R,oe),w=de.get(x,y.length),w.init(R),w.state.textureUnits=q.getTextureUnits(),y.push(w),tt.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Qe.setFromProjectionMatrix(tt,Fn,R.reversedDepth),St=this.localClippingEnabled,lt=Pe.init(this.clippingPlanes,St),S=me.get(x,C.length),S.init(),C.push(S),Te.enabled===!0&&Te.isPresenting===!0){let be=P.xr.getDepthSensingMesh();be!==null&&ol(be,R,-1/0,P.sortObjects)}ol(x,R,0,P.sortObjects),S.finish(),F!==null&&F.updateLights(w.state.lightsArray),P.sortObjects===!0&&S.sort(Se,We),It=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,It&&Ye.addToRenderList(S,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Pe.beginShadows();let k=w.state.shadowsArray;if(Be.render(k,x,R),lt===!0&&Pe.endShadows(),(B&&E.hasRenderPass())===!1){let be=S.opaque,_e=S.transmissive;if(w.setupLights(),R.isArrayCamera){let we=R.cameras;if(_e.length>0)for(let Ae=0,Ze=we.length;Ae<Ze;Ae++){let et=we[Ae];zc(be,_e,x,et)}It&&Ye.render(x);for(let Ae=0,Ze=we.length;Ae<Ze;Ae++){let et=we[Ae];kc(S,x,et,et.viewport)}}else _e.length>0&&zc(be,_e,x,R),It&&Ye.render(x),kc(S,x,R)}oe!==null&&K===0&&(q.updateMultisampleRenderTarget(oe),q.updateRenderTargetMipmap(oe)),B&&E.end(P),x.isScene===!0&&x.onAfterRender(P,x,R),xe.resetDefaultState(),Y=-1,te=null,y.pop(),y.length>0?(w=y[y.length-1],q.setTextureUnits(w.state.textureUnits),lt===!0&&Pe.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,F!==null&&F.renderEnd()};function ol(x,R,H,B){if(x.visible===!1)return;if(x.layers.test(R.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(R);else if(x.isLightProbeGrid)w.pushLightProbeGrid(x);else if(x.isLight)w.pushLight(x),x.castShadow&&w.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Qe)){B&&Jt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(tt);let be=Q.update(x),_e=x.material;_e.visible&&S.push(x,be,_e,H,Jt.z,null,R)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Qe))){let be=Q.update(x),_e=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Jt.copy(x.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Jt.copy(be.boundingSphere.center)),Jt.applyMatrix4(x.matrixWorld).applyMatrix4(tt)),Array.isArray(_e)){let we=be.groups;for(let Ae=0,Ze=we.length;Ae<Ze;Ae++){let et=we[Ae],Ee=_e[et.materialIndex];Ee&&Ee.visible&&S.push(x,be,Ee,H,Jt.z,et,R)}}else _e.visible&&S.push(x,be,_e,H,Jt.z,null,R)}}let ye=x.children;for(let be=0,_e=ye.length;be<_e;be++)ol(ye[be],R,H,B)}function kc(x,R,H,B){let{opaque:k,transmissive:ye,transparent:be}=x;w.setupLightsView(H),lt===!0&&Pe.setGlobalState(P.clippingPlanes,H),B&&g.viewport(re.copy(B)),k.length>0&&Ts(k,R,H),ye.length>0&&Ts(ye,R,H),be.length>0&&Ts(be,R,H),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function zc(x,R,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){let Ee=_t.has(`EXT_color_buffer_half_float`)||_t.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[B.id]=new Mn(1,1,{generateMipmaps:!0,type:Ee?Hn:bn,minFilter:Di,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let ye=w.state.transmissionRenderTarget[B.id],be=B.viewport||re;ye.setSize(be.z*P.transmissionResolutionScale,be.w*P.transmissionResolutionScale);let _e=P.getRenderTarget(),we=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(ye),P.getClearColor(bt),at=P.getClearAlpha(),at<1&&P.setClearColor(16777215,.5),P.clear(),It&&Ye.render(H);let Ze=P.toneMapping;P.toneMapping=zn;let et=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),lt===!0&&Pe.setGlobalState(P.clippingPlanes,B),Ts(x,H,B),q.updateMultisampleRenderTarget(ye),q.updateRenderTargetMipmap(ye),_t.has(`WEBGL_multisampled_render_to_texture`)===!1){let Ee=!1;for(let pt=0,Ut=R.length;pt<Ut;pt++){let{object:vt,geometry:ln,material:ve,group:fn}=R[pt];if(ve.side===jn&&vt.layers.test(B.layers)){let ot=ve.side;ve.side=yn,ve.needsUpdate=!0,Vc(vt,H,B,ln,ve,fn),ve.side=ot,ve.needsUpdate=!0,Ee=!0}}Ee===!0&&(q.updateMultisampleRenderTarget(ye),q.updateRenderTargetMipmap(ye))}P.setRenderTarget(_e,we,Ae),P.setClearColor(bt,at),et!==void 0&&(B.viewport=et),P.toneMapping=Ze}function Ts(x,R,H){let B=R.isScene===!0?R.overrideMaterial:null;for(let k=0,ye=x.length;k<ye;k++){let be=x[k],{object:_e,geometry:we,group:Ae}=be,Ze=be.material;Ze.allowOverride===!0&&B!==null&&(Ze=B),_e.layers.test(H.layers)&&Vc(_e,R,H,we,Ze,Ae)}}function Vc(x,R,H,B,k,ye){F!==null&&k.isNodeMaterial&&F.setObject(x,k),x.onBeforeRender(P,R,H,B,k,ye),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(P,R,H,B,x,ye),k.transparent===!0&&k.side===jn&&k.forceSinglePass===!1?(k.side=yn,k.needsUpdate=!0,P.renderBufferDirect(H,R,B,k,x,ye),k.side=Ii,k.needsUpdate=!0,P.renderBufferDirect(H,R,B,k,x,ye),k.side=jn):P.renderBufferDirect(H,R,B,k,x,ye),x.onAfterRender(P,R,H,B,k,ye)}function Cs(x,R,H){R.isScene!==!0&&(R=xn);let B=z.get(x),k=w.state.lights,ye=w.state.shadowsArray,be=k.state.version,_e=he.getParameters(x,k.state,ye,R,H,w.state.lightProbeGridArray),we=he.getProgramCacheKey(_e),Ae=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,B.fog=R.fog;let Ze=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=ce.get(x.envMap||B.environment,Ze),B.envMapRotation=B.environment!==null&&x.envMap===null?R.environmentRotation:x.envMapRotation,Ae===void 0&&(x.addEventListener(`dispose`,Wn),Ae=new Map,B.programs=Ae);let et=Ae.get(we);if(et!==void 0){if(B.currentProgram===et&&B.lightsStateVersion===be)return Hc(x,_e),et}else _e.uniforms=he.getUniforms(x),F!==null&&x.isNodeMaterial&&F.build(x,H,_e),x.onBeforeCompile(_e,P),et=he.acquireProgram(_e,we),Ae.set(we,et),B.uniforms=_e.uniforms;let Ee=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ee.clippingPlanes=Pe.uniform),Hc(x,_e),B.needsLights=wd(x),B.lightsStateVersion=be,B.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.sunLights.value=k.state.sun,Ee.sunLightShadows.value=k.state.sunShadow,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.sunShadowMatrix.value=k.state.sunShadowMatrix,Ee.sunShadowCascade.value=k.state.sunShadowCascade,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=et,B.uniformsList=null,et}function Gc(x){if(x.uniformsList===null){let R=x.currentProgram.getUniforms();x.uniformsList=Or.seqWithValue(R.seq,x.uniforms)}return x.uniformsList}function Hc(x,R){let H=z.get(x);H.outputColorSpace=R.outputColorSpace,H.batching=R.batching,H.batchingColor=R.batchingColor,H.instancing=R.instancing,H.instancingColor=R.instancingColor,H.instancingMorph=R.instancingMorph,H.skinning=R.skinning,H.morphTargets=R.morphTargets,H.morphNormals=R.morphNormals,H.morphColors=R.morphColors,H.morphTargetsCount=R.morphTargetsCount,H.numClippingPlanes=R.numClippingPlanes,H.numIntersection=R.numClipIntersection,H.vertexAlphas=R.vertexAlphas,H.vertexTangents=R.vertexTangents,H.toneMapping=R.toneMapping}function Md(x,R){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;v.setFromMatrixPosition(R.matrixWorld);for(let H=0,B=x.length;H<B;H++){let k=x[H];if(k.texture!==null&&k.boundingBox.containsPoint(v))return k}return null}function bd(x,R,H,B,k){R.isScene!==!0&&(R=xn),q.resetTextureUnits();let ye=R.fog,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?R.environment:null,_e=oe===null?P.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:it.workingColorSpace,we=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ae=ce.get(B.envMap||be,we),Ze=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,et=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!H.morphAttributes.position,pt=!!H.morphAttributes.normal,Ut=!!H.morphAttributes.color,Ct=zn;B.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ct=P.toneMapping);let vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ln=vt!==void 0?vt.length:0,ve=z.get(B),fn=w.state.lights;if(lt===!0&&(St===!0||x!==te)){let Et=x===te&&B.id===Y;Pe.setState(B,x,Et)}let ot=!1;B.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==fn.state.version||ve.outputColorSpace!==_e||k.isBatchedMesh&&ve.batching===!1||!k.isBatchedMesh&&ve.batching===!0||k.isBatchedMesh&&ve.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&ve.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&ve.instancing===!1||!k.isInstancedMesh&&ve.instancing===!0||k.isSkinnedMesh&&ve.skinning===!1||!k.isSkinnedMesh&&ve.skinning===!0||k.isInstancedMesh&&ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ve.instancingMorph===!1&&k.morphTexture!==null||ve.envMap!==Ae||B.fog===!0&&ve.fog!==ye||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Pe.numPlanes||ve.numIntersection!==Pe.numIntersection)||ve.vertexAlphas!==Ze||ve.vertexTangents!==et||ve.morphTargets!==Ee||ve.morphNormals!==pt||ve.morphColors!==Ut||ve.toneMapping!==Ct||ve.morphTargetsCount!==ln||!!ve.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,ve.__version=B.version);let Cn=ve.currentProgram;ot===!0&&(Cn=Cs(B,R,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Cn,ve));let Xn=!1,pi=!1,er=!1,xt=Cn.getUniforms(),Dt=ve.uniforms;if(g.useProgram(Cn.program)&&(Xn=!0,pi=!0,er=!0),B.id!==Y&&(Y=B.id,pi=!0),ve.needsLights){let Et=Md(w.state.lightProbeGridArray,k);ve.lightProbeGrid!==Et&&(ve.lightProbeGrid=Et,pi=!0)}if(Xn||te!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),xt.setValue(D,`projectionMatrix`,x.projectionMatrix),xt.setValue(D,`viewMatrix`,x.matrixWorldInverse);let gi=xt.map.cameraPosition;gi!==void 0&&gi.setValue(D,Rt.setFromMatrixPosition(x.matrixWorld)),T.logarithmicDepthBuffer&&xt.setValue(D,`logDepthBufFC`,2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&xt.setValue(D,`isOrthographic`,x.isOrthographicCamera===!0),te!==x&&(te=x,pi=!0,er=!0)}if(ve.needsLights&&(fn.state.sunShadowMap.length>0&&xt.setValue(D,`sunShadowMap`,fn.state.sunShadowMap,q),fn.state.directionalShadowMap.length>0&&xt.setValue(D,`directionalShadowMap`,fn.state.directionalShadowMap,q),fn.state.spotShadowMap.length>0&&xt.setValue(D,`spotShadowMap`,fn.state.spotShadowMap,q),fn.state.pointShadowMap.length>0&&xt.setValue(D,`pointShadowMap`,fn.state.pointShadowMap,q)),k.isSkinnedMesh){xt.setOptional(D,k,`bindMatrix`),xt.setOptional(D,k,`bindMatrixInverse`);let Et=k.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),xt.setValue(D,`boneTexture`,Et.boneTexture,q))}k.isBatchedMesh&&(xt.setOptional(D,k,`batchingTexture`),xt.setValue(D,`batchingTexture`,k._matricesTexture,q),xt.setOptional(D,k,`batchingIdTexture`),xt.setValue(D,`batchingIdTexture`,k._indirectTexture,q),xt.setOptional(D,k,`batchingColorTexture`),k._colorsTexture!==null&&xt.setValue(D,`batchingColorTexture`,k._colorsTexture,q));let mi=H.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&I.update(k,H,Cn),(pi||ve.receiveShadow!==k.receiveShadow)&&(ve.receiveShadow=k.receiveShadow,xt.setValue(D,`receiveShadow`,k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&R.environment!==null&&(Dt.envMapIntensity.value=R.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=f_()),pi){if(xt.setValue(D,`toneMappingExposure`,P.toneMappingExposure),ve.needsLights&&Sd(Dt,er),ye&&B.fog===!0&&Re.refreshFogUniforms(Dt,ye),Re.refreshMaterialUniforms(Dt,B,ee,$,w.state.transmissionRenderTarget[x.id]),ve.needsLights&&ve.lightProbeGrid){let Et=ve.lightProbeGrid;Dt.probesSH.value=Et.texture,Dt.probesMin.value.copy(Et.boundingBox.min),Dt.probesMax.value.copy(Et.boundingBox.max),Dt.probesResolution.value.copy(Et.resolution)}Or.upload(D,Gc(ve),Dt,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Or.upload(D,Gc(ve),Dt,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&xt.setValue(D,`center`,k.center),xt.setValue(D,`modelViewMatrix`,k.modelViewMatrix),xt.setValue(D,`normalMatrix`,k.normalMatrix),xt.setValue(D,`modelMatrix`,k.matrixWorld),B.uniformsGroups!==void 0){let Et=B.uniformsGroups;for(let gi=0,tr=Et.length;gi<tr;gi++){let Xc=Et[gi];ie.update(Xc,Cn),ie.bind(Xc,Cn)}}return Cn}function Sd(x,R){x.ambientLightColor.needsUpdate=R,x.lightProbe.needsUpdate=R,x.sunLights.needsUpdate=R,x.sunLightShadows.needsUpdate=R,x.directionalLights.needsUpdate=R,x.directionalLightShadows.needsUpdate=R,x.pointLights.needsUpdate=R,x.pointLightShadows.needsUpdate=R,x.spotLights.needsUpdate=R,x.spotLightShadows.needsUpdate=R,x.rectAreaLights.needsUpdate=R,x.hemisphereLights.needsUpdate=R}function wd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(x,R,H){let B=z.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(x.texture).__webglTexture=R,z.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,R){let H=z.get(x);H.__webglFramebuffer=R,H.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(x,R=0,H=0){oe=x,J=R,K=H;let B=null,k=!1,ye=!1;if(x){let _e=z.get(x);if(_e.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,_e.__webglFramebuffer),re.copy(x.viewport),Le.copy(x.scissor),Ne=x.scissorTest,g.viewport(re),g.scissor(Le),g.setScissorTest(Ne),Y=-1;return}else if(_e.__webglFramebuffer===void 0)q.setupRenderTarget(x);else if(_e.__hasExternalTextures)q.rebindTextures(x,z.get(x.texture).__webglTexture,z.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ze=x.depthTexture;if(_e.__boundDepthTexture!==Ze){if(Ze!==null&&z.has(Ze)&&(x.width!==Ze.image.width||x.height!==Ze.image.height))throw new Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);q.setupDepthRenderbuffer(x)}}let we=x.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);let Ae=z.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ae[R])?B=Ae[R][H]:B=Ae[R],k=!0):x.samples>0&&q.useMultisampledRTT(x)===!1?B=z.get(x).__webglMultisampledFramebuffer:Array.isArray(Ae)?B=Ae[H]:B=Ae,re.copy(x.viewport),Le.copy(x.scissor),Ne=x.scissorTest}else re.copy(Me).multiplyScalar(ee).floor(),Le.copy(Ke).multiplyScalar(ee).floor(),Ne=Gt;if(H!==0&&(B=V),g.bindFramebuffer(D.FRAMEBUFFER,B)&&g.drawBuffers(x,B),g.viewport(re),g.scissor(Le),g.setScissorTest(Ne),k){let _e=z.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+R,_e.__webglTexture,H)}else if(ye){let _e=R;for(let we=0;we<x.textures.length;we++){let Ae=z.get(x.textures[we]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+we,Ae.__webglTexture,H,_e)}}else if(x!==null&&H!==0){let _e=z.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,H)}Y=-1};function Wc(x){let R=z.get(x);return(R.__readFormat!==x.format||R.__readType!==x.type)&&(R.__readFormat=x.format,R.__readType=x.type,R.__formatReadable=T.textureFormatReadable(x.format),R.__typeReadable=T.textureTypeReadable(x.type)),R}this.readRenderTargetPixels=function(x,R,H,B,k,ye,be,_e=0){if(!(x&&x.isWebGLRenderTarget)){ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let we=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){g.bindFramebuffer(D.FRAMEBUFFER,we);try{let Ae=x.textures[_e],Ze=Ae.format,et=Ae.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e);let Ee=Wc(Ae);if(Ee.__formatReadable===!1){ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(Ee.__typeReadable===!1){ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}R>=0&&R<=x.width-B&&H>=0&&H<=x.height-k&&D.readPixels(R,H,B,k,pe.convert(Ze),pe.convert(et),ye)}finally{let Ae=oe!==null?z.get(oe).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(x,R,H,B,k,ye,be,_e=0){if(!(x&&x.isWebGLRenderTarget))throw new Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let we=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we)if(R>=0&&R<=x.width-B&&H>=0&&H<=x.height-k){g.bindFramebuffer(D.FRAMEBUFFER,we);let Ae=x.textures[_e],Ze=Ae.format,et=Ae.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e);let Ee=Wc(Ae);if(Ee.__formatReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(Ee.__typeReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,pt),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),D.readPixels(R,H,B,k,pe.convert(Ze),pe.convert(et),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ut=oe!==null?z.get(oe).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Ut);let Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ph(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(pt),D.deleteSync(Ct),ye}else throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(x,R=null,H=0){let B=Math.pow(2,-H),k=Math.floor(x.image.width*B),ye=Math.floor(x.image.height*B),be=R!==null?R.x:0,_e=R!==null?R.y:0;q.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,be,_e,k,ye),g.unbindTexture()},this.copyTextureToTexture=function(x,R,H=null,B=null,k=0,ye=0){let be,_e,we,Ae,Ze,et,Ee,pt,Ut,Ct=x.isCompressedTexture?x.mipmaps[ye]:x.image;if(H!==null)be=H.max.x-H.min.x,_e=H.max.y-H.min.y,we=H.isBox3?H.max.z-H.min.z:1,Ae=H.min.x,Ze=H.min.y,et=H.isBox3?H.min.z:0;else{let Dt=Math.pow(2,-k);be=Math.floor(Ct.width*Dt),_e=Math.floor(Ct.height*Dt),x.isDataArrayTexture?we=Ct.depth:x.isData3DTexture?we=Math.floor(Ct.depth*Dt):we=1,Ae=0,Ze=0,et=0}B!==null?(Ee=B.x,pt=B.y,Ut=B.z):(Ee=0,pt=0,Ut=0);let vt=pe.convert(R.format),ln=pe.convert(R.type),ve;R.isData3DTexture?(q.setTexture3D(R,0),ve=D.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(q.setTexture2DArray(R,0),ve=D.TEXTURE_2D_ARRAY):(q.setTexture2D(R,0),ve=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,R.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,R.unpackAlignment);let fn=g.getParameter(D.UNPACK_ROW_LENGTH),ot=g.getParameter(D.UNPACK_IMAGE_HEIGHT),Cn=g.getParameter(D.UNPACK_SKIP_PIXELS),Xn=g.getParameter(D.UNPACK_SKIP_ROWS),pi=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,Ct.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ct.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),g.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),g.pixelStorei(D.UNPACK_SKIP_IMAGES,et);let er=x.isDataArrayTexture||x.isData3DTexture,xt=R.isDataArrayTexture||R.isData3DTexture;if(x.isDepthTexture){let Dt=z.get(x),mi=z.get(R),Et=z.get(Dt.__renderTarget),gi=z.get(mi.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,Et.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let tr=0;tr<we;tr++)er&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(x).__webglTexture,k,et+tr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(R).__webglTexture,ye,Ut+tr)),D.blitFramebuffer(Ae,Ze,be,_e,Ee,pt,be,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||z.has(x)){let Dt=z.get(x),mi=z.get(R);g.bindFramebuffer(D.READ_FRAMEBUFFER,N),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let Et=0;Et<we;Et++)er?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,k,et+Et):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dt.__webglTexture,k),xt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mi.__webglTexture,ye,Ut+Et):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mi.__webglTexture,ye),k!==0?D.blitFramebuffer(Ae,Ze,be,_e,Ee,pt,be,_e,D.COLOR_BUFFER_BIT,D.NEAREST):xt?D.copyTexSubImage3D(ve,ye,Ee,pt,Ut+Et,Ae,Ze,be,_e):D.copyTexSubImage2D(ve,ye,Ee,pt,Ae,Ze,be,_e);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xt?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(ve,ye,Ee,pt,Ut,be,_e,we,vt,ln,Ct.data):R.isCompressedArrayTexture?D.compressedTexSubImage3D(ve,ye,Ee,pt,Ut,be,_e,we,vt,Ct.data):D.texSubImage3D(ve,ye,Ee,pt,Ut,be,_e,we,vt,ln,Ct):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,Ee,pt,be,_e,vt,ln,Ct.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,Ee,pt,Ct.width,Ct.height,vt,Ct.data):D.texSubImage2D(D.TEXTURE_2D,ye,Ee,pt,be,_e,vt,ln,Ct);g.pixelStorei(D.UNPACK_ROW_LENGTH,fn),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Cn),g.pixelStorei(D.UNPACK_SKIP_ROWS,Xn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,pi),ye===0&&R.generateMipmaps&&D.generateMipmap(ve),g.unbindTexture()},this.initRenderTarget=function(x){z.get(x).__webglFramebuffer===void 0&&q.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?q.setTextureCube(x,0):x.isData3DTexture?q.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?q.setTexture2DArray(x,0):q.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){J=0,K=0,oe=null,g.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var gt=O;var di=(1+Math.sqrt(5))/2;var Go=new gt(0,1,0);var fi=(i,e,t)=>new gt(i,e,t).normalize();function Ac(i){let e=[-1,1],t=[];if(i===4)return[[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]].map(n=>fi(n[0],n[1],n[2]));if(i===6)return[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(n=>fi(n[0],n[1],n[2]));for(let n of e)for(let r of e)for(let s of e)t.push(fi(n,r,s));if(i===8)return t;if(i===12){t.length=0;for(let n of e)for(let r of e)t.push(fi(0,n,r*di),fi(n,r*di,0),fi(r*di,0,n));return t}for(let n of e)for(let r of e)t.push(fi(0,n/di,r*di),fi(n/di,r*di,0),fi(r*di,0,n/di));return t}function m_(i,e=1){let t=i/2,n=Math.PI/t,r=Math.atan((1+Math.cos(n))/(2*e)),s=[];for(let a=0;a<t;a++){let o=2*n*a,c=o+n;s.push(new gt(Math.cos(o)*Math.cos(r),Math.sin(r),Math.sin(o)*Math.cos(r))),s.push(new gt(Math.cos(c)*Math.cos(r),-Math.sin(r),Math.sin(c)*Math.cos(r)))}return s}function g_(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function __(i,e=180){let t=g_(i*7919+1),n=[];for(let c=0;c<i;c++){let l=1-2*(c+.5)/i,h=Math.sqrt(1-l*l),f=c*Math.PI*(3-Math.sqrt(5));n.push(new gt(Math.cos(f)*h+(t()-.5)*.02,l,Math.sin(f)*h+(t()-.5)*.02).normalize())}let s=.05*Math.sqrt(4*Math.PI/i)**3,a=n.map(()=>new gt),o=new gt;for(let c=0;c<e;c++){a.forEach(l=>l.set(0,0,0));for(let l=0;l<i;l++)for(let h=l+1;h<i;h++){o.subVectors(n[l],n[h]);let f=o.lengthSq()+1e-9;o.multiplyScalar(1/(f*Math.sqrt(f))),a[l].add(o),a[h].sub(o)}for(let l=0;l<i;l++)n[l].addScaledVector(a[l],s).normalize();s*=.985}return n}function ws(i){let e=i.length,t=i.map(a=>a.x),n=i.map(a=>a.y),r=i.map(a=>a.z),s=[];for(let a=0;a<e;a++)for(let o=a+1;o<e;o++){let c=n[a]*r[o]-r[a]*n[o],l=r[a]*t[o]-t[a]*r[o],h=t[a]*n[o]-n[a]*t[o];for(let f=o+1;f<e;f++){let u=c*t[f]+l*n[f]+h*r[f];if(Math.abs(u)<1e-9)continue;let m=n[o]*r[f]-r[o]*n[f],_=r[o]*t[f]-t[o]*r[f],M=t[o]*n[f]-n[o]*t[f],p=n[f]*r[a]-r[f]*n[a],d=r[f]*t[a]-t[f]*r[a],b=t[f]*n[a]-n[f]*t[a],A=(c+m+p)/u,v=(l+_+d)/u,S=(h+M+b)/u,w=!0;for(let C=0;C<e;C++)if(A*t[C]+v*n[C]+S*r[C]>1+1e-7){w=!1;break}w&&(s.some(C=>(C.x-A)**2+(C.y-v)**2+(C.z-S)**2<1e-12)||s.push(new gt(A,v,S)))}}if(s.length<4)throw new Error(`Origin is not inside the hull of the normals`);return i.map(a=>({n:a.clone(),pts:s.filter(o=>Math.abs(o.dot(a)-1)<1e-6),labeled:!0}))}function y_(i,e,t,n){let r=[],s=[];for(let o=0;o<i;o++){let c=2*Math.PI*o/i;r.push(new gt(e*Math.cos(c),t/2,e*Math.sin(c))),s.push(new gt(e*Math.cos(c),-t/2,e*Math.sin(c)))}let a=[];for(let o=0;o<i;o++){let c=(o+1)%i,l=2*Math.PI*(o+.5)/i;a.push({n:new gt(Math.cos(l),0,Math.sin(l)),pts:[r[o],r[c],s[c],s[o]],labeled:n})}return a.push({n:new gt(0,1,0),pts:r,labeled:!n}),a.push({n:new gt(0,-1,0),pts:s,labeled:!n}),a}function ud(i){let e=i.n,t=new gt().crossVectors(Math.abs(e.y)<.9?Go:new gt(1,0,0),e).normalize(),n=new gt().crossVectors(e,t),r=i.pts.reduce((b,A)=>b.add(A),new gt).multiplyScalar(1/i.pts.length),s=b=>Math.atan2(b.clone().sub(r).dot(n),b.clone().sub(r).dot(t));i.pts.sort((b,A)=>s(b)-s(A));let a=i.pts.map(b=>[b.dot(t),b.dot(n)]),o=a.length,c=0,l=0,h=0;for(let b=0;b<o;b++){let[A,v]=a[b],[S,w]=a[(b+1)%o],C=A*w-S*v;c+=C,l+=(A+S)*C,h+=(v+w)*C}c/=2,l/=6*c,h/=6*c;let f=1/0;for(let b=0;b<o;b++){let[A,v]=a[b],[S,w]=a[(b+1)%o],C=Math.hypot(S-A,w-v);C<1e-9||(f=Math.min(f,((S-A)*(h-v)-(w-v)*(l-A))/C))}let u=e.dot(i.pts[0]),m=a.map(([b,A])=>Math.hypot(b-l,A-h)),_=Math.max(...m),M=Math.min(...m),p,d;if(_-M<1e-4*_)o%2===0?(p=(a[0][0]+a[1][0])/2-l,d=(a[0][1]+a[1][1])/2-h):(p=a[0][0]-l,d=a[0][1]-h);else{let b=m.indexOf(_);p=a[b][0]-l,d=a[b][1]-h}i.k=o,i.area=Math.abs(c),i.dist=u,i.r2=f,i.center=t.clone().multiplyScalar(l).addScaledVector(n,h).addScaledVector(e,u),i.u=t.clone().multiplyScalar(p).addScaledVector(n,d).normalize()}function x_(i,e){let t=new Set(i.filter(s=>s.labeled)),n=[...t].sort((s,a)=>a.n.y-s.n.y||a.n.x-s.n.x),r=1;for(let s of n){if(!t.has(s))continue;t.delete(s);let a=null,o=1/0;for(let c of t){let l=s.n.dot(c.n);l<o&&(o=l,a=c)}a?(t.delete(a),s.value=r,a.value=e+1-r,r++):s.value=(e+1)/2}}function v_(i){let e;i===4?e=ws(Ac(6)):[6,8,12,20].includes(i)?e=ws(Ac(i)):i===2?e=y_(48,1,.35,!1):i===3?e=ws(Ac(4)):i%2===0&&i<=16?e=ws(m_(i)):e=ws(__(i)),e.forEach(c=>{c.pts=c.pts.map(l=>l.clone()),ud(c)});let t=e.reduce((c,l)=>c+l.area*l.dist/3,0),n=Math.cbrt(4/3*Math.PI/Math.max(1e-4,t));e.forEach(c=>{c.pts.forEach(l=>l.multiplyScalar(n)),ud(c)}),i===4?e.forEach((c,l)=>{c.labeled=l<4,c.value=l<4?l+1:void 0}):i===3?e.forEach((c,l)=>{c.labeled=l<3,c.value=l<3?l+1:void 0}):x_(e,i);let r=[],s=[];for(let c of e)for(let l=1;l<c.pts.length-1;l++)for(let h of[c.pts[0],c.pts[l],c.pts[l+1]])r.push(h.x,h.y,h.z),s.push(c.n.x,c.n.y,c.n.z);let a=new an;a.setAttribute(`position`,new Mt(r,3)),a.setAttribute(`normal`,new Mt(s,3));let o=0;for(let c of e){let l=(c.pts.length-2)*3;a.addGroup(o,l,0),o+=l}return{geometry:a,faces:e,smooth:!1}}function M_(){let e=new rs(1,40,28),t=e.attributes.position,n=e.attributes.normal;for(let s=0;s<t.count;s++)t.getY(s)>.9&&(t.setY(s,.9),n.setXYZ(s,0,1,0));return{geometry:e,faces:[{n:Go.clone(),u:new gt(0,0,-1),center:new gt(0,.9,0),dist:.9,r2:Math.sqrt(1-.81)*.9,k:0,labeled:!0,value:1,pts:[]}],smooth:!0}}var b_={0:`0`,1:`1`,6:`9`,8:`8`,9:`6`};function S_(i){let e=[...i].reverse().map(n=>b_[n]);if(e.some(n=>n===void 0))return!1;let t=e.join(``);return t!==i&&t[0]!==`0`}var Rc=new Map;function w_(i){if(Rc.has(i))return Rc.get(i);let e=256,t=document.createElement(`canvas`);t.width=t.height=e;let n=t.getContext(`2d`),r=String(i),s=170;n.font=`700 ${s}px system-ui, sans-serif`;let a=n.measureText(r).width;a>e*.82&&(s*=e*.82/a,n.font=`700 ${s}px system-ui, sans-serif`,a=n.measureText(r).width),n.textAlign=`center`,n.textBaseline=`middle`,n.lineJoin=`round`,n.lineWidth=s*.12,n.strokeStyle=`rgba(0,0,0,.55)`,n.strokeText(r,e/2,e/2+s*.04),n.fillStyle=`#fff`,n.fillText(r,e/2,e/2+s*.04),S_(r)&&n.fillRect(e/2-a/2,e/2+s*.45,a,s*.07);let o=new Ti(t);return o.colorSpace=Qt,o.anisotropy=4,Rc.set(i,o),o}function E_(i,e){let t=i.r2*2*(i.k<=3&&i.k>0?.8:.95),n=new kn({map:w_(e),transparent:!0,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),r=new Yt(new ui(t,t),n);r.position.copy(i.center).addScaledVector(i.n,.004);let s=new gt().crossVectors(i.u,i.n);return r.quaternion.setFromRotationMatrix(new yt().makeBasis(s,i.u,i.n)),r}function T_(i,e={}){if(!Number.isInteger(i)||i<1||i>100)throw new RangeError(`N must be an integer in 1..100`);let{color:t=4026321,labels:n=!0,labelValues:r}=e,s=i===1?M_():v_(i),a=new Bn,o=new Yt(s.geometry,new kn({color:t,roughness:.38,metalness:.15,flatShading:!s.smooth}));o.castShadow=o.receiveShadow=!0,a.add(o),a.add(new Tr(new is(s.geometry,5),new Yi({color:16116479,transparent:!0,opacity:.7})));let c=new Map;for(let l of s.faces)l.labeled&&(c.set(l.value,l),n&&a.add(E_(l,r?.[l.value]??l.value)));return a.userData={N:i,faces:s.faces,faceByValue:c,support:C_(s.geometry)},a}function C_(i){let e=i.attributes.position,t=new Map;for(let n=0;n<e.count;n++){let r=`${e.getX(n).toFixed(4)},${e.getY(n).toFixed(4)},${e.getZ(n).toFixed(4)}`;t.has(r)||t.set(r,new gt(e.getX(n),e.getY(n),e.getZ(n)))}return[...t.values()]}function hd(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}function A_(i){let e=new gt().crossVectors(i.u,i.n);return new qt().setFromRotationMatrix(new yt().makeBasis(e,i.n,i.u.clone().negate())).invert()}function R_(i,e,t=Go){let n=t.clone().addScaledVector(e,-t.dot(e)).normalize(),r=new gt().crossVectors(n,e),s=new qt().setFromRotationMatrix(new yt().makeBasis(r,n,e)),a=new gt().crossVectors(i.u,i.n),o=new qt().setFromRotationMatrix(new yt().makeBasis(a,i.u,i.n));return s.multiply(o.invert())}function Pc(i,e){let t=new gt,n=1/0;for(let r of i)t.copy(r).applyQuaternion(e),t.y<n&&(n=t.y);return-n}var Ic=class{active=new Set;camera;constructor(e={}){this.camera=e.camera??null}finalQuaternion(e,t,n,r=0){if(!this.camera)return new qt().setFromAxisAngle(Go,r).multiply(A_(e));this.camera.updateMatrixWorld();return R_(e,this.camera.position.clone().sub(new gt(t,1,n)).normalize(),new gt(0,1,0).applyQuaternion(this.camera.quaternion))}place(e,t,n={}){let r=this.finalQuaternion(e.userData.faceByValue.get(t),n.x??0,n.z??0,n.yaw??0);e.quaternion.copy(r),e.position.set(n.x??0,Pc(e.userData.support,r),n.z??0)}roll(e,t,n={}){let r=e.userData.faceByValue.get(t);if(!r)throw new RangeError(`No face with value ${t}`);let s=Math.random,a=n.yaw??(s()-.5)*.8,o=n.to??new gt((s()-.5)*.4,0,(s()-.5)*.4),c=this.finalQuaternion(r,o.x,o.z,a),l=n.from??new gt(-1.8+s()*.5,2.4+s()*.4,1.2+s());return new Promise(h=>{this.active.add({die:e,value:t,resolve:h,qFinal:c,from:l,to:o,t:0,axis:new gt(s()-.5,s()-.5,s()-.5).normalize(),angle0:Math.PI*2*(n.spins??2+s()*2),duration:n.duration??1.4,bounces:n.bounces??2,height:n.height??1,restY:Pc(e.userData.support,c),q:new qt})})}update(e){for(let t of this.active){t.t=Math.min(1,t.t+e/t.duration);let n=t.t,r=1-(1-n)**3;t.q.setFromAxisAngle(t.axis,t.angle0*(1-r)).multiply(t.qFinal),t.die.quaternion.copy(t.q);let s=1-(1-n)**2.2;t.die.position.x=t.from.x+(t.to.x-t.from.x)*s,t.die.position.z=t.from.z+(t.to.z-t.from.z)*s;let a=t.restY+(t.from.y-t.restY)*(1-n)**3+t.height*Math.abs(Math.sin(Math.PI*t.bounces*n))*(1-n)**2;a=Math.max(a,Pc(t.die.userData.support,t.q)),t.die.position.y=a,n>=1&&(this.active.delete(t),t.resolve(t.value))}}};var Vo=class{host;renderer;scene=new Xi;camera=new en(40,1,.1,100);animator;die;sides=0;labelKey=``;clock=new us;frame=0;disposed=!1;constructor(e,t=`#ff2ea6`){this.host=e,this.renderer=new Ur({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xa,this.renderer.setClearColor(0,0),this.renderer.domElement.className=`dice-canvas`,this.host.replaceChildren(this.renderer.domElement),this.camera.position.set(0,5.2,6.2),this.camera.lookAt(0,.4,0),this.scene.add(new $i(16777215,3359829,1.25));let n=new Zi(16777215,2.6);n.position.set(-3,8,4),this.scene.add(n),this.animator=new Ic({camera:this.camera}),this.accent=t,this.resize(),this.loop=this.loop.bind(this),this.frame=requestAnimationFrame(this.loop)}accent;edgeColor=`#f5eaff`;edgeWidth=1;edgeOpacity=.7;setEdgeStyle(e,t,n){this.edgeColor=e,this.edgeWidth=t,this.edgeOpacity=n,this.die?.traverse(r=>{r instanceof Tr&&r.material instanceof Yi&&(r.material.color.set(e),r.material.linewidth=t,r.material.opacity=n)})}setSides(e,t){let n=t?.join(`|`)??``;if(this.sides===e&&this.labelKey===n&&this.die)return;this.sides=e,this.labelKey=n,this.die&&(this.scene.remove(this.die),hd(this.die));let r=new $e(this.accent),s=t?{1:t[0],2:t[1]}:void 0;this.die=T_(e,{color:r,labelValues:s}),this.scene.add(this.die),this.setEdgeStyle(this.edgeColor,this.edgeWidth,this.edgeOpacity),this.animator.place(this.die,1,{yaw:.2}),this.resize()}roll(e){if(!this.die)return;let t=Math.min(this.sides,Math.max(1,e));this.animator.roll(this.die,t)}loop(){this.disposed||(this.animator.update(Math.min(this.clock.getDelta(),.05)),this.renderer.render(this.scene,this.camera),this.frame=requestAnimationFrame(this.loop))}resize(){let e=this.host.clientWidth||180,t=this.host.clientHeight||180;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}destroy(){this.disposed=!0,cancelAnimationFrame(this.frame),this.die&&hd(this.die),this.renderer.dispose(),this.renderer.domElement.remove()}};var P_=[`diceHost`];function I_(i,e){if(i&1&&(Xu$1(0,`span`,8),Ab(1),el$1()),i&2){let t=Jw();em(`dice-outcome-large`,t.sides()>20),kI(),cm(t.outcome())}}function N_(i,e){if(i&1&&(Xu$1(0,`span`,7),Ab(1),el$1()),i&2){let t=Jw();kI(),cm(t.rolls().join(` + `))}}var dd={formula:`1d6`,result:6,rolls:[6],viewer:``,rolledAt:``};var Ho=class i{diceHost;http=I(ke$1);configService=I(h);previewSides=Number(new URLSearchParams(location.search).get(`preview`)??0);scene;lastRolledAt=``;hideTimer=null;ready=cn(!1);visible=cn(!1);rolling=cn(!1);state=_2(je(0,700).pipe(ql$1(()=>this.http.get(`rgg-sync/dice`,{params:{t:Date.now()}}).pipe(ea$1(()=>vy$1(dd))))),{initialValue:dd});result=il$1(()=>this.state().result||6);formula=il$1(()=>this.state().formula||`1d6`);viewer=il$1(()=>this.state().viewer||``);config=_2(this.configService.watch(`dice`).pipe(ea$1(()=>vy$1({config:{}}))),{initialValue:{config:{}}});title=il$1(()=>this.config().config.gameTitle?.trim()||`DICE`);edgeColor=il$1(()=>this.config().config.diceEdgeColor||`#f5eaff`);edgeWidth=il$1(()=>this.config().config.diceEdgeWidth??1);edgeOpacity=il$1(()=>this.config().config.diceEdgeOpacity??.7);textPosition=il$1(()=>this.config().config.gameTextPosition??`top`);textAlign=il$1(()=>this.config().config.gameTextAlign??`center`);outcome=il$1(()=>(this.config().config.gameOutcome?.trim()||`@{user} выбивает {result}`).replaceAll(`{user}`,this.viewer()||`—`).replaceAll(`{nick}`,this.viewer()||`—`).replaceAll(`{result}`,String(this.result())).replaceAll(`{number}`,String(this.result())).replaceAll(`{formula}`,this.formula()).replaceAll("${nick}",this.viewer()||`—`).replaceAll("${number}",String(this.result())));rolls=il$1(()=>this.state().rolls??[]);sides=il$1(()=>{let e=this.formula().match(/(\d*)d(\d+)/i);return e?Math.max(1,Number(e[2])):6});constructor(){xi(()=>{if(this.previewSides>0)return;let e=this.sides(),t=this.state().rolledAt,n=this.result();this.ready()&&(this.scene?.setSides(e),t&&!t.startsWith(`0001-`)&&t!==this.lastRolledAt&&(this.lastRolledAt=t,this.visible.set(!0),this.rolling.set(!0),this.scene?.roll(n),setTimeout(()=>this.rolling.set(!1),950),this.hideTimer&&clearTimeout(this.hideTimer),this.hideTimer=setTimeout(()=>this.visible.set(!1),8e3)))}),xi(()=>{this.ready(),this.edgeColor(),this.edgeWidth(),this.edgeOpacity(),this.scene?.setEdgeStyle(this.edgeColor(),this.edgeWidth(),this.edgeOpacity())})}ngAfterViewInit(){if(!this.diceHost)return;let e=getComputedStyle(this.diceHost.nativeElement).getPropertyValue(`--accent-primary`).trim()||`#ff2ea6`;try{this.scene=new Vo(this.diceHost.nativeElement,e),this.scene.setEdgeStyle(this.edgeColor(),this.edgeWidth(),this.edgeOpacity())}catch(t){console.error(`[Dice] WebGL unavailable`,t)}this.previewSides>0&&(this.scene?.setSides(this.previewSides),this.scene?.roll(Math.min(3,this.previewSides)),this.visible.set(!0)),this.ready.set(!0)}ngOnDestroy(){this.hideTimer&&clearTimeout(this.hideTimer),this.scene?.destroy()}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-dice-overlay`]],viewQuery:function(t,n){if(t&1&&zg$1(P_,5),t&2){let r;rb(r=ob())&&(n.diceHost=r.first)}},decls:10,vars:14,consts:[[`diceHost`,``],[1,`dice-stage`],[1,`dice-card`],[1,`dice-kicker`],[1,`dice-host`],[1,`dice-formula`],[1,`dice-outcome`,3,`dice-outcome-large`],[1,`dice-rolls`],[1,`dice-outcome`]],template:function(t,n){t&1&&(Xu$1(0,`div`,1)(1,`div`,2)(2,`span`,3),Ab(3),el$1(),Fg$1(4,`div`,4,0),Xu$1(6,`strong`,5),Ab(7),el$1(),Fw(8,I_,2,3,`span`,6),Fw(9,N_,2,1,`span`,7),el$1()()),t&2&&(kI(),em(`visible`,n.visible())(`rolling`,n.rolling())(`text-bottom`,n.textPosition()===`bottom`)(`align-left`,n.textAlign()===`left`)(`align-right`,n.textAlign()===`right`),kI(2),cm(n.title()),kI(4),cm(n.formula()),kI(),Pw(n.outcome()?8:-1),kI(),Pw(n.rolls().length>1?9:-1))},styles:[`[_nghost-%COMP%]{display:block;padding:16px;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.dice-stage[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;min-height:100dvh}.dice-card[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:160px;height:160px;padding:0;border:0;background:transparent;box-shadow:none;opacity:0;transform:scale(.92);transition:opacity .18s ease,transform .22s ease}.dice-card.visible[_ngcontent-%COMP%]{opacity:1;transform:scale(1)}.dice-kicker[_ngcontent-%COMP%]{position:absolute;top:-2px;left:50%;transform:translate(-50%);color:var(--%NS%accent-primary);font:700 11px/16px var(--%NS%font-ui);letter-spacing:.18em;white-space:nowrap}.dice-host[_ngcontent-%COMP%]{width:160px;height:160px}.dice-host[_ngcontent-%COMP%]   .dice-canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%;filter:drop-shadow(0 10px 12px rgba(0,0,0,.6))}.dice-formula[_ngcontent-%COMP%]{position:absolute;top:166px;left:50%;transform:translate(-50%);color:var(--%NS%accent-primary);font:700 16px/22px var(--%NS%font-ui);letter-spacing:.08em;white-space:nowrap}.dice-outcome[_ngcontent-%COMP%]{position:absolute;top:190px;left:50%;transform:translate(-50%);color:var(--%NS%widget-text, #f5eaff);font:700 13px/18px var(--%NS%font-ui);white-space:nowrap}.dice-rolls[_ngcontent-%COMP%]{position:absolute;top:212px;left:50%;transform:translate(-50%);color:var(--%NS%text-secondary);font:600 12px/18px var(--%NS%font-ui);white-space:nowrap}.dice-viewer[_ngcontent-%COMP%]{position:absolute;top:230px;left:50%;transform:translate(-50%);color:var(--%NS%text-secondary);font:600 12px/18px var(--%NS%font-ui);white-space:nowrap}.dice-card.text-bottom[_ngcontent-%COMP%]   .dice-kicker[_ngcontent-%COMP%]{top:auto;bottom:-24px}.dice-card.text-bottom[_ngcontent-%COMP%]   .dice-outcome[_ngcontent-%COMP%]{top:auto;bottom:-48px}.dice-card.text-bottom[_ngcontent-%COMP%]   .dice-formula[_ngcontent-%COMP%]{top:auto;bottom:-70px}.dice-card.align-left[_ngcontent-%COMP%]   .dice-kicker[_ngcontent-%COMP%], .dice-card.align-left[_ngcontent-%COMP%]   .dice-outcome[_ngcontent-%COMP%], .dice-card.align-left[_ngcontent-%COMP%]   .dice-formula[_ngcontent-%COMP%]{left:0;transform:none;text-align:left}.dice-card.align-right[_ngcontent-%COMP%]   .dice-kicker[_ngcontent-%COMP%], .dice-card.align-right[_ngcontent-%COMP%]   .dice-outcome[_ngcontent-%COMP%], .dice-card.align-right[_ngcontent-%COMP%]   .dice-formula[_ngcontent-%COMP%]{left:auto;right:0;transform:none;text-align:right}.dice-outcome-large[_ngcontent-%COMP%]{color:#fff;font-size:15px;text-shadow:0 0 10px var(--%NS%accent-primary)}`]})};var Wo=1;var Dc=.13;var Lc=.045;var Es=Dc/2+Lc;var Nc=new O(1,0,0);new O(0,1,0);var D_=new O(0,0,1);function fd(i,e){let n=document.createElement(`canvas`);n.width=n.height=512;let r=n.getContext(`2d`),s=r.createRadialGradient(204.8,179.2,25.6,256,256,358.4);s.addColorStop(0,`#ffe9a3`),s.addColorStop(.6,`#e0b24a`),s.addColorStop(1,`#a8751f`),r.fillStyle=s,r.fillRect(0,0,512,512),r.translate(256,256),r.rotate(i===`heads`?-Math.PI/2:Math.PI/2),r.strokeStyle=`rgba(120,75,10,.85)`,r.lineWidth=10,r.beginPath(),r.arc(0,0,199.68,0,Math.PI*2),r.stroke(),r.lineWidth=3,r.beginPath(),r.arc(0,0,179.2,0,Math.PI*2),r.stroke(),r.textAlign=`center`,r.textBaseline=`middle`;let a=(c,l,h)=>{r.font=`800 ${l}px system-ui, sans-serif`,r.fillStyle=`rgba(255,245,200,.7)`,r.fillText(c,3,h+3),r.fillStyle=`#7a4b08`,r.fillText(c,0,h)};a(i===`heads`?`★`:`1`,512*(i===`heads`?.32:.46),-20.48),a(e.toUpperCase(),48.64,102.4);let o=new Ti(n);return o.colorSpace=Qt,o.anisotropy=8,o}function L_(){let i=document.createElement(`canvas`);i.width=16,i.height=8;let e=i.getContext(`2d`);e.fillStyle=`#c99a3a`,e.fillRect(0,0,16,8),e.fillStyle=`#7d5614`,e.fillRect(0,0,6,8);let t=new Ti(i);return t.colorSpace=Qt,t.wrapS=vr,t.repeat.set(70,1),t}var Xo=class{host;renderer;scene=new Xi;camera=new en(40,1,.1,100);coin=new Bn;heads=`Орёл`;tails=`Решка`;body;job=null;currentAngle=0;frame=0;clock=0;disposed=!1;constructor(e){this.host=e,this.renderer=new Ur({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.setClearColor(0,0),this.renderer.domElement.className=`dice-canvas`,this.host.replaceChildren(this.renderer.domElement),this.camera.position.set(0,6,6),this.camera.lookAt(0,1.3,0),this.scene.add(new $i(16777215,3359829,1.2));let t=new Zi(16777215,2.6);t.position.set(-3,9,4),t.castShadow=!0,this.scene.add(t);let n=new Yt(new ui(40,40),new as({opacity:.4}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n),this.scene.add(this.coin),this.coin.position.y=Es,this.rebuild(),this.resize(),this.loop=this.loop.bind(this),this.frame=requestAnimationFrame(this.loop)}setLabels(e,t){e===this.heads&&t===this.tails||(this.heads=e,this.tails=t,this.rebuild())}rebuild(){this.body&&(this.coin.remove(this.body),this.body.geometry.dispose());let e={roughness:.32,metalness:.55};this.body=new Yt(new ns(Wo,Wo,Dc,96),[new kn(l({map:L_()},e)),new kn(l({map:fd(`heads`,this.heads)},e)),new kn(l({map:fd(`tails`,this.tails)},e))]),this.body.castShadow=this.body.receiveShadow=!0,this.coin.add(this.body);let t=new kn(l({color:14264639},e));for(let n of[1,-1]){let r=new Yt(new ss(Wo-Lc,Lc,16,96),t);r.rotation.x=Math.PI/2,r.position.y=n*Dc/2,r.castShadow=!0,this.coin.add(r)}this.coin.quaternion.setFromAxisAngle(Nc,this.currentAngle)}flip(e){if(this.job)return;let t=e===`heads`?0:Math.PI,n=((t-this.currentAngle)%(2*Math.PI)+2*Math.PI)%(2*Math.PI),r=4+Math.floor(Math.random()*4);this.job={t:0,result:e,base:this.currentAngle,total:n+r*2*Math.PI,x0:this.coin.position.x,x1:(Math.random()-.5)*1.6,z0:this.coin.position.z,z1:(Math.random()-.5)*1.2,height:3+Math.random()*.8,phase:Math.random()*6.28,target:t}}loop=()=>{if(this.disposed)return;let e=performance.now(),t=Math.min(.05,(e-this.clock)/1e3||.016);this.clock=e,this.update(t),this.renderer.render(this.scene,this.camera),this.frame=requestAnimationFrame(this.loop)};update(e){let t=this.job;if(!t)return;t.t=Math.min(1,t.t+e/2.2);let n=t.t,r,s,a=.7;if(n<a){let u=n/a;r=Es+t.height*4*u*(1-u),s=t.base+t.total*(1-(1-u)**2)}else{let u=(n-a)/.30000000000000004;r=Es+.3*Math.abs(Math.sin(Math.PI*2*u))*(1-u)**2,s=t.base+t.total}let o=.35*(1-n)**1.5*Math.sin(n*20+t.phase),c=new qt().setFromAxisAngle(D_,o),l=new qt().setFromAxisAngle(Nc,s);this.coin.quaternion.copy(c).multiply(l);let h=Math.abs(new O(0,1,0).applyQuaternion(this.coin.quaternion).y);r=Math.max(r,Wo*Math.sqrt(1-h*h)+Es*h);let f=1-(1-Math.min(1,n/a))**2;this.coin.position.set(t.x0+(t.x1-t.x0)*f,r,t.z0+(t.z1-t.z0)*f),n>=1&&(this.currentAngle=t.target,this.coin.quaternion.setFromAxisAngle(Nc,this.currentAngle),this.coin.position.y=Es,this.job=null)}resize(){let e=this.host.clientWidth||140,t=this.host.clientHeight||140;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}destroy(){this.disposed=!0,cancelAnimationFrame(this.frame),this.body?.geometry.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}};var qo=class{canvas;context;accent;host;labels=[`1`,`2`,`3`];rotation=0;target=0;started=0;spinning=!1;result=``;frame=0;disposed=!1;constructor(e,t){this.host=e,this.accent=t,this.canvas=document.createElement(`canvas`),this.canvas.className=`random-canvas`,this.canvas.width=300,this.canvas.height=300,this.canvas.style.width=`100%`,this.canvas.style.height=`100%`,this.context=this.canvas.getContext(`2d`),e.replaceChildren(this.canvas),this.loop=this.loop.bind(this),this.frame=requestAnimationFrame(this.loop)}spin(e,t){this.result=t;let n=e.match(/^(-?\d+)\s*(?:-|\.\.|:)\s*(-?\d+)$/);if(n){let r=Number(n[1]),s=Number(n[2]),a=Math.min(16,Math.max(6,s-r+1));this.labels=Array.from({length:a},(o,c)=>String(Math.round(r+(s-r)*c/Math.max(1,a-1))))}else{let r=e.split(`|`).map(s=>s.trim()).filter(Boolean);this.labels=r.length?r.slice(0,16):[e||`?`]}this.target=this.rotation+Math.PI*2*(3+Math.random()*2),this.started=performance.now(),this.spinning=!0}loop=()=>{if(!this.disposed){if(this.spinning){let e=Math.min(1,(performance.now()-this.started)/1500),t=1-(1-e)**3;this.rotation+=(this.target-this.rotation)*t*.22,e>=1&&(this.spinning=!1)}else this.rotation+=.001;this.draw(),this.frame=requestAnimationFrame(this.loop)}};draw(){let e=this.context,t=this.canvas.width,n=t/2,r=t*.4;e.clearRect(0,0,t,t),e.save(),e.translate(n,n),e.rotate(this.rotation);let s=this.labels.length,a=[`#ff2ea6`,`#7c5cff`,`#22e0ff`,`#2ee6a8`,`#ffd166`];for(let o=0;o<s;o+=1){let c=Math.PI*2*o/s,l=Math.PI*2*(o+1)/s;e.beginPath(),e.moveTo(0,0),e.arc(0,0,r,c,l),e.closePath(),e.fillStyle=a[o%a.length],e.globalAlpha=.78,e.fill(),e.globalAlpha=1,e.strokeStyle=`rgba(15,8,23,.65)`,e.lineWidth=2,e.stroke(),e.save(),e.rotate((c+l)/2),e.fillStyle=`#fff`,e.font=`700 15px system-ui, sans-serif`,e.textAlign=`right`,e.textBaseline=`middle`,e.fillText(this.labels[o],r-12,0),e.restore()}e.restore(),e.beginPath(),e.arc(n,n,r*.28,0,Math.PI*2),e.fillStyle=`#120b1c`,e.fill(),e.strokeStyle=this.accent,e.lineWidth=4,e.stroke(),e.fillStyle=`#fff`,e.font=`800 30px system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(this.result||`?`,n,n+2),e.beginPath(),e.moveTo(n,n-r-4),e.lineTo(n-9,n-r+12),e.lineTo(n+9,n-r+12),e.closePath(),e.fillStyle=this.accent,e.fill()}destroy(){this.disposed=!0,cancelAnimationFrame(this.frame),this.canvas.remove()}};var O_=[`coinHost`];var U_=[`randomHost`];function F_(i,e){if(i&1&&(Xu$1(0,`span`,7),Ab(1),el$1()),i&2){let t=Jw(2);kI(),cm(t.outcome())}}function B_(i,e){if(i&1&&(Xu$1(0,`span`,8),Ab(1),el$1()),i&2){let t=Jw(2);kI(),cm(t.viewer())}}function k_(i,e){if(i&1&&(Xu$1(0,`span`,4),Ab(1),el$1(),Fg$1(2,`div`,5,0),Xu$1(4,`strong`,6),Ab(5),el$1(),Fw(6,F_,2,1,`span`,7),Fw(7,B_,2,1,`span`,8)),i&2){let t=Jw();kI(),cm(t.title()),kI(4),cm(t.result()),kI(),Pw(t.outcome()?6:-1),kI(),Pw(t.viewer()?7:-1)}}function z_(i,e){if(i&1&&(Xu$1(0,`span`,8),Ab(1),el$1()),i&2){let t=Jw(2);kI(),cm(t.viewer())}}function V_(i,e){if(i&1&&(Xu$1(0,`span`,4),Ab(1),el$1(),Fg$1(2,`div`,9,1),Fw(4,z_,2,1,`span`,8)),i&2){let t=Jw();kI(),cm(t.title()),kI(3),Pw(t.viewer()?4:-1)}}var pd={kind:``,label:``,result:``,side:``,viewer:``,rolledAt:``};var Yo=class i{coinHost;randomHost;mode=VB(`coin`);preview=new URLSearchParams(location.search).get(`preview`);http=I(ke$1);configService=I(h);scene;randomScene;lastRolledAt=``;hideTimer=null;ready=cn(!1);rolling=cn(!1);visible=cn(!1);state=_2(je(0,650).pipe(ql$1(()=>this.http.get(`rgg-sync/game`,{params:{t:Date.now()}}).pipe(ea$1(()=>vy$1(pd))))),{initialValue:pd});active=il$1(()=>this.state().kind===this.mode());config=_2(this.configService.watch(`coinflip`).pipe(ea$1(()=>vy$1({config:{}}))),{initialValue:{config:{}}});randomConfig=_2(this.configService.watch(`random`).pipe(ea$1(()=>vy$1({config:{}}))),{initialValue:{config:{}}});gameConfig=il$1(()=>this.mode()===`coin`?this.config().config:this.randomConfig().config);title=il$1(()=>this.gameConfig().gameTitle?.trim()||(this.mode()===`coin`?`МОНЕТКА`:`РУЛЕТКА`));outcome=il$1(()=>(this.gameConfig().gameOutcome?.trim()||`@{user} · {result}`).replaceAll(`{user}`,this.viewer()||`—`).replaceAll(`{result}`,this.result()||`—`));heads=il$1(()=>this.config().config.coinHeads?.trim()||`Орёл`);tails=il$1(()=>this.config().config.coinTails?.trim()||`Решка`);result=il$1(()=>this.active()?this.state().result:``);label=il$1(()=>this.active()?this.state().label:``);viewer=il$1(()=>this.active()?this.state().viewer:``);coinSide=il$1(()=>{let e=this.state();return e.side===`heads`||e.side===`tails`?e.side:this.result().toLowerCase()===this.tails().toLowerCase()?`tails`:`heads`});constructor(){xi(()=>{let e=this.state().rolledAt,t=this.active();if(this.ready()){if(!t||!e||e.startsWith(`0001-`)){this.visible.set(!1);return}this.scene&&this.scene.setLabels(this.heads(),this.tails()),this.randomScene&&this.randomScene.spin(this.label(),this.result()),e!==this.lastRolledAt&&(this.lastRolledAt=e,this.visible.set(!0),this.rolling.set(!0),this.scene?.flip(this.coinSide()===`tails`?`tails`:`heads`),setTimeout(()=>this.rolling.set(!1),1e3),this.hideTimer&&clearTimeout(this.hideTimer),this.hideTimer=setTimeout(()=>this.visible.set(!1),this.mode()===`random`?2200:8e3))}})}ngAfterViewInit(){this.coinHost&&(this.scene=new Xo(this.coinHost.nativeElement)),this.randomHost&&(this.randomScene=new qo(this.randomHost.nativeElement,getComputedStyle(this.randomHost.nativeElement).getPropertyValue(`--accent-primary`).trim()||`#ff2ea6`)),this.ready.set(!0),this.preview===`coin`&&this.scene&&(this.scene.setLabels(this.heads(),this.tails()),this.scene.flip(`heads`),this.visible.set(!0))}ngOnDestroy(){this.hideTimer&&clearTimeout(this.hideTimer),this.scene?.destroy(),this.randomScene?.destroy()}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-game-overlay`]],viewQuery:function(t,n){if(t&1&&zg$1(O_,5)(U_,5),t&2){let r;rb(r=ob())&&(n.coinHost=r.first),rb(r=ob())&&(n.randomHost=r.first)}},inputs:{mode:[1,`mode`]},decls:4,vars:5,consts:[[`coinHost`,``],[`randomHost`,``],[1,`game-stage`],[1,`game-card`],[1,`game-kicker`],[1,`coin-host`],[1,`game-result`],[1,`game-outcome`],[1,`game-viewer`],[1,`random-host`]],template:function(t,n){t&1&&(Xu$1(0,`div`,2)(1,`div`,3),Fw(2,k_,8,4)(3,V_,5,2),el$1()()),t&2&&(kI(),em(`visible`,n.visible())(`rolling`,n.rolling()),kI(),Pw(n.mode()===`coin`?2:3))},styles:[`[_nghost-%COMP%]{display:block;padding:16px;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.game-stage[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;min-height:100dvh}.game-card[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:140px;height:140px;padding:0;border:0;background:transparent;box-shadow:none;opacity:0;transform:scale(.92);transition:opacity .18s ease,transform .22s ease}.game-card.visible[_ngcontent-%COMP%]{opacity:1;transform:scale(1)}.game-kicker[_ngcontent-%COMP%]{position:absolute;top:-24px;left:50%;transform:translate(-50%);color:var(--%NS%accent-primary);font:700 11px/16px var(--%NS%font-ui);letter-spacing:.18em;white-space:nowrap}.coin-host[_ngcontent-%COMP%]{width:140px;height:140px}.coin-host[_ngcontent-%COMP%]   .dice-canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%;filter:drop-shadow(0 10px 12px rgba(0,0,0,.6))}.game-result[_ngcontent-%COMP%]{position:absolute;top:146px;left:50%;transform:translate(-50%);color:var(--%NS%widget-text, #f5eaff);font:800 34px/40px var(--%NS%font-ui);text-transform:capitalize;white-space:nowrap}.game-viewer[_ngcontent-%COMP%]{position:absolute;top:172px;left:50%;transform:translate(-50%);color:var(--%NS%text-secondary);font:600 12px/18px var(--%NS%font-ui);white-space:nowrap}.slot-window[_ngcontent-%COMP%]{position:relative;display:flex;gap:4px;flex-direction:column;align-items:center;width:210px;padding:18px 20px;overflow:hidden;border:2px solid var(--%NS%accent-primary);border-radius:14px;background:#ffffff12;box-shadow:inset 0 0 28px #00000059}.game-card.rolling[_ngcontent-%COMP%]   .slot-window[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slot-shake 1.1s cubic-bezier(.2,.8,.2,1)}.slot-reel[_ngcontent-%COMP%]{max-width:100%;overflow:hidden;color:var(--%NS%text-secondary);font:600 12px/18px var(--%NS%font-ui);text-overflow:ellipsis;white-space:nowrap}.slot-result[_ngcontent-%COMP%]{max-width:100%;overflow:hidden;color:var(--%NS%widget-text, #f5eaff);font:800 28px/34px var(--%NS%font-ui);text-overflow:ellipsis;white-space:nowrap}@keyframes _ngcontent-%COMP%_slot-shake{0%,to{transform:translate(0)}20%{transform:translate(-10px) rotate(-2deg)}40%{transform:translate(10px) rotate(2deg)}60%{transform:translate(-6px) rotate(-1deg)}80%{transform:translate(6px) rotate(1deg)}}.random-host[_ngcontent-%COMP%]{width:140px;height:140px}.random-host[_ngcontent-%COMP%]   .random-canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%}.game-outcome[_ngcontent-%COMP%]{position:absolute;top:198px;left:50%;transform:translate(-50%);color:var(--%NS%text-secondary);font:600 12px/18px var(--%NS%font-ui);white-space:nowrap}`]})};var G_=(i,e)=>e.id;function H_(i,e){if(i&1&&kg$1(0,`app-donation-goal`,2),i&2){let t=e.$implicit,n=Jw(2);Rg$1(`config`,n.config())(`goal`,t)}}function W_(i,e){if(i&1&&Bw(0,H_,1,2,`app-donation-goal`,2,G_),i&2){let t=Jw();Hw(t.goals())}}var md=/[А-Яа-яЁё]/;var $o=class i{service=I(a$2);widgetConfig=I(h);tts=I(A);destroyRef=I(re);initialized=!1;seen=new Set;audio=null;ttsAudio=null;hideTimer=null;config=_2(this.widgetConfig.get(`donations`).pipe(_e(e=>Z(e.config.donation)),ea$1(()=>vy$1(Z(null)))),{initialValue:Z(null)});snapshot=cn(null);queue=cn([]);active=cn(null);goals=il$1(()=>{let e=this.config(),t=(this.snapshot()?.goals??[]).filter(n=>n.active);return t.length?t:[{id:`manual`,provider:`manual`,title:e.goalManualTitle,currency:e.goalManualCurrency,startAmount:0,raisedAmount:e.goalManualCurrent,goalAmount:e.goalManualTarget,active:!0,updatedAt:new Date().toISOString()}]});rows=il$1(()=>{let e=this.config();return(this.snapshot()?.recent??[]).filter(n=>n.amount>=e.minAmount).slice(0,Math.max(1,e.maxRows))});positionClass=il$1(()=>`donation-position-${this.config().position}`);constructor(){je(0,1e3).pipe(ql$1(()=>this.service.getSnapshot().pipe(ea$1(()=>vy$1(null)))),DS(this.destroyRef)).subscribe(e=>{e&&this.ingest(e)}),this.destroyRef.onDestroy(()=>{this.stopAudio(),speechSynthesis?.cancel()})}ingest(e){if(this.snapshot.set(e),!this.initialized){this.initialized=!0;for(let r of e.recent)this.seen.add(r.id);return}let t=this.config(),n=[...e.recent].reverse().filter(r=>!this.seen.has(r.id)&&r.amount>=t.minAmount);for(let r of n)this.seen.add(r.id);n.length&&(this.queue.update(r=>[...r,...n]),this.showNext())}showNext(){if(this.active()||!this.queue().length)return;let[e,...t]=this.queue();this.queue.set(t),this.active.set(e),this.playDonation(e);let n=this.config();this.hideTimer=setTimeout(()=>{this.active.set(null),this.hideTimer=null,this.showNext()},Math.max(2,n.durationSeconds)*1e3)}playDonation(e){let t=this.config();if(t.soundUrl&&(this.audio?.pause(),this.audio=new Audio(t.soundUrl),this.audio.volume=Math.min(100,Math.max(0,t.soundVolume))/100,this.audio.play().catch(()=>{})),!t.ttsEnabled||e.amount<t.ttsMinAmount)return;let n=this.ttsText(e,t);if(t.ttsProvider===`browser`||t.ttsProvider===`auto`&&md.test(n)){this.browserSpeech(n,t);return}this.tts.speak(e.id,n,t.ttsVoice,t.ttsModel,t.ttsProvider).pipe(DS(this.destroyRef)).subscribe({next:r=>{r.skipped||r.url&&this.playTts(r.url,t)},error:()=>{t.ttsProvider===`auto`&&md.test(n)&&this.browserSpeech(n,t)}})}playTts(e,t){this.ttsAudio?.pause(),this.ttsAudio=new Audio(e),this.ttsAudio.volume=Math.min(100,Math.max(0,t.ttsVolume))/100,this.ttsAudio.play().catch(()=>{})}browserSpeech(e,t){if(typeof speechSynthesis>`u`)return;let n=new SpeechSynthesisUtterance(e),r=speechSynthesis.getVoices(),s=r.find(a=>a.name===t.ttsVoice)??r.find(a=>a.lang.startsWith(`ru`));s&&(n.voice=s),n.lang=s?.lang??`ru-RU`,n.volume=Math.min(1,Math.max(0,t.ttsVolume/100)),speechSynthesis.cancel(),speechSynthesis.speak(n)}ttsText(e,t){return t.ttsTemplate.replaceAll(`{user}`,e.username||`Зритель`).replaceAll(`{amount}`,String(e.amount)).replaceAll(`{currency}`,e.currency).replaceAll(`{message}`,e.message||``)}stopAudio(){this.audio?.pause(),this.ttsAudio?.pause(),this.audio=null,this.ttsAudio=null,this.hideTimer&&(clearTimeout(this.hideTimer),this.hideTimer=null)}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-donations-overlay`]],decls:3,vars:6,consts:[[1,`donation-overlay-stage`],[3,`config`,`event`,`rows`],[3,`config`,`goal`]],template:function(t,n){t&1&&(ds$1(0,`div`,0),Fw(1,W_,2,0),kg$1(2,`app-donation-card`,1),Ju$1()),t&2&&(Ib(n.positionClass()),kI(),Pw(n.config().goalsEnabled?1:-1),kI(),Rg$1(`config`,n.config())(`event`,n.active())(`rows`,n.rows()))},dependencies:[B,F],styles:[`[_nghost-%COMP%]{display:block;width:100vw;height:100vh;overflow:hidden;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui);pointer-events:none}.donation-overlay-stage[_ngcontent-%COMP%]{position:absolute;display:flex;gap:var(--%NS%space-sm);flex-direction:column;width:100%;padding:24px}.donation-position-top-left[_ngcontent-%COMP%]{top:0;left:0;justify-content:flex-start}.donation-position-top-center[_ngcontent-%COMP%]{top:0;left:50%;transform:translate(-50%);justify-content:center}.donation-position-top-right[_ngcontent-%COMP%]{top:0;right:0;justify-content:flex-end}.donation-position-middle-left[_ngcontent-%COMP%]{top:50%;left:0;transform:translateY(-50%);justify-content:flex-start}.donation-position-center[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%);justify-content:center}.donation-position-middle-right[_ngcontent-%COMP%]{top:50%;right:0;transform:translateY(-50%);justify-content:flex-end}.donation-position-bottom-left[_ngcontent-%COMP%]{bottom:0;left:0;justify-content:flex-start}.donation-position-bottom-center[_ngcontent-%COMP%]{bottom:0;left:50%;transform:translate(-50%);justify-content:center}.donation-position-bottom-right[_ngcontent-%COMP%]{bottom:0;right:0;justify-content:flex-end}@media(width<=560px){.donation-overlay-stage[_ngcontent-%COMP%]{padding:10px}}`]})};var X_=(i,e)=>e.id;function q_(i,e){if(i&1&&(Xu$1(0,`div`,3),Fg$1(1,`span`,5),Xu$1(2,`span`,6),Ab(3),el$1(),Xu$1(4,`span`,7),Ab(5),el$1(),Xu$1(6,`span`,8),Ab(7),el$1()()),i&2){let t=e.$implicit;kI(3),cm(t.type),kI(2),cm(t.username),kI(2),cm(t.createdAt.slice(11,16))}}function Y_(i,e){i&1&&(Xu$1(0,`span`,4),Ab(1,`Событий пока нет`),el$1())}var Zo=class i{service=I(h$1);state=_2(je(0,3e3).pipe(ql$1(()=>this.service.getState().pipe(ea$1(()=>vy$1(null))))),{initialValue:null});events=il$1(()=>(this.state()?.events??[]).slice(0,5));static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-events-overlay`]],decls:7,vars:1,consts:[[1,`overlay-stage`],[1,`events-card`],[1,`events-kicker`],[1,`event-row`],[1,`jk-caption`],[1,`event-dot`],[1,`event-type`],[1,`event-user`],[1,`event-time`]],template:function(t,n){t&1&&(Xu$1(0,`div`,0)(1,`article`,1)(2,`span`,2),Ab(3,`СОБЫТИЯ`),el$1(),Bw(4,q_,8,3,`div`,3,X_,!1,Y_,2,0,`span`,4),el$1()()),t&2&&(kI(4),Hw(n.events()))},styles:[`[_nghost-%COMP%]{display:block;padding:16px;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.overlay-stage[_ngcontent-%COMP%]{display:flex;justify-content:center}.events-card[_ngcontent-%COMP%]{display:flex;gap:8px;flex-direction:column;width:min(380px,100%);padding:16px 20px;border:1px solid rgba(255,255,255,.12);border-radius:16px;background:#121218e6;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px)}.events-kicker[_ngcontent-%COMP%]{color:var(--%NS%accent-primary);font:700 11px/16px var(--%NS%font-ui);letter-spacing:.16em}.event-row[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center;font:500 13px/18px var(--%NS%font-ui)}.event-dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:var(--%NS%accent-primary)}.event-type[_ngcontent-%COMP%]{color:var(--%NS%text-secondary);text-transform:capitalize}.event-user[_ngcontent-%COMP%]{flex:1;font-weight:600}.event-time[_ngcontent-%COMP%]{color:var(--%NS%text-secondary);font-variant-numeric:tabular-nums}@media(width<=560px){.overlay-stage[_ngcontent-%COMP%]{padding:8px}}`]})};var Jo=class i{widgetConfig=I(h);destroyRef=I(re);config=this.widgetConfig.configs;hotbar=il$1(()=>this.config().hotbar??{});slots=il$1(()=>this.hotbar().hotbarSlots??[]);constructor(){je(0,5e3).pipe(ql$1(()=>this.widgetConfig.get(`hotbar`).pipe(ea$1(()=>vy$1(null)))),DS(this.destroyRef)).subscribe()}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-hotbar-overlay`]],decls:2,vars:2,consts:[[1,`hotbar-overlay`],[3,`slots`,`size`]],template:function(t,n){t&1&&(ds$1(0,`div`,0),kg$1(1,`app-hotbar-preview`,1),Ju$1()),t&2&&(kI(),Rg$1(`slots`,n.slots())(`size`,n.hotbar().hotbarIconSize??`m`))},dependencies:[M],styles:[`[_nghost-%COMP%]{display:block;width:100%}.hotbar-overlay[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:16px}.hotbar-overlay[_ngcontent-%COMP%]   app-hotbar-preview[_ngcontent-%COMP%]{width:min(720px,100%)}`]})};function $_(i,e){if(i&1&&(Xu$1(0,`span`,7),Ab(1),el$1()),i&2){let t=Jw(2);kI(),cm(t.remainingLabel())}}function Z_(i,e){if(i&1&&(Xu$1(0,`span`,16),Fg$1(1,`span`),el$1()),i&2){let t=Jw(2);kI(),Xg$1(`width`,t.yeaPercent(),`%`)}}function J_(i,e){if(i&1&&(Xu$1(0,`span`,16),Fg$1(1,`span`),el$1()),i&2){let t=Jw(2);kI(),Xg$1(`width`,t.neiPercent(),`%`)}}function K_(i,e){if(i&1&&(Xu$1(0,`p`,20),Ab(1),el$1()),i&2){let t=Jw(2);kI(),cm(t.verdict())}}function j_(i,e){if(i&1&&(Xu$1(0,`article`,3)(1,`header`,4)(2,`span`,5),Ab(3,`ЧАТ-ЖЮРИ`),el$1(),Xu$1(4,`span`,6),Fw(5,$_,2,1,`span`,7),Xu$1(6,`span`,8),Ab(7),el$1()()(),Xu$1(8,`p`,9),Ab(9),el$1(),Xu$1(10,`p`,10),Ab(11),el$1(),Xu$1(12,`div`,11)(13,`div`,12)(14,`div`,13)(15,`div`,14)(16,`strong`,15),Ab(17),el$1()(),Fw(18,Z_,2,2,`span`,16),el$1(),Xu$1(19,`div`,17)(20,`div`,14)(21,`strong`,18),Ab(22),el$1()(),Fw(23,J_,2,2,`span`,16),el$1(),Xu$1(24,`span`,19),Ab(25),el$1()()(),Fw(26,K_,2,1,`p`,20),el$1()),i&2){let t=Jw();Xg$1(`--%NS%jury-yea`,t.yeaColor())(`--%NS%jury-nei`,t.neiColor()),kI(5),Pw(t.showTimer()&&t.remainingLabel()?5:-1),kI(2),nl$1(`AI `,t.confidence(),`%`),kI(2),cm(t.question()),kI(2),nl$1(`Совет от `,t.author()),kI(6),cm(t.yea()),kI(),Pw(t.showProgress()?18:-1),kI(4),cm(t.nei()),kI(),Pw(t.showProgress()?23:-1),kI(2),um(`Всего голосов: `,t.total(),` · доверие `,t.approval(),`%`),kI(),Pw(t.verdict()?26:-1)}}function Q_(i,e){i&1&&(Xu$1(0,`article`,2)(1,`span`,5),Ab(2,`ЧАТ-ЖЮРИ`),el$1(),Xu$1(3,`p`,9),Ab(4,`Ждём совет от чата…`),el$1()())}var Ko=class i{service=I(a$1);configService=I(h);current=_2(je(0,2e3).pipe(ql$1(()=>this.service.getCurrent().pipe(ea$1(()=>vy$1(null))))),{initialValue:null});config=_2(this.configService.watch(`jury`).pipe(ea$1(()=>vy$1({config:{}}))),{initialValue:{config:{}}});tick=_2(je(0,1e3),{initialValue:Date.now()});showProgress=il$1(()=>this.config().config.juryShowProgress!==!1);showTimer=il$1(()=>this.config().config.juryShowTimer!==!1);yeaColor=il$1(()=>this.config().config.juryYeaColor??`var(--status-positive)`);neiColor=il$1(()=>this.config().config.juryNeiColor??`var(--status-negative)`);remaining=il$1(()=>{this.tick();let e=Date.parse(this.current()?.ends_at??``);return Number.isNaN(e)?0:Math.max(0,Math.ceil((e-Date.now())/1e3))});remainingLabel=il$1(()=>{if(this.current()?.status!==`voting`)return``;let e=this.remaining();return`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`});approval=il$1(()=>Math.round(this.current()?.approval_rate??0));yea=il$1(()=>this.current()?.votes.yea??0);nei=il$1(()=>this.current()?.votes.nei??0);total=il$1(()=>this.current()?.total??0);yeaPercent=il$1(()=>this.total()?this.yea()/this.total()*100:0);neiPercent=il$1(()=>this.total()?this.nei()/this.total()*100:0);question=il$1(()=>this.current()?.message.text??``);author=il$1(()=>this.current()?.message.author.display_name??``);verdict=il$1(()=>this.current()?.verdict??``);confidence=il$1(()=>Math.round(this.current()?.message.advice_confidence??0));static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-jury-overlay`]],decls:3,vars:1,consts:[[1,`overlay-stage`],[1,`jury-card`,3,`--%NS%jury-yea`,`--%NS%jury-nei`],[1,`jury-card`,`jury-empty`],[1,`jury-card`],[1,`jury-head`],[1,`jury-kicker`],[1,`jury-meta`],[1,`jury-timer`],[1,`jury-confidence`],[1,`jury-question`],[1,`jury-author`],[1,`jury-body`],[1,`jury-votes`],[1,`vote-row`,`vote-yea`],[1,`vote-line`],[`aria-label`,`Голоса за`],[1,`vote-bar`],[1,`vote-row`,`vote-nei`],[`aria-label`,`Голоса против`],[1,`jury-total`],[1,`jury-verdict`]],template:function(t,n){if(t&1&&(Xu$1(0,`div`,0),Fw(1,j_,27,15,`article`,1)(2,Q_,5,0,`article`,2),el$1()),t&2){let r;kI(),Pw((r=n.current())?1:2,r)}},styles:[`[_nghost-%COMP%]{display:block;padding:16px;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.overlay-stage[_ngcontent-%COMP%]{display:flex;justify-content:center}.jury-card[_ngcontent-%COMP%]{width:min(560px,100%);padding:20px 24px;border:1px solid rgba(255,255,255,.12);border-radius:20px;background:#121218e6;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);box-shadow:0 18px 50px #00000073}.jury-head[_ngcontent-%COMP%], .jury-body[_ngcontent-%COMP%], .vote-row[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:center;justify-content:space-between}.jury-kicker[_ngcontent-%COMP%]{color:var(--%NS%accent-primary);font:700 12px/16px var(--%NS%font-ui);letter-spacing:.16em}.jury-meta[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.jury-timer[_ngcontent-%COMP%]{color:var(--%NS%text-secondary);font:600 12px/18px var(--%NS%font-ui);font-variant-numeric:tabular-nums}.jury-confidence[_ngcontent-%COMP%]{padding:2px 10px;border-radius:999px;background:color-mix(in srgb,var(--%NS%accent-primary) 16%,transparent);color:var(--%NS%accent-primary);font:600 12px/18px var(--%NS%font-ui)}.jury-question[_ngcontent-%COMP%]{margin:14px 0 4px;font:600 22px/30px var(--%NS%font-ui)}.jury-author[_ngcontent-%COMP%], .jury-total[_ngcontent-%COMP%]{color:var(--%NS%text-secondary);font:500 13px/20px var(--%NS%font-ui)}.jury-body[_ngcontent-%COMP%]{margin-top:18px}.jury-votes[_ngcontent-%COMP%]{display:flex;gap:8px;flex:1;flex-direction:column}.vote-row[_ngcontent-%COMP%]{display:flex;gap:6px;flex-direction:column;padding:8px 12px;border-radius:12px;background:#ffffff0f;font:600 14px/20px var(--%NS%font-ui)}.vote-line[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.vote-bar[_ngcontent-%COMP%]{display:block;overflow:hidden;height:5px;border-radius:999px;background:#ffffff1a}.vote-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;height:100%;border-radius:inherit;transition:width .3s ease}.vote-yea[_ngcontent-%COMP%]   .vote-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:var(--%NS%jury-yea, var(--%NS%status-positive))}.vote-nei[_ngcontent-%COMP%]   .vote-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:var(--%NS%jury-nei, var(--%NS%status-negative))}.vote-yea[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--%NS%status-positive)}.vote-nei[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--%NS%status-negative)}.jury-verdict[_ngcontent-%COMP%]{margin:18px 0 0;padding-top:14px;border-top:1px solid rgba(255,255,255,.12);font:600 16px/24px var(--%NS%font-ui)}.jury-empty[_ngcontent-%COMP%]{text-align:center}.jury-empty[_ngcontent-%COMP%]   .jury-question[_ngcontent-%COMP%]{color:var(--%NS%text-secondary)}@media(width<=560px){.overlay-stage[_ngcontent-%COMP%]{padding:8px}}@media(width<=560px){.jury-card[_ngcontent-%COMP%]{padding:14px 16px}.jury-question[_ngcontent-%COMP%]{font-size:18px;line-height:24px}.jury-body[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}}`]})};var ey=(i,e)=>e.videoId+i;function ty(i,e){if(i&1&&(Xu$1(0,`span`,5)(1,`b`),Ab(2),el$1(),Xu$1(3,`span`),Ab(4),el$1(),Xu$1(5,`span`,4),Ab(6),el$1()()),i&2){let t=e.$implicit,n=e.$index;kI(2),cm(n+1),kI(2),cm(t.title),kI(2),cm(t.author)}}function ny(i,e){if(i&1&&(Xu$1(0,`div`,3),Bw(1,ty,7,3,`span`,5,ey),el$1()),i&2){let t=Jw();kI(),Hw(t.tracks())}}function iy(i,e){i&1&&(Xu$1(0,`span`,4),Ab(1,`Трек-лист пуст`),el$1())}var jo=class i{music=I(c$1);state=_2(je(0,1e4).pipe(ql$1(()=>this.music.list().pipe(ea$1(()=>vy$1(null))))),{initialValue:null});current=il$1(()=>this.state()?.tracks?.[0]??null);tracks=il$1(()=>(this.state()?.tracks??[]).slice(0,10));duration=il$1(()=>{let e=this.current()?.durationSeconds??0;return`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`});static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-music-overlay`]],decls:6,vars:1,consts:[[1,`overlay-stage`],[1,`music-card`],[1,`music-kicker`],[1,`music-next`],[1,`jk-caption`],[1,`music-next-row`]],template:function(t,n){t&1&&(Xu$1(0,`div`,0)(1,`article`,1)(2,`span`,2),Ab(3,`ОЧЕРЕДЬ АУДИО`),el$1(),Fw(4,ny,3,0,`div`,3)(5,iy,2,0,`span`,4),el$1()()),t&2&&(kI(4),Pw(n.tracks().length?4:5))},styles:[`[_nghost-%COMP%]{display:block;padding:16px;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.overlay-stage[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}.music-card[_ngcontent-%COMP%]{display:flex;gap:4px;flex-direction:column;width:min(420px,100%);padding:14px 18px;border:1px solid rgba(255,255,255,.1);border-radius:16px;background:#121218e0;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}.music-kicker[_ngcontent-%COMP%]{color:var(--%NS%accent-secondary);font:700 11px/16px var(--%NS%font-ui);letter-spacing:.16em}.music-title[_ngcontent-%COMP%]{font:700 18px/24px var(--%NS%font-ui)}.music-author[_ngcontent-%COMP%]{color:var(--%NS%text-secondary);font:500 13px/18px var(--%NS%font-ui)}.music-next[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column;margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,.1)}.music-next-row[_ngcontent-%COMP%]{overflow:hidden;color:var(--%NS%text-secondary);font:500 12px/16px var(--%NS%font-ui);text-overflow:ellipsis;white-space:nowrap}`]})};var gd=(()=>{class i{constructor(){this.el=Mi$1(),this.setElCurrentTime=xi(()=>{Math.abs(this.currentTime()-this.el.currentTime)>.05&&(this.el.currentTime=this.currentTime())}),this.setElPlaybackRate=xi(()=>{this.updatePlaybackRate(this.playbackRate())}),this.setElPaused=xi(()=>{this.paused()?this.el.pause?.():this.el.play?.(),this.updatePlaybackRate(kt(this.playbackRate))}),this.playbackRate=VB(1),this.volume=BB(1),this.currentTime=BB(this.el.currentTime??0),this.paused=BB(this.el.paused)}onPausedChange(t){this.paused.set(t)}onVolumeChange(){this.volume.set(this.el.volume)}onCurrentTimeChange(){this.currentTime.set(this.el.currentTime)}updatePlaybackRate(t){this.el.playbackRate=t}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵdir=Zu$1({type:i,selectors:[[`video`,`tuiMedia`,``],[`audio`,`tuiMedia`,``]],hostVars:1,hostBindings:function(n,r){n&1&&$g$1(`durationchange`,function(){return 0})(`ended`,function(){return r.onPausedChange(!0)})(`pause`,function(){return r.onPausedChange(!0)})(`play`,function(){return r.onPausedChange(!1)})(`seeked`,function(){return r.onCurrentTimeChange()})(`seeking`,function(){return r.onCurrentTimeChange()})(`timeupdate`,function(){return r.onCurrentTimeChange()})(`volumechange`,function(){return r.onVolumeChange()}),n&2&&Bg$1(`volume`,r.volume())},inputs:{playbackRate:[1,`playbackRate`],volume:[1,`volume`],currentTime:[1,`currentTime`],paused:[1,`paused`]},outputs:{volume:`volumeChange`,currentTime:`currentTimeChange`,paused:`pausedChange`},exportAs:[`tuiMedia`]})}}return i})();var ry=[`player`];var sy=[`media`];function ay(i,e){if(i&1){let t=qw();ds$1(0,`audio`,17,0),$g$1(`currentTimeChange`,function(r){Wd$1(t);let s=Jw(2);return zd$1(s.onMediaTime(r))})(`playing`,function(){Wd$1(t);let r=Jw(2);return zd$1(r.onMediaPlaying())})(`pause`,function(){Wd$1(t);let r=Jw(2);return zd$1(r.onMediaPause())})(`ended`,function(){Wd$1(t);let r=Jw(2);return zd$1(r.nextTrack())})(`error`,function(){Wd$1(t);let r=Jw(2);return zd$1(r.handleVideoError())})(`loadedmetadata`,function(r){Wd$1(t);let s=Jw(2);return zd$1(s.onMediaMetadata(r))}),Ju$1()}if(i&2){let t=Jw(),n=Jw();Rg$1(`src`,t.url)(`currentTime`,n.mediaCurrentTime())}}function oy(i,e){if(i&1){let t=qw();ds$1(0,`video`,18,0),$g$1(`currentTimeChange`,function(r){Wd$1(t);let s=Jw(2);return zd$1(s.onMediaTime(r))})(`playing`,function(){Wd$1(t);let r=Jw(2);return zd$1(r.onMediaPlaying())})(`pause`,function(){Wd$1(t);let r=Jw(2);return zd$1(r.onMediaPause())})(`ended`,function(){Wd$1(t);let r=Jw(2);return zd$1(r.nextTrack())})(`error`,function(){Wd$1(t);let r=Jw(2);return zd$1(r.handleVideoError())})(`loadedmetadata`,function(r){Wd$1(t);let s=Jw(2);return zd$1(s.onMediaMetadata(r))}),Ju$1()}if(i&2){let t=Jw(),n=Jw();Rg$1(`src`,t.url)(`currentTime`,n.mediaCurrentTime())}}function ly(i,e){if(i&1){let t=qw();ds$1(0,`iframe`,19,1),$g$1(`load`,function(r){Wd$1(t);let s=Jw(2);return zd$1(s.onVideoLoad(r))}),Ju$1()}if(i&2){let t=Jw(2);em(`nowplaying-video-hidden`,!t.showVideo()||t.videoError()),Rg$1(`src`,e,eh$1)}}function cy(i,e){if(i&1){let t=qw();ds$1(0,`img`,20),$g$1(`error`,function(){Wd$1(t);let r=Jw(2);return zd$1(r.thumbnailFailed.set(!0))}),Ju$1()}if(i&2){let t=Jw(),n=Jw();Rg$1(`alt`,t.title)(`src`,n.thumbnailUrl())}}function uy(i,e){i&1&&(ds$1(0,`span`,11),Ab(1,`♪`),Ju$1())}function hy(i,e){i&1&&(ds$1(0,`span`,12),Ab(1,`Видео недоступно встраиванию`),Ju$1())}function dy(i,e){if(i&1){let t=qw();ds$1(0,`button`,21),$g$1(`click`,function(){Wd$1(t);let r=Jw(2);return zd$1(r.resumePlayback())}),Ab(1,` ▶ Включить звук `),Ju$1()}}function fy(i,e){if(i&1&&(Fw(0,ay,2,2,`audio`,7)(1,oy,2,2,`video`,8)(2,ly,2,3,`iframe`,9),Fw(3,cy,1,2,`img`,10)(4,uy,2,0,`span`,11),Fw(5,hy,2,0,`span`,12),Fw(6,dy,2,0,`button`,13),ds$1(7,`div`,14)(8,`strong`,15),Ab(9),Ju$1(),ds$1(10,`span`,16),Ab(11),Ju$1()()),i&2){let t,n=e,r=Jw();Pw(n.kind===`audio`?0:n.kind===`video`?1:(t=r.videoUrl())?2:-1,t),kI(3),Pw((n.kind===`audio`||!r.showVideo()||r.videoError())&&r.thumbnailUrl()&&!r.thumbnailFailed()?3:!r.showVideo()||r.videoError()?4:-1),kI(2),Pw(r.videoError()?5:-1),kI(),Pw(r.needsGesture()?6:-1),kI(3),cm(n.title),kI(2),lm(` `,n.author,` · `,r.elapsed(),` / `,r.duration(),` `)}}function py(i,e){if(i&1&&(ds$1(0,`span`,5),Ab(1),Ju$1()),i&2){let t=Jw();kI(),nl$1(` `,t.finished()?`Очередь закончилась`:`Трек-лист пуст`,` `)}}function my(i,e){if(i&1){let t=qw();ds$1(0,`button`,24),$g$1(`click`,function(){Wd$1(t);let r=Jw(2);return zd$1(r.togglePlayback())}),Ab(1),Ju$1()}if(i&2){let t=Jw(2);kI(),nl$1(` `,t.paused()?`▶ Играть`:`❚❚ Пауза`,` `)}}function gy(i,e){if(i&1){let t=qw();ds$1(0,`div`,6),Fw(1,my,2,1,`button`,22),ds$1(2,`button`,23),$g$1(`click`,function(){Wd$1(t);let r=Jw();return zd$1(r.skipTrack())}),Ab(3,` Пропустить → `),Ju$1()()}if(i&2){let t=Jw();kI(),Pw(t.showControls()?1:-1)}}var Qo=class i{music=I(c$1);configService=I(h);sanitizer=I(Qe);destroyRef=I(re);endTimer=null;gestureTimer=null;advancing=!1;queue=[];player;media;state=_2(je(0,3e3).pipe(ql$1(()=>this.music.list().pipe(ea$1(()=>vy$1(null))))),{initialValue:null});config=_2(this.configService.watch(`nowplaying`).pipe(ea$1(()=>vy$1({config:{}}))),{initialValue:{config:{}}});playlist=il$1(()=>{let e=new Date().toLocaleDateString(`en-CA`);return[...this.state()?.tracks??[]].filter(t=>new Date(t.lastAddedAt).toLocaleDateString(`en-CA`)===e).sort((t,n)=>Date.parse(t.lastAddedAt)-Date.parse(n.lastAddedAt))});currentId=cn(this.storedCurrentId());serverCurrent=cn(null);serverCurrentApplied=!1;reloadKey=cn(0);finished=cn(!1);current=il$1(()=>this.playlist().find(e=>e.videoId===this.currentId())??null);currentKind=il$1(()=>this.current()?.kind??``);thumbnailFailed=cn(!1);playbackStarted=cn(!1);needsGesture=cn(!1);paused=cn(!1);mediaCurrentTime=cn(0);mediaDuration=cn(0);videoError=cn(!1);thumbnailUrl=il$1(()=>{let e=this.currentId();return e&&this.currentKind()===`youtube`?`rgg-sync/music/thumbnail?id=${encodeURIComponent(e)}`:``});showVideo=il$1(()=>this.config().config.showVideo!==!1);showControls=il$1(()=>this.config().config.showControls!==!1);lastVideoKey=``;lastVideoUrl=null;videoUrl=il$1(()=>{let e=this.currentId(),t=this.currentKind();if(!e||t===`audio`||t===`video`)return null;let n=`${e}|${t}|${this.reloadKey()}`;if(n===this.lastVideoKey)return this.lastVideoUrl;let r=[`autoplay=1`,`controls=1`,`autohide=1`,`modestbranding=1`,`rel=0`,`showinfo=0`,`iv_load_policy=3`,`fs=0`,`disablekb=1`,`cc_load_policy=0`,`playsinline=1`,`enablejsapi=1`,`origin=${encodeURIComponent(location.origin)}`,`reload=${this.reloadKey()}`].join(`&`);return this.lastVideoKey=n,this.lastVideoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${encodeURIComponent(e)}?${r}`),this.lastVideoUrl});constructor(){this.music.current().subscribe({next:({track:t})=>{this.serverCurrent.set(t)},error:()=>{}}),xi(()=>{let t=this.serverCurrent(),n=this.playlist().map(r=>r.videoId);!this.serverCurrentApplied&&t&&n.includes(t.videoId)&&(this.serverCurrentApplied=!0,this.finished.set(!1),this.currentId.set(t.videoId))}),xi(()=>{let n=this.playlist().map(s=>s.videoId);if(!n.length){this.queue=[],this.currentId.set(null),this.finished.set(!1);return}let r=[];if(!this.queue.length)this.queue=[...n];else{let s=this.currentId(),a=this.queue.filter(c=>n.includes(c));r=n.filter(c=>!this.queue.includes(c));let o=s?a.indexOf(s):-1;r.length&&(o>=0?a.splice(o+1,0,...r):a.push(...r)),this.queue=a}(!this.currentId()||!this.queue.includes(this.currentId()??``))&&r.length&&(this.finished.set(!1),this.currentId.set(r[r.length-1]))}),xi(()=>{let t=this.currentId();if(this.reloadKey(),this.persistCurrent(t),this.music.setCurrent(t).subscribe({error:()=>{}}),this.thumbnailFailed.set(!1),this.playbackStarted.set(!1),this.mediaCurrentTime.set(0),this.needsGesture.set(!1),this.clearEndTimer(),this.clearGestureTimer(),!this.currentId())return;let n=kt(()=>this.current()?.durationSeconds??0);this.scheduleEnd(n)});let e=setInterval(()=>{this.currentId()&&this.playbackStarted()&&this.persistCurrent(this.currentId())},5e3);this.destroyRef.onDestroy(()=>{clearInterval(e),this.clearEndTimer(),this.clearGestureTimer()})}onMessage(e){if(!e.origin.includes(`youtube.com`))return;let t=this.parseMessage(e.data);t?.event===`onStateChange`&&this.applyPlayerState(typeof t.info==`number`?t.info:void 0),t?.event===`infoDelivery`&&this.applyPlayerState(typeof t.info==`object`?t.info.playerState:void 0),t?.event===`onError`&&this.handleVideoError()}onVideoLoad(e){let t=e.target;this.listenToPlayer(t),setTimeout(()=>this.listenToPlayer(t),1e3),setTimeout(()=>this.listenToPlayer(t),3e3);for(let n of[`playVideo`,`unMute`])t.contentWindow?.postMessage(JSON.stringify({event:`command`,func:n,args:[]}),`*`);this.videoError.set(!1),this.clearGestureTimer(),this.gestureTimer=setTimeout(()=>{!this.playbackStarted()&&!this.videoError()&&this.needsGesture.set(!0)},2500)}resumePlayback(){if(this.media?.nativeElement){this.media.nativeElement.play(),this.paused.set(!1),this.needsGesture.set(!1);return}this.sendCommand(`playVideo`),this.sendCommand(`unMute`),this.sendCommand(`setVolume`,[100]),this.paused.set(!1),this.needsGesture.set(!1),this.scheduleEnd()}togglePlayback(){if(this.media?.nativeElement){this.media.nativeElement.paused?(this.media.nativeElement.play(),this.paused.set(!1),this.scheduleEnd()):(this.media.nativeElement.pause(),this.paused.set(!0),this.clearEndTimer());return}if(this.paused()){this.resumePlayback();return}this.sendCommand(`pauseVideo`),this.paused.set(!0),this.clearEndTimer()}onMediaPlaying(){this.playbackStarted.set(!0),this.paused.set(!1),this.needsGesture.set(!1),this.clearGestureTimer(),this.scheduleEnd()}onMediaPause(){this.paused.set(!0),this.clearEndTimer()}onMediaMetadata(e){let t=e.target;this.mediaDuration.set(Number.isFinite(t.duration)?t.duration:0),this.scheduleEnd()}handleVideoError(){this.clearEndTimer(),this.clearGestureTimer(),this.videoError.set(!0),this.playbackStarted.set(!1),this.needsGesture.set(!1),this.paused.set(!0),setTimeout(()=>{this.videoError()&&this.nextTrack()},1500)}skipTrack(){this.clearEndTimer(),this.nextTrack(!0)}nextTrack(e=!1){if(!this.queue.length||!this.currentId()||this.advancing&&!e)return;this.advancing=!0;let t=this.queue.indexOf(this.currentId()??``),n=t>=0?this.queue[t+1]:void 0;if(!n){this.finished.set(!0),this.currentId.set(null),this.clearEndTimer(),setTimeout(()=>{this.advancing=!1},1e3);return}this.finished.set(!1),this.reloadKey.update(r=>r+1),this.currentId.set(n),setTimeout(()=>{this.advancing=!1},1e3)}onMediaTime(e){this.mediaCurrentTime.set(Number.isFinite(e)?e:0)}elapsed=il$1(()=>this.formatTime(this.mediaCurrentTime()));duration=il$1(()=>this.formatTime(this.current()?.durationSeconds??0));formatTime(e){let t=Math.max(0,Math.floor(e)),n=Math.floor(t/60),r=t%60;return`${n}:${String(r).padStart(2,`0`)}`}scheduleEnd(e=this.current()?.durationSeconds??0){if(this.clearEndTimer(),this.paused())return;let t=e||this.mediaDuration();t&&(this.endTimer=setTimeout(()=>this.nextTrack(),Math.max(15,t+10)*1e3))}clearEndTimer(){this.endTimer&&(clearTimeout(this.endTimer),this.endTimer=null)}clearGestureTimer(){this.gestureTimer&&(clearTimeout(this.gestureTimer),this.gestureTimer=null)}applyPlayerState(e){let t=typeof e==`string`?Number(e):e;t===0&&this.nextTrack(),(t===1||t===3)&&(this.playbackStarted.set(!0),this.paused.set(t===3),this.needsGesture.set(!1),this.clearGestureTimer(),t===1&&(this.paused.set(!1),this.scheduleEnd())),t===2&&(this.paused.set(!0),this.clearEndTimer())}listenToPlayer(e){e.contentWindow?.postMessage(JSON.stringify({event:`listening`,id:`nowplaying-player`,channel:`widget`}),`*`)}sendCommand(e,t=[]){this.player?.nativeElement.contentWindow?.postMessage(JSON.stringify({event:`command`,func:e,args:t}),`*`)}storedCurrentId(){try{let e=localStorage.getItem(`nsh.nowplaying.current`);if(!e)return null;let t=JSON.parse(e);return!t.id||!t.at||Date.now()-t.at>15e3?(localStorage.removeItem(`nsh.nowplaying.current`),null):t.id}catch{return null}}persistCurrent(e){try{e?localStorage.setItem(`nsh.nowplaying.current`,JSON.stringify({id:e,at:Date.now()})):localStorage.removeItem(`nsh.nowplaying.current`)}catch{}}parseMessage(e){if(typeof e==`object`&&e!==null)return e;if(typeof e!=`string`)return null;try{return JSON.parse(e)}catch{return null}}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-nowplaying-overlay`]],viewQuery:function(t,n){if(t&1&&zg$1(ry,5)(sy,5),t&2){let r;rb(r=ob())&&(n.player=r.first),rb(r=ob())&&(n.media=r.first)}},hostBindings:function(t,n){t&1&&$g$1(`message`,function(s){return n.onMessage(s)},OE)},decls:7,vars:2,consts:[[`media`,``],[`player`,``],[1,`overlay-stage`],[1,`nowplaying-kicker`],[1,`nowplaying-card`],[1,`jk-caption`,`nowplaying-empty`],[1,`nowplaying-controls`],[`autoplay`,``,`tuiMedia`,``,1,`nowplaying-media`,`nowplaying-media-audio`,3,`src`,`currentTime`],[`autoplay`,``,`playsinline`,``,`tuiMedia`,``,1,`nowplaying-media`,3,`src`,`currentTime`],[`id`,`nowplaying-player`,`title`,`Now playing`,`referrerpolicy`,`strict-origin-when-cross-origin`,`allow`,`autoplay; encrypted-media`,1,`nowplaying-video`,3,`nowplaying-video-hidden`,`src`],[1,`nowplaying-cover`,3,`alt`,`src`],[`aria-hidden`,`true`,1,`nowplaying-cover`,`nowplaying-cover-empty`],[1,`nowplaying-error`],[`type`,`button`,1,`nowplaying-play`],[1,`nowplaying-meta`],[1,`nowplaying-title`],[1,`nowplaying-author`],[`autoplay`,``,`tuiMedia`,``,1,`nowplaying-media`,`nowplaying-media-audio`,3,`currentTimeChange`,`playing`,`pause`,`ended`,`error`,`loadedmetadata`,`src`,`currentTime`],[`autoplay`,``,`playsinline`,``,`tuiMedia`,``,1,`nowplaying-media`,3,`currentTimeChange`,`playing`,`pause`,`ended`,`error`,`loadedmetadata`,`src`,`currentTime`],[`id`,`nowplaying-player`,`title`,`Now playing`,`referrerpolicy`,`strict-origin-when-cross-origin`,`allow`,`autoplay; encrypted-media`,1,`nowplaying-video`,3,`load`,`src`],[1,`nowplaying-cover`,3,`error`,`alt`,`src`],[`type`,`button`,1,`nowplaying-play`,3,`click`],[`type`,`button`,1,`nowplaying-control`],[`type`,`button`,1,`nowplaying-control`,`nowplaying-skip`,3,`click`],[`type`,`button`,1,`nowplaying-control`,3,`click`]],template:function(t,n){if(t&1&&(ds$1(0,`div`,2)(1,`span`,3),Ab(2,`NOW PLAYING`),Ju$1(),ds$1(3,`article`,4),Fw(4,fy,12,8)(5,py,2,1,`span`,5),Ju$1(),Fw(6,gy,4,1,`div`,6),Ju$1()),t&2){let r;kI(4),Pw((r=n.current())?4:5,r),kI(2),Pw(n.current()?6:-1)}},dependencies:[gd],styles:[`[_nghost-%COMP%]{display:block;width:100%;height:100%;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.overlay-stage[_ngcontent-%COMP%]{display:flex;gap:8px;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;width:100vw;height:100vh;padding:14px}.nowplaying-kicker[_ngcontent-%COMP%]{flex:0 0 auto;color:var(--%NS%accent-primary);font:700 11px/15px var(--%NS%font-ui);letter-spacing:.14em;text-align:center;text-shadow:0 2px 12px rgba(0,0,0,.65)}.nowplaying-card[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:min(400px,100%);max-width:400px;max-height:400px;border:1px solid rgba(255,255,255,.12);border-radius:18px;background:#121218eb;box-shadow:0 18px 50px #00000073;aspect-ratio:16/9}.nowplaying-media[_ngcontent-%COMP%]{position:absolute;object-fit:contain;width:100%;height:100%;background:#000;inset:0}.nowplaying-media-audio[_ngcontent-%COMP%]{width:1px;height:1px;opacity:0;pointer-events:none}.nowplaying-video[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;border:0;inset:0}.nowplaying-video-hidden[_ngcontent-%COMP%]{width:1px;height:1px;opacity:0;pointer-events:none}.nowplaying-cover[_ngcontent-%COMP%]{position:absolute;object-fit:cover;width:100%;height:100%;inset:0}.nowplaying-cover-empty[_ngcontent-%COMP%]{display:grid;background:#ffffff0f;color:var(--%NS%text-tertiary);font-size:54px;place-items:center}.nowplaying-meta[_ngcontent-%COMP%]{position:absolute;top:0;right:0;left:0;z-index:1;display:flex;gap:2px;flex-direction:column;align-items:center;padding:14px 16px 48px;background:linear-gradient(rgba(0,0,0,.88),transparent);text-align:center}.nowplaying-title[_ngcontent-%COMP%]{font:700 16px/21px var(--%NS%font-ui);text-shadow:0 2px 12px rgba(0,0,0,.8)}.nowplaying-author[_ngcontent-%COMP%]{color:var(--%NS%text-secondary);font:var(--%NS%font-body-sm);text-shadow:0 2px 10px rgba(0,0,0,.8)}.nowplaying-play[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;z-index:2;padding:10px 18px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:#0f0817e0;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:var(--%NS%text-primary);font:700 13px/18px var(--%NS%font-ui);cursor:pointer;transform:translate(-50%,-50%)}.nowplaying-controls[_ngcontent-%COMP%]{display:flex;gap:6px;flex:0 0 auto;justify-content:center}.nowplaying-control[_ngcontent-%COMP%]{padding:7px 12px;border:1px solid rgba(255,255,255,.14);border-radius:999px;background:#121218eb;color:var(--%NS%text-primary);font:600 12px/16px var(--%NS%font-ui);cursor:pointer}.nowplaying-control[_ngcontent-%COMP%]:hover{border-color:var(--%NS%accent-primary);color:var(--%NS%accent-primary)}.nowplaying-empty[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);inset:50% auto auto 50%}.nowplaying-error[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;z-index:2;padding:8px 12px;border-radius:999px;background:#0f0817e0;color:var(--%NS%text-secondary);font:600 12px/16px var(--%NS%font-ui);white-space:nowrap;transform:translate(-50%,-50%)}.nowplaying-skip[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--%NS%accent-primary) 55%,transparent);color:var(--%NS%accent-primary);font-weight:700}`]})};function _y(i,e){if(i&1&&kg$1(0,`app-roulette-stage`,0),i&2){let t=Jw();Rg$1(`appearance`,t.state().config.appearance)(`audio`,t.state().config.audio)(`audioEnabled`,!0)(`filler`,t.filler())(`interactive`,!1)(`mode`,t.state().config.mode)(`reveal`,t.state().config.reveal)(`round`,t.round())(`spinning`,t.spinning())}}var el=class i{roulette=I(n);destroyRef=I(re);lastRound=``;initialized=!1;hideTimer=null;visible=cn(!1);state=cn({config:e,history:[],eliminated:[],remaining:0});round=cn(null);filler=cn([]);spinning=cn(!1);constructor(){je(0,1500).pipe(DS(this.destroyRef)).subscribe(()=>this.poll()),this.roulette.reel(18).pipe(DS(this.destroyRef)).subscribe(e=>this.filler.set(e.items))}poll(){this.roulette.state().pipe(DS(this.destroyRef)).subscribe({next:e=>{this.state.set(e);let t=e.history[0];if(!this.initialized){this.initialized=!0,this.lastRound=t?.id??``;return}t&&t.id!==this.lastRound&&(this.lastRound=t.id,this.round.set(t),this.spinning.set(!0),this.visible.set(!0),this.hideTimer&&clearTimeout(this.hideTimer),this.hideTimer=setTimeout(()=>this.visible.set(!1),8e3),je(4e3).pipe(DS(this.destroyRef)).subscribe(()=>{this.spinning.set(!1),this.roulette.reel(18).pipe(DS(this.destroyRef)).subscribe(n=>this.filler.set(n.items))}))},error:()=>{}})}ngOnDestroy(){this.hideTimer&&clearTimeout(this.hideTimer)}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-roulette-overlay`]],decls:1,vars:1,consts:[[3,`appearance`,`audio`,`audioEnabled`,`filler`,`interactive`,`mode`,`reveal`,`round`,`spinning`]],template:function(t,n){t&1&&Fw(0,_y,1,9,`app-roulette-stage`,0),t&2&&Pw(n.visible()?0:-1)},dependencies:[J],styles:[`[_nghost-%COMP%]{display:block;width:100%;height:100%}app-roulette-stage[_ngcontent-%COMP%]{width:100%;min-height:100vh}`]})};var yy=(i,e)=>e.userId;function xy(i,e){if(i&1&&(Xu$1(0,`div`,3)(1,`span`,5),Ab(2),el$1(),Xu$1(3,`span`,6),Ab(4),el$1(),Xu$1(5,`strong`,7),Ab(6),el$1()()),i&2){let t=e.$implicit,n=e.$index;kI(2),cm(n+1),kI(2),cm(t.displayName),kI(2),cm(t.balance)}}function vy(i,e){i&1&&(Xu$1(0,`span`,4),Ab(1,`Пока нет баллов`),el$1())}var tl=class i{points=I(p);state=_2(je(0,1e4).pipe(ql$1(()=>this.points.getState().pipe(ea$1(()=>vy$1(null))))),{initialValue:null});rows=il$1(()=>(this.state()?.top??[]).slice(0,5));static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-points-overlay`]],decls:7,vars:1,consts:[[1,`overlay-stage`],[1,`points-card`],[1,`points-kicker`],[1,`points-row`],[1,`jk-caption`],[1,`points-rank`],[1,`points-name`],[1,`points-balance`]],template:function(t,n){t&1&&(Xu$1(0,`div`,0)(1,`article`,1)(2,`span`,2),Ab(3,`ТОП ЗРИТЕЛЕЙ`),el$1(),Bw(4,xy,7,3,`div`,3,yy,!1,vy,2,0,`span`,4),el$1()()),t&2&&(kI(4),Hw(n.rows()))},styles:[`[_nghost-%COMP%]{display:block;padding:16px;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.overlay-stage[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}.points-card[_ngcontent-%COMP%]{display:flex;gap:6px;flex-direction:column;width:min(360px,100%);padding:14px 18px;border:1px solid rgba(255,255,255,.1);border-radius:16px;background:#121218e0;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}.points-kicker[_ngcontent-%COMP%]{color:var(--%NS%accent-primary);font:700 11px/16px var(--%NS%font-ui);letter-spacing:.16em}.points-row[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center;font:600 13px/18px var(--%NS%font-ui);padding-block:2px}.points-rank[_ngcontent-%COMP%]{width:18px;color:var(--%NS%text-secondary);font-variant-numeric:tabular-nums}.points-name[_ngcontent-%COMP%]{flex:1}.points-balance[_ngcontent-%COMP%]{color:var(--%NS%status-positive);font-variant-numeric:tabular-nums}`]})};var My=(i,e)=>e.id;function by(i,e){if(i&1){let t=qw();Xu$1(0,`article`,2)(1,`span`,4),Ab(2),el$1(),Xu$1(3,`div`,5)(4,`span`,6),Ab(5),el$1(),Xu$1(6,`span`,7),Ab(7),el$1()(),Xu$1(8,`button`,8),Ug$1(`click`,function(){let r=Wd$1(t).$implicit,s=Jw();return zd$1(s.vote(r.id))}),Ab(9),el$1()()}if(i&2){let t=e.$implicit,n=e.$index;kI(2),nl$1(`#`,n+1),kI(3),nl$1(`«`,t.text,`»`),kI(2),um(``,t.author,` · #`,t.number),kI(2),nl$1(`♥ `,t.votes||0)}}function Sy(i,e){i&1&&(Xu$1(0,`span`,3),Ab(1,`Цитат пока нет`),el$1())}var nl=class i{quotes=I(c);state=_2(je(0,5e3).pipe(ql$1(()=>this.quotes.list().pipe(ea$1(()=>vy$1({quotes:[]}))))),{initialValue:{quotes:[]}});top=il$1(()=>[...this.state().quotes].sort((e,t)=>(t.votes??0)-(e.votes??0)).slice(0,8));vote(e){let t=localStorage.getItem(`nsh.quote.voter`);t||(t=`viewer-${crypto.randomUUID()}`,localStorage.setItem(`nsh.quote.voter`,t)),this.quotes.vote(e,t).subscribe({error:()=>{}})}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-quotes-overlay`]],decls:6,vars:1,consts:[[1,`quotes-overlay`],[1,`quotes-kicker`],[1,`quote-row`],[1,`jk-caption`],[1,`quote-rank`],[1,`quote-body`],[1,`quote-text`],[1,`quote-meta`],[`type`,`button`,1,`quote-vote`,3,`click`]],template:function(t,n){t&1&&(Xu$1(0,`div`,0)(1,`span`,1),Ab(2,`ЦИТАТЫ`),el$1(),Bw(3,by,10,5,`article`,2,My,!1,Sy,2,0,`span`,3),el$1()),t&2&&(kI(3),Hw(n.top()))},styles:[`[_nghost-%COMP%]{display:block;padding:16px;font-family:var(--%NS%font-ui)}.quotes-overlay[_ngcontent-%COMP%]{display:flex;gap:6px;flex-direction:column;width:min(560px,100%);padding:14px 18px;border:1px solid rgba(255,255,255,.1);border-radius:16px;background:#121218db;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}.quotes-kicker[_ngcontent-%COMP%]{color:var(--%NS%accent-primary);font:700 11px/16px var(--%NS%font-ui);letter-spacing:.18em}.quote-row[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.08)}.quote-row[_ngcontent-%COMP%]:last-child{border-bottom:0}.quote-rank[_ngcontent-%COMP%]{color:var(--%NS%accent-primary);font-weight:800}.quote-body[_ngcontent-%COMP%]{display:flex;gap:2px;flex:1;flex-direction:column;min-width:0}.quote-text[_ngcontent-%COMP%]{color:var(--%NS%text-primary);font:500 14px/19px var(--%NS%font-ui)}.quote-meta[_ngcontent-%COMP%]{color:var(--%NS%text-secondary);font:500 11px/16px var(--%NS%font-ui)}.quote-vote[_ngcontent-%COMP%]{padding:3px 8px;border:1px solid color-mix(in srgb,var(--%NS%accent-primary) 45%,transparent);border-radius:999px;background:transparent;color:var(--%NS%accent-primary);font:700 12px/18px var(--%NS%font-ui);cursor:pointer}`]})};function wy(i,e){i&1&&(Xu$1(0,`span`,6),Ab(1,`Милстоун!`),el$1())}function Ey(i,e){if(i&1&&(Xu$1(0,`div`,0)(1,`article`,1)(2,`span`,2),Ab(3,`🔥`),el$1(),Xu$1(4,`div`,3)(5,`strong`,4),Ab(6),el$1(),Xu$1(7,`span`,5),Ab(8),el$1(),Fw(9,wy,2,0,`span`,6),el$1(),Xu$1(10,`span`,7),Ab(11),el$1()()()),i&2){let t=e,n=Jw();kI(),em(`streak-milestone`,n.milestone()),kI(5),cm(t.displayName),kI(2),nl$1(``,t.streakCount,` стриков подряд`),kI(),Pw(n.milestone()?9:-1),kI(2),nl$1(`+`,t.channelPointsAwarded)}}var il=class i{twitch=I(a);widgetConfig=I(h);destroyRef=I(re);tick=cn(Date.now());shownUntil=cn(0);lastKey=``;latest=_2(je(0,3e3).pipe(ql$1(()=>this.twitch.getLatestStreak().pipe(ea$1(()=>vy$1(null))))),{initialValue:null});active=cn(null);visible=il$1(()=>this.tick()<this.shownUntil()&&this.active());config=cn({});milestone=il$1(()=>{let e=this.active()?.streakCount??0,t=this.config().streakMin??2,n=this.config().streakEvery??5;return e>=t&&(n<=1||e%n===0)});constructor(){this.widgetConfig.get(`streaks`).pipe(DS(this.destroyRef)).subscribe(e=>this.config.set(e.config)),je(0,500).pipe(DS(this.destroyRef)).subscribe(()=>this.tick.set(Date.now())),xi(()=>{let e=this.latest();if(!e)return;let t=`${e.userId}:${e.streakCount}`,n=this.config().streakMin??2,r=this.config().streakEvery??5;t!==this.lastKey&&(e.streakCount<n||r>1&&e.streakCount%r!==0||(this.lastKey=t,this.active.set(e),this.shownUntil.set(Date.now()+(this.config().durationSeconds??10)*1e3)))})}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-streaks-overlay`]],decls:1,vars:1,consts:[[1,`overlay-stage`],[1,`streak-card`],[1,`streak-icon`],[1,`streak-copy`],[1,`streak-name`],[1,`streak-count`],[1,`streak-badge`],[1,`streak-points`]],template:function(t,n){if(t&1&&Fw(0,Ey,12,6,`div`,0),t&2){let r;Pw((r=n.visible())?0:-1,r)}},styles:[`[_nghost-%COMP%]{display:block;padding:16px;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.overlay-stage[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}.streak-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px 16px;border:1px solid rgba(255,255,255,.12);border-radius:16px;background:#121218e6;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);animation:_ngcontent-%COMP%_streak-in .35s ease-out}.streak-icon[_ngcontent-%COMP%]{font-size:28px}.streak-copy[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px}.streak-name[_ngcontent-%COMP%]{font:700 16px/22px var(--%NS%font-ui)}.streak-count[_ngcontent-%COMP%]{color:var(--%NS%text-secondary);font:500 12px/16px var(--%NS%font-ui)}.streak-badge[_ngcontent-%COMP%]{align-self:flex-start;margin-top:3px;padding:1px 8px;border-radius:999px;background:var(--%NS%pale-warning);color:var(--%NS%tui-text-warning);font:700 10px/16px var(--%NS%font-ui);letter-spacing:.08em;text-transform:uppercase}.streak-points[_ngcontent-%COMP%]{color:var(--%NS%status-positive);font:700 15px/20px var(--%NS%font-ui)}.streak-milestone[_ngcontent-%COMP%]{border-color:var(--%NS%accent-primary);box-shadow:0 0 28px color-mix(in srgb,var(--%NS%accent-primary) 25%,transparent)}@keyframes _ngcontent-%COMP%_streak-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}`]})};function Ty(i,e){if(i&1&&(Xu$1(0,`span`,5),Ab(1),el$1()),i&2){let t=Jw();Xg$1(`color`,t.textColor()),kI(),cm(t.label())}}function Cy(i,e){if(i&1&&(Xu$1(0,`span`,4),Fg$1(1,`span`,6),el$1()),i&2){let t=Jw();kI(),Xg$1(`width`,t.progress(),`%`)(`background`,t.progressColor())}}var rl=class i{http=I(ke$1);widgetConfig=I(h);now=cn(Date.now());syncedAt=cn(Date.now());lastBase=``;state=_2(je(0,1e3).pipe(ql$1(()=>this.http.get(`rgg-sync/`).pipe(ea$1(()=>vy$1(null))))),{initialValue:null});config=il$1(()=>this.widgetConfig.configs().timer??{});running=il$1(()=>this.state()?.timerState?.mode!==`pause`);countdown=il$1(()=>(this.config().timerMode??`countdown`)===`countdown`);duration=il$1(()=>this.config().timerDurationSeconds??754);countFrom=il$1(()=>this.config().timerCountFromSeconds??0);countTo=il$1(()=>this.config().timerCountToSeconds??null);size=il$1(()=>this.config().timerSize??`large`);label=il$1(()=>this.config().timerLabel??(this.countdown()?`До старта события`:`Прошло времени`));showLabel=il$1(()=>this.config().timerShowLabel!==!1);showProgress=il$1(()=>this.config().timerShowProgress??this.countdown());progressColor=il$1(()=>this.config().timerProgressColor??`#22e0ff`);fontFamily=il$1(()=>this.config().timerFontUrl?`NSH Custom Timer Font`:this.config().timerFontFamily??`JetBrains Mono`);textColor=il$1(()=>this.config().textColor??`#F5EAFF`);alignItems=il$1(()=>this.config().timerAlign===`right`?`flex-end`:this.config().timerAlign===`center`?`center`:`flex-start`);justifyItems=il$1(()=>this.config().timerAlign===`right`?`flex-end`:this.config().timerAlign===`center`?`center`:`flex-start`);verticalItems=il$1(()=>this.config().timerVerticalAlign===`top`?`flex-start`:this.config().timerVerticalAlign===`bottom`?`flex-end`:`center`);textAlign=il$1(()=>this.config().timerAlign??`left`);elapsed=il$1(()=>{let e=this.state()?.timerState?.time,t=this.running()?Math.max(0,Math.floor((this.now()-this.syncedAt())/1e3)):0;return(e?.hours??0)*3600+(e?.minutes??0)*60+(e?.seconds??0)+t});time=il$1(()=>{let e=this.countdown()?Math.max(0,this.duration()-this.elapsed()):Math.min(this.countFrom()+this.elapsed(),this.countTo()??1/0);return`${String(Math.floor(e/3600)).padStart(2,`0`)}:${String(Math.floor(e%3600/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`});progress=il$1(()=>{if(!this.countdown()){let n=this.countFrom(),r=this.countTo();if(r===null||r<=n)return 0;let s=Math.min(n+this.elapsed(),r);return Math.max(0,Math.min(100,(s-n)/(r-n)*100))}let e=this.duration();if(e<=0)return 0;let t=Math.max(0,e-this.elapsed());return Math.max(0,Math.min(100,t/e*100))});constructor(){je(0,500).subscribe(()=>this.now.set(Date.now())),je(0,1e3).pipe(ql$1(()=>this.widgetConfig.get(`timer`).pipe(ea$1(()=>vy$1(null)))),DS()).subscribe(),xi(()=>{let e=this.config().timerFontUrl,t=`nsh-timer-overlay-font`,n=document.getElementById(t);if(!e)n?.remove();else{let r=n??document.createElement(`style`);r.id=t,r.textContent=`@font-face{font-family:'NSH Custom Timer Font';src:url('${e}');font-display:swap;}`,n||document.head.append(r)}}),xi(()=>{let e=this.state(),t=e?.timerState?.time,n=`${e?.timerState?.mode}|${t?.hours}|${t?.minutes}|${t?.seconds}`;n!==this.lastBase&&(this.lastBase=n,this.syncedAt.set(Date.now()))})}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-timer-overlay`]],decls:6,vars:27,consts:[[1,`overlay-stage`],[1,`timer-card`],[1,`timer-label`,3,`color`],[1,`timer-value`],[1,`timer-progress`],[1,`timer-label`],[1,`timer-progress-fill`]],template:function(t,n){t&1&&(Xu$1(0,`div`,0)(1,`article`,1),Fw(2,Ty,2,3,`span`,2),Xu$1(3,`strong`,3),Ab(4),el$1(),Fw(5,Cy,2,4,`span`,4),el$1()()),t&2&&(Xg$1(`align-items`,n.verticalItems())(`justify-content`,n.justifyItems()),kI(),Xg$1(`align-items`,n.alignItems())(`text-align`,n.textAlign()),em(`timer-card-running`,n.running())(`timer-card-countdown`,n.countdown())(`timer-card-countup`,!n.countdown())(`timer-large`,n.size()===`large`)(`timer-medium`,n.size()===`medium`)(`timer-small`,n.size()===`small`),kI(),Pw(n.showLabel()?2:-1),kI(),Xg$1(`font-family`,n.fontFamily())(`color`,n.textColor()),kI(),cm(n.time()),kI(),Pw(n.showProgress()?5:-1))},styles:[`[_nghost-%COMP%]{display:block;padding:16px;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.overlay-stage[_ngcontent-%COMP%]{display:flex;min-height:100vh}.timer-card[_ngcontent-%COMP%]{display:flex;gap:var(--%NS%space-xs);flex-direction:column;align-items:flex-start;width:100%;max-width:340px}.timer-label[_ngcontent-%COMP%]{color:var(--%NS%text-secondary);font:600 11px/14px var(--%NS%font-ui);letter-spacing:.08em;text-transform:uppercase}.timer-value[_ngcontent-%COMP%]{font:700 64px/68px var(--%NS%tui-font-text-mono);letter-spacing:.01em;font-variant-numeric:tabular-nums}.timer-medium[_ngcontent-%COMP%]   .timer-value[_ngcontent-%COMP%]{font-size:48px;line-height:52px}.timer-small[_ngcontent-%COMP%]   .timer-value[_ngcontent-%COMP%]{font-size:28px;line-height:32px}.timer-progress[_ngcontent-%COMP%]{width:100%;height:4px;overflow:hidden;border-radius:999px;background:#ffffff1a}.timer-progress-fill[_ngcontent-%COMP%]{display:block;height:100%;transition:width .3s linear;border-radius:inherit;background:#22e0ff}@media(width<=560px){.timer-value[_ngcontent-%COMP%]{font-size:48px;line-height:52px}}`]})};var _d=(i,e)=>e.userId;var Ay=(i,e)=>e.id;function Ry(i,e){if(i&1&&(Xu$1(0,`span`,6),Ab(1),el$1()),i&2){let t=e.$implicit;kI(),um(``,t.label,` · `,t.bet)}}function Py(i,e){i&1&&(Xu$1(0,`span`,7),Ab(1,`Ждём участников в чате…`),el$1())}function Iy(i,e){if(i&1&&(Xu$1(0,`span`,4),Ab(1),el$1(),Xu$1(2,`div`,5),Bw(3,Ry,2,2,`span`,6,_d,!1,Py,2,0,`span`,7),el$1(),Xu$1(6,`div`,8),Ab(7),el$1(),Xu$1(8,`span`,7),Ab(9),el$1()),i&2){let t=Jw(2);kI(),um(`Банк: `,t.pot(),` · участников: `,t.participants().length),kI(2),Hw(t.participantsView()),kI(4),cm(t.countdown()),kI(2),nl$1(`Вход: !wheel `,t.title(),` <ставка>`)}}function Ny(i,e){if(i&1&&(Xu$1(0,`span`,17),Ab(1),el$1()),i&2){let t=e.$implicit,n=Jw(4);Xg$1(`left`,t.left,`%`)(`top`,t.top,`%`)(`color`,n.appearance().labelColor)(`font-size`,n.appearance().labelSize,`px`)(`font-family`,n.fontFamilyCss())(`-webkit-text-stroke`,n.appearance().labelStrokeWidth+`px `+n.appearance().labelStrokeColor),kI(),cm(t.label)}}function Dy(i,e){if(i&1&&Bw(0,Ny,2,13,`span`,16,Ay),i&2){let t=Jw(3);Hw(t.wheelLabels())}}function Ly(i,e){if(i&1&&(Xu$1(0,`span`,6),Ab(1),el$1()),i&2){let t=Jw(),n=t.$implicit,r=t.$index,s=Jw(3);em(`eliminated`,r<s.order().length-1),kI(),nl$1(` `,n.label,` `)}}function Oy(i,e){if(i&1&&Fw(0,Ly,2,3,`span`,18),i&2){let t=e.$index,n=Jw(3);Pw(t<n.revealed()?0:-1)}}function Uy(i,e){if(i&1&&(Xu$1(0,`div`,14)(1,`span`,19),Ab(2,`ВЫБЫЛ`),el$1(),Xu$1(3,`strong`),Ab(4),el$1()()),i&2){let t=Jw(3);kI(4),cm(t.recentEliminated()?.lot||t.recentEliminated()?.displayName||t.eliminatedView()[t.eliminatedView().length-1]?.label)}}function Fy(i,e){if(i&1&&Fg$1(0,`span`),i&2){let t=e.$implicit;Xg$1(`left`,t.left,`%`)(`background`,t.color)(`width`,t.size,`px`)(`height`,t.size,`px`)(`animation-delay`,t.delay,`s`)(`animation-duration`,t.duration,`s`)}}function By(i,e){if(i&1&&(Xu$1(0,`span`,28),Ab(1),el$1()),i&2){let t=Jw();kI(),cm(t.lot)}}function ky(i,e){if(i&1&&(Xu$1(0,`span`,29),Ab(1),el$1()),i&2){let t=Jw(4);kI(),nl$1(`🍀 ×`,t.luckMultiplier())}}function zy(i,e){if(i&1&&(Xu$1(0,`div`,20)(1,`strong`,21),Ab(2),el$1()(),Xu$1(3,`div`,22)(4,`div`,23),Bw(5,Fy,1,12,`span`,24,jw),el$1(),Xu$1(7,`span`,25),Ab(8,`🏆`),el$1(),Xu$1(9,`span`,26),Ab(10,`ПОБЕДИТЕЛЬ`),el$1(),Xu$1(11,`strong`,27),Ab(12),el$1(),Fw(13,By,2,1,`span`,28),Fw(14,ky,2,1,`span`,29),el$1()),i&2){let t=e,n=Jw(3);kI(2),nl$1(`🏆 `,t.label),kI(3),Hw(n.winnerParticles),kI(7),cm(t.label),kI(),Pw(t.lot&&n.labelMode()===`viewer`?13:-1),kI(),Pw(n.luckMultiplier()>1?14:-1)}}function Vy(i,e){if(i&1&&(Xu$1(0,`span`,15),Ab(1),el$1()),i&2){let t=Jw(3);kI(),cm(t.spinPending()?`Приготовьтесь…`:`Колесо крутится…`)}}function Gy(i,e){if(i&1&&(Xu$1(0,`div`,9),Fg$1(1,`span`,10),Xu$1(2,`div`,11),Fw(3,Dy,2,0),Xu$1(4,`span`,12),Ab(5),el$1()()(),Xu$1(6,`div`,13),Bw(7,Oy,1,1,null,null,_d),el$1(),Fw(9,Uy,5,1,`div`,14),Fw(10,zy,15,4)(11,Vy,2,1,`span`,15)),i&2){let t,n=Jw(2);Xg$1(`width`,n.appearance().size,`px`)(`height`,n.appearance().size,`px`),kI(),Xg$1(`border-top-color`,n.appearance().pointerColor),kI(),Xg$1(`background`,n.wheelGradient())(`border-color`,n.appearance().borderColor)(`border-width`,n.appearance().borderWidth,`px`)(`box-shadow`,`0 0 `+n.appearance().glowSize+`px `+n.appearance().glowColor)(`transform`,`rotate(`+n.wheelAngle()+`deg)`),kI(),Pw(n.appearance().showLabels?3:-1),kI(),Xg$1(`background`,n.appearance().centerColor)(`color`,n.appearance().centerTextColor)(`font-family`,n.fontFamilyCss()),kI(),cm(n.appearance().centerText||`NS`),kI(2),Hw(n.orderView()),kI(2),Pw(n.isElimination()&&!n.spinPending()&&(n.isSpinning()&&n.eliminatedView().length||n.recentEliminated())?9:-1),kI(),Pw((t=n.winnerView())?10:11,t)}}function Hy(i,e){if(i&1&&(Xu$1(0,`h2`,3),Ab(1),el$1(),Fw(2,Iy,10,5)(3,Gy,12,26)),i&2){let t=Jw();kI(),cm(t.title()),kI(),Pw(e.state===`collecting`?2:3)}}function Wy(i,e){if(i&1&&(Xu$1(0,`h2`,3),Ab(1),el$1(),Xu$1(2,`div`,9),Fg$1(3,`span`,10),Xu$1(4,`div`,11)(5,`span`,12),Ab(6,`NS`),el$1()()(),Xu$1(7,`div`,20)(8,`strong`,21),Ab(9),el$1(),Xu$1(10,`span`,30),Ab(11),el$1()()),i&2){let t=Jw();kI(),cm(t.lastLabel()),kI(3),Xg$1(`background`,t.wheelGradient())(`transform`,`rotate(`+t.wheelAngle()+`deg)`),kI(5),cm(t.lastUser()),kI(2),nl$1(`×`,t.lastMultiplier())}}var Xy={size:380,background:`#0F0817`,borderColor:`#3A3448`,borderWidth:6,glowColor:`#FF2EA6`,glowSize:24,pointerColor:`#FF2EA6`,centerColor:`#0F0817`,centerText:`NS`,centerTextColor:`#FF2EA6`,labelColor:`#FFFFFF`,labelSize:11,labelStrokeColor:`#0F0817`,labelStrokeWidth:2,showLabels:!0,showChances:!0,fontFamily:``,fontUrl:``};var sl=class i{games=I(h$2);media=I(s);destroyRef=I(re);now=cn(Date.now());winnerParticles=Array.from({length:24},(e,t)=>({left:t*41%100,delay:t%8*.09,duration:1.3+t%5*.2,size:3+t%3*2,color:[`#FFD166`,`#FF5AA9`,`#7C5CFF`,`#22E0FF`,`#2EE6A8`][t%5]}));lastSoundKey=``;wheelAudio=null;state=_2(je(0,1e3).pipe(ql$1(()=>this.games.wheelState().pipe(ea$1(()=>vy$1(null))))),{initialValue:null});round=il$1(()=>this.state()?.round??null);segments=il$1(()=>this.state()?.settings?.wheelSegments??[]);last=il$1(()=>this.state()?.last??null);roundState=il$1(()=>this.round()?.state??`idle`);title=il$1(()=>this.round()?.title??this.last()?.title??`Колесо`);pot=il$1(()=>this.round()?.pot??0);participants=il$1(()=>this.round()?.participants??[]);order=il$1(()=>this.round()?.order??[]);countdown=il$1(()=>{let e=this.round();if(!e||e.state!==`collecting`)return``;let t=Math.max(0,new Date(e.deadline).getTime()-this.now());return`${Math.floor(t/6e4)}:${String(Math.floor(t%6e4/1e3)).padStart(2,`0`)}`});revealed=il$1(()=>{let e=this.round();if(!e||e.state===`collecting`||this.spinPending())return 0;if(e.state===`finished`)return this.order().length;let t=e.spinAt?new Date(e.spinAt).getTime():this.now(),n=Math.max(0,this.now()-t);return Math.min(this.order().length,Math.max(1,Math.floor(n/2e3)+1))});eliminated=il$1(()=>{let e=this.order(),t=this.revealed();return e.slice(0,Math.max(0,t-1))});winner=il$1(()=>{let e=this.round();return e?e.winner?e.winner:e.state===`finished`&&this.order().length?this.order()[this.order().length-1]:null:null});labelMode=il$1(()=>this.state()?.settings?.wheelLabelMode===`viewer`?`viewer`:`lot`);participantsView=il$1(()=>this.participants().map(e=>m(l({},e),{label:this.participantLabel(e)})));orderView=il$1(()=>this.order().map(e=>m(l({},e),{label:this.participantLabel(e)})));spinPending=il$1(()=>{let e=this.round();return!e||e.state!==`spinning`||!e.spinAt?!1:this.now()<new Date(e.spinAt).getTime()});isSpinning=il$1(()=>{let e=this.round();return!e||e.state!==`spinning`||this.spinPending()?!1:e.spinEndsAt?this.now()<new Date(e.spinEndsAt).getTime():!0});recentEliminated=il$1(()=>{let e=this.round(),t=e?.lastEliminated;return!t||!e.eliminatedAt?null:this.now()-new Date(e.eliminatedAt).getTime()<5e3?t:null});eliminatedView=il$1(()=>{let e=this.orderView(),t=this.revealed();return e.slice(0,Math.max(0,t-1))});winnerView=il$1(()=>{let e=this.winner();return e?m(l({},e),{label:this.participantLabel(e)}):null});participantLabel(e){return this.labelMode()===`viewer`?e.displayName:e.lot||this.title()}isElimination=il$1(()=>this.round()?.mode===`elimination`);sectors=il$1(()=>{let e=this.participants(),t=this.segments(),n=[`#FF2EA6`,`#22E0FF`,`#FFE14D`,`#7C5CFF`,`#2EE6A8`,`#FF8A3D`],r=e.map((l,h)=>({id:l.userId,label:this.participantLabel(l),color:l.luck&&!l.boostUsed?`#FFD166`:n[h%n.length],chance:l.chance??100/e.length})),s=t.map(l=>({id:l.id,label:l.label,color:l.color||`#FF2EA6`,chance:l.weight||1})),a=e.length?r:s,o=a.reduce((l,h)=>l+h.chance,0)||1,c=0;return a.map(l$1=>{let h=l$1.chance/o*360,f=c,u=f+h,m$1=f+h/2;return c=u,m(l({},l$1),{start:f,end:u,mid:m$1})})});wheelGradient=il$1(()=>{let e=this.sectors();return e.length?`conic-gradient(${e.map(t=>`${t.color} ${t.start}deg ${t.end}deg`).join(`, `)})`:[`conic-gradient(`,`#ff2ea6 0 72deg, #22e0ff 72deg 144deg, #ffe14d 144deg 216deg,`,`#7c5cff 216deg 288deg, #2ee6a8 288deg 360deg)`].join(` `)});wheelAngle=cn(0);lastRotationKey=``;targetRotation=il$1(()=>{let e=this.round();if(e){if(e.mode===`elimination`){let s=e.state===`spinning`?e.order?.[0]:e.lastEliminated??e.winner,a=s?this.sectors().find(o=>o.id===s.userId):void 0;return a?-a.mid:0}let r=e.winner??(e.state===`spinning`?e.order?.[e.order.length-1]:void 0);if(r){let s=this.sectors().find(a=>a.id===r.userId);if(s)return-s.mid}}let t=this.last(),n=t?this.sectors().find(r=>r.label===t.label):void 0;return n?-n.mid:0});lastLabel=il$1(()=>this.last()?.label??`Крутите колесо`);lastMultiplier=il$1(()=>this.last()?.multiplier??0);lastWin=il$1(()=>this.last()?.win??0);luckMultiplier=il$1(()=>this.last()?.luckMultiplier??0);lastUser=il$1(()=>this.last()?.user??``);centerUrl=il$1(()=>this.state()?.settings?.wheelCenterUrl??``);fontFamilyCss=il$1(()=>{let e=this.appearance();return e.fontFamily.trim()?e.fontFamily.trim():e.fontUrl.trim()?`NSH Custom Wheel Font`:null});appearance=il$1(()=>l(l({},Xy),this.state()?.settings?.wheelAppearance??{}));wheelLabels=il$1(()=>this.sectors().map(e=>{let t=(e.mid-90)*(Math.PI/180);return{id:e.id,label:e.label,left:50+34*Math.cos(t),top:50+34*Math.sin(t)}}));constructor(){xi(()=>{let e=this.appearance(),t=`nsh-wheel-font-face`,n=document.getElementById(t);if(!e.fontUrl.trim()){n?.remove();return}let r=n??document.createElement(`style`);r.id=t,r.textContent=`@font-face{font-family:'NSH Custom Wheel Font';src:url('${e.fontUrl.replace(/'/g,``)}');font-display:swap;}`,n||document.head.append(r)}),xi(()=>{let e=this.round(),t=this.targetRotation(),n=this.isSpinning(),r=e?.state===`finished`;if(!e||!n&&!r)return;let s=[e.id,e.state,e.winner?.userId??``,e.order?.[0]?.userId??``,e.lastEliminated?.userId??``].join(`:`);if(s===this.lastRotationKey)return;this.lastRotationKey=s;let a=this.wheelAngle(),o=((t-a)%360+360)%360,c=n?4:0;this.wheelAngle.set(a+c*360+o)}),xi(()=>{let t=this.state()?.settings?.wheelSoundUrl??``;if(!t){this.stopSound();return}if(this.isSpinning()){let n=`${this.round()?.id??``}:spin`;n!==this.lastSoundKey&&(this.lastSoundKey=n,this.playSound(t));return}this.lastSoundKey=``,this.stopSound()}),je(0,500).pipe(DS(this.destroyRef)).subscribe(()=>this.now.set(Date.now()))}playSound(e){this.stopSound();let t=new Audio(this.media.playUrl(e));t.volume=.7,this.wheelAudio=t,t.play().catch(()=>{})}stopSound(){this.wheelAudio&&(this.wheelAudio.pause(),this.wheelAudio.currentTime=0,this.wheelAudio=null)}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-wheel-overlay`]],decls:6,vars:2,consts:[[1,`overlay-stage`],[1,`wheel-card`],[1,`wheel-kicker`],[1,`wheel-title`],[1,`wheel-pot`],[1,`wheel-participants`],[1,`participant-chip`],[1,`jk-caption`],[1,`wheel-countdown`],[1,`wheel-wrap`],[1,`wheel-pointer`],[1,`wheel`],[1,`wheel-center`],[1,`wheel-live-list`],[1,`eliminated-popup`],[1,`wheel-status`],[1,`wheel-name`,3,`left`,`top`,`color`,`font-size`,`font-family`,`-webkit-text-stroke`],[1,`wheel-name`],[1,`participant-chip`,3,`eliminated`],[1,`eliminated-kicker`],[1,`wheel-result`],[1,`wheel-label`],[1,`result-popup`],[`aria-hidden`,`true`,1,`winner-particles`],[3,`left`,`background`,`width`,`height`,`animation-delay`,`animation-duration`],[1,`result-crown`],[1,`result-kicker`],[1,`result-name`],[1,`result-lot`],[1,`result-luck`],[1,`wheel-win`]],template:function(t,n){if(t&1&&(Xu$1(0,`div`,0)(1,`article`,1)(2,`span`,2),Ab(3),el$1(),Fw(4,Hy,4,2)(5,Wy,12,7),el$1()()),t&2){let r;kI(3),nl$1(` `,n.isElimination()?`КОЛЕСО НА ВЫБЫВАНИЕ`:`КОЛЕСО БАЛЛОВ`,` `),kI(),Pw((r=n.round())?4:5,r)}},styles:[`[_nghost-%COMP%]{display:block;padding:16px;color:var(--%NS%text-primary);font-family:var(--%NS%font-ui)}.overlay-stage[_ngcontent-%COMP%]{display:flex;justify-content:center}.wheel-card[_ngcontent-%COMP%]{position:relative;display:flex;gap:12px;flex-direction:column;align-items:center;width:min(480px,100%);padding:20px 24px;border:1px solid rgba(255,255,255,.12);border-radius:20px;background:#121218eb;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);box-shadow:0 18px 50px #00000073}.wheel-kicker[_ngcontent-%COMP%]{color:var(--%NS%accent-primary);font:700 11px/16px var(--%NS%font-ui);letter-spacing:.18em}.wheel-title[_ngcontent-%COMP%]{margin:0;font:700 22px/28px var(--%NS%font-ui);text-align:center}.wheel-pot[_ngcontent-%COMP%], .wheel-status[_ngcontent-%COMP%], .wheel-countdown[_ngcontent-%COMP%]{color:var(--%NS%text-secondary);font:600 14px/20px var(--%NS%font-ui)}.wheel-countdown[_ngcontent-%COMP%]{color:var(--%NS%accent-primary);font:700 32px/40px var(--%NS%font-ui);font-variant-numeric:tabular-nums}.wheel-participants[_ngcontent-%COMP%], .wheel-live-list[_ngcontent-%COMP%]{display:flex;gap:6px;flex-wrap:wrap;justify-content:center}.participant-chip[_ngcontent-%COMP%]{padding:4px 10px;border-radius:999px;background:#ffffff14;font:600 12px/18px var(--%NS%font-ui);transition:opacity .3s,text-decoration-color .3s}.participant-chip.eliminated[_ngcontent-%COMP%]{text-decoration:line-through;opacity:.35}.wheel-wrap[_ngcontent-%COMP%]{position:relative;width:220px;height:220px}.wheel-pointer[_ngcontent-%COMP%]{position:absolute;top:-4px;left:50%;z-index:2;width:0;height:0;border-right:8px solid transparent;border-bottom:14px solid var(--%NS%accent-primary);border-left:8px solid transparent;transform:translate(-50%)}.wheel[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;border:4px solid var(--%NS%accent-primary);border-radius:50%;transition:transform 4s cubic-bezier(.12,.8,.2,1)}.wheel-center[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background:var(--%NS%ink-950);color:var(--%NS%accent-primary);font:800 18px/1 var(--%NS%font-ui);transform:translate(-50%,-50%);inset:50% auto auto 50%}.wheel-result[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column;align-items:center}.wheel-label[_ngcontent-%COMP%]{font:700 20px/26px var(--%NS%font-ui)}.wheel-win[_ngcontent-%COMP%]{color:var(--%NS%status-positive);font:700 16px/22px var(--%NS%font-ui)}@keyframes _ngcontent-%COMP%_wheel-spin{to{transform:rotate(360deg)}}@media(width<=560px){.wheel-wrap[_ngcontent-%COMP%]{width:160px;height:160px}.wheel-center[_ngcontent-%COMP%]{width:44px;height:44px}}.wheel-luck[_ngcontent-%COMP%]{color:var(--%NS%status-warning);font:700 15px/20px var(--%NS%font-ui)}.wheel-name[_ngcontent-%COMP%]{position:absolute;z-index:1;max-width:72px;color:#fff;font:700 10px/12px var(--%NS%font-ui);text-align:center;text-shadow:0 1px 4px rgba(0,0,0,.65);transform:translate(-50%,-50%);pointer-events:none}.wheel-center-image[_ngcontent-%COMP%]{overflow:hidden}.wheel-center-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:50%}.wheel-idle[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_wheel-idle 60s linear infinite}@keyframes _ngcontent-%COMP%_wheel-idle{to{transform:rotate(360deg)}}.result-popup[_ngcontent-%COMP%], .eliminated-popup[_ngcontent-%COMP%]{position:absolute;z-index:10;display:flex;flex-direction:column;align-items:center;gap:2px;padding:12px 20px;border:1px solid rgba(255,255,255,.18);border-radius:18px;background:#1212188c;box-shadow:0 18px 50px #0000008c,inset 0 1px #ffffff14;text-align:center;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);animation:_ngcontent-%COMP%_popup-in .35s ease-out}.result-popup[_ngcontent-%COMP%]{inset-block-start:-12px;min-width:210px;border-color:#ffd1668c;background:radial-gradient(circle at 50% 0%,rgba(255,209,102,.22),transparent 65%),#18120ae6;box-shadow:0 0 0 1px #ffd1661f,0 0 45px #ffa60047,0 18px 50px #0000008c;overflow:hidden}.result-crown[_ngcontent-%COMP%]{font-size:26px;line-height:28px;filter:drop-shadow(0 0 12px rgba(255,209,102,.6))}.result-lot[_ngcontent-%COMP%]{color:#fff9;font:600 12px/16px var(--%NS%font-ui)}.result-popup[_ngcontent-%COMP%]   .result-name[_ngcontent-%COMP%]{color:#fff;font:900 30px/34px var(--%NS%font-ui);text-shadow:0 0 22px rgba(255,209,102,.35)}.result-popup[_ngcontent-%COMP%]   .result-kicker[_ngcontent-%COMP%]{color:#ffd166}.eliminated-popup[_ngcontent-%COMP%]{inset-block-end:8px;padding:8px 16px}.result-kicker[_ngcontent-%COMP%], .eliminated-kicker[_ngcontent-%COMP%]{color:var(--%NS%accent-primary);font:700 10px/14px var(--%NS%font-ui);letter-spacing:.16em}.eliminated-kicker[_ngcontent-%COMP%]{color:var(--%NS%status-negative)}.result-name[_ngcontent-%COMP%]{font:800 22px/28px var(--%NS%font-ui)}.result-prize[_ngcontent-%COMP%]{color:var(--%NS%status-positive);font:700 16px/20px var(--%NS%font-ui)}.result-luck[_ngcontent-%COMP%]{color:var(--%NS%status-warning);font:700 14px/18px var(--%NS%font-ui)}@keyframes _ngcontent-%COMP%_popup-in{0%{opacity:0;transform:translateY(-8px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}.winner-particles[_ngcontent-%COMP%]{position:absolute;inset:0;overflow:hidden;pointer-events:none}.winner-particles[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:-12px;border-radius:2px;opacity:0;animation-name:_ngcontent-%COMP%_winner-particle-fall;animation-timing-function:linear;animation-iteration-count:infinite}@keyframes _ngcontent-%COMP%_winner-particle-fall{0%{opacity:0;transform:translateY(-10px) rotate(0)}12%{opacity:1}to{opacity:0;transform:translateY(230px) rotate(540deg)}}.wheel-wrap[_ngcontent-%COMP%]{perspective:900px;transform:rotateX(7deg);transform-style:preserve-3d}`]})};function qy(i,e){i&1&&kg$1(0,`app-jury-overlay`)}function Yy(i,e){i&1&&kg$1(0,`app-timer-overlay`)}function $y(i,e){i&1&&kg$1(0,`app-alerts-overlay`)}function Zy(i,e){i&1&&kg$1(0,`app-donations-overlay`)}function Jy(i,e){i&1&&kg$1(0,`app-events-overlay`)}function Ky(i,e){i&1&&kg$1(0,`app-hotbar-overlay`)}function jy(i,e){i&1&&kg$1(0,`app-audio-overlay`)}function Qy(i,e){i&1&&kg$1(0,`app-chat-overlay`)}function ex(i,e){i&1&&kg$1(0,`app-points-overlay`)}function tx(i,e){i&1&&kg$1(0,`app-quotes-overlay`)}function nx(i,e){i&1&&kg$1(0,`app-music-overlay`)}function ix(i,e){i&1&&kg$1(0,`app-nowplaying-overlay`)}function rx(i,e){i&1&&kg$1(0,`app-streaks-overlay`)}function sx(i,e){i&1&&kg$1(0,`app-roulette-overlay`)}function ax(i,e){i&1&&kg$1(0,`app-dice-overlay`)}function ox(i,e){i&1&&kg$1(0,`app-game-overlay`,1)}function lx(i,e){i&1&&kg$1(0,`app-game-overlay`,1)}function cx(i,e){i&1&&kg$1(0,`app-game-overlay`,2)}function ux(i,e){i&1&&kg$1(0,`app-wheel-overlay`)}function hx(i,e){if(i&1&&(ds$1(0,`div`,3),Ab(1),Ju$1()),i&2){let t=Jw();kI(),nl$1(`Неизвестный виджет: `,t.kind())}}var Oc=class i{document=I(et);route=I(W$1);widgetConfig=I(h);http=I(ke$1);kind=_2(this.route.paramMap.pipe(_e(e=>e.get(`kind`)??`jury`)),{initialValue:`jury`});config=_2(S2(this.kind).pipe(ql$1(e=>this.widgetConfig.get(e).pipe(_e(t=>t.config),ea$1(()=>vy$1({}))))),{initialValue:{}});globalSettings=_2(je(0,5e3).pipe(ql$1(()=>this.http.get(`rgg-sync/app-settings`,{params:{t:Date.now()}}).pipe(ea$1(()=>vy$1({}))))),{initialValue:{}});surfaceStyle=il$1(()=>{let e=this.config();return{"--widget-bg":e.transparent===!1?e.backgroundColor??`rgb(18, 18, 24, 0.92)`:`transparent`,"--widget-text":e.textColor??`#f5eaff`,"--widget-accent":this.globalSettings().accent??e.accentColor??`#ff2ea6`,"--accent-primary":this.globalSettings().accent??e.accentColor??`#ff2ea6`,"--widget-scale":String(e.scale??1)}});constructor(){this.document.body.classList.add(`overlay-mode`),this.document.documentElement.classList.add(`overlay-mode`)}ngOnDestroy(){this.document.body.classList.remove(`overlay-mode`),this.document.documentElement.classList.remove(`overlay-mode`)}static ɵfac=function(t){return new(t||i)};static ɵcmp=cw({type:i,selectors:[[`app-overlay-host`]],decls:21,vars:3,consts:[[1,`widget-surface`],[`mode`,`coin`],[`mode`,`random`],[1,`overlay-unknown`]],template:function(t,n){if(t&1&&(ds$1(0,`div`,0),Fw(1,qy,1,0,`app-jury-overlay`)(2,Yy,1,0,`app-timer-overlay`)(3,$y,1,0,`app-alerts-overlay`)(4,Zy,1,0,`app-donations-overlay`)(5,Jy,1,0,`app-events-overlay`)(6,Ky,1,0,`app-hotbar-overlay`)(7,jy,1,0,`app-audio-overlay`)(8,Qy,1,0,`app-chat-overlay`)(9,ex,1,0,`app-points-overlay`)(10,tx,1,0,`app-quotes-overlay`)(11,nx,1,0,`app-music-overlay`)(12,ix,1,0,`app-nowplaying-overlay`)(13,rx,1,0,`app-streaks-overlay`)(14,sx,1,0,`app-roulette-overlay`)(15,ax,1,0,`app-dice-overlay`)(16,ox,1,0,`app-game-overlay`,1)(17,lx,1,0,`app-game-overlay`,1)(18,cx,1,0,`app-game-overlay`,2)(19,ux,1,0,`app-wheel-overlay`)(20,hx,2,1,`div`,3),Ju$1()),t&2){let r;Db(n.surfaceStyle()),kI(),Pw((r=n.kind())===`jury`?1:r===`timer`?2:r===`alerts`?3:r===`donations`?4:r===`events`?5:r===`hotbar`?6:r===`audio`?7:r===`chat`?8:r===`points`?9:r===`quotes`?10:r===`music`?11:r===`nowplaying`?12:r===`streaks`?13:r===`roulette`?14:r===`dice`?15:r===`coinflip`?16:r===`coin`?17:r===`random`?18:r===`wheel`?19:20)}},dependencies:[Os,Us,Fs,Ho,Yo,$o,Zo,Jo,Ko,jo,Qo,el,tl,nl,il,rl,sl],styles:[`[_nghost-%COMP%]{display:block;min-height:100vh;background:transparent}.overlay-unknown[_ngcontent-%COMP%]{padding:24px;border-radius:16px;background:var(--%NS%surface-elevated-1);color:var(--%NS%text-primary);font:var(--%NS%font-body)}`]})};export{Oc as default};