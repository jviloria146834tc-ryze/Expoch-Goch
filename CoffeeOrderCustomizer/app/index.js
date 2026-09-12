import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function OrderScreen() {
  const [coffeeCount, setCoffeeCount] = useState(1);

  const addCup = () => {
    setCoffeeCount(coffeeCount + 1);
  };

  const removeCup = () => {
    if (coffeeCount > 1) {
      setCoffeeCount(coffeeCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Campus Coffee</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>How many cups?</Text>
        
        <View style={styles.counterContainer}>
          <Text style={styles.countText}>{coffeeCount}</Text>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={addCup}
            activeOpacity={0.7}
          >
            <Text style={styles.actionButtonText}>Add Cup</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.actionButton, coffeeCount <= 1 && styles.buttonDisabled]} 
            onPress={removeCup}
            activeOpacity={0.7}
          >
            <Text style={styles.actionButtonText}>Remove Cup</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Link href={{ pathname: '/receipt', params: { count: coffeeCount } }} asChild>
          <TouchableOpacity style={styles.receiptButton} activeOpacity={0.8}>
            <Text style={styles.receiptButtonText}>Review Order</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F7F3EB', // Warm cream background
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#3E2723', // Dark coffee brown
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#795548',
    marginTop: 4,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#3E2723',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5D4037',
    marginBottom: 24,
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  actionButton: {
    width: 200,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#D7CCC8', // Light brown
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#EFEBE9',
    opacity: 0.5,
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3E2723',
    minWidth: 50,
    textAlign: 'center',
    marginBottom: 10,
  },
  footer: {
    marginBottom: 20,
  },
  receiptButton: {
    backgroundColor: '#D84315', // Vibrant burnt orange
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#D84315',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  receiptButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
