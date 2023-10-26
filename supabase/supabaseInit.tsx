import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'REACT_NATIVE_SUPABASE_URL';
const supabaseKey = 'REACT_NATIVE_SUPABASE_ANON_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
