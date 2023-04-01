/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/idletimer/idletimer.js":
/*!*************************************!*\
  !*** ./libs/idletimer/idletimer.js ***!
  \*************************************/
/***/ (function() {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n/*! Idle Timer - v1.1.1 - 2020-06-25\r\n * https://github.com/thorst/jquery-idletimer\r\n * Copyright (c) 2020 Paul Irish; Licensed MIT */\n\n/*\r\n\tmousewheel (deprecated) -> IE6.0, Chrome, Opera, Safari\r\n\tDOMMouseScroll (deprecated) -> Firefox 1.0\r\n\twheel (standard) -> Chrome 31, Firefox 17, IE9, Firefox Mobile 17.0\r\n\r\n\t//No need to use, use DOMMouseScroll\r\n\tMozMousePixelScroll -> Firefox 3.5, Firefox Mobile 1.0\r\n\r\n\t//Events\r\n\tWheelEvent -> see wheel\r\n\tMouseWheelEvent -> see mousewheel\r\n\tMouseScrollEvent -> Firefox 3.5, Firefox Mobile 1.0\r\n*/\n(function ($) {\n  $.idleTimer = function (firstParam, elem) {\n    var opts;\n\n    if (_typeof(firstParam) === 'object') {\n      opts = firstParam;\n      firstParam = null;\n    } else if (typeof firstParam === 'number') {\n      opts = {\n        timeout: firstParam\n      };\n      firstParam = null;\n    } // element to watch\n\n\n    elem = elem || document; // defaults that are to be stored as instance props on the elem\n\n    opts = $.extend({\n      idle: false,\n      // indicates if the user is idle\n      timeout: 30000,\n      // the amount of time (ms) before the user is considered idle\n      events: 'mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove' // define active events\n\n    }, opts);\n\n    var jqElem = $(elem),\n        obj = jqElem.data('idleTimerObj') || {},\n\n    /* (intentionally not documented)\r\n     * Toggles the idle state and fires an appropriate event.\r\n     * @return {void}\r\n     */\n    toggleIdleState = function toggleIdleState(e) {\n      var obj = $.data(elem, 'idleTimerObj') || {}; // toggle the state\n\n      obj.idle = !obj.idle; // store toggle state date time\n\n      obj.olddate = +new Date(); // create a custom event, with state and name space\n\n      var event = $.Event((obj.idle ? 'idle' : 'active') + '.idleTimer'); // trigger event on object with elem and copy of obj\n\n      $(elem).trigger(event, [elem, $.extend({}, obj), e]);\n    },\n\n    /**\r\n     * Handle event triggers\r\n     * @return {void}\r\n     * @method event\r\n     * @static\r\n     */\n    handleEvent = function handleEvent(e) {\n      var obj = $.data(elem, 'idleTimerObj') || {}; // ignore writting to storage unless related to idleTimer\n\n      if (e.type === 'storage' && e.originalEvent.key !== obj.timerSyncId) {\n        return;\n      } // this is already paused, ignore events for now\n\n\n      if (obj.remaining != null) {\n        return;\n      }\n      /*\r\n            mousemove is kinda buggy, it can be triggered when it should be idle.\r\n            Typically is happening between 115 - 150 milliseconds after idle triggered.\r\n            @psyafter & @kaellis report \"always triggered if using modal (jQuery ui, with overlay)\"\r\n            @thorst has similar issues on ios7 \"after $.scrollTop() on text area\"\r\n            */\n\n\n      if (e.type === 'mousemove') {\n        // if coord are same, it didn't move\n        if (e.pageX === obj.pageX && e.pageY === obj.pageY) {\n          return;\n        } // if coord don't exist how could it move\n\n\n        if (typeof e.pageX === 'undefined' && typeof e.pageY === 'undefined') {\n          return;\n        } // under 200 ms is hard to do, and you would have to stop, as continuous activity will bypass this\n\n\n        var elapsed = +new Date() - obj.olddate;\n\n        if (elapsed < 200) {\n          return;\n        }\n      } // clear any existing timeout\n\n\n      clearTimeout(obj.tId); // if the idle timer is enabled, flip\n\n      if (obj.idle) {\n        toggleIdleState(e);\n      } // store when user was last active\n\n\n      obj.lastActive = +new Date(); // update mouse coord\n\n      obj.pageX = e.pageX;\n      obj.pageY = e.pageY; // sync lastActive\n\n      if (e.type !== 'storage' && obj.timerSyncId) {\n        if (typeof localStorage !== 'undefined') {\n          localStorage.setItem(obj.timerSyncId, obj.lastActive);\n        }\n      } // set a new timeout\n\n\n      obj.tId = setTimeout(toggleIdleState, obj.timeout);\n    },\n\n    /**\r\n     * Restore initial settings and restart timer\r\n     * @return {void}\r\n     * @method reset\r\n     * @static\r\n     */\n    reset = function reset() {\n      var obj = $.data(elem, 'idleTimerObj') || {}; // reset settings\n\n      obj.idle = obj.idleBackup;\n      obj.olddate = +new Date();\n      obj.lastActive = obj.olddate;\n      obj.remaining = null; // reset Timers\n\n      clearTimeout(obj.tId);\n\n      if (!obj.idle) {\n        obj.tId = setTimeout(toggleIdleState, obj.timeout);\n      }\n    },\n\n    /**\r\n     * Store remaining time, stop timer\r\n     * You can pause from an idle OR active state\r\n     * @return {void}\r\n     * @method pause\r\n     * @static\r\n     */\n    pause = function pause() {\n      var obj = $.data(elem, 'idleTimerObj') || {}; // this is already paused\n\n      if (obj.remaining != null) {\n        return;\n      } // define how much is left on the timer\n\n\n      obj.remaining = obj.timeout - (+new Date() - obj.olddate); // clear any existing timeout\n\n      clearTimeout(obj.tId);\n    },\n\n    /**\r\n     * Start timer with remaining value\r\n     * @return {void}\r\n     * @method resume\r\n     * @static\r\n     */\n    resume = function resume() {\n      var obj = $.data(elem, 'idleTimerObj') || {}; // this isn't paused yet\n\n      if (obj.remaining == null) {\n        return;\n      } // start timer\n\n\n      if (!obj.idle) {\n        obj.tId = setTimeout(toggleIdleState, obj.remaining);\n      } // clear remaining\n\n\n      obj.remaining = null;\n    },\n\n    /**\r\n     * Stops the idle timer. This removes appropriate event handlers\r\n     * and cancels any pending timeouts.\r\n     * @return {void}\r\n     * @method destroy\r\n     * @static\r\n     */\n    destroy = function destroy() {\n      var obj = $.data(elem, 'idleTimerObj') || {}; //clear any pending timeouts\n\n      clearTimeout(obj.tId); //Remove data\n\n      jqElem.removeData('idleTimerObj'); //detach the event handlers\n\n      jqElem.off('._idleTimer');\n    },\n\n    /**\r\n     * Returns the time until becoming idle\r\n     * @return {number}\r\n     * @method remainingtime\r\n     * @static\r\n     */\n    remainingtime = function remainingtime() {\n      var obj = $.data(elem, 'idleTimerObj') || {}; //If idle there is no time remaining\n\n      if (obj.idle) {\n        return 0;\n      } //If its paused just return that\n\n\n      if (obj.remaining != null) {\n        return obj.remaining;\n      } //Determine remaining, if negative idle didn't finish flipping, just return 0\n\n\n      var remaining = obj.timeout - (+new Date() - obj.lastActive);\n\n      if (remaining < 0) {\n        remaining = 0;\n      } //If this is paused return that number, else return current remaining\n\n\n      return remaining;\n    }; // determine which function to call\n\n\n    if (firstParam === null && typeof obj.idle !== 'undefined') {\n      // they think they want to init, but it already is, just reset\n      reset();\n      return jqElem;\n    } else if (firstParam === null) {// they want to init\n    } else if (firstParam !== null && typeof obj.idle === 'undefined') {\n      // they want to do something, but it isnt init\n      // not sure the best way to handle this\n      return false;\n    } else if (firstParam === 'destroy') {\n      destroy();\n      return jqElem;\n    } else if (firstParam === 'pause') {\n      pause();\n      return jqElem;\n    } else if (firstParam === 'resume') {\n      resume();\n      return jqElem;\n    } else if (firstParam === 'reset') {\n      reset();\n      return jqElem;\n    } else if (firstParam === 'getRemainingTime') {\n      return remainingtime();\n    } else if (firstParam === 'getElapsedTime') {\n      return +new Date() - obj.olddate;\n    } else if (firstParam === 'getLastActiveTime') {\n      return obj.lastActive;\n    } else if (firstParam === 'isIdle') {\n      return obj.idle;\n    } // Test via a getter in the options object to see if the passive property is accessed\n    // This isnt working in jquery, though is planned for 4.0\n    // https://github.com/jquery/jquery/issues/2871\n\n    /*var supportsPassive = false;\r\n      try {\r\n          var Popts = Object.defineProperty({}, \"passive\", {\r\n              get: function() {\r\n                  supportsPassive = true;\r\n              }\r\n          });\r\n          window.addEventListener(\"test\", null, Popts);\r\n      } catch (e) {}\r\n    */\n\n    /* (intentionally not documented)\r\n     * Handles a user event indicating that the user isn't idle. namespaced with internal idleTimer\r\n     * @param {Event} event A DOM2-normalized event object.\r\n     * @return {void}\r\n     */\n\n\n    jqElem.on((opts.events + ' ').split(' ').join('._idleTimer ').trim(), function (e) {\n      handleEvent(e);\n    }); //}, supportsPassive ? { passive: true } : false);\n\n    if (opts.timerSyncId) {\n      $(window).on('storage', handleEvent);\n    } // Internal Object Properties, This isn't all necessary, but we\n    // explicitly define all keys here so we know what we are working with\n\n\n    obj = $.extend({}, {\n      olddate: +new Date(),\n      // the last time state changed\n      lastActive: +new Date(),\n      // the last time timer was active\n      idle: opts.idle,\n      // current state\n      idleBackup: opts.idle,\n      // backup of idle parameter since it gets modified\n      timeout: opts.timeout,\n      // the interval to change state\n      remaining: null,\n      // how long until state changes\n      timerSyncId: opts.timerSyncId,\n      // localStorage key to use for syncing this timer\n      tId: null,\n      // the idle timer setTimeout\n      pageX: null,\n      // used to store the mouse coord\n      pageY: null\n    }); // set a timeout to toggle state. May wish to omit this in some situations\n\n    if (!obj.idle) {\n      obj.tId = setTimeout(toggleIdleState, obj.timeout);\n    } // store our instance on the object\n\n\n    $.data(elem, 'idleTimerObj', obj);\n    return jqElem;\n  }; // This allows binding to element\n\n\n  $.fn.idleTimer = function (firstParam) {\n    if (this[0]) {\n      return $.idleTimer(firstParam, this[0]);\n    }\n\n    return this;\n  };\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2lkbGV0aW1lci9pZGxldGltZXIuanMuanMiLCJuYW1lcyI6WyIkIiwiaWRsZVRpbWVyIiwiZmlyc3RQYXJhbSIsImVsZW0iLCJvcHRzIiwidGltZW91dCIsImRvY3VtZW50IiwiZXh0ZW5kIiwiaWRsZSIsImV2ZW50cyIsImpxRWxlbSIsIm9iaiIsImRhdGEiLCJ0b2dnbGVJZGxlU3RhdGUiLCJlIiwib2xkZGF0ZSIsIkRhdGUiLCJldmVudCIsIkV2ZW50IiwidHJpZ2dlciIsImhhbmRsZUV2ZW50IiwidHlwZSIsIm9yaWdpbmFsRXZlbnQiLCJrZXkiLCJ0aW1lclN5bmNJZCIsInJlbWFpbmluZyIsInBhZ2VYIiwicGFnZVkiLCJlbGFwc2VkIiwiY2xlYXJUaW1lb3V0IiwidElkIiwibGFzdEFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXRUaW1lb3V0IiwicmVzZXQiLCJpZGxlQmFja3VwIiwicGF1c2UiLCJyZXN1bWUiLCJkZXN0cm95IiwicmVtb3ZlRGF0YSIsIm9mZiIsInJlbWFpbmluZ3RpbWUiLCJvbiIsInNwbGl0Iiwiam9pbiIsInRyaW0iLCJ3aW5kb3ciLCJmbiIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJlc3QvLi9saWJzL2lkbGV0aW1lci9pZGxldGltZXIuanM/ZDkzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgSWRsZSBUaW1lciAtIHYxLjEuMSAtIDIwMjAtMDYtMjVcclxuICogaHR0cHM6Ly9naXRodWIuY29tL3Rob3JzdC9qcXVlcnktaWRsZXRpbWVyXHJcbiAqIENvcHlyaWdodCAoYykgMjAyMCBQYXVsIElyaXNoOyBMaWNlbnNlZCBNSVQgKi9cclxuLypcclxuXHRtb3VzZXdoZWVsIChkZXByZWNhdGVkKSAtPiBJRTYuMCwgQ2hyb21lLCBPcGVyYSwgU2FmYXJpXHJcblx0RE9NTW91c2VTY3JvbGwgKGRlcHJlY2F0ZWQpIC0+IEZpcmVmb3ggMS4wXHJcblx0d2hlZWwgKHN0YW5kYXJkKSAtPiBDaHJvbWUgMzEsIEZpcmVmb3ggMTcsIElFOSwgRmlyZWZveCBNb2JpbGUgMTcuMFxyXG5cclxuXHQvL05vIG5lZWQgdG8gdXNlLCB1c2UgRE9NTW91c2VTY3JvbGxcclxuXHRNb3pNb3VzZVBpeGVsU2Nyb2xsIC0+IEZpcmVmb3ggMy41LCBGaXJlZm94IE1vYmlsZSAxLjBcclxuXHJcblx0Ly9FdmVudHNcclxuXHRXaGVlbEV2ZW50IC0+IHNlZSB3aGVlbFxyXG5cdE1vdXNlV2hlZWxFdmVudCAtPiBzZWUgbW91c2V3aGVlbFxyXG5cdE1vdXNlU2Nyb2xsRXZlbnQgLT4gRmlyZWZveCAzLjUsIEZpcmVmb3ggTW9iaWxlIDEuMFxyXG4qL1xyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAkLmlkbGVUaW1lciA9IGZ1bmN0aW9uIChmaXJzdFBhcmFtLCBlbGVtKSB7XHJcbiAgICB2YXIgb3B0cztcclxuICAgIGlmICh0eXBlb2YgZmlyc3RQYXJhbSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgb3B0cyA9IGZpcnN0UGFyYW07XHJcbiAgICAgIGZpcnN0UGFyYW0gPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RQYXJhbSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgb3B0cyA9IHsgdGltZW91dDogZmlyc3RQYXJhbSB9O1xyXG4gICAgICBmaXJzdFBhcmFtID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGVtZW50IHRvIHdhdGNoXHJcbiAgICBlbGVtID0gZWxlbSB8fCBkb2N1bWVudDtcclxuXHJcbiAgICAvLyBkZWZhdWx0cyB0aGF0IGFyZSB0byBiZSBzdG9yZWQgYXMgaW5zdGFuY2UgcHJvcHMgb24gdGhlIGVsZW1cclxuICAgIG9wdHMgPSAkLmV4dGVuZChcclxuICAgICAge1xyXG4gICAgICAgIGlkbGU6IGZhbHNlLCAvLyBpbmRpY2F0ZXMgaWYgdGhlIHVzZXIgaXMgaWRsZVxyXG4gICAgICAgIHRpbWVvdXQ6IDMwMDAwLCAvLyB0aGUgYW1vdW50IG9mIHRpbWUgKG1zKSBiZWZvcmUgdGhlIHVzZXIgaXMgY29uc2lkZXJlZCBpZGxlXHJcbiAgICAgICAgZXZlbnRzOlxyXG4gICAgICAgICAgJ21vdXNlbW92ZSBrZXlkb3duIHdoZWVsIERPTU1vdXNlU2Nyb2xsIG1vdXNld2hlZWwgbW91c2Vkb3duIHRvdWNoc3RhcnQgdG91Y2htb3ZlIE1TUG9pbnRlckRvd24gTVNQb2ludGVyTW92ZScgLy8gZGVmaW5lIGFjdGl2ZSBldmVudHNcclxuICAgICAgfSxcclxuICAgICAgb3B0c1xyXG4gICAgKTtcclxuXHJcbiAgICB2YXIganFFbGVtID0gJChlbGVtKSxcclxuICAgICAgb2JqID0ganFFbGVtLmRhdGEoJ2lkbGVUaW1lck9iaicpIHx8IHt9LFxyXG4gICAgICAvKiAoaW50ZW50aW9uYWxseSBub3QgZG9jdW1lbnRlZClcclxuICAgICAgICogVG9nZ2xlcyB0aGUgaWRsZSBzdGF0ZSBhbmQgZmlyZXMgYW4gYXBwcm9wcmlhdGUgZXZlbnQuXHJcbiAgICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgICAqL1xyXG4gICAgICB0b2dnbGVJZGxlU3RhdGUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBvYmogPSAkLmRhdGEoZWxlbSwgJ2lkbGVUaW1lck9iaicpIHx8IHt9O1xyXG5cclxuICAgICAgICAvLyB0b2dnbGUgdGhlIHN0YXRlXHJcbiAgICAgICAgb2JqLmlkbGUgPSAhb2JqLmlkbGU7XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHRvZ2dsZSBzdGF0ZSBkYXRlIHRpbWVcclxuICAgICAgICBvYmoub2xkZGF0ZSA9ICtuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYSBjdXN0b20gZXZlbnQsIHdpdGggc3RhdGUgYW5kIG5hbWUgc3BhY2VcclxuICAgICAgICB2YXIgZXZlbnQgPSAkLkV2ZW50KChvYmouaWRsZSA/ICdpZGxlJyA6ICdhY3RpdmUnKSArICcuaWRsZVRpbWVyJyk7XHJcblxyXG4gICAgICAgIC8vIHRyaWdnZXIgZXZlbnQgb24gb2JqZWN0IHdpdGggZWxlbSBhbmQgY29weSBvZiBvYmpcclxuICAgICAgICAkKGVsZW0pLnRyaWdnZXIoZXZlbnQsIFtlbGVtLCAkLmV4dGVuZCh7fSwgb2JqKSwgZV0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogSGFuZGxlIGV2ZW50IHRyaWdnZXJzXHJcbiAgICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgICAqIEBtZXRob2QgZXZlbnRcclxuICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgKi9cclxuICAgICAgaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBvYmogPSAkLmRhdGEoZWxlbSwgJ2lkbGVUaW1lck9iaicpIHx8IHt9O1xyXG5cclxuICAgICAgICAvLyBpZ25vcmUgd3JpdHRpbmcgdG8gc3RvcmFnZSB1bmxlc3MgcmVsYXRlZCB0byBpZGxlVGltZXJcclxuICAgICAgICBpZiAoZS50eXBlID09PSAnc3RvcmFnZScgJiYgZS5vcmlnaW5hbEV2ZW50LmtleSAhPT0gb2JqLnRpbWVyU3luY0lkKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzIGlzIGFscmVhZHkgcGF1c2VkLCBpZ25vcmUgZXZlbnRzIGZvciBub3dcclxuICAgICAgICBpZiAob2JqLnJlbWFpbmluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICAgIG1vdXNlbW92ZSBpcyBraW5kYSBidWdneSwgaXQgY2FuIGJlIHRyaWdnZXJlZCB3aGVuIGl0IHNob3VsZCBiZSBpZGxlLlxyXG4gICAgICAgICAgICAgIFR5cGljYWxseSBpcyBoYXBwZW5pbmcgYmV0d2VlbiAxMTUgLSAxNTAgbWlsbGlzZWNvbmRzIGFmdGVyIGlkbGUgdHJpZ2dlcmVkLlxyXG4gICAgICAgICAgICAgIEBwc3lhZnRlciAmIEBrYWVsbGlzIHJlcG9ydCBcImFsd2F5cyB0cmlnZ2VyZWQgaWYgdXNpbmcgbW9kYWwgKGpRdWVyeSB1aSwgd2l0aCBvdmVybGF5KVwiXHJcbiAgICAgICAgICAgICAgQHRob3JzdCBoYXMgc2ltaWxhciBpc3N1ZXMgb24gaW9zNyBcImFmdGVyICQuc2Nyb2xsVG9wKCkgb24gdGV4dCBhcmVhXCJcclxuICAgICAgICAgICAgICAqL1xyXG4gICAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZW1vdmUnKSB7XHJcbiAgICAgICAgICAvLyBpZiBjb29yZCBhcmUgc2FtZSwgaXQgZGlkbid0IG1vdmVcclxuICAgICAgICAgIGlmIChlLnBhZ2VYID09PSBvYmoucGFnZVggJiYgZS5wYWdlWSA9PT0gb2JqLnBhZ2VZKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGlmIGNvb3JkIGRvbid0IGV4aXN0IGhvdyBjb3VsZCBpdCBtb3ZlXHJcbiAgICAgICAgICBpZiAodHlwZW9mIGUucGFnZVggPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBlLnBhZ2VZID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB1bmRlciAyMDAgbXMgaXMgaGFyZCB0byBkbywgYW5kIHlvdSB3b3VsZCBoYXZlIHRvIHN0b3AsIGFzIGNvbnRpbnVvdXMgYWN0aXZpdHkgd2lsbCBieXBhc3MgdGhpc1xyXG4gICAgICAgICAgdmFyIGVsYXBzZWQgPSArbmV3IERhdGUoKSAtIG9iai5vbGRkYXRlO1xyXG4gICAgICAgICAgaWYgKGVsYXBzZWQgPCAyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2xlYXIgYW55IGV4aXN0aW5nIHRpbWVvdXRcclxuICAgICAgICBjbGVhclRpbWVvdXQob2JqLnRJZCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBpZGxlIHRpbWVyIGlzIGVuYWJsZWQsIGZsaXBcclxuICAgICAgICBpZiAob2JqLmlkbGUpIHtcclxuICAgICAgICAgIHRvZ2dsZUlkbGVTdGF0ZShlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHdoZW4gdXNlciB3YXMgbGFzdCBhY3RpdmVcclxuICAgICAgICBvYmoubGFzdEFjdGl2ZSA9ICtuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgbW91c2UgY29vcmRcclxuICAgICAgICBvYmoucGFnZVggPSBlLnBhZ2VYO1xyXG4gICAgICAgIG9iai5wYWdlWSA9IGUucGFnZVk7XHJcblxyXG4gICAgICAgIC8vIHN5bmMgbGFzdEFjdGl2ZVxyXG4gICAgICAgIGlmIChlLnR5cGUgIT09ICdzdG9yYWdlJyAmJiBvYmoudGltZXJTeW5jSWQpIHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvYmoudGltZXJTeW5jSWQsIG9iai5sYXN0QWN0aXZlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBhIG5ldyB0aW1lb3V0XHJcbiAgICAgICAgb2JqLnRJZCA9IHNldFRpbWVvdXQodG9nZ2xlSWRsZVN0YXRlLCBvYmoudGltZW91dCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSZXN0b3JlIGluaXRpYWwgc2V0dGluZ3MgYW5kIHJlc3RhcnQgdGltZXJcclxuICAgICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAgICogQG1ldGhvZCByZXNldFxyXG4gICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAqL1xyXG4gICAgICByZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb2JqID0gJC5kYXRhKGVsZW0sICdpZGxlVGltZXJPYmonKSB8fCB7fTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgc2V0dGluZ3NcclxuICAgICAgICBvYmouaWRsZSA9IG9iai5pZGxlQmFja3VwO1xyXG4gICAgICAgIG9iai5vbGRkYXRlID0gK25ldyBEYXRlKCk7XHJcbiAgICAgICAgb2JqLmxhc3RBY3RpdmUgPSBvYmoub2xkZGF0ZTtcclxuICAgICAgICBvYmoucmVtYWluaW5nID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgVGltZXJzXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KG9iai50SWQpO1xyXG4gICAgICAgIGlmICghb2JqLmlkbGUpIHtcclxuICAgICAgICAgIG9iai50SWQgPSBzZXRUaW1lb3V0KHRvZ2dsZUlkbGVTdGF0ZSwgb2JqLnRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFN0b3JlIHJlbWFpbmluZyB0aW1lLCBzdG9wIHRpbWVyXHJcbiAgICAgICAqIFlvdSBjYW4gcGF1c2UgZnJvbSBhbiBpZGxlIE9SIGFjdGl2ZSBzdGF0ZVxyXG4gICAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICAgKiBAbWV0aG9kIHBhdXNlXHJcbiAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICovXHJcbiAgICAgIHBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvYmogPSAkLmRhdGEoZWxlbSwgJ2lkbGVUaW1lck9iaicpIHx8IHt9O1xyXG5cclxuICAgICAgICAvLyB0aGlzIGlzIGFscmVhZHkgcGF1c2VkXHJcbiAgICAgICAgaWYgKG9iai5yZW1haW5pbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGVmaW5lIGhvdyBtdWNoIGlzIGxlZnQgb24gdGhlIHRpbWVyXHJcbiAgICAgICAgb2JqLnJlbWFpbmluZyA9IG9iai50aW1lb3V0IC0gKCtuZXcgRGF0ZSgpIC0gb2JqLm9sZGRhdGUpO1xyXG5cclxuICAgICAgICAvLyBjbGVhciBhbnkgZXhpc3RpbmcgdGltZW91dFxyXG4gICAgICAgIGNsZWFyVGltZW91dChvYmoudElkKTtcclxuICAgICAgfSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFN0YXJ0IHRpbWVyIHdpdGggcmVtYWluaW5nIHZhbHVlXHJcbiAgICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgICAqIEBtZXRob2QgcmVzdW1lXHJcbiAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICovXHJcbiAgICAgIHJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb2JqID0gJC5kYXRhKGVsZW0sICdpZGxlVGltZXJPYmonKSB8fCB7fTtcclxuXHJcbiAgICAgICAgLy8gdGhpcyBpc24ndCBwYXVzZWQgeWV0XHJcbiAgICAgICAgaWYgKG9iai5yZW1haW5pbmcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3RhcnQgdGltZXJcclxuICAgICAgICBpZiAoIW9iai5pZGxlKSB7XHJcbiAgICAgICAgICBvYmoudElkID0gc2V0VGltZW91dCh0b2dnbGVJZGxlU3RhdGUsIG9iai5yZW1haW5pbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2xlYXIgcmVtYWluaW5nXHJcbiAgICAgICAgb2JqLnJlbWFpbmluZyA9IG51bGw7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTdG9wcyB0aGUgaWRsZSB0aW1lci4gVGhpcyByZW1vdmVzIGFwcHJvcHJpYXRlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAqIGFuZCBjYW5jZWxzIGFueSBwZW5kaW5nIHRpbWVvdXRzLlxyXG4gICAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICAgKiBAbWV0aG9kIGRlc3Ryb3lcclxuICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgKi9cclxuICAgICAgZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb2JqID0gJC5kYXRhKGVsZW0sICdpZGxlVGltZXJPYmonKSB8fCB7fTtcclxuXHJcbiAgICAgICAgLy9jbGVhciBhbnkgcGVuZGluZyB0aW1lb3V0c1xyXG4gICAgICAgIGNsZWFyVGltZW91dChvYmoudElkKTtcclxuXHJcbiAgICAgICAgLy9SZW1vdmUgZGF0YVxyXG4gICAgICAgIGpxRWxlbS5yZW1vdmVEYXRhKCdpZGxlVGltZXJPYmonKTtcclxuXHJcbiAgICAgICAgLy9kZXRhY2ggdGhlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAganFFbGVtLm9mZignLl9pZGxlVGltZXInKTtcclxuICAgICAgfSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFJldHVybnMgdGhlIHRpbWUgdW50aWwgYmVjb21pbmcgaWRsZVxyXG4gICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgICAqIEBtZXRob2QgcmVtYWluaW5ndGltZVxyXG4gICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAqL1xyXG4gICAgICByZW1haW5pbmd0aW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvYmogPSAkLmRhdGEoZWxlbSwgJ2lkbGVUaW1lck9iaicpIHx8IHt9O1xyXG5cclxuICAgICAgICAvL0lmIGlkbGUgdGhlcmUgaXMgbm8gdGltZSByZW1haW5pbmdcclxuICAgICAgICBpZiAob2JqLmlkbGUpIHtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9JZiBpdHMgcGF1c2VkIGp1c3QgcmV0dXJuIHRoYXRcclxuICAgICAgICBpZiAob2JqLnJlbWFpbmluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICByZXR1cm4gb2JqLnJlbWFpbmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vRGV0ZXJtaW5lIHJlbWFpbmluZywgaWYgbmVnYXRpdmUgaWRsZSBkaWRuJ3QgZmluaXNoIGZsaXBwaW5nLCBqdXN0IHJldHVybiAwXHJcbiAgICAgICAgdmFyIHJlbWFpbmluZyA9IG9iai50aW1lb3V0IC0gKCtuZXcgRGF0ZSgpIC0gb2JqLmxhc3RBY3RpdmUpO1xyXG4gICAgICAgIGlmIChyZW1haW5pbmcgPCAwKSB7XHJcbiAgICAgICAgICByZW1haW5pbmcgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9JZiB0aGlzIGlzIHBhdXNlZCByZXR1cm4gdGhhdCBudW1iZXIsIGVsc2UgcmV0dXJuIGN1cnJlbnQgcmVtYWluaW5nXHJcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZztcclxuICAgICAgfTtcclxuXHJcbiAgICAvLyBkZXRlcm1pbmUgd2hpY2ggZnVuY3Rpb24gdG8gY2FsbFxyXG4gICAgaWYgKGZpcnN0UGFyYW0gPT09IG51bGwgJiYgdHlwZW9mIG9iai5pZGxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyB0aGV5IHRoaW5rIHRoZXkgd2FudCB0byBpbml0LCBidXQgaXQgYWxyZWFkeSBpcywganVzdCByZXNldFxyXG4gICAgICByZXNldCgpO1xyXG4gICAgICByZXR1cm4ganFFbGVtO1xyXG4gICAgfSBlbHNlIGlmIChmaXJzdFBhcmFtID09PSBudWxsKSB7XHJcbiAgICAgIC8vIHRoZXkgd2FudCB0byBpbml0XHJcbiAgICB9IGVsc2UgaWYgKGZpcnN0UGFyYW0gIT09IG51bGwgJiYgdHlwZW9mIG9iai5pZGxlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyB0aGV5IHdhbnQgdG8gZG8gc29tZXRoaW5nLCBidXQgaXQgaXNudCBpbml0XHJcbiAgICAgIC8vIG5vdCBzdXJlIHRoZSBiZXN0IHdheSB0byBoYW5kbGUgdGhpc1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKGZpcnN0UGFyYW0gPT09ICdkZXN0cm95Jykge1xyXG4gICAgICBkZXN0cm95KCk7XHJcbiAgICAgIHJldHVybiBqcUVsZW07XHJcbiAgICB9IGVsc2UgaWYgKGZpcnN0UGFyYW0gPT09ICdwYXVzZScpIHtcclxuICAgICAgcGF1c2UoKTtcclxuICAgICAgcmV0dXJuIGpxRWxlbTtcclxuICAgIH0gZWxzZSBpZiAoZmlyc3RQYXJhbSA9PT0gJ3Jlc3VtZScpIHtcclxuICAgICAgcmVzdW1lKCk7XHJcbiAgICAgIHJldHVybiBqcUVsZW07XHJcbiAgICB9IGVsc2UgaWYgKGZpcnN0UGFyYW0gPT09ICdyZXNldCcpIHtcclxuICAgICAgcmVzZXQoKTtcclxuICAgICAgcmV0dXJuIGpxRWxlbTtcclxuICAgIH0gZWxzZSBpZiAoZmlyc3RQYXJhbSA9PT0gJ2dldFJlbWFpbmluZ1RpbWUnKSB7XHJcbiAgICAgIHJldHVybiByZW1haW5pbmd0aW1lKCk7XHJcbiAgICB9IGVsc2UgaWYgKGZpcnN0UGFyYW0gPT09ICdnZXRFbGFwc2VkVGltZScpIHtcclxuICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpIC0gb2JqLm9sZGRhdGU7XHJcbiAgICB9IGVsc2UgaWYgKGZpcnN0UGFyYW0gPT09ICdnZXRMYXN0QWN0aXZlVGltZScpIHtcclxuICAgICAgcmV0dXJuIG9iai5sYXN0QWN0aXZlO1xyXG4gICAgfSBlbHNlIGlmIChmaXJzdFBhcmFtID09PSAnaXNJZGxlJykge1xyXG4gICAgICByZXR1cm4gb2JqLmlkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVzdCB2aWEgYSBnZXR0ZXIgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHRvIHNlZSBpZiB0aGUgcGFzc2l2ZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZFxyXG4gICAgLy8gVGhpcyBpc250IHdvcmtpbmcgaW4ganF1ZXJ5LCB0aG91Z2ggaXMgcGxhbm5lZCBmb3IgNC4wXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9pc3N1ZXMvMjg3MVxyXG4gICAgLyp2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgICB2YXIgUG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XHJcbiAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBQb3B0cyk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiovXHJcblxyXG4gICAgLyogKGludGVudGlvbmFsbHkgbm90IGRvY3VtZW50ZWQpXHJcbiAgICAgKiBIYW5kbGVzIGEgdXNlciBldmVudCBpbmRpY2F0aW5nIHRoYXQgdGhlIHVzZXIgaXNuJ3QgaWRsZS4gbmFtZXNwYWNlZCB3aXRoIGludGVybmFsIGlkbGVUaW1lclxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgQSBET00yLW5vcm1hbGl6ZWQgZXZlbnQgb2JqZWN0LlxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAganFFbGVtLm9uKChvcHRzLmV2ZW50cyArICcgJykuc3BsaXQoJyAnKS5qb2luKCcuX2lkbGVUaW1lciAnKS50cmltKCksIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGhhbmRsZUV2ZW50KGUpO1xyXG4gICAgfSk7XHJcbiAgICAvL30sIHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xyXG5cclxuICAgIGlmIChvcHRzLnRpbWVyU3luY0lkKSB7XHJcbiAgICAgICQod2luZG93KS5vbignc3RvcmFnZScsIGhhbmRsZUV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnRlcm5hbCBPYmplY3QgUHJvcGVydGllcywgVGhpcyBpc24ndCBhbGwgbmVjZXNzYXJ5LCBidXQgd2VcclxuICAgIC8vIGV4cGxpY2l0bHkgZGVmaW5lIGFsbCBrZXlzIGhlcmUgc28gd2Uga25vdyB3aGF0IHdlIGFyZSB3b3JraW5nIHdpdGhcclxuICAgIG9iaiA9ICQuZXh0ZW5kKFxyXG4gICAgICB7fSxcclxuICAgICAge1xyXG4gICAgICAgIG9sZGRhdGU6ICtuZXcgRGF0ZSgpLCAvLyB0aGUgbGFzdCB0aW1lIHN0YXRlIGNoYW5nZWRcclxuICAgICAgICBsYXN0QWN0aXZlOiArbmV3IERhdGUoKSwgLy8gdGhlIGxhc3QgdGltZSB0aW1lciB3YXMgYWN0aXZlXHJcbiAgICAgICAgaWRsZTogb3B0cy5pZGxlLCAvLyBjdXJyZW50IHN0YXRlXHJcbiAgICAgICAgaWRsZUJhY2t1cDogb3B0cy5pZGxlLCAvLyBiYWNrdXAgb2YgaWRsZSBwYXJhbWV0ZXIgc2luY2UgaXQgZ2V0cyBtb2RpZmllZFxyXG4gICAgICAgIHRpbWVvdXQ6IG9wdHMudGltZW91dCwgLy8gdGhlIGludGVydmFsIHRvIGNoYW5nZSBzdGF0ZVxyXG4gICAgICAgIHJlbWFpbmluZzogbnVsbCwgLy8gaG93IGxvbmcgdW50aWwgc3RhdGUgY2hhbmdlc1xyXG4gICAgICAgIHRpbWVyU3luY0lkOiBvcHRzLnRpbWVyU3luY0lkLCAvLyBsb2NhbFN0b3JhZ2Uga2V5IHRvIHVzZSBmb3Igc3luY2luZyB0aGlzIHRpbWVyXHJcbiAgICAgICAgdElkOiBudWxsLCAvLyB0aGUgaWRsZSB0aW1lciBzZXRUaW1lb3V0XHJcbiAgICAgICAgcGFnZVg6IG51bGwsIC8vIHVzZWQgdG8gc3RvcmUgdGhlIG1vdXNlIGNvb3JkXHJcbiAgICAgICAgcGFnZVk6IG51bGxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBzZXQgYSB0aW1lb3V0IHRvIHRvZ2dsZSBzdGF0ZS4gTWF5IHdpc2ggdG8gb21pdCB0aGlzIGluIHNvbWUgc2l0dWF0aW9uc1xyXG4gICAgaWYgKCFvYmouaWRsZSkge1xyXG4gICAgICBvYmoudElkID0gc2V0VGltZW91dCh0b2dnbGVJZGxlU3RhdGUsIG9iai50aW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdG9yZSBvdXIgaW5zdGFuY2Ugb24gdGhlIG9iamVjdFxyXG4gICAgJC5kYXRhKGVsZW0sICdpZGxlVGltZXJPYmonLCBvYmopO1xyXG5cclxuICAgIHJldHVybiBqcUVsZW07XHJcbiAgfTtcclxuXHJcbiAgLy8gVGhpcyBhbGxvd3MgYmluZGluZyB0byBlbGVtZW50XHJcbiAgJC5mbi5pZGxlVGltZXIgPSBmdW5jdGlvbiAoZmlyc3RQYXJhbSkge1xyXG4gICAgaWYgKHRoaXNbMF0pIHtcclxuICAgICAgcmV0dXJuICQuaWRsZVRpbWVyKGZpcnN0UGFyYW0sIHRoaXNbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbn0pKGpRdWVyeSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVVBLENBQVYsRUFBYTtFQUNaQSxDQUFDLENBQUNDLFNBQUYsR0FBYyxVQUFVQyxVQUFWLEVBQXNCQyxJQUF0QixFQUE0QjtJQUN4QyxJQUFJQyxJQUFKOztJQUNBLElBQUksUUFBT0YsVUFBUCxNQUFzQixRQUExQixFQUFvQztNQUNsQ0UsSUFBSSxHQUFHRixVQUFQO01BQ0FBLFVBQVUsR0FBRyxJQUFiO0lBQ0QsQ0FIRCxNQUdPLElBQUksT0FBT0EsVUFBUCxLQUFzQixRQUExQixFQUFvQztNQUN6Q0UsSUFBSSxHQUFHO1FBQUVDLE9BQU8sRUFBRUg7TUFBWCxDQUFQO01BQ0FBLFVBQVUsR0FBRyxJQUFiO0lBQ0QsQ0FSdUMsQ0FVeEM7OztJQUNBQyxJQUFJLEdBQUdBLElBQUksSUFBSUcsUUFBZixDQVh3QyxDQWF4Qzs7SUFDQUYsSUFBSSxHQUFHSixDQUFDLENBQUNPLE1BQUYsQ0FDTDtNQUNFQyxJQUFJLEVBQUUsS0FEUjtNQUNlO01BQ2JILE9BQU8sRUFBRSxLQUZYO01BRWtCO01BQ2hCSSxNQUFNLEVBQ0osOEdBSkosQ0FJbUg7O0lBSm5ILENBREssRUFPTEwsSUFQSyxDQUFQOztJQVVBLElBQUlNLE1BQU0sR0FBR1YsQ0FBQyxDQUFDRyxJQUFELENBQWQ7SUFBQSxJQUNFUSxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLGNBQVosS0FBK0IsRUFEdkM7O0lBRUU7QUFDTjtBQUNBO0FBQ0E7SUFDTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFVQyxDQUFWLEVBQWE7TUFDN0IsSUFBSUgsR0FBRyxHQUFHWCxDQUFDLENBQUNZLElBQUYsQ0FBT1QsSUFBUCxFQUFhLGNBQWIsS0FBZ0MsRUFBMUMsQ0FENkIsQ0FHN0I7O01BQ0FRLEdBQUcsQ0FBQ0gsSUFBSixHQUFXLENBQUNHLEdBQUcsQ0FBQ0gsSUFBaEIsQ0FKNkIsQ0FNN0I7O01BQ0FHLEdBQUcsQ0FBQ0ksT0FBSixHQUFjLENBQUMsSUFBSUMsSUFBSixFQUFmLENBUDZCLENBUzdCOztNQUNBLElBQUlDLEtBQUssR0FBR2pCLENBQUMsQ0FBQ2tCLEtBQUYsQ0FBUSxDQUFDUCxHQUFHLENBQUNILElBQUosR0FBVyxNQUFYLEdBQW9CLFFBQXJCLElBQWlDLFlBQXpDLENBQVosQ0FWNkIsQ0FZN0I7O01BQ0FSLENBQUMsQ0FBQ0csSUFBRCxDQUFELENBQVFnQixPQUFSLENBQWdCRixLQUFoQixFQUF1QixDQUFDZCxJQUFELEVBQU9ILENBQUMsQ0FBQ08sTUFBRixDQUFTLEVBQVQsRUFBYUksR0FBYixDQUFQLEVBQTBCRyxDQUExQixDQUF2QjtJQUNELENBcEJIOztJQXFCRTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBVU4sQ0FBVixFQUFhO01BQ3pCLElBQUlILEdBQUcsR0FBR1gsQ0FBQyxDQUFDWSxJQUFGLENBQU9ULElBQVAsRUFBYSxjQUFiLEtBQWdDLEVBQTFDLENBRHlCLENBR3pCOztNQUNBLElBQUlXLENBQUMsQ0FBQ08sSUFBRixLQUFXLFNBQVgsSUFBd0JQLENBQUMsQ0FBQ1EsYUFBRixDQUFnQkMsR0FBaEIsS0FBd0JaLEdBQUcsQ0FBQ2EsV0FBeEQsRUFBcUU7UUFDbkU7TUFDRCxDQU53QixDQVF6Qjs7O01BQ0EsSUFBSWIsR0FBRyxDQUFDYyxTQUFKLElBQWlCLElBQXJCLEVBQTJCO1FBQ3pCO01BQ0Q7TUFFRDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztNQUNRLElBQUlYLENBQUMsQ0FBQ08sSUFBRixLQUFXLFdBQWYsRUFBNEI7UUFDMUI7UUFDQSxJQUFJUCxDQUFDLENBQUNZLEtBQUYsS0FBWWYsR0FBRyxDQUFDZSxLQUFoQixJQUF5QlosQ0FBQyxDQUFDYSxLQUFGLEtBQVloQixHQUFHLENBQUNnQixLQUE3QyxFQUFvRDtVQUNsRDtRQUNELENBSnlCLENBSzFCOzs7UUFDQSxJQUFJLE9BQU9iLENBQUMsQ0FBQ1ksS0FBVCxLQUFtQixXQUFuQixJQUFrQyxPQUFPWixDQUFDLENBQUNhLEtBQVQsS0FBbUIsV0FBekQsRUFBc0U7VUFDcEU7UUFDRCxDQVJ5QixDQVMxQjs7O1FBQ0EsSUFBSUMsT0FBTyxHQUFHLENBQUMsSUFBSVosSUFBSixFQUFELEdBQWNMLEdBQUcsQ0FBQ0ksT0FBaEM7O1FBQ0EsSUFBSWEsT0FBTyxHQUFHLEdBQWQsRUFBbUI7VUFDakI7UUFDRDtNQUNGLENBakN3QixDQW1DekI7OztNQUNBQyxZQUFZLENBQUNsQixHQUFHLENBQUNtQixHQUFMLENBQVosQ0FwQ3lCLENBc0N6Qjs7TUFDQSxJQUFJbkIsR0FBRyxDQUFDSCxJQUFSLEVBQWM7UUFDWkssZUFBZSxDQUFDQyxDQUFELENBQWY7TUFDRCxDQXpDd0IsQ0EyQ3pCOzs7TUFDQUgsR0FBRyxDQUFDb0IsVUFBSixHQUFpQixDQUFDLElBQUlmLElBQUosRUFBbEIsQ0E1Q3lCLENBOEN6Qjs7TUFDQUwsR0FBRyxDQUFDZSxLQUFKLEdBQVlaLENBQUMsQ0FBQ1ksS0FBZDtNQUNBZixHQUFHLENBQUNnQixLQUFKLEdBQVliLENBQUMsQ0FBQ2EsS0FBZCxDQWhEeUIsQ0FrRHpCOztNQUNBLElBQUliLENBQUMsQ0FBQ08sSUFBRixLQUFXLFNBQVgsSUFBd0JWLEdBQUcsQ0FBQ2EsV0FBaEMsRUFBNkM7UUFDM0MsSUFBSSxPQUFPUSxZQUFQLEtBQXdCLFdBQTVCLEVBQXlDO1VBQ3ZDQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJ0QixHQUFHLENBQUNhLFdBQXpCLEVBQXNDYixHQUFHLENBQUNvQixVQUExQztRQUNEO01BQ0YsQ0F2RHdCLENBeUR6Qjs7O01BQ0FwQixHQUFHLENBQUNtQixHQUFKLEdBQVVJLFVBQVUsQ0FBQ3JCLGVBQUQsRUFBa0JGLEdBQUcsQ0FBQ04sT0FBdEIsQ0FBcEI7SUFDRCxDQXRGSDs7SUF1RkU7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ004QixLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFZO01BQ2xCLElBQUl4QixHQUFHLEdBQUdYLENBQUMsQ0FBQ1ksSUFBRixDQUFPVCxJQUFQLEVBQWEsY0FBYixLQUFnQyxFQUExQyxDQURrQixDQUdsQjs7TUFDQVEsR0FBRyxDQUFDSCxJQUFKLEdBQVdHLEdBQUcsQ0FBQ3lCLFVBQWY7TUFDQXpCLEdBQUcsQ0FBQ0ksT0FBSixHQUFjLENBQUMsSUFBSUMsSUFBSixFQUFmO01BQ0FMLEdBQUcsQ0FBQ29CLFVBQUosR0FBaUJwQixHQUFHLENBQUNJLE9BQXJCO01BQ0FKLEdBQUcsQ0FBQ2MsU0FBSixHQUFnQixJQUFoQixDQVBrQixDQVNsQjs7TUFDQUksWUFBWSxDQUFDbEIsR0FBRyxDQUFDbUIsR0FBTCxDQUFaOztNQUNBLElBQUksQ0FBQ25CLEdBQUcsQ0FBQ0gsSUFBVCxFQUFlO1FBQ2JHLEdBQUcsQ0FBQ21CLEdBQUosR0FBVUksVUFBVSxDQUFDckIsZUFBRCxFQUFrQkYsR0FBRyxDQUFDTixPQUF0QixDQUFwQjtNQUNEO0lBQ0YsQ0EzR0g7O0lBNEdFO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ01nQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFZO01BQ2xCLElBQUkxQixHQUFHLEdBQUdYLENBQUMsQ0FBQ1ksSUFBRixDQUFPVCxJQUFQLEVBQWEsY0FBYixLQUFnQyxFQUExQyxDQURrQixDQUdsQjs7TUFDQSxJQUFJUSxHQUFHLENBQUNjLFNBQUosSUFBaUIsSUFBckIsRUFBMkI7UUFDekI7TUFDRCxDQU5pQixDQVFsQjs7O01BQ0FkLEdBQUcsQ0FBQ2MsU0FBSixHQUFnQmQsR0FBRyxDQUFDTixPQUFKLElBQWUsQ0FBQyxJQUFJVyxJQUFKLEVBQUQsR0FBY0wsR0FBRyxDQUFDSSxPQUFqQyxDQUFoQixDQVRrQixDQVdsQjs7TUFDQWMsWUFBWSxDQUFDbEIsR0FBRyxDQUFDbUIsR0FBTCxDQUFaO0lBQ0QsQ0FoSUg7O0lBaUlFO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNNUSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFZO01BQ25CLElBQUkzQixHQUFHLEdBQUdYLENBQUMsQ0FBQ1ksSUFBRixDQUFPVCxJQUFQLEVBQWEsY0FBYixLQUFnQyxFQUExQyxDQURtQixDQUduQjs7TUFDQSxJQUFJUSxHQUFHLENBQUNjLFNBQUosSUFBaUIsSUFBckIsRUFBMkI7UUFDekI7TUFDRCxDQU5rQixDQVFuQjs7O01BQ0EsSUFBSSxDQUFDZCxHQUFHLENBQUNILElBQVQsRUFBZTtRQUNiRyxHQUFHLENBQUNtQixHQUFKLEdBQVVJLFVBQVUsQ0FBQ3JCLGVBQUQsRUFBa0JGLEdBQUcsQ0FBQ2MsU0FBdEIsQ0FBcEI7TUFDRCxDQVhrQixDQWFuQjs7O01BQ0FkLEdBQUcsQ0FBQ2MsU0FBSixHQUFnQixJQUFoQjtJQUNELENBdEpIOztJQXVKRTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNNYyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFZO01BQ3BCLElBQUk1QixHQUFHLEdBQUdYLENBQUMsQ0FBQ1ksSUFBRixDQUFPVCxJQUFQLEVBQWEsY0FBYixLQUFnQyxFQUExQyxDQURvQixDQUdwQjs7TUFDQTBCLFlBQVksQ0FBQ2xCLEdBQUcsQ0FBQ21CLEdBQUwsQ0FBWixDQUpvQixDQU1wQjs7TUFDQXBCLE1BQU0sQ0FBQzhCLFVBQVAsQ0FBa0IsY0FBbEIsRUFQb0IsQ0FTcEI7O01BQ0E5QixNQUFNLENBQUMrQixHQUFQLENBQVcsYUFBWDtJQUNELENBektIOztJQTBLRTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFZO01BQzFCLElBQUkvQixHQUFHLEdBQUdYLENBQUMsQ0FBQ1ksSUFBRixDQUFPVCxJQUFQLEVBQWEsY0FBYixLQUFnQyxFQUExQyxDQUQwQixDQUcxQjs7TUFDQSxJQUFJUSxHQUFHLENBQUNILElBQVIsRUFBYztRQUNaLE9BQU8sQ0FBUDtNQUNELENBTnlCLENBUTFCOzs7TUFDQSxJQUFJRyxHQUFHLENBQUNjLFNBQUosSUFBaUIsSUFBckIsRUFBMkI7UUFDekIsT0FBT2QsR0FBRyxDQUFDYyxTQUFYO01BQ0QsQ0FYeUIsQ0FhMUI7OztNQUNBLElBQUlBLFNBQVMsR0FBR2QsR0FBRyxDQUFDTixPQUFKLElBQWUsQ0FBQyxJQUFJVyxJQUFKLEVBQUQsR0FBY0wsR0FBRyxDQUFDb0IsVUFBakMsQ0FBaEI7O01BQ0EsSUFBSU4sU0FBUyxHQUFHLENBQWhCLEVBQW1CO1FBQ2pCQSxTQUFTLEdBQUcsQ0FBWjtNQUNELENBakJ5QixDQW1CMUI7OztNQUNBLE9BQU9BLFNBQVA7SUFDRCxDQXJNSCxDQXhCd0MsQ0ErTnhDOzs7SUFDQSxJQUFJdkIsVUFBVSxLQUFLLElBQWYsSUFBdUIsT0FBT1MsR0FBRyxDQUFDSCxJQUFYLEtBQW9CLFdBQS9DLEVBQTREO01BQzFEO01BQ0EyQixLQUFLO01BQ0wsT0FBT3pCLE1BQVA7SUFDRCxDQUpELE1BSU8sSUFBSVIsVUFBVSxLQUFLLElBQW5CLEVBQXlCLENBQzlCO0lBQ0QsQ0FGTSxNQUVBLElBQUlBLFVBQVUsS0FBSyxJQUFmLElBQXVCLE9BQU9TLEdBQUcsQ0FBQ0gsSUFBWCxLQUFvQixXQUEvQyxFQUE0RDtNQUNqRTtNQUNBO01BQ0EsT0FBTyxLQUFQO0lBQ0QsQ0FKTSxNQUlBLElBQUlOLFVBQVUsS0FBSyxTQUFuQixFQUE4QjtNQUNuQ3FDLE9BQU87TUFDUCxPQUFPN0IsTUFBUDtJQUNELENBSE0sTUFHQSxJQUFJUixVQUFVLEtBQUssT0FBbkIsRUFBNEI7TUFDakNtQyxLQUFLO01BQ0wsT0FBTzNCLE1BQVA7SUFDRCxDQUhNLE1BR0EsSUFBSVIsVUFBVSxLQUFLLFFBQW5CLEVBQTZCO01BQ2xDb0MsTUFBTTtNQUNOLE9BQU81QixNQUFQO0lBQ0QsQ0FITSxNQUdBLElBQUlSLFVBQVUsS0FBSyxPQUFuQixFQUE0QjtNQUNqQ2lDLEtBQUs7TUFDTCxPQUFPekIsTUFBUDtJQUNELENBSE0sTUFHQSxJQUFJUixVQUFVLEtBQUssa0JBQW5CLEVBQXVDO01BQzVDLE9BQU93QyxhQUFhLEVBQXBCO0lBQ0QsQ0FGTSxNQUVBLElBQUl4QyxVQUFVLEtBQUssZ0JBQW5CLEVBQXFDO01BQzFDLE9BQU8sQ0FBQyxJQUFJYyxJQUFKLEVBQUQsR0FBY0wsR0FBRyxDQUFDSSxPQUF6QjtJQUNELENBRk0sTUFFQSxJQUFJYixVQUFVLEtBQUssbUJBQW5CLEVBQXdDO01BQzdDLE9BQU9TLEdBQUcsQ0FBQ29CLFVBQVg7SUFDRCxDQUZNLE1BRUEsSUFBSTdCLFVBQVUsS0FBSyxRQUFuQixFQUE2QjtNQUNsQyxPQUFPUyxHQUFHLENBQUNILElBQVg7SUFDRCxDQTlQdUMsQ0FnUXhDO0lBQ0E7SUFDQTs7SUFDQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7SUFDSUUsTUFBTSxDQUFDaUMsRUFBUCxDQUFVLENBQUN2QyxJQUFJLENBQUNLLE1BQUwsR0FBYyxHQUFmLEVBQW9CbUMsS0FBcEIsQ0FBMEIsR0FBMUIsRUFBK0JDLElBQS9CLENBQW9DLGNBQXBDLEVBQW9EQyxJQUFwRCxFQUFWLEVBQXNFLFVBQVVoQyxDQUFWLEVBQWE7TUFDakZNLFdBQVcsQ0FBQ04sQ0FBRCxDQUFYO0lBQ0QsQ0FGRCxFQW5Sd0MsQ0FzUnhDOztJQUVBLElBQUlWLElBQUksQ0FBQ29CLFdBQVQsRUFBc0I7TUFDcEJ4QixDQUFDLENBQUMrQyxNQUFELENBQUQsQ0FBVUosRUFBVixDQUFhLFNBQWIsRUFBd0J2QixXQUF4QjtJQUNELENBMVJ1QyxDQTRSeEM7SUFDQTs7O0lBQ0FULEdBQUcsR0FBR1gsQ0FBQyxDQUFDTyxNQUFGLENBQ0osRUFESSxFQUVKO01BQ0VRLE9BQU8sRUFBRSxDQUFDLElBQUlDLElBQUosRUFEWjtNQUN3QjtNQUN0QmUsVUFBVSxFQUFFLENBQUMsSUFBSWYsSUFBSixFQUZmO01BRTJCO01BQ3pCUixJQUFJLEVBQUVKLElBQUksQ0FBQ0ksSUFIYjtNQUdtQjtNQUNqQjRCLFVBQVUsRUFBRWhDLElBQUksQ0FBQ0ksSUFKbkI7TUFJeUI7TUFDdkJILE9BQU8sRUFBRUQsSUFBSSxDQUFDQyxPQUxoQjtNQUt5QjtNQUN2Qm9CLFNBQVMsRUFBRSxJQU5iO01BTW1CO01BQ2pCRCxXQUFXLEVBQUVwQixJQUFJLENBQUNvQixXQVBwQjtNQU9pQztNQUMvQk0sR0FBRyxFQUFFLElBUlA7TUFRYTtNQUNYSixLQUFLLEVBQUUsSUFUVDtNQVNlO01BQ2JDLEtBQUssRUFBRTtJQVZULENBRkksQ0FBTixDQTlSd0MsQ0E4U3hDOztJQUNBLElBQUksQ0FBQ2hCLEdBQUcsQ0FBQ0gsSUFBVCxFQUFlO01BQ2JHLEdBQUcsQ0FBQ21CLEdBQUosR0FBVUksVUFBVSxDQUFDckIsZUFBRCxFQUFrQkYsR0FBRyxDQUFDTixPQUF0QixDQUFwQjtJQUNELENBalR1QyxDQW1UeEM7OztJQUNBTCxDQUFDLENBQUNZLElBQUYsQ0FBT1QsSUFBUCxFQUFhLGNBQWIsRUFBNkJRLEdBQTdCO0lBRUEsT0FBT0QsTUFBUDtFQUNELENBdlRELENBRFksQ0EwVFo7OztFQUNBVixDQUFDLENBQUNnRCxFQUFGLENBQUsvQyxTQUFMLEdBQWlCLFVBQVVDLFVBQVYsRUFBc0I7SUFDckMsSUFBSSxLQUFLLENBQUwsQ0FBSixFQUFhO01BQ1gsT0FBT0YsQ0FBQyxDQUFDQyxTQUFGLENBQVlDLFVBQVosRUFBd0IsS0FBSyxDQUFMLENBQXhCLENBQVA7SUFDRDs7SUFFRCxPQUFPLElBQVA7RUFDRCxDQU5EO0FBT0QsQ0FsVUQsRUFrVUcrQyxNQWxVSCJ9\n//# sourceURL=webpack-internal:///./libs/idletimer/idletimer.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./libs/idletimer/idletimer.js"]();
/******/ 	var __webpack_export_target__ = window;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;