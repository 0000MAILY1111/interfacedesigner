// src/config/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Variables de entorno que deberás configurar en tu archivo .env
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

// Crear y exportar el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);