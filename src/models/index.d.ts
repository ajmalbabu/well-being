import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Preference {
  readonly id: string;
  readonly email: string;
  readonly gender: string;
  readonly description?: string;
  constructor(init: ModelInit<Preference>);
  static copyOf(source: Preference, mutator: (draft: MutableModel<Preference>) => MutableModel<Preference> | void): Preference;
}