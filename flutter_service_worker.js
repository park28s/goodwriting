'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f13c37ee71eb791dfe4f3afbc50cda33",
"favicon.ico": "c77d2173142c6236c4630c76c58b0e75",
"index.html": "15254d076d3f21af3b9a6a8ad478a151",
"/": "15254d076d3f21af3b9a6a8ad478a151",
"main.dart.js": "8b5e8fb0be65a355edd507f6afd5c0eb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/goodimg.png": "814f80f9dc93a32d89922f188938c4b9",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a7d265b4da8cce206fbaf7c976e9d5f1",
".git/config": "94d80eebf258adc2eb0ba55f7f6640e9",
".git/objects/3b/e74396e6ef51ab5b34680514ae5bcb671173a1": "f71e76e765f3e50c3ac3aea6a4c258f2",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/32/cf98f7c9bbf59fab9803bba40f6dd592c45253": "a7042b302825784c77a61d8f7d1d0699",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/075fcff78fadea62411c82a9b643b4ceac1023": "1a39ea19454a6f22c5b792c018734c3a",
".git/objects/33/ce96e9b6769c46c6cdc0d3bcda79d15c28382d": "631cfb792ef8d49957a94b1d970780b2",
".git/objects/05/97567d8c1af1944df7476027d74906d051d3d5": "8ec8d02f31da6298ba770e57dc04b5b1",
".git/objects/9d/f417a5e5f57e22adf6aa0f1afdb0b1f0ef4dba": "064b0588c8a11383dba0e1f1ec824ac1",
".git/objects/02/3b8172e100a8266336e613a8344538b1c9b108": "c7506920c9df8d81988feda84e0640b2",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ac/a8093ef7d147ef321e692d30c4de84f90be2cb": "a780bb30785a54e30bb7c03254f22d2a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/02233b0260f39b158a4fb8626516d4ea583aa7": "006d154ef040cb3ce9926e83a1bc267a",
".git/objects/b4/d0a68f07f6e44ae9e55bfe1f594a84f0a10bbb": "006c0174eba7d78a265f6dde31abad56",
".git/objects/a5/99e4dbf3afcae4965b3a95259677d7a62f623e": "a156d1199484d2a569e6eec502d2a9a8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/7aa45348c52c338ba27191f43f4272aa656112": "caa32d6c05bf03fbcb35cca1c1db492d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/63132ed637bc1e3f72ba4c3b73d0f569d2b47b": "53a017e086ca0e521bf9ad33dab802e9",
".git/objects/f5/1ffed599d63bf45c1f05d0821d0d24a3438399": "c4c80c0e140fcdb26f4038bf727e2cd1",
".git/objects/e3/7c6aa9659b2682efedb255854c77675cc66cae": "c340c7c9c526db598bcc0aac09eb64a4",
".git/objects/cf/7d9c6587363193a590ff8ffa3c55505f1c5e2c": "0d3fd34343eb765065378c3284825ca5",
".git/objects/4b/a1191104ed4940f67640eb6a86e7ec5b46e9fd": "a9b8f82adbc7000566867325755b39e0",
".git/objects/28/d7496fec8afcaba1dfa9813c216d3704b61a8c": "0e3b62770c3fe4578979196df172cdc2",
".git/objects/8a/b78ac997bb388d1d9ee492efb2791616b24427": "4921b0404702fc0921a98b0b0155c955",
".git/objects/7e/601ad0f04b4c3415ebee0a453341902164ceb2": "d52b27a86f124721210206b7aea87a41",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/86/183ac678b7e6e11ef248674808c23dbf0e9184": "2b0715431e7fc5110d7b737df2035321",
".git/objects/2a/f4d5e77d467e711fce82d36c3f2e8cd8add8f1": "1b69fdf7cc6ac634b0494db572039e0e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/9482bb5a5e31de667f206ea8906ea519798da8": "22aa34c5a72f4dab924f4f8777df2b7a",
".git/objects/00/c7bc507e27a6fad0a37e0e3d5b2163487e07a3": "f160fcd4b1beb4554d31cb1995db3aac",
".git/objects/6e/9596222a79e2a8770a2ed2a7e97613bab23366": "fd611e2899a2b35dce66d22876937e56",
".git/objects/31/92780d04e6aca6dc7162f993712623c03e47f0": "cc30acc258c4ef57efcbe531ae388084",
".git/objects/91/60bc31f43ff28ca4dd4250c93fb299cba1333c": "5a534a7d29dd2652e41840132f39ea89",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/98/b299d6476ea5486a098c970f11e1a0ff2eaf21": "8c89fee7116aad201ed65500fdd3d4fe",
".git/objects/53/12a2a67b8d8b0479a7a1d0e8fd429a27d33fe7": "9c86437aba3f7f2bc783b9d821a2cea9",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/1550d7a537e9ad9b55ca31b809ac1c22d86d58": "136e5568dd78a6055e37444cde96778b",
".git/objects/6c/dfa87437b3abb2df6c281a31982cf20ab5b987": "37f2b4401c09fdc5d6fb6e1656149ae5",
".git/objects/64/b92a1c3db3a0ce21551ed8c5b0864db5f63a8e": "006a9a79e20e694510b1eb1f6b29efc6",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/aa/8cbf9b723a6d510030d2600323f399ba523a7d": "5d008ed1e5ab89dba94dabdc76117b01",
".git/objects/af/5f35844a5615941a1ba4b0d2bcd64edd5c0ae8": "12fee09d4a773f136a418b5805279289",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/1f2057d617e4dd6b0cffdca39b695c03742295": "7db031901ad90367b657a8867fd98705",
".git/objects/b0/c8b66750f36da7a2be987d673b88f5e088364c": "a32bc321a22efac96a32ec14fbb08f5d",
".git/objects/b9/910971de4cfe0364af4145203917f8fa24de3d": "03c2b99f3216d0463f6085a6e3a0981c",
".git/objects/ea/0396ff41c9864844fd905c92fa250c00b3bb15": "2cf990b8f5225b242da38018711f5515",
".git/objects/cc/cabe4a96e672e8e38ffe59cbb73fa3f915d008": "dc75b983b3ef1bac723679bdbbc8c493",
".git/objects/f0/b0ffa941fdc663fd75c548ca7e87fd3b9e004b": "7077f47c32a054f0764a1c3f3577edb7",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e0/3181852c419f063643d62fb530c8c7f3a5974a": "68c94b60e8f522466b9fb9cf991d5abd",
".git/objects/83/bc1239b651660b4ae64a488105be35f9efdad3": "36af541d7cdcff8e65f766b3e9abdb2c",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4f/0ea643248d3ed1591e6db105ad9790cc8d35ef": "21ec8a5a4a6709d3025e081e98dca629",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/2ea9312469f75b75616ea09f044ade45bdccdb": "56170765702a363fd618a2e4190fead6",
".git/objects/1c/a1eaefc2a5e057a6b99b0a56370d4c9220b279": "9cc6cd0aaaf05762b6a404f114d70313",
".git/objects/2b/cd886403ee1e5b639eb7a9e20bb2552a8a1fe6": "dcf2a7b0462cde0b4eb96b741b40f034",
".git/objects/78/38e29496b1d6e40101511346b8982e4cd64827": "16ff959711048e5ce8b3a1dce8448b4c",
".git/objects/8b/46a82dfc06c3cbe25962cea0f2eb6f7f571f5c": "19250542b5de70af8ec7b8cdf838638a",
".git/objects/7a/fc4d36dc51cf316d547b5bf0d1c2dab79cbe14": "7084425c308cd9b9beb9422f27a09c1a",
".git/objects/14/ab2829732e4d3511f7a838ae8a1859ef9411df": "cec9e13b70d3704b3175e2d7138cf38e",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e80942eb91b3be18a7c838b8a410cb0f",
".git/logs/refs/heads/main": "e80942eb91b3be18a7c838b8a410cb0f",
".git/logs/refs/remotes/origin/main": "3c059adda66cb5801557ceaf4928216c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1f384ec99264ab47def78fa784fcf073",
".git/refs/remotes/origin/main": "1f384ec99264ab47def78fa784fcf073",
".git/index": "d3a7e1367189406b3a8675ba769b73b2",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "b76c371673a81fbed5608acff47ca396",
"assets/AssetManifest.json": "61c54b6588180080b9ef430585c6017d",
"assets/NOTICES": "790ad29ba51f805819498aba63da29e0",
"assets/FontManifest.json": "ba7fd31a63f80573600b5c411202bbd2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "caf2b87a1f767d79d80857e94088291a",
"assets/fonts/MaterialIcons-Regular.otf": "7a3a283a7a35763c7b00c22054b82a45",
"assets/assets/images/kakao_logo.png": "b0cd652cc5944da2a07a7e6298a70cd1",
"assets/assets/images/logo.png": "181b45929ecd6867f137854207bafa72",
"assets/assets/fonts/CookieRun%2520Bold.ttf": "b01731e0798bd4242f0b2a058601b173",
"assets/assets/fonts/CookieRun%2520Regular.ttf": "b6c8137dd2e215ed1aba2ebfc45c93c4",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
