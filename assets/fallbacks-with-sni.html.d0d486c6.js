import{r as n,o as s,c as a,a as e,b as l,F as t,e as o}from"./app.baa21783.js";const r={},c=e("h1",{id:"通过-sni-回落功能实现伪装与按域名分流",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#通过-sni-回落功能实现伪装与按域名分流","aria-hidden":"true"},"#"),o(" 通过 SNI 回落功能实现伪装与按域名分流")],-1),p=e("p",null,"VLESS 是一种很轻的协议，和 Trojan 一样，不对流量进行复杂的加密和混淆，而是大隐隐于市，通过 TLS 协议加密，混杂在其他 HTTPS 流量中，在墙内外穿进穿出。为了更好的伪装以应对主动探测，Fallbacks 回落功能随 VLESS 同时出现。这篇教程将演示如何使用 Xray 中 VLESS 入站协议的回落功能配合 Nginx 或 Caddy 在保证伪装完全的前提下实现按域名分流。",-1),u=e("h2",{id:"应用情景",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#应用情景","aria-hidden":"true"},"#"),o(" 应用情景")],-1),i=e("p",null,"由于 XTLS，Xray 需要监听 443 端口，这导致如果之前有网站运行在服务器上，那么此时网站无法运行或需要运行在其他端口上，这显然是不合理的。有以下三种方案可以解决这个问题：",-1),b=e("ul",null,[e("li",null,[e("p",null,"Xray 监听其他常用端口（如 22、3389、8443）"),e("p",null,"这个方案是最简单的，但不够完美。")]),e("li",null,[e("p",null,"Nginx 或 HAProxy 监听 443 端口，通过 SNI 分流做 L4 反向代理，实现端口复用"),e("p",null,"这个方案比较复杂，需要对 Nginx 或 HAProxy 的使用有一定了解，此处不作过多解释。")]),e("li",null,[e("p",null,"Xray 监听 443 端口，通过 Fallbacks 功能 SNI 分流将网站流量回落到 Nginx 或 Caddy"),e("p",null,"这个方案难度适中，也是此教程接下来想要演示的方案。")])],-1),k=e("h2",{id:"sni-简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sni-简介","aria-hidden":"true"},"#"),o(" SNI 简介")],-1),m=e("p",null,[o("服务器名称指示（英语："),e("strong",null,"S"),o("erver "),e("strong",null,"N"),o("ame "),e("strong",null,"I"),o("ndication，缩写："),e("strong",null,"SNI"),o("）是 TLS 的一个扩展协议。熟悉反向代理的朋友都知道，如果想要通过域名将流量代理到正确的内容上，需要以下配置：")],-1),d=e("div",{class:"language-nginx ext-nginx line-numbers-mode"},[e("pre",{class:"language-nginx"},[e("code",null,[e("span",{class:"token directive"},[e("span",{class:"token keyword"},"proxy_set_header"),o(" Host 主机名")]),e("span",{class:"token punctuation"},";"),o("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),f=e("p",null,"这句的作用是将名为 “Host” 的 HTTP Header 设定为某个主机名。为什么要这样做？一般而言，一台服务器对应一个 IP，但却运行多个网站，访问者通过域名查询到 IP 以访问服务器，那么问题来了，如何确定访问者想要访问的是哪一个网站？这需要“基于名称的虚拟主机”。",-1),h=e("p",null,"当 Web 服务器收到访问请求后，它会查看请求的主机头，使访问者访问正确的网站。然而当 HTTP 协议被 TLS 协议加密后，这种简单的方法就无法实现了。因为 TLS 握手发生在服务器看到任何 HTTP 头之前，因此，服务器不可能使用 HTTP 主机头中的信息来决定呈现哪个证书，更无法决定访问者的访问目标。",-1),g=e("p",null,[o("SNI 的原理也很简单，它通过让客户端发送主机名作为 TLS 协商的一部分来解决此问题。所以在使用 Nginx 对 HTTPS 协议进行反向代理时，需要在配置中加入 "),e("code",null,"proxy_ssl_server_name on;"),o("，此时 Nginx 会向被代理的服务器发送 SNI 信息，解决了 HTTPS 协议下虚拟主机失效的问题。另外，使用 SNI 时，即使不指定主机头，也可以正确访问网站。")],-1),x=e("h2",{id:"思路",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),o(" 思路")],-1),y=e("p",null,[e("img",{src:"/Xray-docs-next/assets/xray-fallbacks.73ad8691.svg",alt:"Xray 回落流程"})],-1),v=e("p",null,"从 443 端口接收到流量后，Xray 会把 TLS 解密后首包长度 < 18、协议版本无效或身份认证失败的流量通过对 name、path、alpn 的匹配转发到 dest 指定的地址。",-1),T=e("h2",{id:"添加-dns-记录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#添加-dns-记录","aria-hidden":"true"},"#"),o(" 添加 DNS 记录")],-1),P=e("p",null,[e("img",{src:"/Xray-docs-next/assets/xray-dns-records.d55b10dd.webp",alt:"DNS 记录"})],-1),w=e("p",null,"请按实际情况修改域名和 IP。",-1),S=e("h2",{id:"申请-tls-证书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#申请-tls-证书","aria-hidden":"true"},"#"),o(" 申请 TLS 证书")],-1),_=o("由于要对不同前缀的域名进行分流，但一个通配符证书的作用域仅限于两“.”之间（例如：申请 "),N=e("code",null,"*.example.com",-1),H=o("，"),L=e("code",null,"example.com",-1),I=o(" 和 "),C=e("code",null,"*.*.example.com",-1),E=o(" 并不能使用该证书），故需申请 "),A={href:"https://zh.wikipedia.org/wiki/%E4%B8%BB%E9%A2%98%E5%A4%87%E7%94%A8%E5%90%8D%E7%A7%B0",target:"_blank",rel:"noopener noreferrer"},j=o("SAN"),X=o(" 通配符证书。根据 Let's Encrypt 官网信息"),D=e("sup",{class:"footnote-ref"},[e("a",{href:"#fn1",id:"fnref1"},"[1]")],-1),F=o("，申请通配符证书要求 DNS-01 验证方式，此处演示 NS 记录为 Cloudflare 的域名通过 "),B={href:"https://acme.sh",target:"_blank",rel:"noopener noreferrer"},z=o("acme.sh"),U=o(" 申请 Let's Encrypt 的免费 TLS 证书。使用其他域名托管商的申请方法请阅读 "),V={href:"https://github.com/acmesh-official/acme.sh/wiki/dnsapi",target:"_blank",rel:"noopener noreferrer"},W=o("dnsapi · acmesh-official/acme.sh Wiki"),q=o("。"),R=o("首先需要到 "),$={href:"https://dash.cloudflare.com/profile/api-tokens",target:"_blank",rel:"noopener noreferrer"},O=o("Cloudflare 面板"),G=o("创建 API Token。参数如下："),J=e("p",null,[e("img",{src:"/Xray-docs-next/assets/cf-api-token-permissions-for-acme.d806d67c.webp",alt:"API Token 的权限设置"})],-1),K=e("p",null,"权限部分至关重要，其他部分任意。",-1),M=e("p",null,[o("创建完毕后，你会得到一串神秘字符，请将其妥善保管到安全且不会丢失的地方，因为它不再会显示。这串字符就是即将用到的 "),e("code",null,"CF_Token"),o("。")],-1),Q=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"注意"),e("p",null,"以下操作需要在 root 用户下进行，使用 sudo 会出现错误。")],-1),Y=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"curl"),o(" https://get.acme.sh "),e("span",{class:"token operator"},"|"),o(),e("span",{class:"token function"},"sh"),o(),e("span",{class:"token comment"},"# 安装 acme.sh"),o("\n"),e("span",{class:"token builtin class-name"},"export"),o(),e("span",{class:"token assign-left variable"},"CF_Token"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"sdfsdfsdfljlbjkljlkjsdfoiwje"'),o(),e("span",{class:"token comment"},"# 设定 API Token 变量"),o("\nacme.sh --issue -d example.com -d *.example.com --dns dns_cf "),e("span",{class:"token comment"},"# 使用 DNS-01 验证方式申请证书"),o("\n"),e("span",{class:"token function"},"mkdir"),o(" /etc/ssl/xray "),e("span",{class:"token comment"},"# 新建证书存放目录"),o("\nacme.sh --install-cert -d example.com --fullchain-file /etc/ssl/xray/cert.pem --key-file /etc/ssl/xray/privkey.key --reloadcmd "),e("span",{class:"token string"},'"chown nobody:nogroup -R /etc/ssl/xray && systemctl restart xray"'),o(),e("span",{class:"token comment"},"# 安装证书到指定目录并设定自动续签生效指令"),o("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br")])],-1),Z=e("h2",{id:"xray-配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#xray-配置","aria-hidden":"true"},"#"),o(" Xray 配置")],-1),nn=e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),o("\n  log"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o("\n    loglevel"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"warning"'),e("span",{class:"token punctuation"},","),o("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n  inbounds"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"["),o("\n    "),e("span",{class:"token punctuation"},"{"),o("\n      port"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"443"),e("span",{class:"token punctuation"},","),o("\n      protocol"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"vless"'),e("span",{class:"token punctuation"},","),o("\n      settings"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o("\n        clients"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"["),o("\n          "),e("span",{class:"token punctuation"},"{"),o("\n            id"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"UUID"'),e("span",{class:"token punctuation"},","),o("\n            flow"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"xtls-rprx-direct"'),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n        "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),o("\n        decryption"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"none"'),e("span",{class:"token punctuation"},","),o("\n        fallbacks"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"["),o("\n          "),e("span",{class:"token punctuation"},"{"),o("\n            name"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"example.com"'),e("span",{class:"token punctuation"},","),o("\n            path"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"/vmessws"'),e("span",{class:"token punctuation"},","),o("\n            dest"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"5000"),e("span",{class:"token punctuation"},","),o("\n            xver"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"{"),o("\n            dest"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"5001"),e("span",{class:"token punctuation"},","),o("\n            xver"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"{"),o("\n            alpn"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"h2"'),e("span",{class:"token punctuation"},","),o("\n            dest"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"5002"),e("span",{class:"token punctuation"},","),o("\n            xver"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"{"),o("\n            name"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"blog.example.com"'),e("span",{class:"token punctuation"},","),o("\n            dest"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"5003"),e("span",{class:"token punctuation"},","),o("\n            xver"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"{"),o("\n            name"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"blog.example.com"'),e("span",{class:"token punctuation"},","),o("\n            alpn"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"h2"'),e("span",{class:"token punctuation"},","),o("\n            dest"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"5004"),e("span",{class:"token punctuation"},","),o("\n            xver"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n        "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),o("\n      "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n      streamSettings"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o("\n        network"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"tcp"'),e("span",{class:"token punctuation"},","),o("\n        security"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"xtls"'),e("span",{class:"token punctuation"},","),o("\n        xtlsSettings"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o("\n          alpn"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"h2"'),e("span",{class:"token punctuation"},","),o(),e("span",{class:"token string"},'"http/1.1"'),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),o("\n          certificates"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"["),o("\n            "),e("span",{class:"token punctuation"},"{"),o("\n              certificateFile"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"/etc/ssl/xray/cert.pem"'),e("span",{class:"token punctuation"},","),o("\n              keyFile"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"/etc/ssl/xray/privkey.key"'),e("span",{class:"token punctuation"},","),o("\n            "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),o("\n        "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n      "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n    "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n    "),e("span",{class:"token punctuation"},"{"),o("\n      listen"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"127.0.0.1"'),e("span",{class:"token punctuation"},","),o("\n      port"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"5000"),e("span",{class:"token punctuation"},","),o("\n      protocol"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"vmess"'),e("span",{class:"token punctuation"},","),o("\n      settings"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o("\n        clients"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"["),o("\n          "),e("span",{class:"token punctuation"},"{"),o("\n            id"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"UUID"'),e("span",{class:"token punctuation"},","),o("\n          "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n        "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),o("\n      "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n      streamSettings"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o("\n        network"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"ws"'),e("span",{class:"token punctuation"},","),o("\n        wsSettings"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o("\n          acceptProxyProtocol"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),o("\n          path"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"/vmessws"'),e("span",{class:"token punctuation"},","),o("\n        "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n      "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n    "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n  "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),o("\n  outbounds"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"["),o("\n    "),e("span",{class:"token punctuation"},"{"),o("\n      protocol"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"freedom"'),e("span",{class:"token punctuation"},","),o("\n    "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n  "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),o("\n"),e("span",{class:"token punctuation"},"}"),o("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br"),e("span",{class:"line-number"},"23"),e("br"),e("span",{class:"line-number"},"24"),e("br"),e("span",{class:"line-number"},"25"),e("br"),e("span",{class:"line-number"},"26"),e("br"),e("span",{class:"line-number"},"27"),e("br"),e("span",{class:"line-number"},"28"),e("br"),e("span",{class:"line-number"},"29"),e("br"),e("span",{class:"line-number"},"30"),e("br"),e("span",{class:"line-number"},"31"),e("br"),e("span",{class:"line-number"},"32"),e("br"),e("span",{class:"line-number"},"33"),e("br"),e("span",{class:"line-number"},"34"),e("br"),e("span",{class:"line-number"},"35"),e("br"),e("span",{class:"line-number"},"36"),e("br"),e("span",{class:"line-number"},"37"),e("br"),e("span",{class:"line-number"},"38"),e("br"),e("span",{class:"line-number"},"39"),e("br"),e("span",{class:"line-number"},"40"),e("br"),e("span",{class:"line-number"},"41"),e("br"),e("span",{class:"line-number"},"42"),e("br"),e("span",{class:"line-number"},"43"),e("br"),e("span",{class:"line-number"},"44"),e("br"),e("span",{class:"line-number"},"45"),e("br"),e("span",{class:"line-number"},"46"),e("br"),e("span",{class:"line-number"},"47"),e("br"),e("span",{class:"line-number"},"48"),e("br"),e("span",{class:"line-number"},"49"),e("br"),e("span",{class:"line-number"},"50"),e("br"),e("span",{class:"line-number"},"51"),e("br"),e("span",{class:"line-number"},"52"),e("br"),e("span",{class:"line-number"},"53"),e("br"),e("span",{class:"line-number"},"54"),e("br"),e("span",{class:"line-number"},"55"),e("br"),e("span",{class:"line-number"},"56"),e("br"),e("span",{class:"line-number"},"57"),e("br"),e("span",{class:"line-number"},"58"),e("br"),e("span",{class:"line-number"},"59"),e("br"),e("span",{class:"line-number"},"60"),e("br"),e("span",{class:"line-number"},"61"),e("br"),e("span",{class:"line-number"},"62"),e("br"),e("span",{class:"line-number"},"63"),e("br"),e("span",{class:"line-number"},"64"),e("br"),e("span",{class:"line-number"},"65"),e("br"),e("span",{class:"line-number"},"66"),e("br"),e("span",{class:"line-number"},"67"),e("br"),e("span",{class:"line-number"},"68"),e("br"),e("span",{class:"line-number"},"69"),e("br"),e("span",{class:"line-number"},"70"),e("br"),e("span",{class:"line-number"},"71"),e("br"),e("span",{class:"line-number"},"72"),e("br"),e("span",{class:"line-number"},"73"),e("br"),e("span",{class:"line-number"},"74"),e("br"),e("span",{class:"line-number"},"75"),e("br"),e("span",{class:"line-number"},"76"),e("br"),e("span",{class:"line-number"},"77"),e("br"),e("span",{class:"line-number"},"78"),e("br"),e("span",{class:"line-number"},"79"),e("br"),e("span",{class:"line-number"},"80"),e("br"),e("span",{class:"line-number"},"81"),e("br"),e("span",{class:"line-number"},"82"),e("br"),e("span",{class:"line-number"},"83"),e("br"),e("span",{class:"line-number"},"84"),e("br"),e("span",{class:"line-number"},"85"),e("br")])],-1),sn=e("p",null,"以上配置针对于 Nginx，以下是需要注意的一些细节。",-1),an=e("ul",null,[e("li",null,[e("p",null,"有关 Proxy Protocol"),e("p",null,"Proxy Protocol 是 HaProxy 开发的一种旨在解决代理时容易丢失客户端信息问题的协议，常用于链式代理和反向代理。传统的处理方法往往较为复杂且有诸多限制，而 Proxy Protocol 非常简单地在传输数据时附带上原始连接四元组信息的数据包，解决了这个问题。"),e("p",null,"凡事皆有利弊，Proxy Protocol 也是如此。"),e("ul",null,[e("li",null,"有发送必须有接收，反之亦然"),e("li",null,[o("同一端口不能既兼容带 Proxy Protocol 数据的连接又兼容不带数据的连接（如：Nginx 同端口的不同虚拟主机（server），本质是上一条）"),e("sup",{class:"footnote-ref"},[e("a",{href:"#fn2",id:"fnref2"},"[2]")]),e("sup",{class:"footnote-ref"},[e("a",{href:"#fn3",id:"fnref3"},"[3]")])])]),e("p",null,"在遇到异常时，请考虑配置是否符合上述条件。"),e("p",null,"此处，我们使用 Proxy Protocol 让被回落到的目标获取到客户端的真实 IP。"),e("p",null,[o("另外，当 Xray 的某个入站配置存在 "),e("code",null,'"acceptProxyProtocol": true'),o(" 时，ReadV 将失效。")])]),e("li",null,[e("p",null,"有关 HTTP/2"),e("p",null,[o("首先，"),e("code",null,"inbounds.streamSettings.xtlsSettings.alpn"),o(" 有顺序，应将 "),e("code",null,"h2"),o(" 放前，"),e("code",null,"http/1.1"),o(" 放后，在优先使用 HTTP/2 的同时保证兼容性；反过来会导致 HTTP/2 在协商时变为 HTTP/1.1，成为无效配置。")]),e("p",null,[o("在上述配置中，每条回落到 Nginx 的配置都要分成两个。这是因为 h2 是强制 TLS 加密的 HTTP/2 连接，这有益于数据在互联网中传输的安全，但在服务器内部没有必要；而 h2c 是非加密的 HTTP/2 连接，适合该环境。然而，Nginx 不能在同一端口上同时监听 HTTP/1.1 和 h2c，为了解决这个问题，需要在回落中指定 "),e("code",null,"alpn"),o(" 项（是 "),e("code",null,"fallbacks"),o(" 而不是 "),e("code",null,"xtlsSettings"),o(" 里面的），以尝试匹配 TLS ALPN 协商结果。")]),e("p",null,[o("建议 "),e("code",null,"alpn"),o(" 项只按需用两种填法："),e("sup",{class:"footnote-ref"},[e("a",{href:"#fn4",id:"fnref4"},"[4]")])]),e("ul",null,[e("li",null,"省略"),e("li",null,[e("code",null,'"h2"')])]),e("p",null,[o("如果使用 Caddy 就大可不必如此繁杂了，因为它"),e("strong",null,"可以"),o("在同一端口上同时监听 HTTP/1.1 和 h2c，配置改动如下：")]),e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token property"},'"fallbacks"'),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"["),o("\n    "),e("span",{class:"token punctuation"},"{"),o("\n        "),e("span",{class:"token property"},'"name"'),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"example.com"'),e("span",{class:"token punctuation"},","),o("\n        "),e("span",{class:"token property"},'"path"'),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"/vmessws"'),e("span",{class:"token punctuation"},","),o("\n        "),e("span",{class:"token property"},'"dest"'),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"5000"),e("span",{class:"token punctuation"},","),o("\n        "),e("span",{class:"token property"},'"xver"'),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"1"),o("\n    "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n    "),e("span",{class:"token punctuation"},"{"),o("\n        "),e("span",{class:"token property"},'"dest"'),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"5001"),e("span",{class:"token punctuation"},","),o("\n        "),e("span",{class:"token property"},'"xver"'),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"1"),o("\n    "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o("\n    "),e("span",{class:"token punctuation"},"{"),o("\n        "),e("span",{class:"token property"},'"name"'),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},'"blog.example.com"'),e("span",{class:"token punctuation"},","),o("\n        "),e("span",{class:"token property"},'"dest"'),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"5002"),e("span",{class:"token punctuation"},","),o("\n        "),e("span",{class:"token property"},'"xver"'),e("span",{class:"token operator"},":"),o(),e("span",{class:"token number"},"1"),o("\n    "),e("span",{class:"token punctuation"},"}"),o("\n"),e("span",{class:"token punctuation"},"]"),o("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br")])])])],-1),en=e("h2",{id:"nginx-配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx-配置","aria-hidden":"true"},"#"),o(" Nginx 配置")],-1),ln=e("p",null,"Nginx 将通过官方源进行安装。",-1),tn=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"apt"),o(),e("span",{class:"token function"},"install"),o(),e("span",{class:"token function"},"curl"),o(" gnupg2 ca-certificates lsb-release\n"),e("span",{class:"token builtin class-name"},"echo"),o(),e("span",{class:"token string"},[o('"deb [arch=amd64] http://nginx.org/packages/ubuntu '),e("span",{class:"token variable"},[e("span",{class:"token variable"},"`"),o("lsb_release -cs"),e("span",{class:"token variable"},"`")]),o(' nginx"')]),o(),e("span",{class:"token punctuation"},"\\"),o("\n    "),e("span",{class:"token operator"},"|"),o(),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"tee"),o(" /etc/apt/sources.list.d/nginx.list\n"),e("span",{class:"token function"},"curl"),o(" -fsSL https://nginx.org/keys/nginx_signing.key "),e("span",{class:"token operator"},"|"),o(),e("span",{class:"token function"},"sudo"),o(" apt-key "),e("span",{class:"token function"},"add"),o(" -\n"),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"apt"),o(" update\n"),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"apt"),o(),e("span",{class:"token function"},"install"),o(" nginx\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br")])],-1),on=e("p",null,[o("删除 "),e("code",null,"/etc/nginx/conf.d/default.conf"),o(" 并创建 "),e("code",null,"/etc/nginx/conf.d/fallbacks.conf"),o("，内容如下：")],-1),rn=e("div",{class:"language-nginx ext-nginx line-numbers-mode"},[e("pre",{class:"language-nginx"},[e("code",null,[e("span",{class:"token directive"},[e("span",{class:"token keyword"},"set_real_ip_from"),o(" 127.0.0.1")]),e("span",{class:"token punctuation"},";"),o("\n"),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"real_ip_header"),o(" proxy_protocol")]),e("span",{class:"token punctuation"},";"),o("\n\n"),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"server")]),o(),e("span",{class:"token punctuation"},"{"),o("\n    "),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"listen"),o(" 127.0.0.1:5001 proxy_protocol default_server")]),e("span",{class:"token punctuation"},";"),o("\n    "),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"listen"),o(" 127.0.0.1:5002 proxy_protocol default_server http2")]),e("span",{class:"token punctuation"},";"),o("\n\n    "),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"location"),o(" /")]),o(),e("span",{class:"token punctuation"},"{"),o("\n        "),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"root"),o(" /srv/http/default")]),e("span",{class:"token punctuation"},";"),o("\n    "),e("span",{class:"token punctuation"},"}"),o("\n"),e("span",{class:"token punctuation"},"}"),o("\n\n"),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"server")]),o(),e("span",{class:"token punctuation"},"{"),o("\n    "),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"listen"),o(" 127.0.0.1:5003 proxy_protocol")]),e("span",{class:"token punctuation"},";"),o("\n    "),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"listen"),o(" 127.0.0.1:5004 proxy_protocol http2")]),e("span",{class:"token punctuation"},";"),o("\n\n    "),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"server_name"),o(" blog.example.com")]),e("span",{class:"token punctuation"},";"),o("\n\n    "),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"location"),o(" /")]),o(),e("span",{class:"token punctuation"},"{"),o("\n        "),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"root"),o(" /srv/http/blog.example.com")]),e("span",{class:"token punctuation"},";"),o("\n    "),e("span",{class:"token punctuation"},"}"),o("\n"),e("span",{class:"token punctuation"},"}"),o("\n\n"),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"server")]),o(),e("span",{class:"token punctuation"},"{"),o("\n    "),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"listen"),o(),e("span",{class:"token number"},"80")]),e("span",{class:"token punctuation"},";"),o("\n    "),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"return"),o(),e("span",{class:"token number"},"301"),o(" https://"),e("span",{class:"token variable"},"$host"),e("span",{class:"token variable"},"$request_uri")]),e("span",{class:"token punctuation"},";"),o("\n"),e("span",{class:"token punctuation"},"}"),o("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br"),e("span",{class:"line-number"},"23"),e("br"),e("span",{class:"line-number"},"24"),e("br"),e("span",{class:"line-number"},"25"),e("br"),e("span",{class:"line-number"},"26"),e("br"),e("span",{class:"line-number"},"27"),e("br")])],-1),cn=e("h2",{id:"caddy-配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#caddy-配置","aria-hidden":"true"},"#"),o(" Caddy 配置")],-1),pn=o("安装 Caddy 请参阅 "),un={href:"https://caddyserver.com/docs/install",target:"_blank",rel:"noopener noreferrer"},bn=o("Install — Caddy Documentation"),kn=o("。"),mn=e("p",null,"为了使 Caddy 能获取到访问者的真实 IP，需要编译带有 Proxy Protocol 模块的 Caddy。建议直接在 Caddy 官网上在线编译。",-1),dn=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"curl"),o(" -o /usr/bin/caddy "),e("span",{class:"token string"},'"https://caddyserver.com/api/download?os=linux&arch=amd64&p=github.com%2Fmastercactapus%2Fcaddy2-proxyprotocol&idempotency=79074247675458"'),o("\n"),e("span",{class:"token function"},"sudo"),o(),e("span",{class:"token function"},"chmod"),o(" +x /usr/bin/caddy\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),fn=e("p",null,"直接替换即可。",-1),hn=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"建议先通过官网文档安装 Caddy，再替换二进制文件。这样做无需手动设定进程守护。")],-1),gn=e("p",null,[o("编辑 "),e("code",null,"/etc/caddy/Caddyfile"),o("：")],-1),xn=e("div",{class:"language-Caddyfile ext-Caddyfile line-numbers-mode"},[e("pre",{class:"language-Caddyfile"},[e("code",null,"{\n    servers 127.0.0.1:5001 {\n        listener_wrappers {\n            proxy_protocol\n        }\n\tprotocol {\n            allow_h2c\n        }\n    }\n    servers 127.0.0.1:5002 {\n        listener_wrappers {\n            proxy_protocol\n        }\n\tprotocol {\n            allow_h2c\n        }\n    }\n}\n\n:5001 {\n    root * /srv/http/default\n    file_server\n    log\n    bind 127.0.0.1\n}\n\nhttp://blog.example.com:5002 {\n    root * /srv/http/blog.example.com\n    file_server\n    log\n    bind 127.0.0.1\n}\n\n:80 {\n    redir https://{host}{uri} permanent\n}\n")]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br"),e("span",{class:"line-number"},"23"),e("br"),e("span",{class:"line-number"},"24"),e("br"),e("span",{class:"line-number"},"25"),e("br"),e("span",{class:"line-number"},"26"),e("br"),e("span",{class:"line-number"},"27"),e("br"),e("span",{class:"line-number"},"28"),e("br"),e("span",{class:"line-number"},"29"),e("br"),e("span",{class:"line-number"},"30"),e("br"),e("span",{class:"line-number"},"31"),e("br"),e("span",{class:"line-number"},"32"),e("br"),e("span",{class:"line-number"},"33"),e("br"),e("span",{class:"line-number"},"34"),e("br"),e("span",{class:"line-number"},"35"),e("br"),e("span",{class:"line-number"},"36"),e("br")])],-1),yn=e("h2",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),o(" 参考")],-1),vn={href:"https://zh.wikipedia.org/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%90%8D%E7%A7%B0%E6%8C%87%E7%A4%BA",target:"_blank",rel:"noopener noreferrer"},Tn=o("服务器名称指示 - 维基百科，自由的百科全书"),Pn={href:"https://github.com/acmesh-official/acme.sh/wiki",target:"_blank",rel:"noopener noreferrer"},wn=o("Home · acmesh-official/acme.sh Wiki"),Sn={href:"https://zh.wikipedia.org/wiki/HTTP/2",target:"_blank",rel:"noopener noreferrer"},_n=o("HTTP/2 - 维基百科，自由的百科全书"),Nn=e("h2",{id:"引用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#引用","aria-hidden":"true"},"#"),o(" 引用")],-1),Hn=e("hr",{class:"footnotes-sep"},null,-1),Ln={class:"footnotes"},In={class:"footnotes-list"},Cn={id:"fn1",class:"footnote-item"},En={href:"https://letsencrypt.org/zh-cn/docs/faq/",target:"_blank",rel:"noopener noreferrer"},An=o("常见问题 - Let's Encrypt - 免费的 SSL/TLS 证书"),jn=o(),Xn=e("a",{href:"#fnref1",class:"footnote-backref"},"↩︎",-1),Dn={id:"fn2",class:"footnote-item"},Fn={href:"https://www.haproxy.com/blog/haproxy/proxy-protocol/",target:"_blank",rel:"noopener noreferrer"},Bn=o("Proxy Protocol - HAProxy Technologies"),zn=o(),Un=e("a",{href:"#fnref2",class:"footnote-backref"},"↩︎",-1),Vn={id:"fn3",class:"footnote-item"},Wn={href:"https://www.jianshu.com/p/cc8d592582c9",target:"_blank",rel:"noopener noreferrer"},qn=o("proxy protocol 介绍及 nginx 配置 - 简书"),Rn=o(),$n=e("a",{href:"#fnref3",class:"footnote-backref"},"↩︎",-1),On={id:"fn4",class:"footnote-item"},Gn={href:"https://github.com/rprx/v2fly-github-io/blob/master/docs/config/protocols/vless.md",target:"_blank",rel:"noopener noreferrer"},Jn=o("v2fly-github-io/vless.md at master · rprx/v2fly-github-io"),Kn=o(),Mn=e("a",{href:"#fnref4",class:"footnote-backref"},"↩︎",-1);r.render=function(o,r){const Qn=n("OutboundLink");return s(),a(t,null,[c,p,u,i,b,k,m,d,f,h,g,x,y,v,T,P,w,S,e("p",null,[_,N,H,L,I,C,E,e("a",A,[j,l(Qn)]),X,D,F,e("a",B,[z,l(Qn)]),U,e("a",V,[W,l(Qn)]),q]),e("p",null,[R,e("a",$,[O,l(Qn)]),G]),J,K,M,Q,Y,Z,nn,sn,an,en,ln,tn,on,rn,cn,e("p",null,[pn,e("a",un,[bn,l(Qn)]),kn]),mn,dn,fn,hn,gn,xn,yn,e("ol",null,[e("li",null,[e("a",vn,[Tn,l(Qn)])]),e("li",null,[e("a",Pn,[wn,l(Qn)])]),e("li",null,[e("a",Sn,[_n,l(Qn)])])]),Nn,Hn,e("section",Ln,[e("ol",In,[e("li",Cn,[e("p",null,[e("a",En,[An,l(Qn)]),jn,Xn])]),e("li",Dn,[e("p",null,[e("a",Fn,[Bn,l(Qn)]),zn,Un])]),e("li",Vn,[e("p",null,[e("a",Wn,[qn,l(Qn)]),Rn,$n])]),e("li",On,[e("p",null,[e("a",Gn,[Jn,l(Qn)]),Kn,Mn])])])])],64)};export default r;
