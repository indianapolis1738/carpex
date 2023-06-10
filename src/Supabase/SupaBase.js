import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wdmqfqwhaeaensfuurcy.supabase.co";

const supabaseKey = `${import.meta.env.VITE_REACT_APP_ANON_KEY}`;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
