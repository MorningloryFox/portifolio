const orbit = document.querySelector('#orbital');
const orbitTrigger = document.querySelector('#orbit-trigger');
orbitTrigger.addEventListener('click', () => {
  const spinning = orbit.classList.toggle('spinning');
  orbitTrigger.setAttribute('aria-pressed', String(spinning));
  orbitTrigger.querySelector('b').textContent = spinning ? '↖' : '↘';
});
const detail = document.querySelector('.role-detail');
document.querySelectorAll('.timeline-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.timeline-item').forEach((entry) => {
      entry.classList.toggle('active', entry === item);
      entry.setAttribute('aria-selected', String(entry === item));
    });
    detail.querySelector('.detail-period').textContent = item.dataset.period;
    detail.querySelector('h2').innerHTML = item.dataset.role.replace(' ', '<br />');
    detail.querySelector('.detail-company').textContent = item.dataset.company;
    detail.querySelector('.detail-copy').textContent = item.dataset.copy;
  });
});
document.querySelector('#health-check').addEventListener('click', async () => {
  const result = document.querySelector('#health-result');
  result.textContent = 'Verificando…';
  try {
    const response = await fetch('/.netlify/functions/portfolio-health');
    const payload = await response.json();
    result.textContent = response.ok ? `Function ativa: ${payload.status} · ${payload.environment}` : 'Function respondeu com falha.';
  } catch {
    result.textContent = 'Function disponível após o deploy na Netlify.';
  }
});
