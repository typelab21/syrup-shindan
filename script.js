// データ定義（省略せずそのまま維持）

const answerScale = [
  { label: "とても当てはまる", a: 2, b: 0 },
  { label: "やや当てはまる", a: 1.5, b: 0.5 },
  { label: "どちらともいえない", a: 1, b: 1 },
  { label: "あまり当てはまらない", a: 0.5, b: 1.5 },
  { label: "まったく当てはまらない", a: 0, b: 2 }
];

const questions = [
  { id: 1, text: "嬉しいことがあると、誰かにすぐ話したくなる。", axis: "感情表現", a: "open", b: "cool" },
  { id: 2, text: "初対面では、相手が話しやすいように様子を見る。", axis: "対人スタイル", a: "harmony", b: "individual" },
  { id: 3, text: "友達が落ち込んでいたら、まず安心させたい。", axis: "影響の与え方", a: "stable", b: "stimulus" },
  { id: 4, text: "人から話しかけられやすい方だと思う。", axis: "魅力の質", a: "light", b: "rich" },
  { id: 5, text: "気にしていることほど、すぐには言えない。", axis: "感情表現", a: "cool", b: "open" },
  { id: 6, text: "みんなで決めるとき、自分の希望より場の空気を優先しがち。", axis: "対人スタイル", a: "harmony", b: "individual" },
  { id: 7, text: "ピリッとした空気になると、なんとか和ませたくなる。", axis: "影響の与え方", a: "stable", b: "stimulus" },
  { id: 8, text: "仲良くなるほど「意外な一面がある」と言われる。", axis: "魅力の質", a: "rich", b: "light" },
  { id: 9, text: "好きなものの話になると、急にテンションが上がる。", axis: "感情表現", a: "open", b: "cool" },
  { id: 10, text: "会話で誰かが入りにくそうだと、少し気になる。", axis: "対人スタイル", a: "harmony", b: "individual" },
  { id: 11, text: "悩み相談では、アドバイスより先に共感したい。", axis: "影響の与え方", a: "stable", b: "stimulus" },
  { id: 12, text: "第一印象と、仲良くなった後の印象が違うと言われる。", axis: "魅力の質", a: "rich", b: "light" },
  { id: 13, text: "嫌なことがあると、顔や態度に出やすい。", axis: "感情表現", a: "open", b: "cool" },
  { id: 14, text: "自分の話をするより、相手の話を聞く方が得意。", axis: "対人スタイル", a: "harmony", b: "individual" },
  { id: 15, text: "周りから「一緒にいると落ち着く」と言われることがある。", axis: "影響の与え方", a: "stable", b: "stimulus" },
  { id: 16, text: "「話しやすい」より「雰囲気がある」と言われる方が多い。", axis: "魅力の質", a: "rich", b: "light" },
  { id: 17, text: "楽しいとき、表情や声に出やすい。", axis: "感情表現", a: "open", b: "cool" },
  { id: 18, text: "人に合わせすぎて、あとから少し疲れることがある。", axis: "対人スタイル", a: "harmony", b: "individual" },
  { id: 19, text: "人をドキドキさせるより、安心させる方が自分らしい。", axis: "影響の与え方", a: "stable", b: "stimulus" },
  { id: 20, text: "「わかりやすい」より「つかめない」と言われることがある。", axis: "魅力の質", a: "rich", b: "light" }
];

const axisLabels = {
  open: "オープン",
  cool: "クール",
  harmony: "調和",
  individual: "個性",
  stable: "安定",
  stimulus: "刺激",
  light: "ライト",
  rich: "リッチ"
};

