import{r as s,o as n,c as a,a as e,b as o,w as t,F as p,e as c,d as u}from"./app.baa21783.js";const r={},l=e("h1",{id:"vmess",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vmess","aria-hidden":"true"},"#"),c(" VMess")],-1),i=c("VMess"),d=c(" 是一个加密传输协议，通常作为 Xray 客户端和服务器之间的桥梁。"),b=u('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>VMess 依赖于系统时间，请确保使用 Xray 的系统 UTC 时间误差在 90 秒之内，时区无关。在 Linux 系统中可以安装<code>ntp</code>服务来自动同步系统时间。</p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">37192</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p><code>vnext</code>：[ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>一个数组，包含一组的服务端配置.</p><p>其中每一项是一个服务端配置<a href="#serverobject">ServerObject</a>。</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">37192</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>服务端地址，支持 IP 地址或者域名。</p><blockquote><p><code>port</code>: number</p></blockquote><p>服务端监听的端口号, 必填。</p><blockquote><p><code>users</code>: [ <a href="#userobject">UserObject</a> ]</p></blockquote><p>一个数组，代表一组服务端认可的用户.</p><p>其中每一项是一个用户<a href="#userobject">UserObject</a>。</p><h4 id="userobject" tabindex="-1"><a class="header-anchor" href="#userobject" aria-hidden="true">#</a> UserObject</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>id</code>：string</p></blockquote><p>Vmess 的用户 ID，可以是任意小于 30 字节的字符串, 也可以是一个合法的 UUID.</p><p>自定义字符串和其映射的 UUID 是等价的, 这意味着你将可以这样在配置文件中写 id 来标识同一用户,即</p><ul><li>写 <code>&quot;id&quot;: &quot;我爱🍉老师1314&quot;</code>,</li><li>或写 <code>&quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</code> (此 UUID 是 <code>我爱🍉老师1314</code> 的 UUID 映射)</li></ul>',21),q=c("其映射标准在 "),k={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},m=c("VLESS UUID 映射标准：将自定义字符串映射为一个 UUIDv5"),h=u('<p>你可以使用命令 <code>xray uuid -i &quot;自定义字符串&quot;</code> 生成自定义字符串所映射的的 UUID, 也可以使用命令 <code>xray uuid</code> 生成随机的 UUID。</p><blockquote><p><code>alterId</code>：number</p></blockquote><p>为了进一步防止被探测，一个用户可以在主 ID 的基础上，再额外生成多个 ID。这里只需要指定额外的 ID 的数量，推荐值为 0 代表启用 VMessAEAD。 最大值 65535。这个值不能超过服务器端所指定的值。</p><p>不指定的话，默认值是 0。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>客户端 AlterID 设置为 0 代表启用 VMessAEAD ；服务端为自动适配，可同时兼容启用和未开启 VMessAEAD 的客户端。 客户端可通过设置环境变量 <code>Xray_VMESS_AEAD_DISABLED=true</code> 强行禁用 VMessAEAD</p></div><blockquote><p><code>level</code>: number</p></blockquote>',6),v=c("用户等级，连接会使用这个用户等级对应的 "),y=c("本地策略"),g=c("。"),j=c("level 的值, 对应 "),D=c("policy"),f=c(" 中 "),I=e("code",null,"level",-1),U=c(" 的值。 如不指定, 默认为 0。"),A=u('<blockquote><p><code>security</code>: &quot;aes-128-gcm&quot; | &quot;chacha20-poly1305&quot; | &quot;auto&quot; | &quot;none&quot; | &quot;zero&quot;</p></blockquote><p>加密方式，客户端将使用配置的加密方式发送数据，服务器端自动识别，无需配置。</p><ul><li><code>&quot;aes-128-gcm&quot;</code>：推荐在 PC 上使用</li><li><code>&quot;chacha20-poly1305&quot;</code>：推荐在手机端使用</li><li><code>&quot;auto&quot;</code>：默认值，自动选择（运行框架为 AMD64、ARM64 或 s390x 时为 aes-128-gcm 加密方式，其他情况则为 Chacha20-Poly1305 加密方式）</li><li><code>&quot;none&quot;</code>：不加密</li></ul><ul><li><code>&quot;zero&quot;</code>：不加密，也不进行消息认证 (v1.4.0+)</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>推荐使用<code>&quot;auto&quot;</code>加密方式，这样可以永久保证安全性和兼容性。</p><p><code>&quot;none&quot;</code> 伪加密方式会计算并验证数据包的校验数据，由于认证算法没有硬件支持，在部分平台可能速度比有硬件加速的 <code>&quot;aes-128-gcm&quot;</code> 还慢。</p><p><code>&quot;zero&quot;</code> 伪加密方式不会加密消息也不会计算数据的校验数据，因此理论上速度会高于其他任何加密方式。实际速度可能受到其他因素影响。</p><p>不推荐在未开启 TLS 加密并强制校验证书的情况下使用 <code>&quot;none&quot;</code> <code>&quot;zero&quot;</code> 伪加密方式。 如果使用 CDN 或其他会解密 TLS 的中转平台或网络环境建立连接，不建议使用 <code>&quot;none&quot;</code> <code>&quot;zero&quot;</code> 伪加密方式。</p><p>无论使用哪种加密方式， VMess 的包头都会受到加密和认证的保护。</p></div>',5);r.render=function(c,u){const r=s("RouterLink"),x=s("OutboundLink");return n(),a(p,null,[l,e("p",null,[o(r,{to:"/en/development/protocols/vmess.html"},{default:t((()=>[i])),_:1}),d]),b,e("p",null,[q,e("a",k,[m,o(x)])]),h,e("p",null,[v,o(r,{to:"/en/config/policy.html#levelpolicyobject"},{default:t((()=>[y])),_:1}),g]),e("p",null,[j,o(r,{to:"/en/config/policy.html#policyobject"},{default:t((()=>[D])),_:1}),f,I,U]),A],64)};export default r;
