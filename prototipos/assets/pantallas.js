// Navegación entre pantallas de un mismo prototipo.
function show(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
