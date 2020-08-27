const shelljs = require("shelljs");

shelljs.cat("patchFile").exec("patch -p0");
