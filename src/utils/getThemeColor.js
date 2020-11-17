const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#e9ebfb"
  if (theme === "dark") return "#15202b"
}

export default getThemeColor
