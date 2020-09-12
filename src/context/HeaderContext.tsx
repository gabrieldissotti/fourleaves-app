import React, { createContext, useCallback, useState } from 'react';

type HeaderState = {
  title: string;
  description: string;
};

type HeaderContextData = HeaderState & {
  changeHeaderTitleAndDescription(data: HeaderState): void;
};

export const HeaderContext = createContext<HeaderContextData>(
  {} as HeaderContextData,
);

export const HeaderProvider: React.FC = ({ children }) => {
  const [headerData, setHeaderData] = useState<HeaderState>({
    title: 'fourleav.es',
    description: 'uma nova experiência',
  });

  const changeHeaderTitleAndDescription = useCallback(
    (updateHeaderData: HeaderState) => {
      setHeaderData({
        title: updateHeaderData.title,
        description: updateHeaderData.description,
      });
    },
    [],
  );

  return (
    <HeaderContext.Provider
      value={{
        title: headerData.title,
        description: headerData.description,
        changeHeaderTitleAndDescription,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
