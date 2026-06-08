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
  updateStampCard();
  updateIngredientCards();
  updateBlendLab();

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
  const loadingSection = document.getElementById("resultLoading");
  const resultCard = document.getElementById("resultCard");
  const compat = getCompatibility(result.name);
  const detail = resultDetails[result.name];

  if (loadingSection) {
    loadingSection.classList.add("hidden");
  }

  if (!resultCard) return;

  const syrupColors = {
    "キャラメルシロップ": ["#c98a53", "#e4b577"],
    "アールグレイシロップ": ["#a994d8", "#d7c8ff"],
    "ラムレーズンシロップ": ["#7d536f", "#b58aa4"],
    "メープルシロップ": ["#d8a45e", "#f1c984"],

    "ミルクシロップ": ["#f8efff", "#ffffff"],
    "ハニーバターシロップ": ["#efb85f", "#ffd98a"],
    "カフェオレシロップ": ["#a97d61", "#d5b195"],
    "ホワイトチョコシロップ": ["#fff0f7", "#ffffff"],

    "ストロベリーシロップ": ["#ff7fac", "#ffb6cf"],
    "マシュマロシロップ": ["#ffe4f3", "#ffffff"],
    "ピーチシロップ": ["#ffa8c8", "#ffd0df"],
    "ミルクティーシロップ": ["#c9a47d", "#ead2b6"],

    "ダークチョコシロップ": ["#4f3448", "#7b536c"],
    "シナモンシロップ": ["#c47a55", "#e0a078"],
    "ピスタチオシロップ": ["#9fbd80", "#cfe3ad"],
    "レモンシロップ": ["#ffe16d", "#fff3a6"]
  };

  const colors = syrupColors[result.name] || ["#d778ff", "#f0c8ff"];

  const compatHtml = compat
    ? `
      <div class="result-pairing-list">
        <p><span>Best</span>${compat[1]}</p>
        <p><span>Good</span>${compat[2]}</p>
        <p><span>Spice</span>${compat[3]}</p>
        <p><span>Blend</span>${compat[4]}</p>
      </div>
    `
    : `<p>相性データを準備中です。</p>`;

  resultCard.style.setProperty("--result-syrup-main", colors[0]);
  resultCard.style.setProperty("--result-syrup-light", colors[1]);

  resultCard.innerHTML = `
    <div class="final-result-layout">
      <div class="final-bottle-area">
        <p class="final-label-top">Blended for you</p>

        <div class="final-bottle">
          <div class="final-bottle-cap"></div>

          <div class="final-bottle-glass">
            <div class="final-bottle-liquid"></div>
            <div class="final-bottle-shine"></div>

            <div class="final-bottle-label">
              <span>${result.group}</span>
              <strong>${result.name.replace("シロップ", "")}</strong>
              <small>Syrup</small>
            </div>
          </div>
        </div>

        <p class="final-bottle-note">
          あなた専用に調合された、愛され方のシロップ。
        </p>
      </div>

      <div class="final-profile-area">
        <span class="result-badge">${result.group}</span>

        <h3 class="result-type">${result.name}</h3>

        <p class="result-copy">${result.catch}</p>

        <p class="result-main-text">${result.summary}</p>

        <div class="score-grid">
          ${scoreBox("オープン", scores.open, "クール")}
          ${scoreBox("調和", scores.harmony, "個性")}
          ${scoreBox("安定", scores.stable, "刺激")}
          ${scoreBox("ライト", scores.light, "リッチ")}
        </div>
      </div>
    </div>

    <div class="result-detail-grid">
    ${detail ? `
  <div class="result-panel result-long-panel">
    <h4>基本の愛され方</h4>
    <p>${detail.basicLove}</p>
  </div>

  <div class="result-panel result-long-panel">
    <h4>恋愛で出やすい魅力</h4>
    <p>${detail.romanceCharm}</p>
  </div>

  <div class="result-panel result-long-panel">
    <h4>好きな人への態度</h4>
    <p>${detail.loveBehavior}</p>
  </div>

  <div class="result-panel result-long-panel">
    <h4>沼らせポイント</h4>
    <p>${detail.addictivePoint}</p>
  </div>

  <div class="result-panel result-long-panel">
    <h4>苦手な恋愛パターン</h4>
    <p>${detail.weakPoint}</p>
  </div>

  <div class="result-panel result-long-panel">
    <h4>大切にされるためのヒント</h4>
    <p>${detail.advice}</p>
  </div>

  <div class="result-panel result-long-panel">
    <h4>周りから見た印象</h4>
    <p>${detail.impression}</p>
  </div>

  <div class="result-panel result-long-panel">
    <h4>仲良くなるまでの距離感</h4>
    <p>${detail.distance}</p>
  </div>

  <div class="result-panel result-long-panel">
    <h4>あなたの一滴</h4>
    <p>${detail.dropPhrase}</p>
  </div>
