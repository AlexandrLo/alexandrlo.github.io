import React, { useContext, useEffect, useState } from "react";

import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { Button, Tooltip, VisuallyHidden } from "@chakra-ui/react";

import { DataContext } from "components/DataProvider";
import { getDownloadURL, ref } from "firebase/storage";

DownloadCVButton.propTypes = {
  compact: PropTypes.bool,
};

function DownloadCVButton({ compact = false }) {
  const { portfolioData, storage } = useContext(DataContext);
  const [cvUrl, setCvUrl] = useState(null);

  useEffect(() => {
    if (storage && portfolioData?.cvPath) {
      getDownloadURL(ref(storage, portfolioData.cvPath)).then((url) =>
        setCvUrl(url),
      );
    } else if (storage && !portfolioData?.cvPath) {
      setCvUrl(null);
    }
  }, [storage, portfolioData]);

  return compact ? (
    <Tooltip label="Скачать CV" hasArrow isDisabled={!portfolioData?.cvPath}>
      <Button
        as="a"
        href={cvUrl}
        variant="alpha"
        size="lg"
        opacity={portfolioData?.cvPath ? 1 : 0}
        transitionProperty="opacity"
      >
        <BsFileEarmarkArrowDownFill size={20} />
        <VisuallyHidden>Скачать CV</VisuallyHidden>
      </Button>
    </Tooltip>
  ) : (
    <Button
      as="a"
      href={cvUrl}
      variant="alpha"
      size="lg"
      w="100%"
      leftIcon={<BsFileEarmarkArrowDownFill size={20} />}
      opacity={portfolioData?.cvPath ? 1 : 0}
      transitionProperty="opacity"
    >
      Скачать CV
    </Button>
  );
}

export default DownloadCVButton;
