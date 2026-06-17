/* ============================================================
   Scam or Real?  —  question data
   ------------------------------------------------------------
   A question can be shown in one of two ways:

   1) As a picture (a screenshot you've made):
        { image:"images/message_A.png", channel:"Text message",
          answer:"scam", summary:"...", tells:[ ... ] }

   2) As text the quiz draws for you (easy to edit, no image needed):
        { render:{ type:"sms"|"email"|"popup", ... },
          answer:"scam", summary:"...", tells:[ ... ] }

   "answer" is "scam" or "real".  "summary" is one short line.
   "tells" are the warning-sign / what-to-do points shown afterwards.
   ============================================================ */

/* Show a shorter random round?  0 = show every message.
   Set this to e.g. 10 to show 10 random messages each play. */
const QUESTIONS_PER_ROUND = 0;

const QUESTIONS = [
  /* ---------- The 9 screenshots ---------- */
  {
    image:"images/message_A.png", channel:"Text message", answer:"scam",
    summary:"A parcel delivery scam.",
    tells:[
      "Real Australia Post never charges a \"redelivery fee\" by text message.",
      "The link is \"aus-post-redelivery.com\", not the official auspost.com.au. It is a fake site set up to capture your card.",
      "\"Action required within 48 hours\" is pressure, there to make you pay before you stop and think.",
      "What to do: don't tap the link. Track any parcel in the official AusPost app or by typing auspost.com.au yourself."
    ]
  },
  {
    image:"images/message_B.png", channel:"Text message", answer:"real",
    summary:"A genuine delivery notification.",
    tells:[
      "It simply tells you a parcel was delivered. It doesn't ask for money or your details.",
      "There's no link to tap. It points you to the official AusPost app or auspost.com.au, which you open yourself.",
      "No threats, no countdown, no \"act now\".",
      "If you want to check, open the AusPost app or type auspost.com.au into your browser."
    ]
  },
  {
    image:"images/message_C.png", channel:"Text message", answer:"scam",
    summary:"A government refund scam.",
    tells:[
      "Surprise \"refunds\" and \"rebates\" are bait. myGov and the ATO don't text you a link to claim money.",
      "It asks you to \"confirm your bank details\" through a link, which a real agency never does by text.",
      "The link is \"mygov-refund-claim.net\", not the official my.gov.au.",
      "\"Offer expires today\" is false urgency. What to do: ignore it, and log in at my.gov.au yourself if unsure."
    ]
  },
  {
    image:"images/message_D.png", channel:"Text message", answer:"scam",
    summary:"A scam disguised as a bank fraud alert.",
    tells:[
      "It copies the look of a real warning, but genuine banks tell you to phone them. They don't text a link to \"secure your account\".",
      "The link is \"secure-bank-login.co\", a fake login page built to steal your details.",
      "The alarming amount ($1,250) and \"immediately\" are designed to make you panic and click.",
      "What to do: don't tap the link. Call the number on the back of your card. (Compare this with the genuine bank message in this quiz.)"
    ]
  },
  {
    image:"images/message_E.png", channel:"Text message", answer:"real",
    summary:"A genuine bank security alert.",
    tells:[
      "It warns you about a sign-in but tells you to call the number on the back of your card, not a number or link in the message.",
      "There's no link to tap. It points you to the bank's official app, which you open yourself.",
      "It states the bank will never ask for your PIN or password, a hallmark of genuine messages.",
      "This is exactly how a real alert behaves. (Compare it with the fake bank message in this quiz.)"
    ]
  },
  {
    image:"images/message_F.png", channel:"Text message", answer:"scam",
    summary:"A Medicare impersonation scam.",
    tells:[
      "Medicare benefits aren't \"suspended\" by text, and Services Australia never sends a link to \"verify your identity\".",
      "Threats of cancellation plus \"now\" are meant to scare you into acting fast.",
      "The link is \"medicare-verify-au.com\", not an official servicesaustralia.gov.au or my.gov.au address.",
      "What to do: don't tap the link. Check your Medicare details through the myGov app or my.gov.au."
    ]
  },
  {
    image:"images/message_G.png", channel:"Email", answer:"scam",
    summary:"A fake billing email (phishing).",
    tells:[
      "Look closely at the sender: \"netfllix-billing.com\" is misspelled (double \"l\") and isn't netflix.com.",
      "\"Dear Customer\" and spelling mistakes (\"proccess\") are common in scams. Real companies use your name and proofread.",
      "\"Within 24 hrs or your account will be terminated\" is a classic pressure tactic.",
      "What to do: don't click \"Update Now\". Open the Netflix app or type netflix.com yourself to check your account."
    ]
  },
  {
    image:"images/message_H.png", channel:"Email", answer:"real",
    summary:"A genuine bill notification.",
    tells:[
      "The sender is the real domain, energyaustralia.com.au, and it greets you by name (Margaret).",
      "There are no threats. It even tells you no payment is due until 5 July, giving you plenty of time.",
      "It asks you to log in to your account rather than demanding card details in the email.",
      "A safe habit even with real emails: log in by typing the company's website yourself instead of clicking the button."
    ]
  },
  {
    image:"images/message_I.png", channel:"Email", answer:"scam",
    summary:"A prize / advance-fee scam.",
    tells:[
      "You can't win a lottery you never entered. The \"win\" is the hook.",
      "It asks for a $300 \"processing fee\" paid by gift card. A gift card request is almost always a scam.",
      "It pressures you to \"reply with your details urgently\" to grab your personal information.",
      "What to do: delete it. No genuine prize ever requires you to pay a fee to receive it."
    ]
  },

  /* ---------- New: scams ---------- */
  {
    render:{
      type:"sms", sender:"David", initials:"D", color:"#B07AA1", time:"9:12 PM",
      body:"My darling, I can finally come and meet you, but customs is holding my luggage and asking for a $2,400 release payment. My accounts are frozen until I get home. Could you send it as gift cards today? I'll pay you back the moment we're together. You're the only one I can trust. \u2764\uFE0F"
    },
    answer:"scam",
    summary:"A romance scam.",
    tells:[
      "You've never met in person, yet there's talk of deep love and complete trust.",
      "A sudden emergency needs money fast, and somehow it's never quite the right time to actually meet.",
      "It asks for gift cards. No genuine person or company is ever paid in gift cards.",
      "What to do: never send money to someone you haven't met face to face. Talk it over with a friend or family member first."
    ]
  },
  {
    render:{
      type:"sms", sender:"Unknown number", initials:"?", color:"#AEB7C6", time:"4:02 PM",
      body:"Hi Mum, it's me. I dropped my phone down the loo and I'm on a temporary number, save it. My banking app won't work on this phone, so could you please pay a $1,540 bill for me today? I'll transfer it straight back on Friday. Can't really talk right now x"
    },
    answer:"scam",
    summary:"The \"Hi Mum\" family impersonation scam.",
    tells:[
      "It's from a new, unknown number and claims to be your child who has lost their phone.",
      "There's urgent money involved, with a promise to pay you back soon so you don't question it.",
      "\"Can't talk right now\" is deliberate. It stops you checking that it's really them.",
      "What to do: call your son or daughter on their usual number, or ask something only the real person would know."
    ]
  },
  {
    render:{
      type:"sms", sender:"Unknown number", initials:"?", color:"#AEB7C6", time:"11:48 AM",
      body:"Grandma, it's me, please don't tell Mum and Dad. I've been in a car accident and I'm in trouble with the police. I need $3,000 for a lawyer today. A Mr Daniels will phone you shortly to arrange payment. Please help me, I'm scared."
    },
    answer:"scam",
    summary:"A \"grandchild in trouble\" scam.",
    tells:[
      "It begs you to keep it secret (\"don't tell Mum and Dad\") so nobody can talk you out of it.",
      "A stranger, a \"lawyer\" or \"officer\", will call to collect the money. Real authorities never work this way.",
      "It uses fear and your love for a grandchild to rush you into paying.",
      "What to do: don't reply. Phone your grandchild or their parents directly on a number you already have."
    ]
  },
  {
    render:{
      type:"sms", sender:"Linkt", initials:"L", color:"#6E3FA3", time:"8:30 AM",
      body:"Linkt: You have an unpaid toll of $4.45. Pay within 24 hours to avoid a $20 administration fee: https://linkt-au.pay-toll.com"
    },
    answer:"scam",
    summary:"A toll road scam.",
    tells:[
      "A tiny toll plus a threatened \"fee\" is meant to make paying feel quick and harmless.",
      "The link is \"linkt-au.pay-toll.com\", not the real linkt.com.au.",
      "Genuine toll accounts are managed in the Linkt app or website, not paid through a texted link.",
      "What to do: don't tap the link. Log in at linkt.com.au or in the Linkt app to check."
    ]
  },
  {
    render:{
      type:"email", subject:"Your subscription has been renewed",
      sender:"Norton LifeLock", email:"billing@norton-secure-billing.com",
      initials:"N", color:"#B8860B", time:"7:15 AM",
      body:"Dear Customer,\n\nYour Norton LifeLock subscription has automatically renewed for AUD $429.99. If you did not authorise this charge, call our billing team on 1800 000 000 within 24 hours to cancel and receive a full refund."
    },
    answer:"scam",
    summary:"A subscription \"refund\" scam.",
    tells:[
      "It charges you for something you never bought, to make you call in a panic.",
      "Once you call, they offer to \"help\" with a refund by taking control of your computer or moving your money. Never allow this.",
      "\"Dear Customer\" and a billing address like \"norton-secure-billing.com\" aren't how the real company contacts you.",
      "What to do: don't call the number. Check your real bank statements, and ignore the email."
    ]
  },
  {
    render:{
      type:"popup", title:"Security Alert",
      body:"\u26A0 MICROSOFT SECURITY WARNING\n\nYour computer is infected with 5 viruses. Your photos and banking details are at risk. Call Microsoft Support now on 1800 921 447. Do NOT turn off your computer."
    },
    answer:"scam",
    summary:"A tech support scam pop-up.",
    tells:[
      "Microsoft, Apple and your bank never contact you out of the blue to say your computer has a virus.",
      "It uses fear (\"your banking details are at risk\") and pressure (\"call now\", \"don't turn off\").",
      "If you call, they'll ask to take control of your computer or for payment. Never allow this.",
      "What to do: don't call the number. Close the pop-up or shut the browser, and restart the computer if needed."
    ]
  },

  /* ---------- New: genuine messages ---------- */
  {
    render:{
      type:"sms", sender:"Mum", initials:"M", color:"#2E9E8F", time:"5:20 PM",
      body:"Hi love, are you still right to come for dinner on Sunday at 6? Let me know if you'd like me to make the trifle. Drive safe xx"
    },
    answer:"real",
    summary:"A genuine message from family.",
    tells:[
      "It comes from a contact already saved in your phone, not a new unknown number.",
      "It's ordinary, everyday conversation with no money, no urgency and no pressure.",
      "Real family don't suddenly demand payments by text.",
      "Good habit: if a \"family\" message ever asks for money or comes from a new number, ring the person to check first."
    ]
  },
  {
    render:{
      type:"sms", sender:"CommBank", initials:"CB", color:"#2E9E8F", time:"3:01 PM",
      body:"472913 is your NetBank verification code. Do not share it with anyone. CommBank will never call and ask you to read it out."
    },
    answer:"real",
    summary:"A genuine one-time code, with one catch.",
    tells:[
      "This is a real code, sent because someone is logging in to the account.",
      "If that someone is you, it's fine. Type it in yourself.",
      "Never read a code out to anyone who phones you. Real staff never ask for it; scammers do.",
      "If you did NOT just try to log in, someone may have your password. Call your bank straight away."
    ]
  },
  {
    render:{
      type:"sms", sender:"Hillside Medical", initials:"HM", color:"#2F5D62", time:"9:00 AM",
      body:"Hillside Medical Centre: a reminder of your appointment with Dr Nguyen on Tue 24 June at 10:30am. Reply YES to confirm, or call 03 9876 5432 to change it."
    },
    answer:"real",
    summary:"A genuine appointment reminder.",
    tells:[
      "It names a clinic you actually attend and an appointment you booked.",
      "No money is requested and there's no link asking you to \"log in\" or \"verify\".",
      "You're asked to reply or call an ordinary phone number, not to tap a web link.",
      "If unsure, call the clinic on the number you already have for them."
    ]
  },
  {
    render:{
      type:"email", subject:"Your order has shipped",
      sender:"eBay", email:"no-reply@ebay.com.au",
      initials:"e", color:"#0064D2", time:"2:18 PM", button:"View order",
      body:"Hi Margaret,\n\nGood news, your order #14-09822 has shipped with Australia Post and should arrive in 3 to 5 business days. You can track it any time in the eBay app. We'll never ask you to pay extra delivery fees by text or email."
    },
    answer:"real",
    summary:"A genuine order confirmation.",
    tells:[
      "It's about an order you actually placed, and it greets you by name.",
      "There's no demand for money or card details, and no threat.",
      "It points you to the official app to track, and even reminds you it won't ask for extra fees.",
      "Safe habit: open the eBay app yourself rather than clicking links, to be sure."
    ]
  }
];

