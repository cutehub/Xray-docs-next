import{d as n}from"./app.baa21783.js";const s={},a=n('<h1 id="多文件配置" tabindex="-1"><a class="header-anchor" href="#多文件配置" aria-hidden="true">#</a> 多文件配置</h1><p>Xray 程序支持使用多个配置文件。</p><p>多配置文件的主要作用在于分散不同作用模块配置，便于管理和维护。</p><p>该功能主要考虑是为了丰富 Xray 的生态链，比如对于 GUI 的客户端，一般只实现节点选择等固定的功能，对于太复杂的配置难以图形化实现；只需留一个 <code>confdir</code> 的自定义配置目录供配置复杂的功能；对于服务器的部署脚本，只需往 <code>confdir</code> 添加文件即可实现配置多种协议。</p><h2 id="多文件启动" tabindex="-1"><a class="header-anchor" href="#多文件启动" aria-hidden="true">#</a> 多文件启动</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>启动信息中会提示依次读入的每个配置文件，留意启动信息是否符合你预设的顺序。</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ xray run -confdir /etc/xray/confs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>也可使用 <code>Xray.location.confdir</code> 或 <code>Xray_LOCATION_CONFDIR</code> 指定 <code>confdir</code>。</p><p>参数 <code>-confdir</code> 的作用优先于环境变量，如果参数指定了有效的目录则不再读取环境变量中的路径。</p><h2 id="规则说明" tabindex="-1"><a class="header-anchor" href="#规则说明" aria-hidden="true">#</a> 规则说明</h2><h3 id="普通对象" tabindex="-1"><a class="header-anchor" href="#普通对象" aria-hidden="true">#</a> 普通对象（<code>{}</code>）</h3><p><strong>在 json 的顶级对象当中，后者覆盖或补充前者。</strong></p><p>比如：</p><ul><li>base.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;transport&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>outbounds.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>以多配置启动 Xray：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ xray run -confdir /etc/xray/confs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这两个配置文件的就等效于合成一起的整配置。当需要修改出口节点，只需要修改 <code>outbounds.json</code> 内容。</p><p>如果需要改编日志 log 的级别，也不需要改 <code>base.json</code>，只需后续增加一个配置：</p><ul><li>debuglog.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debug&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>启动顺序放置在 base 后，即可输出 debug 级别的日志</p><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组（<code>[]</code>）</h3><p>在 json 配置中的<code>inbounds</code>和<code>outbounds</code>是数组结构，他们有特殊的规则：</p><ul><li>当配置中的数组元素有 2 或以上，覆盖前者的 inbounds/oubounds；</li><li>当配置中的数组元素只有 1 个时，查找原有<code>tag</code>相同的元素进行覆盖；若无法找到： <ul><li>对于 inbounds，添加至最后（inbounds 内元素顺序无关）</li><li>对于 outbounds，添加至最前（outbounds 默认首选出口）；但如果文件名含有 tail（大小写均可），添加至最后。</li></ul></li></ul><p>借助多配置，可以很方便为原有的配置添加不同协议的 inbound，而不必修改原有配置。</p><p>以下例子不是有效配置，只为展示上述规则。</p><ul><li>000.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>001.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>002.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">4321</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>三个配置将会合成为：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">4321</span> <span class="token comment">// &lt; 002顺序在000后，因此覆盖tag为socks的inbound端口为4321</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="推荐的多文件列表" tabindex="-1"><a class="header-anchor" href="#推荐的多文件列表" aria-hidden="true">#</a> 推荐的多文件列表</h2><p>执行：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">BASE</span> <span class="token keyword">in</span> 00_log 01_api 02_dns 03_routing 04_policy 05_inbounds 06_outbounds 07_transport 08_stats 09_reverse<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;{}&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;/etc/Xray/<span class="token variable">$BASE</span>.json&quot;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>或</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">BASE</span> <span class="token keyword">in</span> 00_log 01_api 02_dns 03_routing 04_policy 05_inbounds 06_outbounds 07_transport 08_stats 09_reverse<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;{}&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;/usr/local/etc/Xray/<span class="token variable">$BASE</span>.json&quot;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">.</span>\n├── 00_log.json\n├── 01_api.json\n├── 02_dns.json\n├── 03_routing.json\n├── 04_policy.json\n├── 05_inbounds.json\n├── 06_outbounds.json\n├── 07_transport.json\n├── 08_stats.json\n└── 09_reverse.json\n\n<span class="token number">0</span> directories, <span class="token number">10</span> files\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',43);s.render=function(n,s){return a};export default s;
