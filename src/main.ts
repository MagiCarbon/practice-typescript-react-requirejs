/// <reference path="./tsd.d.ts" />

requirejs.config({
    "baseUrl": "dist",
    "paths": {
        "react": "/lib/react/react.min",
        "react-dom": "/lib/react/react-dom.min"
    }
});

require(['app']);