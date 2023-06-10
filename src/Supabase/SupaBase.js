import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wdmqfqwhaeaensfuurcy.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkbXFmcXdoYWVhZW5zZnV1cmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzNDE4MDYsImV4cCI6MjAwMTkxNzgwNn0.8Fchbn0naXjN-mHjsrqV2l4o9clnv7LUb1XKtP9DbMg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
