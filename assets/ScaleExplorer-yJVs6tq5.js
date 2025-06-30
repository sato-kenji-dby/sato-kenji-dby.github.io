import{c as L}from"./vexflow-helper-BJ71SLUW.js";import{n as P,a as $,b as R,c as O,d as j,r as z,e as N,i as F,f as A,g as v,p as S,s as I,t as B}from"./index-B5kmyHN1.js";import{i as t}from"./index-BVysS7N4.js";var k={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function U(e){if(typeof e!="string")return["",""];const o=e.indexOf(" "),n=$(e.substring(0,o));if(n.empty){const r=$(e);return r.empty?["",e.toLowerCase()]:[r.name,""]}const l=e.substring(n.name.length+1).toLowerCase();return[n.name,l.length?l:""]}var G=P;function C(e){const o=Array.isArray(e)?e:U(e),n=$(o[0]).name,l=R(o[1]);if(l.empty)return k;const r=l.name,c=n?l.intervals.map(p=>O(n,p)):[],i=n?n+" "+r:r;return{...l,name:i,type:r,tonic:n,notes:c}}function V(e,o={}){const n=j(e),l=$(o.tonic??e[0]??""),r=l.chroma;if(r===void 0)return[];const c=n.split("");c[r]="1";const i=z(r,c).join(""),p=N().find(s=>s.chroma===i),m=[];return p&&m.push(l.name+" "+p.name),o.match==="exact"||K(i).forEach(s=>{m.push(l.name+" "+s)}),m}function K(e){const o=F(e)?e:C(e).chroma,n=A(o);return N().filter(l=>n(l.chroma)).map(l=>l.name)}const W=`<!-- src/tools/ScaleExplorer/ScaleExplorer.html -->
<div class="tool-section scale-explorer-tool">

  <!-- START: Section 1 - Scale Generation/Exploration (Collapsible) -->
  <div class="collapsible-section">
      <button type="button" class="collapsible-header active"> <!-- Default active/expanded -->
          <span data-i18n="scale-Explorer.section1Title"></span>
          <span class="toggle-icon">▼</span> <!-- Indicator -->
      </button>
      <div class="collapsible-content" style="display: block;"> <!-- Default visible -->
          <p data-i18n="scale-Explorer.section1Description"></p>

          <div class="scale-options">
            <div class="option-group">
              <label for="tonic-input" data-i18n="scale-Explorer.tonicLabel"></label>
              <input type="text" id="tonic-input" data-i18n="[placeholder]scale-Explorer.tonicPlaceholder" value="C4">
            </div>

            <div class="option-group">
              <label for="scale-select" data-i18n="scale-Explorer.scaleTypeLabel"></label>
              <select id="scale-select">
                <option value="" data-i18n="scale-Explorer.loadingOption"></option>
              </select>
            </div>
             <div class="option-group">
              <label for="scale-clef-select" data-i18n="scale-Explorer.clefLabel"></label>
              <select id="scale-clef-select">
                <option value="treble" selected data-i18n="scale-Explorer.trebleClef"></option>
                <option value="bass" data-i18n="scale-Explorer.bassClef"></option>
                <option value="alto" data-i18n="scale-Explorer.altoClef"></option>
                <option value="tenor" data-i18n="scale-Explorer.tenorClef"></option>
              </select>
            </div>
            <!-- Buttons Group -->
            <div class="button-group">
                <button id="generate-scale-button" data-i18n="scale-Explorer.generateScaleButton"></button>
                <button id="randomize-scale-button" data-i18n="scale-Explorer.randomizeScaleButton"></button>
            </div>
          </div>

          <div class="output-section">
            <!-- Combined Notes Output -->
            <h4 data-i18n="scale-Explorer.scaleNotesTitle"></h4>
            <div id="scale-notes-output" class="code-output">
              <p data-i18n="scale-Explorer.selectParamsPrompt"></p>
            </div>

            <!-- Usage Suggestion Area -->
            <h4 data-i18n="scale-Explorer.scaleUsageTitle"></h4>
            <div id="scale-usage-output" class="usage-suggestion">
                <p data-i18n="scale-Explorer.noUsageSuggestion"></p>
            </div>

            <h4 data-i18n="scale-Explorer.scoreRenderTitle"></h4>
            <div id="scale-score-output" class="vexflow-score-container" style="min-height: 150px;">
              <p data-i18n="scale-Explorer.scoreDisplayPrompt"></p>
            </div>
          </div>
      </div> <!-- End .collapsible-content -->
  </div> <!-- End .collapsible-section -->
  <!-- END: Section 1 -->


  <!-- START: Section 2 - Scale Detection (Collapsible) -->
  <div class="collapsible-section">
      <button type="button" class="collapsible-header"> <!-- Default inactive/collapsed -->
          <span data-i18n="scale-Explorer.section2Title"></span>
           <span class="toggle-icon">▶</span> <!-- Indicator -->
      </button>
      <div class="collapsible-content"> <!-- Default hidden -->
          <p data-i18n="scale-Explorer.section2Description"></p>
          <div class="scale-detection-input-area">
              <label for="note-detection-textarea" data-i18n="scale-Explorer.inputNotesLabel"></label>
              <textarea id="note-detection-textarea" rows="2" data-i18n="[placeholder]scale-Explorer.inputNotesPlaceholder"></textarea>
          </div>
          <button id="detect-scale-button" data-i18n="scale-Explorer.detectScaleButton"></button>

          <div id="scale-detection-output" class="code-output" style="margin-top: 15px;">
              <p data-i18n="scale-Explorer.detectionResultPrompt"></p>
          </div>
      </div> <!-- End .collapsible-content -->
  </div> <!-- End .collapsible-section -->
  <!-- END: Section 2 -->

</div>
`,J={major:[],lydian:["4A"],mixolydian:["7m"],minor:[],dorian:["6M"],phrygian:["2m"],locrian:["2m","5d"],"harmonic minor":["7M"],"melodic minor":["6M","7M"],"major pentatonic":[],"minor pentatonic":["7m"],blues:["3m","5d","7m"],"lydian dominant":["4A","7m"],"phrygian dominant":["2m","3M","7m"]},Q={major:t.t("scale-Explorer.usage.major"),lydian:t.t("scale-Explorer.usage.lydian"),mixolydian:t.t("scale-Explorer.usage.mixolydian"),minor:t.t("scale-Explorer.usage.minor"),dorian:t.t("scale-Explorer.usage.dorian"),phrygian:t.t("scale-Explorer.usage.phrygian"),locrian:t.t("scale-Explorer.usage.locrian"),"harmonic minor":t.t("scale-Explorer.usage.harmonicMinor"),"melodic minor":t.t("scale-Explorer.usage.melodicMinor"),"major pentatonic":t.t("scale-Explorer.usage.majorPentatonic"),"minor pentatonic":t.t("scale-Explorer.usage.minorPentatonic"),blues:t.t("scale-Explorer.usage.blues"),"lydian dominant":t.t("scale-Explorer.usage.lydianDominant"),"phrygian dominant":t.t("scale-Explorer.usage.phrygianDominant")},X=["C4","Db4","D4","Eb4","E4","F4","Gb4","G4","Ab4","A4","Bb4","B4"];let g=[];function Y(e){const o={tonicInput:e.querySelector("#tonic-input"),scaleSelect:e.querySelector("#scale-select"),clefSelect:e.querySelector("#scale-clef-select"),generateButton:e.querySelector("#generate-scale-button"),randomizeButton:e.querySelector("#randomize-scale-button"),notesOutput:e.querySelector("#scale-notes-output"),usageOutput:e.querySelector("#scale-usage-output"),scoreOutputContainer:e.querySelector("#scale-score-output"),vexFlowTargetId:"scale-explorer-vexflow-output",detectionTextarea:e.querySelector("#note-detection-textarea"),detectButton:e.querySelector("#detect-scale-button"),detectionOutput:e.querySelector("#scale-detection-output"),collapsibleHeaders:e.querySelectorAll(".collapsible-header")},l=["#tonic-input","#scale-select","#scale-clef-select","#generate-scale-button","#randomize-scale-button","#scale-notes-output","#scale-usage-output","#scale-score-output","#note-detection-textarea","#detect-scale-button","#scale-detection-output"].filter(r=>!e.querySelector(r));return l.length>0?(console.error(t.t("scale-Explorer.error.uiElementsNotFound",{elements:l.join(", ")})),null):(o.vexFlowContainer=()=>e.querySelector(`#${o.vexFlowTargetId}`),o)}function Z(e){if(!e||(e.innerHTML="",g=G(),!g||g.length===0))return;const o=["minor #7M pentatonic","lydian #5P pentatonic"];g=g.filter(l=>!o.includes(l)),g.sort(),g.forEach(l=>{const r=document.createElement("option");r.value=l,r.textContent=l,e.appendChild(r)});const n="major";g.includes(n)?e.value=n:g.length>0&&(e.value=g[0]),e.disabled=!1,console.log(t.t("scale-Explorer.log.scaleSelectPopulated",{count:g.length}))}function _(e){if(!e||e.length===0)return[];let o=null;return e.map(n=>{const l=v(n);if(l.empty)return console.warn(t.t("scale-Explorer.warning.noteParseFailed",{noteName:n})),null;let r=l.oct;return r==null&&(o===null&&(o=4,console.log(t.t("scale-Explorer.log.defaultOctaveUsed"))),r=o),{keys:[`${l.pc.toLowerCase().replace("b","b").replace("#","#")}/${r}`],duration:"q"}}).filter(n=>n!==null)}function H(e,o,n){const l=Math.max(300,e.length*50+60);return{elementId:n,width:l,height:150,staves:[{clef:o,notes:e}]}}function y(e,o){e?e.innerHTML=`<p style="color: red; padding: 10px;">${t.t("common.error")}: ${o}</p>`:console.error(t.t("common.errorDisplayFailed"),o)}function ee(e){if(!e||e.empty||!e.type||!e.tonic)return[];const o=J[e.type]||[],n=e.tonic;return o.map(l=>{try{const r=v(n).oct===null?e.notes[0]||"C4":n;let c=B(r,l);if(v(c).oct===null){const i=S(c),p=e.notes.find(m=>S(m)===i);p&&(c=p)}return c}catch(r){return console.warn(t.t("scale-Explorer.warning.transposeError",{tonic:n,interval:l}),r),null}}).filter(l=>l!==null&&e.notes.includes(l))}function w(e){const{tonicInput:o,scaleSelect:n,clefSelect:l,notesOutput:r,usageOutput:c,scoreOutputContainer:i,vexFlowTargetId:p,vexFlowContainer:m}=e;r.innerHTML=`<p>${t.t("common.loading")}</p>`,c.innerHTML=`<p>${t.t("common.loading")}</p>`,i.innerHTML=`<div id="${p}"></div>`;const s=m();if(!s){y(i,t.t("scale-Explorer.error.vexflowTargetCreation"));return}const f=o.value.trim(),E=n.value,x=l.value;if(!f||!E){y(s,t.t("scale-Explorer.error.missingTonicOrScaleType")),c.innerHTML=`<p>${t.t("scale-Explorer.noUsageSuggestion")}</p>`,r.innerHTML=`<p>${t.t("scale-Explorer.selectParamsPrompt")}</p>`;const u=H([],x,p);L(u.elementId,u);return}try{const u=`${f} ${E}`,a=C(u);if(a.empty){const h=C(E);let b=t.t("scale-Explorer.error.cannotGetScale",{fullScaleName:u});h.empty?b+=t.t("scale-Explorer.error.invalidScaleType",{scaleType:E}):v(f).empty?b+=t.t("scale-Explorer.error.unrecognizedTonic",{tonic:f}):b+=t.t("scale-Explorer.error.checkInput"),y(s,b),c.innerHTML=`<p>${t.t("scale-Explorer.noUsageSuggestion")}</p>`,r.innerHTML=`<p>${t.t("scale-Explorer.selectParamsPrompt")}</p>`;const T=H([],x,p);L(T.elementId,T);return}const d=ee(a),q=Q[a.type]||t.t("scale-Explorer.noUsageSuggestionAvailable"),D=a.notes.map(h=>d.some(T=>S(T)===S(h))?`<span class="characteristic-note">${h}</span>`:h).join(" ");r.innerHTML=`<pre><code>${D}</code></pre>`,c.innerHTML=`<p>${q}</p>`;const M=_(a.notes);if(M.length===0&&a.notes.length>0)y(s,t.t("scale-Explorer.error.vexflowConversion"));else if(M.length===0)y(s,t.t("scale-Explorer.error.noRenderableNotes"));else{const h=H(M,x,p);L(h.elementId,h),console.log(t.t("scale-Explorer.log.scaleRenderedSuccessfully",{fullScaleName:u}))}}catch(u){console.error(t.t("scale-Explorer.error.generateRequestError"),u),y(s,t.t("scale-Explorer.error.generatingScale",{message:u.message})),c.innerHTML=`<p>${t.t("scale-Explorer.noUsageSuggestion")}</p>`,r.innerHTML=`<p>${t.t("scale-Explorer.selectParamsPrompt")}</p>`}}function te(e){const{tonicInput:o,scaleSelect:n}=e;if(!g||g.length===0){console.error(t.t("scale-Explorer.error.cannotRandomize")),alert(t.t("scale-Explorer.alert.scaleListNotLoaded"));return}const l=I(X)[0],r=I(g)[0];o.value=l,n.value=r,w(e),console.log(`Randomized to: ${l} ${r}`)}function ne(e){const{detectionTextarea:o,detectionOutput:n}=e,l=new Set(["major","minor","dorian","phrygian","lydian","mixolydian","locrian","major pentatonic","minor pentatonic","blues","harmonic minor","melodic minor","lydian dominant","phrygian dominant"]),r=o.value.trim();if(n.innerHTML=`<p>${t.t("scale-Explorer.detecting")}</p>`,!r){n.innerHTML=`<p>${t.t("scale-Explorer.inputNotesForDetection")}</p>`;return}const c=r.split(/\s+/).filter(s=>s.length>0);if(c.length===0){n.innerHTML=`<p>${t.t("scale-Explorer.invalidInputNotes")}</p>`;return}const i=c.filter(s=>!v(s).empty),p=c.filter(s=>v(s).empty);let m="";if(p.length>0&&(m=`<p style="color: orange;">${t.t("scale-Explorer.warning.invalidNotesIgnored",{notes:p.join(", ")})}</p>`,i.length===0)){n.innerHTML=m+`<p style="color: red;">${t.t("scale-Explorer.error.noValidNotesProvided")}</p>`;return}if(i.length===0&&p.length===0){n.innerHTML=`<p>${t.t("scale-Explorer.inputNotes")}</p>`;return}try{const s=[...new Set(i.map(S).filter(a=>a))];if(s.length===0){n.innerHTML=m+`<p style="color: red;">${t.t("scale-Explorer.error.noValidPitchClasses")}</p>`;return}let f=[];s.forEach(a=>{const d=V(i,{tonic:a});d&&d.length>0&&f.push(...d)});const E=[...new Set(f)];E.sort();const x=[],u=[];if(E.forEach(a=>{try{const d=C(a);!d.empty&&d.type&&l.has(d.type)?x.push(a):u.push(a)}catch(d){console.warn(t.t("scale-Explorer.warning.processingScaleError",{fullName:a,error:d})),u.push(a)}}),x.length===0&&u.length===0)n.innerHTML=m+`<p>${t.t("scale-Explorer.noMatchingScalesFound",{notes:i.join(", ")})}</p>`;else{let a=m+`<p>${t.t("scale-Explorer.possibleScalesFound",{tonics:s.join(", "),notes:i.join(", ")})}</p>`;x.length>0?(a+=`<h6>${t.t("scale-Explorer.commonModesScales")}:</h6><ul>`,x.forEach(d=>{a+=`<li>${d}</li>`}),a+="</ul>"):a+=`<h6>${t.t("scale-Explorer.commonModesScales")}:</h6><p><small>${t.t("scale-Explorer.noMatchInCommonList")}</small></p>`,u.length>0?(x.length>0&&(a+='<hr style="margin: 10px 0; border-top: 1px dashed #ccc;">'),a+=`<h6>${t.t("scale-Explorer.otherMatchingScales")}:</h6><ul>`,u.forEach(d=>{a+=`<li>${d}</li>`}),a+="</ul>"):x.length>0&&(a+='<hr style="margin: 10px 0; border-top: 1px dashed #ccc;">',a+=`<h6>${t.t("scale-Explorer.otherMatchingScales")}:</h6><p><small>${t.t("scale-Explorer.noMoreMatchesInOtherScales")}</small></p>`),a+=`<p style="margin-top:15px;"><small>${t.t("scale-Explorer.noteAboutList")}</small></p>`,n.innerHTML=a}console.log(t.t("scale-Explorer.log.scaleDetectionCompleted",{notes:i.join(", "),tonicsCount:s.length,priorityCount:x.length,otherCount:u.length}))}catch(s){console.error(t.t("scale-Explorer.error.detectRequestError"),s),y(n,t.t("scale-Explorer.error.detectingScale",{message:s.message}))}}function oe(e){const o=e.currentTarget,n=o.nextElementSibling,l=o.querySelector(".toggle-icon");if(!n||!n.classList.contains("collapsible-content")||!l){console.error(t.t("scale-Explorer.error.collapsibleStructure"),o);return}o.classList.toggle("active"),n.style.display==="block"?(n.style.display="none",l.textContent="▶"):(n.style.display="block",l.textContent="▼")}function le(e){e.generateButton.addEventListener("click",()=>w(e)),e.randomizeButton.addEventListener("click",()=>te(e)),e.detectButton.addEventListener("click",()=>ne(e)),e.collapsibleHeaders?e.collapsibleHeaders.forEach(o=>{o.addEventListener("click",oe)}):console.warn(t.t("scale-Explorer.warning.noCollapsibleHeaders"))}function ce(e){if(!e){console.error(t.t("scale-Explorer.error.initializationFailed"));return}e.innerHTML=W;const o=Y(e);o&&(Z(o.scaleSelect),le(o),w(o),o.detectionOutput&&(o.detectionOutput.innerHTML=`<p>${t.t("scale-Explorer.detectionResultPrompt")}</p>`),console.log(t.t("scale-Explorer.log.toolInitialized")))}export{ce as initializeScaleExplorer};
