import{c as S}from"./vexflow-helper-BJ71SLUW.js";const F=`<!-- src/tools/NoteSequenceRenderer/NoteSequenceRenderer.html -->

<div class="tool-section note-sequence-renderer-tool">
    <h3>音符序列渲染器</h3>
    <p>
        输入音符序列。用空格分隔表示旋律，直接连接表示和弦。使用 <code>/</code> 指定时值 (h, q, 8, 16, 32, 64) 和附点 (<code>d</code>)，用 <code>r</code> 或 <code>z</code> 表示休止符。
    </p>
    <div class="examples-section">
        <p>点击下面的示例可以填充到输入框：</p>
        <ul id="note-examples-list" class="examples-list">
            <li><span class="example-input" title="点击填充到输入框">C4/h D4/q r/8 E#4/16d Z/q C4E4G4/w</span> <small>(混合)</small></li>
            <li><span class="example-input" title="点击填充到输入框">G3B3D4/h r/h C5/q C5/q</span> <small>(和弦与休止)</small></li>
            <li><span class="example-input" title="点击填充到输入框">A4/8 B4/8 C5/8 D5/8 E5/q F5/q</span> <small>(旋律)</small></li>
        </ul>
    </div>

    <!-- 工具栏选项 -->
    <div class="score-options">
        <div class="option-group">
            <label for="clef-select">Clef:</label>
            <select id="clef-select">
                <option value="treble" selected>Treble</option>
                <option value="bass">Bass</option>
                <option value="alto">Alto</option>
                <option value="tenor">Tenor</option>
            </select>
        </div>
        <!-- **** 新增：调号选择 **** -->
        <div class="option-group">
            <label for="key-signature-select">Key Sig.:</label>
            <select id="key-signature-select">
                <option value="C" selected>C Maj / A min</option>
                <option value="G">G Maj / E min (1♯)</option>
                <option value="D">D Maj / B min (2♯)</option>
                <option value="A">A Maj / F♯ min (3♯)</option>
                <option value="E">E Maj / C♯ min (4♯)</option>
                <option value="B">B Maj / G♯ min (5♯)</option>
                <option value="F#">F♯ Maj / D♯ min (6♯)</option>
                <option value="C#">C♯ Maj / A♯ min (7♯)</option>
                <option value="F">F Maj / D min (1♭)</option>
                <option value="Bb">B♭ Maj / G min (2♭)</option>
                <option value="Eb">E♭ Maj / C min (3♭)</option>
                <option value="Ab">A♭ Maj / F min (4♭)</option>
                <option value="Db">D♭ Maj / B♭ min (5♭)</option>
                <option value="Gb">G♭ Maj / E♭ min (6♭)</option>
                <option value="Cb">C♭ Maj / A♭ min (7♭)</option>
                <!-- 可以添加更多不常用的调号或区分大小调 -->
            </select>
        </div>
        <!-- **** 结束新增 **** -->
        <div class="option-group">
            <label for="time-signature-select">Time Sig.:</label>
            <select id="time-signature-select">
                <option value="4/4" selected>4/4</option>
                <option value="C">C (Common Time)</option>
                <option value="3/4">3/4</option>
                <option value="2/4">2/4</option>
                <option value="6/8">6/8</option>
                <option value="C|">Cut Time (2/2)</option>
                <option value="free">Free Time</option>
            </select>
        </div>
    </div>

    <!-- 输入区域 -->
    <div class="note-input-area">
        <label for="note-input-textarea">输入音符:</label>
        <textarea id="note-input-textarea" rows="3" placeholder="在此输入或点击上方示例填充..."></textarea>
    </div>

    <!-- 按钮 -->
    <button id="render-notes-button">Render Score</button>

    <!-- VexFlow 显示区域 -->
    <div id="note-sequence-display-area" class="vexflow-score-container" style="min-height: 150px;">
        <p>在此处将显示渲染的乐谱。</p>
    </div>
</div>`;function M(e){const t={textarea:e.querySelector("#note-input-textarea"),renderButton:e.querySelector("#render-notes-button"),displayArea:e.querySelector("#note-sequence-display-area"),clefSelect:e.querySelector("#clef-select"),keySignatureSelect:e.querySelector("#key-signature-select"),timeSignatureSelect:e.querySelector("#time-signature-select"),examplesList:e.querySelector("#note-examples-list"),vexFlowTargetId:"note-seq-vexflow-output"};return!t.textarea||!t.renderButton||!t.displayArea||!t.clefSelect||!t.keySignatureSelect||!t.timeSignatureSelect||!t.examplesList?(console.error("NoteSequenceRenderer Error: 找不到所需的 UI 元素 (包括调号选择框)。"),null):(t.vexFlowContainer=()=>e.querySelector(`#${t.vexFlowTargetId}`),t)}function T(e){if(!e)return[];const t={w:"w",1:"w",h:"h",2:"h",q:"q",4:"q",8:"8",16:"16",32:"32",64:"64"},n="q",i=/([A-Ga-g])(##|x|#|bb|b)?(\d)/i,r=/([A-Ga-g])(##|x|#|bb|b)?(\d)/gi,a=(l,s,f)=>{let u="";if(s){const c=s.toLowerCase();c==="##"||c==="x"?u="##":c==="bb"?u="bb":c==="#"?u="#":c==="b"&&(u="b")}return/^\d+$/.test(f)?`${l.toLowerCase()}${u}/${f}`:(console.warn(`无效的八度音 "${f}" 在 ${l}${s||""}${f} 中`),null)},x=e.trim().split(/\s+/).filter(l=>l.length>0),d=[];let o=!1;return x.forEach(l=>{if(o)return;let s=l,f=n,u=0;if(l.includes("/")){const p=l.lastIndexOf("/");s=l.substring(0,p);let m=l.substring(p+1).toLowerCase();m.endsWith("d")&&(u=1,m=m.slice(0,-1));const v=t[m];if(v)f=v;else{console.warn(`无法识别的时值 "${l.substring(p+1)}" in "${l}"`),o=!0;return}}const c=s.trim().toLowerCase();if(c==="r"||c==="z")d.push({keys:["b/4"],duration:f+"r",dots:u,isRest:!0});else{let p=[];const m=s.match(i);if(m&&m[0]===s){const[,v,g,h]=m,y=a(v,g,h);y?p.push(y):o=!0}else{let v,g=0,h=!1;for(r.lastIndex=0;(v=r.exec(s))!==null;){if(v.index!==g){o=!0,p=[];break}h=!0;const[,y,q,E]=v,w=a(y,q,E);if(w)p.push(w);else{o=!0,p=[];break}g=r.lastIndex}!o&&g!==s.length&&(o=!0,p=[]),!h&&!o&&(o=!0)}!o&&p.length>0&&d.push({keys:p,duration:f,dots:u,isRest:!1})}}),o?null:d}function k(e){if(!e||typeof e.duration!="string")return console.error("Invalid noteInfo passed to getNoteDurationValue:",e),0;const t=e.duration.replace("r","");let n=0;switch(t){case"w":case"1":n=4;break;case"h":case"2":n=2;break;case"q":case"4":n=1;break;case"8":n=.5;break;case"16":n=.25;break;case"32":n=.125;break;case"64":n=.0625;break;default:return console.warn(`Unknown duration string for value calculation: "${t}" in note:`,e),0}return e.dots&&e.dots>0&&(n*=1.5),n}function D(e){const t=e.toUpperCase();if(t==="FREE")return 1/0;if(t==="C"||t==="C|"||t==="2/2")return 4;if(e.includes("/"))try{const[n,i]=e.split("/"),r=parseInt(n,10),a=parseInt(i,10);if(!isNaN(r)&&!isNaN(a)&&a>0)return r*(4/a)}catch(n){console.error("Error parsing time signature for duration:",n)}return console.warn(`Could not parse time signature "${e}", defaulting to 4/4 measure duration.`),4}function A(e,t){if(t.toUpperCase()==="FREE")return console.log("Free Time selected, skipping barline insertion."),e;if(!e||e.length===0)return[];const n=D(t);if(!isFinite(n)||n<=0)return console.warn("Invalid or non-positive measure duration, skipping barline insertion."),e;const i=[];let r=0;const a=1e-4;return e.forEach((x,d)=>{i.push(x);const o=k(x);r+=o,r>=n-a&&(d<e.length-1&&i.push({type:"barline",barType:"single"}),r-=n,Math.abs(r)<a&&(r=0))}),i}function C(e,t,n,i,r){let d=60;n&&n!=="C"&&(d+=30+(n.length-1)*8),i&&i.toUpperCase()!=="FREE"&&(d+=30);let o=0;e.forEach(s=>{s.type==="barline"?o+=10:o+=45});let l=d+o+20;return l=Math.max(300,l),{elementId:r,width:l,height:150,staves:[{clef:t,keySignature:n,timeSignature:i.toUpperCase()==="FREE"?void 0:i,notes:e}]}}function b(e,t){e?e.innerHTML=`<p style="color: red;">${t}</p>`:console.error("错误显示失败: 容器无效。",t)}function N(e){const{textarea:t,clefSelect:n,keySignatureSelect:i,timeSignatureSelect:r,displayArea:a,vexFlowTargetId:x,vexFlowContainer:d}=e;a.innerHTML=`<div id="${x}"></div>`;const o=d();if(!o){b(a,"错误：无法创建 VexFlow 渲染目标。");return}const l=t.value,s=n.value,f=i.value,u=r.value;try{const c=T(l);if(c===null){b(o,"输入解析错误：包含无法识别的格式。");const v=C([],s,f,u,x);S(v.elementId,v);return}const p=A(c,u),m=C(p,s,f,u,x);S(m.elementId,m),console.log("乐谱渲染请求已处理 (含调号)。")}catch(c){console.error("处理渲染请求时发生意外错误:",c),b(o,`渲染时发生内部错误: ${c.message}`)}}function R(e){e.renderButton?e.renderButton.addEventListener("click",()=>N(e)):console.error("无法绑定事件：渲染按钮未找到。")}function I(e){if(!e){console.error("NoteSequenceRenderer 初始化失败: 未提供容器元素。");return}e.innerHTML=F;const t=M(e);if(t){R(t),t.examplesList&&t.textarea&&t.examplesList.addEventListener("click",n=>{if(n.target.classList.contains("example-input")){const i=n.target.textContent;t.textarea.value=i,t.textarea.focus(),console.log(`填充示例: ${i}`)}});try{t.displayArea.innerHTML=`<div id="${t.vexFlowTargetId}"><p>请在上方输入音符并点击 'Render Score'。</p></div>`;const n=t.vexFlowContainer();if(n){const i=t.keySignatureSelect.value,r=t.timeSignatureSelect.value,a=C([],t.clefSelect.value,i,r,t.vexFlowTargetId);n.innerHTML="",S(a.elementId,a)}else b(t.displayArea,"无法创建初始 VexFlow 渲染目标。")}catch(n){console.error("初始渲染失败:",n),b(t.displayArea,`初始渲染失败: ${n.message}`)}console.log("音符序列渲染器工具已初始化 (支持调号)。")}}export{I as initializeNoteSequenceRenderer};
