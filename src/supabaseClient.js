// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nezbqzbapjnxuntdbwxo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lemJxemJhcGpueHVudGRid3hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNDE1NzYsImV4cCI6MjA2NjYxNzU3Nn0.QN_ZWEYgV2AczO6pFVrh-rTJY9McZHvcL3WUgZy6QZI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);