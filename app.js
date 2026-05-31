const data = window.DL_SECTION_DATA || window.DL_COURSE_DATA;

const state = {
  slides: data.sections || data.slides,
  decks: data.decks,
  curatedMode: Boolean(data.sections),
  currentIndex: 0,
  query: "",
  filter: "all",
};

const els = {
  sidebar: document.getElementById("sidebar"),
  deckList: document.getElementById("deckList"),
  courseStats: document.getElementById("courseStats"),
  searchInput: document.getElementById("searchInput"),
  progressCopy: document.getElementById("progressCopy"),
  progressBar: document.getElementById("progressBar"),
  deckLabel: document.getElementById("deckLabel"),
  slideTitle: document.getElementById("slideTitle"),
  keywordRow: document.getElementById("keywordRow"),
  sourceLink: document.getElementById("sourceLink"),
  lessonContent: document.getElementById("lessonContent"),
  prevSlide: document.getElementById("prevSlide"),
  nextSlide: document.getElementById("nextSlide"),
  openSidebar: document.getElementById("openSidebar"),
  closeSidebar: document.getElementById("closeSidebar"),
};

const HIGHLIGHTS = [
  "Deep Learning",
  "neural network",
  "supervised learning",
  "CNN",
  "RNN",
  "ReLU",
  "sigmoid",
  "softmax",
  "tanh",
  "loss",
  "cost",
  "gradient descent",
  "backpropagation",
  "vectorization",
  "broadcasting",
  "cache",
  "parameters",
  "hyperparameters",
  "activation",
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function highlightText(value) {
  let output = escapeHtml(value);
  output = output.replace(/\b(dW|db|dZ|dA|[A-Za-z][A-Za-z_]*)\[([^\]]+)\]/g, (_, symbol, sub) => {
    return `<span class="inline-symbol">${symbol}<sub>${formatSub(sub)}</sub></span>`;
  });

  HIGHLIGHTS.forEach((term) => {
    const escaped = escapeHtml(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    output = output.replace(new RegExp(`\\b${escaped}\\b`, "gi"), (match) => `<mark>${match}</mark>`);
  });

  return output;
}

function formatSub(value) {
  return String(value).replaceAll("-", "&minus;").replace(/\s+/g, "");
}

function variable(symbol, sub = "") {
  return `<span class="mvar">${symbol}</span>${sub ? `<sub>${formatSub(sub)}</sub>` : ""}`;
}

function frac(top, bottom) {
  return `<span class="frac"><span>${top}</span><span>${bottom}</span></span>`;
}

function renderFormula(raw) {
  const s = String(raw).replace(/\s+/g, " ").trim();
  const exact = {
    "z = w^T x + b": `${variable("z")} = ${variable("w")}<sup>T</sup>${variable("x")} + ${variable("b")}`,
    "z = W x + b": `${variable("z")} = ${variable("W")}${variable("x")} + ${variable("b")}`,
    "Z = w^T X + b": `${variable("Z")} = ${variable("w")}<sup>T</sup>${variable("X")} + ${variable("b")}`,
    "A = sigmoid(Z)": `${variable("A")} = sigmoid(${variable("Z")})`,
    "A = sigmoid(w^T X + b)": `${variable("A")} = sigmoid(${variable("w")}<sup>T</sup>${variable("X")} + ${variable("b")})`,
    "a = sigmoid(z)": `${variable("a")} = sigmoid(${variable("z")})`,
    "a = max(0, z)": `${variable("a")} = max(0, ${variable("z")})`,
    "a = g(Wx + b)": `${variable("a")} = ${variable("g")}(${variable("W")}${variable("x")} + ${variable("b")})`,
    "w := w - alpha dw": `${variable("w")} &leftarrow; ${variable("w")} &minus; <span class="greek">&alpha;</span>${variable("dw")}`,
    "b := b - alpha db": `${variable("b")} &leftarrow; ${variable("b")} &minus; <span class="greek">&alpha;</span>${variable("db")}`,
    "x -> model -> y_hat": `${variable("x")} &rarr; model &rarr; ${variable("ŷ")}`,
    "Idea -> Code -> Experiment -> Error Analysis -> Idea": `Idea &rarr; Code &rarr; Experiment &rarr; Error Analysis &rarr; Idea`,
    "X.shape = (n_x, m)": `${variable("X")}.shape = (${variable("n", "x")}, ${variable("m")})`,
    "J_regularized = J + lambda/(2m) sum(W[l]^2)": `${variable("J", "regularized")} = ${variable("J")} + ${frac("<span class=\"greek\">&lambda;</span>", `2${variable("m")}`)} <span class="greek">&Sigma;<sub>l</sub></span> ||${variable("W", "l")}||<sub>F</sub><sup>2</sup>`,
    "X_norm = (X - mu) / sigma": `${variable("X", "norm")} = ${frac(`${variable("X")} &minus; <span class="greek">&mu;</span>`, '<span class="greek">&sigma;</span>')}`,
    "dtheta_approx = (J(theta + epsilon) - J(theta - epsilon)) / (2 epsilon)": `${variable("d&theta;", "approx")} = ${frac(`${variable("J")}(<span class="greek">&theta;</span> + <span class="greek">&epsilon;</span>) &minus; ${variable("J")}(<span class="greek">&theta;</span> &minus; <span class="greek">&epsilon;</span>)`, `2<span class="greek">&epsilon;</span>`)}`,
    "difference = norm(grad - gradapprox) / (norm(grad) + norm(gradapprox))": `difference = ${frac(`||grad &minus; gradapprox||`, `||grad|| + ||gradapprox||`)}`,
    "v_dW = beta v_dW + (1 - beta) dW": `${variable("v", "dW")} = <span class="greek">&beta;</span>${variable("v", "dW")} + (1 &minus; <span class="greek">&beta;</span>)${variable("dW")}`,
    "s_dW = beta2 s_dW + (1 - beta2) dW^2": `${variable("s", "dW")} = <span class="greek">&beta;</span><sub>2</sub>${variable("s", "dW")} + (1 &minus; <span class="greek">&beta;</span><sub>2</sub>)${variable("dW")}<sup>2</sup>`,
    "W := W - alpha v_dW / sqrt(s_dW + epsilon)": `${variable("W")} &leftarrow; ${variable("W")} &minus; <span class="greek">&alpha;</span>${frac(variable("v", "dW"), `sqrt(${variable("s", "dW")} + <span class="greek">&epsilon;</span>)`)}`,
    "alpha = alpha0 / (1 + decay_rate * epoch)": `<span class="greek">&alpha;</span> = ${frac('<span class="greek">&alpha;</span><sub>0</sub>', `1 + decay_rate &middot; epoch`)}`,
    "z_norm = (z - mu) / sqrt(sigma^2 + epsilon)": `${variable("z", "norm")} = ${frac(`${variable("z")} &minus; <span class="greek">&mu;</span>`, `sqrt(<span class="greek">&sigma;</span><sup>2</sup> + <span class="greek">&epsilon;</span>)`)}`,
    "z_tilde = gamma z_norm + beta": `${variable("z", "tilde")} = <span class="greek">&gamma;</span>${variable("z", "norm")} + <span class="greek">&beta;</span>`,
    "a_i = exp(z_i) / sum_j exp(z_j)": `${variable("a", "i")} = ${frac(`exp(${variable("z", "i")})`, `<span class="greek">&Sigma;<sub>j</sub></span> exp(${variable("z", "j")})`)}`,
    "r = -4 * random, alpha = 10^r": `${variable("r")} = &minus;4 &middot; random, <span class="greek">&alpha;</span> = 10<sup>${variable("r")}</sup>`,
    "avoidable_bias = train_error - human_level_error": `avoidable bias = train error &minus; human-level error`,
    "variance = dev_error - train_error": `variance = dev error &minus; train error`,
    "test_gap = test_error - dev_error": `test gap = test error &minus; dev error`,
    "mismatch_gap = dev_error - train_dev_error": `mismatch gap = dev error &minus; train-dev error`,
    "variance_gap = train_dev_error - train_error": `variance gap = train-dev error &minus; train error`,
    "ceiling_gain <= fraction_of_errors_in_category": `ceiling gain &le; fraction of errors in category`,
    "n_H = floor((n_H_prev + 2p - f) / s) + 1": `${variable("n", "H")} = floor(${frac(`${variable("n", "H_prev")} + 2${variable("p")} &minus; ${variable("f")}`, variable("s"))}) + 1`,
    "n_W = floor((n_W_prev + 2p - f) / s) + 1": `${variable("n", "W")} = floor(${frac(`${variable("n", "W_prev")} + 2${variable("p")} &minus; ${variable("f")}`, variable("s"))}) + 1`,
    "parameters = f * f * n_C_prev * n_C + n_C": `parameters = ${variable("f")} &middot; ${variable("f")} &middot; ${variable("n", "C_prev")} &middot; ${variable("n", "C")} + ${variable("n", "C")}`,
    "a[l+2] = g(z[l+2] + a[l])": `${variable("a", "l+2")} = ${variable("g")}(${variable("z", "l+2")} + ${variable("a", "l")})`,
    "normal_cost = f * f * n_C_prev * n_C": `normal cost = ${variable("f")} &middot; ${variable("f")} &middot; ${variable("n", "C_prev")} &middot; ${variable("n", "C")}`,
    "depthwise_separable_cost = f * f * n_C_prev + n_C_prev * n_C": `depthwise separable cost = ${variable("f")} &middot; ${variable("f")} &middot; ${variable("n", "C_prev")} + ${variable("n", "C_prev")} &middot; ${variable("n", "C")}`,
    "IoU = area(intersection) / area(union)": `IoU = ${frac("area(intersection)", "area(union)")}`,
    "y = [pc, bx, by, bh, bw, c1, c2, ...]": `${variable("y")} = [${variable("p", "c")}, ${variable("b", "x")}, ${variable("b", "y")}, ${variable("b", "h")}, ${variable("b", "w")}, ${variable("c", "1")}, ${variable("c", "2")}, ...]`,
    "YOLO_output = grid_H * grid_W * anchors * (5 + classes)": `YOLO output = grid<sub>H</sub> &middot; grid<sub>W</sub> &middot; anchors &middot; (5 + classes)`,
    "d(img1, img2) = norm(f(img1) - f(img2))": `${variable("d")}(img<sub>1</sub>, img<sub>2</sub>) = ||${variable("f")}(img<sub>1</sub>) &minus; ${variable("f")}(img<sub>2</sub>)||`,
    "L = max(norm(f(A)-f(P))^2 - norm(f(A)-f(N))^2 + alpha, 0)": `${variable("L")} = max(||${variable("f")}(${variable("A")}) &minus; ${variable("f")}(${variable("P")})||<sup>2</sup> &minus; ||${variable("f")}(${variable("A")}) &minus; ${variable("f")}(${variable("N")})||<sup>2</sup> + <span class="greek">&alpha;</span>, 0)`,
    "J(G) = alpha J_content(C,G) + beta J_style(S,G)": `${variable("J")}(${variable("G")}) = <span class="greek">&alpha;</span>${variable("J", "content")}(${variable("C")}, ${variable("G")}) + <span class="greek">&beta;</span>${variable("J", "style")}(${variable("S")}, ${variable("G")})`,
    "a[t] = g(Waa a[t-1] + Wax x[t] + ba)": `${variable("a", "t")} = ${variable("g")}(${variable("W", "aa")}${variable("a", "t-1")} + ${variable("W", "ax")}${variable("x", "t")} + ${variable("b", "a")})`,
    "y_hat[t] = softmax(Wya a[t] + by)": `${variable("ŷ", "t")} = softmax(${variable("W", "ya")}${variable("a", "t")} + ${variable("b", "y")})`,
    "c_tilde[t] = tanh(Wc [Gamma_r * c[t-1], x[t]] + bc)": `${variable("c&#771;", "t")} = tanh(${variable("W", "c")}[<span class="greek">&Gamma;</span><sub>r</sub> &middot; ${variable("c", "t-1")}, ${variable("x", "t")}] + ${variable("b", "c")})`,
    "similarity(u, v) = dot(u, v) / (norm(u) norm(v))": `similarity(${variable("u")}, ${variable("v")}) = ${frac(`dot(${variable("u")}, ${variable("v")})`, `||${variable("u")}|| ||${variable("v")}||`)}`,
    "e_word = E o_word": `${variable("e", "word")} = ${variable("E")}${variable("o", "word")}`,
    "king - man + woman ≈ queen": `king &minus; man + woman &asymp; queen`,
    "score(y) = (1 / Ty^alpha) sum_t log P(y[t] | x, y[<t])": `score(${variable("y")}) = ${frac("1", `${variable("T", "y")}<sup><span class="greek">&alpha;</span></sup>`)} <span class="greek">&Sigma;<sub>t</sub></span> log P(${variable("y", "t")} | ${variable("x")}, ${variable("y", "&lt;t")})`,
    "c[t] = sum_tprime alpha[t,tprime] a[tprime]": `${variable("c", "t")} = <span class="greek">&Sigma;<sub>t'</sub></span> <span class="greek">&alpha;</span><sub>t,t'</sub>${variable("a", "t'")}`,
    "sum_tprime alpha[t,tprime] = 1": `<span class="greek">&Sigma;<sub>t'</sub></span> <span class="greek">&alpha;</span><sub>t,t'</sub> = 1`,
    "Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) V": `Attention(${variable("Q")}, ${variable("K")}, ${variable("V")}) = softmax(${frac(`${variable("Q")}${variable("K")}<sup>T</sup>`, `sqrt(${variable("d", "k")})`)})${variable("V")}`,
    "head_i = Attention(QW_iQ, KW_iK, VW_iV)": `head<sub>i</sub> = Attention(${variable("Q")}${variable("W", "iQ")}, ${variable("K")}${variable("W", "iK")}, ${variable("V")}${variable("W", "iV")})`,
    "MultiHead = concat(head_1, ..., head_h) W_O": `MultiHead = concat(head<sub>1</sub>, ..., head<sub>h</sub>)${variable("W", "O")}`,
  };

  if (exact[s]) return exact[s];

  if (s === "a = sigmoid(z) = 1 / (1 + e^(-z))") {
    return `${variable("a")} = sigmoid(${variable("z")}) = ${frac("1", `1 + e<sup>&minus;${variable("z")}</sup>`)}`;
  }

  if (s === "L(a, y) = -[y log(a) + (1-y) log(1-a)]" || s === "L(a,y) = -[y log a + (1-y) log(1-a)]") {
    return `${variable("L")}(${variable("a")}, ${variable("y")}) = &minus;[${variable("y")} log(${variable("a")}) + (1&minus;${variable("y")}) log(1&minus;${variable("a")})]`;
  }

  if (s === "J(w,b) = (1/m) sum_i L(a^(i), y^(i))") {
    return `${variable("J")}(${variable("w")}, ${variable("b")}) = ${frac("1", variable("m"))} <span class="greek">&Sigma;<sub>i</sub></span> ${variable("L")}(${variable("a")}<sup>(i)</sup>, ${variable("y")}<sup>(i)</sup>)`;
  }

  if (s.includes("dW[l] =") || s.includes("db[l] =")) {
    return splitFormulaList(s)
      .map((part) => {
        const item = part.trim();
        if (item.startsWith("dW")) {
          return `${variable("dW", "l")} = ${frac("1", variable("m"))}${variable("dZ", "l")}${variable("A", "l-1")}<sup>T</sup>`;
        }
        if (item.startsWith("db")) {
          return `${variable("db", "l")} = ${frac("1", variable("m"))}<span class="greek">&Sigma;</span>(${variable("dZ", "l")})`;
        }
        return renderFormulaGeneric(item);
      })
      .join("");
  }

  return renderFormulaGeneric(s);
}

function renderFormulaGeneric(raw) {
  let out = escapeHtml(raw)
    .replaceAll(":=", "&leftarrow;")
    .replaceAll("->", "&rarr;")
    .replaceAll(">=", "&ge;")
    .replaceAll("<=", "&le;")
    .replaceAll("*", "&middot;")
    .replace(/\balpha\b/g, '<span class="greek">&alpha;</span>')
    .replace(/\bsum_i\b/g, '<span class="greek">&Sigma;<sub>i</sub></span>')
    .replace(/\bnp\.sum\b/g, '<span class="greek">&Sigma;</span>')
    .replace(/\bsum\b/g, '<span class="greek">&Sigma;</span>')
    .replace(/\^T/g, "<sup>T</sup>")
    .replace(/\^\(([^)]+)\)/g, "<sup>$1</sup>");

  const protectedSymbols = [];
  out = out.replace(/\b(dW|db|dZ|dA|[A-Za-z][A-Za-z_]*)\[([^\]]+)\]/g, (_, symbol, sub) => {
    const token = `__SYM_${protectedSymbols.length}__`;
    protectedSymbols.push(variable(symbol, sub));
    return token;
  });
  out = out.replace(/\b(W|X|Y|Z|A|L|J|b|w|x|y|z|a|m|n|g|dw|db|dW|dZ|dA)\b(?![^<]*>)/g, (match) => variable(match));
  out = out.replace(/\(1\/m\)/g, frac("1", variable("m")));
  protectedSymbols.forEach((html, index) => {
    out = out.replaceAll(`__SYM_${index}__`, html);
  });
  return out;
}
function splitFormulaList(text) {
  return text
    .split(/,\s*(?=(?:[A-Za-z]\[[^\]]+\]|[A-Za-z]+)\s*(?:=|:=))/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function extractFormulas(text) {
  const patterns = [
    /\bz\s*=\s*w\^T\s*x\s*\+\s*b/gi,
    /\bz\s*=\s*W\s*x\s*\+\s*b/g,
    /\bZ\s*=\s*w\^T\s*X\s*\+\s*b/gi,
    /\bA\s*=\s*sigmoid\(w\^T\s*X\s*\+\s*b\)/g,
    /\ba\s*=\s*sigmoid\(z\)(?:\s*=\s*1\s*\/\s*\(1\s*\+\s*e\^\(-z\)\))?/gi,
    /\ba\s*=\s*g\(Wx\s*\+\s*b\)/g,
    /\bA\s*=\s*sigmoid\(Z\)/g,
    /\bL\(a,?\s*y\)\s*=\s*-\[y\s*log\s*\(?a\)?\s*\+\s*\(1-y\)\s*log\s*\(1-a\)\]/gi,
    /\bJ\(w,?\s*b\)\s*=\s*\(1\/m\)\s*sum_i\s*L\(a\^\(i\),\s*y\^\(i\)\)/gi,
    /\ba\s*=\s*max\(0,\s*z\)/gi,
    /\bZ\[[^\]]+\]\s*=\s*W\[[^\]]+\]\s*[A-Z]?\[[^\]]+\]\s*\+\s*b\[[^\]]+\]/g,
    /\bA\[[^\]]+\]\s*=\s*(?:g\[[^\]]+\]|sigmoid)\(Z\[[^\]]+\]\)/g,
    /\bdZ\[[^\]]+\]\s*=\s*A\[[^\]]+\]\s*-\s*Y/g,
    /\bdW\[[^\]]+\]\s*=\s*\(1\/m\)\s*[^,.;]+/g,
    /\bdb\[[^\]]+\]\s*=\s*\(1\/m\)\s*[^,.;]+/g,
    /\bw\s*:=\s*w\s*-\s*alpha\s*dw/gi,
    /\bb\s*:=\s*b\s*-\s*alpha\s*db/gi,
  ];

  const matches = [];
  patterns.forEach((pattern) => {
    for (const match of text.matchAll(pattern)) {
      matches.push({ index: match.index || 0, text: match[0].trim() });
    }
  });

  return matches
    .sort((a, b) => a.index - b.index || b.text.length - a.text.length)
    .filter((item, index, all) => !index || item.index >= all[index - 1].index + all[index - 1].text.length);
}

