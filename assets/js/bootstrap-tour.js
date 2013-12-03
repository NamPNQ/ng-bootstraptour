angular.module("ui.bootstrap.tour", [])
/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
    .factory('$$stackedMap', function () {
        return {
            createNew: function () {
                var stack = [];

                return {
                    add: function (key, value) {
                        stack.push({
                            key: key,
                            value: value
                        });
                    },
                    get: function (key) {
                        for (var i = 0; i < stack.length; i++) {
                            if (key == stack[i].key) {
                                return stack[i];
                            }
                        }
                    },
                    keys: function () {
                        var keys = [];
                        for (var i = 0; i < stack.length; i++) {
                            keys.push(stack[i].key);
                        }
                        return keys;
                    },
                    top: function () {
                        return stack[stack.length - 1];
                    },
                    remove: function (key) {
                        var idx = -1;
                        for (var i = 0; i < stack.length; i++) {
                            if (key == stack[i].key) {
                                idx = i;
                                break;
                            }
                        }
                        return stack.splice(idx, 1)[0];
                    },
                    removeTop: function () {
                        return stack.splice(stack.length - 1, 1)[0];
                    },
                    length: function () {
                        return stack.length;
                    }
                };
            }
        };
    })
    .factory('$tour', function () {
        var $tourProvider = {
            options: {
                name: "tour",
                container: "body",
                keyboard: true,
                storage: window.localStorage,
                debug: false,
                backdrop: false,
                redirect: true,
                orphan: false,
                basePath: "",
                template: "<div class='popover'>          <div class='arrow'></div>          <h3 class='popover-title'></h3>          <div class='popover-content'></div>          <div class='popover-navigation'>            <div class='btn-group'>              <button class='btn btn-sm btn-default' data-role='prev'>&laquo; Prev</button>              <button class='btn btn-sm btn-default' data-role='next'>Next &raquo;</button>            </div>            <button class='btn btn-sm btn-default' data-role='end'>End tour</button>          </div>        </div>"

            },
            $get:['$injector', '$rootScope', '$q', '$http', '$templateCache', '$controller', '$tourStack',
                function ($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {
                    var $tour = {};
                    $tour.Tour = function(tourOptions){
                        var tourStartDeferred = $q.defer();
                        var tourEndDeferred = $q.defer();
                        var tourShowDeferred = $q.defer();
                        var tourShownDeferred = $q.defer();
                        var tourHideDeferred = $q.defer();
                        var tourHiddenDeferred = $q.defer();
                        var tourNextDeferred = $q.defer();
                        var tourPrevDeferred = $q.defer();
                        var tourInstance = {

                        };
                        tourOptions = angular.extend({},$tourProvider.options,tourOptions);
                    };
                    $tour.start = function(){

                    };
                    $tour.end = function(){

                    };
                    $tour.next = function(){

                    };
                    $tour.prev = function(){

                    };
                    $tour.goTo = function(){

                    };
                    $tour.restart = function(){

                    };
                    $tour.ended = function(){

                    };
                    $tour.addStep = function(){

                    };
                    $tour.addSteps = function(steps){

                    };

                }]
        };
        return $tourProvider
    })