// biome-ignore-all lint/suspicious/noExplicitAny: github context can have many properties depending on the event type

// context type no longer available since switch to esm
// https://github.com/actions/toolkit/commit/b05d26b3fa726947617a6300635d74a986b9f2ce
export interface PayloadRepository {
  [key: string]: any;
  full_name?: string;
  name: string;
  owner: {
    [key: string]: any;
    login: string;
    name?: string;
  };
  html_url?: string;
}

export interface WebhookPayload {
  [key: string]: any;
  repository?: PayloadRepository;
  issue?: {
    [key: string]: any;
    number: number;
    html_url?: string;
    body?: string;
  };
  pull_request?: {
    [key: string]: any;
    number: number;
    html_url?: string;
    body?: string;
  };
  sender?: {
    [key: string]: any;
    type: string;
  };
  action?: string;
  installation?: {
    id: number;
    [key: string]: any;
  };
  comment?: {
    id: number;
    [key: string]: any;
  };
}

export type GithubContext = {
  payload: WebhookPayload;
  eventName: string;
  sha: string;
  ref: string;
  workflow: string;
  action: string;
  actor: string;
  job: string;
  runAttempt: number;
  runNumber: number;
  runId: number;
  apiUrl: string;
  serverUrl: string;
  graphqlUrl: string;

  get issue(): {
    owner: string;
    repo: string;
    number: number;
  };
  get repo(): {
    owner: string;
    repo: string;
  };
};
