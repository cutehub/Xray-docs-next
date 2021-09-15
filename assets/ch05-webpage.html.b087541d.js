import{o as n,c as s,F as a,a as t,e as l}from"./app.baa21783.js";const e={},c=t("h1",{id:"【第-5-章】网站建设篇",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#【第-5-章】网站建设篇","aria-hidden":"true"},"#"),l(" 【第 5 章】网站建设篇")],-1),o=t("h2",{id:"_5-1-为什么要做一个网站",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_5-1-为什么要做一个网站","aria-hidden":"true"},"#"),l(" 5.1 为什么要做一个网站？")],-1),u=t("p",null,"新人也许会迷惑，为什么科学上网还要建一个网站？我不会编程啊，是不是特别麻烦？",-1),p=t("p",null,"先回答第一个问题，建网站的原因有：",-1),i=t("ol",null,[t("li",null,"申请合法的 TLS 证书（非常重要）"),t("li",null,"提供合理的回落，防止主动探测攻击，提高安全性"),t("li",null,"建设一个伪装站（如博客、私人网盘、多媒体网站、游戏网站等），直接访问时有合理的前台，使流量使用看上去更合理。")],-1),r=t("p",null,"再回答第二个问题：",-1),k=t("ol",null,[t("li",null,"本文作为演示，仅仅使用了一个最简单的【单文件 html 页面 + Nginx】来搭建，以此完成上面的目标，所以【非常简单】"),t("li",null,"这个网站完全可以不仅仅是伪装，而是真的做大做强，这个复杂性就完全取决于你了"),t("li",null,"对于“伪装”和“网站运营”这个目标，需要的就是各不相同、秀出真我，需要的同学可以自行搜索学习。这个内容已经完全偏离了科学上网，本文就不深入解析了。")],-1),g=t("h2",{id:"_5-2-登录-vps、安装运行-nginx",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_5-2-登录-vps、安装运行-nginx","aria-hidden":"true"},"#"),l(" 5.2 登录 VPS、安装运行 Nginx")],-1),d=t("ol",null,[t("li",null,[t("p",null,"这里用到的，都是之前已经详解过的命令，所以就不重复讲解了。看不懂的同学可以看看前面的章节哦。"),t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"sudo"),l(),t("span",{class:"token function"},"apt"),l(" update "),t("span",{class:"token operator"},"&&"),l(),t("span",{class:"token function"},"sudo"),l(),t("span",{class:"token function"},"apt"),l(),t("span",{class:"token function"},"install"),l(" nginx\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])])]),t("li",null,[t("p",null,[l("完成后，Nginx 已经自动运行。此时打开 Windows 上的浏览器并输入 "),t("code",null,"http://100.200.300.400:80"),l("，若看到下图的界面就说明 Nginx 已经正常在运行了。")]),t("p",null,[t("img",{src:"/Xray-docs-next/assets/ch05-img01-nginx-default-running.24698092.png",alt:"Nginx默认界面"})])])],-1),b=t("h2",{id:"_5-3-创建一个最简单的网页",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_5-3-创建一个最简单的网页","aria-hidden":"true"},"#"),l(" 5.3 创建一个最简单的网页")],-1),m=t("ol",null,[t("li",null,[t("p",null,"小小白白 Linux 基础命令："),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"编号"),t("th",{style:{"text-align":"center"}},"命令名称"),t("th",{style:{"text-align":"center"}},"命令说明")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("code",null,"cmd-10")]),t("td",{style:{"text-align":"center"}},[t("code",null,"mkdir")]),t("td",{style:{"text-align":"center"}},"新建文件夹")]),t("tr",null,[t("td",{style:{"text-align":"center"}},[t("code",null,"cmd-11")]),t("td",{style:{"text-align":"center"}},[t("code",null,"systemctl reload")]),t("td",{style:{"text-align":"center"}},"重新加载某个服务")])])])]),t("li",null,[t("p",null,"小小白白 Linux 基础配置文件："),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"编号"),t("th",{style:{"text-align":"center"}},"配置文件位置"),t("th",{style:{"text-align":"center"}},"文件说明")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("code",null,"conf-02")]),t("td",{style:{"text-align":"center"}},[t("code",null,"/etc/nginx/nginx.conf")]),t("td",{style:{"text-align":"center"}},"Nginx 程序设置")])])])]),t("li",null,[t("p",null,[l("创建一个网站专用的文件夹"),t("code",null,"/home/vpsadmin/www/webpage/"),l("并建立网页文件"),t("code",null,"index.html")]),t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"mkdir"),l(" -p ~/www/webpage/ "),t("span",{class:"token operator"},"&&"),l(),t("span",{class:"token function"},"nano"),l(" ~/www/webpage/index.html\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])])])],-1),h=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"注意"),t("p",null,[l("如果你用的不是 "),t("code",null,"vpsadmin"),l(" 这个用户名，请务必理解这条命令中 "),t("code",null,"“~”"),l(" 符号的意义（这关系到【第 5 步】你要写的内容）：")]),t("ul",null,[t("li",null,[l("如果是 【非 "),t("code",null,"root"),l(" 用户】，"),t("code",null,"“~”"),l(" 就等价于 "),t("code",null,"/home/用户名")]),t("li",null,[l("如果是 【 "),t("code",null,"root"),l(" 用户】，"),t("code",null,"“~”"),l(" 就等价于 "),t("code",null,"/root")])])],-1),x=t("ol",{start:"4"},[t("li",null,[t("p",null,[l("把下面的内容完整的复制进去，然后保存("),t("code",null,"ctrl+o"),l(")退出("),t("code",null,"ctrl+x"),l(")")]),t("div",{class:"language-html ext-html line-numbers-mode"},[t("pre",{class:"language-html"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("html")]),l(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),l("\n  "),t("span",{class:"token comment"},"\x3c!-- Text between angle brackets is an HTML tag and is not displayed.\n        Most tags, such as the HTML and /HTML tags that surround the contents of\n        a page, come in pairs; some tags, like HR, for a horizontal rule, stand\n        alone. Comments, such as the text you're reading, are not displayed when\n        the Web page is shown. The information between the HEAD and /HEAD tags is\n        not displayed. The information between the BODY and /BODY tags is displayed.--\x3e"),l("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("head")]),t("span",{class:"token punctuation"},">")]),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("title")]),t("span",{class:"token punctuation"},">")]),l("Enter a title, displayed at the top of the window."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("title")]),t("span",{class:"token punctuation"},">")]),l("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("head")]),t("span",{class:"token punctuation"},">")]),l("\n  "),t("span",{class:"token comment"},"\x3c!-- The information between the BODY and /BODY tags is displayed.--\x3e"),l("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("body")]),t("span",{class:"token punctuation"},">")]),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("h1")]),t("span",{class:"token punctuation"},">")]),l("Enter the main heading, usually the same as the title."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("h1")]),t("span",{class:"token punctuation"},">")]),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("p")]),t("span",{class:"token punctuation"},">")]),l("Be "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("b")]),t("span",{class:"token punctuation"},">")]),l("bold"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("b")]),t("span",{class:"token punctuation"},">")]),l(" in stating your key points. Put them in a list:"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("p")]),t("span",{class:"token punctuation"},">")]),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("ul")]),t("span",{class:"token punctuation"},">")]),l("\n      "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("li")]),t("span",{class:"token punctuation"},">")]),l("The first item in your list"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("li")]),t("span",{class:"token punctuation"},">")]),l("\n      "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("li")]),t("span",{class:"token punctuation"},">")]),l("The second item; "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("i")]),t("span",{class:"token punctuation"},">")]),l("italicize"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("i")]),t("span",{class:"token punctuation"},">")]),l(" key words"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("li")]),t("span",{class:"token punctuation"},">")]),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("ul")]),t("span",{class:"token punctuation"},">")]),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("p")]),t("span",{class:"token punctuation"},">")]),l("Improve your image by including an image."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("p")]),t("span",{class:"token punctuation"},">")]),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("p")]),t("span",{class:"token punctuation"},">")]),l("\n      "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("img")]),l(),t("span",{class:"token attr-name"},"src"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),l("https://i.imgur.com/SEBww.jpg"),t("span",{class:"token punctuation"},'"')]),l(),t("span",{class:"token attr-name"},"alt"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),l("A Great HTML Resource"),t("span",{class:"token punctuation"},'"')]),l(),t("span",{class:"token punctuation"},"/>")]),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("p")]),t("span",{class:"token punctuation"},">")]),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("p")]),t("span",{class:"token punctuation"},">")]),l("\n      Add a link to your favorite\n      "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("a")]),l(),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),l("https://www.dummies.com/"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),l("Web site"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("a")]),t("span",{class:"token punctuation"},">")]),l(". Break up your page\n      with a horizontal rule or two.\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("p")]),t("span",{class:"token punctuation"},">")]),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("hr")]),l(),t("span",{class:"token punctuation"},"/>")]),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("p")]),t("span",{class:"token punctuation"},">")]),l("\n      Finally, link to "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("a")]),l(),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),l("page2.html"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),l("another page"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("a")]),t("span",{class:"token punctuation"},">")]),l(" in your own Web\n      site.\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("p")]),t("span",{class:"token punctuation"},">")]),l("\n    "),t("span",{class:"token comment"},"\x3c!-- And add a copyright notice.--\x3e"),l("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),l("p")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token entity",title:"©"},"&#169;"),l(" Wiley Publishing, 2011"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("p")]),t("span",{class:"token punctuation"},">")]),l("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("body")]),t("span",{class:"token punctuation"},">")]),l("\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),l("html")]),t("span",{class:"token punctuation"},">")]),l("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br"),t("span",{class:"line-number"},"31"),t("br"),t("span",{class:"line-number"},"32"),t("br"),t("span",{class:"line-number"},"33"),t("br"),t("span",{class:"line-number"},"34"),t("br"),t("span",{class:"line-number"},"35"),t("br"),t("span",{class:"line-number"},"36"),t("br")])])]),t("li",null,[t("p",null,[l("修改 "),t("code",null,"nginx.conf"),l(" 并重启 "),t("code",null,"Nginx"),l(" 服务，将"),t("code",null,"80"),l("端口的 http 访问定位到刚才建立的 "),t("code",null,"html"),l(" 页面上")]),t("ol",null,[t("li",null,[t("p",null,[l("修改 "),t("code",null,"nginx.conf"),l(" 。")]),t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"sudo"),l(),t("span",{class:"token function"},"nano"),l(" /etc/nginx/nginx.conf\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])])]),t("li",null,[t("p",null,[l("将下面一段，添加在 "),t("code",null,"http{}"),l(" 内，然后保存("),t("code",null,"ctrl+o"),l(")退出("),t("code",null,"ctrl+x"),l(")。（记得将域名替换为之前准备好的、包含二级域名的真实域名）")]),t("div",{class:"language-text ext-text line-numbers-mode"},[t("pre",{class:"language-text"},[t("code",null,"        server {\n                listen 80;\n                server_name 二级域名.你的域名.com;\n                root /home/vpsadmin/www/webpage;\n                index index.html;\n        }\n")]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br")])]),t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"特别注意！"),t("p",null,[l("如我在【第 3 步】中的提示所说，请务必确保 "),t("code",null,"/home/vpsadmin/www/webpage"),l(" 改成你的实际文件路径。")])])]),t("li",null,[t("p",null,[l("让 "),t("code",null,"nginx"),l(" 重新载入配置使其生效")]),t("div",{class:"language-bash ext-sh line-numbers-mode"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"sudo"),l(" systemctl reload nginx\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br")])])]),t("li",null,[t("p",null,"完整的设置流程如下："),t("p",null,[t("img",{src:"/Xray-docs-next/assets/ch05-img02-nginx-conf-full.d3e1011d.gif",alt:"网页设置演示"})])]),t("li",null,[t("p",null,[l("此时如果你访问 "),t("code",null,"http://二级域名.你的域名.com"),l("，你看到这样的页面则说明成功：")]),t("p",null,[t("img",{src:"/Xray-docs-next/assets/ch05-img03-nginx-http-running.46c296a3.png",alt:"http网页成功"})])])])])],-1),y=t("h2",{id:"_5-4-常见错误的说明",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_5-4-常见错误的说明","aria-hidden":"true"},"#"),l(" 5.4 常见错误的说明")],-1),w=t("p",null,"首先，如果你一路按照文章的说明来操作，并且足够细心，那肯定不会出错。所以，我并不打算修改本文的写法。",-1),f=t("p",null,[l("那为什么依然有很多同学卡在了这一步，网页怎么也打不开呢？基本上就是两个字："),t("strong",null,"粗心"),l("。因为这里配置可能出现的问题只有两种，原因也只有两个。")],-1),v=t("p",null,"一、两种问题：",-1),T=t("ul",null,[t("li",null,[t("code",null,"nginx.conf"),l(" 里面的 "),t("code",null,"/home/vpsadmin/www/webpage"),l(" 这一条，与你的实际文件路径不符，"),t("code",null,"nginx"),l(" 找不到文件")]),t("li",null,[l("路径正确，但 "),t("code",null,"nginx"),l(" 无权读取")])],-1),_=t("p",null,"二、两个原因：",-1),L=t("ul",null,[t("li",null,[l("使用了【非 "),t("code",null,"root"),l(" 用户】，但仍然直接拷贝文中的命令不加修改。（这基本就等于抄答案时把同学的名字一起抄过去了）")]),t("li",null,[l("坚持使用【 "),t("code",null,"root"),l(" 用户】")])],-1),B=t("p",null,"碰到错误的同学，就回过头仔细看一下【5.3】中【第 3 步】和【第 5-2 步】的说明吧。",-1),H=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"注意"),t("p",null,[l("本文前期已经用了大量篇幅说明了使用【非 "),t("code",null,"root"),l(" 用户】对安全的重要性，全文也是基于此而写。所以，因使用【 "),t("code",null,"root"),l(" 用户】而导致的问题并不在本文的设计范围里。")]),t("p",null,[l("但我相信，坚持使用【 "),t("code",null,"root"),l(" 用户】的同学应该是有主见、动手能力强、或者有一定 Linux 基础的同学。问题的症结我已经全部说明了，我相信你一定可以自行解决。")])],-1),N=t("h2",{id:"_5-5-你的进度",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_5-5-你的进度","aria-hidden":"true"},"#"),l(" 5.5 你的进度")],-1),q=t("p",null,"至此，Xray 的第一个基础设施【网页】已经就位，我们马上就进入第二个基础设施【证书】吧！",-1),D=t("blockquote",null,[t("p",null,"⬛⬛⬛⬛⬛⬜⬜⬜ 62.5%")],-1);e.render=function(t,l){return n(),s(a,null,[c,o,u,p,i,r,k,g,d,b,m,h,x,y,w,f,v,T,_,L,B,H,N,q,D],64)};export default e;
