import { Colors } from "@/constants/theme";
import * as React from "react";
import { Dimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { ExpenseTab, IncomeTab, SavingTab } from ".";

export default function MyTabs() {
  const layout = Dimensions.get("window");
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "expense", title: "Expense" },
    { key: "income", title: "Income" },
    { key: "saving", title: "Saving" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        expense: ExpenseTab,
        income: IncomeTab,
        saving: SavingTab,
      })}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{ backgroundColor: Colors["dark"].background }}
        />
      )}
    />
  );
}
