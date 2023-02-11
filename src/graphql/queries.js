/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncPreferences = /* GraphQL */ `
  query SyncPreferences(
    $filter: ModelPreferenceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPreferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        gender
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPreference = /* GraphQL */ `
  query GetPreference($id: ID!) {
    getPreference(id: $id) {
      id
      email
      gender
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPreferences = /* GraphQL */ `
  query ListPreferences(
    $filter: ModelPreferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        gender
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const preferenceByEmail = /* GraphQL */ `
  query PreferenceByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelPreferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    preferenceByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        gender
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
