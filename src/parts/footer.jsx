function Footer({ activeTab, onTabChange }) {
  const tabs = [
    {
      id: "report",
      label: "Report",
      icon: "./image/house.svg",
      iconActive: "./image/house-active.svg", // optional – create an active version
    },
    {
      id: "protection",
      label: "Protection",
      icon: "./image/shield icon.svg",
      iconActive: "./image/shield-active.svg",
    },
    {
      id: "alerts",
      label: "Alerts",
      icon: "./image/bellgrey.svg",
      iconActive: "./image/bell-active.svg",
    },
  ];

  return (
    <div className="bg-[#ffffff] w-screen flex flex-row fixed bottom-0 left-0 right-0 border-t border-gray-200">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 flex flex-col justify-center items-center py-2 transition-colors ${
              isActive ? "text-[#007bff]" : "text-[#7c7d81]"
            }`}
          >
            <img
              src={isActive && tab.iconActive ? tab.iconActive : tab.icon}
              alt={tab.label}
              className="object-contain max-h-[30px]"
            />
            <p className="text-sm mt-1">{tab.label}</p>
          </button>
        );
      })}
    </div>
  );
}

export default Footer;