import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iapbjaurdvppkmtgbypy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcGJqYXVyZHZwcGttdGdieXB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk1OTQsImV4cCI6MjA2NDQ4NTU5NH0.hGYtIO6hMSaM0FxiPq8RuAzqBFZ-32KYaj3s73sexUw";

export const supabase = createClient(supabaseUrl, supabaseKey);
