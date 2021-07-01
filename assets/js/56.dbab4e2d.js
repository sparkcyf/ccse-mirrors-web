(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{567:function(t,a,e){"use strict";e.r(a);var r=e(27),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"epel-mirror"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#epel-mirror"}},[t._v("#")]),t._v(" "),e("RouterLink",{attrs:{to:"/epel/"}},[t._v("EPEL")]),t._v(" Mirror")],1),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://fedoraproject.org/wiki/EPEL",target:"_blank",rel:"noopener noreferrer"}},[t._v("EPEL"),e("OutboundLink")],1),t._v(": Extra Packages for Enterprise Linux")]),t._v(" "),e("h2",{attrs:{id:"backup-existing-configuration-edit-configuration-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backup-existing-configuration-edit-configuration-file"}},[t._v("#")]),t._v(" Backup Existing Configuration & Edit Configuration File")]),t._v(" "),e("p",[t._v("Use the following command to replace the software repository: (from "),e("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/epel/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TUNA"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -e "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s|^metalink=|#metalink=|g'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         -e "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s|^#baseurl=http://download.fedoraproject.org/pub|baseurl=https://mirrors.sustech.edu.cn|g'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         -i.bak "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         /etc/yum.repos.d/epel*.repo\n")])])]),e("h2",{attrs:{id:"refresh-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#refresh-cache"}},[t._v("#")]),t._v(" Refresh Cache")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum clean all "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" yum makecache\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);