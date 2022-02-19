import { gql } from "@apollo/client";

export const DEFINITIONS = gql`
  query Definitions {
    badgeDefinitions {
      id
      earnedBadgeCount
      metric {
        id
      }
      threshold
      ipfsURI
      description
    }
  }
`;

export const LEADERBOARD = gql`
  query Leaderboard {
    badgeWinners(first: 100, orderBy: earnedBadgeCount, orderDirection: desc) {
      id
      earnedBadgeCount
      earnedBadges {
        id
        timestampAwarded
      }
    }
  }
`;

export const WINNER = gql`
  query Winner($id: String!) {
    badgeWinner(id: $id) {
      id
      earnedBadgeCount
      earnedBadges {
        id
        timestampAwarded
      }
    }
  }
`;

export const FEED = gql`
  query Feed {
    earnedBadgeCounts(
      first: 100
      orderBy: globalBadgeNumber
      orderDirection: desc
    ) {
      globalBadgeNumber
      earnedBadge {
        id
        blockAwarded
        transactionHash
        timestampAwarded
        awardNumber
        badgeWinner {
          id
        }
        metadata {
          name
          value
        }
        definition {
          id
        }
      }
    }
  }
`;
