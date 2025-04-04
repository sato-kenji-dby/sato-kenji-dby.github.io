import{c as y}from"./vexflow-helper-BU9dFy0f.js";const E=`<!-- src/tools/NoteSequenceRenderer/NoteSequenceRenderer.html -->

<div class="tool-section note-sequence-renderer-tool">
    <h3>音符序列渲染器</h3>

    <!-- 主要描述 -->
    <p>
        输入音符序列。用空格分隔表示旋律，直接连接表示和弦。使用 <code>/</code> 指定时值 (h, q, 8, 16, 32, 64) 和附点 (<code>d</code>)，用 <code>r</code> 或 <code>z</code> 表示休止符。
    </p>

    <!-- 示例区域 -->
    <div class="examples-section">
        <p>点击下面的示例可以填充到输入框：</p>
        <!-- 使用无序列表展示示例 -->
        <ul id="note-examples-list" class="examples-list">
            <li>
                <span class="example-input" title="点击填充到输入框">C4/h D4/q r/8 E#4/16d Z/q C4E4G4/w</span>
                <small>(混合音符、休止符、时值、附点、和弦)</small>
            </li>
            <li>
                <span class="example-input" title="点击填充到输入框">G3B3D4/h r/h C5/q C5/q</span>
                <small>(和弦、休止符、重复音符)</small>
            </li>
            <li>
                <span class="example-input" title="点击填充到输入框">A4/8 B4/8 C5/8 D5/8 E5/q F5/q</span>
                <small>(简单旋律，不同时值)</small>
            </li>
        </ul>
    </div>

    <!-- 工具栏选项 (保持英文) -->
    <div class="score-options">
        <div class="option-group">
            <label for="clef-select">谱号:</label>
            <select id="clef-select">
                <option value="treble" selected>高音 (Treble)</option>
                <option value="bass">低音 (Bass)</option>
                <option value="alto">中音 (Alto)</option>
                <option value="tenor">次中音 (Tenor)</option>
            </select>
        </div>
        <div class="option-group">
            <label for="time-signature-select">拍号:</label>
            <select id="time-signature-select">
                <option value="4/4" selected>4/4</option>
                <option value="C">C (Common Time)</option>
                <option value="3/4">3/4</option>
                <option value="2/4">2/4</option>
                <option value="6/8">6/8</option>
                <option value="C|">Cut Time (2/2)</option>
                <!-- **** 添加自由节拍选项 **** -->
                <option value="free">自由节拍 (Free Time)</option>
                <!-- 可以添加更多常用拍号 -->
            </select>
        </div>
    </div>

    <!-- 输入区域 (保持中文标签) -->
    <div class="note-input-area">
        <label for="note-input-textarea">输入音符:</label>
        <textarea id="note-input-textarea" rows="3" placeholder="在此输入或点击上方示例填充..."></textarea>
    </div>

    <!-- 按钮 (保持英文) -->
    <button id="render-notes-button">Render Score</button>

    <!-- VexFlow 显示区域 -->
    <div id="note-sequence-display-area" class="vexflow-score-container" style="min-height: 150px;">
        <p>在此处将显示渲染的乐谱。</p>
    </div>
</div>`;function N(e){const t={textarea:e.querySelector("#note-input-textarea"),renderButton:e.querySelector("#render-notes-button"),displayArea:e.querySelector("#note-sequence-display-area"),clefSelect:e.querySelector("#clef-select"),timeSignatureSelect:e.querySelector("#time-signature-select"),examplesList:e.querySelector("#note-examples-list"),vexFlowTargetId:"note-seq-vexflow-output"};return!t.textarea||!t.renderButton||!t.displayArea||!t.clefSelect||!t.timeSignatureSelect||!t.examplesList?(console.error("NoteSequenceRenderer Error: 找不到所需的 UI 元素 (包括示例列表)。"),null):(t.vexFlowContainer=()=>e.querySelector(`#${t.vexFlowTargetId}`),t)}function F(e){if(!e)return[];const t={w:"w",1:"w",h:"h",2:"h",q:"q",4:"q",8:"8",16:"16",32:"32",64:"64"},n="q",s=/([A-Ga-g])(##|x|#|bb|b)?(\d)/i,o=/([A-Ga-g])(##|x|#|bb|b)?(\d)/gi,a=(i,c,u)=>{let p="";if(c){const f=c.toLowerCase();f==="##"||f==="x"?p="##":f==="bb"?p="bb":f==="#"?p="#":f==="b"&&(p="b")}return/^\d+$/.test(u)?`${i.toLowerCase()}${p}/${u}`:(console.warn(`无效的八度音 "${u}" 在 ${i}${c||""}${u} 中`),null)},v=e.trim().split(/\s+/).filter(i=>i.length>0),l=[];let r=!1;return v.forEach(i=>{if(r)return;let c=i,u=n,p=0;if(i.includes("/")){const d=i.lastIndexOf("/");c=i.substring(0,d);let m=i.substring(d+1).toLowerCase();m.endsWith("d")&&(p=1,m=m.slice(0,-1));const x=t[m];if(x)u=x;else{console.warn(`无法识别的时值 "${i.substring(d+1)}" in "${i}"`),r=!0;return}}const f=c.trim().toLowerCase();if(f==="r"||f==="z")l.push({keys:["b/4"],duration:u+"r",dots:p,isRest:!0});else{let d=[];const m=c.match(s);if(m&&m[0]===c){const[,x,h,b]=m,w=a(x,h,b);w?d.push(w):r=!0}else{let x,h=0,b=!1;for(o.lastIndex=0;(x=o.exec(c))!==null;){if(x.index!==h){r=!0,d=[];break}b=!0;const[,w,C,T]=x,q=a(w,C,T);if(q)d.push(q);else{r=!0,d=[];break}h=o.lastIndex}!r&&h!==c.length&&(r=!0,d=[]),!b&&!r&&(r=!0)}!r&&d.length>0&&l.push({keys:d,duration:u,dots:p,isRest:!1})}}),r?null:l}function $(e){if(!e||typeof e.duration!="string")return console.error("Invalid noteInfo passed to getNoteDurationValue:",e),0;const t=e.duration.replace("r","");let n=0;switch(t){case"w":case"1":n=4;break;case"h":case"2":n=2;break;case"q":case"4":n=1;break;case"8":n=.5;break;case"16":n=.25;break;case"32":n=.125;break;case"64":n=.0625;break;default:return console.warn(`Unknown duration string for value calculation: "${t}" in note:`,e),0}return e.dots&&e.dots>0&&(n*=1.5),n}function R(e){const t=e.toUpperCase();if(t==="FREE")return 1/0;if(t==="C"||t==="C|"||t==="2/2")return 4;if(e.includes("/"))try{const[n,s]=e.split("/"),o=parseInt(n,10),a=parseInt(s,10);if(!isNaN(o)&&!isNaN(a)&&a>0)return o*(4/a)}catch(n){console.error("Error parsing time signature for duration:",n)}return console.warn(`Could not parse time signature "${e}", defaulting to 4/4 measure duration.`),4}function k(e,t){if(t.toUpperCase()==="FREE")return console.log("Free Time selected, skipping barline insertion."),e;if(!e||e.length===0)return[];const n=R(t);if(!isFinite(n)||n<=0)return console.warn("Invalid or non-positive measure duration, skipping barline insertion."),e;const s=[];let o=0;const a=1e-4;return e.forEach((v,l)=>{s.push(v);const r=$(v);o+=r,o>=n-a&&(l<e.length-1&&s.push({type:"barline",barType:"single"}),o-=n,Math.abs(o)<a&&(o=0))}),s}function S(e,t,n,s){let l=60;return e.forEach(r=>{r.type==="barline"?l+=10:l+=45}),l+=20,l=Math.max(300,l),{elementId:s,width:l,height:150,staves:[{clef:t,timeSignature:n.toUpperCase()==="FREE"?void 0:n,notes:e}]}}function g(e,t){e?e.innerHTML=`<p style="color: red;">${t}</p>`:console.error("错误显示失败: 容器无效。",t)}function I(e){const{textarea:t,clefSelect:n,timeSignatureSelect:s,displayArea:o,vexFlowTargetId:a,vexFlowContainer:v}=e;o.innerHTML=`<div id="${a}"></div>`;const l=v();if(!l){g(o,"错误：无法创建 VexFlow 渲染目标。");return}const r=t.value,i=n.value,c=s.value;try{const u=F(r);if(u===null){g(l,"输入解析错误：包含无法识别的格式。请检查音符、休止符、时值或附点。");const d=S([],i,c,a);y(d.elementId,d);return}const p=k(u,c);console.log("Notes with potential barlines:",p);const f=S(p,i,c,a);y(f.elementId,f),console.log("乐谱渲染请求已处理。")}catch(u){console.error("处理渲染请求时发生意外错误:",u),g(l,`渲染时发生内部错误: ${u.message}`)}}function L(e){e.renderButton?e.renderButton.addEventListener("click",()=>I(e)):console.error("无法绑定事件：渲染按钮未找到。")}function A(e){if(!e){console.error("NoteSequenceRenderer 初始化失败: 未提供容器元素。");return}e.innerHTML=E;const t=N(e);if(t){L(t),t.examplesList&&t.textarea?t.examplesList.addEventListener("click",n=>{if(n.target.classList.contains("example-input")){const s=n.target.textContent;t.textarea.value=s,t.textarea.focus(),console.log(`填充示例: ${s}`)}}):console.warn("无法添加示例点击功能：未找到示例列表或输入框。");try{t.displayArea.innerHTML=`<div id="${t.vexFlowTargetId}"><p>请在上方输入音符并点击 'Render Score'。</p></div>`;const n=t.vexFlowContainer();if(n){const s=t.timeSignatureSelect.value,o=S([],t.clefSelect.value,s,t.vexFlowTargetId);n.innerHTML="",y(o.elementId,o)}else g(t.displayArea,"无法创建初始 VexFlow 渲染目标。")}catch(n){console.error("初始渲染失败:",n),g(t.displayArea,`初始渲染失败: ${n.message}`)}console.log("音符序列渲染器工具已初始化 (列表示例布局)。")}}export{A as initializeNoteSequenceRenderer};
