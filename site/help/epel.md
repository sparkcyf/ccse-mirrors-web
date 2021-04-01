---
sidebarShare: true
prev: false
next: false
---

# EPEL Mirror

## Introduction

[EPEL](https://fedoraproject.org/wiki/EPEL): Extra Packages for Enterprise Linux

## Backup Existing Configuration & Edit Configuration File

Use the following command to replace the software repository: (from [TUNA](https://mirrors.tuna.tsinghua.edu.cn/help/epel/))

``` bash
sudo sed -e 's|^mirrorlist=|#mirrorlist=|g' \
         -e 's|^#baseurl=http://download.fedoraproject.org/pub/|baseurl=https://mirrors.sustech.edu.cn|g' \
         -i.bak \
         /etc/yum.repos.d/epel*.repo
```

## Refresh Cache

``` bash
sudo yum clean all && yum makecache
```

