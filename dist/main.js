!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5)},function(e,t,n){},function(e,t){var n=window.matchMedia("(display-mode: standalone)"),r=document.querySelector(".pwaMenu");("share"in navigator||n.matches)&&r&&(r.style.display="flex")},function(e,t){if(navigator.share){var n=document.querySelector(".pwaMenu__shareButton");n&&(n.getElementsByClassName.display="inline-block",n.addEventListener("click",function(){navigator.share({title:"Lorem Ipsum",text:"Lorem Ipsum descricao",url:"https://localhost:8080"})}))}},function(e,t){var n,r=document.querySelector(".pwaMenu__installBtn"),o=window.matchMedia("(display-mode: standalone)"),i=document.querySelector(".pwaMenu");r&&(window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),n=e,r.style.display="inline-block",o.matches&&i&&(i.style.display="flex")}),r.addEventListener("click",function(){n.prompt(),n.userChoice.then(function(e){"accepted"===e&&(r.style.display="none")})}))},function(e,t){var n=document.querySelector(".badgingAPI__add"),r=document.querySelector(".badginAPI_clean");n&&n.addEventListener("click",function(){window.ExperimentalBadge.set()}),r&&r.addEventListener("click",function(){window.ExperimentalBadge.clear()})}]);