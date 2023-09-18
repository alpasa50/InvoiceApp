import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});

const MyPDF = () => {
  return (
    <PDFViewer>
      <Document>
        <Page>
          <View style={styles.container}>
            <Text style={styles.title}>Title 1</Text>
            <Text style={styles.title}>Title 2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyPDF;