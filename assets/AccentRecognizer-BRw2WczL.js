import{a as N,l as tt,o as U,c as et,q as X,g as nt,u as ot,p as _}from"./index-B5kmyHN1.js";import{b as at,d as it}from"./index-sDpErw38.js";import{p as ct,i as rt,s as lt}from"./audio-player-C8eAfouR.js";import{i as p}from"./index-BVysS7N4.js";var Z={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function st(t){const[i,e,c,o]=X(t);return i===""?q("",t):i==="A"&&o==="ug"?q("","aug"):q(i+e,c+o)}function q(t,i){const e=i.split("/");if(e.length===1)return[t,e[0],""];const[c,o,a,d]=X(e[1]);return c!==""&&a===""&&d===""?[t,e[0],c+o]:[t,i,""]}function O(t){if(Array.isArray(t))return j(t[1]||"",t[0],t[2]);if(t==="")return Z;{const[i,e,c]=st(t),o=j(e,i,c);return o.empty?j(t):o}}function j(t,i,e){const c=tt(t),o=N(i||""),a=N(e||"");if(c.empty||i&&o.empty||e&&a.empty)return Z;const d=U(o.pc,a.pc),g=c.intervals.indexOf(d),r=g>=0,m=r?a:N(""),h=g===-1?NaN:g+1,s=a.pc&&a.pc!==o.pc,b=Array.from(c.intervals);if(r)for(let $=1;$<h;$++){const L=b[0][0],u=b[0][1],n=parseInt(L,10)+7;b.push(`${n}${u}`),b.shift()}else if(s){const $=at(U(o.pc,a.pc),"8P");$&&b.unshift($)}const S=o.empty?[]:b.map($=>et(o.pc,$));t=c.aliases.indexOf(t)!==-1?t:c.aliases[0];const v=`${o.empty?"":o.pc}${t}${r&&h>1?"/"+m.pc:s?"/"+a.pc:""}`,f=`${i?o.pc+" ":""}${c.name}${r&&h>1?" over "+m.pc:s?" over "+a.pc:""}`;return{...c,name:f,symbol:v,tonic:o.pc,type:c.name,root:m.pc,bass:s?a.pc:"",intervals:b,rootDegree:h,notes:S}}var ut={empty:!0,name:"",upper:void 0,lower:void 0,type:void 0,additive:[]},pt=/^(\d*\d(?:\+\d)*)\/(\d+)$/,G=new Map;function Q(t){const i=JSON.stringify(t),e=G.get(i);if(e)return e;const c=gt(Y(t));return G.set(i,c),c}function Y(t){if(typeof t=="string"){const[a,d,g]=pt.exec(t)||[];return Y([d,g])}const[i,e]=t,c=+e;if(typeof i=="number")return[i,c];const o=i.split("+").map(a=>+a);return o.length===1?[o[0],c]:[o,c]}var dt=t=>Math.log(t)/Math.log(2)%1===0;function gt([t,i]){const e=Array.isArray(t)?t.reduce((g,r)=>g+r,0):t,c=i;if(e===0||c===0)return ut;const o=Array.isArray(t)?`${t.join("+")}/${i}`:`${t}/${i}`,a=Array.isArray(t)?t:[],d=c===4||c===2?"simple":c===8&&e%3===0?"compound":dt(c)?"irregular":"irrational";return{empty:!1,name:o,type:d,upper:e,lower:c,additive:a}}const mt=`<!-- src/tools/AccentRecognizer/AccentRecognizer.html -->

<div class="tool-section accent-recognizer-tool">
    <h3 data-i18n="accent.title"></h3>
    <p data-i18n="accent.desc"></p>

    <!-- 配置区域 -->
    <div class="config-section accent-config">
        <h4 data-i18n="accent.configLabel"></h4>
        <div class="option-group">
            <label for="accent-time-sig-select" data-i18n="accent.timeSigLabel"></label>
            <select id="accent-time-sig-select">
                <option value="4/4" selected>4/4</option>
                <option value="3/4">3/4</option>
                <option value="2/4">2/4</option>
                <option value="6/8">6/8</option>
                <option value="C">C (4/4)</option>
                <option value="C|">C| (2/2)</option>
                <!-- Add more time signatures as needed -->
            </select>
        </div>
        <div class="option-group">
            <label for="accent-key-select" data-i18n="accent.keyLabel"></label>
            <select id="accent-key-select">
                <option value="C" selected>C Maj / a min</option>
                <option value="G">G Maj / e min (1♯)</option>
                <option value="D">D Maj / b min (2♯)</option>
                <option value="A">A Maj / f♯ min (3♯)</option>
                <option value="E">E Maj / c♯ min (4♯)</option>
                <option value="B">B Maj / g♯ min (5♯)</option>
                <option value="F#">F♯ Maj / d♯ min (6♯)</option>
                <option value="C#">C♯ Maj / a♯ min (7♯)</option>
                <option value="F">F Maj / d min (1♭)</option>
                <option value="Bb">B♭ Maj / g min (2♭)</option>
                <option value="Eb">E♭ Maj / c min (3♭)</option>
                <option value="Ab">A♭ Maj / f min (4♭)</option>
                <option value="Db">D♭ Maj / b♭ min (5♭)</option>
                <option value="Gb">G♭ Maj / e♭ min (6♭)</option>
                <option value="Cb">C♭ Maj / a♭ min (7♭)</option>
            </select>
        </div>
        <fieldset class="option-group accent-toggles-container">
            <legend data-i18n="accent.accentDisplayLabel"></legend>
            <div class="accent-toggle-list">
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-metrical" name="accent-toggle" value="metrical" checked>
                    <label for="toggle-metrical" data-i18n="accent.metricalAccentLabel"></label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-durational" name="accent-toggle" value="durational" checked>
                    <label for="toggle-durational" data-i18n="accent.durationalAccentLabel"></label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-registral" name="accent-toggle" value="registral" checked>
                    <label for="toggle-registral" data-i18n="accent.registralAccentLabel"></label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-contour" name="accent-toggle" value="contour" checked>
                    <label for="toggle-contour" data-i18n="accent.contourAccentLabel"></label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-articulation" name="accent-toggle" value="articulation" checked>
                    <label for="toggle-articulation" data-i18n="accent.articulationAccentLabel"></label>
                </div>
                <!-- 移除了和声的 Toggle -->
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-texture" name="accent-toggle" value="texture" checked>
                    <label for="toggle-texture" data-i18n="accent.textureAccentLabel"></label>
                </div>
                 <div class="toggle-item">
                    <input type="checkbox" id="toggle-pattern" name="accent-toggle" value="pattern" checked>
                    <label for="toggle-pattern" data-i18n="accent.patternAccentLabel"></label>
                </div>
                <!-- Add more toggles as needed -->
            </div>
        </fieldset>
        <!-- Future: Add weight configuration options here -->
    </div>

    <!-- 输入区域 -->
    <div class="input-section accent-input">
        <h4 data-i18n="accent.inputSectionLabel"></h4>
        <label for="accent-input-textarea" data-i18n="accent.noteSequenceLabel"></label>
        <textarea id="accent-input-textarea" rows="5" data-i18n-placeholder="accent.inputPlaceholder"></textarea>
        <p><small data-i18n="accent.inputHint"></small></p>
    </div>

    <!-- 操作按钮 -->
    <button id="analyze-accents-button" data-i18n="accent.analyzeButton"></button>

    <!-- 输出区域 -->
    <div class="output-section accent-output">
        <h4 data-i18n="accent.analysisResultsLabel"></h4>
        <div id="accent-legend">
             <p><small data-i18n="accent.legendPlaceholder"></small></p>
        </div>
        <div id="accent-analysis-table-container">
            <p data-i18n="accent.analysisPlaceholder"></p>
        </div>
    </div>

    <div class="playback-controls input-section"> <!-- Added a wrapper and reused input-section for consistent styling -->
        <h4 data-i18n="accent.playbackControlsLabel"></h4>
        <div class="option-group">
            <!-- Restore original JS-linked classes, add new style classes -->
            <button id="play-button-accent" class="play-button button-primary" data-i18n="accent.playButton"></button> 
            <button id="stop-button-accent" class="stop-button button-secondary" data-i18n="accent.stopButton"></button> 
        </div>
        <div class="option-group">
            <!-- Restore original JS-linked ID -->
            <label for="bpm-input">BPM:</label>
            <input type="number" id="bpm-input" value="120" min="30" max="300" style="width: 80px;"> 
        </div>
    </div>
</div>
`;let E=null,D=null;function ft(t){const i={timeSigSelect:t.querySelector("#accent-time-sig-select"),keySelect:t.querySelector("#accent-key-select"),textarea:t.querySelector("#accent-input-textarea"),analyzeButton:t.querySelector("#analyze-accents-button"),outputTableContainer:t.querySelector("#accent-analysis-table-container"),legendDiv:t.querySelector("#accent-legend"),accentToggles:{},toggleListContainer:t.querySelector(".accent-toggle-list"),playButton:t.querySelector(".play-button"),stopButton:t.querySelector(".stop-button"),bpmInput:t.querySelector("#bpm-input")};t.querySelectorAll('.accent-toggle-list input[type="checkbox"]').forEach(a=>{a.value&&(i.accentToggles[a.value]=a)});const c=["timeSigSelect","keySelect","textarea","analyzeButton","outputTableContainer","legendDiv","toggleListContainer"];let o=!1;for(const a of c)i[a]||(a==="toggleListContainer"?console.warn(`AccentRecognizer Warning: Could not find UI element: ${a}`):(console.error(`AccentRecognizer Error: Could not find required UI element: ${a}`),o=!0));return Object.keys(i.accentToggles).length===0&&console.warn("AccentRecognizer Warning: No accent toggle checkboxes found."),o?(t&&(t.innerHTML=`<p class="error-message">${p.t("accent.error.uiMissing")}</p>`),null):i}function ht(t,i){if(!t||typeof t!="string"||!i||typeof i!="object"||!i.lower)return null;const e=t.trim().toLowerCase(),c={1:"w",2:"h",4:"q",8:"e",16:"s",32:"t",64:"sf",w:"w",h:"h",q:"q",e:"e",s:"s",t:"t",sf:"sf"};let o=e,a="";for(;o.endsWith(".")||o.endsWith("d");)a+=".",o=o.slice(0,-1);const g=(c[o]||o)+a,r=ot(g);if(!r||r.empty||typeof r.value!="number")return console.warn(`[getDurationInBeats] Tonal could not parse duration symbol: "${g}" (mapped from "${e}")`),null;const m=r.value*i.lower;return isNaN(m)||m<=0?(console.warn(`[getDurationInBeats] Calculated beats is invalid: ${m}`),null):m}function bt(t,i){if(console.log("开始解析输入, 拍号:",i),!t.trim())return[];const e=Q(i);if(!e||e.empty||!e.lower)throw new Error(p.t("accent.error.invalidTimeSignature",{timeSignature:i}));const c=t.split(`
`),o=[];let a=0;const d=[];if(c.forEach((g,r)=>{const m=r;let h=0;g.trim().split(/\s+/).filter(b=>b.length>0).forEach((b,S)=>{const v=b.split("/"),f=v[0],$=v.length>1?v[1]:"q",L=f.toUpperCase()==="R"||f.toUpperCase()==="Z",u=ht($,e);if(u===null||u<=0){const l=p.t("accent.error.invalidDurationSymbol",{voiceId:m+1,elementIndex:S+1,durationSymbol:$});console.warn(l),d.push(l);return}let n={id:a++,startTime:h,duration:u,voiceId:m,originalString:b,velocity:90,articulation:null};if(L)n.type="rest",n.pitch=null,n.midi=null;else{const l=nt(f);if(l.empty){const y=p.t("accent.error.invalidPitch",{voiceId:m+1,elementIndex:S+1,pitch:f});console.warn(y),d.push(y);return}n.type="note",n.pitch=l.name,n.midi=l.midi}o.push(n),h+=u})}),d.length>0){const g=d.slice(0,5).join(`
`)+(d.length>5?`
...`:"");alert(p.t("accent.alert.parseErrors",{errors:g}))}return o.sort((g,r)=>g.startTime-r.startTime||g.voiceId-r.voiceId),console.log("解析并排序后的事件:",o),o}function W(t,i){const e=Q(i);if(!e||e.empty||!e.upper||!e.lower||t.startTime<0)return 0;e.lower,e.lower;const c=e.upper,a=t.startTime*e.lower/4%c,d=.01;if(Math.abs(a)<d)return 3;if(e.upper===4&&e.lower===4&&Math.abs(a-2)<d||e.upper===6&&e.lower===8&&Math.abs(a-3)<d)return 2;for(let g=1;g<c;g++)if(Math.abs(a-g)<d){if(e.upper===4&&e.lower===4&&g===2||e.upper===6&&e.lower===8&&g===3)continue;return 1}return 0}function yt(t,i,e){if(t.type==="rest")return 0;const c=t.duration,o=t.voiceId;let a=0;const d=.001;for(let g=i-1;g>=0;g--){const r=e[g];if(r.voiceId===o){if(r.type==="rest")continue;if(r.duration>=c-d)break;a++}}return 1+a}function vt(t,i,e,c){return t.type==="rest"?0:c>=2&&(t.voiceId===i||t.voiceId===e)?1:0}function xt(t,i,e){if(t.type==="rest"||typeof t.midi!="number")return 0;const c=t.voiceId,o=t.midi;let a=null,d=null;for(let s=i-1;s>=0;s--)if(e[s].voiceId===c&&e[s].type==="note"&&typeof e[s].midi=="number"){a=e[s];break}for(let s=i+1;s<e.length;s++)if(e[s].voiceId===c&&e[s].type==="note"&&typeof e[s].midi=="number"){d=e[s];break}if(!a||!d)return 0;const g=a.midi,r=d.midi;let m=0;o>g?m=1:o<g&&(m=-1);let h=0;return r>o?h=1:r<o&&(h=-1),m===0&&h===0?0:m!==h?m*h===-1?2:1:0}function Mt(t){return t.articulation==="^"||t.velocity&&t.velocity>110?3:t.articulation===">"||t.velocity&&t.velocity>95?2:t.articulation==="."||t.velocity&&t.velocity>80?1:0}function $t(t,i){return 0}function St(t,i){return 0}function wt(t,i){const e=[],c=[...new Set(t.map(r=>r.startTime))].sort((r,m)=>r-m),o=.001;let a=null,d=-1,g=0;return c.forEach(r=>{r.toFixed(4);const m=t.filter(u=>u.type==="note"&&u.startTime<=r+o&&u.startTime+u.duration>r+o).map(u=>_(u.pitch)),h=new Set(t.filter(u=>u.startTime<=r+o&&u.startTime+u.duration>r+o).map(u=>u.voiceId)).size;let s=null,b=null;if(m.length>=2){const u=it(m);if(s=u.length>0?u[0]:null,s){const n=t.filter(l=>l.type==="note"&&Math.abs(l.startTime-r)<o).sort((l,y)=>(l.midi||128)-(y.midi||128));if(n.length>0){const l=_(n[0].pitch);O(s).notes.includes(l)||(s=`${s}/${l}`)}b=O(s)}}let S=!1,v="unknown",f=0;g<=2&&h>2&&b&&(S=!0,v="entry",f+=2,console.log(`Harmony Entry at ${r}: ${s}`)),b&&(!a||b.symbol!==a.symbol)&&(a?(S=!0,v="change",f+=1,!a.tonic||b.tonic!==a.tonic?f+=1:b.type!==a.type&&(f+=.5),console.log(`Harmony Change at ${r}: ${(a==null?void 0:a.symbol)||"None"} -> ${s}`)):v!=="entry"&&(S=!0,v="first",f+=1,console.log(`First Harmony at ${r}: ${s}`)));const $=t.filter(u=>u.type==="note"&&Math.abs(u.startTime-r)<o).sort((u,n)=>(u.midi||128)-(n.midi||128))[0];let L=null;if(d>=0){const u=t.filter(n=>n.type==="note"&&Math.abs(n.startTime-d)<o).sort((n,l)=>(n.midi||128)-(l.midi||128))[0];u&&(L=u.pitch)}if($&&L&&$.pitch!==L&&(S=!0,v==="unknown"&&(v="bass_move"),f+=1,console.log(`Bass Move at ${r}: ${L} -> ${$.pitch}`)),S){const u=e.findIndex(n=>Math.abs(n.time-r)<o);u===-1?e.push({time:r,type:v,strength:Math.max(1,f),symbol:s||"N/A"}):(e[u].strength=Math.max(e[u].strength,f),e[u].type!==v&&e[u].type!=="entry"&&(e[u].type+=`+${v}`))}b&&(a=b,d=r),g=h}),console.log("分析后的和声事件:",e),e}function kt(t,i){const e=wt(t),c=[...new Set(t.map(r=>r.voiceId))],o=c.length,a=o>0?Math.min(...c):-1,d=o>0?Math.max(...c):-1,g=t.map((r,m,h)=>{let s={};r.type==="note"?s={metrical:W(r,i.timeSignature),durational:yt(r,m,h),registral:vt(r,a,d,o),articulation:Mt(r),texture:$t(),contour:xt(r,m,h),pattern:St()}:s={metrical:W(r,i.timeSignature),durational:0,registral:0,articulation:0,texture:0,contour:0,pattern:0};const b={metrical:1,durational:1.2,registral:.8,articulation:2.5,texture:.7,contour:1,pattern:1.5};let S=0;for(const v in s){const f=Number(s[v])||0,$=Number(b[v])||1;S+=f*$}return{...r,accents:s,totalStrength:S}});return console.log("非和声重音计算完成."),{message:p.t("accent.analysis.messageComplete"),details:p.t("accent.analysis.details"),eventData:g,harmonicEvents:e}}const B={},J={metrical:3,durational:10,registral:4,articulation:3,texture:3,contour:3,pattern:3,harmonic:5};function K(t,i,e,c){if(!e||!c){console.error("Display containers missing.");return}if(e.innerHTML="",c.innerHTML="",!t||!t.eventData||!t.harmonicEvents){e.innerHTML=`<p>${(t==null?void 0:t.message)||p.t("accent.table.noData")}</p>`,c.innerHTML=`<p><small>${p.t("accent.legend.notAvailable")}</small></p>`;return}const o=t.eventData,a=t.harmonicEvents,d=[...new Set(o.map(n=>n.voiceId))].sort((n,l)=>n-l);if(d.length===0&&a.length===0){e.innerHTML=`<p>${p.t("accent.table.noVoiceOrHarmony")}</p>`;return}const g=o.flatMap(n=>[n.startTime,n.startTime+n.duration]).concat(a.map(n=>n.time)),r=[...new Set(g.map(n=>parseFloat(n.toFixed(4))))].sort((n,l)=>n-l),m=[];if(r.length>0){const n=o.map(x=>x.duration).filter(x=>x>0),l=n.length>0?Math.min(...n):.25,y=Math.max(.05,l/4),k=r[r.length-1];for(let x=0;x<=k+y;x+=y)m.push(parseFloat(x.toFixed(4)))}else m.push(0);const h=[...new Set(m)].sort((n,l)=>n-l),s={};o.forEach(n=>{const l=n.startTime.toFixed(4);s[l]||(s[l]=[]),s[l].push(n)});const b={};a.forEach(n=>{const l=n.time.toFixed(4);b[l]=n});const S={};let v=0;Math.max(1,...a.map(n=>n.strength||0)),Math.max(1,...o.map(n=>n.totalStrength||0)),h.forEach(n=>{const l=n.toFixed(4),y=.01,k=o.filter(M=>Math.abs(M.startTime-n)<y),x=b[l],w=k.reduce((M,I)=>M+(I.totalStrength||0),0),A=(x==null?void 0:x.strength)||0,H=w+A;S[l]=H,H>v&&(v=H)}),v=Math.max(1,v);let f='<table class="accent-result-table">';f+=`<thead><tr><th>${p.t("accent.table.headerElement")}</th>`,h.forEach(n=>{f+=`<th>${n.toFixed(2)}</th>`}),f+="</tr></thead><tbody>",f+=`<tr class="harmony-row"><th scope="row">${p.t("accent.table.headerHarmony")}</th>`;let $=null,L=0;h.forEach(n=>{const l=n.toFixed(4),y=b[l];let k="",x="",w=p.t("accent.tooltip.time",{time:n.toFixed(2)});if(y){$=y.symbol||p.t("common.notAvailable");const A=y.strength||0,H=J.harmonic,M=Math.max(0,Math.min(1,A/H));L=Math.min(Math.max(0,Math.round(M*5)),5),k=$,x=`accent-strength-${L}`,w+=p.t("accent.tooltip.harmony",{symbol:k,strength:A.toFixed(1),type:y.type})}else $?(k="-",x="accent-strength-0",w+=p.t("accent.tooltip.continuing",{symbol:$})):(k="",x="accent-strength-0");f+=`<td class="${x}" title="${w.replace(/"/g,'"')}">${k}</td>`}),f+="</tr>",d.forEach(n=>{f+=`<tr><th scope="row">${p.t("accent.table.headerVoice",{voiceId:n+1})}</th>`;let l=null;h.forEach(y=>{const k=y.toFixed(4);let x="",w="background-color: #fff;",A=p.t("accent.tooltip.time",{time:y.toFixed(2)});const H=.001;let M=null;if(s[k]&&(M=s[k].find(I=>I.voiceId===n)),M)if(l=M,M.type==="note"){if(x=M.pitch||p.t("common.notAvailable"),M.accents){const I=[];for(const T in i)if(i[T]&&i[T].checked&&M.accents[T]!==void 0){const C=M.accents[T]||0,F=J[T]||1,z=Math.max(0,Math.min(1,C/F));z>0&&B[T]&&I.push({type:T,normalizedStrength:z,baseColorHSL:B[T]})}I.length>0?w=`background-image: ${I.map(C=>{const F=C.baseColorHSL,z=.1+C.normalizedStrength*.6,[R,P,V]=(F.h,F.s,F.l,void 0);return`linear-gradient(rgba(${R}, ${P}, ${V}, ${z.toFixed(2)}), rgba(${R}, ${P}, ${V}, ${z.toFixed(2)}))`}).join(", ")}; background-color: #fff;`:w="background-color: #fff;"}else w="background-color: #fff;";if(A=p.t("accent.tooltip.noteStart",{time:y.toFixed(2),eventId:M.id,pitch:M.pitch,duration:M.duration.toFixed(2)}),M.accents){let I=[];for(const T in M.accents){const C=M.accents[T];C!=null&&C!==0&&I.push(`${T.substring(0,3)}:${C}`)}A+=p.t("accent.tooltip.rawAccents",{accents:I.join(" ")||p.t("common.none")})}}else x=p.t("accent.table.restSymbol"),w="background-color: #f0f0f0; color: #888; font-style: italic;",A=p.t("accent.tooltip.restStart",{time:y.toFixed(2),eventId:M.id,duration:M.duration.toFixed(2)});else l&&y<l.startTime+l.duration-H?l.type==="note"?(x="-",w="background-color: #f8f8f8; color: #bbb;",A=p.t("accent.tooltip.continuingNote",{eventId:l.id,pitch:l.pitch})):(x="~",w="background-color: #f0f0f0; color: #ccc; font-style: italic;",A=p.t("accent.tooltip.continuingRest",{eventId:l.id})):(l=null,x="",w="background-color: #fff;",A=p.t("accent.tooltip.time",{time:y.toFixed(2)}));f+=`<td style="${w}" title="${A.replace(/"/g,'"')}">${x}</td>`}),f+="</tr>"}),f+=`<tr class="compressed-accent-row"><th scope="row">${p.t("accent.table.headerTotalAccent")}</th>`,h.forEach(n=>{const l=n.toFixed(4),y=S[l]||0,k=y/v*5,w=`accent-strength-${Math.min(Math.max(0,Math.round(k)),5)}`,A=p.t("accent.tooltip.totalStrength",{time:n.toFixed(2),strength:y.toFixed(1)});f+=`<td class="${w}" title="${A.replace(/"/g,'"')}"> </td>`}),f+="</tr>",f+="</tbody></table>",e.innerHTML=f;let u=`<p>${p.t("accent.legend.title")}</p><div class="legend-grid">`;for(const n in B){if(n==="harmonic")continue;const l=(B[n].h,B[n].s,B[n].l,void 0),y=p.t(`accent.accentDisplay.${n}`,{defaultValue:n.charAt(0).toUpperCase()+n.slice(1)});u+=`<div class="legend-item"><span class="legend-color-box" style="background-color: rgb(${l[0]}, ${l[1]}, ${l[2]});"></span><span>${y}</span></div>`}u+="</div>",u+='<hr style="margin: 10px 0; border: none; border-top: 1px solid #eee;">',u+=`<p><small>${p.t("accent.legend.footer")}</small></p>`,c.innerHTML=u}function At(t){if(!t||!t.analyzeButton)return;D=t,t.analyzeButton.addEventListener("click",()=>{const{textarea:e,timeSigSelect:c,keySelect:o,outputTableContainer:a,legendDiv:d,accentToggles:g}=D,r=e.value,m=c.value,h={timeSignature:m,key:o.value};try{a.innerHTML=`<p><i>${p.t("accent.status.parsing")}</i></p>`,d.innerHTML="";const s=bt(r,m);if(s===null)throw new Error(p.t("accent.error.parseReturnedNull"));a.innerHTML=`<p><i>${p.t("accent.status.calculating")}</i></p>`,E=kt(s,h),a.innerHTML=`<p><i>${p.t("accent.status.generatingTable")}</i></p>`,K(E,g,a,d)}catch(s){console.error("Error during accent analysis process:",s),E=null,a&&(a.innerHTML=`<p class="error-message">${p.t("accent.error.analysisFailed",{message:s.message})}</p>`),d&&(d.innerHTML=`<p><small>${p.t("accent.legend.notAvailable")}</small></p>`)}});const i=t.toggleListContainer;if(i&&t.outputTableContainer&&t.legendDiv?i.addEventListener("change",e=>{e.target.type==="checkbox"&&E&&K(E,D.accentToggles,D.outputTableContainer,D.legendDiv)}):console.warn("Could not attach toggle listener - toggle container or output areas missing."),t.playButton&&t.stopButton&&t.bpmInput){const e=async()=>{await rt(),t.playButton.removeEventListener("click",e)};t.playButton.addEventListener("click",e),t.playButton.addEventListener("click",()=>{if(E&&E.eventData){const c=parseInt(t.bpmInput.value,10)||120;ct(E.eventData,c)}else console.warn("No analysis data available to play.")}),t.stopButton.addEventListener("click",()=>{lt()})}}function Et(t){if(!t){console.error("AccentRecognizer init failed: Container missing.");return}t.innerHTML=mt;const i=ft(t);i&&(At(i),D.outputTableContainer.innerHTML=`<p>${p.t("accent.status.initial")}</p>`,D.legendDiv.innerHTML=`<p><small>${p.t("accent.legend.initial")}</small></p>`,console.log("Accent Recognizer tool initialized (Harmony Row Mode)."))}export{Et as initializeAccentRecognizer};
