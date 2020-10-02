import React, { useCallback, useState } from 'react';

export interface FormValues {
  name: string;
  interests: string;
  image: string;
}

interface Props {
  onCancel(): void;
  onSubmit(values: FormValues): void;
}

const CreatePandaForm = (props: Props) => {
  const [name, setName] = useState<string>('');
  const [interests, setInterests] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);

  const handleChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const handleChangeInterests = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInterests(event.target.value);
  }, []);

  const handleChangeImage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    const errors = [];
    if (name === '') {
      errors.push('Veuillez saisir un nom');
    }
    if (interests === '') {
      errors.push("Veuillez saisir des centres d'intérêt");
    }
    if (image === '') {
      errors.push('Veuillez saisir une image');
    }
    if (errors.length > 0) {
      setErrors(errors);
    } else {
      setErrors([]);
      props.onSubmit({
        name,
        interests,
        image,
      });
    }
    event.preventDefault();
  }, []);

  return (
    <form noValidate onSubmit={handleSubmit}>
      {errors && (
        <ul>
          {errors.map((error) => (
            <li style={{ color: 'red' }}>{error}</li>
          ))}
        </ul>
      )}
      <div>
        <label>
          Nom :
          <input type="text" name="name" required onChange={handleChangeName} />
        </label>
      </div>
      <div>
        <label>
          Centres d'intérêt :
          <input type="text" name="interests" required onChange={handleChangeInterests} />
        </label>
      </div>
      <div>
        <label>
          Image :
          <input type="text" name="image" required onChange={handleChangeImage} />
        </label>
      </div>

      <div>
        <input type="submit" value="Valider" />
        &nbsp;
        <button type="button" onClick={props.onCancel}>
          Annuler
        </button>
      </div>
    </form>
  );
};

export default CreatePandaForm;
