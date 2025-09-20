(async function(){
  const ul = document.getElementById('tools');
  ul.innerHTML = 'Loading...';
  try{
    const tools = await db.listTools();
    const active = tools.filter(t=>t.active);
    if(active.length === 0){ ul.innerHTML = '<li>No tools available</li>'; return; }
    ul.innerHTML='';
    active.forEach(t=>{
      const li = document.createElement('li');
      li.innerHTML = `<strong>${t.title}</strong><br>${t.description||''}<br><a href="${t.url}" target="_blank">Open</a>`;
      ul.appendChild(li);
    })
  }catch(e){ ul.innerHTML = 'Error: '+e.message }
})();