/* ============================================================
   Quiz engine  (you usually won't need to change anything below)
   ============================================================ */
const el = id => document.getElementById(id);
const startScreen   = el('start');
const quizScreen    = el('quiz');
const resultsScreen = el('results');

let order = [];
let idx = 0;
let score = 0;

function escapeHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* escape, then make any web address look like a link (but NOT clickable) */
function formatBody(text){
  return escapeHtml(text).replace(/https?:\/\/[^\s]+/g,
    m => `<span class="lnk">${m}</span>`);
}

function smsHTML(r){
  return `
    <div class="mock mock-sms">
      <div class="sms-status">
        <span>9:41</span>
        <span class="sigbat"><span class="bars"><i></i><i></i><i></i><i></i></span><span class="batt"></span></span>
      </div>
      <div class="sms-head">
        <div class="sms-avatar" style="background:${r.color || '#AEB7C6'}">${escapeHtml(r.initials || '?')}</div>
        <div class="sms-name">${escapeHtml(r.sender)}</div>
        <div class="sms-meta">Text Message \u00B7 Today ${escapeHtml(r.time || '')}</div>
      </div>
      <div class="sms-body">
        <div class="sms-day">Today <span>${escapeHtml(r.time || '')}</span></div>
        <div class="sms-bubble">${formatBody(r.body)}</div>
      </div>
    </div>`;
}

