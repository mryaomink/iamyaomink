'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "fad5592e1366f7f2a4b27e47ea8dcc71",
".git/config": "85c0ebe97eb582d5f9471563913e78d8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "89508a8cdcdd71752da4387a568a7a58",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "6b11a7aab65dfb47cad3bcc03b810b03",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4329075a48d562978e0a21bd738feedc",
".git/logs/refs/heads/main": "118c2b1de4591b955ff87a4f92bc17fb",
".git/logs/refs/remotes/origin/main": "001954e97e2829a1d0125a4e7bb9a7cf",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/18/3921437239510e775076cf338f7bbbc04aeba5": "2a1ee54215a85cfb340b9e6bba0df15e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/222bfc3feb41df734ba1a7ec2f8b427a0c2098": "86769e0f4be773c15348ad32fd8f3761",
".git/objects/28/96d45b6ba8368560a1724a28fd6629346bdc63": "ebf855c357f44024dbe2cacb0df71491",
".git/objects/2c/8efbadd1fd022ebfd8db7ffcfa2fbceae7424d": "8c51ad7c6a149be2729f7fbcdfe9ea52",
".git/objects/36/17957b4d65086c003f12b67c627c9a0d750907": "f8319afa078cd3cb521d54ab8b64f4b7",
".git/objects/37/9e0fafa93573106ee77ac336f7bba223ca66cd": "57e1150a4ba4e8c12b059cddb6bdeb55",
".git/objects/3a/41da79666bafc1516a930ab4dced2c294d77fe": "d29fa6921db656743603c6953e875a45",
".git/objects/3b/cbad6c85f5de19f9c823eea7614cf6b30e7765": "3c7b7423bd71b17f8cd6b884a753f65b",
".git/objects/3e/eea0f1a8f0be68797a2211df9376a54a0f3724": "52805c113597c98151b964c49aca66fa",
".git/objects/45/e373d9ed8fdcf5f897088d234244c6297a3f7f": "9538a3ee6f0246fd9f2e0cbc1eaef9ea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/22ae0a1e407b690430a1116c7e7e47078bc7ca": "31b1cf4cf16a5ad285d4a17e89d38a03",
".git/objects/4d/003a85367c9724c5a6d0f452f4a0a55b438bbd": "412eb9bf2daa2a463ee2be4169f347c6",
".git/objects/4f/9dbffac4b55420419aad64d469f63dd88ad3ae": "7905e4b4c27bf310d5ab3adf1a2df6d6",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/61/0e44623407c137829518c9c9669db125c6881d": "fb86c52e961bc1d643f2b456352439ad",
".git/objects/67/dda8f3dd01b188b23dbd529af41361f8d7ced4": "02b5b2c34eff35185d7ad5741c9e7232",
".git/objects/7b/1b41ec4ca7d14852d76b91bb9430d6eb85b7da": "0ae42c484aa2c6e7770dfdf14ba35076",
".git/objects/80/8b50c038bcf6104ffe4865224ab3ebfe9946e3": "fd148575088adf738fbd13e8d4e50905",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9207c27bea7bf5a1fbebdef5ff48fe8be82cf9": "fc753684125090a18fff775bc16da820",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/9c768d0dd58cec8bb5ba42f03d448187e3b151": "e32e7d474a34c25cfa252e89a1c51cfa",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/2f6a504ca8e2309c597faf588d058d0343dd86": "eae74f7ee120f4ed2e401f6b218bd07d",
".git/objects/ab/d29d79046c59d52728ae6914748f35fa6c9e3a": "afca03875c47e88a14609ec86087ca04",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b2/fa6d81e900229205bd898e9e979b647284de09": "f1ed622900e6061c9a7314060d7262eb",
".git/objects/b4/f3e968869d2fab3feb049d64c8f4e46f0cc2e5": "e58ddb874fccc26aa8600eb45ecec656",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c5/5886b9603bd2f85bfc95c542503e9177169b00": "62843df56bdb056dd05eabacd6472430",
".git/objects/cd/61c1e8c8c9c8128650a87a6389a1c2dec08e7b": "31d006b90df7140e22946c0e3cf5260b",
".git/objects/cf/50f68f55f2a51f2b8c3c4cce8a20b76b7c2aec": "fd18ffbb5566cf36884adce909080c88",
".git/objects/d8/c5549fbb8e379fd28339508dc5a3dcdb746589": "123fbef087a0235bbd2831678f88240b",
".git/objects/db/d1948ce00b7e712422554f81bf19ed765756cd": "eaf710849d22ed6cbc2088b5e3540b2a",
".git/objects/df/c4d31bbd08e9f78e447076c4923a07ec221bde": "05ef8648d2c5a9f39c9d037f688bd29b",
".git/objects/e8/7b4cc56b2536c2b9e6887fa097c0f059b93579": "d59d735cfe5642f6bde3719e615dbadd",
".git/objects/eb/a9a2cdbd221ba0ae9fec811805453f22325022": "476213d57aa170f18e4963e5fbb220ba",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fb/f2b8be6cecbbadbe6ed2e4beb5f6915d71f00e": "fb0596544a480720d4f5420468e2d251",
".git/objects/fd/cf682812bb5ca986d88dcafaaa0b331ed988bd": "d09f3776aadef614cf48ac367e540b4a",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "0061e1a63ecee1ce6be9c7364656f90d",
".git/refs/remotes/origin/main": "0061e1a63ecee1ce6be9c7364656f90d",
"assets/AssetManifest.json": "b3472dc4d50b15bd8c2b7505e3ebbfc8",
"assets/assets/images/backstrip.png": "33a5ada915ac18d4ae497f0c38c79558",
"assets/assets/images/bug.png": "03c8a9a866b6c1f625b304e56c518ffb",
"assets/assets/images/coment.png": "153fa8c2c7d72e39fffe982bbdad2aab",
"assets/assets/images/heroimg.png": "08ecccc41660d152740207bd2fd8c65e",
"assets/assets/images/kitabantuss.png": "95cbd57c71a849f66f4b4e4f39eaf2ad",
"assets/assets/images/logo.png": "a30d3c976e36dc7a9afaada70ffc9477",
"assets/assets/images/programmer.png": "bdf272d883213656fc20ea4472a1d89e",
"assets/assets/images/stripbot.png": "372f25ecea35b7d3b0995a974a3cc822",
"assets/assets/images/timecoding.png": "1113f448e7f3dbbdf67b13f5e301cd56",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a856133f34248edba4620dbbbba67ab9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "face40b7cdd5372b0b80b6fbb1705ac8",
"/": "face40b7cdd5372b0b80b6fbb1705ac8",
"main.dart.js": "66041427120790e8c4d47703b4f1caa2",
"manifest.json": "a760dbeb0ab14355665c7d7fafafd13c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
