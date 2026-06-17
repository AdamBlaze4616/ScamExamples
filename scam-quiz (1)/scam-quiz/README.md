# Scam or Real? — Scam Awareness Quiz

An interactive quiz that shows people real-looking messages (text messages, emails and
pop-ups) and asks them to decide whether each is a **scam** or **real**. After each
answer it reveals the verdict and the warning signs to look for. Built for cyber
awareness sessions: large text, big buttons, plain language.

There are **19 messages** in the bank, covering parcel, government (myGov, Medicare),
bank, streaming, prize, **romance**, **family impersonation ("Hi Mum" and grandchild),**
toll-road, subscription "refund" and tech-support pop-up scams, plus genuine bank,
delivery, billing, appointment, verification-code and family messages.

## Project files

```
scam-quiz/
├── index.html      ← the page structure
├── styles.css      ← all the styling (colours, fonts, layout)
├── script.js       ← the quiz logic + the message data (answers & explanations)
├── images/         ← the screenshot messages (message_A.png … message_I.png)
└── README.md       ← this file
```

## Open it in VS Code

1. Open VS Code.
2. **File → Open Folder…** and choose the `scam-quiz` folder.

## Run it

- **Easiest:** double-click `index.html` (or right-click → open with your browser).
- **Best for editing:** install the **Live Server** extension, then right-click
  `index.html` → **Open with Live Server**. The page reloads when you save.

## Shorter rounds (optional)

The quiz **shuffles the messages every time** it's played. Near the top of `script.js`:

```js
const QUESTIONS_PER_ROUND = 0;   // 0 = show every message
```

Set it to a number (e.g. `10`) to show that many random messages each play. Great for
a quick activity, and replays show a different mix.

## Edit or add messages

All the data is in the `QUESTIONS` array at the top of `script.js`. A message can be
shown in one of two ways.

**1. As a screenshot you've made** (`message_A.png` … are done this way):

```js
{
  image:   "images/message_X.png",
  channel: "Text message",          // or "Email"
  answer:  "scam",                  // "scam" or "real"
  summary: "A parcel delivery scam.",
  tells: [ "Warning sign one.", "Warning sign two." ]
}
```

To add one: drop the picture into `images/`, then copy a block and change the details.

**2. As text the quiz draws for you** (the romance, family, toll, etc. are done this
way, so you can edit the wording directly, no image needed):

```js
{
  render: {
    type:"sms",                     // "sms", "email" or "popup"
    sender:"Unknown number", initials:"?", color:"#AEB7C6", time:"4:02 PM",
    body:"Hi Mum, it's me ..."
  },
  answer:"scam",
  summary:"The \"Hi Mum\" scam.",
  tells: [ "...", "..." ]
}
```

- **sms** fields: `sender`, `initials`, `color` (avatar colour), `time`, `body`.
- **email** fields: `subject`, `sender`, `email`, `initials`, `color`, `time`, `body`,
  and optional `button` (and `btnColor`).
- **popup** fields: `title`, `body`.
- Any web address in `body` is shown styled like a link but is **not** clickable, so it's
  safe to display in a class.

## The deliberate pairs

Some messages are designed to be compared side by side:

- **A (scam) vs B (real)** — fake parcel fee vs a genuine delivery notice.
- **D (scam) vs E (real)** — fake bank "secure your account" link vs a genuine alert
  that tells you to call the number on your card.
- The **family impersonation** scams vs the **genuine "Mum" dinner text** — same idea,
  but the real one is from a saved contact, with no money and no pressure.

---

*Made-up examples for education only. None of the links, numbers or fees are real.*
