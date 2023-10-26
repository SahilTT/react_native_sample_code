import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ProductView from '../../components/productview/productView';
import supabase from '../../../supabase/supabaseInit';

function HomeScreen() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from('ElectricAppliances').select('*');
        if (error) {
          console.error('Error fetching data:', error);
        } else {
          setProducts(data || []);
          console.log(data);
        }
      } catch (e) {
        console.error('Error:', e);
      }
    }

    fetchData();
  }, []);

  const navigation = useNavigation();

  return (
    <ScrollView>
      {products.map((product) => (
        <TouchableWithoutFeedback
          key={product.id}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('ProductDetail', { product });
          }}
        >
          <ProductView product={product} />
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
}

export default HomeScreen;