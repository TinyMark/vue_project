/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_module_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_module2_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_index_less__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_index2_scss__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_index2_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_index2_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tpl_footer_tpl__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tpl_footer_tpl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tpl_footer_tpl__);
// 导入my_module模块中的min与max方法

// 导入my_module2模块中的default方法


// 如果引入的是一个文件，不需要导出里面的内容，就这样写



// 加载一段页面底部模版


console.log(__WEBPACK_IMPORTED_MODULE_0__my_module_js__["b" /* min */]([32,12,3,6]));
console.log(__WEBPACK_IMPORTED_MODULE_0__my_module_js__["a" /* max */]([32,12,3,6]));

__WEBPACK_IMPORTED_MODULE_1__my_module2_js__["a" /* default */]('真的随便吗');

document.body.innerHTML = __WEBPACK_IMPORTED_MODULE_4__tpl_footer_tpl___default.a;
console.log(__WEBPACK_IMPORTED_MODULE_4__tpl_footer_tpl___default.a);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = min;
/* harmony export (immutable) */ __webpack_exports__["a"] = max;


function min(arr) {
    return Math.min(...arr);
};

function max(arr) {
    return Math.max(...arr);
};



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(msg) {
    console.log(msg);
});;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!./index.less", function() {
			var newContent = require("!!../../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!./index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "body {\n  background-color: deeppink;\n  background-image: url(" + __webpack_require__(7) + ");\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!./index2.scss", function() {
			var newContent = require("!!../../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!./index2.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "body {\n  font-size: 30px;\n  background-image: url(" + __webpack_require__(11) + "); }\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "94959bdbb82046fec515752820f6f93e.png";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <p>这是底部公共的模版</p>\r\n</footer>";

/***/ })
/******/ ]);