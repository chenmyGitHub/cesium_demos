(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{433:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=433},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n(59),n(60),n(61),n(132),n(38),n(62),n(63),n(46),n(133),n(64),n(326),n(65);var i=n(0),r=n.n(i);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=n(432);window.Cesium=m,n(434);var f=function(e){function t(){var e,n,i,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),m=0;m<a;m++)c[m]=arguments[m];return i=this,n=!(r=(e=s(t)).call.apply(e,[this].concat(c)))||"object"!==o(r)&&"function"!=typeof r?u(i):r,l(u(n),"_viewer",void 0),l(u(n),"state",{beActived:!1}),n}var n,i,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,m=[{key:"ins",get:function(){var e=this;return null!=this._ins?Promise.resolve(this._ins):new Promise((function(t,n){e.listener.push((function(e){t(e)}))}))}},{key:"__ins",set:function(e){t.listener.length>0&&(t.listener.forEach((function(t){return t(e)})),t.listener=[]),this._ins=e}}],(i=[{key:"componentDidMount",value:function(){0!=this.props.setUp&&this.setUp(),t.__ins=this}},{key:"setUp",value:function(){console.warn("ceisum 启动！！"),this.setState({beActived:!0}),Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMzJmNDgwZi1iNmQ2LTQ0NWEtOWRkNi0wODkxYzYxYTg0ZDIiLCJpZCI6ODUzMiwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU1MjIwMjY4OH0.u4d7x0IxZY06ThT4JFmxrfgBxVjQcfI6xXDLu-fsWsY";var e,t=new Cesium.Viewer(this.containerId,p.MAPOPTIONS);return t.cesiumWidget.creditContainer.style.display="none",t.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK),t.scene.globe.enableLighting=p.global.enableLighting,t.scene.globe.depthTestAgainstTerrain=p.global.depthTestAgainstTerrain,t.scene.highDynamicRange=!0,t.frameUpdate=new Cesium.Event,t.scene.preUpdate.addEventListener((function(n){var i=Date.now(),r=null!=e?i-e:0;e=i,t.frameUpdate.raiseEvent(r)})),null!=this.props.onViewerLoaded&&this.props.onViewerLoaded(t),this._viewer=t,t}},{key:"destroy",value:function(){this.state.beActived&&(this.setState({beActived:!1}),this._viewer&&(console.warn("ceisum destroy！！"),this._viewer.destroy(),this._viewer=null))}},{key:"componentWillUnmount",value:function(){this.destroy()}},{key:"render",value:function(){var e={width:"100%",height:"100%",top:0,left:0,bottom:0,right:0,position:"absolute",display:this.state.beActived?"inline":"none"};return r.a.createElement("div",{id:this.containerId,style:e})}},{key:"containerId",get:function(){return this.props.id||"__cesiumContainer"}},{key:"viewer",get:function(){return this.state.beActived?this._viewer:this.setUp()}}])&&a(n.prototype,i),m&&a(n,m),t}(r.a.Component);l(f,"_ins",void 0),l(f,"listener",[]);var p={ION:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMGRlYTM0ZS0zYjQzLTQ0N2EtYTk4ZS0zNmIwMmU3MDRkNTIiLCJpZCI6MTkzMSwiaWF0IjoxNTMwNzU5NTg3fQ.nt8CVoWjIXTeDM9T6qPs-dM7tb7IWnNc56mzAqhcBBY",global:{enableLighting:!1,depthTestAgainstTerrain:!0},MAPOPTIONS:{imageryProviderViewModels:[new Cesium.ProviderViewModel({name:"Google卫星",iconUrl:"http://img3.cache.netease.com/photo/0031/2012-03-22/7T6QCSPH1CA10031.jpg",tooltip:"Google卫星",creationFunction:function(){return new Cesium.UrlTemplateImageryProvider({url:"http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}",tilingScheme:new Cesium.WebMercatorTilingScheme,minimumLevel:1,maximumLevel:200,credit:"Google Earth"})}})],shouldAnimate:!0,geocoder:!1,shadows:!1,terrainProviderViewModels:[],animation:!1,baseLayerPicker:!1,fullscreenButton:!1,vrButton:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,terrainShadows:Cesium.ShadowMode.DISABLED}}},471:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(435);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"clamp3dtilesToGround",value:function(e,t,n){var i=this;e.scene.camera.viewBoundingSphere(t.boundingSphere);var r=!1;t.allTilesLoaded.addEventListener((function(){if(!r){r=!0;var o=i.pickLowestPostion(e,t.boundingSphere),a=Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(t.boundingSphere.center),s=Cesium.Cartesian3.multiplyByScalar(a,-o,new Cesium.Cartesian3);t.modelMatrix=Cesium.Matrix4.fromTranslation(s),null!=n&&n(t)}}))}},{key:"pickLowestPostion",value:function(e,t){var n=this,i=new Cesium.EllipsoidTangentPlane(t.center,Cesium.Ellipsoid.WGS84),r=Number.POSITIVE_INFINITY,o=function(t,i,o){for(var a=-1*t;a<t;a+=2){var s=Cesium.Cartesian3.multiplyByScalar(i,a,new Cesium.Cartesian3),u=Cesium.Cartesian3.add(s,o,new Cesium.Cartesian3),c=n.pickPosByNormalDir(u,e);if(null!=c&&null!=c.object){var l=Cesium.Cartographic.fromCartesian(c.position).height;l<r&&(r=l)}}};return o(Math.round(t.radius),i.xAxis,i.origin),o(Math.round(t.radius),i.yAxis,i.origin),r<Number.POSITIVE_INFINITY?r+(r>0?-.2:.2):null}},{key:"pickPosByNormalDir",value:function(e,t){var n=Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(e,new Cesium.Cartesian3);n=Cesium.Cartesian3.negate(n,n);var i=Cesium.Cartographic.fromCartesian(e),r=Cesium.Cartesian3.fromRadians(i.longitude,i.latitude,i.height+1e3);return t.scene.pickFromRay(new Cesium.Ray(r,n),[])}},{key:"rotationTo",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Cesium.Quaternion,i=new Cesium.Cartesian3,r=Cesium.Cartesian3.UNIT_X,o=Cesium.Cartesian3.UNIT_Y,a=Cesium.Cartesian3.dot(e,t);return a<-.999999?(Cesium.Cartesian3.cross(i,r,e),Cesium.Cartesian3.magnitude(i)<1e-6&&Cesium.Cartesian3.cross(i,o,e),Cesium.Cartesian3.normalize(i,i),Cesium.Quaternion.fromAxisAngle(i,Math.PI,n),n):a>.999999?(n.x=0,n.y=0,n.z=0,n.w=1,n):(Cesium.Cartesian3.cross(i,e,t),n.x=i.x,n.y=i.y,n.z=i.z,n.w=1+a,Cesium.Quaternion.normalize(n,n))}},{key:"unitxyzToRotation",value:function(e,t,n,i){var r,o=e.x,a=t.x,s=n.x,u=e.y,c=t.y,l=n.y,m=e.z,f=t.z,p=n.z,d=o+c+p;return d>0?(r=.5/Math.sqrt(d+1),i.w=.25/r,i.x=(f-l)*r,i.y=(s-m)*r,i.z=(u-a)*r):o>c&&o>p?(r=2*Math.sqrt(1+o-c-p),i.w=(f-l)/r,i.x=.25*r,i.y=(a+u)/r,i.z=(s+m)/r):c>p?(r=2*Math.sqrt(1+c-o-p),i.w=(s-m)/r,i.x=(a+u)/r,i.y=.25*r,i.z=(l+f)/r):(r=2*Math.sqrt(1+p-o-c),i.w=(u-a)/r,i.x=(s+m)/r,i.y=(l+f)/r,i.z=.25*r),i}},{key:"computeMatToWorld",value:function(e,t,n){var i=t||new Cesium.HeadingPitchRoll,r=Cesium.Transforms.headingPitchRollQuaternion(e,i);return Cesium.Matrix4.fromTranslationQuaternionRotationScale(e,r,new Cesium.Cartesian3(1,1,1),n)}},{key:"calculateOrientation",value:function(t,n){var i=new Cesium.Cartesian3;Cesium.Cartesian3.subtract(t,n,i),Cesium.Cartesian3.normalize(i,i);var r=Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(n,new Cesium.Cartesian3),o=Cesium.Cartesian3.cross(i,r,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(o,o);var a=Cesium.Cartesian3.cross(r,o,new Cesium.Cartesian3);return e.unitxyzToRotation(o,a,r,new Cesium.Quaternion)}}],(n=null)&&i(t.prototype,n),r&&i(t,r),e}()},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(59),n(60),n(61),n(436),n(38),n(437),n(438),n(62),n(439),n(63),n(46),n(64),n(326),n(65);var i=n(0),r=n.n(i);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(e){var n,i,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,r=c(t).call(this,e),n=!r||"object"!==o(r)&&"function"!=typeof r?l(i):r,f(l(n),"trackPos",void 0),f(l(n),"trackEntity",void 0),f(l(n),"element",void 0),f(l(n),"onUpdate",(function(){var e;if(n.props.trackEntity){var t=n.trackEntity.position.getValue(Cesium.JulianDate.now());e=Cesium.SceneTransforms.wgs84ToWindowCoordinates(n.props.viewer.scene,t)}else n.props.worldPos&&(e=Cesium.SceneTransforms.wgs84ToWindowCoordinates(n.props.viewer.scene,n.trackPos));e?(n.element.style.display="",n.element.style.left=e.x-.5*n.element.clientWidth+"px",n.element.style.top=e.y-.5*n.element.clientHeight+"px"):n.element.style.display="none"})),n.trackPos=e.worldPos,n.trackEntity=e.trackEntity,n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){this.props.viewer.scene.preUpdate.addEventListener(this.onUpdate)}},{key:"render",value:function(){var e=this;return(r.a.createElement("div",{className:"tag",ref:function(t){return e.element=t},style:s({},this.props.textCss,{color:"#FF33FF",position:"absolute",whiteSpace:"nowrap"})},this.props.text))}}])&&u(n.prototype,i),a&&u(n,a),t}(r.a.Component)},473:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(59),n(60),n(61),n(38),n(62),n(63),n(46),n(64),n(65);var i=n(472),r=n(0),o=n.n(r);n(476);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,c(t).apply(this,arguments))}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"one",ref:function(t){return e.element=t}},o.a.createElement("p",null),o.a.createElement("span",null)))}}])&&s(n.prototype,i),r&&s(n,r),t}(i.a)},474:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(59),n(436),n(437),n(438),n(439),n(326);var i,r=n(471);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){e[e.pingpong=0]="pingpong",e[e.restart=1]="restart"}(i||(i={}));var u=function(){function e(t,n,a){var u=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"ins",void 0),s(this,"options",void 0),s(this,"currentDir",void 0),s(this,"curPos",void 0),s(this,"curPointIndex",void 0),s(this,"loop",(function(e){if(u.beActived){var t=u.options,n=t.pointArr,o=t.speed,a=Cesium.Cartesian3.multiplyByScalar(u.currentDir,o*e,new Cesium.Cartesian3),s=Cesium.Cartesian3.add(u.curPos,a,new Cesium.Cartesian3),c=Cesium.Cartesian3.distance(n[u.curPointIndex],n[u.curPointIndex+1]);if(Cesium.Cartesian3.distance(n[u.curPointIndex],s)>=c){u.curPointIndex++,u.curPointIndex>=n.length-1&&(u.curPointIndex=0,u.options.loopType==i.pingpong&&n.reverse()),s=Cesium.Cartesian3.clone(n[u.curPointIndex]),u.currentDir=u.calculateDirection(n[u.curPointIndex+1],n[u.curPointIndex]);var l=r.a.calculateOrientation(n[u.curPointIndex+1],n[u.curPointIndex]);u.ins.orientation=Cesium.Quaternion.multiply(l,u.options.adjustRot,new Cesium.Quaternion)}u.ins.position=s,u.curPos=s}})),s(this,"beActived",!1),t.frameUpdate.addEventListener(this.loop),this.options=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a,{adjustRot:null!=a.adjustRot?a.adjustRot:Cesium.Quaternion.IDENTITY,loopType:null!=a.loopType?a.loopType:i.pingpong}),n instanceof Cesium.Entity)this.ins=n;else{var c=n;this.ins=t.entities.add({position:c.pos?c.pos:Cesium.Cartesian3.ZERO,orientation:Cesium.Quaternion.IDENTITY,model:{uri:c.url,scale:null!=c.scale?c.scale:1}})}this.dispose=function(){t.frameUpdate.removeEventListener(u.loop)},this.currentDir=this.calculateDirection(a.pointArr[1],a.pointArr[0]),this.curPointIndex=0,this.curPos=Cesium.Cartesian3.clone(a.pointArr[0]);var l=r.a.calculateOrientation(a.pointArr[this.curPointIndex+1],a.pointArr[this.curPointIndex]);this.ins.orientation=Cesium.Quaternion.multiply(l,this.options.adjustRot,new Cesium.Quaternion),this.active()}var t,n,u;return t=e,(n=[{key:"active",value:function(){this.beActived=!0}},{key:"disActive",value:function(){this.beActived=!1}},{key:"dispose",value:function(){}},{key:"calculateDirection",value:function(e,t){var n=Cesium.Cartesian3.subtract(e,t,new Cesium.Cartesian3);return Cesium.Cartesian3.normalize(n,n),n}}])&&a(t.prototype,n),u&&a(t,u),e}()},475:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(471);function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t,n,i){var r=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"ins",void 0),o(this,"adjustRot",void 0),o(this,"lastOrder",void 0),o(this,"beActive",!1),o(this,"startPos",void 0),o(this,"targetPos",void 0),o(this,"duration",void 0),o(this,"costTime",0),n instanceof Cesium.Entity)this.ins=n;else{var a=n;this.ins=t.entities.add({position:a.pos?a.pos:Cesium.Cartesian3.ZERO,model:{uri:a.url,scale:null!=a.scale?a.scale:1}})}this.adjustRot=null!=i?Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_Z,i*Math.PI/180):Cesium.Quaternion.IDENTITY,t.frameUpdate.addEventListener(this.loop.bind(this)),this.dispose=function(){t.frameUpdate.removeEventListener(r.loop.bind(r))}}var t,n,a;return t=e,(n=[{key:"_moveToPos",value:function(e,t){this.startPos=this.ins.position.getValue(Cesium.JulianDate.now()),this.targetPos=e,this.duration=t,this.beActive=!0,this.costTime=0;var n=i.a.calculateOrientation(this.targetPos,this.startPos);this.ins.orientation=Cesium.Quaternion.multiply(n,this.adjustRot,new Cesium.Quaternion)}},{key:"sendTargetPos",value:function(e){var t={pos:e,time:new Date},n=this.lastOrder?t.time.getTime()-this.lastOrder.time.getTime():1e3;this._moveToPos(Cesium.Cartesian3.clone(e),n),this.lastOrder=t}},{key:"loop",value:function(e){if(this.beActive){this.costTime+=e;var t=Math.min(this.costTime/this.duration,1),n=Cesium.Cartesian3.lerp(this.startPos,this.targetPos,t,new Cesium.Cartesian3);this.ins.position=n,1==t&&(this.beActive=!1)}}},{key:"dispose",value:function(){}}])&&r(t.prototype,n),a&&r(t,a),e}()},476:function(e,t,n){},477:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(59),n(60),n(61),n(132),n(38),n(441),n(62),n(63),n(46),n(64),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(454),n(455),n(456),n(457),n(458),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(466),n(467),n(65);var i=n(0),r=n.n(i);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(){var e,n,i,r;a(this,t);for(var s=arguments.length,u=new Array(s),m=0;m<s;m++)u[m]=arguments[m];return i=this,n=!(r=(e=c(t)).call.apply(e,[this].concat(u)))||"object"!==o(r)&&"function"!=typeof r?l(i):r,f(l(n),"primitiveIns",void 0),f(l(n),"_aspect",1.3),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props.editorInfo,t=document.getElementById("video_dom"),n=d.creacteVideoPrimitive(t);if(this.props.viewer.scene.primitives.add(n),this.primitiveIns=n,null!=e){var i=e;this._aspect=i.aspect;var r=new Cesium.Cartesian3(i.pos[0],i.pos[1],i.pos[2]),o=new Cesium.Quaternion(i.quat[0],i.quat[1],i.quat[2],i.quat[3]),a=Cesium.Matrix4.fromTranslationRotationScale(new Cesium.TranslationRotationScale(r,o,new Cesium.Cartesian3(1*i.aspect,1,1)),new Cesium.Matrix4);this.modelMatrix=a}else{this._aspect=null!=this.props.aspect?this.props.aspect:1.3;var s=Cesium.Matrix4.fromTranslationRotationScale(new Cesium.TranslationRotationScale(this.props.postion,this.props.quat,new Cesium.Cartesian3(1*this._aspect,1,1)),new Cesium.Matrix4);this.modelMatrix=s}}},{key:"show",value:function(){this.primitiveIns.show=!0}},{key:"hide",value:function(){this.primitiveIns.show=!1}},{key:"render",value:function(){return r.a.createElement("video",{id:"video_dom",preload:"auto",style:{display:"none",position:"absolute",top:"30vh",left:"30vw",transform:"translate(-50%,-50%)",width:"70vw"},autoPlay:!0,loop:!0,controls:!1},r.a.createElement("source",{src:this.props.url,type:"video/mp4"}),"Your browser does not support the ",r.a.createElement("code",null,"video")," element.")}},{key:"opacity",set:function(e){this.primitiveIns.appearance.material.uniforms.color=new Cesium.Color(1,1,1,e)}},{key:"color",set:function(e){this.primitiveIns.appearance.material.uniforms.color=e}},{key:"aspect",set:function(e){this._aspect=e;var t=Cesium.Matrix4.fromTranslationRotationScale(new Cesium.TranslationRotationScale(this.props.postion,this.props.quat,new Cesium.Cartesian3(1*this._aspect,1,1)),new Cesium.Matrix4);this.primitiveIns.modelMatrix=t},get:function(){return this._aspect}},{key:"modelMatrix",set:function(e){this.primitiveIns.modelMatrix=e},get:function(){return this.primitiveIns.modelMatrix}}]),t}(r.a.Component),d=function(){function e(){a(this,e)}return u(e,null,[{key:"creacteVideoPrimitive",value:function(t,n){n=n||{};var i=e.createGeometryInstance(n.insModelMatrix),r=e.createAppearance(t);return new Cesium.Primitive({geometryInstances:i,appearance:r,asynchronous:!1,modelMatrix:n.primitiveModelMatrix,show:!0})}},{key:"createGeometryInstance",value:function(e){return new Cesium.GeometryInstance({geometry:this.geometry,modelMatrix:e})}},{key:"createAppearance",value:function(e){var t=new Cesium.Material({fabric:{type:"custome_1",uniforms:{color:new Cesium.Color(1,1,1,1),image:"./images/arrow.png",tmask:"./libAssets/tMask.jpg"},source:"czm_material czm_getMaterial(czm_materialInput materialInput)\n        {\n             czm_material material = czm_getDefaultMaterial(materialInput);\n             vec2 st = materialInput.st;\n             vec4 colorImage = texture2D(image, vec2(st.s, st.t));\n             vec4 maskImage = texture2D(tmask, vec2(st.s, st.t));\n             material.alpha = colorImage.a * color.a*maskImage.r;\n             material.diffuse = colorImage.rgb*color.rgb;\n             return material;\n         }"}});return t.uniforms.image=e,new Cesium.EllipsoidSurfaceAppearance({material:t,flat:!0,renderState:{cull:{enabled:!1},depthTest:{enabled:!1}}})}},{key:"creacteGeometry",value:function(e,t){var n=e/2,i=t/2,r=new Float64Array([n,0,i,-n,0,i,-n,0,-i,n,0,-i]),o=new Float32Array([1,1,0,1,0,0,1,0]),a=new Uint16Array([0,1,2,0,2,3]);return this._createGeometry(r,o,a)}},{key:"_createGeometry",value:function(e,t,n){return new Cesium.Geometry({attributes:{position:new Cesium.GeometryAttribute({componentDatatype:Cesium.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}),st:new Cesium.GeometryAttribute({componentDatatype:Cesium.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:t})},indices:n,primitiveType:Cesium.PrimitiveType.TRIANGLES,boundingSphere:Cesium.BoundingSphere.fromVertices(e)})}},{key:"geometry",get:function(){return null==this._geometry&&(this._geometry=this.creacteGeometry(10,10)),this._geometry}}]),e}();f(d,"_geometry",void 0)},478:function(e,t,n){"use strict";var i=n(31),r=n(25),o=n(8),a=n(489),s=RegExp.prototype,u=s.toString,c=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(c||l)&&i(RegExp.prototype,"toString",(function(){var e=r(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in s)?a.call(e):n)}),{unsafe:!0})},489:function(e,t,n){"use strict";var i=n(25);e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},527:function(e,t,n){"use strict";n.r(t);n(59),n(60),n(61),n(132),n(38),n(431),n(62),n(63),n(46),n(64),n(65);var i,r=n(0),o=n.n(r),a=n(477),s=n(469);n(478);!function(e){e[e.Cartesian=0]="Cartesian",e[e.Cartographic=1]="Cartographic",e[e.Cartographic_angle=2]="Cartographic_angle"}(i||(i={}));var u,c=n(471);n(327);!function(e){e[e.POLYGON=0]="POLYGON",e[e.LINE=1]="LINE"}(u||(u={}));n(474),n(475),n(473),n(472);var l=n(440);function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t){var n=this;m(this,e),p(this,"viewer",void 0),p(this,"videoFusion",void 0),p(this,"gui",void 0),p(this,"_camerOffset",30),p(this,"beActive",void 0),p(this,"editorInfo",void 0),p(this,"currentPos",void 0),p(this,"currentQuat",void 0),p(this,"loop",(function(){if(n.beActive&&n.videoFusion){var e=n.viewer.camera,t=Cesium.Cartesian3.multiplyByScalar(e.directionWC,n._camerOffset,new Cesium.Cartesian3),i=Cesium.Cartesian3.add(t,e.positionWC,new Cesium.Cartesian3),r=c.a.unitxyzToRotation(e.rightWC,e.directionWC,e.upWC,new Cesium.Quaternion),o=Cesium.Matrix4.fromTranslationRotationScale(new Cesium.TranslationRotationScale(i,r,new Cesium.Cartesian3(1*n.videoFusion.aspect,1,1)),new Cesium.Matrix4);n.videoFusion.modelMatrix=o,n.currentPos=i,n.currentQuat=r}})),this.viewer=t,this.viewer.frameUpdate.addEventListener(this.loop),this.guiInite()}var t,n,i;return t=e,(n=[{key:"attch",value:function(e){this.videoFusion=e}},{key:"active",value:function(){this.beActive=!0}},{key:"disactive",value:function(){this.beActive=!1}},{key:"dispose",value:function(){this.gui&&this.gui.destroy()}},{key:"guiInite",value:function(){var e=this,t=this.viewer,n=new l.a.GUI;this.gui=n;var i=new v;i.fov=180*t.camera.frustum.fov/Math.PI,i.LogVideoInfo=function(){var n={};n.aspect=i.aspect;var r=Cesium.Matrix4.getTranslation(e.videoFusion.modelMatrix,new Cesium.Cartesian3),o=Cesium.Matrix4.getRotation(e.videoFusion.modelMatrix,new Cesium.Matrix3),a=Cesium.Quaternion.fromRotationMatrix(o);n.pos=[r.x,r.y,r.z],n.quat=[a.x,a.y,a.z,a.w],n.cameraPositon=[t.camera.positionWC.x,t.camera.positionWC.y,t.camera.positionWC.z],n.cameraHeadPithRoll=[t.camera.heading,t.camera.pitch,t.camera.roll],n.cameraFov=i.fov*Math.PI/180,e.editorInfo=n,console.warn("videoInfo:",JSON.stringify(n))},i.loadEditorInfo=function(){if(e.editorInfo){t.camera.frustum.fov=e.editorInfo.cameraFov,t.camera.setView({destination:Cesium.Cartesian3.fromRadians(e.editorInfo.cameraPositon[0],e.editorInfo.cameraPositon[1],e.editorInfo.cameraPositon[2]),orientation:{heading:e.editorInfo.cameraHeadPithRoll[0],pitch:e.editorInfo.cameraHeadPithRoll[1],roll:e.editorInfo.cameraHeadPithRoll[2]}}),e.videoFusion.aspect=e.editorInfo.aspect;var n=Cesium.Cartesian3.fromRadians(e.editorInfo.pos[0],e.editorInfo.pos[1],e.editorInfo.pos[2]),r=new Cesium.Quaternion(e.editorInfo.quat[0],e.editorInfo.quat[1],e.editorInfo.quat[2],e.editorInfo.quat[3]),o=Cesium.Matrix4.fromTranslationRotationScale(new Cesium.TranslationRotationScale(n,r,new Cesium.Cartesian3(1*e.editorInfo.aspect,1,1)),new Cesium.Matrix4);e.videoFusion.modelMatrix=o}else{i.aspect=e.videoFusion.aspect;var a=Cesium.Matrix4.getTranslation(e.videoFusion.modelMatrix,new Cesium.Cartesian3),s=e.viewer.camera.positionWC;i.camerOffset=Cesium.Cartesian3.distance(a,s),i.fov=180*e.viewer.camera.frustum.fov/Math.PI}},n.add(i,"active").onChange((function(t){t?(e.active(),e.videoFusion.color=Cesium.Color.fromCssColorString(i.color).withAlpha(i.opacity),e.videoFusion.aspect=i.aspect):e.disactive()})),n.add(i,"opacity",0,1).onChange((function(t){e.videoFusion.color=Cesium.Color.fromCssColorString(i.color).withAlpha(t)})),n.add(i,"aspect",1,3).onChange((function(t){e.videoFusion.aspect=t})),n.addColor(i,"color").onChange((function(){e.videoFusion.color=Cesium.Color.fromCssColorString(i.color).withAlpha(i.opacity)})),n.add(i,"camerOffset",.1,100).onChange((function(t){e._camerOffset=t})),n.add(i,"fov",30,180).onChange((function(e){t.camera.frustum.fov=e*Math.PI/180})),n.add(i,"keyBoard"),n.add(i,"LogVideoInfo"),n.add(i,"loadEditorInfo"),document.onkeypress=function(e){if(i.keyBoard)switch(e.key.toLowerCase()){case"q":t.camera.moveUp(.01);break;case"e":t.camera.moveDown(.01);break;case"a":t.camera.moveLeft(.01);break;case"d":t.camera.moveRight(.01);break;case"w":t.camera.moveForward(.01);break;case"s":t.camera.moveBackward(.01);break;case"z":t.camera.setView({orientation:{heading:t.camera.heading+.001,pitch:t.camera.pitch,roll:t.camera.roll}});break;case"x":t.camera.setView({orientation:{heading:t.camera.heading-.001,pitch:t.camera.pitch,roll:t.camera.roll}});break;case"c":t.camera.setView({orientation:{heading:t.camera.heading,pitch:t.camera.pitch+.001,roll:t.camera.roll}});break;case"v":t.camera.setView({orientation:{heading:t.camera.heading,pitch:t.camera.pitch-.001,roll:t.camera.roll}})}}}}])&&f(t.prototype,n),i&&f(t,i),e}(),v=function e(){m(this,e),p(this,"active",!1),p(this,"opacity",.5),p(this,"aspect",1.3),p(this,"camerOffset",.1),p(this,"color","#ffae23"),p(this,"keyBoard",!0),p(this,"fov",50),p(this,"LogVideoInfo",null),p(this,"loadEditorInfo",null)};function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",(function(){return I}));var I=function(e){function t(){var e,n,i,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return i=this,n=!(r=(e=C(t)).call.apply(e,[this].concat(a)))||"object"!==h(r)&&"function"!=typeof r?b(i):r,g(b(n),"state",{viewer:null,opacity:.5,pos:new Cesium.Cartesian3(-2862001.0959806717,4651306.438826122,3283702.9141938747),quat:new Cesium.Quaternion(-.3554680319936638,.3186025875155842,.8575975474538291,.1914714497258105),aspect:1.7979678238780694,editorInfo:{aspect:1.7979678238780694,cameraOffset:30.00000000036392,pos:[-2861999.8843600666,4651308.262380583,3283701.9702296667],quat:[-.35565499986088944,.3184325958649666,.8574897840777559,.19188922108063622],cameraPositon:[-2861983.216648571,4651329.969133107,3283689.681849448],cameraHeadPithRoll:[1.0240711517455319,-.06604407712253324,.002514721490340044],cameraFov:.8979678238780694}}),g(b(n),"editor",void 0),n}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(i=[{key:"handleViewerLoaded",value:function(e){var t=this;this.setState({viewer:e}),e.scene.primitives.add(new Cesium.Cesium3DTileset({url:"http://cloudv2bucket.oss-cn-shanghai.aliyuncs.com/185/1254/resultCC/Production_1.json",maximumScreenSpaceError:.8,maximumNumberOfLoadedTiles:100}));var n=this.state.editorInfo;e.camera.frustum.fov=n.cameraFov,e.camera.setView({destination:new Cesium.Cartesian3(n.cameraPositon[0],n.cameraPositon[1],n.cameraPositon[2]),orientation:{heading:n.cameraHeadPithRoll[0],pitch:n.cameraHeadPithRoll[1],roll:n.cameraHeadPithRoll[2]}}),setTimeout((function(){var n=new d(e);n.attch(t.videoFusionIns),t.editor=n}),1e3)}},{key:"componentWillUnmount",value:function(){this.editor.dispose()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{id:this.constructor.name,onViewerLoaded:this.handleViewerLoaded.bind(this)}),this.state.viewer?o.a.createElement(a.a,{ref:"VideoFusion",editorInfo:this.state.editorInfo,aspect:this.state.aspect,postion:this.state.pos,quat:this.state.quat,url:"./videos/videoFusion.mp4",viewer:this.state.viewer}):null,o.a.createElement("div",{style:{position:"absolute",top:"350px",right:"30px",zIndex:99,backgroundColor:"#dd4f"}},o.a.createElement("div",null,"==gui介绍=="),o.a.createElement("div",null,"active：是否激活视频融合编辑工具"),o.a.createElement("div",null,"opacity：调整video透明度"),o.a.createElement("div",null,"apset：视屏宽高比"),o.a.createElement("div",null,"color：视屏染色"),o.a.createElement("div",null,"cameraOffset：和相机举例调整"),o.a.createElement("div",null,"keyboard：使用(awsd,zxcv)对摄像头位置进行微调"),o.a.createElement("div",null,"==操作介绍=="),o.a.createElement("div",null,"1.粗略调整相机视角到视频在3d场景中的视角"),o.a.createElement("div",null,"2.调整 opacity,color,offset等参数方便后续融合"),o.a.createElement("div",null,"3.再次使用cesium默认视角调整工具粗略调整视角"),o.a.createElement("div",null,"4.使用键盘对视角进行微调")))}},{key:"videoFusionIns",get:function(){return this.refs.VideoFusion}}])&&y(n.prototype,i),r&&y(n,r),t}(o.a.Component)}}]);