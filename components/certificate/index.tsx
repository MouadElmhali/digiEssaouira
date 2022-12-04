// @ts-nocheck

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import { getCurrentUser } from "../utils";
import  cairo from "http://localhost:3000/fonts/Cairo/Cairo-Regular.ttf";

// Font.register({
//   family: "Almarai",
//   format: "truetype",

//   src: "https://fonts.gstatic.com/s/almarai/v12/tssoApxBaigK_hnnS_antnqWow.woff2",
// });

// Create styles

Font.register({
  family: "cairo",
  format: "truetype",
  src: cairo,
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    border: 10,
    borderColor: "#1EBDE3",
  },
  image: {
    height: "80px",
    width: "90px",
    marginTop: "40px",
    marginBottom: "40px",
  },
  section: {
    marginBottom: "40px",
    color: "black",
    fontFamily: "cairo",
  },
});

export default function MyDocument({ courseName }): JSX.Element {
  const currentUser = getCurrentUser();
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.section}>
          <Image src="/images/logo.png" style={styles.image} />
        </View>
        <View style={styles.section}>
          <Text>شهادة إتمام</Text>
          <Text> {currentUser.user_userName}</Text>
        </View>
        <View style={styles.section}>
          <Text> أكمل بنجاح دورة</Text>
          <Text> {courseName}</Text>
        </View>
      </Page>
    </Document>
  );
}