function renderFormulaGroup(formulas) {
  return `
    <div class="math-card">
      ${formulas
        .map(
          (formula) => `
            <div class="math-line">${renderFormula(formula)}</div>
          `,
        )
        .join("")}
    </div>
  `;
}

function extractShapeRows(text) {
  const rows = [];
  const assignment = /\b((?:[A-Za-z]+\.)?[A-Za-z]\[[^\]]+\]|[A-Za-z]\.shape|[A-Za-z]+)\s*=\s*\(([^)]+)\)/g;
  const phrase = /((?:[A-Za-z]\[[^\]]+\]|[A-Za-z])(?:\s*(?:và|,)\s*(?:[A-Za-z]\[[^\]]+\]|[A-Za-z]))*)\s+(?:có\s+)?shape\s*\(([^)]+)\)/gi;

  for (const match of text.matchAll(assignment)) {
    rows.push({ index: match.index || 0, text: match[0], symbol: match[1], value: `(${match[2]})` });
  }

  for (const match of text.matchAll(phrase)) {
    const symbols = [...match[1].matchAll(/[A-Za-z]\[[^\]]+\]|[A-Za-z]/g)].map((item) => item[0]);
    symbols.forEach((symbol) => rows.push({ index: match.index || 0, text: match[0], symbol, value: `(${match[2]})` }));
  }

  return rows.sort((a, b) => a.index - b.index);
}

