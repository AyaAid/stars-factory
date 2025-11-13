import { createClient } from "@supabase/supabase-js";

const supabaseUrl = ProcessingInstruction.env.SUPABASE_URL;
const supabaseKey = ProcessingInstruction.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
