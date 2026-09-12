import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ReceiptScreen() {
  const { count } = useLocalSearchParams();
  const coffeeCount = parseInt(count, 10) || 1;
  const pricePerCup = 150; // Assume ₱150 per cup
  const totalBill = coffeeCount * pricePerCup;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Summary</Text>
      
      <View style={styles.receiptBox}>
        <View style={styles.receiptHeader}>
          <Text style={styles.receiptTitle}>Campus Coffee Shop</Text>
          <Text style={styles.dateText}>{new Date().toLocaleDateString()}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Fresh Brew</Text>
          <Text style={styles.value}>x {coffeeCount}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Price per cup</Text>
          <Text style={styles.value}>₱{pricePerCup}</Text>
        </View>
        
        <View style={styles.dashedDivider} />

        <View style={[styles.row, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total Bill:</Text>
          <Text style={styles.totalValue}>₱{totalBill}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F7F3EB',
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#3E2723',
    marginBottom: 30,
    marginTop: 20,
  },
  receiptBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#3E2723',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  receiptHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  receiptTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  dateText: {
    fontSize: 14,
    color: '#8D6E63',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#EFEBE9',
    marginBottom: 20,
  },
  dashedDivider: {
    height: 1,
    borderBottomWidth: 1.5,
    borderColor: '#D7CCC8',
    borderStyle: 'dashed',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#5D4037',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3E2723',
  },
  totalRow: {
    marginBottom: 0,
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  totalValue: {
    fontSize: 26,
    fontWeight: '900',
    color: '#D84315',
  },
});
