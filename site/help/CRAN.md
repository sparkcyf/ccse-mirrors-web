---
sidebarShare: true
prev: false
next: false
---

# [CRAN](/CRAN/) Mirror

## Temporary Use

``` sh
install.packages("<PackageName>", repos="https://mirrors.sustech.edu.cn/CRAN")
```

## Change the Configuration File

And you can manually create the configuration file and edit it with your text editor:

``` toml
options("repos" = c(CRAN="https://mirrors.sustech.edu.cn/CRAN"))
```

Path of the per-user configuration file:
- Linux: `$HOME/.Rprofile`
- macOS: `$HOME/.Rprofile`