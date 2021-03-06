import React, { createContext, useCallback, useState } from 'react';
import FourleavesAPI from '../apis/FourLeaves';

type WinnerState = {
  id: string;
  name: string;
  pictureUrl: string;
  profileLink?: string;
};

type StatisticsState = {
  ranked_users_amount: number;
};

type RaffleState = {
  pageId?: string;
  postId?: string;
  requirements: string[];
  winner: WinnerState;
  statistics: StatisticsState;
};

type RaffleContextData = RaffleState & {
  changePageId(pageId: string): void;
  changePostId(postId: string): void;
  raffleNow(): void;
  toggleCheckedRequirement(value: string): void;
};

export const RaffleContext = createContext<RaffleContextData>(
  {} as RaffleContextData,
);

export const RaffleProvider: React.FC = ({ children }) => {
  const [pageId, setPageId] = useState<string>();
  const [postId, setPostId] = useState<string>();
  const [winner, setWinner] = useState<WinnerState>({} as WinnerState);
  const [statistics, setStatistics] = useState<StatisticsState>(
    {} as StatisticsState,
  );
  const [requirements, setRequirements] = useState<string[]>([]);

  const changePageId = useCallback((updatedPageId: string) => {
    setPageId(updatedPageId);
  }, []);

  const changePostId = useCallback((updatedPostId: string) => {
    setPostId(updatedPostId);
  }, []);

  const raffleNow = useCallback(async () => {
    if (!postId) {
      return;
    }

    const {
      winner: updatedWinner,
      statistics: raffleStatistics,
    } = await FourleavesAPI.raffleAUserByPostAndRequirements(
      postId,
      requirements,
    );

    setWinner(updatedWinner);
    setStatistics(raffleStatistics);
    setPageId(undefined);
    setPostId(undefined);
    setRequirements([]);
  }, [postId, requirements]);

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
        raffleNow,
        toggleCheckedRequirement,
        winner,
        statistics,
      }}
    >
      {children}
    </RaffleContext.Provider>
  );
};
