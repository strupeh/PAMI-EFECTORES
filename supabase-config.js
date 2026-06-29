// ─── SUPABASE CONFIG ──────────────────────────────────────────────────────────
// Reemplazá estos valores con los de tu proyecto en https://supabase.com
// Los encontrás en: Project Settings → API → Project URL y anon/public key
const SUPABASE_URL  = 'https://TU_PROYECTO.supabase.co';
const SUPABASE_ANON = 'TU_ANON_KEY_AQUI';

// Contraseña simple para que solo el estudio pueda acceder
// Cambiala por algo que vos elijas
const APP_PASSWORD = 'pami2024';

// ─── CLIENTE ─────────────────────────────────────────────────────────────────
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON);

// ─── AUTH SIMPLE ─────────────────────────────────────────────────────────────
function checkAuth() {
  return sessionStorage.getItem('pami_auth') === APP_PASSWORD;
}

function requireAuth() {
  if (checkAuth()) return true;
  const pwd = prompt('🔐 Ingresá la contraseña del estudio:');
  if (pwd === APP_PASSWORD) {
    sessionStorage.setItem('pami_auth', pwd);
    return true;
  }
  alert('Contraseña incorrecta.');
  return false;
}