function renderShapeTable(rows) {
  return `
    <div class="shape-card">
      ${rows
        .map(
          (row) => `
            <div class="shape-line">
              <span>${renderFormula(row.symbol)}</span>
              <span>=</span>
              <span>${renderFormula(row.value)}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderReadableText(value) {
  const text = String(value).trim();
  if (!text) return "";

  const formulas = extractFormulas(text);
  if (formulas.length) {
    const first = formulas[0];
    const last = formulas[formulas.length - 1];
    const before = text.slice(0, first.index).replace(/[,:;]\s*$/, "").trim();
    const after = text.slice(last.index + last.text.length).replace(/^[,.;]\s*/, "").trim();
    return `
      ${before ? renderReadableText(before) : ""}
      ${renderFormulaGroup(formulas.map((item) => item.text))}
      ${after ? renderReadableText(after) : ""}
    `;
  }

  const shapeRows = extractShapeRows(text);
  if (shapeRows.length >= 2) {
    const first = shapeRows[0];
    const last = shapeRows[shapeRows.length - 1];
    const before = text.slice(0, first.index).replace(/[,:;]\s*$/, "").trim();
    const after = text.slice(last.index + last.text.length).replace(/^[,.;]\s*/, "").trim();
    return `
      ${before ? renderReadableText(before) : ""}
      ${renderShapeTable(shapeRows)}
      ${after ? renderReadableText(after) : ""}
    `;
  }

  const sentences = text.split(/(?<=\.)\s+/).filter(Boolean);
  if (sentences.length >= 3) {
    return `<ul class="mini-list">${sentences.map((item) => `<li>${highlightText(item)}</li>`).join("")}</ul>`;
  }

  return `<p>${highlightText(text)}</p>`;
}

function theoryBullets(text) {
  return String(text)
    .split(/(?<=\.)\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function hasRealFormula(slide) {
  return slide.formulas?.some((item) => !item.expression.toLowerCase().includes("không có công thức"));
}

function hasQuestion(slide) {
  return slide.questions?.length > 0 && !slide.questions[0].includes("không có câu hỏi");
}

function searchableText(slide) {
  return [
    slide.deck,
    slide.title,
    slide.keywords?.join(" "),
    slide.theory || "",
    slide.example || "",
    slide.studyTable?.map((row) => `${row.label} ${row.value}`).join(" "),
    slide.answers?.map((item) => `${item.question} ${item.answer}`).join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

function filteredSlides() {
  const query = state.query.trim().toLowerCase();
  return state.slides.filter((slide) => {
    const matchesQuery = !query || searchableText(slide).includes(query);
    const matchesFilter =
      state.filter === "all" ||
      (state.filter === "formula" && hasRealFormula(slide)) ||
      (state.filter === "question" && hasQuestion(slide));
    return matchesQuery && matchesFilter;
  });
}

function renderStats() {
  const formulaCount = state.slides.filter(hasRealFormula).length;
  const questionCount = state.slides.filter(hasQuestion).length;
  els.courseStats.innerHTML = `
    <div class="stat"><strong>${state.decks.length}</strong><span>PDF</span></div>
    <div class="stat"><strong>${state.slides.length}</strong><span>Phần</span></div>
    <div class="stat"><strong>${questionCount}</strong><span>Q&A</span></div>
  `;
  els.courseStats.title = `${formulaCount} phần có công thức`;
}

function renderDeckList() {
  const visible = new Set(filteredSlides().map((slide) => slide.id));
  const current = state.slides[state.currentIndex];
  els.deckList.innerHTML = state.decks
    .map((deck) => {
      const deckSlides = state.slides.filter((slide) => slide.deckId === deck.deckId && visible.has(slide.id));
      if (!deckSlides.length) return "";
      return `
        <section class="deck-group">
          <button class="deck-button" data-first-slide="${deckSlides[0].id}">
            <strong>${escapeHtml(deck.deckId)} ${escapeHtml(deck.deck)}</strong>
            <span>${deckSlides.length}/${deck.slideCount} phần học</span>
          </button>
          <div class="slide-list">
            ${deckSlides
              .map(
                (slide) => `
                  <button class="slide-button${slide.id === current.id ? " active" : ""}" data-slide-id="${slide.id}">
                    <span class="num">Phần ${escapeHtml(slide.deckId)}</span>
                    <span class="name">${escapeHtml(slide.title)}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderOverview(slide) {
  return `
    <section class="lesson-section overview-section">
      <div class="section-heading"><span>01</span><h3>Bảng tóm tắt</h3></div>
      <div class="overview-grid">
        ${slide.studyTable
          .map(
            (row) => `
              <article class="overview-item">
                <h4>${escapeHtml(row.label)}</h4>
                ${renderReadableText(row.value)}
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTheory(slide) {
  const bullets = slide.theory ? theoryBullets(slide.theory) : slide.summary || [];
  return `
    <section class="lesson-section">
      <div class="section-heading"><span>02</span><h3>Lý thuyết cần nắm</h3></div>
      <article class="theory-card theory-card--single">
        <ul class="theory-list">
          ${bullets.map((item) => `<li>${renderReadableText(item)}</li>`).join("")}
        </ul>
      </article>
    </section>
  `;
}

function renderFormulas(slide) {
  return `
    <section class="lesson-section">
      <div class="section-heading"><span>03</span><h3>Công thức và ký hiệu</h3></div>
      <div class="formula-list">
        ${slide.formulas
          .map(
            (item) => `
              <article class="formula-card">
                ${renderFormulaGroup(splitFormulaList(item.expression))}
                <p>${highlightText(item.explanation)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderExample(slide) {
  return `
    <section class="lesson-section">
      <div class="section-heading"><span>04</span><h3>Ví dụ áp dụng</h3></div>
      <article class="example-box">
        ${renderReadableText(slide.example)}
        <p><strong>Cách tự kiểm tra:</strong> viết lại đầu vào, phép biến đổi, đầu ra và tiêu chí đánh giá bằng lời của mình.</p>
      </article>
    </section>
  `;
}

function renderDiagram(slide) {
  return `
    <section class="lesson-section">
      <div class="section-heading"><span>05</span><h3>Sơ đồ minh họa</h3></div>
      <div class="diagram-flow">${slide.diagram.nodes.map((node) => `<div class="diagram-node">${highlightText(node)}</div>`).join("")}</div>
      <p class="diagram-caption">${highlightText(slide.diagram.description)}</p>
    </section>
  `;
}

function renderQa(slide) {
  return `
    <section class="lesson-section">
      <div class="section-heading"><span>06</span><h3>Câu hỏi và đáp án</h3></div>
      <div class="qa-list">
        ${slide.answers
          .map(
            (item, index) => `
              <article class="qa-item">
                <h4>Câu ${index + 1}: ${highlightText(item.question)}</h4>
                <div>${renderReadableText(item.answer)}</div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderLesson(slide) {
  els.lessonContent.innerHTML = [
    renderOverview(slide),
    renderTheory(slide),
    renderFormulas(slide),
    renderExample(slide),
    renderDiagram(slide),
    renderQa(slide),
  ].join("");
}

function renderSlide() {
  const slide = state.slides[state.currentIndex];
  const progress = ((state.currentIndex + 1) / state.slides.length) * 100;
  els.progressCopy.textContent = `Phần ${state.currentIndex + 1}/${state.slides.length} · ${slide.deckId} ${slide.deck}`;
  els.progressBar.style.width = `${progress}%`;
  els.deckLabel.textContent = `Chương ${slide.chapter} · Phần ${slide.deckId}`;
  els.slideTitle.textContent = slide.title;
  els.keywordRow.innerHTML = slide.keywords.map((kw) => `<span class="keyword">${escapeHtml(kw)}</span>`).join("");
  els.sourceLink.href = encodeURI(slide.sourcePdf);
  els.prevSlide.disabled = state.currentIndex === 0;
  els.nextSlide.disabled = state.currentIndex === state.slides.length - 1;
  renderLesson(slide);
  renderDeckList();
}

function goToSlideById(id) {
  const nextIndex = state.slides.findIndex((slide) => slide.id === id);
  if (nextIndex >= 0) {
    state.currentIndex = nextIndex;
    renderSlide();
    els.sidebar.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function moveSlide(step) {
  const nextIndex = Math.min(Math.max(state.currentIndex + step, 0), state.slides.length - 1);
  if (nextIndex !== state.currentIndex) {
    state.currentIndex = nextIndex;
    renderSlide();
  }
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderDeckList();
  });

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
      renderDeckList();
    });
  });

  els.deckList.addEventListener("click", (event) => {
    const slideButton = event.target.closest("[data-slide-id]");
    const deckButton = event.target.closest("[data-first-slide]");
    if (slideButton) goToSlideById(slideButton.dataset.slideId);
    if (deckButton) goToSlideById(deckButton.dataset.firstSlide);
  });

  els.prevSlide.addEventListener("click", () => moveSlide(-1));
  els.nextSlide.addEventListener("click", () => moveSlide(1));
  els.openSidebar.addEventListener("click", () => els.sidebar.classList.add("open"));
  els.closeSidebar.addEventListener("click", () => els.sidebar.classList.remove("open"));
}

renderStats();
bindEvents();
renderSlide();

