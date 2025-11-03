import { createClient } from '@supabase/supabase-js';

// These variables are expected to be in a .env file or environment variables
// For this project, they are provided in the prompt.
const supabaseUrl = 'https://lgbcbsmnkrupaihgjmre.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnYmNic21ua3J1cGFpaGdqbXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NzM1MzEsImV4cCI6MjA3NjU0OTUzMX0.f799LxErdja4EkqlToJtsx92XosRooolpLGimGXbMpQ';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL and anon key are required. Make sure to set them in your environment variables.');
  throw new Error('Supabase URL and anon key are required.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
