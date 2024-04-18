import { FC, FormEvent, FormEventHandler, ReactNode } from 'react';

interface IFormProps {
  children: ReactNode;
  onSubmit?: (payload: FormEvent<HTMLFormElement>) => void;
  className?: string;
}

const Form: FC<IFormProps> = ({ children, onSubmit, className }) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (onSubmit && typeof onSubmit === 'function') onSubmit(e);
  };
  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

export { Form };
