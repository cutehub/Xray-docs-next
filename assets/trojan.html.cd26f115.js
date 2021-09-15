import{r as n,o as s,c as a,a as e,b as o,w as t,F as p,e as l,d as c}from"./app.baa21783.js";const r={},u=e("h1",{id:"trojan",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#trojan","aria-hidden":"true"},"#"),l(" Trojan")],-1),i={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},b=l("Trojan"),d=l(" 协议"),k=c('<div class="custom-container danger"><p class="custom-container-title">警告</p><p>Trojan 被设计工作在正确配置的加密 TLS 隧道</p></div><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>一个数组，代表一组服务端认可的用户.</p><p>其中每一项是一个用户 <a href="#clientobject">ClientObject</a>。</p>',6),m=e("code",null,"fallbacks",-1),q=l(": [ "),g=l("FallbackObject"),f=l(" ]"),j=l("一个数组，包含一系列强大的回落分流配置（可选）。 fallbacks 的具体配置请点击"),h=l("FallbackObject"),x=c('<div class="custom-container tip"><p class="custom-container-title">提示</p><p>Xray 的 Trojan 有完整的 fallbacks 支持，配置方式完全一致。 触发回落的条件也与 VLESS 类似：首包长度 &lt; 58 或第 57 个字节不为 <code>\\r</code>（因为 Trojan 没有协议版本）或身份认证失败。</p></div><h3 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>password</code>: string</p></blockquote><p>必填，任意字符串。</p><blockquote><p><code>email</code>: string</p></blockquote><p>邮件地址，可选，用于标识用户</p><div class="custom-container danger"><p class="custom-container-title">警告</p><p>如果存在多个 ClientObject, 请注意 email 不可以重复。</p></div><blockquote><p><code>level</code>: number</p></blockquote>',9),v=l("用户等级，连接会使用这个用户等级对应的 "),y=l("本地策略"),w=l("。"),S=l("userLevel 的值, 对应 "),T=l("policy"),O=l(" 中 "),C=e("code",null,"level",-1),L=l(" 的值。 如不指定, 默认为 0。"),_=c("<blockquote><p><code>flow</code>: string</p></blockquote><p>流控模式，用于选择 XTLS 的算法。</p><p>目前入站协议中有以下流控模式可选：</p><ul><li><code>xtls-rprx-origin</code>：最初的流控模式，此时客户端仅可选择 <code>xtls-rprx-origin</code> 和 <code>xtls-rprx-origin-udp443</code> 这两种流控模式。该模式纪念价值大于实际使用价值。</li><li><code>xtls-rprx-direct</code>：<strong>推荐</strong>，所有平台皆可使用的典型流控方式，此时客户端可选择任何流控模式</li></ul>",4),E={class:"custom-container warning"},D=e("p",{class:"custom-container-title"},"注意",-1),F=l("当 "),X=e("code",null,"flow",-1),P=l(" 被指定时，还需要将该入站协议的 "),A=e("code",null,"streamSettings.security",-1),B=l(" 一项指定为 "),I=e("code",null,"xtls",-1),K=l("，"),R=e("code",null,"tlsSettings",-1),V=l(" 改为 "),z=e("code",null,"xtlsSettings",-1),G=l("。详情请参考 "),H=l("streamSettings"),J=l("。"),M=e("p",null,"此外，目前 XTLS 仅支持 TCP、mKCP、DomainSocket 这三种传输方式。",-1);r.render=function(l,c){const r=n("OutboundLink"),N=n("RouterLink");return s(),a(p,null,[u,e("p",null,[e("a",i,[b,o(r)]),d]),k,e("blockquote",null,[e("p",null,[m,q,o(N,{to:"/config/examples/fallback.html"},{default:t((()=>[g])),_:1}),f])]),e("p",null,[j,o(N,{to:"/config/examples/fallback.html#fallbacks-%E9%85%8D%E7%BD%AE"},{default:t((()=>[h])),_:1})]),x,e("p",null,[v,o(N,{to:"/config/policy.html#levelpolicyobject"},{default:t((()=>[y])),_:1}),w]),e("p",null,[S,o(N,{to:"/config/policy.html#policyobject"},{default:t((()=>[T])),_:1}),O,C,L]),_,e("div",E,[D,e("p",null,[F,X,P,A,B,I,K,R,V,z,G,o(N,{to:"/config/transport.html#streamsettingsobject"},{default:t((()=>[H])),_:1}),J])]),M],64)};export default r;
