(()=>{"use strict";const t=document.getElementById("celsius"),a=document.getElementById("fahrenheit"),n=document.getElementById("kelvin");function e(){var e;a.value=(e=t.value,(1.8*parseFloat(e)+32).toFixed(2))}function u(){var e;n.value=(e=t.value,(parseFloat(e)+273.15).toFixed(2))}t.addEventListener("change",()=>{""===t.value&&(t.value=0),e(),u()}),a.addEventListener("change",()=>{""===a.value&&(a.value=0),t.value=function(e){return((parseFloat(e)-32)/1.8).toFixed(2)}(a.value),u()}),n.addEventListener("change",()=>{""===n.value&&(n.value=0),t.value=function(e){return(parseFloat(e)-273.15).toFixed(2)}(n.value),e()});const l=document.getElementById("kilometers"),v=document.getElementById("miles");l.addEventListener("change",()=>{""===l.value&&(l.value=0),v.value=function(e){return(.62137*parseFloat(e)).toFixed(3)}(l.value)}),v.addEventListener("change",()=>{""===v.value&&(v.value=0),l.value=function(e){return(1.60934*parseFloat(e)).toFixed(3)}(v.value)})})();
