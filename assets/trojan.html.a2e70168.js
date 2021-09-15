import{r as s,o as n,c as a,a as e,b as o,w as p,F as t,e as r,d as l}from"./app.baa21783.js";const c={},u=e("h1",{id:"trojan",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#trojan","aria-hidden":"true"},"#"),r(" Trojan")],-1),i={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},d=r("Trojan"),b=r(" 协议"),k=l('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Trojan 被设计工作在正确配置的加密 TLS 隧道</p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p><code>servers</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>一个数组，其中每一项是一个 <a href="#serverobject">ServerObject</a>。</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>服务端地址，支持 IPv4、IPv6 和域名。必填。</p><blockquote><p><code>port</code>: number</p></blockquote><p>服务端端口，通常与服务端监听的端口相同。</p><blockquote><p><code>password</code>: string</p></blockquote><p>密码. 必填，任意字符串。</p><blockquote><p><code>email</code>: string</p></blockquote><p>邮件地址，可选，用于标识用户</p><blockquote><p><code>flow</code>: string</p></blockquote><p>流控模式，用于选择 XTLS 的算法。</p><p>目前出站协议中有以下流控模式可选：</p><ul><li><code>xtls-rprx-origin</code>：最初的流控模式。该模式纪念价值大于实际使用价值</li><li><code>xtls-rprx-origin-udp443</code>：同 <code>xtls-rprx-origin</code>, 但放行了目标为 443 端口的 UDP 流量</li><li><code>xtls-rprx-direct</code>：所有平台皆可使用的典型流控模式</li><li><code>xtls-rprx-direct-udp443</code>：同 <code>xtls-rprx-direct</code>, 但是放行了目标为 443 端口的 UDP 流量</li><li><code>xtls-rprx-splice</code>：Linux 平台下最建议使用的流控模式</li><li><code>xtls-rprx-splice-udp443</code>：同 <code>xtls-rprx-splice</code>, 但是放行了目标为 443 端口的 UDP 流量</li></ul>',19),m={class:"custom-container warning"},q=e("p",{class:"custom-container-title"},"注意",-1),g=r("当 "),x=e("code",null,"flow",-1),v=r(" 被指定时，还需要将该出站协议的 "),j=e("code",null,"streamSettings.security",-1),h=r(" 一项指定为 "),S=e("code",null,"xtls",-1),f=r("，"),y=e("code",null,"tlsSettings",-1),T=r(" 改为 "),P=e("code",null,"xtlsSettings",-1),L=r("。详情请参考 "),C=r("streamSettings"),w=r("。"),U=l('<p>此外，目前 XTLS 仅支持 TCP、mKCP、DomainSocket 这三种传输方式。</p><div class="custom-container tip"><p class="custom-container-title">关于 xtls-rprx-\\*-udp443 流控模式</p><p>启用了 Xray-core 的 XTLS 时，通往 UDP 443 端口的流量默认会被拦截（一般情况下为 QUIC），这样应用就不会使用 QUIC 而会使用 TLS，XTLS 才会真正生效。实际上，QUIC 本身也不适合被代理，因为 QUIC 自带了 TCP 的功能， 它作为 UDP 流量在通过 Trojan 协议传输时，底层协议为 TCP，就相当于两层 TCP 了。</p><p>若不需要拦截，请在客户端填写 <code>xtls-rprx-*-udp443</code>，服务端不变。</p></div><div class="custom-container tip"><p class="custom-container-title">关于 Splice 模式</p><p>Splice 是 Linux Kernel 提供的函数，系统内核直接转发 TCP，不再经过 Xray 的内存，大大减少了数据拷贝、CPU 上下文切换的次数。</p></div><p>Splice 模式的的使用限制：</p><ul><li>Linux 环境</li><li>入站协议为 <code>Dokodemo door</code>、<code>Socks</code>、<code>HTTP</code> 等纯净的 TCP 连接, 或其它使用了 XTLS 的入站协议</li><li>出站协议为 VLESS + XTLS 或 Trojan + XTLS</li></ul><p>此外，使用 Splice 时网速显示会滞后，这是特性，不是 bug。</p><p>需要注意的是，使用 mKCP 协议时不会使用 Splice（是的，虽然没有报错，但实际上根本没用到）。</p><blockquote><p><code>level</code>: number</p></blockquote>',8),X=r("用户等级，连接会使用这个用户等级对应的 "),D=r("本地策略"),I=r("。"),O=r("level 的值, 对应 "),Q=r("policy"),_=r(" 中 "),K=e("code",null,"level",-1),E=r(" 的值。 如不指定, 默认为 0。");c.render=function(r,l){const c=s("OutboundLink"),R=s("RouterLink");return n(),a(t,null,[u,e("p",null,[e("a",i,[d,o(c)]),b]),k,e("div",m,[q,e("p",null,[g,x,v,j,h,S,f,y,T,P,L,o(R,{to:"/en/config/transport.html#streamsettingsobject"},{default:p((()=>[C])),_:1}),w])]),U,e("p",null,[X,o(R,{to:"/en/config/policy.html#levelpolicyobject"},{default:p((()=>[D])),_:1}),I]),e("p",null,[O,o(R,{to:"/en/config/policy.html#policyobject"},{default:p((()=>[Q])),_:1}),_,K,E])],64)};export default c;