const baseTypes = [
  {
    group: "余韻型",
    name: "キャラメルシロップ",
    open: 40,
    harmony: 75,
    stable: 80,
    light: 35,
    catch: "やさしい甘さが後味に残る",
    summary: "静かに支えて、あとから心に残る人。",
    features: ["すぐに目立つより、時間差で印象に残る", "小さな気遣いを積み重ねる", "安心感があるのに、少し奥行きもある"],
    manual: "キャラメルシロップは、強く主張するよりも、そっと相手のそばにいて信頼を積み上げるタイプです。優しさを大げさに見せないぶん、気づいた人ほど離れられなくなります。"
  },
  {
    group: "余韻型",
    name: "アールグレイシロップ",
    open: 25,
    harmony: 35,
    stable: 35,
    light: 20,
    catch: "気品の香りで惹きつける",
    summary: "言葉や雰囲気に、忘れられない余白がある人。",
    features: ["感情を全部見せず、余白で惹きつける", "言葉選びや雰囲気に品がある", "軽く扱われると静かに距離を置く"],
    manual: "アールグレイシロップは、自分の世界観や美意識を大切にするタイプです。雑に距離を詰めるより、丁寧に関わるほど魅力が深く伝わります。"
  },
  {
    group: "余韻型",
    name: "ラムレーズンシロップ",
    open: 25,
    harmony: 30,
    stable: 55,
    light: 15,
    catch: "甘さに秘密をひとさじ",
    summary: "簡単には見せない奥行きで、深く惹きつける人。",
    features: ["全部を見せないことで魅力が増す", "浅く決めつけられるのが苦手", "深く関わるほど情の濃さが出る"],
    manual: "ラムレーズンシロップは、すぐに心を開くよりも、時間をかけて相手を見極めるタイプです。無理に暴こうとされるより、余白を尊重されることで信頼が育ちます。"
  },
  {
    group: "余韻型",
    name: "メープルシロップ",
    open: 60,
    harmony: 80,
    stable: 85,
    light: 35,
    catch: "帰りたくなるぬくもり",
    summary: "そばにいるほど安心できる、信頼のある人。",
    features: ["日常の中で安心感を与える", "頼られると力を発揮する", "派手さより継続的な信頼が魅力"],
    manual: "メープルシロップは、変わらずそばにいることで愛されるタイプです。大きな刺激より、何度も積み重なる安心感で相手の心に残ります。"
  },
  {
    group: "共鳴型",
    name: "ミルクシロップ",
    open: 75,
    harmony: 90,
    stable: 85,
    light: 80,
    catch: "そっと溶けて寄り添う",
    summary: "相手の温度に合わせて、やさしく受け止める人。",
    features: ["相手の空気に自然に合わせられる", "話しやすい安心感がある", "自分の気持ちを後回しにしがち"],
    manual: "ミルクシロップは、相手の緊張をやわらげる受け止め上手です。ただ、優しさを当たり前にされると静かに疲れてしまうので、同じように大切にされる関係が必要です。"
  },
  {
    group: "共鳴型",
    name: "ハニーバターシロップ",
    open: 70,
    harmony: 75,
    stable: 45,
    light: 60,
    catch: "甘さで優しく包囲する",
    summary: "明るい優しさで、相手の気持ちを前向きに動かす人。",
    features: ["励ます力がある", "一緒にいると前向きになれる", "明るいぶん、疲れを隠しやすい"],
    manual: "ハニーバターシロップは、ただ寄り添うだけでなく、相手の背中をふわっと押せるタイプです。前向きな温度で周囲を照らしますが、自分も甘やかされる時間が必要です。"
  },
  {
    group: "共鳴型",
    name: "カフェオレシロップ",
    open: 45,
    harmony: 75,
    stable: 45,
    light: 35,
    catch: "気を使わせない才能",
    summary: "気楽さと深さを両方持つ、話したくなる人。",
    features: ["気軽な話も深い話もできる", "空気を読みながら本音に触れる", "軽そうに見えて意外と考えている"],
    manual: "カフェオレシロップは、話しやすさの中に大人っぽい深さがあるタイプです。重くなりすぎず、でも浅くも終わらない距離感で信頼されます。"
  },
  {
    group: "共鳴型",
    name: "ホワイトチョコシロップ",
    open: 70,
    harmony: 70,
    stable: 70,
    light: 75,
    catch: "甘さを押し付けない",
    summary: "肯定する力で、相手の心をやわらかくする人。",
    features: ["人の良いところを見つけるのが上手い", "素直な好意が伝わりやすい", "否定されるとしょんぼりしやすい"],
    manual: "ホワイトチョコシロップは、相手をやわらかく肯定できるタイプです。押しつけない優しさで周りを明るくし、安心できる空気を作ります。"
  },
  {
    group: "庇護型",
    name: "ストロベリーシロップ",
    open: 85,
    harmony: 40,
    stable: 35,
    light: 80,
    catch: "愛される理由を持たない",
    summary: "素直な反応で、周りの応援したい気持ちを引き出す人。",
    features: ["感情が表に出やすい", "周りが自然と放っておけなくなる", "反応が素直で印象に残る"],
    manual: "ストロベリーシロップは、飾らない感情で人の心を動かすタイプです。強がるより、素直でいるほど魅力が伝わります。"
  },
  {
    group: "庇護型",
    name: "マシュマロシロップ",
    open: 45,
    harmony: 85,
    stable: 90,
    light: 85,
    catch: "守りたくなる空気",
    summary: "やわらかな空気で、相手の緊張をほどく人。",
    features: ["争いごとが苦手", "相手のトゲを丸くする", "優しすぎて負担を言いにくい"],
    manual: "マシュマロシロップは、そばにいるだけで空気をやわらかくするタイプです。否定せず受け止める力があり、居場所のように愛されます。"
  },
  {
    group: "庇護型",
    name: "ピーチシロップ",
    open: 70,
    harmony: 80,
    stable: 75,
    light: 80,
    catch: "やわらかな特別扱い",
    summary: "気持ちを先に察して、ちょうどよく支えられる人。",
    features: ["気遣いが自然にできる", "相手の変化に気づきやすい", "自分の希望を後回しにしやすい"],
    manual: "ピーチシロップは、相手が言葉にする前に気持ちを察するタイプです。優しいだけでなく、現実的に支えられるところが魅力です。"
  },
  {
    group: "庇護型",
    name: "ミルクティーシロップ",
    open: 40,
    harmony: 80,
    stable: 85,
    light: 40,
    catch: "静かに寄り添う名人",
    summary: "丁寧な距離感で、相手に安心と品を与える人。",
    features: ["落ち着いた支え方ができる", "言葉選びが丁寧", "強引な空気が苦手"],
    manual: "ミルクティーシロップは、相手のプライドや距離感を守りながら支えるタイプです。静かでも信頼が深く、安心して任せられる存在です。"
  },
  {
    group: "執着型",
    name: "ダークチョコシロップ",
    open: 25,
    harmony: 25,
    stable: 25,
    light: 15,
    catch: "深く手離れられない甘さ",
    summary: "軽くは終わらない深さで、強く記憶に残る人。",
    features: ["軽い関係より深い関係を好む", "本気度が高い", "裏切りや雑な扱いに敏感"],
    manual: "ダークチョコシロップは、深く向き合うことで強く記憶に残るタイプです。軽く扱われることを嫌い、誠実に向き合う相手にだけ濃い信頼を向けます。"
  },
  {
    group: "執着型",
    name: "シナモンシロップ",
    open: 75,
    harmony: 30,
    stable: 20,
    light: 30,
    catch: "癖になる余熱",
    summary: "日常に刺激を落とし、忘れられない温度を残す人。",
    features: ["感情や存在感に熱がある", "退屈な関係が苦手", "ハマる人には強く刺さる"],
    manual: "シナモンシロップは、関係に刺激と変化を生むタイプです。強い個性を否定されると閉じますが、面白がってくれる相手には鮮やかに魅力を出します。"
  },
  {
    group: "執着型",
    name: "ピスタチオシロップ",
    open: 35,
    harmony: 25,
    stable: 55,
    light: 25,
    catch: "静かな誇りで惹きつける",
    summary: "控えめでも芯があり、わかる人を深く惹きつける人。",
    features: ["控えめに見えて芯が強い", "こだわりや美意識がある", "雑に褒められるより理解されたい"],
    manual: "ピスタチオシロップは、わかる人にだけ深く刺さるタイプです。無理に広く好かれようとせず、自分の基準を大切にします。"
  },
  {
    group: "執着型",
    name: "レモンシロップ",
    open: 85,
    harmony: 25,
    stable: 20,
    light: 75,
    catch: "心をかき乱す一滴",
    summary: "正直さと爽やかな刺激で、相手の心を目覚めさせる人。",
    features: ["本音がはっきりしている", "曖昧な態度が苦手", "刺激的だけど後味は爽やか"],
    manual: "レモンシロップは、ごまかしのない正直さで相手の心を動かすタイプです。強く見えても、嘘のない関係を大切にしています。"
  }
];

