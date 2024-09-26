import manifest from "./manifest.gen.ts";
import { PreviewContainer } from "apps/utils/preview.tsx";

export interface State {
  name: string;
}

/**
 * @title Reviews App
 * @description This is the description of the app
 * @category Tools
 * @logo https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1/0ac02239-61e6-4289-8a36-e78c0975bcc8
 */
export default function App(props: State) {
  const state = {
    ...props,
  };

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
      name: "Reviews App",
      owner: "betoven",
      description: "This is the description of the app",
      logo: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1/0ac02239-61e6-4289-8a36-e78c0975bcc8",
      images: [],
      tabs: [],
    },
  };
};
