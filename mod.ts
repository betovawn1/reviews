import type { App, FnContext } from "@deco/deco";
import { fetchSafe } from "apps/utils/fetch.ts";
import { createHttpClient } from "apps/utils/http.ts";
import { PreviewContainer } from "apps/utils/preview.tsx";
import type { Secret } from "apps/website/loaders/secret.ts";
import manifest, { Manifest } from "./manifest.gen.ts";
import { ClientInterfaceExample } from "./utils/client.ts";

export type AppContext = FnContext<State, Manifest>;

export interface Props {
  /**
   * @title Account Name
   * @description erploja2 etc
   */
  account: string;

  /**
   * @title API token
   * @description The token for accessing your API
   */
  token?: Secret;
}

// Here we define the state of the app
// You choose what to put in the state
export interface State extends Omit<Props, "token"> {
  api: ReturnType<typeof createHttpClient<ClientInterfaceExample>>;
}

/**
 * @title App Template
 * @description This is an template of an app to be used as a reference.
 * @category Tools
 * @logo https://
 */
export default function App(props: Props): App<Manifest, State> {
  const { token, account: _account } = props;

  const _stringToken = typeof token === "string" ? token : token?.get?.() ?? "";

  const api = createHttpClient<ClientInterfaceExample>({
    base: `https://api.github.com/users/betovawn1`,
    // headers: new Headers({ "Authorization": `Bearer ${stringToken}` }),
    fetcher: fetchSafe,
  });

  // it is the state of the app, all data
  // here will be available in the context of
  // loaders, actions and workflows
  const state = { ...props, api };

  return {
    state,
    manifest,
  };
}

// It is important to use the same name as the default export of the app
export const preview = () => {
  return {
    Component: PreviewContainer,
    props: {
      name: "App Template",
      owner: "deco.cx",
      description: "This is an template of an app to be used as a reference.",
      logo: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1/0ac02239-61e6-4289-8a36-e78c0975bcc8",
      images: [],
      tabs: [],
    },
  };
};
