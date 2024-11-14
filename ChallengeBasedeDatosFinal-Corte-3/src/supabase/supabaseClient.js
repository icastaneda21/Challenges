// src/supabase/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
const SUPABASE_URL = 'https://naxxozkdbzsxaovjncpq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5heHhvemtkYnpzeGFvdmpuY3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNjU0MzQsImV4cCI6MjA0Njc0MTQzNH0.wp-TzEQuKPCpOreKIzZ_HAZAWuLXRyDgua7ia6RYtRA'; 

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
