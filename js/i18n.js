(function(){
  'use strict';

  var EN = {
    'nav.features':'Features','nav.gallery':'Gallery','nav.how':'How it works','nav.privacy':'Privacy','nav.changelog':'Changelog','nav.install':'Install free',
    'gallery.eyebrow':'v2.4.8 feature gallery','gallery.h2':'Every capability, made visible','gallery.lead':'Here is the current version laid out with interface illustrations. The illustrations explain interactions; actual product screenshots follow in the next gallery.',
    'g0.h':'Three relationship tabs','g0.d':'Mutuals, followers and non-followers in separate tabs. No more cross-checking two lists.','g0.a':'Mutuals 128','g0.b':'Followers 2.4k','g0.c':'Not back 36',
    'g1.h':'Real daily deltas','g1.d':'Based on the midnight snapshot: red up, green down, grey flat.',
    'g2.h':'Hover profile card','g2.d':'Pause on an avatar for its profile card, and follow or unfollow right there.','g2.a':'Mutual · 大蝦不是大俠','g2.b':'Follow',
    'g3.h':'Quiet timeline filtering','g3.d':'Keywords fold away and promoted posts hide quietly, leaving what you care about.','g3.a':'Content you follow','g3.b':'Keyword folded · 3','g3.c':'Promoted hidden · 2',
    'g4.h':'Region and AI labels','g4.d':'Region comes from public profile data; the AI score is a local heuristic, off by default.','g4.a':'Region: Japan','g4.b':'AI likelihood 62 · reference only','g4.c':'Mutual',
    'g5.h':'Trend dice','g5.d':'Global and local trending lists, sorted; roll the dice for one topic worth writing.','g5.a':'1 Trending topic A','g5.b':'2 Trending topic B','g5.c':'DICE',
    'g6.h':'Typed-character counter','g6.d':'Only the characters you actually type, split into daily and lifetime totals.','g6.a':'Typed today · pasted text excluded',
    'g7.h':'Poster styles','g7.d':'Clean screenshots plus posters in multiple palettes, with optional QR code and watermark.','g7.a':'Minimal White','g7.b':'Midnight Black','g7.c':'Paper Beige',
    'g8.h':'One-click stat card','g8.d':'Turn today’s numbers into a card you can save, copy, or bring into the composer.','g8.a':'Followers','g8.b':'Mutuals','g8.c':'Typed',
    'g9.h':'Interaction galaxy','g9.d':'Real avatars in a radial map; solid and dashed lines show who started the interaction.',
    'g10.h':'Draft check','g10.d':'Local rules flag machine-like writing and common risks. Reference only, not an X verdict.','g10.a':'AI-style score 32','g10.b':'No obvious risk','g10.c':'Local rules',
    'g11.h':'Shadowban check','g11.d2':'Your own account only, entirely on your device, reference only.','g11.a':'Suggestions ✓','g11.b':'Search ✓','g11.c':'Ghost ban ✓','g11.d':'Reply reach ✓',
    'g12.h':'Notification center','g12.d':'Update notes and one-time tips collect in the bell so you can revisit them.','g12.a':'v2.4.8 update notes',
    'g13.h':'Optional cloud backup','g13.d':'Off by default. Enabling it needs your own Supabase setup and a saved recovery code.','g13.a':'Recovery code XBAR-••••','g13.b':'AES-GCM end-to-end encryption',
    'g14.h':'Four interface languages','g14.d':'Follows your browser by default, switchable in the panel anytime.',
    'g15.h':'Collapsible abnormal accounts','g15.d':'Collapsed by default, showing only the count; click the title to reveal details and the list. Recovered accounts are removed automatically.','g15.a':'Abnormal · 3','g15.b':'Click title to expand','g15.c':'Auto-removed on recovery',
    'shots.eyebrow':'Real screenshots','shots.h2':'Not illustrations — this is Xbar itself','shots.lead':'Click any image to view it larger. Both Chinese and English interface screenshots come from the product.',
    'shot.zh1':'Panel overview · Chinese','shot.zh2':'Followers & mutuals · Chinese','shot.en1':'Panel overview · English','shot.en2':'Followers & mutuals · English',
    'log.live':'Still actively iterated · future updates will be synced here',
    'hero.kicker':'CHROME EXTENSION · v2.4.8 · FREE',
    'hero.h1a':'Give X back to','hero.h1b':'your writing',
    'hero.lead':'See who follows you back, quiet down your timeline, find something worth writing, and make shareable images in one click. Xbar organizes what you can already see into what you can actually use.',
    'hero.install':'Install Xbar for Chrome','hero.explore':'See what it can do',
    'hero.t1':'Free forever · no ads, no upsells','hero.t2':'Your data stays local by default','hero.t3':'Chinese / English / Japanese / Korean',
    'hero.badge':'Now on the Chrome Web Store','hero.cap':'Actual screenshot of the Xbar panel',
    'strip.s1':'Front-end only extension','strip.s2':'interface languages','strip.s3':'Free forever','strip.s4':'Local by default',
    'pain.eyebrow':'The little daily irritations','pain.h2':'You know how to use X. Your tools just waste your time.',
    'pain.lead':'Scrolling through mutuals, filtering out noise, and wondering what your posts did. Xbar starts right here.',
    'pain.p1h':'Who is a mutual, really?','pain.p1d':'Hundreds of accounts in two lists, cross-checked by eye. It is slow and tedious.',
    'pain.p2h':'A noisy timeline','pain.p2d':'Recommendations, promoted posts and topics you do not care about bury the ones you do.',
    'pain.p3h':'And then the post is gone','pain.p3d':'No idea how many words you wrote, how many followers you gained, or what to share.',
    'how.eyebrow':'Three steps','how.h2':'Install it and start. No manual needed.',
    'how.lead':'No account to create, nothing to connect. Open X and the icon is right there.',
    'how.s1h':'Install the extension','how.s1d':'Add Xbar from the Chrome Web Store for free. It takes seconds.',
    'how.s2h':'Open x.com','how.s2d':'Open or refresh x.com and sign in. Your account is read once on first use.',
    'how.s3h':'Click the icon','how.s3d':'Click the Xbar icon in your toolbar and the panel opens right there.',
    'how.note':'No account takeover, no posting on your behalf. The logo at the top of the panel toggles Xbar on and off.',
    'features.eyebrow':'What is inside','features.h2':'One panel, five sets of tools',
    'features.lead':'Grouped by what you actually want to do: see relationships, quiet the timeline, find a topic, make an image, and use it with confidence.',
    'tab.0':'Followers','tab.1':'Timeline','tab.2':'Create & share','tab.3':'Data & fun','tab.4':'Privacy',
    'f0.h':'See your relationships at a glance','f0.lead':'Mutuals, followers and non-followers are kept apart. Sync runs in the background, so the panel is ready when you open it.',
    'f0.1':'Separate tabs for mutuals, followers and people who do not follow you back',
    'f0.2':'Daily follower deltas from a real snapshot taken at local midnight: red up, green down, grey flat',
    'f0.3':'New followers, recent unfollowers and abnormal accounts, filed by status',
    'f0.4':'Hover an avatar for a profile card; follow or unfollow from there, with automatic edge avoidance',
    'f0.5':'Search, filter by verified status, export CSV and act in batches',
    'f0.6':'Verified badge in three states: blue when confirmed, grey when clearly not, hidden when unknown',
    'f1.h':'Quiet down your timeline','f1.lead':'Keep what you care about. Filter rules run in your own browser and never change X data.',
    'f1.1':'Keyword muting with wildcard support; unwanted topics fold away',
    'f1.2':'Posts officially marked Promoted are quietly hidden, without touching regular posts',
    'f1.3':'Switch to Following automatically on X, skipping the For You feed',
    'f1.4':'Author region labels, sourced from X public About-this-account data',
    'f1.5':'AI-likelihood score from 1 to 100: a local heuristic, reference only, off by default',
    'f2.h':'From a topic to an image, in one flow','f2.lead':'A prompt when you are stuck, your numbers when you finish, and a clean image when you want to share.',
    'f2.1':'Trend inspiration from global and local lists, with Chinese and English hints and a dice roll',
    'f2.2':'Typed-character stats that exclude pasted, dragged and dictated text; daily and lifetime totals',
    'f2.3':'Clean screenshots without UI chrome, optional post QR code, and bilingual layout for translated posts',
    'f2.4':'Posters in Minimal White, Midnight Black, Paper Beige and Original, with optional QR and watermark',
    'f2.5':'Daily and lifetime stat cards you can save, copy, or bring straight into the composer',
    'f3.h':'A bit of fun alongside the data','f3.lead':'Interactions become a galaxy, your day becomes a title. The fine print stays visible.',
    'f3.1':'Interaction galaxy with real avatars: solid outward = you started it, orange dashed inward = they did',
    'f3.2':'A daily title that resets at midnight and judges only that day',
    'f3.3':'Draft check: AI-style score and common risk flags, local rules only, not an X verdict',
    'f3.4':'Shadowban check on your own account only, entirely on your device, reference only',
    'f3.5':'Account valuation and hidden perks: for fun, not a trade offer or price guarantee',
    'f3.6':'Notification center to revisit updates and one-time tips',
    'f4.h':'Fast, and it stays in its lane','f4.lead':'The panel shows cached data first, then quietly fills in real numbers. Request gating keeps things gentle.',
    'f4.1':'Cache-first display with background refresh; parallel reads plus request gating',
    'f4.2':'All data is stored in your browser by default (chrome.storage)',
    'f4.3':'No passwords, cookie contents or direct messages. No login on your behalf, no posting for you',
    'f4.4':'Cloud backup is off by default. It only runs if you enable it and keep your restore code; you can stop and delete anytime',
    'f4.5':'Toggle Xbar from the panel logo. Simplified Chinese, English, Japanese and Korean supported',
    'mock.following':'Following','mock.clean':'Cleaned','mock.region':'Region: Japan','mock.ai':'AI likelihood 62 · reference only',
    'mock.folded':'3 posts with the keyword folded · 2 Promoted hidden',
    'cap.real':'Actual product screenshot','cap.demo':'Illustration, not a real screenshot',
    'gal.a':'You started','gal.b':'They started','gal.c':'Verified',
    'shield.1':'Local storage','shield.2':'No posting for you','shield.3':'Optional cloud',
    'show.eyebrow':'Product tour','show.h2':'Open the panel and everything is in front of you',
    'priv.eyebrow':'Privacy & permissions','priv.h2':'Local first, boundaries spelled out',
    'priv.lead':'No account system, no ads, no analytics beacons, no data selling. Here is what Xbar actually touches.',
    'priv.c1h':'Local by default','priv.c1d':'Settings, follower snapshots and typing stats stay in chrome.storage. Cloud backup requires your own Supabase setup and restore code.',
    'priv.c2h':'It never acts as you','priv.c2d':'No passwords, cookie contents or DMs. It does not sign in or post for you. Follow and unfollow only happen when you click.',
    'priv.c3h':'Permissions, item by item','priv.c3d':'Only the permissions needed for the features above. No remote code and no remotely loaded scripts.',
    'perm.h':'Where each permission is used',
    'perm.1':'Stores settings, snapshots and stats locally. Nothing is uploaded.',
    'perm.2':'Refreshes follower counts quietly in the background every 20 minutes.',
    'perm.3':'Finds an open X tab to sync data from.',
    'perm.4':'Saves a generated PNG only when you click Save.',
    'perm.5':'Uses your existing browser sign-in for requests. Cookie contents are never read or stored.',
    'perm.6':'Offers an enable / disable switch in the right-click menu.',
    'perm.7':'Injects and updates panel elements on the X page you have open.',
    'perm.8':'Reads public profile and list data that is visible to you. Direct messages are never read.',
    'priv.more':'Read the full privacy policy','priv.delta':'Delta basis: a real snapshot taken at local midnight. On other profiles, the baseline is the value when you first open that profile that day, not the full day.',
    'log.eyebrow':'Changelog','log.h2':'What changed lately','log.lead':'Only versions with clear records are listed. Current version: v2.4.8.',
    'log.8a':'The "abnormal accounts" card is now collapsible: collapsed by default showing only the count, click the title to reveal details and the list.',
    'log.8b':'Recovered accounts are removed from the abnormal list automatically — triggered by list scans, profile/API lookups, and successful follow or unfollow actions.',
    'log.7a':'Fixed the daily delta on your own profile flickering between a number and "—"; the avatar progress bar now fills in real follower/following data promptly.',
    'log.7b':'The update check shows a neutral "local build" state for locally loaded copies, linking straight to the store; the shadowban check entry gained a text label.',
    'log.6a':'Notifications now live only in the top bell: they expand on click and no longer pop up or take panel space.',
    'log.6b':'The follower/following progress bar gradient was retuned, with a pale spectrum on the unfinished part.',
    'log.5a':'Sync states and results moved into the bell, leaving the panel body clean. Every notice has a date and unread ones show NEW.',
    'log.5b':'Fresh installs now auto-inject into already open x.com tabs and start syncing.',
    'log.4a':'First-run feature tips moved into the bell so you can revisit them anytime.',
    'log.4b':'The progress bar now uses a clearer gradient with a distinct color range per level.',
    'log.3a':'The notification panel became a top overlay, so opening it no longer squeezes the timeline; the bell shows unread counts.',
    'log.2a':'Added a notification center for update notes and one-time tips.',
    'log.2b':'The shadowban check no longer locks for 90 seconds without login; on a 429 it stops early and cools down.',
    'faq.eyebrow':'FAQ','faq.h2':'You might also wonder',
    'faq.q1':'Does Xbar cost anything?','faq.a1':'No. It is completely free, with no in-app purchases, ads or paywall.',
    'faq.q2':'Will it post or follow people for me?','faq.a2':'No. Xbar does not take over your account or post for you. Following and unfollowing only happen when you click in the panel.',
    'faq.q3':'Where is my data stored?','faq.a3':'Locally in your browser by default. Cloud backup is off until you enable it and keep a restore code; you can turn it off and delete it anytime.',
    'faq.q4':'Why are some labels missing?','faq.a4':'Verified badges use three states: blue when confirmed, grey when clearly not, hidden when there is not enough information. The AI score is a local heuristic, reference only, and off by default.',
    'faq.q5':'Which browsers and languages are supported?','faq.a5':'Chrome and other Chromium-based browsers, Manifest V3. The interface supports Simplified Chinese, English, Japanese and Korean, following your browser language by default.',
    'faq.q6':'How long does the first load take?','faq.a6':'A few seconds to read your account. The panel shows cached data first and fills in real numbers quietly. If nothing happens, open x.com first and try again.',
    'end.eyebrow':'Ready when you are','end.h2':'Install Xbar, and the next time you open X will feel different',
    'end.lead':'Free to install, no sign-up. Open x.com and click the toolbar icon to begin.',
    'end.install':'Get Xbar from the Chrome Web Store','end.qr':'Scan to open the store page',
    'foot.tag':'Your writing companion on X','foot.store':'Chrome Web Store','foot.privacy':'Privacy policy',
    'foot.author':'By 大蝦不是大俠','foot.disclaimer':'Xbar is not affiliated with X Corp. All trademarks belong to their respective owners.'
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  nodes.forEach(function(el){ el.dataset.zh = el.textContent; });
  var imgNodes = Array.prototype.slice.call(document.querySelectorAll('img[data-en-src]'));
  imgNodes.forEach(function(img){ img.dataset.zhSrc = img.getAttribute('src'); });

  var current = 'zh';
  var btn = document.getElementById('langToggle');
  var titleZh = document.title;
  var descMeta = document.querySelector('meta[name="description"]');
  var ogTitle = document.querySelector('meta[property="og:title"]');
  var ogDesc = document.querySelector('meta[property="og:description"]');
  var descZh = descMeta ? descMeta.content : '';
  var ogTitleZh = ogTitle ? ogTitle.content : '';
  var ogDescZh = ogDesc ? ogDesc.content : '';

  function setLang(lang){
    current = lang === 'en' ? 'en' : 'zh';
    nodes.forEach(function(el){
      var key = el.dataset.i18n;
      el.textContent = (current === 'en' && Object.prototype.hasOwnProperty.call(EN, key)) ? EN[key] : el.dataset.zh;
    });
    document.documentElement.lang = current === 'en' ? 'en' : 'zh-CN';
    imgNodes.forEach(function(img){
      img.setAttribute('src', current === 'en' ? img.dataset.enSrc : img.dataset.zhSrc);
    });
    if(btn) btn.textContent = current === 'en' ? '中文' : 'EN';
    document.title = current === 'en' ? 'Xbar — X Writing Assistant · Free Chrome Extension' : titleZh;
    if(descMeta) descMeta.content = current === 'en'
      ? 'Xbar is a writing companion for X: see who follows you back, quiet the timeline, find topics and create shareable images. Free, with data stored locally by default.'
      : descZh;
    if(ogTitle) ogTitle.content = current === 'en' ? 'Xbar — X Writing Assistant · Free Chrome Extension' : ogTitleZh;
    if(ogDesc) ogDesc.content = current === 'en' ? 'See mutuals, quiet your timeline, find topics and make shareable images. Free and local-first.' : ogDescZh;
    try{ localStorage.setItem('xbar-site-lang', current); }catch(e){}
  }

  var saved = 'zh';
  try{ saved = localStorage.getItem('xbar-site-lang') || 'zh'; }catch(e){}
  setLang(saved);
  if(btn) btn.addEventListener('click', function(){ setLang(current === 'zh' ? 'en' : 'zh'); });

  // Feature tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      var i = tab.dataset.tab;
      tabs.forEach(function(t){
        var on = t === tab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      panels.forEach(function(p){
        var on = p.dataset.panel === i;
        p.hidden = !on;
        p.classList.toggle('active', on);
      });
    });
  });

  // Scroll reveal
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function revealInView(){
    reveals.forEach(function(el){
      var r = el.getBoundingClientRect();
      if(r.top < window.innerHeight + 40 && r.bottom > -40) el.classList.add('visible');
    });
  }
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
    reveals.forEach(function(el){ io.observe(el); });
  }else{
    reveals.forEach(function(el){ el.classList.add('visible'); });
  }
  revealInView();
  window.addEventListener('load', revealInView);
  window.addEventListener('hashchange', revealInView);

  // Screenshot lightbox
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var lbClose = document.getElementById('lbClose');
  function openLightbox(btn){
    if(!lb) return;
    var thumbImg = btn.querySelector('img');
    var thumbCap = btn.querySelector('span');
    lbImg.src = btn.dataset.full;
    lbImg.alt = thumbImg ? thumbImg.alt : '';
    lbCap.textContent = thumbCap ? thumbCap.textContent : '';
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    if(lbClose) lbClose.focus();
  }
  function closeLightbox(){
    if(!lb) return;
    lb.hidden = true;
    lbImg.src = '';
    document.body.style.overflow = '';
  }
  Array.prototype.slice.call(document.querySelectorAll('.thumb')).forEach(function(btn){
    btn.addEventListener('click', function(){ openLightbox(btn); });
  });
  if(lbClose) lbClose.addEventListener('click', closeLightbox);
  if(lb) lb.addEventListener('click', function(e){ if(e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && lb && !lb.hidden) closeLightbox(); });

  // Reading progress
  var progress = document.getElementById('progress');
  function updateProgress(){
    if(!progress) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', updateProgress, {passive:true});
  updateProgress();
})();
