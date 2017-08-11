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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _img = __webpack_require__(1);

var _img2 = _interopRequireDefault(_img);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_img2.default);
var body = document.querySelector('body');
body.innerHTML = _img2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<img class=\"img\" src=\"" + __webpack_require__(2) + "\" alt=\"img\">";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".img {\n  width: 200px;\n  height: 200px;\n}\nbody {\n  background-image: url(" + __webpack_require__(6) + ");\n  background-size: cover;\n}\n", ""]);

// exports


/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "12df3bf73ad9562cda326fa29218a8e0.jpg";

/***/ }),
/* 7 */
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


/***/ })
/******/ ]);