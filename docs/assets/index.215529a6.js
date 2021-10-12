const u=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};u();class c{constructor(e){this.data=e,this.next=null}}class a{constructor(e=null){this.head=e}size(){let e=0,o=this.head;for(;o;)e++,o=o.next;return e}clear(){this.head=null}getLast(){let e=this.head;if(e)for(;e.next;)e=e.next;return e}getFirst(){return this.head}getLastMinusOne(){let e=this.head,o=this.head;if(e)for(;e.next;)o=e,e=e.next;return o}}let i=new a;document.querySelector("#year").innerHTML=new Date().getFullYear();function l(){document.querySelector("#app").innerHTML=`
  <section>
    <h3>LinkedList size: <mark>${i.size()}</mark></h3>
  </section>
  `,document.querySelector("#display").innerHTML="";let n=i.getFirst();for(let e=0;e<i.size();e++)document.querySelector("#display").innerHTML+=`<kbd>
      data: <code>${n.data}</code>, next: <code>${n.next?n.next.data:null}</code>
    </kbd>`,n=n.next}document.querySelector("#newNode").addEventListener("click",function(){if(i.size()===0||i===null){let n=new c(i.size());i=new a(n)}else{let n=new c(i.size());i.getLast().next=n}l()},!1);document.querySelector("#removeNode").addEventListener("click",function(){let n=i.getLastMinusOne();n.next=null,l()},!1);document.querySelector("#clearList").addEventListener("click",function(){i.clear(),l()},!1);