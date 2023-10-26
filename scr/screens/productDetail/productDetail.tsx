import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

function ProductDetail({ route }) {
  const { product } = route.params;
  const [itemCount, setItemCount] = useState(1);

  const decreaseItemCount = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };

  const increaseItemCount = () => {
    setItemCount(itemCount + 1);
  };

  const addToCart = () => {
    // Achtions we want to perform on add to cart button
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image_url }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={decreaseItemCount} style={styles.counterButton}>
          <Text style={styles.counterButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.itemCount}>{itemCount}</Text>
        <TouchableOpacity onPress={increaseItemCount} style={styles.counterButton}>
          <Text style={styles.counterButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={addToCart} style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  counterButton: {
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 5,
  },
  counterButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemCount: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: 'mediumturquoise',
    padding: 12,
    borderRadius: 5,
  },
  addToCartButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ProductDetail;