import{i as y,d as q,g as m,m as x}from"./index-DJj0RTVl.js";import{c as b}from"./vexflow-helper-BU9dFy0f.js";const g=`<!-- src/tools/IntervalCalculator/IntervalCalculator.html -->
<div class="tool-section interval-calculator-tool">
    <h3>音程计算器</h3>
    <p>输入两个由空格分隔的音符 (必须带八度, 例如 "C4 G4" 或 "Eb3 B#4")。</p>
  
    <div class="interval-input-area">
      <label for="interval-notes-input">输入音符:</label>
      <input type="text" id="interval-notes-input" placeholder="例如: C4 G4">
      <button id="calculate-interval-button">计算音程</button>
      <!-- 新增：清除按钮 -->
      <button id="clear-interval-button" class="secondary-button">清除</button>
    </div>
  
    <div id="interval-result-area" class="result-display-area">
      <p style="display: none;">计算结果:</p> <!-- Initially hidden -->
      <div id="interval-error-output" class="error-message"></div>
      <div id="interval-name-output"></div>
      <div id="interval-semitones-output"></div>
      <div id="interval-consonance-output"></div>
  
      <!-- 新增：包裹两个选项的容器 -->
      <div class="interval-options-container">
          <div class="option-group">
              <input type="checkbox" id="invert-interval-checkbox">
              <label for="invert-interval-checkbox">显示转位</label>
          </div>
          <!-- 新增：简化音程复选框 -->
          <div class="option-group">
              <input type="checkbox" id="simplify-interval-checkbox">
              <label for="simplify-interval-checkbox">显示简化</label>
          </div>
      </div>
      <!-- 结束新增 -->
  
    </div>
  
    <div class="vexflow-display-container interval-score-container" style="display: none;">
      <div class="score-item">
          <h4 id="harmonic-title">和声音程</h4>
          <div id="harmonic-interval-score" class="vexflow-score-container" style="min-height: 150px;"></div>
      </div>
      <div class="score-item">
          <h4 id="melodic-title">旋律音程</h4>
          <div id="melodic-interval-score" class="vexflow-score-container" style="min-height: 150px;"></div>
      </div>
    </div>
  
  </div>`;var h=y;function I(t){const r=y(t);return r.empty?"":r.simple+r.q}function w(t){const r=y(t);if(r.empty)return"";const i=(7-r.step)%7,e=r.type==="perfectable"?-r.alt:-(r.alt+1);return y({step:i,alt:e,oct:r.oct,dir:r.dir}).name}var L=q;function E(t){const r={inputField:t.querySelector("#interval-notes-input"),calculateButton:t.querySelector("#calculate-interval-button"),clearIntervalButton:t.querySelector("#clear-interval-button"),resultArea:t.querySelector("#interval-result-area"),intervalNameOutput:t.querySelector("#interval-name-output"),semitonesOutput:t.querySelector("#interval-semitones-output"),consonanceOutput:t.querySelector("#interval-consonance-output"),errorOutput:t.querySelector("#interval-error-output"),invertCheckbox:t.querySelector("#invert-interval-checkbox"),simplifyCheckbox:t.querySelector("#simplify-interval-checkbox"),harmonicScoreDiv:t.querySelector("#harmonic-interval-score"),melodicScoreDiv:t.querySelector("#melodic-interval-score"),harmonicTitle:t.querySelector("#harmonic-title"),melodicTitle:t.querySelector("#melodic-title")};return Object.values(r).some(i=>i===null)?(console.error("IntervalCalculator Error: 找不到所需的 UI 元素。"),null):r}function M(t){const r=t.trim();if(!r)return{notes:[],error:"输入不能为空。"};const i=r.split(/\s+/);if(i.length!==2)return{notes:[],error:"请输入两个由空格分隔的音符。"};const e=i[0],n=i[1],o=m(e),c=m(n);return o.empty||o.oct===null?{notes:[],error:`第一个音符 "${e}" 无效或缺少八度。`}:c.empty||c.oct===null?{notes:[],error:`第二个音符 "${n}" 无效或缺少八度。`}:{notes:[o.name,c.name],error:null}}function N(t){if(!t)return"未知";const r=h(t);if(r.empty)return"未知";const i=r.simple,e=r.q;return e==="P"&&[1,4,5].includes(i)?"完全协和":(e==="M"||e==="m")&&[3,6].includes(i)?"不完全协和":"不协和"}function F(t,r){try{const i=L(t,r);if(!i||i==="")return{props:null,error:"无法计算音程，请检查输入。"};const e=h(i);return e.empty?{props:null,error:`无法解析计算出的音程 "${i}"。`}:{props:e,error:null}}catch(i){return console.error("计算音程时出错:",i),{props:null,error:"计算过程中发生错误。"}}}function C(t){const r=m(t);if(r.empty||r.oct===null)return null;let i="";return r.acc==="b"?i="b":r.acc==="#"?i="#":r.acc==="bb"?i="bb":(r.acc==="x"||r.acc==="##")&&(i="##"),`${r.letter.toLowerCase()}${i}/${r.oct}`}function H(t,r){const i=x(t),e=x(r);return i===null||e===null?(console.warn("无法获取 MIDI 值以选择谱号，默认使用高音谱号。",t,r),"treble"):(i+e)/2>=60?"treble":"bass"}function R(t,r,i,e=!1){if(!t){console.error("渲染错误：'elements' 对象无效。");return}if(!t.harmonicScoreDiv){console.error("渲染错误：无法访问 elements.harmonicScoreDiv (值为 undefined)。"),t.errorOutput&&(t.errorOutput.textContent="渲染错误：无法找到和声谱容器。");return}if(!t.melodicScoreDiv){console.error("渲染错误：无法访问 elements.melodicScoreDiv (值为 undefined)。"),t.errorOutput&&(t.errorOutput.textContent="渲染错误：无法找到旋律谱容器。");return}const n=C(r),o=C(i);if(!n||!o){console.error("无法为 VexFlow 准备音符 keys:",r,i),t.errorOutput&&(t.errorOutput.textContent="无法渲染：音符格式无效"),t.harmonicTitle&&(t.harmonicTitle.style.display="none"),t.melodicTitle&&(t.melodicTitle.style.display="none");return}const c=t.harmonicScoreDiv.id,a=t.melodicScoreDiv.id;if(!c){console.error("渲染错误：和声谱容器元素缺少 ID 属性。"),t.errorOutput&&(t.errorOutput.textContent="渲染错误：和声谱容器缺少 ID。");return}if(!a){console.error("渲染错误：旋律谱容器元素缺少 ID 属性。"),t.errorOutput&&(t.errorOutput.textContent="渲染错误：旋律谱容器缺少 ID。");return}t.harmonicTitle&&(t.harmonicTitle.textContent=`和声音程 ${e?"(转位)":""}`,t.harmonicTitle.style.display="block"),t.melodicTitle&&(t.melodicTitle.textContent=`旋律音程 ${e?"(转位)":""}`,t.melodicTitle.style.display="block");const d=H(r,i);t.harmonicScoreDiv&&(t.harmonicScoreDiv.innerHTML=""),t.melodicScoreDiv&&(t.melodicScoreDiv.innerHTML="");const l={elementId:c,width:150,height:150,staves:[{clef:d,notes:[{keys:[n,o].sort(),duration:"w"}]}]},u={elementId:a,width:200,height:150,staves:[{clef:d,notes:[{keys:[n],duration:"h"},{keys:[o],duration:"h"}]}]};try{b(c,l),b(a,u)}catch(s){console.error("渲染 VexFlow 谱例时出错:",s),t.errorOutput&&(t.errorOutput.textContent=`渲染错误: ${s.message}`),t.harmonicTitle&&(t.harmonicTitle.style.display="none"),t.melodicTitle&&(t.melodicTitle.style.display="none")}}function T(t,r,i,e,n){t.intervalNameOutput.textContent="",t.semitonesOutput.textContent="",t.consonanceOutput.textContent="",t.errorOutput.textContent="",t.resultArea.querySelector("p:first-child").style.display="none",t.harmonicScoreDiv.innerHTML="",t.melodicScoreDiv.innerHTML="";const o=t.harmonicScoreDiv.closest(".vexflow-display-container");if(o&&(o.style.display="none"),t.harmonicTitle&&(t.harmonicTitle.style.display="none"),t.melodicTitle&&(t.melodicTitle.style.display="none"),r&&r.error){t.errorOutput.textContent=`错误: ${r.error}`;return}if(!r||r.empty){t.inputField.value.trim()!==""&&(t.errorOutput.textContent="错误: 无法获取有效的音程属性。");return}t.resultArea.querySelector("p:first-child").style.display="block";const c=r.q,a=r.num,l=`${r.dir===-1?"-":""}${c}${a}`,u=r.semitones,s=N(r.name),S=Math.abs(r.num)>8;let p=`音程名称: ${l}`;if(e&&(p+=" (转位)"),n&&S){const O=I(r.name),v=h(O);if(v.empty)p+=" [无法简化]";else{const k=v.q,D=v.num,$=`${v.dir===-1?"-":""}${k}${D}`;p+=` [简化: ${$}]`}}t.intervalNameOutput.textContent=p,t.semitonesOutput.textContent=`半音数量: ${u}${e?" (转位)":""}`,t.consonanceOutput.textContent=`协和性: ${s}${e?" (转位)":""}`,i&&i.length===2?o?(o.style.display="flex",R(t,i[0],i[1],e)):(console.error("未能找到乐谱容器元素 '.vexflow-display-container'"),t.errorOutput.textContent+=" (无法显示乐谱)"):(o&&(o.style.display="none"),t.harmonicTitle&&(t.harmonicTitle.style.display="none"),t.melodicTitle&&(t.melodicTitle.style.display="none"),console.warn("有计算结果但无有效音符传入 displayResult"))}function A(t){t.inputField.value="",t.intervalNameOutput.textContent="",t.semitonesOutput.textContent="",t.consonanceOutput.textContent="",t.errorOutput.textContent="",t.resultArea.querySelector("p:first-child").style.display="none",t.harmonicScoreDiv.innerHTML="",t.melodicScoreDiv.innerHTML="";const r=t.harmonicScoreDiv.closest(".vexflow-display-container");r&&(r.style.display="none"),t.harmonicTitle&&(t.harmonicTitle.style.display="none"),t.melodicTitle&&(t.melodicTitle.style.display="none"),t.invertCheckbox.checked=!1,t.simplifyCheckbox.checked=!1,console.log("输入和结果已清除。")}function f(t){const r=t.inputField.value,i=M(r);let e=null,n=null;const o=t.invertCheckbox.checked,c=t.simplifyCheckbox.checked;if(i.error){T(t,{error:i.error},null,o,c);return}const[a,d]=i.notes;e=[a,d];const l=F(a,d);if(l.error)n={error:l.error};else if(o&&l.props)try{const u=w(l.props.name),s=h(u);s.empty?(console.warn(`无法计算转位: ${l.props.name} -> ${u}`),n={error:"无法计算此音程的转位。"}):n=s}catch(u){console.error("计算转位时出错:",u),n={error:"计算转位时发生错误。"}}else n=l.props;T(t,n,e,o,c)}function V(t){t.calculateButton.addEventListener("click",()=>f(t)),t.inputField.addEventListener("keypress",r=>{r.key==="Enter"&&f(t)}),t.clearIntervalButton.addEventListener("click",()=>A(t)),t.invertCheckbox.addEventListener("change",()=>f(t)),t.simplifyCheckbox.addEventListener("change",()=>f(t)),t.inputField.addEventListener("focus",()=>{try{t.inputField.select()}catch(r){console.warn("无法自动全选输入框内容:",r)}})}function G(t){if(!t)return;t.innerHTML=g;const r=E(t);if(!r)return;V(r);const i=r.harmonicScoreDiv.closest(".vexflow-display-container");i&&(i.style.display="none"),r.harmonicTitle&&(r.harmonicTitle.style.display="none"),r.melodicTitle&&(r.melodicTitle.style.display="none"),console.log("音程计算器工具已初始化 (含清除/转位/简化选项)。")}export{G as initializeIntervalCalculator};
