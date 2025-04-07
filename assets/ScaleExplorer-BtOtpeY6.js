import{c as M}from"./vexflow-helper-BJ71SLUW.js";import{n as z,g as V,s as w}from"./index-CxaYtV7N.js";import{n as I,t as F,g as y,p as b,a as N}from"./index-N7295m2m.js";const O=`<!-- src/tools/ScaleExplorer/ScaleExplorer.html -->
<div class="tool-section scale-explorer-tool">
    <h3>音阶浏览器 (Scale Explorer)</h3>
    <p>选择一个根音和音阶类型，或点击“随机”来探索各种音阶。</p>
  
    <div class="scale-options">
      <div class="option-group">
        <label for="tonic-input">根音 (Tonic):</label>
        <input type="text" id="tonic-input" placeholder="例如: C4, Ab, F#" value="C4">
      </div>
  
      <div class="option-group">
        <label for="scale-select">音阶类型 (Scale Type):</label>
        <select id="scale-select">
          <option value="">-- 加载中 --</option>
        </select>
      </div>
       <div class="option-group">
        <label for="scale-clef-select">谱号 (Clef):</label>
        <select id="scale-clef-select">
          <option value="treble" selected>高音 (Treble)</option>
          <option value="bass">低音 (Bass)</option>
          <option value="alto">中音 (Alto)</option>
          <option value="tenor">次中音 (Tenor)</option>
        </select>
      </div>
      <!-- Buttons Group -->
      <div class="button-group">
          <button id="generate-scale-button">生成音阶</button>
          <button id="randomize-scale-button">随机生成</button> <!-- New Randomize Button -->
      </div>
    </div>
  
    <div class="output-section">
      <!-- Combined Notes Output -->
      <h4>音阶构成音 (Characteristic notes in bold):</h4>
      <div id="scale-notes-output" class="code-output">
        <p>选择参数后点击生成。</p>
      </div>
  
      <!-- Usage Suggestion Area -->
      <h4>调式特点与建议:</h4>
      <div id="scale-usage-output" class="usage-suggestion">
          <p>-</p>
      </div>
  
      <h4>乐谱渲染:</h4>
      <div id="scale-score-output" class="vexflow-score-container" style="min-height: 150px;">
        <p>乐谱将在此处显示。</p>
      </div>
    </div>
  
  </div>`;var A={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function B(e){if(typeof e!="string")return["",""];const t=e.indexOf(" "),n=I(e.substring(0,t));if(n.empty){const l=I(e);return l.empty?["",e.toLowerCase()]:[l.name,""]}const o=e.substring(n.name.length+1).toLowerCase();return[n.name,o.length?o:""]}var j=z;function L(e){const t=Array.isArray(e)?e:B(e),n=I(t[0]).name,o=V(t[1]);if(o.empty)return A;const l=o.name,r=n?o.intervals.map(s=>F(n,s)):[],u=n?n+" "+l:l;return{...o,name:u,type:l,tonic:n,notes:r}}const D={major:[],lydian:["4A"],mixolydian:["7m"],minor:[],dorian:["6M"],phrygian:["2m"],locrian:["2m","5d"],"harmonic minor":["7M"],"melodic minor":["6M","7M"],"major pentatonic":[],"minor pentatonic":["7m"],blues:["3m","5d","7m"],"lydian dominant":["4A","7m"],"phrygian dominant":["2m","3M","7m"]},k={major:"基础的大调音阶，明亮、开朗、稳定。广泛用于各种音乐。",lydian:"比大调更明亮、梦幻，带有#4（增四度）特色音。常用于电影配乐、爵士乐（尤其在Maj7#11和弦上）。",mixolydian:"具有属功能（Dominant）感觉，因为包含小七度(b7)。布鲁斯、摇滚、放克和乡村音乐中常见，常用于属七和弦。",minor:"自然小调，忧郁、悲伤的基调。",dorian:"比自然小调略明亮（因含大六度(6)），带有爵士、民谣或轻微布鲁斯感。常用于爵士乐的 ii-V-I 进行中的 IIm7 和弦。",phrygian:"非常黑暗、具有西班牙/弗拉门戈/中东风情，特色是降二级(b2)。金属乐中也常用。",locrian:"最不稳定、最不协和的调式，包含减五度(b5)。很少作为中心调式，常作为经过或特殊效果。","harmonic minor":"具有鲜明的中东或古典色彩，因其增二度（bVI到VII之间）和导音（大七度(7)）。常用于小调的属和弦（V7）。","melodic minor":"上行时比自然小调明亮（大六(6)、大七(7)），下行时通常还原为自然小调。爵士乐中常用其上行形式（爵士小调）。","major pentatonic":"非常悦耳、开放、常用于民谣、乡村、亚洲音乐。缺少半音使其听起来和谐。","minor pentatonic":"布鲁斯、摇滚乐的基础，声音粗犷、有力。缺少二度和六度。",blues:"在小调五声音阶基础上加入降五度（b5，“蓝调音符”），有时也包含大三度，非常有特色，布鲁斯音乐的核心。","lydian dominant":"Mixolydian 的 #4 版本，既有属功能（b7）又有 Lydian 的明亮感（#4）。常用于爵士乐中的替代属和弦 (Sub V7) 或 Tritone Substitution。","phrygian dominant":"和声小调的第五个模式，具有强烈的西班牙/中东/犹太音乐风味（b2, M3, b7）。"},R=["C4","Db4","D4","Eb4","E4","F4","Gb4","G4","Ab4","A4","Bb4","B4"];let i=[];function G(e){const t={tonicInput:e.querySelector("#tonic-input"),scaleSelect:e.querySelector("#scale-select"),clefSelect:e.querySelector("#scale-clef-select"),generateButton:e.querySelector("#generate-scale-button"),randomizeButton:e.querySelector("#randomize-scale-button"),notesOutput:e.querySelector("#scale-notes-output"),usageOutput:e.querySelector("#scale-usage-output"),scoreOutputContainer:e.querySelector("#scale-score-output"),vexFlowTargetId:"scale-explorer-vexflow-output"};return Object.values(t).some(n=>n==null)?(console.error("ScaleExplorer Error: 找不到所需的 UI 元素。 Check IDs like #randomize-scale-button and #scale-usage-output."),null):(t.vexFlowContainer=()=>e.querySelector(`#${t.vexFlowTargetId}`),t)}function U(e){if(!e||(e.innerHTML="",i=j(),!i||i.length===0))return;i.sort(),i.forEach(n=>{const o=document.createElement("option");o.value=n,o.textContent=n,e.appendChild(o)});const t="major";i.includes(t)?e.value=t:i.length>0&&(e.value=i[0]),e.disabled=!1,console.log(`Scale select populated with ${i.length} scales.`)}function K(e){if(!e||e.length===0)return[];let t=null;return e.map(n=>{const o=y(n);if(o.empty)return console.warn(`无法解析音符: ${n}，跳过。`),null;let l=o.oct;return l==null&&(t===null&&(t=4,console.log("根音未提供八度，渲染时默认使用八度 4")),l=t),{keys:[`${o.pc.toLowerCase().replace("b","b").replace("#","#")}/${l}`],duration:"q"}}).filter(n=>n!==null)}function $(e,t,n){const o=Math.max(300,e.length*50+60);return{elementId:n,width:o,height:150,staves:[{clef:t,notes:e}]}}function m(e,t){e?e.innerHTML=`<p style="color: red; padding: 10px;">错误: ${t}</p>`:console.error("错误显示失败: 容器无效。",t)}function W(e){if(!e||e.empty||!e.type||!e.tonic)return[];const t=D[e.type]||[],n=e.tonic;return t.map(o=>{try{const l=y(n).oct===null?e.notes[0]||"C4":n;let r=N(l,o);if(y(r).oct===null){const u=b(r),s=e.notes.find(S=>b(S)===u);s&&(r=s)}return r}catch(l){return console.warn(`Error transposing tonic ${n} by interval ${o}:`,l),null}}).filter(o=>o!==null&&e.notes.includes(o))}function C(e){const{tonicInput:t,scaleSelect:n,clefSelect:o,notesOutput:l,usageOutput:r,scoreOutputContainer:u,vexFlowTargetId:s,vexFlowContainer:S}=e;l.innerHTML="<p>...</p>",r.innerHTML="<p>...</p>",u.innerHTML=`<div id="${s}"></div>`;const p=S();if(!p){m(u,"无法创建 VexFlow 渲染目标。");return}const g=t.value.trim(),v=n.value,x=o.value;if(!g||!v){m(p,"请输入根音并选择音阶类型。"),r.innerHTML="<p>-</p>",l.innerHTML="<p>-</p>";const a=$([],x,s);M(a.elementId,a);return}try{const a=`${g} ${v}`,d=L(a);if(d.empty){const c=L(v);let f=`无法获取音阶 "${a}". `;c.empty?f+=`无效的音阶类型: "${v}"`:y(g).empty?f+=`无法识别的根音: "${g}"。`:f+="请检查输入。",m(p,f),r.innerHTML="<p>-</p>",l.innerHTML="<p>-</p>";const h=$([],x,s);M(h.elementId,h);return}const H=W(d),E=k[d.type]||"暂无该调式的建议信息。",q=d.notes.map(c=>H.some(h=>b(h)===b(c))?`<span class="characteristic-note">${c}</span>`:c).join(" ");l.innerHTML=`<pre><code>${q}</code></pre>`,r.innerHTML=`<p>${E}</p>`;const T=K(d.notes);if(T.length===0&&d.notes.length>0)m(p,"成功获取音阶音符，但在转换为 VexFlow 格式时出错。");else if(T.length===0)m(p,"音阶不包含可渲染的音符。");else{const c=$(T,x,s);M(c.elementId,c),console.log(`音阶 "${a}" 渲染成功 (incl. enhancements).`)}}catch(a){console.error("处理音阶生成请求时发生错误:",a),m(p,`生成音阶时出错: ${a.message}`),r.innerHTML="<p>-</p>",l.innerHTML="<p>-</p>"}}function J(e){const{tonicInput:t,scaleSelect:n}=e;if(!i||i.length===0){console.error("Cannot randomize: Scale names not available."),alert("音阶列表尚未加载完成，无法随机。");return}const o=w(R)[0],l=w(i)[0];t.value=o,n.value=l,C(e),console.log(`Randomized to: ${o} ${l}`)}function P(e){e.generateButton.addEventListener("click",()=>C(e)),e.randomizeButton.addEventListener("click",()=>J(e))}function Z(e){if(!e){console.error("ScaleExplorer 初始化失败: 未提供容器元素。");return}e.innerHTML=O;const t=G(e);t&&(U(t.scaleSelect),P(t),C(t),console.log("Scale Explorer 工具已初始化 (with enhancements)."))}export{Z as initializeScaleExplorer};
