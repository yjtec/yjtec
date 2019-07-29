// ref:
// - https://umijs.org/plugin/develop.html
import { join } from "path";
import { existsSync } from "fs";

const debug = require("debug")("umi-plugin-pro-block");

/*
export interface ProBlockOption {
  moveMock?: boolean;
  moveService?: boolean;
  modifyRequest?: boolean;
  autoAddMenu?: boolean;
}
*/

export default function(api, opts) {
  const { paths, config } = api;

  debug("options", opts);

  let hasUtil, hasService, newFileName;
  api.beforeBlockWriting(({ sourcePath, blockPath }) => {
    const utilsPath = join(paths.absSrcPath, `utils`);
    hasUtil =
      existsSync(join(utilsPath, "request.js")) ||
      existsSync(join(utilsPath, "request.ts"));
    hasService = existsSync(join(sourcePath, "./src/service.js"));
    newFileName = blockPath.replace(/^\//, "").replace(/\//g, "");
    debug(
      "beforeBlockWriting... hasUtil:",
      hasUtil,
      "hasService:",
      hasService,
      "newFileName:",
      newFileName
    );
  });

  api._modifyBlockTarget((target, { sourceName }) => {
    //console.log(target,sourceName,newFileName);
    ///Volumes/work/yj/yjtec/ant-design-yjtec/src/pages/User/d/service.js service.js
    if (sourceName === "_mock.js" && opts.moveMock !== false) {
      // src/pages/test/t/_mock.js -> mock/test-t.js
      return join(paths.cwd, "mock", `${newFileName}.js`);
    }
    if (
      sourceName === "service.js" &&
      hasService &&
      opts.moveService !== false
    ) {
      // src/pages/test/t/service.js -> services/test.t.js
      return join(
        paths.absSrcPath,
        config.singular ? "service" : "services",
        `${newFileName}.js`
      );
    }
    return target;
  });

  // umi-request -> @utils/request
  // src/pages/test/t/service.js -> services/test.t.js
  api._modifyBlockFile(content => {
    if (hasUtil && opts.modifyRequest !== false) {
      content = content.replace(
        /[\'\"]umi\-request[\'\"]/g,
        `'@/util${config.singular ? "" : "s"}/request'`
      );
    }
    if (hasService && opts.moveService !== false) {
      content = content.replace(
        /[\'\"][\.\/]+service[\'\"]/g,
        `'@/service${config.singular ? "" : "s"}/${newFileName}'`
      );
    }

    //替换components
    //import Login from 'ant-design-yjtec/lib/Login';
    content = content.replace(
      /[\'\"']+ant-design-yjtec\/lib/g,
      `'@/components`
    )

    return content;
  });

  api._modifyBlockNewRouteConfig(memo => {
    if (opts.autoAddMenu === false) {
      return memo;
    }
    return {
      name: memo.path.split("/").pop(),
      ...memo
    };
  });
}