const compatibility = [
  ["キャラメルシロップ", "ミルクシロップ", "マシュマロシロップ", "カフェオレシロップ", "キャラメルミルクラテ"],
  ["アールグレイシロップ", "ミルクティーシロップ", "ホワイトチョコシロップ", "メープルシロップ", "アールグレイミルクティー"],
  ["ラムレーズンシロップ", "ダークチョコシロップ", "アールグレイシロップ", "シナモンシロップ", "ラムレーズンビターショコラ"],
  ["メープルシロップ", "ハニーバターシロップ", "ミルクシロップ", "ストロベリーシロップ", "メープルハニーバター"],
  ["ミルクシロップ", "キャラメルシロップ", "ピーチシロップ", "カフェオレシロップ", "キャラメルミルク"],
  ["ハニーバターシロップ", "メープルシロップ", "ストロベリーシロップ", "シナモンシロップ", "ハニーバターメープルトースト"],
  ["カフェオレシロップ", "ミルクシロップ", "ダークチョコシロップ", "アールグレイシロップ", "ミルクカフェオレ"],
  ["ホワイトチョコシロップ", "アールグレイシロップ", "ミルクティーシロップ", "ピスタチオシロップ", "ホワイトチョコアールグレイ"],
  ["ストロベリーシロップ", "マシュマロシロップ", "ハニーバターシロップ", "メープルシロップ", "ストロベリーマシュマロ"],
  ["マシュマロシロップ", "キャラメルシロップ", "ミルクシロップ", "ストロベリーシロップ", "キャラメルマシュマロ"],
  ["ピーチシロップ", "ミルクシロップ", "カフェオレシロップ", "レモンシロップ", "ピーチミルク"],
  ["ミルクティーシロップ", "アールグレイシロップ", "ホワイトチョコシロップ", "メープルシロップ", "アールグレイミルクティー"],
  ["ダークチョコシロップ", "ラムレーズンシロップ", "カフェオレシロップ", "レモンシロップ", "ラムレーズンビターショコラ"],
  ["シナモンシロップ", "ハニーバターシロップ", "メープルシロップ", "ダークチョコシロップ", "ハニーバターシナモン"],
  ["ピスタチオシロップ", "ホワイトチョコシロップ", "アールグレイシロップ", "レモンシロップ", "ピスタチオホワイトショコラ"],
  ["レモンシロップ", "ピーチシロップ", "カフェオレシロップ", "ダークチョコシロップ", "ピーチレモネード"]
];

