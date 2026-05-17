import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Cliente público (read-only, RLS aplica). Usado en SSR/SSG de pages.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Cliente server-side con service_key (bypassa RLS). Solo en API routes.
export const supabaseAdmin = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_KEY;
  if (!serviceKey) {
    throw new Error("SUPABASE_SERVICE_KEY no configurada");
  }
  return createClient(supabaseUrl, serviceKey);
};
