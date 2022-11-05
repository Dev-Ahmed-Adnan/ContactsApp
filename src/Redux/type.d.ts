interface Contact {
  id: string;
  name: string;
  status: string;
}

type State = {
  loading: boolean;
  success: Contact[] | undefined;
  failure: boolean;
  email?: string | undefined | null;
  loggedIn?: boolean;
};

type Action = {
  type: string;
  data?: any;
};

type DispatchType = (arg: Action) => Action;
