const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NoteSequenceRenderer-D2n1X9-V.js","assets/audio-player-C8eAfouR.js","assets/vexflow-helper-BJ71SLUW.js","assets/NoteSequenceRenderer-DUmsE4Ww.css","assets/IntervalCalculator-GkQpQLOr.js","assets/index-BqBuALeO.js","assets/index-CR7BTo9t.js","assets/IntervalCalculator-B-rAmGKc.css","assets/ScaleExplorer-CMeoK9jD.js","assets/ScaleExplorer-Dm0ivcOk.css","assets/KeyRelationshipVisualizer-D1CGPDiG.js","assets/KeyRelationshipVisualizer-B2DgYzhw.css","assets/FreeKontaktLibraries-DopcJEY-.js","assets/FreeKontaktLibraries-BAf9AyHK.css","assets/AccentRecognizer-C2dVgYUu.js","assets/AccentRecognizer-ktLrbVF4.css"])))=>i.map(i=>d[i]);
var f=Object.freeze,b=Object.defineProperty;var p=(e,r)=>f(b(e,"raw",{value:f(r||e.slice())}));(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();const w=[{id:"note-sequence-renderer",name:"音符序列渲染器"},{id:"interval-calculator",name:"音程分析器"},{id:"scale-explorer",name:"音阶浏览器"},{id:"key-relationships",name:"调关系可视化"},{id:"accent-recognizer",name:"重音识别器"},{id:"free-kontakt-libs",name:"免费音乐制作资源"}];function k(e){if(!e){console.error("Error initializing Tool Selector: Container element not provided or not found.");return}e.innerHTML="";const r=document.createElement("ul");w.forEach(t=>{const n=document.createElement("li"),o=document.createElement("a");o.textContent=t.name,o.href=`/#/${t.id}`,o.classList.add("tool-link"),n.appendChild(o),r.appendChild(n)}),e.appendChild(r),console.log("Tool links generated and added to the container."),m(e),window.addEventListener("hashchange",()=>m(e))}function m(e){const r=window.location.hash;e.querySelectorAll(".tool-link").forEach(n=>{n.getAttribute("href")===r?n.classList.add("active"):n.classList.remove("active")})}const z="modulepreload",P=function(e){return"/"+e},v={},d=function(r,t,n){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(t.map(a=>{if(a=P(a),a in v)return;v[a]=!0;const u=a.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${g}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":z,u||(c.as="script"),c.crossOrigin="",c.href=a,s&&c.setAttribute("nonce",s),document.head.appendChild(c),u)return new Promise((T,L)=>{c.addEventListener("load",T),c.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${a}`)))})}))}function l(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&l(s.reason);return r().catch(l)})};function S(e){e&&e instanceof HTMLElement?e.innerHTML="":e?console.warn("clearContainer: Provided element is not an HTMLElement:",e):console.warn("clearContainer: Provided element is null or undefined.")}async function O(e,r){if(!r){console.error("ToolLoader Error: Container element not provided.");return}S(r);try{let t;switch(e){case"note-sequence-renderer":{t=(await d(()=>import("./NoteSequenceRenderer-D2n1X9-V.js"),__vite__mapDeps([0,1,2,3]))).initializeNoteSequenceRenderer;break}case"interval-calculator":{t=(await d(()=>import("./IntervalCalculator-GkQpQLOr.js"),__vite__mapDeps([4,5,6,2,7]))).initializeIntervalCalculator;break}case"scale-explorer":{t=(await d(()=>import("./ScaleExplorer-CMeoK9jD.js"),__vite__mapDeps([8,2,5,9]))).initializeScaleExplorer;break}case"key-relationships":{t=(await d(()=>import("./KeyRelationshipVisualizer-D1CGPDiG.js"),__vite__mapDeps([10,5,11]))).initializeKeyRelationshipVisualizer;break}case"free-kontakt-libs":{t=(await d(()=>import("./FreeKontaktLibraries-DopcJEY-.js"),__vite__mapDeps([12,13]))).initializeFreeKontaktLibraries;break}case"accent-recognizer":{t=(await d(()=>import("./AccentRecognizer-C2dVgYUu.js"),__vite__mapDeps([14,5,6,1,15]))).initializeAccentRecognizer;break}case"key-signature-tool":{t=(await d(()=>Promise.resolve().then(()=>H),void 0)).initializeKeySignatureTool;break}case"transposition-tool":{t=(await d(()=>Promise.resolve().then(()=>$),void 0)).initializeTranspositionTool;break}default:console.warn(`ToolLoader Warn: No loader defined for tool "${e}".`),r.innerHTML=`<p>Error: Tool "${e}" not found or not implemented yet.</p>`;return}typeof t=="function"?(console.log(`Initializing tool: ${e}`),t(r)):(console.error(`ToolLoader Error: Could not find initializer function for tool "${e}".`),r.innerHTML=`<p>Error: Could not initialize tool "${e}".</p>`)}catch(t){console.error(`ToolLoader Error: Failed to load tool "${e}".`,t),r.innerHTML=`<p>Error loading tool "${e}". Check the console for details.</p>`}}const y=document.getElementById("tool-list"),h=document.getElementById("tool-display-area");function C(){A(),R()}function A(){y?(k(y),console.log("Tool selector initialized.")):console.error("Error: Tool list container (#tool-list) not found.")}function E(){const e=window.location.hash,r=e.startsWith("#/")?e.substring(2):null;I(r)}var _;function I(e){h?e?O(e,h):h.innerHTML=""(_||(_=p([`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 更新标题 -->
    <title>Music Theory Toolkit</title>
    <!-- 引入重置和变量样式 -->
    <link rel="stylesheet" href="./src/assets/css/reset.css">
    <link rel="stylesheet" href="./src/assets/css/variables.css">
    <!-- 引入全局样式 -->
    <link rel="stylesheet" href="./src/style.css">
  </head>
  <body>
    <!-- 使用一个容器方便整体布局 -->
    <div id="app" class="app-container">

      <!-- 侧边栏: 用于显示工具列表 -->
      <aside id="tool-selector-container" class="sidebar">
        <h2>工具箱</h2>
        <!-- 工具列表将由 JavaScript (ToolSelector.js) 动态生成 -->
        <nav id="tool-list"></nav>
      </aside>

      <!-- 主内容区: 用于显示当前选中的工具 -->
      <main id="tool-display-area" class="main-content">
        <!-- 经过优化的全新欢迎内容 -->
        <div class="welcome-container">
          <h1>欢迎来到音乐理论学习工具箱</h1>
          <p class="tagline">一个让音乐理论学习更直观、更高效的交互式平台。</p>
          
          <p class="intro-text">
            本工具箱旨在通过程序化计算和可视化，替代学习过程中繁琐的人工查表与推算。我们利用 <strong>Tonal.js</strong> 进行精确的音乐理论计算，并通过 <strong>VexFlow</strong> 将结果渲染成清晰的乐谱，帮助您加深理解，提高学习效率。
          </p>

          <h2>探索我们的工具</h2>

          
          <div class="tool-grid">
            <div class="tool-card">
              <h3><a href="#/note-sequence-renderer" class="button">音符序列渲染器</a></h3>
              <p>将音符序列渲染为可播放、可导出的乐谱，支持自定义设置。</p>
            </div>
            <div class="tool-card">
              <h3><a href="#/interval-calculator" class="button">音程分析器</a></h3>
              <p>计算任意两个音符间的音程，支持声部构建与和弦识别。</p>
            </div>
            <div class="tool-card">
              <h3><a href="#/scale-explorer" class="button">音阶浏览器</a></h3>
              <p>生成并显示各种音阶，提供用法建议并高亮其特征音。</p>
            </div>
            <div class="tool-card">
              <h3><a href="#/key-relationships" class="button">调关系可视化</a></h3>
              <p>使用五度圈等图形，直观展示各调之间的关系。</p>
            </div>
            <div class="tool-card">
              <h3><a href="#/accent-recognizer" class="button">重音识别器</a></h3>
              <p>分析多声部音乐的节拍、时值与音高轮廓，并可视化重音。</p>
            </div>
            <div class="tool-card">
              <h3><a href="#/free-kontakt-libs" class="button">免费音乐制作资源</a></h3>
              <p>精选的免费音色库资源列表，助您创作。</p>
            </div>
          </div>

          <p class="call-to-action">
            准备好了吗？请从左侧边栏选择一个工具开始您的探索之旅！
          </p>

        </div>
      </main>

    </div>

    <!-- JavaScript 入口点 -->
    <script type="module" src="./src/main.js"><\/script>
  </body>
</html>`])))``:console.error("Error: Tool display area (#tool-display-area) not found.")}function R(){E()}window.addEventListener("hashchange",E);document.addEventListener("DOMContentLoaded",()=>{C()});const H=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),$=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
