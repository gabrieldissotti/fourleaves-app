import React, { createContext, useCallback, useState } from 'react';

type RaffleState = {
  pageId?: string;
  postId?: string;
  requirements: string[];
};

type RaffleContextData = RaffleState & {
  changePageId(pageId: string): void;
  changePostId(postId: string): void;
  toggleCheckedRequirement(value: string): void;
};

export const RaffleContext = createContext<RaffleContextData>(
  {} as RaffleContextData,
);

export const RaffleProvider: React.FC = ({ children }) => {
  const [pageId, setPageId] = useState<string>();
  const [postId, setPostId] = useState<string>();
  const [requirements, setRequirements] = useState<string[]>([]);

  const changePageId = useCallback((updatedPageId: string) => {
    setPageId(updatedPageId);
  }, []);

  const changePostId = useCallback((updatedPostId: string) => {
    setPostId(updatedPostId);
  }, []);

  const toggleCheckedRequirement = useCallback(
    (requirementValue: string) => {
      const isChecked = requirements?.find(item => item === requirementValue);

      if (isChecked) {
        setRequirements([
          ...requirements?.filter(item => item !== requirementValue),
        ]);
      } else {
        setRequirements([...requirements, requirementValue]);
      }
    },
    [requirements],
  );

  return (
    <RaffleContext.Provider
      value={{
        pageId,
        postId,
        requirements,
        changePageId,
        changePostId,
        toggleCheckedRequirement,
      }}
    >
      {children}
    </RaffleContext.Provider>
  );
};
