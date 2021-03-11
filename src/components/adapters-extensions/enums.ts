/**
 * DaoConstants as defined in the solidity DaoConstants.sol contract
 * and the available adapters as detailed here:
 * https://github.com/openlawteam/molochv3-contracts
 */
export enum DaoConstants {
  BANK = 'bank',
  CONFIGURATION = 'configuration',
  DISTRIBUTE = 'distribute',
  FINANCING = 'financing',
  GUILDKICK = 'guildkick',
  ONBOARDING = 'onboarding',
  OFFCHAINVOTING = 'offchainvoting',
  MANAGING = 'managing',
  RAGEQUIT = 'ragequit',
  TRIBUTE = 'tribute',
  VOTING = 'voting',
  WITHDRAW = 'withdraw',
}

/**
 * Voting adapter names as defined in the solidity voting adapter contracts
 * i.e. `string public constant ADAPTER_NAME = "VotingContract"`.
 *
 * @link https://github.com/openlawteam/molochv3-contracts/blob/master/contracts/adapters/voting
 */
export enum VotingAdapterName {
  OffchainVotingContract = 'OffchainVotingContract',
  VotingContract = 'VotingContract',
}