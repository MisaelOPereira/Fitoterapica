import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../hooks/useAuth';

import { Button } from '../Button';
import { Input } from '../Input';

import { IoClose } from 'react-icons/io5';
import toast from 'react-hot-toast';

import './styles.css';

interface ModalProps {
  onClose(): void;
}

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const signUpFormSchema = yup.object().shape({
  name: yup.string()
            .required('Informe o nome'),
  email: yup.string()
            .required('Informe o e-mail')
            .email('E-mail inválido'),
  password: yup.string()
            .required('Informe a senha')
            .min(6, 'Deve possuir pelo menos 6 dígitos'),
  passwordConfirmation: yup.string()
                            .oneOf([
                              null, yup.ref('password')
                            ], 'As senhas devem ser iguais')
});

export function SignUpModal({ onClose }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpFormSchema),
    shouldFocusError: false
  });

  const { signUp } = useAuth();

  const handleSignUp: SubmitHandler<SignUpFormData> = data => {
    try {
      signUp(data);

      onClose();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, {
          duration: 1000
        });
      }
    }
  }

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="form-box" onClick={e => e.stopPropagation()}>
        <button onClick={onClose}>
          <IoClose />
        </button>
        
        <h1 className="signup-title">Faça seu cadastro:</h1>

        <form
          className="signup-form"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <Input
            type="text"
            placeholder="Nome"
            autoComplete="name"
            error={formState.errors.name}
            {...register('name')}
          />

          <Input
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            error={formState.errors.email}
            {...register('email')}
          />

          <Input
            type="password"
            placeholder="Senha"
            error={formState.errors.password}
            {...register('password')}
          />

          <Input
            type="password"
            placeholder="Confirme a senha"
            error={formState.errors.passwordConfirmation}
            {...register('passwordConfirmation')}
          />

          <Button type="submit">
            Criar conta
          </Button>
        </form>
      </div>
    </div>
  );
}