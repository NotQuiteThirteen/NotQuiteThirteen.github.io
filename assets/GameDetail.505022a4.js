import{d as f,r as v,m as b,c as a,u as n,a as s,F as i,j as d,t as l,b as _,k as p,n as k,o,e as y,p as D,g as N,_ as S}from"./index.c6721116.js";import{B}from"./BadgeComponent.6728c1f1.js";const c=r=>(D("data-v-d1a5b937"),r=r(),N(),r),G={class:"page"},x={key:0,class:"game-wrapper"},I={class:"info-wrapper"},w={class:"info-item info-image"},O={class:"container"},V={class:"carousel"},C=["id"],F={class:"carousel-slides"},T=["src"],A={class:"carousel-thumbnails"},E=["for"],L=["src"],R={class:"info-item metadata"},j={class:"g-title"},J={class:"g-dev"},M=c(()=>s("div",{class:"half-sep-space"},null,-1)),W=c(()=>s("div",{class:"separator"},[s("hr")],-1)),Y=c(()=>s("div",{class:"sep-space"},null,-1)),q=c(()=>s("span",{class:"bold g-subtitle"},"INFO",-1)),z={class:"g-date"},H=c(()=>s("span",{class:"bold"},"Release Date:",-1)),K={class:"g-platform"},P=c(()=>s("span",{class:"bold"},"Engine:",-1)),Q={class:"g-cen"},U=c(()=>s("span",{class:"bold"},"Censored:",-1)),X={class:"g-status"},Z=c(()=>s("span",{class:"bold"},"Status:",-1)),$=c(()=>s("div",{class:"half-sep-space"},null,-1)),ss={key:0},es=c(()=>s("span",{class:"bold g-subtitle"},"TAGS",-1)),ts={class:"g-tags"},as=c(()=>s("div",{class:"half-sep-space"},null,-1)),os=c(()=>s("span",{class:"bold g-subtitle"},"DOWNLOADS",-1)),ns={class:"downloads"},cs=["href"],ls={class:"bold"},is=c(()=>s("div",{class:"sep-space"},null,-1)),ds={class:"description info-item"},_s=f({__name:"GameDetail",setup(r){let t=v({});b(()=>{h(),m(),g()});const h=()=>{const u=k();t.value=JSON.parse(atob(u.params.gameData))},m=()=>{t.value.tags.sort()},g=()=>{t.value.bg};return(u,rs)=>(o(),a("main",G,[n(t)?(o(),a("div",x,[s("div",I,[s("div",w,[s("section",null,[s("div",O,[s("div",V,[(o(!0),a(i,null,d(n(t).images,e=>(o(),a("input",{type:"radio",name:"slides",key:e,id:e},null,8,C))),128)),s("ul",F,[(o(!0),a(i,null,d(n(t).images,e=>(o(),a("li",{class:"carousel-slide",key:e},[s("figure",null,[s("div",null,[s("img",{src:e,alt:""},null,8,T)])])]))),128))]),s("ul",A,[(o(!0),a(i,null,d(n(t).images,e=>(o(),a("li",{key:e},[s("label",{for:e},[s("img",{src:e,alt:""},null,8,L)],8,E)]))),128))])])])])]),s("div",R,[s("span",j,l(n(t).name),1),s("span",J,[_("by "),(o(!0),a(i,null,d(n(t).dev,e=>(o(),a("span",{key:e.name},l(e.name),1))),128))]),M,W,Y,q,s("span",z,[H,_(" "+l(n(t).date),1)]),s("span",K,[P,_(" "+l(n(t).engine),1)]),s("span",Q,[U,_(" "+l(n(t).censored?"Yes":"No"),1)]),s("span",X,[Z,_(" "+l(n(t).status),1)]),$,n(t).tags.length>0?(o(),a("div",ss,[es,s("section",ts,[(o(!0),a(i,null,d(n(t).tags,e=>(o(),a("div",{key:e,class:"tag"},[y(B,{content:e,class:"badge-bgc"},null,8,["content"])]))),128))])])):p("",!0),as,os,s("div",ns,[(o(!0),a(i,null,d(n(t).dl,e=>(o(),a("div",{key:e.name},[s("a",{href:e.src.url,target:"_blank",rel:"noopener norefferer"},[s("span",ls,l(e.name),1)],8,cs)]))),128))])])]),is,s("div",ds,l(n(t).description),1)])):p("",!0)]))}});const hs=S(_s,[["__scopeId","data-v-d1a5b937"]]);export{hs as default};