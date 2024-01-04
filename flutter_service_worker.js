'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f13c37ee71eb791dfe4f3afbc50cda33",
"favicon.ico": "c77d2173142c6236c4630c76c58b0e75",
"index.html": "f29c1dd1f62c80f5bd4b392d50241acb",
"/": "f29c1dd1f62c80f5bd4b392d50241acb",
"main.dart.js": "6bc587537053b5c3992258e62de929b7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/goodimg.png": "814f80f9dc93a32d89922f188938c4b9",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a7d265b4da8cce206fbaf7c976e9d5f1",
".git/config": "94d80eebf258adc2eb0ba55f7f6640e9",
".git/objects/95/4815d83a9a394187822f30feedd618eb4b9512": "871339732206b77e1f004ae0f9a22b80",
".git/objects/3e/debeb3700dc5cf6ccbbee90d995985b8fa6699": "aeb4c34afc73353628e34fd538109615",
".git/objects/68/222bce7cb3ecb17dd3b3ad04958ff8a935823d": "1f8ef60656b0c917effbce7a9dc16991",
".git/objects/57/e273c61ca43d9eddcde91b97206bd528fe151b": "5cb6b8bb2a6dcd9858154b00e9007aca",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/6a/84efc143c4a6cda871b1d13643bf8b90d5ea25": "223ab3c1af91d85c52b2ff35a3353976",
".git/objects/32/c26b78d25f73b60cc71dc5ae890ba7317b660e": "8803fcd9425f3efbf41c592a699674c1",
".git/objects/32/cf98f7c9bbf59fab9803bba40f6dd592c45253": "a7042b302825784c77a61d8f7d1d0699",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/b7288c4eb97098ced9cdc33caf4363ca92a2c7": "fa496b60510d4edd46477c38760960e2",
".git/objects/33/ce96e9b6769c46c6cdc0d3bcda79d15c28382d": "631cfb792ef8d49957a94b1d970780b2",
".git/objects/05/97567d8c1af1944df7476027d74906d051d3d5": "8ec8d02f31da6298ba770e57dc04b5b1",
".git/objects/9c/d73eeba53f5aa52959a723b53998c7d250812a": "99374a117a4df224dc29c4f1aa18e4e9",
".git/objects/02/d2f69ddd98ca72951f87ef5ac06c20a6e06f6a": "56d8af9745cc169d1ab13da1c01c885b",
".git/objects/a4/5c374271f21003aa623574192a9ec3829bfebc": "663646ce37300aaad40fdbcbedf92c54",
".git/objects/a4/5cf5895c479e4b87a96cdecd2c771fda893d46": "a3df64820f0ef7f388532d5eb38c1074",
".git/objects/a3/583cbf082175acb2233013f153bdb07613dbf6": "863e91dfce7190210f9079fb9474d4a5",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ac/a8093ef7d147ef321e692d30c4de84f90be2cb": "a780bb30785a54e30bb7c03254f22d2a",
".git/objects/ad/0d0ae1304a325e0aaa95012087d645c492e6c4": "770c81137ebea11e176f75048b855b07",
".git/objects/bb/1024e377b2971854cf0319dcd702d8c8811bc7": "adce23420c903d5b964b0f5b9b2f6715",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/f39c5f4d2b9c0d031c5c1d8cf1b8638ba0b51d": "13c0d7884ce8eb68fafb5888b25de70b",
".git/objects/d0/567c2052bd40b906af8c1465bb89e404e99cc4": "4f0063b5d211e14fd23fd2f9c0780cef",
".git/objects/be/329dcec81e73ab572edac021037dccb4e3d8d2": "49aea933a41d4c74fd8637078a284ff6",
".git/objects/bd/099e50c6a5e8dcfb621725fe05aef60cd03def": "e95f005ffd39eb1dc1378df032ca7b92",
".git/objects/d1/b9a3248e7164ed1d435741e77a643fed954269": "2ab15e00bae7e26b2e00d673d1b6fde2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9711b49ef5d405e7d51beeb4970072f4dcc26a": "29bd2b6f8b95230702c8097bb73f7e6b",
".git/objects/d6/529d7610a4bb50d8f4c5c209706b0a219db3ed": "fd733550b766fdc0eb51e1e065dc3018",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/e2/a3d2e513045f30714a9f21a0fd30dded0edcc9": "9e7f9a52bf778e965452015e029bcfac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/63132ed637bc1e3f72ba4c3b73d0f569d2b47b": "53a017e086ca0e521bf9ad33dab802e9",
".git/objects/c7/38eb920a7521cec40037ff36dbfef3590d7deb": "0230fb74d8b3ba37482e8ec022340e3a",
".git/objects/c0/68ccf0e62131e969c332747d4e8f6edd18d22c": "669e5464a155fcd4043c86051578917f",
".git/objects/f5/1ffed599d63bf45c1f05d0821d0d24a3438399": "c4c80c0e140fcdb26f4038bf727e2cd1",
".git/objects/e3/7c6aa9659b2682efedb255854c77675cc66cae": "c340c7c9c526db598bcc0aac09eb64a4",
".git/objects/e3/0d40a17680c95b7d46d343c391c17647b7fa10": "be9c3ac13a730d828484eb236931fa60",
".git/objects/c8/57492295eb9c6e43d53f890db837c4160f3a3d": "7a5e2dfe6420dffd64c72599be5399a0",
".git/objects/fb/e091bd7ead751d28ca11c88915535997184a2e": "6a3e5b42a3613af6fc7f87dc1937b8b0",
".git/objects/ec/7c0bc6379ae8c3030fbca440116c6d8deed630": "55e0d1db32ce0af93522ceb872e1c10f",
".git/objects/20/939a9152a87405653c55007470d2bd16d58e57": "4d8c863f318e349add0e1e34a698f2fb",
".git/objects/4b/a1191104ed4940f67640eb6a86e7ec5b46e9fd": "a9b8f82adbc7000566867325755b39e0",
".git/objects/7c/25e161712a1c48b1f3abdb6860c15a61583c6c": "895d0ba11bb164e927a03881e5cda025",
".git/objects/89/9a68e6e9b8f1544a548308de548039e3618a4a": "959f84161760ee725918551595c17b5b",
".git/objects/8a/b78ac997bb388d1d9ee492efb2791616b24427": "4921b0404702fc0921a98b0b0155c955",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/a98b41805b6335b804f67ddb43e10a1b55c25e": "92c2f4c53ba9c774508372c0c8648b86",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/618d3bca5460fef5e1fef2da8857924e21a5a1": "75bc7657b26d7e482f754e48de4d8be2",
".git/objects/86/183ac678b7e6e11ef248674808c23dbf0e9184": "2b0715431e7fc5110d7b737df2035321",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/ba8e346f85ea8c8bab844852152eb87cb3b1b8": "83fbd1ecc20112e088ec6790d8378f57",
".git/objects/07/ec84b8f626c463dfe6c755eeaeacd1b461db74": "8985d8f78362cd00283bf8e1fe4eb814",
".git/objects/38/9482bb5a5e31de667f206ea8906ea519798da8": "22aa34c5a72f4dab924f4f8777df2b7a",
".git/objects/6e/9596222a79e2a8770a2ed2a7e97613bab23366": "fd611e2899a2b35dce66d22876937e56",
".git/objects/9a/b95acb1a44c1e2ad3e8d163dd4a52e7155a6dd": "9c0cd96d452a0c0e0766ae3216ef8f9f",
".git/objects/9a/ffa44039571e9fa47d297210da5d96f7ff08ac": "a61a078c2832b99c9c75c99971287149",
".git/objects/36/4739ae7e379e7956076cd9e725d74a45fd1dc5": "0562f42a8604d42cb2bba859534affef",
".git/objects/65/dbfa467f13ad20ea95388947082b9386f3f814": "8cf25c189b7e36bbfd3f959ab42a4f64",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/ca3fcd8b746222607ee12203f0ea7892f82c8f": "b51da27257522a392fb908a1f1f24b98",
".git/objects/53/12a2a67b8d8b0479a7a1d0e8fd429a27d33fe7": "9c86437aba3f7f2bc783b9d821a2cea9",
".git/objects/30/e566733f2a6a8df28da71829e45d8373a38003": "3b90f56f0375aefa0c4505a7aab5f0e1",
".git/objects/5e/3f29da00871bf6322fc9672f8d18114fc7cb6b": "dd3ef723498ddfb30ef7ccf6adebebf8",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6d/3d7f6404893e73f41091bc037d89e662045ad1": "ae605fe5eb77c5cbf1461416fcf5e916",
".git/objects/6c/8003e1dfd1bd4d4e25dadbfdf35120a220b410": "0f182d2808c3d2f9a4d3fe305de55000",
".git/objects/52/5c157eb583711ba4e3c995c47aa4fe1539fd9e": "18a0f7f254798108bc811206568314fd",
".git/objects/97/2ac8e7616834f0e484d78b77746bb9efaa6ae3": "ae58f295d514811bf68958935918618c",
".git/objects/0f/45147d65dbc57fc9d3ca0e20a23b0ca81cabe8": "6467273bbb8ddbf6fc8756fe2656b57a",
".git/objects/0a/d3c7a5db7f53dce04f7d0f80970dc0e4d34adf": "946ddab8723686f2a957bc853340b504",
".git/objects/90/ee77d34bd71046523dfbe71edbc0c3ca775cc0": "45080a5d4e38f4b288fa913a49514e0a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b1/6d889f68a537ab0b673764f5fa5038023dd70f": "a55bdb93fc68469cffbb8d107d87a1b4",
".git/objects/dd/4ce360fffb47380c7e0cd0633e8ca8cf47d0be": "c18b665003565c2719d78270821de1ff",
".git/objects/aa/9ecbc199e193c40f61306f8ee63a03505b1b26": "45714179ed2911c7a9dc7e69980688fc",
".git/objects/b7/62eac99aeb15dc90033c154b1313a610c025c1": "7874ba3cc05d486640742ef6961d4456",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/1f2057d617e4dd6b0cffdca39b695c03742295": "7db031901ad90367b657a8867fd98705",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/74adf414800ac02991af23b3ab18823a5dbf6f": "f50cc14fc1f1a698724a1293e30ec6bb",
".git/objects/c4/748124bd3cdb8d110b7a53bda23de7f63c5b6a": "499d229fccaab8f9af3667e9916d5aa0",
".git/objects/ea/0396ff41c9864844fd905c92fa250c00b3bb15": "2cf990b8f5225b242da38018711f5515",
".git/objects/cc/cabe4a96e672e8e38ffe59cbb73fa3f915d008": "dc75b983b3ef1bac723679bdbbc8c493",
".git/objects/e6/76749620897bbc64ad259f50d39b29b78f3fe8": "c9855799ba42f42f028332240304e143",
".git/objects/f0/b0ffa941fdc663fd75c548ca7e87fd3b9e004b": "7077f47c32a054f0764a1c3f3577edb7",
".git/objects/f7/559b23adc54daaba88f1b58470275de309e538": "6bc6c905dac66704bf4308e69debd8f0",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/2c/0eaab5af9b152ad889a698944c39ca5d31babf": "de1fcd34d6d00212d80064cb56c44187",
".git/objects/2c/5d1a3cec77c13d757c601bb778501bb2b1b5cb": "d067bb64f41bba4ca9f4bea752b2098d",
".git/objects/83/bc1239b651660b4ae64a488105be35f9efdad3": "36af541d7cdcff8e65f766b3e9abdb2c",
".git/objects/83/dd79d1486d65e9f38d2ed5f391b53c8ff8f958": "d58594f7dcc08e58c78060c7b0c6a5fd",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/a227ea508c679475b8880840a50095669677d0": "5b1363f583a2da972129dc5f986c3e81",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/24/66c71801e71b7ade448eb692daf3ed019e87e0": "0f0490440ab505d15c37251b264b0aca",
".git/objects/4f/0ea643248d3ed1591e6db105ad9790cc8d35ef": "21ec8a5a4a6709d3025e081e98dca629",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/2ea9312469f75b75616ea09f044ade45bdccdb": "56170765702a363fd618a2e4190fead6",
".git/objects/49/456296fcdf86e530e80cb1d0d8dff7da8ce357": "21364d374da1a27140a54cb8677a60e6",
".git/objects/40/8c2ab44d8afdfc32ec5fffb7044c8d3f508d02": "4a977e6847db662e82da944f04e73120",
".git/objects/2b/cd886403ee1e5b639eb7a9e20bb2552a8a1fe6": "dcf2a7b0462cde0b4eb96b741b40f034",
".git/objects/78/6aea8be16b6908d620a1e626b583a3de4eea64": "e01b196e3036592f6b1c4ee6ff4c593d",
".git/objects/8b/79b4fb3060d9e048577cc36a47749c3ec89fc1": "87d388f0857b3575b798ab579a4b6ecc",
".git/objects/8b/46a82dfc06c3cbe25962cea0f2eb6f7f571f5c": "19250542b5de70af8ec7b8cdf838638a",
".git/objects/7a/fc4d36dc51cf316d547b5bf0d1c2dab79cbe14": "7084425c308cd9b9beb9422f27a09c1a",
".git/objects/14/299edb370d5f7dd808a4cfcbe333a294686d1b": "a3057bbf6a26300aa34b597f2962e76a",
".git/objects/14/55f5fd0bd81c35f9b43a4f9913682ddff93033": "b2324b56a58ab673d66fe47f9ba4a328",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/61b9329c46071936a9c6d586621a2ae6212658": "d4411d75a54c2cfd7037780eacb1f296",
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
".git/COMMIT_EDITMSG": "b76c371673a81fbed5608acff47ca396",
"assets/AssetManifest.json": "61c54b6588180080b9ef430585c6017d",
"assets/NOTICES": "6829e8ef4769eb531470a6dba705e9fb",
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
