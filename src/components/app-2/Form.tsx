import {
  useRef,
  type ComponentPropsWithoutRef,
  type FormEvent,
  type ReactNode,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
  children: ReactNode;
};

const Form = ({ onSave, children, ...props }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    // formRef.current?.reset();
  }
  return (
    <form onSubmit={handleSubmit} {...props} ref={formRef}>
      {children}
    </form>
  );
};

export default Form;