let currentQuestionIndex = 0;
const answers = {};

function renderCurrentQuestion() {
  const form = document.getElementById("quizForm");
  const question = questions[currentQuestionIndex];

  if (!form || !question) return;

  form.innerHTML = "";

  const card = document.createElement("div");
  card.className = "question-card single-question";

  const step = document.createElement("div");
  step.className = "quiz-step-info";
  step.innerHTML = `
    <span class="quiz-step-pill">Q${question.id}</span>
    <span>${currentQuestionIndex + 1} / ${questions.length}</span>
  `;

  const title = document.createElement("p");
  title.className = "question-title";
  title.textContent = question.text;

  const answerList = document.createElement("div");
  answerList.className = "answer-list";

  answerScale.forEach((answer, index) => {
    const label = document.createElement("label");
    label.className = "answer-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${question.id}`;
    input.value = String(index);

    if (answers[question.id] === index) {
      input.checked = true;
    }

    input.addEventListener("change", () => {
      answers[question.id] = index;
      updateProgress();
    });

    const span = document.createElement("span");
    span.textContent = answer.label;

    label.appendChild(input);
    label.appendChild(span);
    answerList.appendChild(label);
  });

  card.appendChild(step);
  card.appendChild(title);
  card.appendChild(answerList);
  form.appendChild(card);

  updateResultButton();
}

function updateResultButton() {
  const button = document.getElementById("resultButton");

  if (!button) return;

  if (currentQuestionIndex === questions.length - 1) {
    button.textContent = "結果を見る";
    button.classList.remove("next-mode");
    button.classList.add("finish-mode");
  } else {
    button.textContent = "次の質問へ";
    button.classList.add("next-mode");
    button.classList.remove("finish-mode");
  }
}

