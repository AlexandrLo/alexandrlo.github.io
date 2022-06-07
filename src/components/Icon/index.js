import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

function Icon({ name, size = 16, fill = "red" }) {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(
          `assets/icons/${name}.svg`
        );
        ImportedIconRef.current = namedImport;
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon width={size} height={size} fill={fill} />;
  }

  return null;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;
