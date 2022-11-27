(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.index = global.index || {}, global.index.js = factory()));
})(this, (function () { 'use strict';

	var supportSymbol = typeof Symbol === 'function' && Symbol["for"];
	var REACT_ELEMENT_TYPE = supportSymbol
	    ? Symbol["for"]('react.element')
	    : 0xeac7;

	var ReactElement = function (type, key, ref, props) {
	    var element = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        ref: ref,
	        props: props,
	        __mark: 'zhio'
	    };
	    return element;
	};
	var jsx = function (type, config) {
	    var mayChildren = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        mayChildren[_i - 2] = arguments[_i];
	    }
	    var key = null;
	    var ref = null;
	    var props = {};
	    for (var prop in config) {
	        var val = config[prop];
	        if (prop === 'key') {
	            if (val !== undefined) {
	                key = '' + val;
	            }
	            continue;
	        }
	        if (prop === 'ref') {
	            if (val !== undefined) {
	                ref = '' + val;
	            }
	            continue;
	        }
	        if ({}.hasOwnProperty.call(config, prop)) {
	            props[prop] = val;
	        }
	    }
	    var mayChildrenLength = mayChildren.length;
	    if (mayChildrenLength === 1) {
	        props.children = mayChildren[0];
	    }
	    else {
	        props.children = mayChildren;
	    }
	    return ReactElement(type, key, ref, props);
	};

	var index = {
	    version: '0.0.1',
	    createElement: jsx
	};

	return index;

}));
