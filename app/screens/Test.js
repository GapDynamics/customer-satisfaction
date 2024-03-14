import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { ProgressBar } from 'react-native-progress';
import ViewPager from '@react-native-community/viewpager';

export default function Test() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = 3; // Total number of pages

  const handlePageChange = (e) => {
    setCurrentPage(e.nativeEvent.position);
  };

  const handleNextPage = () => {
    if (currentPage < pageCount - 1) {
      viewPagerRef.current.setPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      viewPagerRef.current.setPage(currentPage - 1);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.progressBarContainer}>
        <ProgressBar progress={(currentPage + 1) / pageCount} width={Dimensions.get('window').width - 40} />
      </View>
      <ViewPager style={styles.viewPager} onPageSelected={handlePageChange} initialPage={0}>
        {/* Render your paginated views here */}
        <View key="1" style={styles.pageContainer}>
          <Text>Page 1</Text>
        </View>
        <View key="2" style={styles.pageContainer}>
          <Text>Page 2</Text>
        </View>
        <View key="3" style={styles.pageContainer}>
          <Text>Page 3</Text>
        </View>
      </ViewPager>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePrevPage} disabled={currentPage === 0}>
          <Text>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPage} disabled={currentPage === pageCount - 1}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBarContainer: {
    marginBottom: 20,
  },
  viewPager: {
    flex: 1,
  },
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20,
  },
});
