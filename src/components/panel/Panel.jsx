import { useEffect, useState } from "react";
import productJson from "../../data/appData.json";
const Panel = () => {
  const { productFeatute } = productJson;
  const [tabActive, setTabActive] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const width = window?.innerWidth;
      const currentScroll = window?.pageYOffset;
      const lastImage = document.getElementById("lastImage")?.offsetTop;
      if (width >= 991) {
        if (currentScroll < lastImage) {
          document.getElementById("leftAside")?.classList.add("sticky");
        } else {
          document.getElementById("leftAside")?.classList.remove("sticky");
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tabHandler = (index) => {
    setTabActive(index);
  };

  return (
    <div id="leftAside" className="sticky top-0">
      <ul className="flex mb-5">
        {productFeatute.map((item, index) => {
          return (
            <li key={item?.id} className="mr-6">
              <a
                className={`uppercase text-slate-950 hover:font-medium ${
                  index === tabActive ? "font-medium" : ""
                }`}
                onClick={() => {
                  tabHandler(index);
                }}
                href="#"
              >
                {item?.title}
              </a>
            </li>
          );
        })}
      </ul>
      {productFeatute.map((item, index) => {
        return (
          <>
            {index === tabActive && (
              <div>
                {item?.description.map((des) => {
                  return <div key={index}>{des}</div>;
                })}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Panel;
