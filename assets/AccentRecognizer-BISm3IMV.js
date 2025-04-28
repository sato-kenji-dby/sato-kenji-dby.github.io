import{n as F,w as Y,d as U,h as tt,x as Z,g as et,y as nt,p as V}from"./index-BqBuALeO.js";import{b as ot,d as it}from"./index-CR7BTo9t.js";import{p as at,i as rt,s as ct}from"./audio-player-D_zjYXo_.js";var J={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function lt(t){const[a,e,r,o]=Z(t);return a===""?q("",t):a==="A"&&o==="ug"?q("","aug"):q(a+e,r+o)}function q(t,a){const e=a.split("/");if(e.length===1)return[t,e[0],""];const[r,o,i,p]=Z(e[1]);return r!==""&&i===""&&p===""?[t,e[0],r+o]:[t,a,""]}function _(t){if(Array.isArray(t))return N(t[1]||"",t[0],t[2]);if(t==="")return J;{const[a,e,r]=lt(t),o=N(e,a,r);return o.empty?N(t):o}}function N(t,a,e){const r=Y(t),o=F(a||""),i=F(e||"");if(r.empty||a&&o.empty||e&&i.empty)return J;const p=U(o.pc,i.pc),g=r.intervals.indexOf(p),c=g>=0,d=c?i:F(""),f=g===-1?NaN:g+1,s=i.pc&&i.pc!==o.pc,h=Array.from(r.intervals);if(c)for(let x=1;x<f;x++){const A=h[0][0],u=h[0][1],n=parseInt(A,10)+7;h.push(`${n}${u}`),h.shift()}else if(s){const x=ot(U(o.pc,i.pc),"8P");x&&h.unshift(x)}const M=o.empty?[]:h.map(x=>tt(o.pc,x));t=r.aliases.indexOf(t)!==-1?t:r.aliases[0];const y=`${o.empty?"":o.pc}${t}${c&&f>1?"/"+d.pc:s?"/"+i.pc:""}`,m=`${a?o.pc+" ":""}${r.name}${c&&f>1?" over "+d.pc:s?" over "+i.pc:""}`;return{...r,name:m,symbol:y,tonic:o.pc,type:r.name,root:d.pc,bass:s?i.pc:"",intervals:h,rootDegree:f,notes:M}}var st={empty:!0,name:"",upper:void 0,lower:void 0,type:void 0,additive:[]},ut=/^(\d*\d(?:\+\d)*)\/(\d+)$/,G=new Map;function X(t){const a=JSON.stringify(t),e=G.get(a);if(e)return e;const r=gt(Q(t));return G.set(a,r),r}function Q(t){if(typeof t=="string"){const[i,p,g]=ut.exec(t)||[];return Q([p,g])}const[a,e]=t,r=+e;if(typeof a=="number")return[a,r];const o=a.split("+").map(i=>+i);return o.length===1?[o[0],r]:[o,r]}var pt=t=>Math.log(t)/Math.log(2)%1===0;function gt([t,a]){const e=Array.isArray(t)?t.reduce((g,c)=>g+c,0):t,r=a;if(e===0||r===0)return st;const o=Array.isArray(t)?`${t.join("+")}/${a}`:`${t}/${a}`,i=Array.isArray(t)?t:[],p=r===4||r===2?"simple":r===8&&e%3===0?"compound":pt(r)?"irregular":"irrational";return{empty:!1,name:o,type:p,upper:e,lower:r,additive:i}}const dt=`<!-- src/tools/AccentRecognizer/AccentRecognizer.html -->

<div class="tool-section accent-recognizer-tool">
    <h3>重音识别器 (Accent Recognizer)</h3>
    <p>
        按声部分行输入音符序列（音高/时值，例如 C4/q D5/8 E5/8）。工具将分析各声部重音以及整体和声进行。
    </p>

    <!-- 配置区域 -->
    <div class="config-section accent-config">
        <h4>配置</h4>
        <div class="option-group">
            <label for="accent-time-sig-select">拍号 (Time Sig):</label>
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
            <label for="accent-key-select">调 (Key):</label>
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
        <div class="option-group accent-toggles-container">
            <label>声部重音显示:</label>
            <div class="accent-toggle-list">
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-metrical" name="accent-toggle" value="metrical" checked>
                    <label for="toggle-metrical">节拍 (Metrical)</label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-durational" name="accent-toggle" value="durational" checked>
                    <label for="toggle-durational">时长 (Durational)</label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-registral" name="accent-toggle" value="registral" checked>
                    <label for="toggle-registral">音域 (Registral)</label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-contour" name="accent-toggle" value="contour" checked>
                    <label for="toggle-contour">轮廓 (Contour)</label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-articulation" name="accent-toggle" value="articulation" checked>
                    <label for="toggle-articulation">演奏法/力度 (Art./Dyn. - Placeholder)</label>
                </div>
                <!-- 移除了和声的 Toggle -->
                <div class="toggle-item">
                    <input type="checkbox" id="toggle-texture" name="accent-toggle" value="texture" checked>
                    <label for="toggle-texture">织体 (Texture - Placeholder)</label>
                </div>
                 <div class="toggle-item">
                    <input type="checkbox" id="toggle-pattern" name="accent-toggle" value="pattern" checked>
                    <label for="toggle-pattern">模式打破 (Pattern - Placeholder)</label>
                </div>
                <!-- Add more toggles as needed -->
            </div>
        </div>
        <!-- Future: Add weight configuration options here -->
    </div>

    <!-- 输入区域 -->
    <div class="input-section accent-input">
        <h4>输入 (按声部分行)</h4>
        <label for="accent-input-textarea">音符序列:</label>
        <textarea id="accent-input-textarea" rows="5" placeholder="每行代表一个声部, 音符用空格分隔, 例:
C4/q E4/q G4/h
G3/w
R/q C3/q R/h"></textarea>
        <p><small>使用标准音高表示法 (C4, Db5) 和时值缩写 (w, h, q, 8, 16...)，用 R 或 Z 表示休止符。</small></p>
    </div>

    <!-- 操作按钮 -->
    <button id="analyze-accents-button">分析重音</button>

    <!-- 输出区域 -->
    <div class="output-section accent-output">
        <h4>分析结果 (表格视图)</h4>
        <div id="accent-legend">
             <p><small>颜色图例将显示在此处。</small></p>
        </div>
        <div id="accent-analysis-table-container">
            <p>点击 "分析重音" 按钮后，结果表格将显示在这里。</p>
        </div>
    </div>
    <button class="play-button">Play</button>
    <button class="stop-button">Stop</button>
    <label for="bpm-input">BPM:</label>
    <input type="number" id="bpm-input" value="120" min="30" max="300" style="width: 60px;">
</div>`;let I=null,H=null;function mt(t){const a={timeSigSelect:t.querySelector("#accent-time-sig-select"),keySelect:t.querySelector("#accent-key-select"),textarea:t.querySelector("#accent-input-textarea"),analyzeButton:t.querySelector("#analyze-accents-button"),outputTableContainer:t.querySelector("#accent-analysis-table-container"),legendDiv:t.querySelector("#accent-legend"),accentToggles:{},toggleListContainer:t.querySelector(".accent-toggle-list"),playButton:t.querySelector(".play-button"),stopButton:t.querySelector(".stop-button"),bpmInput:t.querySelector("#bpm-input")};t.querySelectorAll('.accent-toggle-list input[type="checkbox"]').forEach(i=>{i.value&&(a.accentToggles[i.value]=i)});const r=["timeSigSelect","keySelect","textarea","analyzeButton","outputTableContainer","legendDiv","toggleListContainer"];let o=!1;for(const i of r)a[i]||(i==="toggleListContainer"?console.warn(`AccentRecognizer Warning: Could not find UI element: ${i}`):(console.error(`AccentRecognizer Error: Could not find required UI element: ${i}`),o=!0));return Object.keys(a.accentToggles).length===0&&console.warn("AccentRecognizer Warning: No accent toggle checkboxes found."),o?(t&&(t.innerHTML='<p class="error-message">Error loading tool: UI elements missing.</p>'),null):a}function ft(t,a){if(!t||typeof t!="string"||!a||typeof a!="object"||!a.lower)return null;const e=t.trim().toLowerCase(),r={1:"w",2:"h",4:"q",8:"e",16:"s",32:"t",64:"sf",w:"w",h:"h",q:"q",e:"e",s:"s",t:"t",sf:"sf"};let o=e,i="";for(;o.endsWith(".")||o.endsWith("d");)i+=".",o=o.slice(0,-1);const g=(r[o]||o)+i,c=nt(g);if(!c||c.empty||typeof c.value!="number")return console.warn(`[getDurationInBeats] Tonal could not parse duration symbol: "${g}" (mapped from "${e}")`),null;const d=c.value*a.lower;return isNaN(d)||d<=0?(console.warn(`[getDurationInBeats] Calculated beats is invalid: ${d}`),null):d}function ht(t,a){if(console.log("开始解析输入, 拍号:",a),!t.trim())return[];const e=X(a);if(!e||e.empty||!e.lower)throw new Error(`无效的拍号: ${a}`);const r=t.split(`
`),o=[];let i=0;const p=[];return r.forEach((g,c)=>{const d=c;let f=0;g.trim().split(/\s+/).filter(h=>h.length>0).forEach((h,M)=>{const y=h.split("/"),m=y[0],x=y.length>1?y[1]:"q",A=m.toUpperCase()==="R"||m.toUpperCase()==="Z",u=ft(x,e);if(u===null||u<=0){const l=`Voice ${d+1}, Element ${M+1}: Invalid duration symbol "${x}". Skipping.`;console.warn(l),p.push(l);return}let n={id:i++,startTime:f,duration:u,voiceId:d,originalString:h,velocity:90,articulation:null};if(A)n.type="rest",n.pitch=null,n.midi=null;else{const l=et(m);if(l.empty){const b=`Voice ${d+1}, Note ${M+1}: Invalid pitch "${m}". Skipping.`;console.warn(b),p.push(b);return}n.type="note",n.pitch=l.name,n.midi=l.midi}o.push(n),f+=u})}),p.length>0&&alert(`解析有误 (见控制台)，已跳过无效项。

`+p.slice(0,5).join(`
`)+(p.length>5?`
...`:"")),o.sort((g,c)=>g.startTime-c.startTime||g.voiceId-c.voiceId),console.log("解析并排序后的事件:",o),o}function O(t,a){const e=X(a);if(!e||e.empty||!e.upper||!e.lower||t.startTime<0)return 0;e.lower,e.lower;const r=e.upper,i=t.startTime*e.lower/4%r,p=.01;if(Math.abs(i)<p)return 3;if(e.upper===4&&e.lower===4&&Math.abs(i-2)<p||e.upper===6&&e.lower===8&&Math.abs(i-3)<p)return 2;for(let g=1;g<r;g++)if(Math.abs(i-g)<p){if(e.upper===4&&e.lower===4&&g===2||e.upper===6&&e.lower===8&&g===3)continue;return 1}return 0}function yt(t,a,e){if(t.type==="rest")return 0;const r=t.duration,o=t.voiceId;let i=0;const p=.001;for(let g=a-1;g>=0;g--){const c=e[g];if(c.voiceId===o){if(c.type==="rest")continue;if(c.duration>=r-p)break;i++}}return 1+i}function bt(t,a,e,r){return t.type==="rest"?0:r>=2&&(t.voiceId===a||t.voiceId===e)?1:0}function vt(t,a,e){if(t.type==="rest"||typeof t.midi!="number")return 0;const r=t.voiceId,o=t.midi;let i=null,p=null;for(let s=a-1;s>=0;s--)if(e[s].voiceId===r&&e[s].type==="note"&&typeof e[s].midi=="number"){i=e[s];break}for(let s=a+1;s<e.length;s++)if(e[s].voiceId===r&&e[s].type==="note"&&typeof e[s].midi=="number"){p=e[s];break}if(!i||!p)return 0;const g=i.midi,c=p.midi;let d=0;o>g?d=1:o<g&&(d=-1);let f=0;return c>o?f=1:c<o&&(f=-1),d===0&&f===0?0:d!==f?d*f===-1?2:1:0}function $t(t){return t.articulation==="^"||t.velocity&&t.velocity>110?3:t.articulation===">"||t.velocity&&t.velocity>95?2:t.articulation==="."||t.velocity&&t.velocity>80?1:0}function xt(t,a){return 0}function Mt(t,a){return 0}function St(t,a){const e=[],r=[...new Set(t.map(c=>c.startTime))].sort((c,d)=>c-d),o=.001;let i=null,p=-1,g=0;return r.forEach(c=>{c.toFixed(4);const d=t.filter(u=>u.type==="note"&&u.startTime<=c+o&&u.startTime+u.duration>c+o).map(u=>V(u.pitch)),f=new Set(t.filter(u=>u.startTime<=c+o&&u.startTime+u.duration>c+o).map(u=>u.voiceId)).size;let s=null,h=null;if(d.length>=2){const u=it(d);if(s=u.length>0?u[0]:null,s){const n=t.filter(l=>l.type==="note"&&Math.abs(l.startTime-c)<o).sort((l,b)=>(l.midi||128)-(b.midi||128));if(n.length>0){const l=V(n[0].pitch);_(s).notes.includes(l)||(s=`${s}/${l}`)}h=_(s)}}let M=!1,y="unknown",m=0;g<=2&&f>2&&h&&(M=!0,y="entry",m+=2,console.log(`Harmony Entry at ${c}: ${s}`)),h&&(!i||h.symbol!==i.symbol)&&(i?(M=!0,y="change",m+=1,!i.tonic||h.tonic!==i.tonic?m+=1:h.type!==i.type&&(m+=.5),console.log(`Harmony Change at ${c}: ${(i==null?void 0:i.symbol)||"None"} -> ${s}`)):y!=="entry"&&(M=!0,y="first",m+=1,console.log(`First Harmony at ${c}: ${s}`)));const x=t.filter(u=>u.type==="note"&&Math.abs(u.startTime-c)<o).sort((u,n)=>(u.midi||128)-(n.midi||128))[0];let A=null;if(p>=0){const u=t.filter(n=>n.type==="note"&&Math.abs(n.startTime-p)<o).sort((n,l)=>(n.midi||128)-(l.midi||128))[0];u&&(A=u.pitch)}if(x&&A&&x.pitch!==A&&(M=!0,y==="unknown"&&(y="bass_move"),m+=1,console.log(`Bass Move at ${c}: ${A} -> ${x.pitch}`)),M){const u=e.findIndex(n=>Math.abs(n.time-c)<o);u===-1?e.push({time:c,type:y,strength:Math.max(1,m),symbol:s||"N/A"}):(e[u].strength=Math.max(e[u].strength,m),e[u].type!==y&&e[u].type!=="entry"&&(e[u].type+=`+${y}`))}h&&(i=h,p=c),g=f}),console.log("分析后的和声事件:",e),e}function wt(t,a){console.log("开始计算所有重音...");const e=St(t),r=[...new Set(t.map(c=>c.voiceId))],o=r.length,i=o>0?Math.min(...r):-1,p=o>0?Math.max(...r):-1,g=t.map((c,d,f)=>{let s={};c.type==="note"?s={metrical:O(c,a.timeSignature),durational:yt(c,d,f),registral:bt(c,i,p,o),articulation:$t(c),texture:xt(),contour:vt(c,d,f),pattern:Mt()}:s={metrical:O(c,a.timeSignature),durational:0,registral:0,articulation:0,texture:0,contour:0,pattern:0};const h={metrical:1,durational:1.2,registral:.8,articulation:2.5,texture:.7,contour:1,pattern:1.5};let M=0;for(const y in s){const m=Number(s[y])||0,x=Number(h[y])||1;M+=m*x}return{...c,accents:s,totalStrength:M}});return console.log("非和声重音计算完成."),{message:"重音分析完成 (分离和声行)。",details:"和声分析为初版，部分重音类型为占位符。",eventData:g,harmonicEvents:e}}const D={},W={metrical:3,durational:10,registral:4,articulation:3,texture:3,contour:3,pattern:3,harmonic:5};function K(t,a,e,r){if(!e||!r){console.error("Display containers missing.");return}if(e.innerHTML="",r.innerHTML="",!t||!t.eventData||!t.harmonicEvents){e.innerHTML=`<p>${(t==null?void 0:t.message)||"无分析数据可生成表格。"}</p>`,r.innerHTML="<p><small>无图例可显示。</small></p>";return}const o=t.eventData,i=t.harmonicEvents,p=[...new Set(o.map(n=>n.voiceId))].sort((n,l)=>n-l);if(p.length===0&&i.length===0){e.innerHTML="<p>无声部或和声事件。</p>";return}const g=o.flatMap(n=>[n.startTime,n.startTime+n.duration]).concat(i.map(n=>n.time)),c=[...new Set(g.map(n=>parseFloat(n.toFixed(4))))].sort((n,l)=>n-l),d=[];if(c.length>0){const n=o.map(v=>v.duration).filter(v=>v>0),l=n.length>0?Math.min(...n):.25,b=Math.max(.05,l/4),T=c[c.length-1];for(let v=0;v<=T+b;v+=b)d.push(parseFloat(v.toFixed(4)))}else d.push(0);const f=[...new Set(d)].sort((n,l)=>n-l),s={};o.forEach(n=>{const l=n.startTime.toFixed(4);s[l]||(s[l]=[]),s[l].push(n)});const h={};i.forEach(n=>{const l=n.time.toFixed(4);h[l]=n});const M={};let y=0;Math.max(1,...i.map(n=>n.strength||0)),Math.max(1,...o.map(n=>n.totalStrength||0)),f.forEach(n=>{const l=n.toFixed(4),b=.01,T=o.filter($=>Math.abs($.startTime-n)<b),v=h[l],S=T.reduce(($,C)=>$+(C.totalStrength||0),0),w=(v==null?void 0:v.strength)||0,L=S+w;M[l]=L,L>y&&(y=L)}),y=Math.max(1,y),console.log("计算出的最大压缩强度 (含和声):",y);let m='<table class="accent-result-table">';m+="<thead><tr><th>Element</th>",f.forEach(n=>{m+=`<th>${n.toFixed(2)}</th>`}),m+="</tr></thead><tbody>",m+='<tr class="harmony-row"><th scope="row">Harmony</th>';let x=null,A=0;f.forEach(n=>{const l=n.toFixed(4),b=h[l];let T="",v="",S=`Time: ${n.toFixed(2)}`;if(b){x=b.symbol||"N/A";const w=b.strength||0,L=W.harmonic,$=Math.max(0,Math.min(1,w/L));A=Math.min(Math.max(0,Math.round($*5)),5),T=x,v=`accent-strength-${A}`,S+=` | Harmony: ${T} (Str: ${w.toFixed(1)}, Type: ${b.type})`}else x?(T="-",v="accent-strength-0",S+=` | Continuing: ${x}`):(T="",v="accent-strength-0");m+=`<td class="${v}" title="${S.replace(/"/g,'"')}">${T}</td>`}),m+="</tr>",p.forEach(n=>{m+=`<tr><th scope="row">Voice ${n+1}</th>`;let l=null;f.forEach(b=>{const T=b.toFixed(4);let v="",S="background-color: #fff;",w=`Time: ${b.toFixed(2)}`;const L=.001;let $=null;if(s[T]&&($=s[T].find(C=>C.voiceId===n)),$)if(l=$,$.type==="note"){if(v=$.pitch||"N/A",$.accents){const C=[];for(const k in a)if(a[k]&&a[k].checked&&$.accents[k]!==void 0){const E=$.accents[k]||0,z=W[k]||1,B=Math.max(0,Math.min(1,E/z));B>0&&D[k]&&C.push({type:k,normalizedStrength:B,baseColorHSL:D[k]})}C.length>0?S=`background-image: ${C.map(E=>{const z=E.baseColorHSL,B=.1+E.normalizedStrength*.6,[j,R,P]=(z.h,z.s,z.l,void 0);return`linear-gradient(rgba(${j}, ${R}, ${P}, ${B.toFixed(2)}), rgba(${j}, ${R}, ${P}, ${B.toFixed(2)}))`}).join(", ")}; background-color: #fff;`:S="background-color: #fff;"}else S="background-color: #fff;";if(w=`Start: ${b.toFixed(2)} | Evt ${$.id}: ${$.pitch} (${$.duration.toFixed(2)} beats)`,$.accents){w+=" | Raw Accents: ";let C=[];for(const k in $.accents){const E=$.accents[k];E!=null&&E!==0&&C.push(`${k.substring(0,3)}:${E}`)}w+=C.join(" ")||"None"}}else v="(R)",S="background-color: #f0f0f0; color: #888; font-style: italic;",w=`Rest Start: ${b.toFixed(2)} | Evt ${$.id} (${$.duration.toFixed(2)} beats)`;else l&&b<l.startTime+l.duration-L?l.type==="note"?(v="-",S="background-color: #f8f8f8; color: #bbb;",w=`Continuing: Evt ${l.id} (${l.pitch})`):(v="~",S="background-color: #f0f0f0; color: #ccc; font-style: italic;",w=`Continuing Rest: Evt ${l.id}`):(l=null,v="",S="background-color: #fff;",w=`Time: ${b.toFixed(2)}`);m+=`<td style="${S}" title="${w.replace(/"/g,'"')}">${v}</td>`}),m+="</tr>"}),m+='<tr class="compressed-accent-row"><th scope="row">总重音</th>',f.forEach(n=>{const l=n.toFixed(4),b=M[l]||0,T=b/y*5,S=`accent-strength-${Math.min(Math.max(0,Math.round(T)),5)}`,w=`Time: ${n.toFixed(2)} | 总计强度 (含和声): ${b.toFixed(1)}`;m+=`<td class="${S}" title="${w.replace(/"/g,'"')}"> </td>`}),m+="</tr>",m+="</tbody></table>",e.innerHTML=m;let u='<p>声部重音类型基础色 (勾选以叠加显示):</p><div class="legend-grid">';for(const n in D){if(n==="harmonic")continue;const l=(D[n].h,D[n].s,D[n].l,void 0);u+=`<div class="legend-item"><span class="legend-color-box" style="background-color: rgb(${l[0]}, ${l[1]}, ${l[2]});"></span><span>${n.charAt(0).toUpperCase()+n.slice(1)}</span></div>`}u+="</div>",u+='<hr style="margin: 10px 0; border: none; border-top: 1px solid #eee;">',u+="<p><small>和声行显示和弦符号及其重音强度；总重音行颜色基于该时间点所有事件（含和声）的总强度。</small></p>",r.innerHTML=u}function Tt(t){if(!t||!t.analyzeButton)return;H=t,t.analyzeButton.addEventListener("click",()=>{console.log("Analyze button clicked");const{textarea:e,timeSigSelect:r,keySelect:o,outputTableContainer:i,legendDiv:p,accentToggles:g}=H,c=e.value,d=r.value,f={timeSignature:d,key:o.value};try{i.innerHTML="<p><i>正在解析输入...</i></p>",p.innerHTML="";const s=ht(c,d);if(s===null)throw new Error("解析返回 null。");i.innerHTML="<p><i>正在计算重音分数 (含和声分析)...</i></p>",I=wt(s,f),i.innerHTML="<p><i>正在生成表格...</i></p>",K(I,g,i,p)}catch(s){console.error("Error during accent analysis process:",s),I=null,i&&(i.innerHTML=`<p class="error-message">分析时发生错误: ${s.message}</p>`),p&&(p.innerHTML="<p><small>无法生成图例。</small></p>")}});const a=t.toggleListContainer;if(a&&t.outputTableContainer&&t.legendDiv?a.addEventListener("change",e=>{e.target.type==="checkbox"&&(console.log("Accent toggle changed."),I?K(I,H.accentToggles,H.outputTableContainer,H.legendDiv):console.log("No previous analysis data to redraw colors."))}):console.warn("Could not attach toggle listener - toggle container or output areas missing."),t.playButton&&t.stopButton&&t.bpmInput){const e=async()=>{await rt(),t.playButton.removeEventListener("click",e)};t.playButton.addEventListener("click",e),t.playButton.addEventListener("click",()=>{if(I&&I.eventData){const r=parseInt(t.bpmInput.value,10)||120;at(I.eventData,r)}else console.warn("No analysis data available to play.")}),t.stopButton.addEventListener("click",()=>{ct()})}}function Et(t){if(!t){console.error("AccentRecognizer init failed: Container missing.");return}t.innerHTML=dt;const a=mt(t);a&&(Tt(a),H.outputTableContainer.innerHTML='<p>请输入音符序列并配置参数，然后点击 "分析重音"。</p>',H.legendDiv.innerHTML="<p><small>分析后将显示颜色图例。</small></p>",console.log("Accent Recognizer tool initialized (Harmony Row Mode)."))}export{Et as initializeAccentRecognizer};
