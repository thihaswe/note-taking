import CIcon from "@/common/c-icon";
import MyTabs from "@/components/tabs-menu";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ height: 600 }}>HomeScreen</Text>
      </ScrollView>

      {/* Floating Button */}
      <Pressable
        style={({ pressed }) => [
          styles.icon,
          {
            transform: [{ scale: pressed ? 0.92 : 1 }],
            opacity: pressed ? 0.7 : 1,
          },
        ]}
        onPress={() => setVisible(true)}
      >
        <CIcon type="AntDesign" name="plus-circle" size={48} color="black" />
      </Pressable>

      {/* Bottom Modal */}
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        {/* Overlay */}
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          {/* Bottom Sheet */}
          <View style={styles.sheet}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.title}>Bottom Sheet (80%)</Text>
              <Pressable
                style={(pressed) => [
                  {
                    transform: [{ scale: pressed ? 0.92 : 1 }],
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
                onPress={({}) => setVisible(false)}
              >
                <CIcon name="close" type="AntDesign" />
              </Pressable>
            </View>

            <MyTabs />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 20,
    bottom: 20,
    zIndex: 100,
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },

  sheet: {
    height: "80%", // ✅ 80% of screen height
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  close: {
    marginTop: 20,
    color: "blue",
  },
});