function updateProgress() {
  const answeredCount = Object.keys(answers).length;
  const percent = Math.round((answeredCount / questions.length) * 100);

  const progressCount = document.getElementById("progressCount");
  const progressFill = document.getElementById("progressFill");
  const progressArea = document.querySelector(".progress-area");

  if (!progressCount || !progressFill || !progressArea) return;

  progressCount.textContent = answeredCount;
  progressFill.style.height = `${percent}%`;

  progressArea.classList.remove("bump");
  void progressArea.offsetWidth;
  progressArea.classList.add("bump");
}

function calculateScores() {
  const raw = {
    open: 0,
    cool: 0,
    harmony: 0,
    individual: 0,
    stable: 0,
    stimulus: 0,
    light: 0,
    rich: 0
  };

  for (const question of questions) {
    const answerIndex = answers[question.id];

    if (answerIndex === undefined) {
      alert(`Q${question.id}に回答してください。`);
      return null;
    }

    const selected = answerScale[answerIndex];
    raw[question.a] += selected.a;
    raw[question.b] += selected.b;
  }

  const pct = (a, b) => {
    const sum = a + b;
    return sum ? Math.round((a / sum) * 100) : 50;
  };

  return {
    open: pct(raw.open, raw.cool),
    harmony: pct(raw.harmony, raw.individual),
    stable: pct(raw.stable, raw.stimulus),
    light: pct(raw.light, raw.rich)
  };
}

function findNearestType(scores) {
  let bestType = null;
  let bestDistance = Infinity;

  for (const type of baseTypes) {
    const distance =
      Math.abs(scores.open - type.open) +
      Math.abs(scores.harmony - type.harmony) +
      Math.abs(scores.stable - type.stable) +
      Math.abs(scores.light - type.light);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestType = type;
    }
  }

  return { type: bestType, distance: bestDistance };
}

function getCompatibility(typeName) {
  return compatibility.find((item) => item[0] === typeName);
}

function renderResult(scores, result) {
  const resultSection = document.getElementById("result");
  const loadingSection = document.getElementById("loading");
  const resultCard = document.getElementById("resultCard");
  const compat = getCompatibility(result.name);

  if (loadingSection) loadingSection.classList.add("hidden");

  const compatHtml = compat
    ? `
      <div class="compat-mini">
        <p>◎ ${compat[1]}</p>
        <p>○ ${compat[2]}</p>
        <p>△ ${compat[3]}</p>
        <p>組み合わせ名：${compat[4]}</p>
      </div>
    `
    : "<p>相性データを準備中です。</p>";
  if (!resultCard) return;

  resultCard.innerHTML = `
    <div class="result-hero">
      <div>
        <p class="result-badge">${result.group}</p>
        <h3 class="result-type">${result.name}</h3>
        <p class="result-copy">${result.catch}</p>
        <p class="result-main-text">${result.summary}</p>
      </div>
      <div class="result-orb"></div>
    </div>

    <div class="score-grid">
      ${scoreBox("オープン", scores.open, "クール")}
      ${scoreBox("調和", scores.harmony, "個性")}
      ${scoreBox("安定", scores.stable, "刺激")}
      ${scoreBox("ライト", scores.light, "リッチ")}
    </div>

    <div class="result-detail-grid">
      <div class="result-panel">
        <h4>特徴</h4>
        <ul>
          ${result.features.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="result-panel">
        <h4>取扱説明書</h4>
        <p>${result.manual}</p>
      </div>

      <div class="result-panel">
        <h4>相性</h4>
        ${compatHtml}
      </div>

      <div class="result-panel">
        <h4>あなたのバランス</h4>
        <p>
          この結果は、4つの軸のパーセントから一番近いタイプを判定しています。
          数値が近いタイプほど、あなたの回答傾向に近いタイプです。
        </p>
      </div>
    </div>

    <button class="share-button" type="button" onclick="shareResult('${result.name}')">
      結果をコピー
    </button>
  `;

  if (resultSection) {
    resultSection.classList.remove("hidden");
    resultSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scoreBox(labelA, valueA, labelB) {
  return `
    <div class="score-box">
      <div class="score-label">${labelA} / ${labelB}</div>
      <div class="score-value">${valueA}%</div>
      <div class="bar"><span style="width:${valueA}%"></span></div>
    </div>
  `;
}

function shareResult(typeName) {
  const text = `私の愛され方タイプは「${typeName}」でした。`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      alert("結果をコピーしました。");
    }).catch(() => {
      alert("クリップボードへのコピーに失敗しました。手動でコピーしてください。");
    });
  } else {
    alert("この環境では自動コピーが使えません。テキストを手動でコピーしてください。\n" + text);
  }
}

