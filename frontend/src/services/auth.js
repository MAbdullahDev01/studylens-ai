import { supabase } from "./supabaseClient";

// REGISTER
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}

// LOGIN
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

// LOGOUT
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

// GET CURRENT USER
export function getUser() {
  return supabase.auth.getUser();
}
