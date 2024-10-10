const DiamondIcon = ({ children, colorBg, colorText }) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.5" />
        </filter>
        <filter id="textShadow">
          <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.5" />
        </filter>
      </defs>
      <polygon
        points="50,0 100,50 50,100 0,50"
        fill={colorBg}
        filter="url(#shadow)"
      />
      <text
        x="50"
        y="70"
        fontSize="52"
        fontWeight="bold"
        textAnchor="middle"
        fill={colorText}
        stroke="#000"
        strokeWidth="1"
        filter="url(#textShadow)"
        style={{
          overflow: "visible",
          fontFamily: "Protest Strike, sans-serif",
          fontWeight: "400",
          fontStyle: "normal",
        }}
      >
        {children}
      </text>
    </svg>
  );
};

export default DiamondIcon;