` : ""}
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
        <h4>あなたの一滴</h4>
        <p>
          この結果は、4つの軸のバランスから、あなたに一番近いシロップを調合したものです。
          正解ではなく、あなたの魅力を物語として読むための小さなラベルです。
        </p>
      </div>
    </div>

    <button class="share-button" type="button" onclick="shareResult('${result.name}')">
      結果をコピー
    </button>
  `;

  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth" });
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

  const syrupColors = {
    "キャラメルシロップ": ["#c98a53", "#e4b577"],
    "アールグレイシロップ": ["#a994d8", "#d7c8ff"],
    "ラムレーズンシロップ": ["#7d536f", "#b58aa4"],
    "メープルシロップ": ["#d8a45e", "#f1c984"],

    "ミルクシロップ": ["#f8efff", "#ffffff"],
    "ハニーバターシロップ": ["#efb85f", "#ffd98a"],
    "カフェオレシロップ": ["#a97d61", "#d5b195"],
    "ホワイトチョコシロップ": ["#fff0f7", "#ffffff"],

    "ストロベリーシロップ": ["#ff7fac", "#ffb6cf"],
    "マシュマロシロップ": ["#ffe4f3", "#ffffff"],
    "ピーチシロップ": ["#ffa8c8", "#ffd0df"],
    "ミルクティーシロップ": ["#c9a47d", "#ead2b6"],

    "ダークチョコシロップ": ["#4f3448", "#7b536c"],
    "シナモンシロップ": ["#c47a55", "#e0a078"],
    "ピスタチオシロップ": ["#9fbd80", "#cfe3ad"],
    "レモンシロップ": ["#ffe16d", "#fff3a6"]
  };

  const groups = ["余韻型", "共鳴型", "庇護型", "執着型"];

  groups.forEach((groupName) => {
    const shelf = document.createElement("div");
    shelf.className = "syrup-shelf-row";

    const shelfTitle = document.createElement("h3");
    shelfTitle.className = "syrup-shelf-title";
    shelfTitle.textContent = groupName;

    const shelfItems = document.createElement("div");
    shelfItems.className = "syrup-shelf-items";

    baseTypes
      .filter((type) => type.group === groupName)
      .forEach((type) => {
        const colors = syrupColors[type.name] || ["#ec91c6", "#ad85e8"];

        const bottle = document.createElement("button");
        bottle.className = "syrup-bottle-card";
        bottle.type = "button";
        bottle.style.setProperty("--syrup-main", colors[0]);
        bottle.style.setProperty("--syrup-light", colors[1]);

        bottle.innerHTML = `
          <div class="syrup-bottle-visual">
            <div class="syrup-bottle-cap"></div>
            <div class="syrup-bottle-glass">
              <div class="syrup-bottle-liquid"></div>
              <div class="syrup-bottle-shine"></div>
              <div class="syrup-bottle-label">
                ${type.name.replace("シロップ", "")}
              </div>
            </div>
          </div>

          <div class="syrup-bottle-info">
            <p class="syrup-bottle-group">${type.group}</p>
            <h4>${type.name}</h4>
            <p>${type.catch}</p>
            <span>詳しく見る</span>
          </div>
        `;

        bottle.addEventListener("click", () => {
          openTypeModal(type);
        });

        shelfItems.appendChild(bottle);
      });

    shelf.appendChild(shelfTitle);
    shelf.appendChild(shelfItems);
    typeList.appendChild(shelf);
  });
}
function openTypeModal(type) {
  const modal = document.getElementById("typeModal");
  const content = document.getElementById("typeModalContent");

  if (!modal || !content) return;

  const compat = getCompatibility(type.name);
  const detail = resultDetails[type.name];

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
${detail ? `
  <div class="modal-section modal-long-section">
    <h4>基本の愛され方</h4>
    <p>${detail.basicLove}</p>
  </div>

  <div class="modal-section modal-long-section">
    <h4>恋愛で出やすい魅力</h4>
    <p>${detail.romanceCharm}</p>
  </div>

  <div class="modal-section modal-long-section">
    <h4>好きな人への態度</h4>
    <p>${detail.loveBehavior}</p>
  </div>

  <div class="modal-section modal-long-section">
    <h4>沼らせポイント</h4>
    <p>${detail.addictivePoint}</p>
  </div>

  <div class="modal-section modal-long-section">
    <h4>苦手な恋愛パターン</h4>
    <p>${detail.weakPoint}</p>
  </div>

  <div class="modal-section modal-long-section">
    <h4>大切にされるためのヒント</h4>
    <p>${detail.advice}</p>
  </div>

  <div class="modal-section modal-long-section">
    <h4>周りから見た印象</h4>
    <p>${detail.impression}</p>
  </div>

  <div class="modal-section modal-long-section">
    <h4>仲良くなるまでの距離感</h4>
    <p>${detail.distance}</p>
  </div>

  <div class="modal-section modal-long-section">
    <h4>あなたの一滴</h4>
    <p>${detail.dropPhrase}</p>
  </div>
` : ""}
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
const modalCard = document.querySelector(".type-modal-card");

if (modalCard) {
  modalCard.scrollTop = 0;
}
  const modalColors = {
  "キャラメルシロップ": "#c98a53",
  "アールグレイシロップ": "#a994d8",
  "ラムレーズンシロップ": "#7d536f",
  "メープルシロップ": "#d8a45e",
  "ミルクシロップ": "#f8efff",
  "ハニーバターシロップ": "#efb85f",
  "カフェオレシロップ": "#a97d61",
  "ホワイトチョコシロップ": "#fff0f7",
  "ストロベリーシロップ": "#ff7fac",
  "マシュマロシロップ": "#ffe4f3",
  "ピーチシロップ": "#ffa8c8",
  "ミルクティーシロップ": "#c9a47d",
  "ダークチョコシロップ": "#4f3448",
  "シナモンシロップ": "#c47a55",
  "ピスタチオシロップ": "#9fbd80",
  "レモンシロップ": "#ffe16d"
};

modal.style.setProperty("--modal-syrup-main", modalColors[type.name] || "#d778ff");
modal.classList.remove("hidden");
  modal.scrollIntoView({ behavior: "smooth", block: "start" });
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
  const chapterStart = document.getElementById("chapterStart");

if (chapterStart && quizSection) {
  chapterStart.addEventListener("click", () => {
    quizSection.classList.add("is-show");
    quizSection.style.display = "block";
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

const resultLoading = document.getElementById("resultLoading");
const resultSection = document.getElementById("result");
const resultLoadingText = document.getElementById("resultLoadingText");

if (resultSection) {
  resultSection.classList.add("hidden");
}

if (resultLoading) {
  resultLoading.classList.remove("hidden");
  resultLoading.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

const messages = [
  "あなたの甘さを読み取り中...",
  "相性のいいシロップを探しています...",
  "愛され方の余韻を調合中...",
  "もうすぐ結果が完成します..."
];

let messageIndex = 0;

const messageTimer = setInterval(() => {
  if (resultLoadingText) {
    resultLoadingText.textContent = messages[messageIndex % messages.length];
  }

  messageIndex++;
}, 500);

setTimeout(() => {
  clearInterval(messageTimer);
  showResultLoading(scores, nearest.type);
}, 2600);
    });
  }

  renderCurrentQuestion();
  renderTypeList();
  renderCompatibility();
  updateProgress();
});
function updateBlendLab() {
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

  Object.keys(answers).forEach((questionId) => {
    const question = questions.find((q) => q.id === Number(questionId));
    const answerIndex = answers[questionId];

    if (!question || answerIndex === undefined) return;

    const selected = answerScale[answerIndex];

    raw[question.a] += selected.a;
    raw[question.b] += selected.b;
  });

  const getPercent = (a, b) => {
    const total = raw[a] + raw[b];
    if (total === 0) return 0;
    return Math.round((raw[a] / total) * 100);
  };

  const values = {
    open: getPercent("open", "cool"),
    harmony: getPercent("harmony", "individual"),
    stable: getPercent("stable", "stimulus"),
    light: getPercent("light", "rich")
  };

  const setMeter = (id, textId, value) => {
    const fill = document.getElementById(id);
    const text = document.getElementById(textId);

    if (fill) fill.style.height = `${value}%`;
    if (text) text.textContent = value;
  };

  setMeter("blendOpen", "blendOpenText", values.open);
  setMeter("blendHarmony", "blendHarmonyText", values.harmony);
  setMeter("blendStable", "blendStableText", values.stable);
  setMeter("blendLight", "blendLightText", values.light);

  const blendLab = document.querySelector(".blend-lab");

  if (blendLab) {
    blendLab.classList.remove("is-bump");
    void blendLab.offsetWidth;
    blendLab.classList.add("is-bump");
  }
}
const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    siteNav.classList.toggle("is-open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
    });
  });
}
function showResultLoading(scores, resultType) {
  const resultLoading = document.getElementById("resultLoading");
  const resultSection = document.getElementById("result");
  const resultLoadingText = document.getElementById("resultLoadingText");
  const pickBottles = document.querySelectorAll(".loading-pick-bottle");

  if (!resultLoading) {
    renderResult(scores, resultType);
    return;
  }

  if (resultSection) {
    resultSection.classList.add("hidden");
  }

  resultLoading.classList.remove("hidden");
  resultLoading.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  pickBottles.forEach((bottle) => {
    bottle.classList.remove("is-picked");
  });

  if (resultLoadingText) {
    resultLoadingText.textContent = "棚の奥から、あなたに近い一滴を探しています...";
  }

  setTimeout(() => {
    if (pickBottles.length > 0) {
      pickBottles[2].classList.add("is-picked");
    }

    if (resultLoadingText) {
      resultLoadingText.textContent = "あなたのシロップが見つかりました。";
    }
  }, 1200);

  setTimeout(() => {
    resultLoading.classList.add("hidden");
    renderResult(scores, resultType);
  }, 2600);
}
function updateStampCard() {
  const stamps = document.querySelectorAll("#stampGrid span");
  const answeredCount = Object.keys(answers).length;

  stamps.forEach((stamp, index) => {
    if (index < answeredCount) {
      stamp.classList.add("is-stamped");
    } else {
      stamp.classList.remove("is-stamped");
    }
  });
}
function updateIngredientCards() {
  const cards = document.querySelectorAll("#ingredientCards span");
  const answeredCount = Object.keys(answers).length;

  const visibleCount = Math.min(
    cards.length,
    Math.ceil((answeredCount / 20) * cards.length)
  );

  cards.forEach((card, index) => {
    if (index < visibleCount) {
      card.classList.add("is-collected");
    } else {
      card.classList.remove("is-collected");
    }
  });
}
const resultDetails = {
  "キャラメルシロップ": {
    loveStyleTitle: "やさしい甘さが後味に残る人",

    basicLove:
      "キャラメルシロップのあなたは、出会った瞬間に強烈な印象を残すというより、時間が経ってから「あの人、なんかよかったな」と思い出されるタイプです。派手な言葉や大きなアピールで人を惹きつけるのではなく、さりげない気遣い、空気を読む優しさ、相手が困らないように先回りするところで、じわじわと心に残ります。一緒にいる時は自然すぎて気づかれにくいのに、離れたあとに「あの人がいると安心していたんだ」と思わせる。そんな、あとから効いてくる甘さを持っています。",

    romanceCharm:
      "恋愛では、あなたの魅力は「ちゃんと見てくれる安心感」として出ます。相手が言葉にしなかった疲れに気づいたり、無理に聞き出さずにそばにいたり、必要な時にだけやさしく声をかけたりします。強引に踏み込むのではなく、相手が自分から心を開ける温度を作れるところが大きな魅力です。ただし、あなたの優しさは静かなので、鈍い相手には当たり前にされやすいところがあります。あなたの気遣いにちゃんと気づいてくれる人といる時、キャラメルの甘さは一番濃くなります。",

    loveBehavior:
      "好きな人ができても、あなたはわかりやすく一直線にアピールするより、相手の様子を見ながら少しずつ距離を縮めるタイプです。相手が話しやすい空気を作ったり、困っていそうな時にさりげなく助けたり、相手の負担にならない形で好意を見せます。好きな人ほど「重いと思われたくない」「迷惑になりたくない」と考えて、一歩引いてしまうこともあります。でも、焦らず信頼を積み重ねるほど、あなたの恋は深く伝わります。",

    addictivePoint:
      "キャラメルシロップの沼らせポイントは、「いなくなってから存在の大きさに気づかせるところ」です。あなたはその場で強く主張しないぶん、相手の生活に静かに入り込みます。会話のテンポ、気遣いの自然さ、否定せずに聞いてくれる感じ。そういうものが日常になったあとで、相手はあなたの特別さに気づきます。忘れようとしても、ふとした瞬間に「あの人はちゃんと見てくれていた」と思い出されるタイプです。",

    weakPoint:
      "あなたが苦手なのは、気遣いを当たり前にされる恋愛です。ありがとうがない、気づいてもらえない、こちらの疲れは見てもらえない。そんな関係では、あなたの優しさが少しずつ削られてしまいます。また、急に距離を詰められすぎる恋愛も得意ではありません。心を開くまでに時間が必要なタイプなので、急かされるほど本音を出しにくくなります。軽いノリで雑に扱われることにも、実はかなり傷つきやすいです。",

    advice:
      "あなたが大切にされるために必要なのは、「察してくれる人を待ちすぎないこと」です。あなたは人の小さな変化に気づけるぶん、相手にも同じように気づいてほしくなることがあります。でも、あなたほど細やかに見られる人ばかりではありません。本当は嬉しかったこと、本当は少し傷ついたこと、本当は手伝ってほしいこと。そういう気持ちを少しずつ言葉にしていいです。あなたの優しさは、黙って我慢することでしか守れないものではありません。",

    impression:
      "周りから見たあなたは、落ち着いていて、やさしくて、信頼できる人です。目立つ中心人物というより、「気づけばそばにいてくれる人」「話すと安心する人」「困った時に思い出す人」という印象を持たれやすいです。ただし、何でも受け止めてくれそうに見られやすいぶん、相手が甘えすぎることもあります。あなたはただ優しいだけではなく、大切にしたい相手をちゃんと選べる人です。",

    distance:
      "あなたは、一気に距離を詰めるより、少しずつ信頼を重ねる方が向いています。最初から全てを話すのではなく、相手の言葉や態度を見ながら、「この人なら大丈夫かも」と感じた分だけ心を開いていきます。急かされると心を閉じやすいけれど、待ってくれる人にはゆっくり甘さを返していく。キャラメルシロップの距離感は、弱火でゆっくり温めて、少しずつ香ばしさを増していくようなものです。",

    dropPhrase:
      "気づかれない優しさほど、あとから深く思い出される。あなたは、誰かの心を一瞬で奪うより、日常の中に静かに残る人です。でも、その優しさを誰にでも渡しすぎなくていい。あなたの甘さは、当たり前に消費されるものではなく、大切に味わってくれる人に届くべきものです。"
  },
    "アールグレイシロップ": {
    loveStyleTitle: "静かな香りで記憶に残る人",

    basicLove:
      "アールグレイシロップのあなたは、わかりやすく距離を詰めるより、少し離れたところから相手の心に香りを残すタイプです。明るく甘える、すぐに打ち解ける、誰とでも同じ温度で話すというより、自分の空気や言葉の選び方で人を惹きつけます。近づきやすさだけで勝負するタイプではなく、「もっと知りたい」「この人の内側には何があるんだろう」と思わせる余白が魅力です。あなたの愛され方は、勢いで始まるものではなく、ふとした一言や雰囲気があとから残る形で広がっていきます。相手は最初、あなたの全部をすぐには掴めないかもしれません。でもその掴めなさが、軽さではなく品として伝わるところに、アールグレイシロップらしさがあります。",

    romanceCharm:
      "恋愛でのあなたの魅力は、落ち着いた距離感と、言葉にならない雰囲気の美しさです。恋愛においても、あなたは勢いだけで好きになったり、感情を全部そのまま出したりするより、自分の中でゆっくり確かめながら相手を見ます。その慎重さは冷たさではなく、大切なものを雑に扱いたくない気持ちから来ています。相手からすると、あなたの一言一言にはどこか余韻があります。何気ない会話でも、言葉選びが丁寧だったり、相手の世界をすぐに壊さずに受け止めたりするので、「この人には軽い気持ちで踏み込めない」と思わせます。そこが少し近寄りがたい魅力にもなり、同時に深く知りたいと思わせるポイントにもなります。",

    loveBehavior:
      "好きな人ができても、あなたはわかりやすく好意を押し出すタイプではありません。むしろ、好きだからこそ相手との距離感をかなり慎重に測ります。急に距離を詰めて相手を驚かせたくないし、自分の気持ちを雑に扱われるのも嫌なので、最初は少し控えめに見えることが多いです。あなたの好意は、会話の中の細かい反応や、相手の考え方をちゃんと覚えているところに出ます。好きな人のセンス、価値観、言葉の癖、ものの見方。そういう部分に興味を持ち、静かに見ています。ただし、自分から踏み込みすぎるのは苦手なので、相手から丁寧に近づいてくれると安心しやすいです。雑な勢いやノリではなく、ちゃんとあなたのペースを見てくれる人に心を開きます。",

    addictivePoint:
      "アールグレイシロップの沼らせポイントは、「簡単に全部を見せないところ」です。あなたは意図的にミステリアスを演じているわけではありません。ただ、自分の世界を大切にしているので、誰にでもすぐ内側を見せるわけではないのです。そのため、相手はあなたと話すほど、もっと知りたくなります。表面だけを見ると落ち着いているのに、言葉の端に独特の感性が見えたり、ふとした瞬間にやわらかい本音が出たりする。そのギャップが、相手の記憶に残ります。あなたに深く惹かれる人は、派手な甘さではなく、静かに立ちのぼる香りのような魅力に捕まります。近づきすぎると逃げてしまいそうで、でも離れると気になる。そんな余白が、あなたの沼らせ力です。",

    weakPoint:
      "あなたが苦手なのは、雑に踏み込まれる恋愛です。まだ心を開いていない段階で、強引に本音を聞き出されたり、軽いノリで距離を詰められたりすると、あなたは一気に引いてしまいます。特に苦手なのは、雑ないじり、乱暴な言葉、空気を読まない踏み込みです。相手に悪気がなくても、自分の大切にしている世界を荒らされたように感じると、心の扉を閉めます。また、あなたの静かさを「冷たい」「何を考えているかわからない」と雑に決めつけられるのも苦手です。本当は何も感じていないわけではなく、簡単に見せないだけ。そこを理解されない恋愛では、あなたの魅力は出にくくなります。",

    advice:
      "あなたが大切にされるためには、自分のペースを守りながらも、少しだけわかりやすいサインを出すことが大事です。あなたは相手に踏み込まれすぎるのが苦手ですが、何も見せないままだと、相手はどう近づけばいいのかわからなくなることがあります。全部を話す必要はありません。ただ、嬉しい時に嬉しいと言う、嫌なことはやんわり伝える、もっと話したい相手には少しだけ自分から余白を渡す。そういう小さなサインが、関係を進めるきっかけになります。あなたの魅力は、無理に明るく振る舞うことで増えるものではありません。静かなままでいい。ただ、その静けさの中にある温度を、信頼できる相手には少しずつ見せていくことが、愛される近道になります。",

    impression:
      "周りから見たあなたは、落ち着いていて、雰囲気があり、どこか品のある人です。大人数の中でわかりやすく盛り上げるというより、ふとした言葉や佇まいで印象を残します。人によっては、最初は少し近寄りがたく感じるかもしれません。でも、それは冷たさではなく、あなたが自分の世界を雑に開かないからです。関わるほど、あなたの丁寧さや感性の深さに気づく人が増えていきます。特に、言葉の選び方や考え方をちゃんと見てくれる人からは、強く惹かれやすいです。一方で、テンションだけで距離を縮めたい人には、あなたの魅力が伝わりにくいこともあります。あなたは万人にわかりやすく愛されるというより、わかる人に深く残るタイプです。",

    distance:
      "あなたは、仲良くなるまでに少し時間が必要なタイプです。初対面から全部を開示するより、相手の言葉遣い、距離感、こちらへの触れ方を見ながら、少しずつ心を開きます。丁寧に近づいてくれる人には安心しますが、急に馴れ馴れしくされたり、軽く扱われたりすると、表面では普通にしていても内心では距離を置きます。あなたにとって心地よい距離感は、近すぎず遠すぎないところから始まります。会話を重ねる中で、相手があなたのペースを尊重してくれるとわかるほど、だんだん柔らかい部分を見せられるようになります。アールグレイシロップの関係は、強火で煮立たせるものではなく、香りが移るまで静かに待つものです。",

    dropPhrase:
      "静かな人ほど、心の奥に香りを残す。あなたは、誰にでもわかりやすく甘い人ではないかもしれません。でも、あなたの言葉や空気を大切に受け取ってくれる人にとって、その余韻は簡単には忘れられないものになります。無理に近づきやすくならなくていい。あなたの魅力は、丁寧に味わう人にだけ深く届く、上品な香りのようなものです。"
  },
    "ラムレーズンシロップ": {
    loveStyleTitle: "秘密めいた甘さで深く残る人",

    basicLove:
      "ラムレーズンシロップのあなたは、簡単には全部を見せないことで人を惹きつけるタイプです。最初からわかりやすく甘い人ではなく、話すほど、関わるほど、少しずつ奥行きが出てきます。明るく単純な印象でまとめられるのが苦手で、自分の中にある複雑さや余白を大切にしています。あなたの愛され方は、一目で全てが伝わるものではありません。むしろ、相手が「もっと知りたい」と思ったところから始まります。何を考えているのか、どこまで本音なのか、なぜその言葉を選んだのか。そういう余白が、相手の心に長く残ります。恋愛でも、軽く好かれるより、深く理解されることを求めるタイプです。誰にでも同じように開くのではなく、時間をかけて信頼した相手にだけ、濃くてやわらかい甘さを見せます。",

    romanceCharm:
      "恋愛でのあなたの魅力は、秘密めいた奥行きと、簡単には手に入らない特別感です。あなたは、好きになったからといってすぐに全てをさらけ出すタイプではありません。むしろ、相手を見ながら、少しずつ自分の内側を渡していきます。その慎重さが、相手には不思議な魅力として映ります。軽く話しているだけのようで、ふとした瞬間に深い考えが見えたり、冗談の中に本音がにじんだりする。そういうところに相手は惹かれます。あなたの恋愛の魅力は、わかりやすい可愛さよりも、もっと奥にある濃さです。簡単に理解できないからこそ、相手は何度もあなたのことを考えます。あなたのことを深く知りたいと思う人ほど、その余韻に捕まっていきます。",

    loveBehavior:
      "好きな人ができても、あなたは一直線に好意を見せるより、まず相手をよく見ます。どんな言葉を使う人なのか、こちらの余白を尊重できる人なのか、深い話を雑に扱わない人なのか。そういうところをかなり慎重に見ています。好きだからこそ、簡単には心を開きません。軽く踏み込まれて傷つくくらいなら、最初は少し距離を置いていたいと思うこともあります。あなたの好意は、急な甘さではなく、少しずつ濃くなる形で出ます。最初は何気ない会話だけだったのに、だんだん本音を少し混ぜるようになったり、相手にだけ見せる表情が増えたりします。開くまでに時間はかかるけれど、一度心を許すとかなり深く、大切にするタイプです。",

    addictivePoint:
      "ラムレーズンシロップの沼らせポイントは、「もっと知りたいのに、すぐには全部を見せてくれないところ」です。あなたは自分を隠しているというより、自分の全部をすぐに見せる必要がないと思っている人です。そのため、相手からすると、近づいたと思ったらまだ知らない部分があり、理解したと思ったらまた違う一面が見える。そんな奥行きがあります。あなたに惹かれる人は、単純な安心感だけではなく、心の奥に触れたいという気持ちを刺激されます。浅い関係では見えない濃さがあるからこそ、相手はあなたを簡単に忘れられません。何度も思い返したくなる言葉、ふとした沈黙、少しだけ見えた本音。そういう断片が、相手の中でじわじわと強い余韻になります。",

    weakPoint:
      "あなたが苦手なのは、浅く決めつけられる恋愛です。「こういうタイプでしょ」「意外と単純だよね」「何考えてるかわからない」みたいに、軽くまとめられると心の扉を閉めたくなります。あなたは自分の中にある複雑さや矛盾を、雑に処理されたくありません。また、詮索されすぎる関係も苦手です。興味を持たれること自体は嬉しいのに、無理に暴かれようとすると逃げたくなる。ここがラムレーズンシロップの繊細なところです。放っておかれすぎるのも寂しいけれど、踏み込まれすぎるのも嫌。あなたには、距離感を丁寧に扱ってくれる相手が必要です。軽い関係やその場だけの盛り上がりでは、あなたの深い魅力は出にくくなります。",

    advice:
      "あなたが大切にされるためには、自分の余白を守りながらも、相手に渡していい部分を少しずつ選ぶことが大切です。全部を話す必要はありません。でも、何も見せないままだと、相手はどう近づけばいいのかわからなくなります。あなたに合うのは、無理にこじ開けてくる人ではなく、話したくなるまで待ってくれる人です。ただ、その相手に対しては、ほんの少しだけ自分から扉を開けてみてもいいです。「これはまだ話せないけど、聞いてくれて嬉しい」「もう少し仲良くなったら話したい」そんなふうに、境界線ごと伝えられると、あなたはもっと楽に愛されます。深く理解されたいなら、深さにたどり着くための小さな入口を作ること。それがあなたの恋をやわらかく進める鍵です。",

    impression:
      "周りから見たあなたは、どこか掴めなくて、話すほど印象が濃くなる人です。最初は落ち着いて見えたり、少し距離があるように感じられたりするかもしれません。でも、関わっていくうちに、簡単には言葉にできない奥行きがあることに気づかれます。あなたは、みんなに広く浅く好かれるというより、深く刺さる人には強く残るタイプです。軽い会話の中にも、独特の感性や本音の気配があり、それが相手の記憶に残ります。一方で、あなたの静けさや秘密めいた部分を誤解されることもあります。何も考えていないわけでも、心を閉ざしているわけでもなく、ただ見せる相手とタイミングを選んでいるだけ。そこを理解してくれる人に、あなたの魅力は深く届きます。",

    distance:
      "あなたは、仲良くなるまでにかなり慎重なタイプです。最初から近すぎる距離で来られるより、少し離れたところから互いを知っていく方が安心します。会話を重ねる中で、相手があなたの沈黙や余白をどう扱うかを見ています。待てる人なのか、決めつけない人なのか、深い話を茶化さない人なのか。そこがわかるまでは、なかなか心の中心までは入れません。でも一度「この人なら大丈夫」と思えると、関係は一気に濃くなります。あなたにとって距離感は、ただ近ければいいものではありません。近づくなら丁寧に、踏み込むなら品よく。ラムレーズンシロップの関係は、時間をかけて香りが移り、あとから深く味が出るものです。",

    dropPhrase:
      "すぐに見えない甘さほど、深く知った人の記憶に残る。あなたは、簡単にわかりやすく愛される人ではないかもしれません。でも、あなたの奥行きを大切に見てくれる人にとって、その余韻はとても濃く、忘れにくいものになります。無理に全部を見せなくていい。あなたの秘密や余白は、誰かを遠ざける壁ではなく、本当に近づく価値のある人を選ぶための扉です。"
  },
    "メープルシロップ": {
    loveStyleTitle: "帰りたくなるぬくもりを持つ人",

    basicLove:
      "メープルシロップのあなたは、派手な刺激よりも、長く一緒にいるほど安心感が増していくタイプです。出会ってすぐに強烈なインパクトを残すというより、気づいたら相手の日常に自然となじんでいる人です。あなたがそばにいると、空気が少し落ち着いたり、焦っていた気持ちがゆっくり整ったりします。恋愛でも、ドラマチックな駆け引きより、変わらずそこにいてくれる安心感で愛されます。特別なイベントで目立つより、何気ない日常の中で「この人がいると大丈夫」と思わせる存在です。あなたの愛され方は、強く奪うものではなく、静かに居場所になるもの。時間をかけて関わるほど、相手の中に深く根を張っていくぬくもりがあります。",

    romanceCharm:
      "恋愛でのあなたの魅力は、落ち着いた包容力と、生活に寄り添う優しさです。相手が疲れている時に無理に元気づけようとするのではなく、そっとペースを合わせたり、必要なことを自然に手伝ったりします。あなたの優しさは、華やかな言葉より行動に出やすいです。約束を守る、相手の負担を減らす、困っている時に現実的に支える。そういう積み重ねが、恋愛では大きな安心感になります。相手はあなたといるうちに、好きという感情だけではなく、「この人といると生活がやわらかくなる」と感じるようになります。ただし、あなたの安定感は当たり前にされやすいところもあります。感謝されないまま支え続けると、心の奥で少しずつ疲れてしまいます。",

    loveBehavior:
      "好きな人ができると、あなたは相手を落ち着かせたり、支えたりする方向に好意が出やすいです。派手にアピールするより、相手が困っている時に助ける、話を聞く、無理をしていないか気にする。そんなふうに、日常の中で少しずつ大切にします。あなたは頼られると嬉しいタイプですが、好きな人相手だと特にその傾向が強くなります。相手が安心してくれるなら、自分にできることをしたいと思うでしょう。ただ、好きだからこそ頑張りすぎてしまうこともあります。本当は自分も疲れているのに、相手を優先してしまったり、平気なふりをしてしまったり。あなたの愛情は深くて安定していますが、自分の気持ちを後回しにしすぎないことも大切です。",

    addictivePoint:
      "メープルシロップの沼らせポイントは、「戻ってきたくなる安心感」です。あなたは相手を激しく振り回すタイプではありません。でも、一緒にいると心が落ち着く、何気ない会話が心地いい、疲れた時に思い出す。そういう形で相手の中に残ります。あなたに大切にされた人は、あとからその安定感の価値に気づきます。刺激的な相手に惹かれたとしても、ふとした時にあなたのぬくもりを思い出すことがあります。無理に飾らなくても、変わらずそこにある優しさ。小さな約束を守る誠実さ。頼った時に受け止めてくれる落ち着き。そういうものが、相手にとって帰る場所のようになります。メープルシロップは、恋を一瞬で燃やすより、長く忘れられない居場所になるタイプです。",

    weakPoint:
      "あなたが苦手なのは、安心感を当然のものとして扱われる恋愛です。あなたは我慢強く、多少のことではすぐに文句を言わないかもしれません。でも、それは何も感じていないという意味ではありません。感謝されない、頼られっぱなし、こちらの気持ちは後回し。そんな関係が続くと、あなたは表面では穏やかでも、内側では少しずつ距離を置き始めます。また、急な変化や強い刺激ばかりを求められる関係も疲れやすいです。テンションの上がり下がりが激しすぎたり、相手の気分に振り回されたりすると、あなたの良さである安定感が消耗してしまいます。あなたに必要なのは、安心を一方的に与える関係ではなく、あなた自身も安心していられる関係です。",

    advice:
      "あなたが大切にされるためには、「自分が支える側でいなきゃ」と思いすぎないことが大事です。あなたは頼られると力を発揮する人ですが、恋愛は片方だけが支えるものではありません。相手のために動ける優しさは魅力ですが、その優しさをずっと無償で差し出し続けると、いつか苦しくなります。小さな疲れや不満をため込まず、早めに言葉にしていいです。「これは少し大変だった」「私もこうしてくれると嬉しい」と伝えることは、わがままではありません。むしろ、長く安定した関係を作るために必要なことです。あなたは大きなサプライズより、小さな約束や日々の丁寧さを大切にするタイプ。だからこそ、同じようにあなたの日常を大事にしてくれる人を選んでください。",

    impression:
      "周りから見たあなたは、落ち着いていて、頼りになって、そばにいると安心できる人です。派手に目立つタイプではなくても、長く関わるほど信頼されます。あなたがいると場が安定したり、誰かが困っている時に自然と頼られたりすることが多いはずです。恋愛でも、最初から強烈にドキドキさせるというより、「気づいたらこの人に話したくなっている」「この人には安心して頼れる」と思われやすいです。ただし、しっかりして見えるぶん、弱音を吐かない人だと思われることもあります。本当はあなたにも甘えたい時や、疲れている時があります。周りに安心感を与えられる人だからこそ、自分も安心できる場所を持つことが大切です。",

    distance:
      "あなたは、急に距離を詰めるより、時間をかけて信頼を積み重ねる方が向いています。最初から燃え上がるような関係より、何度も会話を重ねたり、小さな約束を守り合ったりする中で、少しずつ心が近づいていきます。相手が誠実かどうか、落ち着いて向き合える人かどうか、あなたはかなり大切に見ています。軽い言葉より行動を見ますし、その場のテンションより継続性を信じます。あなたにとって心地よい距離感は、無理に盛り上げなくても一緒にいられる関係です。沈黙が気まずくない、急かされない、でも必要な時にはちゃんと手を伸ばしてくれる。そんな相手に対して、あなたはゆっくりと深い優しさを見せていきます。",

    dropPhrase:
      "変わらずそばにあるぬくもりほど、失ってから大きさに気づく。あなたは、誰かの日常に静かに安心を灯す人です。派手な言葉より、守られた約束。大きな刺激より、何度も重なる信頼。あなたの愛は、時間をかけて甘くなるメープルのように、ゆっくり相手の心にしみ込んでいきます。でも、そのぬくもりを当たり前にされなくていい。あなたが帰る場所になるなら、あなたにとっても帰れる場所であるべきです。"
  },
    "ミルクシロップ": {
    loveStyleTitle: "やわらかく相手を包み込む人",

    basicLove:
      "ミルクシロップのあなたは、相手の心をやわらかくする愛され方をするタイプです。強く目立つことで惹きつけるというより、一緒にいる人の緊張をほどき、話しやすい空気を作ることで自然と好かれていきます。相手の言葉を否定せずに受け止めたり、その場の空気に合わせたり、誰かが安心できるように自分の温度を調整したりするのがとても上手です。あなたがいると、場が丸くなります。恋愛でも、相手にとってあなたは「気を張らずにいられる人」になりやすいです。好きだからといって無理に押すのではなく、相手が自分らしくいられるように包み込む。そのやわらかさが、ミルクシロップの一番の魅力です。",

    romanceCharm:
      "恋愛でのあなたの魅力は、安心して本音を話せる雰囲気です。相手が弱音を吐いた時、あなたはすぐに否定したり、正論で押し返したりしません。まず受け止めて、相手の気持ちが落ち着くまでそばにいようとします。そのため、相手はあなたの前では無理に強がらなくていいと感じやすいです。あなたの優しさは、派手な言葉よりも、態度や空気に出ます。話を最後まで聞く、相手のペースに合わせる、傷つけない言葉を選ぶ。そういう細かいところに、恋愛での魅力がにじみます。ただし、受け止める力が強いぶん、相手の感情を抱え込みすぎることもあります。あなた自身も甘えられる関係でこそ、そのやさしさは長く続きます。",

    loveBehavior:
      "好きな人ができると、あなたは相手に合わせる形で好意を見せやすいです。相手が話したい時は聞き役になり、疲れていそうな時は無理に明るくさせず、相手が安心できるようにそっと寄り添います。自分の気持ちを強く押し出すより、相手が心地よくいられることを優先しがちです。だからこそ、好きな人からは「一緒にいて楽」「話しやすい」「落ち着く」と思われやすいでしょう。ただ、あなたは好きな人ほど、自分の希望を後回しにしてしまうことがあります。本当は会いたい、本当は寂しい、本当はもっと大切にされたい。そう思っていても、相手に負担をかけたくなくて飲み込んでしまう。あなたの恋はやさしいけれど、やさしさだけで自分を消さないことが大切です。",

    addictivePoint:
      "ミルクシロップの沼らせポイントは、「気づいたら戻りたくなるやさしさ」です。あなたは相手を強く振り回すタイプではありません。でも、相手が疲れた時、落ち込んだ時、誰にもわかってもらえないと感じた時に、ふと思い出される人です。あなたと話すと角が取れる。あなたの前では少し素直になれる。あなたに受け止めてもらった記憶が、相手の中でじわじわと大きくなっていきます。あなたの魅力は、強烈な刺激ではなく、心をほどく安心感です。一度そのやわらかさに慣れた相手は、他の人といる時にあなたの存在の大きさに気づくことがあります。ミルクシロップは、相手の味を消すのではなく、苦さや不安をまろやかにして、また前を向けるようにする人です。",

    weakPoint:
      "あなたが苦手なのは、強い言葉や圧のある恋愛です。怒鳴られる、急かされる、感情をぶつけられ続ける、こちらの気持ちを聞かずに決めつけられる。そういう関係では、あなたはどんどん自分の本音をしまい込んでしまいます。また、あなたの優しさを都合よく使われる関係も苦手です。何でも許してくれる、いつでも聞いてくれる、多少雑にしても離れない。そう思われると、あなたは表面では笑っていても、内側でかなり疲れていきます。あなたは受け止め上手ですが、何でも受け入れられるわけではありません。本当は、自分の気持ちも同じくらい大切に扱ってほしいタイプです。優しさを利用される恋愛では、ミルクシロップの魅力はだんだん薄まってしまいます。",

    advice:
      "あなたが大切にされるためには、「私はどうしたい？」を自分にも聞いてあげることが必要です。あなたは相手の気持ちを読むのが上手いぶん、自分の気持ちを後回しにしがちです。でも、恋愛は相手のためだけに形を変え続けるものではありません。あなた自身の寂しさ、嬉しさ、不安、望みも、ちゃんと関係の中に置いていいものです。最初は小さなことで大丈夫です。「今日は少し話したい」「それはちょっと悲しかった」「こうしてくれると嬉しい」そんなふうに、やわらかく自分の希望を出してみてください。あなたの魅力は、相手に合わせられるところだけではありません。安心できる相手の前で、自分の味を少しずつ出していけるところにもあります。受け止めるだけでなく、受け止めてもらうことも、あなたには必要です。",

    impression:
      "周りから見たあなたは、やさしくて、話しやすくて、一緒にいると安心する人です。人の話を自然に聞けるので、気づいたら相談されることも多いでしょう。相手のテンションに合わせたり、場の空気を丸くしたりするのが上手なので、周囲からは「この人がいると落ち着く」と思われやすいです。ただし、そのやわらかさのせいで、何を考えているのか見えにくいと思われることもあります。あなたが本音を出さないまま相手に合わせ続けると、周りはあなたが本当に平気なのか気づけません。本当のあなたは、ただの聞き役ではありません。ちゃんと感じているし、ちゃんと傷つくし、ちゃんと望みがあります。そこまで見てくれる人に出会うと、あなたはもっと安心して自分らしくいられます。",

    distance:
      "あなたは、相手との距離を自然に合わせられるタイプです。近づきすぎて相手を驚かせるより、相手が心地よくいられる距離を探しながら関係を深めます。そのため、最初から強く踏み込む恋愛より、ゆっくり話せる関係の方が向いています。相手が少しずつ心を開いてくれると、あなたも安心して自分を出せるようになります。ただし、相手に合わせるのが上手すぎて、自分の距離感を見失うこともあります。本当はもう少し近づきたいのに遠慮したり、本当は少し離れたいのに合わせ続けたり。あなたにとって大切なのは、相手にとっての心地よさだけでなく、自分にとっての心地よさも見ることです。ミルクシロップの関係は、混ざり合うことでやさしくなるもの。でも、混ざるためには、あなた自身の味も必要です。",

    dropPhrase:
      "誰かをやわらかくできる人ほど、自分もやさしく包まれていい。あなたは、相手の不安や苦さをまろやかにする力を持っています。でも、その力は無限ではありません。あなたのやさしさは、消費されるためではなく、同じくらい大切に返されるためにあります。受け止めるだけの恋ではなく、あなたも受け止めてもらえる恋を選んでください。"
  },
    "ハニーバターシロップ": {
    loveStyleTitle: "あたたかい甘さで心をほどく人",

    basicLove:
      "ハニーバターシロップのあなたは、明るさとぬくもりの両方で人を惹きつけるタイプです。ただ優しいだけでも、ただ元気なだけでもなく、相手の心をふっと軽くする甘さがあります。あなたがいると、場の空気が少しやわらかくなったり、緊張していた人が笑いやすくなったりします。恋愛でも、相手にとってあなたは「一緒にいると前向きになれる人」になりやすいです。押しつけがましい励ましではなく、自然に気持ちを温めることができます。あなたの愛され方は、安心感の中に小さな高揚感があるところが特徴です。落ち着くだけではなく、少し元気をもらえる。甘いだけではなく、どこか頼もしい。そんなバランスが、ハニーバターシロップの魅力です。",

    romanceCharm:
      "恋愛でのあなたの魅力は、相手を明るい方へ連れていけるところです。落ち込んでいる相手に対して、無理やりポジティブを押しつけるのではなく、隣で同じ温度になってから、少しずつ気持ちを上げていくことができます。あなたと話していると、深刻だったことが少し軽く感じられたり、明日もなんとかなるかもと思えたりする。そういう力があります。恋愛において、これはかなり大きな魅力です。相手はあなたといることで、自分の弱さを責めすぎずに済みます。ただし、あなたは相手を元気にする役を自然に引き受けやすいぶん、自分が落ち込んでいる時に甘え下手になることもあります。いつも明るくいなきゃと思いすぎないことが、恋愛を長く心地よく続ける鍵になります。",

    loveBehavior:
      "好きな人ができると、あなたは相手を喜ばせたい気持ちが強く出やすいです。相手が笑ってくれること、安心してくれること、少しでも元気になってくれることが嬉しくて、自然と行動に出ます。軽い冗談で空気を和ませたり、相手の好きなものを覚えていたり、疲れている時にさりげなく気分を変えようとしたりします。あなたの好意は、重たく迫るというより、あたたかく包みながら少し明るくする形で伝わります。ただ、好きな人に対してはサービス精神が出すぎることもあります。本当は寂しいのに明るく振る舞ったり、不安なのに相手を安心させる側に回ったりしがちです。あなたの恋は、相手を元気にするだけでなく、あなた自身も素直に甘えられることで、もっと深く安定していきます。",

    addictivePoint:
      "ハニーバターシロップの沼らせポイントは、「一緒にいると気持ちがやわらかく前向きになるところ」です。あなたは相手にとって、ただ楽しいだけの人ではありません。疲れている時に会いたくなる、落ち込んだ時に声を聞きたくなる、何でもない日を少し良い日に変えてくれる。そんな存在になりやすいです。あなたの甘さには、心をあたためる力があります。さらに、バターのようなまろやかさもあるので、相手はあなたの前で無理に強がらなくていいと感じます。あなたに惹かれる人は、あなたの明るさだけでなく、その奥にある思いやりに気づいた時に深くハマります。表面はやわらかくて親しみやすいのに、ちゃんと相手を見ている。その安心感と高揚感の組み合わせが、忘れにくい余韻になります。",

    weakPoint:
      "あなたが苦手なのは、自分ばかりが明るくしなければいけない恋愛です。相手が落ち込んでいる時に支えることはできますが、それが当たり前になりすぎると疲れてしまいます。いつも励ます側、いつも笑わせる側、いつも空気を良くする側になっていると、あなた自身の弱音を出す場所がなくなります。また、あなたの親しみやすさを軽く見られることも苦手です。明るいから傷つかない、優しいから何を言っても許してくれる、と思われると心が削られます。あなたは雰囲気を良くできる人ですが、何でも受け流せる人ではありません。恋愛では、あなたの明るさの裏にある繊細さや努力まで見てくれる相手でないと、だんだん苦しくなってしまいます。",

    advice:
      "あなたが大切にされるためには、元気な自分だけを見せようとしすぎないことが大切です。あなたは人を喜ばせるのが上手で、相手が笑ってくれると自分も嬉しくなります。でも、恋愛ではあなたがずっと相手を照らす側でいる必要はありません。落ち込む日があっていいし、何もできない日があっていいし、誰かに甘えたい日があっていいです。むしろ、そういう部分を見せられる相手こそ、あなたを本当に大切にしてくれる人です。明るさはあなたの魅力ですが、明るくない時のあなたにも価値があります。相手に何かを与えられる時だけ愛されるのではなく、ただそこにいるだけでも大事にされる関係を選んでください。あなたの甘さは、無理して作るものではなく、安心できる場所で自然に溶け出すものです。",

    impression:
      "周りから見たあなたは、やわらかくて親しみやすく、場を明るくしてくれる人です。話しかけやすく、表情や反応にも温度があるので、人から好かれやすい雰囲気を持っています。あなたがいると、空気が少し軽くなったり、重たい話でも受け止めやすくなったりします。恋愛でも、相手からは「一緒にいると楽しい」「でもちゃんと安心もできる」と思われやすいでしょう。ただし、親しみやすさがあるぶん、深く考えていない人だと誤解されることもあります。本当は相手の変化に気づいていたり、自分なりに空気を読んでいたり、言葉を選んでいたりするのに、それが自然すぎて見えにくいのです。あなたはただ明るい人ではなく、誰かの心を温めるために、無意識にたくさんの調整ができる人です。",

    distance:
      "あなたは比較的、人との距離をやわらかく縮められるタイプです。最初から壁を作りすぎるより、相手が話しやすい空気を作りながら、自然と距離を近づけていきます。ただ、誰にでも同じように深く入っていくわけではありません。明るく接することはできても、本当に心を許す相手はちゃんと選んでいます。恋愛では、楽しく話せることも大事ですが、それ以上に、自分が無理をしなくていいかどうかを見ています。あなたにとって心地よい距離感は、笑い合えるだけでなく、疲れた時に静かにいられる関係です。相手があなたの明るさだけを求めるのではなく、何もできない日も受け止めてくれるとわかった時、あなたはより深く心を開けます。ハニーバターシロップの距離感は、楽しい会話から始まり、少しずつ安心に変わっていくものです。",

    dropPhrase:
      "誰かを笑顔にできる人ほど、自分の寂しさも大切にしていい。あなたは、相手の心をあたためる甘さを持っています。でも、その甘さは無理に作り続けるものではありません。明るいあなたも、少し疲れたあなたも、同じように愛されていい。あなたのぬくもりは、返ってくる場所があってこそ、もっとやさしく広がります。"
  },
  "カフェオレシロップ": {
    loveStyleTitle: "気楽さの奥に深みを隠した人",

    basicLove:
      "カフェオレシロップのあなたは、軽さと深さを自然に行き来できるタイプです。明るく話せるのに、ただ軽いだけでは終わらない。気楽な雑談もできるけれど、必要な時にはちゃんと本音や現実的な話にも触れられる。そんなバランスの良さで人を惹きつけます。恋愛でも、相手にとってあなたは「一緒にいて楽なのに、なぜか深いところまで話せる人」になりやすいです。重たくなりすぎず、でも浅く流しすぎない。その絶妙な温度が、カフェオレシロップらしい愛され方です。あなたは、相手の気持ちに合わせる力がありながら、ただ優しく受け止めるだけではなく、現実的な視点も持っています。だからこそ、相手はあなたと話すうちに、自分の気持ちが整理されていくように感じることがあります。",

    romanceCharm:
      "恋愛でのあなたの魅力は、気を使わせない自然さと、話しているうちに心の奥へ届く深さです。あなたは最初から重たい空気を作るのではなく、相手が話しやすい入り口を作るのが上手です。冗談を混ぜたり、日常の話から入ったり、相手が構えなくていい距離感を作れます。でも、そこで終わらないのがあなたの魅力です。会話の流れの中で、ふと本音に触れたり、相手が言葉にできなかった気持ちを自然に拾ったりします。相手からすると、あなたとは無理に深刻にならなくても、気づけば大事な話ができているような感覚になります。ただし、あなたは空気を読みすぎるところがあるので、相手に合わせるうちに自分の本音を隠してしまうこともあります。恋愛では、軽やかさの中に自分の気持ちもちゃんと混ぜることが大切です。",

    loveBehavior:
      "好きな人ができると、あなたは最初からわかりやすく甘えるより、まず自然に話せる関係を作ろうとします。相手が緊張しないように軽い話題を選んだり、距離が詰まりすぎないように空気を調整したりします。あなたの好意は、会話の温度に出やすいです。相手が話しやすいように受け答えしたり、ふざけた話の中に少しだけ本音を混ぜたり、相手の悩みに現実的な視点で寄り添ったりします。好きな人には、重くなりすぎずに支えたいという気持ちが強く出るでしょう。ただ、あなたは相手の反応をよく見るため、自分の本音を出すタイミングを逃しやすいです。本当は寂しい、本当はもっと踏み込んでほしい、本当は少し傷ついた。そういう気持ちを冗談っぽくごまかしてしまうことがあります。",

    addictivePoint:
      "カフェオレシロップの沼らせポイントは、「気楽なのに、気づくと深いところまで入り込んでいるところ」です。あなたは相手を圧倒するような強い甘さで惹きつけるタイプではありません。でも、話していると安心するし、笑えるし、なのに大事な話もできる。そのバランスが相手にとって癖になります。あなたといると、重たい悩みも少し飲みやすくなります。苦味を完全に消すのではなく、ちゃんと残したまま、受け止めやすい形に整えることができる人です。だから相手は、ただ慰めてほしい時だけでなく、自分の気持ちを整理したい時にもあなたを思い出します。あなたの魅力は、軽さの奥にある誠実さです。最初は気楽な相手だと思っていたのに、気づいたら誰よりも本音を話せる存在になっている。そこがカフェオレシロップの強い余韻です。",

    weakPoint:
      "あなたが苦手なのは、重すぎる感情を一方的にぶつけられ続ける恋愛です。相手の悩みを聞くことはできますし、深い話も嫌いではありません。でも、ずっと苦味だけを飲まされるような関係になると疲れてしまいます。あなたは相手の感情を整理する力がありますが、相手のすべてを背負うためにいるわけではありません。また、逆に浅すぎる関係も物足りなく感じます。楽しいだけ、ノリだけ、都合のいい会話だけで終わる関係では、あなたの深さが出せません。あなたは軽さも欲しいけれど、ちゃんと本音にも触れたいタイプです。さらに、空気を読みすぎることで、自分の本音を言えなくなる恋愛も苦手です。相手が平気そうなら自分も平気なふりをする。場を壊したくなくて笑って流す。そんなことを続けると、あなたの中に苦味がたまってしまいます。",

    advice:
      "あなたが大切にされるためには、空気を読む力を自分のためにも使うことが大切です。あなたは相手の温度や場の流れを感じ取るのが上手ですが、その力を相手に合わせるためだけに使うと疲れてしまいます。「今、自分は本当はどう感じているのか」「この軽さは心地いいのか、それともごまかしているだけなのか」を自分にも聞いてあげてください。あなたは本音を重く出さなくても伝えられる人です。だからこそ、少しずつでも自分の気持ちを会話に混ぜていいです。「ちょっと真面目な話してもいい？」「今のは少し寂しかったかも」そんなふうに、あなたらしい温度で伝えれば大丈夫です。カフェオレシロップは、苦味と甘さが混ざるから魅力が出ます。明るさだけでも、深刻さだけでもなく、あなたの本音が混ざった時に、恋愛はもっと美味しくなります。",

    impression:
      "周りから見たあなたは、話しやすくて、落ち着きもあって、なぜか相談したくなる人です。軽い話題にも乗れるので近づきやすい一方で、ふとした時に現実的な意見をくれたり、相手の気持ちを整理してくれたりします。そのため、周囲からは「気楽なのに頼れる」「ふざけられるのに、ちゃんと見てくれる」と思われやすいです。恋愛でも、最初は友達のような距離から始まりやすいかもしれません。でも、話すほど相手はあなたの深さに気づいていきます。ただし、余裕があるように見られやすいぶん、あなた自身がどれだけ空気を読んでいるかは伝わりにくいです。本当はかなり考えているのに、軽くこなしているように見られることがあります。あなたは、ただ話しやすい人ではなく、相手に合わせながらも関係の温度を丁寧に見ている人です。",

    distance:
      "あなたは、距離感のバランスを取るのが上手なタイプです。いきなり深刻になりすぎるより、まずは気楽な会話から入る方が自然に心を開けます。笑える話、日常の話、ちょっとした愚痴。そういう軽い入口があると、あなたは相手との関係を無理なく深めていけます。ただし、ずっと浅いままだと物足りなくなります。あなたにとって心地よい距離感は、楽しく話せることと、本音を少しずつ混ぜられることの両方がある関係です。相手があなたの軽さだけを求めるのではなく、真面目な部分や考えすぎるところまで受け止めてくれると、あなたは安心します。カフェオレシロップの関係は、一気に濃くするものではありません。最初は飲みやすく、でも少しずつ苦味や深みがわかってくる。そんなふうに、時間をかけて味わいが増していく距離感が合っています。",

    dropPhrase:
      "気楽に話せる人ほど、本音の入口を持っている。あなたは、相手の苦さを消すのではなく、飲みやすい形に整えられる人です。でも、誰かの苦味ばかりを引き受けなくていい。あなた自身の甘さも、苦味も、ちゃんと混ざってこそ魅力になる。軽く笑える関係の中で、深い話もできる人を選んでください。"
  },
    "ホワイトチョコシロップ": {
    loveStyleTitle: "やわらかな白さで心をほどく人",

    basicLove:
      "ホワイトチョコシロップのあなたは、やさしさと繊細さで人の心に溶け込むタイプです。強く主張して惹きつけるというより、相手の緊張をほどき、安心して話せる空気を作ることで自然と愛されていきます。あなたの魅力は、刺激的な派手さよりも、近くにいるほど感じられるやわらかさにあります。一緒にいる相手は、あなたの前で少し素直になれたり、無理に強がらなくていいと感じたりします。恋愛でも、相手の心に急に入り込むのではなく、少しずつ温度を合わせながら近づいていくタイプです。ただし、そのやさしさは弱さではありません。相手を受け止めながらも、心の奥ではちゃんと自分なりの感性やこだわりを持っています。ホワイトチョコシロップは、淡く見えて、実はしっかり甘さが残る人です。",

    romanceCharm:
      "恋愛でのあなたの魅力は、相手を安心させるやわらかさと、傷つけない言葉選びです。あなたは相手の感情に敏感で、強い言葉や雑な態度で相手を押さえつけることがあまりありません。相手が不安そうにしている時には、無理に答えを急がせず、まず気持ちを受け止めようとします。その姿勢が、恋愛では大きな安心感になります。あなたといると、相手は自分の弱い部分を責めすぎずに済みます。きれいごとだけではなく、相手が言葉にしづらい不安や寂しさにも寄り添えるところが魅力です。ただし、相手を傷つけたくない気持ちが強すぎて、自分の本音を飲み込んでしまうこともあります。あなたのやさしさは美点ですが、恋愛では自分の気持ちも同じくらい丁寧に扱うことが必要です。",

    loveBehavior:
      "好きな人ができると、あなたは相手に対してとても丁寧になります。相手がどう感じるか、どんな言葉なら安心するか、どこまで踏み込んでいいのかを自然に考えます。好きだからこそ、乱暴に距離を詰めるのではなく、相手の反応を見ながら少しずつ近づいていくタイプです。あなたの好意は、やさしい言葉や気遣いに出やすいです。相手の好きなものを覚えていたり、疲れていそうな時に無理をさせないようにしたり、ささいな変化に気づいて声をかけたりします。一方で、好きな人ほど嫌われるのが怖くなって、自分の望みを後回しにすることがあります。本当はもっと話したいのに遠慮したり、本当は寂しいのに平気なふりをしたり。あなたの恋は、相手を大切にするだけでなく、自分も大切にされていると感じられる時に、いちばんきれいに育ちます。",

    addictivePoint:
      "ホワイトチョコシロップの沼らせポイントは、「傷ついた心をそっと甘く包むところ」です。あなたは相手を激しく振り回すタイプではありません。でも、相手が疲れている時、落ち込んでいる時、誰かにやさしく扱われたい時に、ふと思い出される人です。あなたのそばには、安心して弱くなれる空気があります。相手が普段は見せない本音や、少し情けない部分まで出せるようになると、あなたの存在はかなり特別になります。あなたに受け止められた記憶は、相手の中でやわらかい余韻として残ります。派手な刺激ではなく、静かに心をほどく甘さ。強く奪うのではなく、離れたあとに「あの人の前では安心できた」と思わせる力。それがホワイトチョコシロップの沼らせ力です。",

    weakPoint:
      "あなたが苦手なのは、雑に扱われる恋愛です。強い言葉で責められたり、感情を軽く扱われたり、こちらのやさしさを当然のものとして受け取られたりすると、あなたは深く傷つきます。表面では笑って流せても、内側ではずっと覚えていることがあります。また、相手に合わせすぎる関係も苦手です。あなたは空気を読むのが上手いぶん、相手の機嫌を優先してしまうことがあります。でも、その状態が続くと、自分が何を感じているのかわからなくなってしまいます。さらに、白黒を急いでつけられる関係も疲れやすいです。あなたには、曖昧な気持ちや揺れる心をそのまま置いておける時間が必要です。急かされず、責められず、やわらかく向き合える恋愛でこそ、あなたの魅力は守られます。",

    advice:
      "あなたが大切にされるためには、やさしくすることと我慢することを分ける必要があります。あなたは相手を傷つけたくない気持ちが強く、多少の違和感なら自分の中で処理しようとしがちです。でも、恋愛ではあなたの本音も関係を作る大切な材料です。嫌なことを嫌と言うこと、寂しい時に寂しいと言うこと、もっと大切にしてほしいと伝えること。それは相手を責めることではありません。あなたが本音を出すことで、相手はあなたをもっと深く知ることができます。また、あなたに合う人は、あなたの繊細さを面倒だと言わず、丁寧に扱ってくれる人です。やさしいあなたが、さらにやさしくいられるような関係を選んでください。あなたの甘さは、安心できる場所でこそ、いちばん美しく溶けます。",

    impression:
      "周りから見たあなたは、やわらかくて、繊細で、そばにいると安心できる人です。強く目立つタイプではなくても、話すと心が落ち着いたり、否定されない感じがしたりします。恋愛でも、相手からは「この人には弱いところを見せられる」「きついことを言わずに聞いてくれる」と思われやすいです。ただし、やさしく見えるぶん、何をしても怒らない人だと誤解されることもあります。本当は傷ついているのに、表に出すのが苦手で、あとから一人で抱えてしまうこともあるでしょう。あなたはただ柔らかいだけではありません。人の痛みに気づけるぶん、自分の痛みにも敏感な人です。その繊細さまで見てくれる相手に出会うと、あなたは安心して本来の甘さを出せます。",

    distance:
      "あなたは、急激に距離を詰められるより、安心できる空気の中で少しずつ近づく方が向いています。最初から強い好意をぶつけられると、嬉しい反面、少し怖くなることがあります。相手が本当に自分を大切にしてくれるのか、やさしさを雑に扱わない人なのかを、時間をかけて見たいタイプです。あなたにとって心地よい距離感は、やさしく待ってもらえる関係です。無理に本音を引き出されるのではなく、話したくなった時に聞いてくれる。寂しさを責められず、ゆっくり受け止めてもらえる。そういう相手に対して、あなたは少しずつ心を開いていきます。ホワイトチョコシロップの距離感は、強火で溶かすものではありません。手のひらの温度で少しずつやわらかくなるような、丁寧な近づき方が合っています。",

    dropPhrase:
      "やさしさは、我慢の別名じゃない。あなたは、誰かの心をやわらかく包む力を持っています。でも、その白くて甘い部分を、雑に扱われる場所へ置かなくていい。あなたの繊細さを大切にしてくれる人の前でこそ、あなたの甘さは安心して溶けていきます。"
  },
    "ストロベリーシロップ": {
    loveStyleTitle: "甘く目を引く、気がかりな存在",

    basicLove:
      "ストロベリーシロップのあなたは、可愛らしさや素直さの中に、思わず気にかけたくなる魅力を持つタイプです。明るく振る舞っている時でも、どこか放っておけない雰囲気があり、周りの人はあなたの変化に自然と目を向けたくなります。あなたの愛され方は、完璧で隙のない魅力というより、少し揺れる感情や素直な反応が相手の心を動かす形です。嬉しい時は嬉しそうに見え、寂しい時はどこか影が出る。そのわかりやすさが、あなたを人間らしく、近づきたくなる存在にしています。恋愛でも、相手はあなたを守りたい、笑わせたい、もっと安心させたいと思いやすいです。甘さの中にある不安定さが、ストロベリーシロップの大きな魅力です。",

    romanceCharm:
      "恋愛でのあなたの魅力は、感情の温度が相手に伝わりやすいところです。あなたは好きな人に対して、完全に平気なふりをするより、嬉しさや照れ、寂しさがにじみやすいタイプです。その素直さが、相手にはとても魅力的に映ります。自分の言葉であなたが笑ってくれたり、少し拗ねたり、安心した表情を見せたりすると、相手はもっと自分があなたに影響を与えたいと思うようになります。ただし、感情が伝わりやすいぶん、不安も表に出やすいです。相手の反応が少し薄いだけで気になったり、距離を感じると急に寂しくなったりすることがあります。あなたの可愛さは、安心できる相手の前で一番自然に花開きます。",

    loveBehavior:
      "好きな人ができると、あなたは相手の言葉や反応にかなり敏感になります。返信の温度、会話の間、視線の向き、ちょっとした態度の変化まで気になりやすいです。好きだからこそ、相手にどう思われているのかを何度も確認したくなることがあります。あなたの好意は、甘えたり、気にかけたり、相手の前で少しだけ素直になったりする形で出ます。強く押すというより、相手に気づいてほしい、かまってほしい、大切に扱ってほしいという気持ちが行動ににじみます。ただ、寂しさを我慢しすぎると、急に不機嫌になったり、試すような態度になってしまうこともあります。素直に「寂しい」「会いたい」と言えるほど、あなたの恋は可愛く伝わります。",

    addictivePoint:
      "ストロベリーシロップの沼らせポイントは、「守りたいのに、どこか目が離せないところ」です。あなたはただ甘いだけではなく、感情の揺れや繊細さがあるからこそ、相手の心を引きつけます。笑っている時はとても明るく見えるのに、ふとした瞬間に寂しそうな表情を見せる。その差に相手は弱いです。もっと安心させたい、もっと自分に甘えてほしい、もっと笑っていてほしい。そう思わせる力があります。あなたに惹かれる人は、あなたの可愛らしさだけでなく、その奥にある不安や寂しさまで抱きしめたくなります。ストロベリーシロップは、相手の庇護欲を刺激しながら、甘い記憶として強く残るタイプです。",

    weakPoint:
      "あなたが苦手なのは、気持ちを軽く扱われる恋愛です。寂しいと言った時に面倒くさがられたり、不安を伝えた時に重いと片づけられたりすると、深く傷つきます。あなたは感情が豊かなぶん、それを否定されると自分ごと否定されたように感じやすいです。また、曖昧な態度を取り続けられる関係も苦手です。好きなのか、どう思っているのか、どこまで信じていいのかわからない状態が続くと、不安が大きくなってしまいます。駆け引きが多すぎる恋愛では、あなたの可愛さよりも不安定さが前に出やすくなります。あなたには、ちゃんと言葉で安心をくれる相手が必要です。",

    advice:
      "あなたが大切にされるためには、不安を試す形ではなく、言葉で伝えることが大切です。あなたは寂しさや不安を感じると、相手の愛情を確認したくなることがあります。でも、試すような態度を取ると、相手に本当の気持ちが伝わりにくくなります。「なんでわかってくれないの」ではなく、「少し寂しかった」「安心できる言葉がほしい」と伝える方が、あなたの可愛さはまっすぐ届きます。また、自分の感情を恥ずかしいものだと思わなくて大丈夫です。あなたの豊かな反応は魅力です。ただ、その感情を自分で抱きしめながら、相手にも丁寧に渡せるようになると、恋愛はもっと安定します。",

    impression:
      "周りから見たあなたは、素直で可愛らしく、つい気にかけたくなる人です。嬉しそうな顔や照れた反応がわかりやすく、人からすると一緒にいて反応が楽しい存在です。一方で、感情が表に出やすいぶん、繊細そう、傷つきやすそうと思われることもあります。あなたはただ守られるだけの人ではありません。自分なりに一生懸命考え、相手を大切にしようとする強さも持っています。ただ、その強さがいつも表に出るわけではないので、周囲には甘さや可愛さが先に伝わりやすいです。本当にあなたを見てくれる人は、その奥にある真面目さや健気さに気づきます。",

    distance:
      "あなたは、好きな相手とは近くにいたい気持ちが強いタイプです。ただし、最初から大胆に踏み込むというより、相手の反応を見ながら少しずつ甘え方を探します。相手が受け止めてくれるとわかると、安心して距離を縮められます。逆に、冷たくされたり曖昧にされたりすると、すぐに不安になりやすいです。あなたにとって心地よい距離感は、放置されすぎず、束縛されすぎず、ちゃんと気にかけてもらえる関係です。小さな連絡や言葉、態度で安心を確認できると、あなたはとても可愛く心を開きます。ストロベリーシロップの恋は、安心の中で甘さが増していくものです。",

    dropPhrase:
      "甘えたい気持ちは、弱さじゃなくて愛されたい心の形。あなたは、素直な反応で人の心を動かす人です。不安ごと抱きしめてくれる相手の前で、あなたの甘さは一番きれいに色づきます。"
  },

  "マシュマロシロップ": {
    loveStyleTitle: "やわらかく守りたくなる人",

    basicLove:
      "マシュマロシロップのあなたは、やわらかさと無防備さで人の心をほどくタイプです。強く主張したり、完璧に振る舞ったりするより、どこかふんわりした空気や、相手を責めない優しさで愛されます。あなたの魅力は、相手に緊張を与えないところです。一緒にいると空気が丸くなり、きつい感情や強い言葉が少しやわらぎます。恋愛でも、相手はあなたに対して「守りたい」「傷つけたくない」「安心させたい」と感じやすいです。ただし、そのやわらかさは何でも受け入れるという意味ではありません。あなたは敏感に空気を感じ取り、傷つく時は静かに傷つきます。マシュマロシロップは、やさしく見えるぶん、丁寧に扱われることで本来の甘さを保てるタイプです。",

    romanceCharm:
      "恋愛でのあなたの魅力は、相手を緩ませるやわらかい存在感です。あなたは相手の前で強く張り合うより、穏やかに受け止めることができます。相手が疲れている時、あなたの雰囲気や言葉が安心材料になることがあります。無理に何かを解決しようとしなくても、あなたがそばにいるだけで気持ちがほどける。そんな魅力があります。また、あなたの反応にはどこか守りたくなる可愛さがあります。嬉しい時の素直さや、困った時の少し頼りなげな雰囲気が、相手の心を動かします。ただし、優しすぎるあまり、自分の嫌なことまで飲み込んでしまうことがあります。恋愛では、やわらかいまま境界線を持つことが大切です。",

    loveBehavior:
      "好きな人ができると、あなたは相手に安心してもらいたい気持ちが強く出ます。相手の言葉をやさしく受け止めたり、強く否定せずに聞いたり、空気を悪くしないように気を配ったりします。あなたの好意は、ふんわりした優しさや、相手を包むような態度に出やすいです。ただ、好きな人相手ほど、自分の本音を言えなくなることがあります。嫌われたくない、困らせたくない、空気を壊したくない。そう思って、寂しさや不満をしまい込んでしまうことがあるでしょう。本当はもっと大切にされたいのに、平気なふりをしてしまう。あなたの恋は、自分の気持ちも相手にそっと預けられるようになると、もっと安心できるものになります。",

    addictivePoint:
      "マシュマロシロップの沼らせポイントは、「強く触れたら壊れてしまいそうなやわらかさ」です。あなたは相手に、乱暴に扱ってはいけない特別感を与えます。無理に近づくより、そっと大切にしたくなる。あなたの前では、相手も自然と態度をやわらかくしたくなることがあります。さらに、あなたは相手を責めすぎないので、相手は弱い部分を見せやすいです。あなたに受け止められた記憶は、ふわっとした安心感として残ります。刺激で強く惹きつけるタイプではありませんが、疲れた時や孤独な時に思い出されやすい存在です。あなたの甘さは、心を休ませる場所のように相手を引き寄せます。",

    weakPoint:
      "あなたが苦手なのは、強い圧をかけられる恋愛です。怒られる、責められる、急かされる、感情をぶつけられる。そういう関係では、あなたは本音を出すどころか、心を守るためにどんどん小さくなってしまいます。また、あなたの優しさを都合よく使われることも苦手です。何でも許してくれる、傷ついても怒らない、いつでも受け止めてくれると思われると、心がすり減ります。あなたはやわらかいけれど、無限に耐えられるわけではありません。本当に必要なのは、あなたを安心させながら向き合ってくれる人です。やさしさを利用する相手ではなく、やさしさを返してくれる相手を選ぶことが大切です。",

    advice:
      "あなたが大切にされるためには、嫌なことをやわらかくでも伝える練習が必要です。強く言わなくても大丈夫です。ただ、「それは少し悲しかった」「今はゆっくり話したい」「そう言われると不安になる」と伝えるだけで、あなたの心は守られます。あなたは相手を傷つけたくない気持ちが強いですが、自分が傷つき続ける必要はありません。境界線を持つことは、冷たさではなく、自分を大切にすることです。また、守られるだけでなく、自分で自分の気持ちを選ぶ力も持っています。やわらかさを失わずに、自分の中心を持つこと。それがマシュマロシロップの恋を健やかにします。",

    impression:
      "周りから見たあなたは、やさしくて、ふんわりしていて、そばにいると空気が和む人です。きつい雰囲気をやわらげる力があり、人から相談されたり、安心できる存在として見られたりすることが多いでしょう。恋愛でも、相手はあなたに対して自然と丁寧になりたくなります。一方で、頼りなさそう、何でも受け入れてくれそうと思われることもあります。でも本当のあなたは、ただ流されているだけではありません。空気を壊さないためにたくさん感じ取り、たくさん考えている人です。その繊細さを理解してくれる相手の前で、あなたは安心して本来の甘さを出せます。",

    distance:
      "あなたは、安心できる相手にはゆっくり近づいていくタイプです。最初から強く踏み込まれると怖くなりますが、丁寧に接してくれる人には少しずつ心を開けます。あなたにとって大事なのは、相手の圧が強すぎないことです。急かされず、責められず、やわらかく待ってもらえると、あなたは安心して甘えられるようになります。ただし、遠慮しすぎると距離が縮まらないままになってしまうこともあります。安心できる相手には、自分から少しだけ手を伸ばしてみてください。マシュマロシロップの関係は、強く引っ張るものではなく、やさしく包み合うことで深まっていくものです。",

    dropPhrase:
      "やわらかい人ほど、丁寧に扱われる場所を選んでいい。あなたの甘さは、誰かに消費されるためのものではありません。守りたいと思ってくれる人の前で、あなたはもっと安心してほどけていけます。"
  },

  "ピーチシロップ": {
    loveStyleTitle: "自然な甘さで距離を縮める人",

    basicLove:
      "ピーチシロップのあなたは、親しみやすさと可愛らしさで人の心に入っていくタイプです。強く主張しなくても、話しやすい雰囲気や、自然な反応のやわらかさで周囲に好かれます。あなたの魅力は、作り込みすぎない甘さにあります。完璧に見せようとするより、少し素直で、人間らしくて、近くに感じられるところが愛されます。恋愛でも、相手はあなたといると距離を縮めやすく感じます。堅苦しくならず、でも雑すぎず、自然に心が近づいていく。そんな愛され方をするタイプです。ただし、あなたは相手に合わせるのが上手いぶん、自分の寂しさや不満を軽く見せてしまうことがあります。ピーチシロップは、自然体で愛される人ですが、その自然体の中にある本音も大切にしていい人です。",

    romanceCharm:
      "恋愛でのあなたの魅力は、相手が構えずに近づける親しみやすさです。あなたは会話の空気をやわらかくしたり、相手の緊張をほどいたりするのが上手です。話しているうちに自然と笑えたり、気づいたら距離が縮まっていたりします。そのため、恋愛が友達のような安心感から始まりやすいタイプです。あなたの可愛さは、狙いすぎないところにあります。素直な反応、ちょっとした照れ、相手に合わせて笑うやわらかさ。そういう小さな表情が相手の心を動かします。ただし、親しみやすいぶん、軽く扱われることもあります。あなたの自然な優しさや可愛さを、都合よく受け取る人ではなく、ちゃんと大切にしてくれる人といることが大切です。",

    loveBehavior:
      "好きな人ができると、あなたは距離を縮めるために自然な会話や小さな接点を大事にします。急に重たい好意をぶつけるより、日常の中で話す回数を増やしたり、相手が笑いやすい空気を作ったりします。あなたの好意は、親しみやすさの中ににじみます。相手を褒めたり、軽く甘えたり、会話の中で少し特別扱いしたりすることがあるでしょう。ただし、本気で好きになるほど、逆に冗談っぽくごまかしてしまうこともあります。真剣な気持ちを見せるのが少し恥ずかしくて、軽い態度に見えてしまうことがあるかもしれません。あなたの恋は、自然体のまま少しずつ本音を混ぜることで、相手に深く伝わります。",

    addictivePoint:
      "ピーチシロップの沼らせポイントは、「近づきやすいのに、ちゃんと特別感があるところ」です。あなたは相手に緊張を与えすぎず、自然に心を開かせます。だからこそ、相手は最初、あなたとの距離が縮まることを当たり前のように感じます。でも関わるほど、あなたの反応や優しさ、ふとした甘え方が特別に見えてくる。友達のように楽なのに、恋人のように大切にしたくなる。その境目の魅力が強いです。あなたに惹かれる人は、一緒にいる時間の心地よさにじわじわハマります。大きな刺激ではなく、日常の中で何度も思い出すやわらかい甘さ。それがピーチシロップの強みです。",

    weakPoint:
      "あなたが苦手なのは、親しみやすさを軽さだと誤解される恋愛です。話しやすいから何を言ってもいい、優しいから多少雑に扱っても大丈夫、明るいから傷つかない。そう思われると、あなたはかなり疲れてしまいます。また、曖昧な関係を長く続けられることも苦手です。最初は楽しくても、特別にされているのか、ただ都合よく近くにいるだけなのかわからなくなると、不安が大きくなります。あなたは自然体でいたいタイプですが、だからこそ関係の温度は大切にしたい人です。軽いノリだけで続く恋愛では、あなたの本当の甘さは出にくくなります。",

    advice:
      "あなたが大切にされるためには、親しみやすさの中にも境界線を持つことが大切です。誰とでも話しやすくできるのは魅力ですが、誰にでも同じだけ心を渡す必要はありません。あなたが本当に大切にしたい相手、安心して甘えられる相手、雑に扱わない相手を選んでいいです。また、本気の気持ちを冗談だけで隠しすぎないことも大切です。軽く言ったつもりの言葉の奥にある寂しさや好意は、相手に伝わらないことがあります。自然体のまま、「本当は嬉しかった」「もっと話したい」と少しだけ素直に伝えてみてください。あなたの魅力は、無理に飾るより、正直な甘さを見せた時にいちばん伝わります。",

    impression:
      "周りから見たあなたは、話しやすくて、可愛らしくて、自然と距離を縮めたくなる人です。相手に圧を与えず、やわらかい反応ができるので、初対面でも親しみを持たれやすいです。恋愛でも、最初から強く意識されるというより、気づいたら近くにいて、気づいたら大切になっているタイプです。ただし、親しみやすい分だけ、悩みがなさそう、軽そう、何でも笑って流してくれそうと思われることもあります。本当は傷つくこともあるし、寂しくなることもあるし、特別にされたい気持ちもあります。あなたを本当に大切にする人は、その明るさの奥にある繊細さまで見てくれる人です。",

    distance:
      "あなたは、人との距離を自然に縮めるのが上手です。最初から重すぎる空気にするより、楽しい会話や何気ないやりとりの中で少しずつ近づきます。相手からすると、あなたとは頑張らなくても仲良くなれる感じがします。ただし、近づきやすいからこそ、距離が曖昧になりやすいところもあります。友達なのか、恋愛なのか、特別なのか、その境目がぼやけると不安になることがあるでしょう。あなたにとって心地よい距離感は、楽しく自然でありながら、ちゃんと大切にされていると感じられる関係です。ピーチシロップの恋は、日常の中で自然に甘さが増していくものです。",

    dropPhrase:
      "自然に近づける人ほど、特別に扱われる価値がある。あなたの甘さは、気軽さの中にある本音でできています。笑って流せるあなたも、寂しいと言えるあなたも、同じように大切にされていいのです。"
  },

  "ミルクティーシロップ": {
    loveStyleTitle: "落ち着いた甘さで心を守る人",

    basicLove:
      "ミルクティーシロップのあなたは、やわらかさと落ち着きの両方で愛されるタイプです。甘さはあるけれど子どもっぽすぎず、安心感はあるけれど重すぎない。そんな穏やかなバランスを持っています。あなたの魅力は、相手が自分のペースを取り戻せる空気を作れるところです。恋愛でも、相手にとってあなたは、疲れた時に戻りたくなる穏やかな場所になりやすいです。強く刺激するのではなく、心の温度をゆっくり整える。無理に盛り上げるのではなく、静かに寄り添う。そういう愛され方をします。ただし、あなたは周りを落ち着かせられるぶん、自分の不安を見せるのが少し苦手です。穏やかに見える内側で、実はたくさん考えている人です。",

    romanceCharm:
      "恋愛でのあなたの魅力は、安心できる落ち着きと、やさしい距離感です。相手の感情に振り回されすぎず、かといって冷たく突き放すこともなく、ほどよい温度で向き合うことができます。あなたといると、相手は無理にテンションを上げなくてもいいと感じます。沈黙があっても気まずくなりにくく、日常の中でゆっくり愛情が深まっていきます。あなたの優しさは、甘やかしすぎるものではなく、相手が落ち着いて自分に戻れるような優しさです。ただし、安定して見えるぶん、相手に不安や寂しさを気づかれにくいことがあります。恋愛では、落ち着いている自分だけでなく、揺れている自分も見せられる相手が大切です。",

    loveBehavior:
      "好きな人ができると、あなたは急に距離を詰めるより、ゆっくり信頼を作ろうとします。相手のペースを見ながら、無理なく会話を重ねたり、日常の中で少しずつ特別感を出したりします。あなたの好意は、穏やかな気遣いや、安定した態度に出やすいです。連絡の温度を急に変えすぎない、相手が疲れている時はそっとする、でも必要な時にはちゃんとそばにいる。そんな形で愛情を示します。ただし、好きな人ほど慎重になりすぎて、気持ちが伝わりにくくなることもあります。本当はもっと近づきたいのに、相手に負担をかけたくなくて控えてしまう。あなたの恋は、穏やかさの中に少しだけ素直な甘さを足すと、もっと伝わりやすくなります。",

    addictivePoint:
      "ミルクティーシロップの沼らせポイントは、「一緒にいるほど心が整っていくところ」です。あなたは強い刺激で相手を夢中にさせるタイプではありません。でも、相手の生活にゆっくりなじみ、気づけば欠かせない存在になっています。あなたといると、気持ちが荒れにくい。焦らなくていい。無理に飾らなくていい。そう感じさせる力があります。相手は最初、あなたの落ち着きを心地よさとして受け取りますが、関わるほどその安定感の価値に気づきます。騒がしい恋のあとや、疲れた日常の中で、あなたの穏やかさは深く思い出されます。ミルクティーシロップは、毎日飲みたくなるような安心で相手を惹きつけるタイプです。",

    weakPoint:
      "あなたが苦手なのは、感情の波が激しすぎる恋愛です。急に強く求められたり、急に突き放されたり、相手の機嫌で関係の温度が大きく変わると、とても疲れてしまいます。あなたは穏やかでいたい人なので、常に不安定な関係では本来の魅力が出にくくなります。また、落ち着いているから大丈夫だと思われることも苦手です。本当は不安なのに、平気そうに見られてしまう。本当は甘えたいのに、しっかりしていると思われて頼られる側になってしまう。そんな状態が続くと、静かに寂しさがたまります。あなたには、あなたの穏やかさに甘えるだけでなく、内側の揺れにも気づいてくれる人が必要です。",

    advice:
      "あなたが大切にされるためには、落ち着いた自分のまま、少しずつ甘えることを許すことが大切です。あなたは相手に安心感を与えられる人ですが、恋愛ではあなた自身も安心させてもらっていいのです。強く感情をぶつける必要はありません。ただ、「今日は少し不安だった」「もう少し言葉で伝えてくれると嬉しい」と穏やかに言葉にするだけで、関係は変わります。また、安定を守りたいからといって、全部を自分の中で処理しすぎないことも大切です。恋愛は、静かに我慢する場所ではなく、安心して分け合える場所です。あなたの落ち着きは魅力ですが、その奥にある甘えたい気持ちも、ちゃんと愛される価値があります。",

    impression:
      "周りから見たあなたは、落ち着いていて、やさしくて、話すと心が整う人です。大きく目立つわけではなくても、長く関わるほど信頼されます。恋愛でも、相手からは「この人といると安心する」「日常が穏やかになる」と思われやすいです。ただし、安定して見えるぶん、悩みが少なそう、感情が揺れなさそうと思われることもあります。本当はあなたも傷つくし、不安になるし、特別に大切にされたい気持ちがあります。ただ、それを激しく出さないだけです。あなたを本当に理解してくれる人は、その穏やかさの奥にある繊細さまで見てくれます。ミルクティーシロップは、静かだけれど深く愛される人です。",

    distance:
      "あなたは、急な接近よりも、ゆっくり信頼を重ねる距離感が合っています。最初から激しく求められるより、自然な会話や落ち着いた時間を通して相手を知りたいタイプです。あなたにとって大切なのは、無理をしなくても関係が続くことです。会話が途切れても不安にならない、会えない時間も疑いすぎなくていい、でも大事な時にはちゃんと向き合える。そんな距離感が心地よいでしょう。相手があなたを急かさず、でも放置もしない人だと、あなたは安心して甘さを出せます。ミルクティーシロップの恋は、毎日少しずつ温度がなじんでいくような、静かで深い関係です。",

    dropPhrase:
      "穏やかな人ほど、心の奥に小さな揺れを抱えている。あなたは、誰かの日常を落ち着かせる甘さを持っています。でも、あなた自身も安心して甘えていい。静かな愛ほど、丁寧に注がれる場所で深く香ります。"
  },

  "ダークチョコシロップ": {
    loveStyleTitle: "深く濃く、簡単には忘れられない人",

    basicLove:
      "ダークチョコシロップのあなたは、甘さの中に苦味や強さを持つタイプです。誰にでもわかりやすく愛想よく振る舞うというより、自分の芯や価値観を持ち、簡単には流されないところで人を惹きつけます。あなたの愛され方は、軽く好かれるというより、深く刺さる形です。最初は少し近寄りがたく見えることもありますが、関わるほど誠実さや情の深さが見えてきます。恋愛でも、あなたは浅い関係では満たされにくいタイプです。適当な甘さやその場だけの言葉より、覚悟や一貫性を求めます。あなたの魅力は、ただ優しいだけではなく、相手に本気で向き合える重みがあるところです。ダークチョコシロップは、簡単には溶けないけれど、一度心に残ると強く忘れられない人です。",

    romanceCharm:
      "恋愛でのあなたの魅力は、深く向き合う力と、簡単には揺らがない存在感です。あなたは好きになった相手に対して、表面的な優しさだけで済ませることができません。相手の本音や弱さ、隠している部分まで見ようとします。その視線は時に鋭く、相手にとっては逃げられないような感覚を与えることもあります。でも、それは支配したいからではなく、ちゃんと知りたい、ちゃんと向き合いたい気持ちから来ています。あなたの愛情は軽くありません。そのぶん、相手にとっては強く印象に残ります。甘い言葉より、態度の一貫性や、いざという時に離れない強さに魅力が出ます。ただし、深く考えすぎて、自分から心を閉じてしまうこともあります。",

    loveBehavior:
      "好きな人ができると、あなたは相手をかなり真剣に見ます。相手が信じられる人なのか、言葉と行動が一致しているのか、自分の深さを受け止められる人なのかを無意識に確かめます。軽いノリで好きと言うより、心の中でじっくり重みを増していくタイプです。好意を簡単に見せないこともありますが、一度本気になるとかなり情が深いです。相手の変化に気づいたり、言葉の裏を読んだり、深い部分まで守ろうとします。ただ、そのぶん嫉妬や不安も濃くなりやすいです。大切だからこそ、雑に扱われることに敏感になります。あなたの恋は、本気であるほど強くなりますが、その強さを相手にぶつけるのではなく、信頼に変えていくことが大切です。",

    addictivePoint:
      "ダークチョコシロップの沼らせポイントは、「甘さだけでは終わらない深さ」です。あなたは相手にとって、簡単に扱える人ではありません。時に鋭く、時に静かで、でも本気で大切にした相手にはとても深い愛情を向けます。その濃さが、相手の記憶に強く残ります。あなたと関わると、相手は自分の軽さや曖昧さをごまかせなくなることがあります。だからこそ、あなたを本気で好きになる人は、あなたの前でちゃんとしたいと思うようになります。甘やかすだけではなく、相手に深く向き合う。逃げずに見る。そういう姿勢が、他の人にはない中毒性になります。ダークチョコシロップは、苦味ごと忘れられない恋の味を残すタイプです。",

    weakPoint:
      "あなたが苦手なのは、軽く扱われる恋愛です。曖昧な関係、口だけの愛情、その場しのぎの言葉、責任のない距離感。そういうものに対して、あなたはかなり敏感です。表面では冷静にしていても、心の中では深く傷つくことがあります。また、相手の本気が見えない関係も苦手です。あなたは自分が深く向き合うぶん、相手にも誠実さを求めます。軽い嘘やごまかしが続くと、一気に信頼が崩れてしまいます。ただし、相手の曖昧さに傷つくあまり、自分も心を閉ざしすぎることがあります。守るための壁が高くなりすぎると、本当に近づきたい人まで遠ざけてしまうことがあります。",

    advice:
      "あなたが大切にされるためには、深く愛することと、相手を試し続けることを分ける必要があります。あなたは本気の関係を求める人だからこそ、相手の言動に敏感になります。でも、不安を確認するために相手を試すようになると、関係は苦しくなります。疑う前に、自分が何を不安に感じているのかを言葉にしてみてください。「軽く扱われるのが怖い」「ちゃんと向き合ってほしい」と伝えることは、重すぎることではありません。あなたに合うのは、あなたの濃さを面倒だと言わず、誠実に受け止めてくれる人です。甘さだけを求める相手ではなく、苦味や深さまで味わえる相手を選んでください。",

    impression:
      "周りから見たあなたは、落ち着いていて、芯があり、簡単には流されない人です。人によっては、最初は少し近寄りがたく感じるかもしれません。でも、関わるほど情の深さや誠実さが見えてきます。恋愛でも、軽い相手には重く感じられることがありますが、本気で向き合いたい人には強く刺さります。あなたは誰にでも甘くするタイプではありません。だからこそ、あなたが見せる優しさや弱さには特別感があります。周囲からは「本当はすごく深く考えている人」「大切な人にはかなり一途な人」と思われやすいでしょう。あなたの魅力は、万人受けする軽さではなく、深く残る濃さです。",

    distance:
      "あなたは、距離を縮めるまでに相手をよく見るタイプです。簡単に心を開くより、相手が信頼できるかどうかを時間をかけて確かめます。軽い言葉だけでは動きません。行動、継続性、誠実さを見ています。近づくまでには慎重ですが、一度心を許すとかなり深く関わります。あなたにとって心地よい距離感は、浅く広い関係ではなく、少数でも深く信頼できる関係です。ただ、深くなりたい気持ちが強いぶん、相手との温度差に苦しむこともあります。相手がゆっくりなタイプなら、少し待つ余裕も必要です。ダークチョコシロップの恋は、軽く溶けるものではなく、時間をかけて深い味になるものです。",

    dropPhrase:
      "甘さだけでは残らない恋もある。あなたは、苦味も深さも含めて誰かの記憶に残る人です。軽く扱われる場所で薄まらなくていい。あなたの濃さを、ちゃんと味わえる人に渡してください。"
  },

  "シナモンシロップ": {
    loveStyleTitle: "甘さの中に刺激を残す人",

    basicLove:
      "シナモンシロップのあなたは、甘さだけでは終わらない刺激的な魅力を持つタイプです。やさしいだけ、従順なだけ、わかりやすく可愛いだけではなく、どこかピリッとした個性や言葉の強さがあります。あなたの愛され方は、相手の心を安心させるだけでなく、少し揺らすところにあります。恋愛でも、あなたは相手に「もっと知りたい」「簡単には思い通りにならない」と思わせやすいです。親しみやすさの中に、自分の感覚やこだわりがあり、流されそうで流されない。そこが強い魅力になります。ただし、刺激があるぶん、誤解されることもあります。本当は深く大切にしたいのに、少し強い言葉や態度が先に伝わってしまうこともあるタイプです。",

    romanceCharm:
      "恋愛でのあなたの魅力は、相手を飽きさせない温度差です。甘えられる時は甘えられるのに、全部を相手に委ねるわけではない。優しい時もあるけれど、自分の意見や感情はちゃんと持っている。そのギャップが相手を惹きつけます。あなたは恋愛において、ただ安心するだけの存在ではなく、相手の気持ちを少し目覚めさせる人です。会話のテンポや反応にスパイスがあり、あなたといると退屈しにくいでしょう。ただし、照れ隠しや不安から少し刺のある言い方をしてしまうこともあります。本当は大切に思っているのに、素直な甘さを出すのが恥ずかしくて、強めの態度になってしまうことがありそうです。",

    loveBehavior:
      "好きな人ができると、あなたは相手の反応を見ながら、少し駆け引きめいた態度を取ることがあります。わざとそっけなくしたり、冗談っぽく強く言ったり、素直に甘える前に相手がどう出るか見たりすることがあるでしょう。あなたの好意は、まっすぐな甘さだけではなく、少し刺激を含んで出ます。相手をからかったり、軽く挑発したり、でも困っている時にはちゃんと気にかけたりする。その温度差に相手は惹かれます。ただし、本音を隠すための刺激が強くなりすぎると、相手に伝わりにくくなります。あなたの恋は、強さの中にある本当の甘さを少しずつ見せられるようになると、もっと深く愛されます。",

    addictivePoint:
      "シナモンシロップの沼らせポイントは、「甘いのに少し刺激があるところ」です。あなたは相手にとって、完全に安心しきれるだけの存在ではありません。時々意外な反応をしたり、少し強い言葉を返したり、自分のペースを崩さなかったりします。その予測できなさが、相手の心を引きつけます。甘やかしてくれるだけの人より、ちゃんと自分を持っている人として印象に残るのです。あなたに惹かれる人は、あなたの一筋縄ではいかないところにハマります。優しさの奥にあるプライド、照れの裏にある愛情、強さの中にある寂しさ。そういう複雑な味が、何度も思い出したくなる余韻になります。",

    weakPoint:
      "あなたが苦手なのは、自分の刺激をただのわがままやきつさとして受け取られる恋愛です。あなたの強い言葉や少し尖った態度の奥には、照れや不安、ちゃんと見てほしい気持ちがあることがあります。でも、そこを理解されずに「面倒」「怖い」「素直じゃない」と決めつけられると、深く傷つきます。また、全部を丸く収めることだけを求められる関係も苦手です。あなたは感情や個性を無理に薄めると、自分らしさがなくなってしまいます。ただし、刺激が強すぎると相手を疲れさせることもあります。大切なのは、尖ることをやめるのではなく、相手を傷つける前に本音を言葉にすることです。",

    advice:
      "あなたが大切にされるためには、照れ隠しの強さの奥にある本音を、少しずつ見せることが大切です。強い態度を取る前に、「本当は寂しかった」「ちょっと不安だった」「大切にされたいと思った」と伝えられると、相手はあなたをもっと理解しやすくなります。あなたの刺激は魅力です。でも、それが防御だけになってしまうと、近づきたい相手まで遠ざけてしまいます。あなたに合うのは、あなたのスパイスを楽しみながら、その奥のやわらかさも見てくれる人です。全部を丸くする必要はありません。ただ、大切な相手には、少しだけ甘さを見せてあげてください。シナモンシロップの魅力は、刺激と優しさが両方ある時に一番香ります。",

    impression:
      "周りから見たあなたは、個性があり、反応が面白く、少し刺激的な人です。言葉や態度にスパイスがあり、場をただ穏やかにするだけではなく、印象に残る空気を作ります。恋愛でも、相手からは「簡単には読めない」「でも気になる」と思われやすいです。一方で、強く見られすぎて、本当は傷つきやすい部分が伝わりにくいこともあります。あなたはただ気が強いだけではありません。大切にしたい相手にはかなり情があり、見えないところで気にしていることも多いです。その奥の甘さまで見てくれる人に出会うと、あなたはもっと安心して自分らしくいられます。",

    distance:
      "あなたは、距離が近づくほど本音と照れが混ざりやすいタイプです。最初は軽く話せても、本気で大切になるほど、素直に甘えるのが難しくなることがあります。近づきたいのに少し突き放す、甘えたいのに強い言い方をする。そんな複雑な距離感が出るかもしれません。あなたにとって心地よいのは、刺激を否定せず、でも雑に扱わない相手です。からかい合えるけれど、傷ついた時にはちゃんと止まれる。強い言葉の奥にある気持ちを見ようとしてくれる。そんな相手には、あなたも少しずつ本当の甘さを見せられます。シナモンシロップの恋は、近づくほど香りが立つものです。",

    dropPhrase:
      "少し尖った甘さほど、忘れられない香りになる。あなたは、ただ優しいだけでは終わらない人です。強さも照れも寂しさも、全部あなたの味。大切な人には、その奥にある本当の甘さも少しだけ渡してあげてください。"
  },

  "ピスタチオシロップ": {
    loveStyleTitle: "個性の奥に静かな甘さを持つ人",

    basicLove:
      "ピスタチオシロップのあなたは、独特の感性や雰囲気で人を惹きつけるタイプです。誰にでもわかりやすく甘いというより、わかる人には深く刺さる魅力を持っています。自分の好みや考え方、距離感にこだわりがあり、無理に周りに合わせすぎないところがあります。恋愛でも、あなたは量産型の愛され方より、「この人にしかない感じ」で記憶に残るタイプです。最初は少し掴みにくく見えるかもしれません。でも関わるほど、独特のやわらかさや、意外な気遣い、静かな愛情が見えてきます。あなたの愛され方は、誰にでもすぐ伝わる甘さではなく、時間をかけて味わうほど癖になるものです。ピスタチオシロップは、特別枠に入りやすい人です。",

    romanceCharm:
      "恋愛でのあなたの魅力は、自分の世界を持っているところです。相手に合わせるだけではなく、自分の好きなもの、考え方、心地よい距離感を大切にできます。そのため、相手からするとあなたは簡単には手に入らない特別な存在に見えます。あなたの言葉や反応には独特の味があり、普通の甘さでは満足できない人ほど惹かれます。さらに、あなたはベタベタしすぎるより、少し距離を保ちながら深く関わる恋愛が向いています。近すぎないのに、ちゃんと特別。軽く見えるわけではないのに、重く押しつけない。そのバランスが魅力です。ただし、自分の世界を守りすぎると、相手に気持ちが伝わりにくくなることもあります。",

    loveBehavior:
      "好きな人ができると、あなたは相手にすぐ全てを合わせるのではなく、相手が自分の世界を尊重してくれるかを見ます。趣味や感性、考え方を否定せずに受け止めてくれる人かどうかがかなり大切です。あなたの好意は、わかりやすい甘えよりも、相手に自分の一部を見せる形で出ます。普段は話さないことを話したり、好きなものを共有したり、自分のペースに相手を少し招き入れたりします。それはあなたにとって大きな愛情表現です。ただ、好きだからこそ、自分の世界に踏み込まれすぎるのが怖くなることもあります。あなたの恋は、近づくことと自由でいることの両方が守られる時に、いちばん安定します。",

    addictivePoint:
      "ピスタチオシロップの沼らせポイントは、「他の人では代わりにならない独自性」です。あなたは万人に同じようにわかりやすく愛されるタイプではありません。でも、あなたの感性に惹かれた人にとっては、かなり強く記憶に残ります。会話の切り口、好きなものの選び方、距離の取り方、ふと見せる優しさ。そういうものが独特で、相手はあなたを簡単に分類できません。だからこそ、もっと知りたくなります。あなたにハマる人は、あなたの自由さや少し掴めないところに惹かれます。近づきたいけれど、完全に所有することはできない。その感じが、相手の心を引っ張ります。ピスタチオシロップは、特別な味を知った人をじわじわ戻れなくするタイプです。",

    weakPoint:
      "あなたが苦手なのは、自分の個性やペースを否定される恋愛です。「普通はこうでしょ」「もっと合わせて」「なんでそんな考え方なの」と言われると、一気に心が離れやすいです。あなたにとって、自分の世界を守ることはわがままではなく、自分らしくいるために必要なことです。また、過度に束縛される関係も苦手です。好きだからといって、全部を共有したり、常に同じ温度でつながり続けたりするのは疲れてしまいます。あなたは愛情が薄いわけではありません。ただ、自分だけの時間や領域が必要なのです。そこを理解されない恋愛では、あなたの魅力は窮屈になってしまいます。",

    advice:
      "あなたが大切にされるためには、自分の世界を守りながらも、相手が入れる小さな入口を作ることが大切です。あなたは全部を説明する必要はありません。でも、何も共有しないままだと、相手はどう近づけばいいのかわからなくなることがあります。「これは私にとって大事」「ここは一人の時間がほしい」「でもあなたにはこれを見せたい」そんなふうに、自分の境界線と好意を一緒に伝えると、関係が安定します。あなたに合うのは、あなたを変えようとする人ではなく、あなたの個性を面白がり、大切にしてくれる人です。自由を奪わず、でもちゃんと特別にしてくれる相手を選んでください。",

    impression:
      "周りから見たあなたは、独特で、少し掴めなくて、でも気になる人です。大勢の中にいても、どこか自分の色を持っています。恋愛でも、相手からは「他の人と違う」「もっと知りたい」と思われやすいです。一方で、何を考えているかわかりにくい、距離があると思われることもあります。でもそれは冷たいからではなく、自分の世界を大切にしているからです。本当にあなたを理解する人は、その個性の奥にある静かな優しさや、選んだ相手を大切にする誠実さに気づきます。あなたは誰にでも合わせる人ではありません。だからこそ、あなたが心を開いた相手には強い特別感が生まれます。",

    distance:
      "あなたは、近づきすぎず離れすぎず、自分の余白が守られる距離感を好みます。恋愛でも、ずっと一緒にいることだけが愛情だとは思っていないかもしれません。一人の時間、自分の好きなこと、考える余白があってこそ、相手にも自然に向き合えます。相手がその距離感を理解してくれると、あなたはかなり安心します。逆に、距離を取ることを不安や冷たさだと決めつけられると、心が窮屈になります。あなたにとって心地よい関係は、自由と特別感が両立している関係です。ピスタチオシロップの恋は、べったり混ざるより、互いの味を残したまま並ぶことで深まります。",

    dropPhrase:
      "特別な味は、誰にでもすぐ伝わらなくていい。あなたは、わかる人に深く刺さる魅力を持っています。自分の世界を守りながら、そこに入りたいと丁寧に願う人を選んでください。"
  },

  "レモンシロップ": {
    loveStyleTitle: "明るい刺激で心に残る人",

    basicLove:
      "レモンシロップのあなたは、明るさと刺激で人の心を動かすタイプです。甘いだけではなく、どこか爽やかで、少し鋭くて、印象に残る言葉や反応を持っています。あなたがいると、空気がぱっと変わったり、停滞していた場に新しい風が入ったりします。恋愛でも、相手にとってあなたは退屈しない存在になりやすいです。一緒にいると気持ちが切り替わる、笑える、刺激をもらえる。そんな愛され方をします。ただし、あなたの明るさはいつも単純な元気さだけではありません。内側には繊細さや寂しさもあり、それを見せないために軽やかに振る舞うこともあります。レモンシロップは、爽やかさの奥に本音を隠した、忘れにくいタイプです。",

    romanceCharm:
      "恋愛でのあなたの魅力は、相手の気持ちをぱっと動かす軽やかな刺激です。あなたは会話のテンポや反応に鮮度があり、相手を退屈させません。冗談を言ったり、少し意外な視点を出したり、空気を明るく変えたりすることができます。相手からすると、あなたといると気分が切り替わり、日常が少し鮮やかになります。恋愛において、これはかなり強い魅力です。ただし、あなたは自分の弱さを軽いノリで隠しやすいところがあります。本当は傷ついているのに冗談にしたり、不安なのに明るく流したりする。あなたの爽やかさは魅力ですが、深く愛されるためには、その奥にある本音も少しずつ見せることが大切です。",

    loveBehavior:
      "好きな人ができると、あなたは相手とのやりとりを楽しくしようとします。軽い冗談を言ったり、相手の反応を引き出したり、会話に明るさを足したりします。あなたの好意は、重く迫るよりも、相手の生活に刺激や楽しさを加える形で出やすいです。好きな人には、笑ってほしい、元気になってほしい、自分といる時間を楽しいと思ってほしいという気持ちが強くなります。ただし、本気になるほど照れ隠しが増えることもあります。真面目な好意を軽く見せたり、寂しさを平気なふりで隠したりすることがあるでしょう。あなたの恋は、明るいままでもいいけれど、時々真剣な言葉を混ぜることで、相手にもっと深く伝わります。",

    addictivePoint:
      "レモンシロップの沼らせポイントは、「一緒にいると心が目を覚ますところ」です。あなたは相手に安心だけを与えるタイプではありません。停滞している気持ちを動かしたり、沈んだ空気を切り替えたり、相手に新しい視点を与えたりします。あなたと関わると、相手は自分の生活が少し明るく、鮮やかになるように感じます。さらに、あなたは軽やかに見えて、ふとした瞬間に本音や寂しさがのぞくことがあります。そのギャップが相手の心に残ります。明るいだけではない、爽やかなだけではない。少し酸っぱくて、でも忘れられない。レモンシロップは、相手の記憶に鮮明な刺激を残すタイプです。",

    weakPoint:
      "あなたが苦手なのは、自分の明るさだけを求められる恋愛です。いつも楽しくしてくれる人、元気にしてくれる人、軽く流してくれる人として扱われると、だんだん疲れてしまいます。あなたにも落ち込む日があり、真剣に向き合ってほしい時があります。また、軽いノリの裏にある本音を見てもらえない関係も苦手です。冗談にしたから平気というわけではありません。笑っていたから傷ついていないというわけでもありません。さらに、束縛が強すぎる恋愛も苦手です。あなたは自由に動ける余白がないと、自分らしさが出にくくなります。あなたには、明るさも弱さも両方受け止めてくれる相手が必要です。",

    advice:
      "あなたが大切にされるためには、明るい自分だけで関係を保とうとしないことが大切です。あなたは空気を変える力があり、相手を元気にすることもできます。でも、恋愛ではあなたがずっと太陽役でいる必要はありません。落ち込んだ時、寂しい時、真面目に話したい時は、軽く流さずに言葉にしていいです。「今は笑ってごまかしたけど、本当は少し傷ついた」「ちゃんと聞いてほしい」そんなふうに伝えられると、相手はあなたをもっと深く理解できます。あなたの魅力は、明るさだけではなく、酸味の奥にある繊細さにもあります。そこまで見てくれる人を選ぶことで、恋愛はもっと安心できるものになります。",

    impression:
      "周りから見たあなたは、明るくて、反応がよく、一緒にいると気分が変わる人です。場の空気を軽くしたり、会話に刺激を加えたりするのが上手なので、周囲からは楽しい人、爽やかな人として見られやすいです。恋愛でも、相手からは「退屈しない」「元気をもらえる」と思われるでしょう。ただし、その印象が強いぶん、あなたの繊細さや寂しさは見逃されやすいです。本当は深く考えているのに、軽く見られることがあります。あなたはただ明るいだけではありません。相手を楽しませたい気持ちの裏に、自分もちゃんと見てほしいという願いを持っています。その両方を理解してくれる相手に出会うと、あなたはもっと自然体でいられます。",

    distance:
      "あなたは、楽しいやりとりから距離を縮めるのが得意です。最初から重く向き合うより、笑える会話や軽い刺激の中で自然に近づいていく方が向いています。ただし、ずっと軽いままだと物足りなくなります。あなたにとって心地よい距離感は、楽しく話せることと、真面目な本音も受け止めてもらえることの両方がある関係です。また、自由を奪われすぎると苦しくなります。近い関係でも、自分のペースや動ける余白は大切です。相手があなたの軽やかさを愛しながら、真剣な部分にも目を向けてくれると、あなたは安心して深く関われます。レモンシロップの恋は、爽やかに始まり、あとから本音の酸味が効いてくるものです。",

    dropPhrase:
      "明るい人ほど、笑顔の奥に本音を隠している。あなたは、誰かの日常を鮮やかにする力を持っています。でも、軽やかなあなたも、真剣なあなたも、同じように愛されていい。酸味まで味わってくれる人の前で、あなたの甘さはもっと深く残ります。"
  }
};