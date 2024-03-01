interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  props: UserProps;

  constructor(props: UserProps) {
    this.props = {
      ...props,
    };
  }
}
