(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{587:function(t,e,a){"use strict";a.r(e);var s=a(27),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"adoptopenjdk-mirrors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adoptopenjdk-mirrors"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"/AdoptOpenJDK"}},[t._v("AdoptOpenJDK")]),t._v(" Mirrors")]),t._v(" "),a("h2",{attrs:{id:"windows-macos-用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-macos-用户"}},[t._v("#")]),t._v(" Windows/macOS 用户")]),t._v(" "),a("p",[t._v("打开"),a("a",{attrs:{href:"https://mirrors.sustech.edu.cn/AdoptOpenJDK/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载页面"),a("OutboundLink")],1),t._v("，选择所需的版本，下载独立安装包。")]),t._v(" "),a("h2",{attrs:{id:"debian-ubuntu-用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debian-ubuntu-用户"}},[t._v("#")]),t._v(" Debian/Ubuntu 用户")]),t._v(" "),a("p",[t._v("首先信任 GPG 公钥:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n")])])]),a("p",[t._v("以Ubuntu 20.04 LTS 为例，在"),a("code",[t._v("/etc/apt/sources.list.d/AdoptOpenJDK.list")]),t._v("中新增一行（其他版本请将"),a("code",[t._v("focal")]),t._v("修改为响应的版本代号）：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("deb https://mirrors.sustech.edu.cn/AdoptOpenJDK/deb focal main\n")])])]),a("h2",{attrs:{id:"centos-rhel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-rhel"}},[t._v("#")]),t._v(" CentOS/RHEL")]),t._v(" "),a("p",[t._v("新建 "),a("code",[t._v("/etc/yum.repos.d/AdoptOpenJDK.repo")]),t._v("，内容为")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[AdoptOpenJDK]\nname=AdoptOpenJDK\nbaseurl=https://mirrors.sustech.edu.cn/AdoptOpenJDK/rpm/centos$releasever-$basearch/\nenabled=1\ngpgcheck=1\ngpgkey=https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public\n")])])]),a("p",[t._v("再执行")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum makecache\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/adoptopenjdk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mirrors.tuna.tsinghua.edu.cn/help/adoptopenjdk/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);