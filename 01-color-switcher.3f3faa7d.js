const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d;function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){d=setInterval(a,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0})),e.disabled=!0;
//# sourceMappingURL=01-color-switcher.3f3faa7d.js.map