function emailHTML(r){
  const btn = r.button
    ? `<div class="eml-btn" style="background:${r.btnColor || r.color || '#1E5BB8'}">${escapeHtml(r.button)}</div>`
    : '';
  return `
    <div class="mock mock-email">
      <div class="eml-bar"><span class="dots"><i></i><i></i><i></i></span><span class="inbox">Inbox</span></div>
      <div class="eml-subject">${escapeHtml(r.subject)}</div>
      <div class="eml-from">
        <div class="eml-avatar" style="background:${r.color || '#888'}">${escapeHtml(r.initials)}</div>
        <div class="eml-who">
          <div class="eml-sender">${escapeHtml(r.sender)}</div>
          <div class="eml-email">${escapeHtml(r.email)}</div>
        </div>
        <div class="eml-time">${escapeHtml(r.time || '')}</div>
      </div>
      <div class="eml-body">${formatBody(r.body)}${btn}</div>
    </div>`;
}

function popupHTML(r){
  return `
    <div class="mock mock-popup">
      <div class="pop-bar"><span>${escapeHtml(r.title || 'Alert')}</span><span class="x">\u2715</span></div>
      <div class="pop-body">${formatBody(r.body)}</div>
    </div>`;
}

function renderMock(r){
  if(r.type === 'sms')   return smsHTML(r);
  if(r.type === 'email') return emailHTML(r);
  if(r.type === 'popup') return popupHTML(r);
  return '';
}

