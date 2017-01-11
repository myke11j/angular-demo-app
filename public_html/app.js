var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'myApp.city', 'myApp.imageGallery', 'myApp.videoGallery', 'myApp.search', 'ngSanitize', 'ngScrollable', 'ngMaterial', 'oc.lazyLoad']);

myApp.config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
            .state('root', {
                url: '',
                abstract: true,
                views: {
                    "header": {
                        templateUrl: 'views/header.html',
//                    controllerUrl: 'controllers/header.js',        //if needed controller in header,
//                    controller: 'headerCtrl'                      //un-comment this and load it using ocLadyLoad
                    }
                }
            })
            .state('sidebar', {
                url: '',
                abstract: true,
                views: {
                    "sidebar": {
                        templateUrl: 'views/sidebar.html',
                    }
                }

            })
            .state('root.sidebar', {
                url: '',
                abstract: true,
                views: {
                    "header": {
                        templateUrl: 'views/header.html',
                    },
                    "sidebar@": {
                        templateUrl: 'views/sidebar.html',
                    }

                }
            })
            .state('login', {
                url: '/',
                views: {
                    "header@": {
                        templateUrl: 'views/login.html',
                        controllerUrl: 'controllers/loginCtrl.js',
                        controller: 'loginCtrl'

                    }
                },
                resolve: {
                    loadloginCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['controllers/loginCtrl.js']);
                        }]
                }
            })
            .state('forgot', {
                url: '/forgot',
                views: {
                    "header@": {
                        templateUrl: 'views/forgot.html',
                        controllerUrl: 'controllers/forgotCtrl.js',
                        controller: 'forgotCtrl'
                    }
                },
                resolve: {
                    loadForgotCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['controllers/forgotCtrl.js']);
                        }]
                }
            })
            .state('success', {
                url: '/dashboard',
                views: {
                    "header@": {
                        templateUrl: 'views/dashboard.html',
                        controllerUrl: 'controllers/dashboardCtrl.js',
                        controller: 'dashboardCtrl'
                    }
                },
                resolve: {
                    loadDashboardCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['controllers/dashboardCtrl.js']);
                        }]
                }
            })
            .state('register', {
                url: '/register',
                views: {
                    "header@": {
                        templateUrl: 'views/register.html',
                        controllerUrl: 'controllers/registerCtrl.js',
                        controller: 'registerCtrl'
                    }
                },
                resolve: {
                    loadRegisterCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['controllers/registerCtrl.js']);
                        }]
                }
            })
            .state('root.sidebar.myProfile', {
                url: '/me',
                views: {
                    "main@": {
                        templateUrl: 'views/me.html',
                        controllerUrl: 'controllers/meCtrl.js',
                        controller: 'meCtrl'
                    }
                },
                resolve: {
                    loadMeCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['controllers/meCtrl.js']);
                        }]
                }
            })
            .state('root.sidebar.accordion', {
                url: '/accordion',
                views: {
                    "main@": {
                        templateUrl: 'views/cu-accordian.html',
                        controllerUrl: 'controllers/accordianCtrl.js',
                        controller: 'accordianCtrl'
                    }
                },
                resolve: {
                    loadAccoridonCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['controllers/accordianCtrl.js']);
                        }]
                }
            })
            .state('root.sidebar.gallery', {
                url: '/gallery',
                views: {
                    "main@": {
                        templateUrl: 'views/gallery.html',
                        controllerUrl: 'controllers/galleryCtrl.js',
                        controller: 'galleryCtrl'
                    }
                },
                resolve: {
                    loadGalleryCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['galleryCtrl']);
                        }]
                }
            })
            .state('root.sidebar.city', {
                url: '/city',
                views: {
                    "main@": {
                        templateUrl: 'modules/city/city.html',
                        controller: 'cityCtrl as vm'
                    }
                },
                resolve: {
                    loadCityCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['cityModule']);
                        }]
                }
            })
            .state('imageGallery', {
                url: '/images',
                views: {
                    "main@": {
                        templateUrl: 'modules/imageGallery/image-gallery.html',
                        controller: 'imageGalleryCtrl as vm'
                    }
                },
                resolve: {
                    imageList: function ($http) {
                        return $http.get('modules/imageGallery/json/images.json')
                                .success(function (data) {
                                    return data;
                                });
                    },
                    loadImagesCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['imageGalleryModule']);
                        }]
                }
            })
            .state('root.sidebar.search', {
                url: '/search',
                views: {
                    "main@": {
                        templateUrl: 'modules/search/search.html',
                        controller: 'searchCtrl as vm'
                    }
                },
                resolve: {
                  parasList: function ($http) {
                      return $http.get('modules/search/json/paras.json')
                              .success(function (data) {
                                  return data;
                              });
                  },

                  loadSearchCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                          return $ocLazyLoad.load(['searchModule']);
                      }]
                }
            })
            .state('videoGallery', {
                url: '/videos',
                views: {
                    "main@": {
                        templateUrl: 'modules/videoGallery/video-gallery.html',
                        controller: 'videoGalleryCtrl as vm'
                    }
                },
                resolve: {
                    videoList: function ($http) {
                        return $http.get('modules/videoGallery/json/videos.json')
                                .success(function (data) {
                                    return data;
                                });
                    },
                    loadVideoCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['videoGalleryModule']);
                        }]
                }
            });

    $ocLazyLoadProvider.config({
        modules: [{
                name: 'cityModule',
                files: [
                    'modules/city/city.controller.js',
                    'modules/city/template/modalCtrl.js',
                    'directives/form-warning-messages.js'
                ]
            },
            {
                name: 'imageGalleryModule',
                files: [
                    'modules/imageGallery/imageGallery.controller.js',
                    'directives/cu-image.js',
                ]
            },
            {
                name: 'videoGalleryModule',
                files: [
                    'modules/videoGallery/videoGallery.controller.js',
                    'directives/cu-image.js'
                ]
            },
            {
                name: 'searchModule',
                files: [
                    'modules/search/search.controller.js',
                    'modules/search/services/search.service.js'
                ]
            },
            {
                name: 'galleryCtrl',
                files: [
                    'controllers/galleryCtrl.js',
                    'directives/cu-image.js'
                ]
            }]
    });

});
