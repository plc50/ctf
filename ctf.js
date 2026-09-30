// La contraseña de cada nivel es el nombre de la página siguiente: nombre.html. Sin respuestas en el código.
document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const pw = document.querySelector('input').value.trim().toLowerCase();
  if (!/^[a-z]+$/.test(pw)) return (document.getElementById('error').textContent = 'Solo letras, sin espacios.');
  const r = await fetch(`${pw}.html`, { method: 'HEAD' }).catch(() => null);
  if (r?.ok) location.href = `${pw}.html`;
  else document.getElementById('error').textContent = '✗ Esa no es. ¡Sigue buscando!';
});
