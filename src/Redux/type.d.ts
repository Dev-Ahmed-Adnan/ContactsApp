interface Contact {
  name: string;
  status: string;
}

type State = {
  loading: boolean;
  success: Contact[] | boolean | undefined;
  failure: boolean;
  email?: string | undefined | null;
};

type Action = {
  type: string;
  data?: any;
};

type DispatchType = (arg: Action) => Action;
