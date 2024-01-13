import React from "react";

const Map = () => {
  return (
    <div className="google-map-code">
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d495.9149250212909!2d80.14630125644705!3d6.087601342303937!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1705150236714!5m2!1sen!2slk"
        width="300"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        aria-hidden="false"
      ></iframe>
    </div>
  );
};
export default Map;
