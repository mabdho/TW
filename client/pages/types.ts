export type PageProps = {};

export type PageContextServer = {
  Page: (pageProps: PageProps) => JSX.Element;
  pageProps: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
};

export type PageContextClient = {
  Page: (pageProps: PageProps) => JSX.Element;
  pageProps: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
};

export type PageContext = PageContextServer | PageContextClient;