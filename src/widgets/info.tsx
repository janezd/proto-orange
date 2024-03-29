import React from "react";

const InfoWidget = ({settings}) => {
  return <>
      {settings.instances === null ? "No data." :
      `Data set with ${settings.instances} instances and ${settings.attributes} attributes.`}
    </>
};

InfoWidget.widgetName = "Info";
InfoWidget.settings = {instances: null, attributes: null};
InfoWidget.icon = (<><g>
  <path fill="#FFFFFF" d="M25,8H13v32h22V17c0-4.123-8-1-8-1C28,12,27,8,25,8z"/>
  <path fill="#333333" d="M28,6H13h-2v2v32v2h2h22h2v-2V16v-2L28,6z M35,40H13V8h12c2,0,3,4,2,8c0,0,8-3.123,8,1V40z"/>
</g>
  <g>
    <path fill="#333333" d="M19.99,27.094c0.03-0.77,0.331-1.953,0.659-2.533c0.718-0.329,1.959-0.55,3.145-0.55
		c0.719,0,1.708,0.108,2.176,0.302v10.743c0.578,0.081,1.487,0.274,1.955,0.495c0.085,0.302,0.136,0.965,0.136,1.541
		c0,0.223,0,0.414-0.025,0.607h-8.096c0.051-0.661,0.246-1.57,0.438-2.01c0.387-0.305,1.05-0.578,1.599-0.771v-7.824H19.99z"/>
    <path fill="#333333" d="M26.433,19.401c0,1.904-1.16,2.967-2.801,2.967c-1.869,0-2.87-1.033-2.87-2.967
		c0-1.677,1.194-2.772,2.87-2.772C25.272,16.629,26.433,17.63,26.433,19.401z"/>
  </g>
</>)

export default InfoWidget;