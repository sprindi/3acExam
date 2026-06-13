"use strict";

var TOTAL = 35;
var done = {};
var tfPick = {};

function counts() {
  var c = 0, w = 0, t = 0;
  for (var k in done) {
    if (!done.hasOwnProperty(k)) continue;
    t++;
    if (done[k] === 'correct') c++;
    else if (done[k] === 'wrong') w++;
  }
  return { c: c, w: w, t: t };
}

function upd() {
  var s = counts();
  document.getElementById('scC').textContent = s.c;
  document.getElementById('scW').textContent = s.w;
  document.getElementById('scT').textContent = s.t;
  var pct = Math.round(s.t / TOTAL * 100);
  document.getElementById('pfill').style.width = pct + '%';
  document.getElementById('ppct').textContent = pct + '%';
  document.getElementById('plbl').textContent = s.t + (s.t > 1 ? ' exercices faits' : ' exercice fait');
}

function tog(el) {
  var box = el.closest('.ex') || el.closest('.resume');
  if (box) box.classList.toggle('open');
}

document.querySelectorAll('.tab').forEach(function (t) {
  t.addEventListener('click', function () {
    document.querySelectorAll('.tab').forEach(function (x) { x.classList.remove('on'); });
    t.classList.add('on');
    var g = t.dataset.go;
    ['c1', 'c2', 'c3'].forEach(function (id) {
      document.getElementById(id).classList.toggle('hidden', g !== 'all' && g !== id);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

function pick(el) {
  var ex = el.closest('.ex');
  if (done[ex.id]) return;
  el.closest('.opts').querySelectorAll('.opt').forEach(function (o) { o.classList.remove('sel'); });
  el.classList.add('sel');
}

function ckQ(id, correct, expl, tip) {
  if (done[id]) return;
  var ex = document.getElementById(id);
  var opts = ex.querySelectorAll('.opt');
  var sel = -1;
  opts.forEach(function (o, i) { if (o.classList.contains('sel')) sel = i; });
  if (sel === -1) { fb(id, 'warn', "⚠️ Choisis une réponse d'abord."); return; }
  var ok = sel === correct;
  done[id] = ok ? 'correct' : 'wrong';
  opts[correct].classList.add('ok');
  if (!ok) opts[sel].classList.add('no');
  opts.forEach(function (o) { o.style.pointerEvents = 'none'; });
  upd();
  var msg = (ok ? '✅ Bravo ! ' : '❌ Faux. ') + expl;
  if (tip) msg += '<span class="tip">💡 ' + tip + '</span>';
  fb(id, ok ? 'good' : 'bad', msg);
}

function pTF(btn, id, idx, val) {
  if (done[id]) return;
  var row = btn.closest('.tf-row');
  row.querySelectorAll('.tfb').forEach(function (b) { b.classList.remove('pick-v', 'pick-f'); });
  btn.classList.add(val === 'V' ? 'pick-v' : 'pick-f');
  if (!tfPick[id]) tfPick[id] = {};
  tfPick[id][idx] = val;
}

function ckT(id, answers, expls) {
  if (done[id]) return;
  var ex = document.getElementById(id);
  var rows = ex.querySelectorAll('.tf-row');
  for (var i = 0; i < answers.length; i++) {
    if (!tfPick[id] || !tfPick[id][i]) { fb(id, 'warn', '⚠️ Réponds à toutes les phrases.'); return; }
  }
  var all = true, html = '';
  answers.forEach(function (cor, i) {
    var btns = rows[i].querySelectorAll('.tfb');
    btns.forEach(function (b) { b.style.pointerEvents = 'none'; });
    if (tfPick[id][i] !== cor) all = false;
    var cB = null, wB = null;
    btns.forEach(function (b) {
      if (b.textContent.trim() === (cor === 'V' ? 'Vrai' : 'Faux')) cB = b;
      if (b.textContent.trim() === (cor === 'V' ? 'Faux' : 'Vrai')) wB = b;
    });
    if (cB) cB.classList.add('show-ok');
    if (wB) wB.classList.add('show-no');
    html += '<div style="margin-top:5px"><b>' + (i + 1) + '.</b> ' + expls[i] + '</div>';
  });
  done[id] = all ? 'correct' : 'wrong';
  upd();
  fb(id, all ? 'good' : 'bad', (all ? '✅ Tout juste !' : '❌ Quelques erreurs. Corrections :') + html);
}

function ckM(id, correct, expl) {
  if (done[id]) return;
  var box = document.getElementById('m-' + id);
  var sels = box.querySelectorAll('select');
  for (var i = 0; i < sels.length; i++) {
    if (!sels[i].value) { fb(id, 'warn', '⚠️ Complète toutes les lignes.'); return; }
  }
  var all = true;
  sels.forEach(function (s, i) {
    s.disabled = true;
    if (s.value === correct[i]) {
      s.style.borderColor = 'var(--green)';
      s.style.background = 'rgba(47,214,166,.08)';
    } else {
      all = false;
      s.style.borderColor = 'var(--red)';
      s.style.background = 'rgba(255,107,107,.08)';
    }
  });
  done[id] = all ? 'correct' : 'wrong';
  upd();
  fb(id, all ? 'good' : 'bad', (all ? '✅ Parfait ! ' : '❌ Pas tout juste. ') + expl);
}

function fb(id, type, msg) {
  var f = document.getElementById('fb-' + id);
  if (!f) return;
  f.className = 'fb show ' + type;
  f.innerHTML = msg;
}

function rst(id) {
  var ex = document.getElementById(id);
  ex.querySelectorAll('.opt').forEach(function (o) { o.className = 'opt'; o.style.pointerEvents = ''; });
  ex.querySelectorAll('.tfb').forEach(function (b) { b.className = 'tfb'; b.style.pointerEvents = ''; });
  var m = document.getElementById('m-' + id);
  if (m) m.querySelectorAll('select').forEach(function (s) {
    s.disabled = false;
    s.value = '';
    s.style.borderColor = '';
    s.style.background = '';
  });
  var f = document.getElementById('fb-' + id);
  if (f) { f.className = 'fb'; f.innerHTML = ''; }
  if (done[id]) { delete done[id]; delete tfPick[id]; upd(); }
}
