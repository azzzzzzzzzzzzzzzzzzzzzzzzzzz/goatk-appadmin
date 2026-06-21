const chatMain = document.getElementById('chat-main');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

function sendMessage() {
  const text = chatInput.value.trim();
  if (text === '') return;

  const now = new Date();
  const jam = String(now.getHours() % 12 || 12).padStart(2, '0');
  const menit = String(now.getMinutes()).padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

  const row = document.createElement('div');
  row.className = 'msg-row msg-row--out';
  row.innerHTML = `
    <div class="bubble bubble--out">${text}</div>
    <p class="msg-time msg-time--out">${jam}:${menit} ${ampm}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline; vertical-align:middle;"><polyline points="20 6 9 17 4 12"/></svg>
    </p>
  `;
  chatMain.appendChild(row);
  chatInput.value = '';
  chatMain.scrollTop = chatMain.scrollHeight;
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});
