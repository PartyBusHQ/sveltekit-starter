import { createClient } from '@supabase/supabase-js';
import { Supabase_Anon_Key, Supabase_URL } from '$env/static/private';

const supabaseUrl = Supabase_URL;
const supabaseAnonKey = Supabase_Anon_Key;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
