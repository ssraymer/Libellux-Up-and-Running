if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let r={};const d=e=>i(e,l),c={module:{uri:l},exports:r,require:d};s[l]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(a(...e),r)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"17f9a5058bbd9de004c2d99748992305"},{url:"ansible/index.html",revision:"04cfead1af7685978d56981b95fcb941"},{url:"assets/404.b90ca5a4.js",revision:null},{url:"assets/404.html.af837b06.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.28161f9c.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/img/72x72.png",revision:"b36cd3c87f00f07092b6442b7e00b0a6"},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.0b22b276.js",revision:null},{url:"assets/index.html.11d2ac75.js",revision:null},{url:"assets/index.html.3a62176f.js",revision:null},{url:"assets/index.html.44f2481d.js",revision:null},{url:"assets/index.html.48f28137.js",revision:null},{url:"assets/index.html.498bed38.js",revision:null},{url:"assets/index.html.4c3ce03b.js",revision:null},{url:"assets/index.html.52bb25e6.js",revision:null},{url:"assets/index.html.5995b7fe.js",revision:null},{url:"assets/index.html.5d106d18.js",revision:null},{url:"assets/index.html.7ee62276.js",revision:null},{url:"assets/index.html.97006e56.js",revision:null},{url:"assets/index.html.b405b3a1.js",revision:null},{url:"assets/index.html.b54e444b.js",revision:null},{url:"assets/index.html.b974bf44.js",revision:null},{url:"assets/index.html.d2537af3.js",revision:null},{url:"assets/index.html.d2d0bc44.js",revision:null},{url:"assets/index.html.e101edd3.js",revision:null},{url:"assets/index.html.ee41d3e1.js",revision:null},{url:"assets/index.html.f7061870.js",revision:null},{url:"assets/index.html.f76aa6a5.js",revision:null},{url:"assets/index.html.ffcee75c.js",revision:null},{url:"assets/Layout.4e2f7f7a.js",revision:null},{url:"assets/style.e40e5d0f.css",revision:null},{url:"clamav/index.html",revision:"2556d6bcdb0b6242a733c53ae833f856"},{url:"graylog/index.html",revision:"4a37e2c24383a324f1bf0f3f73b696c8"},{url:"img/clamav/win10client1.png",revision:"f34cd1352dd6ed4a0ba01e39c66e0ce2"},{url:"img/clamav/win10client2.png",revision:"73f9904f6b426f5e487673d5a8e72b0e"},{url:"img/clamav/win10client3.png",revision:"1f99bca85b1744912a236d4f77b430ef"},{url:"img/clamav/win10client4.png",revision:"7ce922e5c56669526fc1ff8c1161ffdd"},{url:"img/clamav/win10client5.png",revision:"2b920569ffbc48ab27b34519f886022a"},{url:"img/clamav/win10client6.png",revision:"2939567bf03afc738ab77248a4ca3dab"},{url:"img/icons/1200x627.png",revision:"4ed965ba2daf1f2907b5696f47949426"},{url:"img/icons/1280x640.png",revision:"2f2b95eb6ef52574bd86b1e426be9df9"},{url:"img/icons/144x144.png",revision:"c5abed2721558a98cd5adb1b28d5f032"},{url:"img/icons/1500x500.png",revision:"cb77b3aa40b6fbdd9a25ecb8fed580d3"},{url:"img/icons/1500x500.svg",revision:"910ebabc564fce7de8a047c6d31e6f9a"},{url:"img/icons/192x192.png",revision:"b8853a3b71b3a7e79c116d8d2dc8fe99"},{url:"img/icons/256x256.png",revision:"64014871dd4b25592423d91c4a007f3a"},{url:"img/icons/384x384.png",revision:"f5837cc63fdd26d96461a55d61fb1944"},{url:"img/icons/4096x4096.png",revision:"9e79bb6db785b2243380efb2546cf841"},{url:"img/icons/48x48.png",revision:"c1077dc498ae97b7f5209da9277579e3"},{url:"img/icons/512x512.png",revision:"0a91e0a9adeee05b4a0feeadd06574dd"},{url:"img/icons/72x72.png",revision:"b36cd3c87f00f07092b6442b7e00b0a6"},{url:"img/icons/96x96.png",revision:"2907ea3e33e14a352ba8d282e0f32cd5"},{url:"img/openvas/gce_success.png",revision:"68690af56e0a7e30759701936d306f0b"},{url:"img/openvas/gsa_about.png",revision:"ad0c3660e39fb5402f90f6ae03018118"},{url:"img/openvas/gsa_auth_target.png",revision:"24526d2baf1cc29af4aa4d72d3b646c2"},{url:"img/openvas/gsa_auth_task.png",revision:"fd7ed294fba694fdc494a9b496118af3"},{url:"img/openvas/gsa_credentials.png",revision:"2b167ef41f7c628b88016c5410bae93e"},{url:"img/openvas/gsa_dashboard.png",revision:"62a7cddd490798fa7338f0709aa6deef"},{url:"img/openvas/gsa_login-2.png",revision:"1186c5dd0e841a7bd357adefdfc4a711"},{url:"img/openvas/gsa_login.png",revision:"c41707e31268ccf0b9450eb95acd3494"},{url:"img/openvas/gsa_newcredentials.png",revision:"9d5bb41889cddfca6c246eb5dff70b3e"},{url:"img/openvas/gsa_noauth_scan.png",revision:"6ca50842204bbaae21d1722a8ad22cf7"},{url:"img/openvas/gsa_noauth_task.png",revision:"fd779e1ba6466b852863936c0bbc4527"},{url:"img/openvas/gsa_target_auth.png",revision:"9a602b0a9cf7ce2ecd67ebd2f5fa59fd"},{url:"img/openvas/gsa_target.png",revision:"2a69f5dd7c68a9f5f1fab0d59bfcc60b"},{url:"img/openvas/gsa_targets.png",revision:"7a3ebf39135e960ee4cc8eae1554eb1d"},{url:"img/openvas/gsa_task.png",revision:"5843f298967649c9d3eaf8302099b621"},{url:"img/openvas/gsa_tasks.png",revision:"578e858b776d0a23609524bf76cf86f6"},{url:"img/openvas/gvm-21_4_4-dashboard.png",revision:"ccbe597cd34b3d566c18149c1a3924d8"},{url:"img/openvas/gvm-21_4_4-feed_status.png",revision:"37741f121cda4728ddf7e669d0cf03d6"},{url:"img/openvas/gvm-21_4_4-gsa_about.png",revision:"bfbe8e865903582b977da1414c1c02ef"},{url:"img/openvas/gvm-21_4_4-gsa_login.png",revision:"9ea9b3d2665730e3088322c753bcd700"},{url:"img/openvas/vm_settings.png",revision:"b9ac5625eb085a07362fc0c0a596c483"},{url:"img/ossec/512x512.png",revision:"bee855a078b5cf7941dcc4c2838ddf1d"},{url:"img/ossec/cloudflare_token.png",revision:"c36576440c64fceb89e53cf4f8dd1921"},{url:"img/ossec/remote_syslog_settings.png",revision:"29e56b2348c0689d577022cc7c799d6e"},{url:"img/ossec/remote_syslog_value.png",revision:"213cebc9172c9a1f8f8a3a011dfd9a95"},{url:"img/ossec/windows_agent_complete.png",revision:"8a5f36cb5a5469e42530fcb44543b045"},{url:"img/ossec/windows_agent_components.png",revision:"15d8bf841dbdce26c04ca09b48538dcf"},{url:"img/ossec/windows_agent_manager.png",revision:"095dfcef88dff43ea831b872ccd87898"},{url:"img/ossec/windows_agent_setup.png",revision:"3781048e9d3c81ec993f3cb08cacaa22"},{url:"img/wireguard/mullvad.png",revision:"c65696e0b1b1b1f2fe809aef5c80f932"},{url:"index.html",revision:"b3d5521b42a6d6b79fd4833eeec30392"},{url:"mmonit/index.html",revision:"b15212f78167c475e0e01f0aaf6a2b29"},{url:"openvas/index.html",revision:"07aae39a7376d54d76245061c720efa4"},{url:"ossec/index.html",revision:"27b8360c3d23d182c248ecf73d8f2c33"},{url:"privacyidea/index.html",revision:"8c93360193268e2b13b29202e38475e5"},{url:"psad/index.html",revision:"e28ca75d844103370079ccad7e4d46d2"},{url:"rsyslog/index.html",revision:"58e1329088f2c689d5960046f8da7932"},{url:"wireguard/index.html",revision:"450f01c99716c20e670e5fb0dfe04cb1"}],{})}));