function renderTypeList() {
  const typeList = document.getElementById("typeList");
  typeList.innerHTML = "";

  baseTypes.forEach((type) => {
    const card = document.createElement("button");
    card.className = "type-card type-card-button";
    card.type = "button";

    card.innerHTML = `
      <h3>${type.name}</h3>
      <p><strong>${type.group}</strong></p>
      <p>${type.catch}</p>
      <div class="tags">
        <span class="tag">詳しく見る</span>
      </div>
    `;

    card.addEventListener("click", () => {
      openTypeModal(type);
    });

    typeList.appendChild(card);
  });
}
function openTypeModal(type) {
  const modal = document.getElementById("typeModal");
  const content = document.getElementById("typeModalContent");

  if (!modal || !content) return;

  const compat = getCompatibility(type.name);

  const compatHtml = compat
    ? `
      <p>◎ ${compat[1]}</p>
      <p>○ ${compat[2]}</p>
      <p>△ ${compat[3]}</p>
      <p><strong>組み合わせ名：</strong>${compat[4]}</p>
    `
    : `<p>相性データを準備中です。</p>`;

  content.innerHTML = `
    <span class="modal-group">${type.group}</span>
    <h3 class="modal-title">${type.name}</h3>
    <p class="modal-catch">${type.catch}</p>
    <p class="modal-manual">${type.summary}</p>

    <div class="modal-section">
      <h4>特徴</h4>
      <ul>
        ${type.features.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-section">
      <h4>取扱説明書</h4>
      <p class="modal-manual">${type.manual}</p>
    </div>

    <div class="modal-section">
      <h4>相性</h4>
      ${compatHtml}
    </div>
  `;

  modal.classList.remove("hidden");
}
function renderCompatibility() {
  const list = document.getElementById("compatibilityList");
  list.innerHTML = "";

  compatibility.forEach((item) => {
    const [name, best, good, tricky, combo] = item;
    const card = document.createElement("div");
    card.className = "compatibility-card";

    card.innerHTML = `
      <h3>${name}</h3>
      <p>◎ ${best}</p>
      <p>○ ${good}</p>
      <p>△ ${tricky}</p>
      <div class="tags">
        <span class="tag">${combo}</span>
      </div>
    `;

    list.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", () => {
    const typeModal = document.getElementById("typeModal");
const typeModalClose = document.getElementById("typeModalClose");
const typeModalBg = document.querySelector(".type-modal-bg");

if (typeModalClose && typeModal) {
  typeModalClose.addEventListener("click", () => {
    typeModal.classList.add("hidden");
  });
}

if (typeModalBg && typeModal) {
  typeModalBg.addEventListener("click", () => {
    typeModal.classList.add("hidden");
  });
}
  const startQuizBtn = document.getElementById("startQuizBtn");
  const quizSection = document.getElementById("quiz");
  const loading = document.getElementById("loading");
  const resultButton = document.getElementById("resultButton");

  if (loading) {
    setTimeout(() => {
      loading.classList.add("hide");
    }, 900);
  }

  if (startQuizBtn && quizSection) {
    startQuizBtn.addEventListener("click", () => {
      quizSection.style.display = "block";
      quizSection.classList.add("is-show");
      quizSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (resultButton) {
    resultButton.addEventListener("click", () => {
      const currentQuestion = questions[currentQuestionIndex];

      if (answers[currentQuestion.id] === undefined) {
        alert("この質問に回答してください。");
        return;
      }

      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderCurrentQuestion();
        quizSection.scrollIntoView({ behavior: "smooth" });
        return;
      }

      const scores = calculateScores();
      if (!scores) return;

      const nearest = findNearestType(scores);
      renderResult(scores, nearest.type);
    });
  }

  renderCurrentQuestion();
  renderTypeList();
  renderCompatibility();
  updateProgress();
});