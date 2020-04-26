export default function fontColor(themeColor) {
  switch (themeColor) {
    case "tomato":
      return {
        contentStyle: { background: themeColor, color: "white" },
        contentArrowStyle: { borderRight: "7px solid  " + themeColor },
        iconStyle: { background: themeColor, color: "white" },
      };
    case "lightblue":
      return {
        contentStyle: { background: themeColor, color: "#333" },
        contentArrowStyle: { borderRight: "7px solid  " + themeColor },
        iconStyle: { background: themeColor, color: "#333" },
      };
    case "pink":
      return {
        contentStyle: { background: themeColor, color: "#444" },
        contentArrowStyle: { borderRight: "7px solid  " + themeColor },
        iconStyle: { background: themeColor, color: "#444" },
      };
    case "lightseagreen":
      return {
        contentStyle: { background: themeColor, color: "#eee" },
        contentArrowStyle: { borderRight: "7px solid  " + themeColor },
        iconStyle: { background: themeColor, color: "#eee" },
      };
  }
}
