import{c as M}from"./vexflow-helper-BJ71SLUW.js";import{n as j,a as $,g as O,t as A,c as F,r as N,b as w,i as k,d as z,e as v,p as x,s as I,f as B}from"./index-DriAlrgb.js";var V={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function R(e){if(typeof e!="string")return["",""];const n=e.indexOf(" "),t=$(e.substring(0,n));if(t.empty){const l=$(e);return l.empty?["",e.toLowerCase()]:[l.name,""]}const o=e.substring(t.name.length+1).toLowerCase();return[t.name,o.length?o:""]}var G=j;function C(e){const n=Array.isArray(e)?e:R(e),t=$(n[0]).name,o=O(n[1]);if(o.empty)return V;const l=o.name,c=t?o.intervals.map(r=>A(t,r)):[],a=t?t+" "+l:l;return{...o,name:a,type:l,tonic:t,notes:c}}function U(e,n={}){const t=F(e),o=$(n.tonic??e[0]??""),l=o.chroma;if(l===void 0)return[];const c=t.split("");c[l]="1";const a=N(l,c).join(""),r=w().find(s=>s.chroma===a),d=[];return r&&d.push(o.name+" "+r.name),n.match==="exact"||K(a).forEach(s=>{d.push(o.name+" "+s)}),d}function K(e){const n=k(e)?e:C(e).chroma,t=z(n);return w().filter(o=>t(o.chroma)).map(o=>o.name)}const P=`<!-- src/tools/ScaleExplorer/ScaleExplorer.html -->
<div class="tool-section scale-explorer-tool">

  <!-- START: Section 1 - Scale Generation/Exploration (Collapsible) -->
  <div class="collapsible-section">
      <button type="button" class="collapsible-header active"> <!-- Default active/expanded -->
          音阶生成与浏览 (Scale Generation & Explorer)
          <span class="toggle-icon">▼</span> <!-- Indicator -->
      </button>
      <div class="collapsible-content" style="display: block;"> <!-- Default visible -->
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
                <button id="randomize-scale-button">随机生成</button>
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
      </div> <!-- End .collapsible-content -->
  </div> <!-- End .collapsible-section -->
  <!-- END: Section 1 -->


  <!-- START: Section 2 - Scale Detection (Collapsible) -->
  <div class="collapsible-section">
      <button type="button" class="collapsible-header"> <!-- Default inactive/collapsed -->
          音阶识别 (Scale Detection)
           <span class="toggle-icon">▶</span> <!-- Indicator -->
      </button>
      <div class="collapsible-content"> <!-- Default hidden -->
          <p>输入一组音符 (用空格分隔，例如 "C4 D# F A")，系统将尝试识别包含这些音符的可能音阶。</p>
          <div class="scale-detection-input-area">
              <label for="note-detection-textarea">输入音符:</label>
              <textarea id="note-detection-textarea" rows="2" placeholder="例如: G3 Bb3 C#4 F4"></textarea>
          </div>
          <button id="detect-scale-button">识别音阶</button>

          <div id="scale-detection-output" class="code-output" style="margin-top: 15px;">
              <p>在此处显示识别结果。</p>
          </div>
      </div> <!-- End .collapsible-content -->
  </div> <!-- End .collapsible-section -->
  <!-- END: Section 2 -->

</div>`,W={major:[],lydian:["4A"],mixolydian:["7m"],minor:[],dorian:["6M"],phrygian:["2m"],locrian:["2m","5d"],"harmonic minor":["7M"],"melodic minor":["6M","7M"],"major pentatonic":[],"minor pentatonic":["7m"],blues:["3m","5d","7m"],"lydian dominant":["4A","7m"],"phrygian dominant":["2m","3M","7m"]},J={major:"基础的大调音阶，明亮、开朗、稳定。广泛用于各种音乐。",lydian:"比大调更明亮、梦幻，带有#4（增四度）特色音。常用于电影配乐、爵士乐（尤其在Maj7#11和弦上）。",mixolydian:"具有属功能（Dominant）感觉，因为包含小七度(b7)。布鲁斯、摇滚、放克和乡村音乐中常见，常用于属七和弦。",minor:"自然小调，忧郁、悲伤的基调。",dorian:"比自然小调略明亮（因含大六度(6)），带有爵士、民谣或轻微布鲁斯感。常用于爵士乐的 ii-V-I 进行中的 IIm7 和弦。",phrygian:"非常黑暗、具有西班牙/弗拉门戈/中东风情，特色是降二级(b2)。金属乐中也常用。",locrian:"最不稳定、最不协和的调式，包含减五度(b5)。很少作为中心调式，常作为经过或特殊效果。","harmonic minor":"具有鲜明的中东或古典色彩，因其增二度（bVI到VII之间）和导音（大七度(7)）。常用于小调的属和弦（V7）。","melodic minor":"上行时比自然小调明亮（大六(6)、大七(7)），下行时通常还原为自然小调。爵士乐中常用其上行形式（爵士小调）。","major pentatonic":"非常悦耳、开放、常用于民谣、乡村、亚洲音乐。缺少半音使其听起来和谐。","minor pentatonic":"布鲁斯、摇滚乐的基础，声音粗犷、有力。缺少二度和六度。",blues:"在小调五声音阶基础上加入降五度（b5，“蓝调音符”），有时也包含大三度，非常有特色，布鲁斯音乐的核心。","lydian dominant":"Mixolydian 的 #4 版本，既有属功能（b7）又有 Lydian 的明亮感（#4）。常用于爵士乐中的替代属和弦 (Sub V7) 或 Tritone Substitution。","phrygian dominant":"和声小调的第五个模式，具有强烈的西班牙/中东/犹太音乐风味（b2, M3, b7）。"},Q=["C4","Db4","D4","Eb4","E4","F4","Gb4","G4","Ab4","A4","Bb4","B4"];let h=[];function X(e){const n={tonicInput:e.querySelector("#tonic-input"),scaleSelect:e.querySelector("#scale-select"),clefSelect:e.querySelector("#scale-clef-select"),generateButton:e.querySelector("#generate-scale-button"),randomizeButton:e.querySelector("#randomize-scale-button"),notesOutput:e.querySelector("#scale-notes-output"),usageOutput:e.querySelector("#scale-usage-output"),scoreOutputContainer:e.querySelector("#scale-score-output"),vexFlowTargetId:"scale-explorer-vexflow-output",detectionTextarea:e.querySelector("#note-detection-textarea"),detectButton:e.querySelector("#detect-scale-button"),detectionOutput:e.querySelector("#scale-detection-output"),collapsibleHeaders:e.querySelectorAll(".collapsible-header")},o=["#tonic-input","#scale-select","#scale-clef-select","#generate-scale-button","#randomize-scale-button","#scale-notes-output","#scale-usage-output","#scale-score-output","#note-detection-textarea","#detect-scale-button","#scale-detection-output"].filter(l=>!e.querySelector(l));return o.length>0?(console.error(`ScaleExplorer Error: 找不到以下 UI 元素: ${o.join(", ")}`),null):(n.vexFlowContainer=()=>e.querySelector(`#${n.vexFlowTargetId}`),n)}function Y(e){if(!e||(e.innerHTML="",h=G(),!h||h.length===0))return;h.sort(),h.forEach(t=>{const o=document.createElement("option");o.value=t,o.textContent=t,e.appendChild(o)});const n="major";h.includes(n)?e.value=n:h.length>0&&(e.value=h[0]),e.disabled=!1,console.log(`Scale select populated with ${h.length} scales.`)}function Z(e){if(!e||e.length===0)return[];let n=null;return e.map(t=>{const o=v(t);if(o.empty)return console.warn(`无法解析音符: ${t}，跳过。`),null;let l=o.oct;return l==null&&(n===null&&(n=4,console.log("根音未提供八度，渲染时默认使用八度 4")),l=n),{keys:[`${o.pc.toLowerCase().replace("b","b").replace("#","#")}/${l}`],duration:"q"}}).filter(t=>t!==null)}function L(e,n,t){const o=Math.max(300,e.length*50+60);return{elementId:t,width:o,height:150,staves:[{clef:n,notes:e}]}}function y(e,n){e?e.innerHTML=`<p style="color: red; padding: 10px;">错误: ${n}</p>`:console.error("错误显示失败: 容器无效。",n)}function _(e){if(!e||e.empty||!e.type||!e.tonic)return[];const n=W[e.type]||[],t=e.tonic;return n.map(o=>{try{const l=v(t).oct===null?e.notes[0]||"C4":t;let c=B(l,o);if(v(c).oct===null){const a=x(c),r=e.notes.find(d=>x(d)===a);r&&(c=r)}return c}catch(l){return console.warn(`Error transposing tonic ${t} by interval ${o}:`,l),null}}).filter(o=>o!==null&&e.notes.includes(o))}function H(e){const{tonicInput:n,scaleSelect:t,clefSelect:o,notesOutput:l,usageOutput:c,scoreOutputContainer:a,vexFlowTargetId:r,vexFlowContainer:d}=e;l.innerHTML="<p>...</p>",c.innerHTML="<p>...</p>",a.innerHTML=`<div id="${r}"></div>`;const s=d();if(!s){y(a,"无法创建 VexFlow 渲染目标。");return}const g=n.value.trim(),b=t.value,m=o.value;if(!g||!b){y(s,"请输入根音并选择音阶类型。"),c.innerHTML="<p>-</p>",l.innerHTML="<p>-</p>";const p=L([],m,r);M(p.elementId,p);return}try{const p=`${g} ${b}`,i=C(p);if(i.empty){const f=C(b);let S=`无法获取音阶 "${p}". `;f.empty?S+=`无效的音阶类型: "${b}"`:v(g).empty?S+=`无法识别的根音: "${g}"。`:S+="请检查输入。",y(s,S),c.innerHTML="<p>-</p>",l.innerHTML="<p>-</p>";const T=L([],m,r);M(T.elementId,T);return}const u=_(i),q=J[i.type]||"暂无该调式的建议信息。",D=i.notes.map(f=>u.some(T=>x(T)===x(f))?`<span class="characteristic-note">${f}</span>`:f).join(" ");l.innerHTML=`<pre><code>${D}</code></pre>`,c.innerHTML=`<p>${q}</p>`;const E=Z(i.notes);if(E.length===0&&i.notes.length>0)y(s,"成功获取音阶音符，但在转换为 VexFlow 格式时出错。");else if(E.length===0)y(s,"音阶不包含可渲染的音符。");else{const f=L(E,m,r);M(f.elementId,f),console.log(`音阶 "${p}" 渲染成功 (incl. enhancements).`)}}catch(p){console.error("处理音阶生成请求时发生错误:",p),y(s,`生成音阶时出错: ${p.message}`),c.innerHTML="<p>-</p>",l.innerHTML="<p>-</p>"}}function ee(e){const{tonicInput:n,scaleSelect:t}=e;if(!h||h.length===0){console.error("Cannot randomize: Scale names not available."),alert("音阶列表尚未加载完成，无法随机。");return}const o=I(Q)[0],l=I(h)[0];n.value=o,t.value=l,H(e),console.log(`Randomized to: ${o} ${l}`)}function te(e){const{detectionTextarea:n,detectionOutput:t}=e,o=new Set(["major","minor","dorian","phrygian","lydian","mixolydian","locrian","major pentatonic","minor pentatonic","blues","harmonic minor","melodic minor","lydian dominant","phrygian dominant"]),l=n.value.trim();if(t.innerHTML="<p>正在识别...</p>",!l){t.innerHTML="<p>请输入至少一个音符进行识别。</p>";return}const c=l.split(/\s+/).filter(s=>s.length>0);if(c.length===0){t.innerHTML="<p>输入无效，请用空格分隔音符。</p>";return}const a=c.filter(s=>!v(s).empty),r=c.filter(s=>v(s).empty);let d="";if(r.length>0&&(d=`<p style="color: orange;">警告：以下输入无法识别为有效音符，已忽略：${r.join(", ")}</p>`,a.length===0)){t.innerHTML=d+'<p style="color: red;">没有提供有效的音符进行识别。</p>';return}if(a.length===0&&r.length===0){t.innerHTML="<p>请输入音符。</p>";return}try{const s=[...new Set(a.map(x).filter(i=>i))];if(s.length===0){t.innerHTML=d+'<p style="color: red;">输入中未找到有效的音高类别。</p>';return}let g=[];s.forEach(i=>{const u=U(a,{tonic:i});u&&u.length>0&&g.push(...u)});const b=[...new Set(g)];b.sort();const m=[],p=[];if(b.forEach(i=>{try{const u=C(i);!u.empty&&u.type&&o.has(u.type)?m.push(i):p.push(i)}catch(u){console.warn(`处理音阶 "${i}" 时出错，归入“其他”。错误: ${u}`),p.push(i)}}),m.length===0&&p.length===0)t.innerHTML=d+`<p>对于音符 [${a.join(", ")}]，即使尝试将每个音符作为根音，也未找到匹配的已知音阶。</p>`;else{let i=d+`<p>尝试将每个输入音符 [${s.join(", ")}] 作为根音进行识别，包含音符 [${a.join(", ")}] 的可能音阶如下：</p>`;m.length>0?(i+="<h6>常用调式/音阶:</h6><ul>",m.forEach(u=>{i+=`<li>${u}</li>`}),i+="</ul>"):i+="<h6>常用调式/音阶:</h6><p><small>未在常用列表中找到匹配项。</small></p>",p.length>0?(m.length>0&&(i+='<hr style="margin: 10px 0; border-top: 1px dashed #ccc;">'),i+="<h6>其他匹配音阶:</h6><ul>",p.forEach(u=>{i+=`<li>${u}</li>`}),i+="</ul>"):m.length>0&&(i+='<hr style="margin: 10px 0; border-top: 1px dashed #ccc;">',i+="<h6>其他匹配音阶:</h6><p><small>未在其他音阶中找到更多匹配项。</small></p>"),i+='<p style="margin-top:15px;"><small>注意: 此列表包含所有已知且包含输入音符的音阶，不一定是精确匹配。</small></p>',t.innerHTML=i}console.log(`Scale detection for notes [${a.join(", ")}] completed (checked ${s.length} potential tonics). Found: ${m.length} priority, ${p.length} other scales.`)}catch(s){console.error("处理音阶识别请求时发生错误:",s),y(t,`识别音阶时出错: ${s.message}`)}}function ne(e){const n=e.currentTarget,t=n.nextElementSibling,o=n.querySelector(".toggle-icon");if(!t||!t.classList.contains("collapsible-content")||!o){console.error("Collapsible structure error for header:",n);return}n.classList.toggle("active"),t.style.display==="block"?(t.style.display="none",o.textContent="▶"):(t.style.display="block",o.textContent="▼")}function oe(e){e.generateButton.addEventListener("click",()=>H(e)),e.randomizeButton.addEventListener("click",()=>ee(e)),e.detectButton.addEventListener("click",()=>te(e)),e.collapsibleHeaders?e.collapsibleHeaders.forEach(n=>{n.addEventListener("click",ne)}):console.warn("No collapsible headers found to bind events to.")}function se(e){if(!e){console.error("ScaleExplorer 初始化失败: 未提供容器元素。");return}e.innerHTML=P;const n=X(e);n&&(Y(n.scaleSelect),oe(n),H(n),n.detectionOutput&&(n.detectionOutput.innerHTML="<p>在此处显示识别结果。</p>"),console.log("Scale Explorer 工具已初始化 (with collapsible sections)."))}export{se as initializeScaleExplorer};