function channelLabel(q){
  if(q.image) return q.channel;
  if(q.render.type === 'email') return 'Email';
  if(q.render.type === 'popup') return 'Pop-up on your computer';
  return 'Text message';
}

function shuffle(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz(){
  order = shuffle(QUESTIONS);
  if(QUESTIONS_PER_ROUND > 0 && QUESTIONS_PER_ROUND < order.length){
    order = order.slice(0, QUESTIONS_PER_ROUND);
  }
  idx = 0;
  score = 0;
  startScreen.classList.add('hidden');
  resultsScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
}

el('startBtn').addEventListener('click', startQuiz);

function renderQuestion(){
  const q = order[idx];
  const total = order.length;
  el('qcount').textContent = `Question ${idx + 1} of ${total}`;
  el('barFill').style.width = `${(idx / total) * 100}%`;

  const inner = q.image
    ? `<div class="msg-frame"><img src="${q.image}" alt="A message to judge as scam or real"></div>`
    : `<div class="msg-frame">${renderMock(q.render)}</div>`;

  el('messageArea').innerHTML =
    `<div class="channel"><span class="dot"></span>${channelLabel(q)}</div>${inner}`;

  el('askArea').classList.remove('hidden');
  el('feedbackArea').innerHTML = '';

  document.querySelectorAll('.ans').forEach(btn => {
    btn.disabled = false;
    btn.onclick = () => handleAnswer(btn.dataset.choice);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleAnswer(choice){
  const q = order[idx];
  const correct = (choice === q.answer);
  if(correct) score++;

  document.querySelectorAll('.ans').forEach(b => b.disabled = true);
  el('askArea').classList.add('hidden');

  const verdictTag = q.answer === 'scam'
    ? '<span class="tag scam">SCAM</span>'
    : '<span class="tag real">REAL</span>';

  const tellsHtml = q.tells.map(t => `<li>${t}</li>`).join('');
  const isLast = (idx === order.length - 1);

  el('feedbackArea').innerHTML = `
    <div class="feedback ${correct ? 'correct' : 'wrong'}">
      <div class="fb-head">
        <span class="fb-mark">${correct ? '\u2713' : '\u2717'}</span>
        <span class="fb-result">${correct ? 'Correct!' : 'Not quite \u2026'}</span>
      </div>
      <div class="verdict">This message is ${verdictTag}</div>
      <p class="summary-line">${q.summary}</p>
      <ul class="tells">${tellsHtml}</ul>
      <div class="next-row">
        <button class="btn btn-primary" id="nextBtn">${isLast ? 'See your results' : 'Next message'}</button>
      </div>
    </div>`;

  el('nextBtn').addEventListener('click', () => {
    idx++;
    if(idx >= order.length){ showResults(); }
    else { renderQuestion(); }
  });
}

function showResults(){
  quizScreen.classList.add('hidden');
  resultsScreen.classList.remove('hidden');

  const total = order.length;
  const ratio = score / total;
  let msg;
  if(score === total)    msg = "Outstanding. You spotted every one.";
  else if(ratio >= 0.78) msg = "Great work. You've got a sharp eye for scams.";
  else if(ratio >= 0.55) msg = "Good effort. A few of these fool many people.";
  else                   msg = "These are tricky on purpose. The tips below will help a lot.";

  resultsScreen.innerHTML = `
    <h2>Your result</h2>
    <div class="score-big">${score} / ${total}</div>
    <p class="score-sub">messages identified correctly</p>
    <p class="score-msg">${msg}</p>

    <div class="rules">
      <h3>What scammers do, and what to do instead</h3>
      <div class="rule"><b>Create urgency or fear</b> ("act now", "account suspended", "you'll be fined").<span>Slow down. Real organisations give you time.</span></div>
      <div class="rule"><b>Send a link</b> to "log in", "verify" or "pay a fee".<span>Don't tap it. Open the official app or type the website yourself.</span></div>
      <div class="rule"><b>Ask for passwords, PINs, card numbers or codes.</b><span>Never share these. No real organisation will ask.</span></div>
      <div class="rule"><b>Ask for gift cards, or a "fee" to release a prize or refund.</b><span>This is always a scam. Real money never works this way.</span></div>
      <div class="rule"><b>Pose as family or a new romance in trouble.</b><span>Verify by calling the real person. Never send money to someone you haven't met.</span></div>
      <div class="rule"><b>Pressure you to keep it secret.</b><span>Talk it over with someone you trust first.</span></div>
    </div>

    <div class="golden">
      <b>The golden rule:</b> When in doubt, stop and contact the organisation or person yourself, using a number or website you find independently, never one from the message.
    </div>

    <div class="resources">
      <h3>If you spot or fall for a scam (Australia)</h3>
      <p><b>Report a scam:</b> Scamwatch, scamwatch.gov.au</p>
      <p><b>If money was lost:</b> call your bank straight away (number on your card), then report it at cyber.gov.au.</p>
      <p><b>If your details may be stolen:</b> IDCARE, idcare.org.au or 1800 595 160 (free help).</p>
    </div>

    <button class="btn btn-ghost" id="restartBtn">Try the quiz again</button>
  `;

  el('restartBtn').addEventListener('click', startQuiz);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
