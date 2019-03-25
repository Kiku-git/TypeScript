//// [/src/logic/decls/index.d.ts]
export declare function getSecondsInDay(): number;
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/src/logic/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "declarationDir": "decls",
        "sourceMap": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    },
    "references": [
        { "path": "../core" }
    ]
}


//// [/src/logic/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "/lib/lib.d.ts": {
        "version": "/lib/lib.d.ts",
        "signature": "/lib/lib.d.ts"
      },
      "/lib/lib.es5.d.ts": {
        "version": "/lib/lib.es5.d.ts",
        "signature": "/lib/lib.es5.d.ts"
      },
      "/lib/lib.dom.d.ts": {
        "version": "/lib/lib.dom.d.ts",
        "signature": "/lib/lib.dom.d.ts"
      },
      "/lib/lib.webworker.importscripts.d.ts": {
        "version": "/lib/lib.webworker.importscripts.d.ts",
        "signature": "/lib/lib.webworker.importscripts.d.ts"
      },
      "/lib/lib.scripthost.d.ts": {
        "version": "/lib/lib.scripthost.d.ts",
        "signature": "/lib/lib.scripthost.d.ts"
      },
      "/src/core/index.ts": {
        "version": "-13851440507",
        "signature": "-13851440507"
      },
      "/src/core/anothermodule.ts": {
        "version": "7652028357",
        "signature": "7652028357"
      },
      "/src/logic/index.ts": {
        "version": "-5786964698",
        "signature": "-6548680073"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "declarationDir": "/src/logic/decls",
      "sourceMap": true,
      "forceConsistentCasingInFileNames": true,
      "skipDefaultLibCheck": true,
      "configFilePath": "/src/logic/tsconfig.json"
    },
    "referencedMap": {
      "/src/logic/index.ts": [
        "/src/core/anothermodule.d.ts",
        "/src/core/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "/src/logic/index.ts": [
        "/src/core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "/lib/lib.d.ts",
      "/lib/lib.dom.d.ts",
      "/lib/lib.es5.d.ts",
      "/lib/lib.scripthost.d.ts",
      "/lib/lib.webworker.importscripts.d.ts",
      "/src/core/anothermodule.ts",
      "/src/core/index.ts",
      "/src/logic/index.ts"
    ]
  },
  "version": "FakeTSVersion"
}

//// [/src/tests/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "/lib/lib.d.ts": {
        "version": "/lib/lib.d.ts",
        "signature": "/lib/lib.d.ts"
      },
      "/lib/lib.es5.d.ts": {
        "version": "/lib/lib.es5.d.ts",
        "signature": "/lib/lib.es5.d.ts"
      },
      "/lib/lib.dom.d.ts": {
        "version": "/lib/lib.dom.d.ts",
        "signature": "/lib/lib.dom.d.ts"
      },
      "/lib/lib.webworker.importscripts.d.ts": {
        "version": "/lib/lib.webworker.importscripts.d.ts",
        "signature": "/lib/lib.webworker.importscripts.d.ts"
      },
      "/lib/lib.scripthost.d.ts": {
        "version": "/lib/lib.scripthost.d.ts",
        "signature": "/lib/lib.scripthost.d.ts"
      },
      "/src/core/index.ts": {
        "version": "-13851440507",
        "signature": "-13851440507"
      },
      "/src/core/anothermodule.ts": {
        "version": "7652028357",
        "signature": "7652028357"
      },
      "/src/logic/index.ts": {
        "version": "-6548680073",
        "signature": "-6548680073"
      },
      "/src/tests/index.ts": {
        "version": "12336236525",
        "signature": "-9209611"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "forceConsistentCasingInFileNames": true,
      "skipDefaultLibCheck": true,
      "configFilePath": "/src/tests/tsconfig.json"
    },
    "referencedMap": {
      "/src/logic/index.ts": [
        "/src/core/anothermodule.d.ts"
      ],
      "/src/tests/index.ts": [
        "/src/core/anothermodule.d.ts",
        "/src/core/index.d.ts",
        "/src/logic/decls/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "/src/logic/index.ts": [
        "/src/core/anothermodule.d.ts"
      ],
      "/src/tests/index.ts": [
        "/src/core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "/lib/lib.d.ts",
      "/lib/lib.dom.d.ts",
      "/lib/lib.es5.d.ts",
      "/lib/lib.scripthost.d.ts",
      "/lib/lib.webworker.importscripts.d.ts",
      "/src/core/anothermodule.ts",
      "/src/core/index.ts",
      "/src/logic/index.ts",
      "/src/tests/index.ts"
    ]
  },
  "version": "FakeTSVersion"
}

