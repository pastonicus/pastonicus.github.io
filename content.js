(function() {
  if (document.getElementById('qwen-sidebar')) {
    return;
  }

  const sidebar = document.createElement('iframe');
  sidebar.id = 'qwen-sidebar';
  sidebar.src = chrome.runtime.getURL('sidebar.html');
  sidebar.style.cssText = `
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    border: none;
    z-index: 2147483647;
  `;

  document.body.appendChild(sidebar);

  const closeButton = document.createElement('button');
  closeButton.id = 'qwen-sidebar-close';
  closeButton.innerHTML = '&times;';
  closeButton.style.cssText = `
    position: fixed;
    top: 10px;
    right: 410px;
    width: 30px;
    height: 30px;
    border: none;
    background: #ccc;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2147483647;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  `;

  closeButton.onclick = function() {
    document.body.removeChild(sidebar);
    document.body.removeChild(closeButton);
  };

  document.body.appendChild(closeButton);
})();
