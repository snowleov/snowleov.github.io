'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b76e953bebf158c07ad63b931627b22e",
"assets/FontManifest.json": "9cd778d1d1c42ea49888e1a0e4741251",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Satisfy-Regular.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/images/back.jpg": "df40fdc2c9b07a6de78373468105eb48",
"assets/images/card-1.jpg": "d24bddfb703ad9c6eab255d10ca7de12",
"assets/images/card-10.jpg": "1245320f4d3bcfc7d3a3c4b3edcd4070",
"assets/images/card-11.jpg": "868e327ddf86957c9987ec3e299b19d7",
"assets/images/card-12.jpg": "df88a5da2011501d438bb39431bb4073",
"assets/images/card-13.jpg": "2168add8be70a3e7129af37f99494847",
"assets/images/card-14.jpg": "6d0301013cc71650054e0510cdbc6e13",
"assets/images/card-15.jpg": "e1d279321e8fbfe8dec045db0dac259c",
"assets/images/card-16.jpg": "87bfe8529a926fa40d12eacf576a2327",
"assets/images/card-17.jpg": "091843299559e279d3017ca9e1eb2a2e",
"assets/images/card-18.jpg": "45d64c0f2137abc33901bee4db51d806",
"assets/images/card-19.jpg": "d65d24890cd9910c4fe5b292449f5f1b",
"assets/images/card-2.jpg": "d2a59871e1c3730df1d8e5952908e9dc",
"assets/images/card-20.jpg": "9272010a1728e09334d553e9fc672f5c",
"assets/images/card-21.jpg": "c834e591821d479f04d5d887ad5a9d77",
"assets/images/card-22.jpg": "444becb67c3ce685ae42e449835657f9",
"assets/images/card-23.jpg": "70715b17180a57334f147d1f85b5ca6b",
"assets/images/card-24.jpg": "1cd321a621c0abaa6cbb08208a90a5bc",
"assets/images/card-25.jpg": "e835c7faec12e777d99f480b2805fdea",
"assets/images/card-26.jpg": "b3f3577ec4c571e2ee4eb8440b1fa235",
"assets/images/card-27.jpg": "6fcf8cb15f81f483c65ef512ba88b781",
"assets/images/card-28.jpg": "27b21c7743ffb3a9c848e8f3e61d8ab3",
"assets/images/card-29.jpg": "4f07c81f8124c170009b4e893a5b1005",
"assets/images/card-3.jpg": "a3fe2d3830a07610f250f9c5d2301d6d",
"assets/images/card-30.jpg": "794a1f3a6b35119d419a577d54964a4b",
"assets/images/card-31.jpg": "eafd31ba2469650a5d2797257a133038",
"assets/images/card-32.jpg": "912a58d2321f43c0f4fac23e9b65d609",
"assets/images/card-33.jpg": "c1528006b15b96865cf4bacac76cdfa1",
"assets/images/card-34.jpg": "09d9e22908f8009d57c2022fbf999461",
"assets/images/card-35.jpg": "8b962c1487f1f634a594e092c9d7d70e",
"assets/images/card-36.jpg": "d2fd47fbf394fce3087821a105e7984f",
"assets/images/card-37.jpg": "0834a77df6a22bfe60dfca347298e0d7",
"assets/images/card-38.jpg": "96e8a8b9d9da1d1bec3a5884df8aff5d",
"assets/images/card-39.jpg": "2706427c0947d87f8eebea90fd0d52bf",
"assets/images/card-4.jpg": "faf012928322a623c747223e1acc97f8",
"assets/images/card-40.jpg": "ffbc18ab7ceb3195f5d0996f0e42655f",
"assets/images/card-41.jpg": "a6a75b77f17fda6c80cc67753453daf3",
"assets/images/card-42.jpg": "9fbfd6f0dab0fdf4514c66f3e235bc06",
"assets/images/card-43.jpg": "26172c20dff5dbb5b8e5a9ef29646c9f",
"assets/images/card-44.jpg": "a895247b2e2df7dd5af8c11cea4d6a36",
"assets/images/card-45.jpg": "f432ce9e3e01bedd13677540dfdb2909",
"assets/images/card-46.jpg": "78434ee423e3916f111dfa2da61c411c",
"assets/images/card-47.jpg": "3f11fa9769d3f3e5ee51b1ae27e68828",
"assets/images/card-48.jpg": "9b7f4c75ed1e6224aa7d33534c0e07d1",
"assets/images/card-49.jpg": "fdd568955fd23d93da9cc25525e55ea1",
"assets/images/card-5.jpg": "e215e87fe60357c489de84f55f322d87",
"assets/images/card-50.jpg": "56211b28a59ca37a81f1c226f4aa5794",
"assets/images/card-51.jpg": "dd74de5d04f00fab9b445ec32157f776",
"assets/images/card-52.jpg": "306d2cb6f1d2dae58b098c2d114d4dae",
"assets/images/card-53.jpg": "d601e091a357c3f187c45095e2b3a909",
"assets/images/card-54.jpg": "7d2858eb8c8f505c474934fbd42d1359",
"assets/images/card-55.jpg": "35696c19f8d7a9225556292b5a6eb470",
"assets/images/card-56.jpg": "55e6161a02433cfd3d6ca56dd0955c47",
"assets/images/card-57.jpg": "b347a010c105c99c1c6620f7a2fae480",
"assets/images/card-58.jpg": "4cb4bb61f21e8e2f9db9b0ffe32bab2e",
"assets/images/card-59.jpg": "97b6439ff8173ec3b08341b190605936",
"assets/images/card-6.jpg": "d47b912d0c8112fcab2368d55237f439",
"assets/images/card-60.jpg": "601ecaad158f6bd3f23588e182185a8e",
"assets/images/card-61.jpg": "756a4d4f0b4b59367d87c501176ed28f",
"assets/images/card-62.jpg": "30aefa63e1f8c6b6f2ecc4dd3ecafcfa",
"assets/images/card-63.jpg": "1ed91e6d40668f2161416421b5d65f69",
"assets/images/card-64.jpg": "d30c2b493398f4600744f15c80cd720d",
"assets/images/card-65.jpg": "8d7188396621fe8e97c6b424f4ca4485",
"assets/images/card-66.jpg": "3ee01e82ea79f56779736a29bcf32e56",
"assets/images/card-67.jpg": "55c25b35d2f7d7721997dd651a9b68a5",
"assets/images/card-68.jpg": "9abea33fe2a9108f621d92d70db8afaa",
"assets/images/card-69.jpg": "df6e40b77f7d9e3c3b446d4fcac0758b",
"assets/images/card-7.jpg": "4e199cdece31fee599706d94a009670d",
"assets/images/card-70.jpg": "0ede4f4e14f534bc25d52293f1999391",
"assets/images/card-71.jpg": "1bcc80d1c6836134fab9974d4ee46c5f",
"assets/images/card-72.jpg": "1d3ce11d0b077c088c19d2524b1b9931",
"assets/images/card-73.jpg": "1ffc326d22face3a0aefd0c7eb370e1b",
"assets/images/card-74.jpg": "c11ec1055ff7e4a3863b052c89c80a02",
"assets/images/card-75.jpg": "a37a26873bdb250440b750e9a85f9151",
"assets/images/card-76.jpg": "b286b0229db37297635cf9cec0930267",
"assets/images/card-77.jpg": "5f4000d835a5feba9b2a34839e7ae563",
"assets/images/card-78.jpg": "49a906d5e72602315c5c51885f27cbef",
"assets/images/card-8.jpg": "eef8224d66e86cb775112b50582d1bb0",
"assets/images/card-9.jpg": "0ded50896025e3f3a54a03abc67ce420",
"assets/NOTICES": "f58d8fe42ecf4f0d2c35b91277fc90d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "87a3a23e666f0d76db631c9c186dd92d",
"/": "87a3a23e666f0d76db631c9c186dd92d",
"main.dart.js": "2a23066ca7c867060f06ee43cd216a2e",
"manifest.json": "ffed28c5859bb7db56db524e5a9134c6",
"version.json": "c72dd9007e6fa6ce5029cbe514299506"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
