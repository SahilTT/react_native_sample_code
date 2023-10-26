import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Card, Text, Button } from '@rneui/base';


interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
  price: string;
  
}

const ProductView: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <ImageBackground
        source={{ uri: product.image_url }}
        style={styles.imageBackground}
        onError={() => console.log("Image failed to load")}
      >
        <Text>{product.name}</Text>
      </ImageBackground>
      <Text style={styles.descriptionText}>{product.description}</Text>
      <Card.Divider />
      <View style={styles.priceButtonContainer}>
        <Text style={styles.priceText}>${product.price}</Text>
       
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    marginBottom: 16,
  },
  imageBackground: {
    height: 200,
  },
  descriptionText: {
    marginVertical: 8,
  },
  priceButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductView;