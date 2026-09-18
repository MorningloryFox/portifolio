const systems = {
  rag: { label: 'KNOWLEDGE MESH / RAG', title: 'Do documento<br />à resposta<br /><em>rastreável.</em>', copy: 'Uma arquitetura RAG separa ingestão, representação vetorial, recuperação e geração para que a resposta mantenha o vínculo com a fonte.', nodes: ['DOCUMENTOS', 'CHUNK + EMBED', 'QDRANT', 'RETRIEVER', 'LLM', 'RESPOSTA + FONTES'] },
  agent: { label: 'AGENT CONTROL / ORCHESTRATION', title: 'Planejar, agir,<br />observar e<br /><em>revisar.</em>', copy: 'Um supervisor orquestra ferramentas especializadas, preservando controle humano e rastreabilidade de cada etapa do workflow.', nodes: ['INPUT', 'SUPERVISOR', 'RESEARCH TOOL', 'DATA TOOL', 'REVIEW TOOL', 'HUMAN CHECK'] },
  eval: { label: 'MODEL LENS / EVALUATION', title: 'Escolhas guiadas<br />por <em>evidência,</em><br />não hype.', copy: 'Casos sintéticos e critérios explícitos permitem comparar qualidade, relevância, custo e latência antes de uma decisão técnica.', nodes: ['CASOS SINTÉTICOS', 'EVAL RUNNER', 'QUALITY METRICS', 'COST + LATENCY', 'HUMAN REVIEW', 'DECISION LOG'] },
};
const blueprint = document.querySelector('#blueprint');
const label = document.querySelector('#architecture-label');
const title = document.querySelector('#architecture-title');
const copy = document.querySelector('#architecture-copy');
function renderSystem(key) {
  const system = systems[key];
  label.textContent = system.label;
  title.innerHTML = system.title;
  copy.textContent = system.copy;
  blueprint.innerHTML = system.nodes.map((node, index) => `<div class="blue-node n${index}"><span>0${index + 1}</span>${node}</div>${index < system.nodes.length - 1 ? '<i class="blue-line"></i>' : ''}`).join('');
}
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.project-card').forEach((item) => item.classList.toggle('active', item === card));
    renderSystem(card.dataset.project);
    document.querySelector('#systems').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
document.querySelector('#health').addEventListener('click', async () => {
  const result = document.querySelector('#health-result'); result.textContent = 'CHECKING FUNCTION…';
  try { const response = await fetch('/.netlify/functions/portfolio-health'); const data = await response.json(); result.textContent = response.ok ? `NETLIFY FUNCTION / ${data.status.toUpperCase()} / ${data.environment}` : 'NETLIFY FUNCTION / ERROR'; }
  catch { result.textContent = 'NETLIFY FUNCTION / AVAILABLE AFTER DEPLOY'; }
});
renderSystem('rag');
