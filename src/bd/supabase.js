import { createClient } from '@supabase/supabase-js'
   const supabaseUrl = 'https://fkxucwzdtusaefgysoog.supabase.co'
   const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZreHVjd3pkdHVzYWVmZ3lzb29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2Mzk0MjksImV4cCI6MjAyMjIxNTQyOX0.uto3Yhbuhts13IW527tKrDNstxdO_w-Gr1nLf2lozFI'
   export const supabase = createClient(supabaseUrl, supabaseKey)