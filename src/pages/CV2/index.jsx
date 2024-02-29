import {
  PDFViewer,
  Font,
  Document,
  Page,
  StyleSheet,
  View,
  Image,
  Text,
} from "@react-pdf/renderer";
import { avatar, email2, phone2 } from "../../assets/Images/Images"

const teal = "#00959C"

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Epilogue",
  },
  sectionHeading: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333333",
    textTransform: "uppercase",
  },
  content: { fontSize: "10px", color: "#6E6E6E" },
});

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const Cv2 = () => {
  return (
    <PDFViewer style={containerStyle}>
      <Document>
        <Page size="A4" style={styles.page}>
          {/* HEADER */}
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "40px",
              paddingLeft: "50px",
            }}
          >
            <View
              style={{
                padding: "5px",
                width: "170px",
                borderRadius: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={avatar}
                style={{
                  borderRadius: "100px",
                  width: "110px",
                  height: "110px",
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: "#E7F3F3",
                // height: "50px",
                padding: "20px 0",

                display: "flex",
                flexDirection: "row",
                gap: "10px",
                width: "100%",
              }}
            >
              <View
                style={{ backgroundColor: teal, width: "2px", height: "50px" }}
              ></View>
              <View>
                <Text
                  style={{
                    fontWeight: "900",
                    fontSize: "30px",
                    color: "#424646",
                  }}
                >
                  NAME <Text style={{ fontWeight: "400" }}>SURNAME</Text>
                </Text>
                <Text
                  style={{
                    fontSize: "18px",
                    color: "#424646",
                    textTransform: "uppercase",
                  }}
                >
                  PROFFESION
                </Text>
              </View>
            </View>
          </View>
          {/* CONTACT */}
          <View
            style={{
              width: "100%",
              paddingLeft: "50px",
              marginTop: "20px",
              display: "flex",
              flexDirection: "row",
              border: "2px solid gray",
            }}
          >
            {/* LEFT */}
            <View style={{ width: "40%" }}>
              {/* SECTION HEADING */}
              <Text style={styles.sectionHeading}>Contact</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "10px ",
                  alignItems: "flex-end",
                }}
              >
                <View
                  style={{
                    backgroundColor: teal,
                    width: "2px",
                    height: "50px",
                  }}
                ></View>
                <View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={phone2}
                      style={{ width: "10px", height: "16px" }}
                    />
                    <View style={{ fontSize: "10px", color: "#6E6E6E" }}>
                      <Text>Phone</Text>
                      <Text>+2 434-232-534234</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <Image
                      source={email2}
                      style={{ width: "14px", height: "16px" }}
                    />
                    <View style={{ fontSize: "10px", color: "#6E6E6E" }}>
                      <Text>Email</Text>
                      <Text>travisahmed@gmail.com</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* RIGHT */}
            <View style={{ width: "60%", paddingRight: "40px" }}>
              <Text style={styles.sectionHeading}>ABOUT ME</Text>
              <Text
                style={{
                  border: "2px solid green",
                  fontSize: "10px",
                  marginTop: "10px",
                  fontWeight: "400",
                  lineHeight: "1.4px",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
                ut ad. Ipsa, quae. Odit illum in facilis nostrum, quae quod
                officiis voluptas, nobis vitae possimus libero laudantium est ad
                accusantium.
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Cv2;
