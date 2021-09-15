import{d as t}from"./app.baa21783.js";const e={},d=t('<h1 id="mux-cool-协议" tabindex="-1"><a class="header-anchor" href="#mux-cool-协议" aria-hidden="true">#</a> Mux.Cool 协议</h1><p>Mux.Cool 协议是一个多路复用传输协议，用于在一条已建立的数据流中传输多个各自独立的数据流。</p><h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><p>当前版本是 1 Beta。</p><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h2><h3 id="底层协议" tabindex="-1"><a class="header-anchor" href="#底层协议" aria-hidden="true">#</a> 底层协议</h3><p>Mux.Cool 必须运行在一个已建立的可靠数据流之上。</p><h2 id="通讯过程" tabindex="-1"><a class="header-anchor" href="#通讯过程" aria-hidden="true">#</a> 通讯过程</h2><p>一个 Mux.Cool 连接中可传输若干个子连接，每个子连接有一个独立的 ID 和状态。传输过程由帧（Frame）组成，每一帧用于传输一个特定的子连接的数据。</p><h3 id="客户端行为" tabindex="-1"><a class="header-anchor" href="#客户端行为" aria-hidden="true">#</a> 客户端行为</h3><p>当有连接需求时并且没有现有可用的连接时，客户端向服务器发起一个新连接，以下称为“主连接”。</p><ol><li>一个主连接可用于发送若干个子连接。客户端可自主决定主连接可承载的子连接数量。</li><li>对于一个新的子连接，客户端必须发送状态<code>New</code>以通知服务器建立子连接，然后使用状态<code>Keep</code>来传送数据。</li><li>当子连接结束时，客户端发送<code>End</code>状态来通知服务器关闭子连接。</li><li>客户端可自行决定何时关闭主连接，但必须确定服务器也同时保持连接。</li><li>客户端可使用 KeepAlive 状态来避免服务器关闭主连接。</li></ol><h3 id="服务器端行为" tabindex="-1"><a class="header-anchor" href="#服务器端行为" aria-hidden="true">#</a> 服务器端行为</h3><p>当服务器端接收到新的子连接时，服务器应当按正常的连接来处理。</p><ol><li>当收到状态<code>End</code>时，服务器端可以关闭对目标地址的上行连接。</li><li>在服务器的响应中，必须使用与请求相同的 ID 来传输子连接的数据。</li><li>服务器不能使用<code>New</code>状态。</li><li>服务器可使用 KeepAlive 状态来避免客户端关闭主连接。</li></ol><h2 id="传输格式" tabindex="-1"><a class="header-anchor" href="#传输格式" aria-hidden="true">#</a> 传输格式</h2><p>Mux.Cool 使用对称传输格式，即客户端和服务器发送和接收相同格式的数据。</p><h3 id="帧格式" tabindex="-1"><a class="header-anchor" href="#帧格式" aria-hidden="true">#</a> 帧格式</h3><table><thead><tr><th>2 字节</th><th>L 字节</th><th>X 字节</th></tr></thead><tbody><tr><td>元数据长度 L</td><td>元数据</td><td>额外数据</td></tr></tbody></table><h3 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据" aria-hidden="true">#</a> 元数据</h3><p>元数据有若干种类型，由状态 S 来区分。所有类型的元数据都包含 ID 和 Opt 两项，其含义为：</p><ul><li>ID: 子连接的唯一标识</li><li>Opt: <ul><li>D(0x01): 有额外数据</li></ul></li></ul><p>当选项 Opt(D) 开启时，额外数据格式如下：</p><table><thead><tr><th>2 字节</th><th>L 字节</th></tr></thead><tbody><tr><td>长度 L</td><td>数据</td></tr></tbody></table><h3 id="新建子连接-new" tabindex="-1"><a class="header-anchor" href="#新建子连接-new" aria-hidden="true">#</a> 新建子连接 (New)</h3><table><thead><tr><th>2 字节</th><th>1 字节</th><th>1 字节</th><th>1 字节</th><th>2 字节</th><th>1 字节</th><th>X 字节</th></tr></thead><tbody><tr><td>ID</td><td>0x01</td><td>选项 Opt</td><td>网络类型 N</td><td>端口</td><td>地址类型 T</td><td>地址 A</td></tr></tbody></table><p>其中：</p><ul><li>网络类型 N： <ul><li>0x01：TCP，表示当前子连接的流量应当以 TCP 的方式发送至目标。</li><li>0x02：UDP，表示当前子连接的流量应当以 UDP 的方式发送至目标。</li></ul></li><li>地址类型 T： <ul><li>0x01：IPv4</li><li>0x02：域名</li><li>0x03：IPv6</li></ul></li><li>地址 A： <ul><li>当 T = 0x01 时，A 为 4 字节 IPv4 地址；</li><li>当 T = 0x02 时，A 为 1 字节长度（L） + L 字节域名；</li><li>当 T = 0x03 时，A 为 16 字节 IPv6 地址；</li></ul></li></ul><p>在新建子连接时，若 Opt(D) 开启，则这一帧所带的数据需要被发往目标主机。</p><h3 id="保持子连接-keep" tabindex="-1"><a class="header-anchor" href="#保持子连接-keep" aria-hidden="true">#</a> 保持子连接 (Keep)</h3><table><thead><tr><th>2 字节</th><th>1 字节</th><th>1 字节</th></tr></thead><tbody><tr><td>ID</td><td>0x02</td><td>选项 Opt</td></tr></tbody></table><p>在保持子连接时，若 Opt(D) 开启，则这一帧所带的数据需要被发往目标主机。</p><h3 id="关闭子连接-end" tabindex="-1"><a class="header-anchor" href="#关闭子连接-end" aria-hidden="true">#</a> 关闭子连接 (End)</h3><table><thead><tr><th>2 字节</th><th>1 字节</th><th>1 字节</th></tr></thead><tbody><tr><td>ID</td><td>0x03</td><td>选项 Opt</td></tr></tbody></table><p>在保持子连接时，若 Opt(D) 开启，则这一帧所带的数据需要被发往目标主机。</p><h3 id="保持连接-keepalive" tabindex="-1"><a class="header-anchor" href="#保持连接-keepalive" aria-hidden="true">#</a> 保持连接 (KeepAlive)</h3><table><thead><tr><th>2 字节</th><th>1 字节</th><th>1 字节</th></tr></thead><tbody><tr><td>ID</td><td>0x04</td><td>选项 Opt</td></tr></tbody></table><p>在保持连接时:</p><ul><li>若 Opt(D) 开启，则这一帧所带的数据必须被丢弃。</li><li>ID 可为随机值。</li></ul><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>Mux.Cool 协议与底层协议无关，理论上可以使用任何可靠的流式连接来传输 Mux.Cool 的协议数据。</p><p>在目标导向的协议如 Shadowsocks 和 VMess 协议中，连接建立时必须包含一个指定的地址。 为了保持兼容性，Mux.Cool 协议指定地址为“v1.mux.cool”。即当主连接的目标地址与之匹配时，则进行 Mux.Cool 方式的转发，否则按传统方式进行转发。</p>',42);e.render=function(t,e){return d};export default e;
